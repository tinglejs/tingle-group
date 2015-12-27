const Context = require('tingle-context');
const Demo = require('./GroupListDemo');
window.FastClick && FastClick.attach(document.body);

ReactDOM.render(<Demo/>, document.getElementById('TingleDemo'));