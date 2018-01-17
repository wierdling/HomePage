var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/', function (req, res, next) {
    var p = path.join(__dirname, '../views/pictures')
    var directories = walkDirsSync(p);
    res.render('pictures', { title: 'Pictures', directories: directories });
});

var walkSync = function (dir, filelist) {
    var path = path || require('path');
    var fs = fs || require('fs'),
        files = fs.readdirSync(dir);
    filelist = filelist || [];
    files.forEach(function (file) {
        if (fs.statSync(path.join(dir, file)).isDirectory()) {
            filelist = walkSync(path.join(dir, file), filelist);
        }
        else {
            filelist.push(file);
        }
    });
    return filelist;
};

var walkDirsSync = function (dir, dirlist) {
    var path = path || require('path');
    var fs = fs || require('fs'),
        files = fs.readdirSync(dir);
    dirlist = dirlist || [];
    files.forEach(function (directory) {
        if (fs.statSync(path.join(dir, directory)).isDirectory()) {
            dirlist = walkDirsSync(path.join(dir, directory), dirlist);
            dirlist.push(directory);
        }
    });
    return dirlist;
};

module.exports = router;