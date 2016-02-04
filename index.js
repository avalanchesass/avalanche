#! /usr/bin/env node

var commandLineArgs = require('command-line-args');
var ncp             = require('ncp').ncp;
var replace         = require('replace');

var avalanchePath = __dirname;
var cli = commandLineArgs([
  { name: 'template', type: String },
  { name: 'type', type: String },
  { name: 'name', type: String },
  { name: 'path', type: String }
]);
var options = cli.parse();
var type = options.type ? options.type : 'Component';
var typeLower = type.toLowerCase();
var name = options.name ? options.name : 'Avalanche Project';
var nameLower = name.toLowerCase().replace(/ /g, '_');
var path = options.path ? options.path : process.cwd();

var projectReplacements = [
  {
    regex: 'PROJECT-NAME-LOWER',
    replacement: nameLower
  },
  {
    regex: 'PROJECT-NAME',
    replacement: name
  }
];
var packageReplacements = [
  {
    regex: 'PACKAGE-NAME-LOWER',
    replacement: nameLower
  },
  {
    regex: 'PACKAGE-NAME',
    replacement: name
  },
  {
    regex: 'PACKAGE-TYPE-LOWER',
    replacement: typeLower
  },
  {
    regex: 'PACKAGE-TYPE',
    replacement: type
  }
];

switch (options.template) {
  case 'project':
    var source = avalanchePath + '/template-project';
    var destination = path + '/' + nameLower;
    ncp(source, destination, function (err) {
      if (err) {
        return console.error(err);
      }
      runReplacements(projectReplacements, destination);
      console.log('Created a new project "' + name + '" in ' + destination + '.');
    });
    break;

  case 'package':
    var source = avalanchePath + '/template-package';
    var destination = path + '/' + nameLower;
    ncp(source, destination, function (err) {
      if (err) {
        return console.error(err);
      }
      runReplacements(packageReplacements, destination);
      console.log('Created a new package "' + name + '" in ' + destination + '.');
    });
    break;

  case 'package-custom':
    var source = avalanchePath + '/template-package/scss/_index.scss';
    var destination = path + '/_' + nameLower + '.scss';
    ncp(source, destination, function (err) {
      if (err) {
        return console.error(err);
      }
      runReplacements(packageReplacements, destination);
      console.log('Created a new custom package "' + name + '" in ' + destination + '.');
    });
    break;

  default:
    console.log('Invalid template type. Choose either "project" or "package".');
    break;
}

function runReplacements(replacements, path) {
  replacements.forEach(function (replaceDate) {
    replace({
      regex: replaceDate.regex,
      replacement: replaceDate.replacement,
      paths: [path],
      recursive: true,
      silent: true
    });
  });
}
