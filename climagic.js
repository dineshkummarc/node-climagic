nom = require('nom');

cmd = function(){nom("http://climagic.org", function(err, $){
                console.log($('tt').text());
      });
}

exports.cmd = cmd;
