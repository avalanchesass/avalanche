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

switch (options.template) {
  case 'project':
    var source = avalanchePath + '/template-project';
    var destination = path + '/' + nameLower;
    ncp(source, destination, function (err) {
      if (err) {
        return console.error(err);
      }
      replace({
        regex: 'PROJECT-NAME-LOWER',
        replacement: nameLower,
        paths: [destination],
        recursive: true,
        silent: true
      });
      replace({
        regex: 'PROJECT-NAME',
        replacement: name,
        paths: [destination],
        recursive: true,
        silent: true
      });
      console.log('Created a new project "' + name + '" in ' + destination + '');
    });
    break;

  case 'package':
    var source = avalanchePath + '/template-package';
    var destination = path + '/' + nameLower;
    ncp(source, destination, function (err) {
      if (err) {
        return console.error(err);
      }
      replace({
        regex: 'PACKAGE-NAME-LOWER',
        replacement: nameLower,
        paths: [destination],
        recursive: true,
        silent: true
      });
      replace({
        regex: 'PACKAGE-NAME',
        replacement: name,
        paths: [destination],
        recursive: true,
        silent: true
      });
      replace({
        regex: 'PACKAGE-TYPE-LOWER',
        replacement: typeLower,
        paths: [destination],
        recursive: true,
        silent: true
      });
      replace({
        regex: 'PACKAGE-TYPE',
        replacement: type,
        paths: [destination],
        recursive: true,
        silent: true
      });
      console.log('Created a new package "' + name + '" in ' + destination + '');
    });
    break;

  default:
    console.log('Invalid template type. Choose either "project" or "package".');
    break;
}
