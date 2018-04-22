const { resolve } = require('path');
const { readdirSync } = require('fs');
const { reduce, extend } = require('lodash');

function getProductionState(env) {
  return env === 'production';
}

function getFileName(production) {
  return production ? '[name].min' : '[name]';
}

function getProjectEntries(projectsPath, projectName, indexFileName) {
  const projectPath = resolve(projectsPath, projectName);
  const folders = readdirSync(projectPath);

  let folderName = null;

  return reduce(folders, (result, folder) => {
    folderName = folder.toLowerCase();

    if (folderName === 'shared') return result;

    return extend({
      [folderName]: resolve(projectPath, folder, indexFileName)
    }, result);
  }, {});
}

module.exports = {
  getProductionState,
  getFileName,
  getProjectEntries
};
