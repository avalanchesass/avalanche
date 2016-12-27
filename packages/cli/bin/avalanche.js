#!/usr/bin/env node
const commandLineArgs = require(`command-line-args`);
const ncp = require(`ncp`);
const path = require(`path`);

const replaceRecursive = require(`../lib/replace-recursive.js`);

const optionDefinitions = [
  { name: `project-name`, type: String, defaultOption: true },
];
const options = commandLineArgs(optionDefinitions);

const projectName = options[`project-name`];
if (!projectName) throw new Error(`Provide a project name.`);

const projectNameCleaned = projectName
  .toLowerCase()
  .split(` `)
  .join(`-`);

const replacements = [
  {
    regex: `PROJECT-NAME-CLEANED`,
    replacement: projectNameCleaned,
  },
  {
    regex: `PROJECT-NAME`,
    replacement: projectName,
  },
];

const packagePath = path.resolve(__dirname, `../`);
const source = path.join(packagePath, `templates`, `default`);
const destination = path.join(process.cwd(), projectNameCleaned);

ncp(source, destination, (error) => {
  if (error) throw error;

  replaceRecursive(replacements, destination);

  // eslint-disable-next-line no-console
  console.info(`Created a new avalanche project "${projectName}" in ${destination}.`);
});
