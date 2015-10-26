const Context = require('tingle-context');
const Demo = require('./GroupListDemo');
window.FastClick && FastClick.attach(document.body);

React.render(<Demo/>, document.getElementById('TingleDemo'));