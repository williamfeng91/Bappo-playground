var jsdom = require('jsdom').jsdom;

var doc = jsdom('');
global.document = doc;
global.window = doc.defaultView;
console.log('hahahahahah');
global.navigator = {
  userAgent: 'node.js',
};
