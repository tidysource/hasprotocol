'use strict';

module.exports = function hasProtocol(str){
  return 'http://' === str.slice(0,6)
    || 'https://' === str.slice(0,7)
    || 'localhost://' === str.slice(0,11)
    || 'file:///' === str.slice(0,7);
};
