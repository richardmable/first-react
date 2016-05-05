var React = require('react');

var UserProfiles = React.createClass({
	render: function(){
		return (
			<div>
			User Profile:
			<p>Username: {this.props.username}</p>
			<p>Bio: {this.props.bio.name} </p>

			</div>
		)

	}
});

module.exports = UserProfiles;