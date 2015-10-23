var React = require('react');
var Button = require('./button');
// var List = require('./list');
// Show a button and a list.
// This component should know when to show the list based on when the user clicks on a button.

module.exports = React.createClass({
  handleClick: function() {
    alert('hello from dropdown');
  },
  render: function() {
    return <div className="dropdown">
      <Button
        whenClicked={this.handleClick}
        className="btn-default"
        title={this.props.title}
        subTitleClassName="caret"
        />
    </div>

  }

})

// Button component onClick outcome is set to this.props.whenClicked, so when the Dropdown component renders a Button inside it,
// you give it a whenClicked function and assign that to this.handleClick, which refers to the Dropdown component's hendleClikc function.
// So any component that renders a Button inside it can decide what the Button's onClick outcome will be. Makes the Button component
// reusable and adaptable, and you won't need to re-write any bit of Button again.
