
/* eslint-env node */
const fs = require('fs');
const SHIELDS_URL = 'https://img.shields.io';

const GITHUB_REPO = 'write-api-doc';
const GITHUB_USER = 'ymc-github';
const TWITTER_USER = 'yemiancheng';
const PATH_TO_SAVE = '../write-api-doc/shields-status.md';

function githubCommitActivity({
  color = 'ff69b4', logo = 'Github', logoColor = 'ff69b4', style = 'popout-square',
}) {
  const name = 'GitHub commit activity';
  const prefix = '/github/commit-activity/m';
  const reslut = `${SHIELDS_URL}${prefix}/${GITHUB_USER}/${GITHUB_REPO}.svg?color=${color}&logo=${logo}&logoColor=${logoColor}&style=${style}`;
  return `![${name}](${reslut})`;
}
function githubRepoSize({
  label = 'github%20repo%20size', color = 'ff69b4', logo = 'Github', logoColor = 'ff69b4', style = 'popout-square',
}) {
  const name = 'GitHub repo size';
  const prefix = '/github/repo-size';
  const reslut = `${SHIELDS_URL}${prefix}/${GITHUB_USER}/${GITHUB_REPO}.svg?label=${label}&color=${color}&logo=${logo}&logoColor=${logoColor}&style=${style}`;
  return `![${name}](${reslut})`;
}


function githubPackageVersionBranch({
  branch = 'master', label = 'github%20package.json%20version%40master', color = 'ff69b4', logo = 'Github', logoColor = 'ff69b4', style = 'popout-square',
}) {
  const name = 'GitHub package.json version (branch)';
  const prefix = '/github/package-json/v';
  const reslut = `${SHIELDS_URL}${prefix}/${GITHUB_USER}/${GITHUB_REPO}/${branch}.svg?label=${label}&color=${color}&logo=${logo}&logoColor=${logoColor}&style=${style}`;
  return `![${name}](${reslut})`;
}
function travisComBranch({
  branch = 'master', label = 'Travis%20CI', color = 'ff69b4', logo = 'Travis%20CI', logoColor = 'ff69b4', style = 'popout-square',
}) {
  const name = 'Travis (.com) branch';
  const prefix = '/travis/com';
  const reslut = `${SHIELDS_URL}${prefix}/${GITHUB_USER}/${GITHUB_REPO}/${branch}.svg?label=${label}&color=${color}&logo=${logo}&logoColor=${logoColor}&style=${style}`;
  return `![${name}](${reslut})`;
}
function githubFollowers({
  label = 'github%20followers', color = 'ff69b4', logo = 'Github', logoColor = 'ff69b4', style = 'popout-square',
}) {
  const name = 'GitHub followers';
  const prefix = '/github/followers';
  const reslut = `${SHIELDS_URL}${prefix}/${GITHUB_USER}.svg?label=${label}&color=${color}&logo=${logo}&logoColor=${logoColor}&style=${style}`;
  return `![${name}](${reslut})`;
}
function twitterFollowers({
  label = `follow%20%40${TWITTER_USER}`, color = 'ff69b4', logo = 'Twitter', logoColor = 'ff69b4', style = 'popout-square',
}) {
  const name = 'Twitter Follow';
  const prefix = '/twitter/follow';
  const reslut = `${SHIELDS_URL}${prefix}/${TWITTER_USER}.svg?label=${label}&color=${color}&logo=${logo}&logoColor=${logoColor}&style=${style}`;
  return `![${name}](${reslut})`;
}

function githubContributors({
  label = 'github%20contributors', color = 'ff69b4', logo = 'Github', logoColor = 'ff69b4', style = 'popout-square',
}) {
  const name = 'GitHub contributors';
  const prefix = '/github/contributors-anon';
  const reslut = `${SHIELDS_URL}${prefix}/${GITHUB_USER}/${GITHUB_REPO}.svg?label=${label}&color=${color}&logo=${logo}&logoColor=${logoColor}&style=${style}`;
  return `![${name}](${reslut})`;
}
function githubLastCommit({
  label = 'github%20last%20commit%40master', color = 'ff69b4', logo = 'Github', logoColor = 'ff69b4', style = 'popout-square',
}) {
  const name = 'GitHub last commit';
  const prefix = '/github/last-commit';
  const reslut = `${SHIELDS_URL}${prefix}/${GITHUB_USER}/${GITHUB_REPO}.svg?label=${label}&color=${color}&logo=${logo}&logoColor=${logoColor}&style=${style}`;
  return `![${name}](${reslut})`;
}
function githubLastCommitBranch({
  branch = 'master', label = 'github%20last%20commit%40master', color = 'ff69b4', logo = 'Github', logoColor = 'ff69b4', style = 'popout-square',
}) {
  const name = 'GitHub last commit (branch)';
  const prefix = '/github/last-commit';
  const reslut = `${SHIELDS_URL}${prefix}/${GITHUB_USER}/${GITHUB_REPO}/${branch}.svg?label=${label}&color=${color}&logo=${logo}&logoColor=${logoColor}&style=${style}`;
  return `![${name}](${reslut})`;
}
function githubReleaseDate({
  label = 'github%20release%20date', color = 'ff69b4', logo = 'Github', logoColor = 'ff69b4', style = 'popout-square',
}) {
  const name = 'GitHub release date';
  const prefix = '/github/release-date';
  const reslut = `${SHIELDS_URL}${prefix}/${GITHUB_USER}/${GITHUB_REPO}.svg?label=${label}&color=${color}&logo=${logo}&logoColor=${logoColor}&style=${style}`;
  return `![${name}](${reslut})`;
}

function gitter({
  label = 'chat', color = 'ff69b4', logo = 'Github', logoColor = 'ff69b4', style = 'popout-square',
}) {
  const name = 'Gitter';
  const prefix = '/gitter/room';
  const reslut = `${SHIELDS_URL}${prefix}/${GITHUB_USER}/${GITHUB_REPO}.svg?label=${label}&color=${color}&logo=${logo}&logoColor=${logoColor}&style=${style}`;
  return `![${name}](${reslut})`;
}
function githubLanguageCount({
  label = 'languages', color = 'ff69b4', logo = 'Github', logoColor = 'ff69b4', style = 'popout-square',
}) {
  const name = 'GitHub language count';
  const prefix = '/github/languages/count';
  const reslut = `${SHIELDS_URL}${prefix}/${GITHUB_USER}/${GITHUB_REPO}.svg?label=${label}&color=${color}&logo=${logo}&logoColor=${logoColor}&style=${style}`;
  return `![${name}](${reslut})`;
}
function githubLanguageTop({
  color = 'ff69b4', logo = 'Github', logoColor = 'ff69b4', style = 'popout-square',
}) {
  const name = 'GitHub language top';
  const prefix = '/github/languages/top';
  const reslut = `${SHIELDS_URL}${prefix}/${GITHUB_USER}/${GITHUB_REPO}.svg?color=${color}&logo=${logo}&logoColor=${logoColor}&style=${style}`;
  return `![${name}](${reslut})`;
}

let reslut = '';
const config = {
  GITHUB_CONTRIBUTORS: 'deletes',
  GITHUB_LAST_COMMIT: 'deletes',
  // set githubLastCommitBranch to GITHUB_LAST_COMMIT_BRANCH:
  // slugfiy->undercsoped->swip case
  // set GITHUB_LAST_COMMIT_BRANCH to githubLastCommitBranch:
  // camelize
  GITHUB_LAST_COMMIT_BRANCH: 'sets',
  GITHUB_RELEASE_DATE: 'deletes',
  GITTER: 'sets',
  GITHUB_LANGUAGE_COUNT: 'sets',
  GITHUB_LANGUAGE_TOP: 'sets',
  TRAVIS_COM_BRANCH: 'sets',
  GITHUB_COMMIT_ACTIVITY: 'sets',
  GITHUB_PACKAGE_VERSION_BRANCH: 'sets',
  GITHUB_FOLLOWERS: 'sets',
  TWITTER_FOLLOWERS: 'sets',
  GITHUB_REPO_SIZE: 'sets',
};
const {
  GITHUB_CONTRIBUTORS,
  GITHUB_LAST_COMMIT,
  GITHUB_LAST_COMMIT_BRANCH,
  GITHUB_RELEASE_DATE,
  GITTER, GITHUB_LANGUAGE_COUNT,
  GITHUB_LANGUAGE_TOP,
  TRAVIS_COM_BRANCH,
  GITHUB_COMMIT_ACTIVITY,
  GITHUB_PACKAGE_VERSION_BRANCH,
  GITHUB_FOLLOWERS,
  TWITTER_FOLLOWERS,
  GITHUB_REPO_SIZE,
} = config;

if (TRAVIS_COM_BRANCH === 'sets') reslut += `\r\n${travisComBranch({})}`;
if (GITHUB_REPO_SIZE === 'sets') reslut += `\r\n${githubRepoSize({})}`;
if (GITHUB_CONTRIBUTORS === 'sets') reslut += `\r\n${githubContributors({})}`;
if (GITHUB_COMMIT_ACTIVITY === 'sets') reslut += `\r\n${githubCommitActivity({})}`;
if (GITHUB_LAST_COMMIT === 'sets') reslut += `\r\n${githubLastCommit({})}`;
if (GITHUB_LAST_COMMIT_BRANCH === 'sets') reslut += `\r\n${githubLastCommitBranch({})}`;
if (GITHUB_RELEASE_DATE === 'sets') reslut += `\r\n${githubReleaseDate({})}`;
if (GITTER === 'sets') reslut += `\r\n${gitter({})}`;
if (GITHUB_LANGUAGE_COUNT === 'sets') reslut += `\r\n${githubLanguageCount({})}`;
if (GITHUB_LANGUAGE_TOP === 'sets') reslut += `\r\n${githubLanguageTop({})}`;

if (GITHUB_PACKAGE_VERSION_BRANCH === 'sets') reslut += `\r\n${githubPackageVersionBranch({})}`;
if (GITHUB_FOLLOWERS === 'sets') reslut += `\r\n${githubFollowers({})}`;
if (TWITTER_FOLLOWERS === 'sets') reslut += `\r\n${twitterFollowers({})}`;

fs.writeFileSync(PATH_TO_SAVE, reslut, 'utf-8');
