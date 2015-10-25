var React = require('react');

module.exports = React.createClass({
  handleClick: function() {
    this.props.whenItemClicked(this.props.item);
  },

  render: function() {
    return <li><a onClick={this.handleClick}>{this.props.item}</a></li>
  }
});

// could have put this.props.whenItemClicked directly into the render function for list-tem.
// here abstracted it into handleClick function so you could have multiple different actions on the click event
