var React = require('react');

var ReactDOM = require('react-dom');

// createClass creates a React component
var Main = React.createClass({
	render: function(){
		return: (
			<div>Hello World!</div>
		)

	}
})


// grabs the element div with id app and renders the main compoent to it
ReactDOM.render(<Main />, document.getElementById('app'))