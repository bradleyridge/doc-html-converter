
'use strict'
var mammoth = require('mammoth');
const through2 = require('through2');
const replaceExt = require('replace-ext');



module.exports = () => {
  return through2.obj((file, enc, cb) => {
      
    if (file.isNull()) return cb(null, file);
    if (file.isStream()) return cb(new PluginError('[gulp-docx]: ', 'Stream is not supported'));
      
      //creates a thread, and when complete (.then method), adds a callback
      mammoth.convertToHtml({path: file.path})
        .then(function(result){
            var output = result.value;
            var bufferedOutput = new Buffer(output);
            file.contents = bufferedOutput;
            file.path = replaceExt(file.path, '.html');
            cb(null, file);
      }).done();

  });
};



