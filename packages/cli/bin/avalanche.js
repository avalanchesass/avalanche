#!/usr/bin/env node
const args = require(`args`);
const ncp = require(`ncp`);
const path = require(`path`);

const replaceRecursive = require(`../lib/replace-recursive.js`);

args.option(
  `project-name`,
  `Directory and package name for the new avalanche powered project.`,
  `New Project`
);

const options = args.parse(process.argv);
let projectName = options.projectName;

if (process.argv[2].substring(0, 1) !== `-`) {
  projectName = process.argv[2];
}

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
