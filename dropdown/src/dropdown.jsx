var React = require('react');
var Button = require('./button');
// var List = require('./list');
// Show a button and a list.
// This component should know when to show the list based on when the user clicks on a button.

module.exports = React.createClass({
  render: function() {
    return <div className="dropdown">
      <Button className="btn-default" title={this.props.title} subTitleClassName="caret" />
    </div>

  }

})