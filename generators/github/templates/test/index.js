/* eslint-env mocha */

const assert = require('assert');
const path = require('path');
const File = require('vinyl');

const memFs = require('../');

const fixtureA = 'fixtures/file-a.txt';
const fixtureB = 'fixtures/file-b.txt';
const absentFile = 'fixture/does-not-exist.txt';
const coffeeFile = new File({
  cwd: '/',
  base: '/test/',
  path: '/test/file.coffee',
  // eslint-disable-next-line no-buffer-constructor
  contents: new Buffer('test = 123')
});

describe('mem-fs', () => {
  beforeEach(function () {
    process.chdir(__dirname);
    this.store = memFs.create();
  });

  describe('#get() / #add()', () => {
    it('load file from disk', function () {
      const file = this.store.get(fixtureA);
      assert.equal(file.contents.toString(), 'foo\n');
      assert.equal(file.cwd, process.cwd());
      assert.equal(file.base, process.cwd());
      assert.equal(file.relative, fixtureA);
      assert.equal(file.path, path.resolve(fixtureA));
    });

    it('get/modify/add a file', function () {
      const file = this.store.get(fixtureA);
      // eslint-disable-next-line no-buffer-constructor
      file.contents = new Buffer('bar');
      this.store.add(file);
      const file2 = this.store.get(fixtureA);
      assert.equal(file2.contents.toString(), 'bar');
    });

    it('retrieve file from memory', function () {
      this.store.add(coffeeFile);
      const file = this.store.get('/test/file.coffee');
      assert.equal(file.contents.toString(), 'test = 123');
    });

    it('returns empty file reference if file does not exist', function () {
      const file = this.store.get(absentFile);
      assert.equal(file.contents, null);
      assert.equal(file.cwd, process.cwd());
      assert.equal(file.base, process.cwd());
      assert.equal(file.relative, absentFile);
      assert.equal(file.path, path.resolve(absentFile));
    });
  });

  describe('#add()', () => {
    it('is chainable', function () {
      assert.equal(this.store.add(coffeeFile), this.store);
    });

    it('triggers change event', function (done) {
      this.store.on('change', () => {
        const file = this.store.get('/test/file.coffee');
        assert.equal(file.contents.toString(), 'test = 123');
        done();
      });
      this.store.add(coffeeFile);
    });
  });

  describe('#each()', () => {
    beforeEach(function () {
      this.store.get(fixtureA);
      this.store.get(fixtureB);
    });

    it('iterates over every file', function () {
      const files = [fixtureA, fixtureB];
      this.store.each((file, index) => {
        assert.equal(path.resolve(files[index]), file.path);
      });
    });

    it('is chainable', function () {
      assert.equal(this.store.each(() => {}), this.store);
    });
  });

  describe('#stream()', () => {
    beforeEach(function () {
      this.store.get(fixtureA);
      this.store.get(fixtureB);
    });

    it('returns an object stream for each file contained', function (done) {
      let index = 0;
      const files = [fixtureA, fixtureB];
      const stream = this.store.stream();

      stream.on('data', (file) => {
        assert.equal(path.resolve(files[index]), file.path);
        // eslint-disable-next-line no-plusplus
        index++;
      });

      stream.on('end', () => {
        assert.equal(index, 2);
        done();
      });
    });
  });
});
