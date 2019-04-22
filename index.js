'use strict';

module.exports = function hasProtocol(str){
  return 'http://' === str.slice(0,7)
    || 'https://' === str.slice(0,8)
    || 'localhost://' === str.slice(0,12)
    || 'file:///' === str.slice(0,8);
};
