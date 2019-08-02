/* eslint-env node */
const projectData = {
  name: 'First',
  type: 'dir',
  fileData: [
    {
      name: 'css',
      type: 'dir'
    },
    {
      name: 'js',
      type: 'dir'
    },
    {
      name: 'image',
      type: 'dir'
    },
    {
      name: 'index.html',
      type: 'file',
      content: '<html>\n\t<head>\n\t\t<title>BaiDu</title>\n\t</head>\n\t<body>\n\t\t<h1><a href="http://www.baidu.com">BD</a></h1>\n\t</body>\n</html>'
    }
  ]
};
const fs = require('fs');

if (projectData.name) {
  fs.mkdirSync(projectData.name);
  const fileData = projectData.fileData;
  if (fileData && fileData.forEach) {
    fileData.forEach((f) => {
      // eslint-disable-next-line no-param-reassign
      f.path = `${projectData.name}/${f.name}`;
      // eslint-disable-next-line no-param-reassign
      f.content = f.content || '';
      switch (f.type) {
        case 'dir':
          fs.mkdirSync(f.path);
          break;
        case 'file':
          fs.writeFileSync(f.path, f.content, 'utf-8');
          break;
        default:
          break;
      }
    });
  }
}
