'use strict';

/*
Imports
=======
*/
//Test framework
let test = require('tidytest');

//Module to test
let hasProtocol = require('../index.js');

/*
Tests
=====
*/
test('paramter type', function(assert){
  assert.plan(1);

  assert.throws(function(){
    return hasProtocol(null);
  }, 'Throws if parameter is not a string');
});

test('http://', function (assert){
  assert.plan(3);

  assert.ok(hasProtocol('http://'), 'Identical string');
  assert.ok(hasProtocol('http://hello'), 'String with append string');
  assert.notOk(hasProtocol('helloworldhttp://hello'), 'Prepend string');
});

test('https://', function (assert){
  assert.plan(3);

  assert.ok(hasProtocol('https://'), 'Identical string');
  assert.ok(hasProtocol('https://hello'), 'String with append string');
  assert.notOk(hasProtocol('helloworldhttps://hello'), 'Prepend string');
});

test('localhost://', function (assert){
  assert.plan(3);

  assert.ok(hasProtocol('localhost://'), 'Identical string');
  assert.ok(hasProtocol('localhost://hello'), 'String with append string');
  assert.notOk(hasProtocol('helloworldlocalhost://hello'), 'Prepend string');
});

test('file:///', function (assert){
  assert.plan(3);

  assert.ok(hasProtocol('file:///'), 'Identical string');
  assert.ok(hasProtocol('file:///'), 'String with append string');
  assert.notOk(hasProtocol('helloworldfile:///'), 'Prepend string');
});
