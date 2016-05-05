var React = require('react');

var UserProfiles = React.createClass({
	propTypes: {
		username: React.PropTypes.string.isRequired,
		bio: React.PropTypes.object.isRequired
	},
	render: function(){
		console.log(this.props.bio)
		return (
			<div>
			User Profile:
			<p>Username: {this.props.username}</p>
			</div>
		)

	}
});

module.exports = UserProfiles;