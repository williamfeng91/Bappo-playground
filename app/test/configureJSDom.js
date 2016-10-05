var jsdom = require('jsdom').jsdom;

var doc = jsdom('<!doctype html><html><body></body></html>');
global.document = doc;
global.window = doc.defaultView;
global.navigator = {
  userAgent: 'node.js',
};
