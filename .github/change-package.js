'use strict';
// Do not forget to run `npm config set access public`
const fs = require('fs');
const packageFile = JSON.parse(fs.readFileSync('./package.json'));
const name = process.env['GITHUB_REPOSITORY']?.split('/');
if (!name?.[1]) {
    console.log('Empty GITHUB_REPOSITORY env variable');
    process.exit(1);
}
packageFile.name = '@umpacken/' + name[1];
fs.writeFileSync('./package.json', JSON.stringify(packageFile, null, 2));
