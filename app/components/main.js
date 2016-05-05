var React = require('react');

// createClass creates a React component
var Main = React.createClass({
	render: function(){
		return (
			<div className="main-container">
				<nav className="navbar navbar-default" role="navigation">
					<div className="col-sm-7 col-sm-offset-2" style={{marginTop: 15}}>
						MENU
					</div>
				</nav>
				<div className="container">
					{this.props.children}
				</div>
			</div>
		)

	}
})


// whenever we require Main, we are going to get the component above
module.exports = Main;