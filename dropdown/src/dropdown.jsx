var React = require('react');
var Button = require('./button');
var ListItem = require('./list-item');
// Show a button and a list.
// This component should know when to show the list based on when the user clicks on a button.

module.exports = React.createClass({
  handleClick: function() {
    this.setState({open: !this.state.open});
  },

  getInitialState: function() {
    return { open: false }
    // Creates an open object in the state of Dropdown. Now this.state.open exists and it's set to false initially.
  },

  handleItemClick: function(item) {
    console.log(item);
  },
  // gets run only once, when the component gets rendered.
  render: function() {
    // items comes from the options object
    var list = this.props.items.map(function(item){
      return <ListItem item={item} whenItemClicked={this.handleItemClick} />
  }.bind(this));
    // builds up the list. Refers to items in the options variable in app.jsx which is passed into Dropdown when it's created, also in app.jsx.
    // maps over that list of items in var options and creates a ListItem component for each element where item (which is referring to this.props.item inside ListItem component) is equal to the item mapped over from the options object.
    // Probably building up an array. Then looks like in the render of Dropdown {list} between the <ul>s converts into the <li> elements. (??)

    return <div className="dropdown">
      <Button
        whenClicked={this.handleClick}
        className="btn-default"
        title={this.props.title}
        subTitleClassName="caret"
        />
      <ul className={"dropdown-menu " + (this.state.open ? "show" : "") }>
        {list}
      </ul>
    </div>

  }
  // To display the items in the dropdown the class has to be "dropdown-menu show". This adds the 'show' part
  // only if the 'open' state of the Dropdown component is truthy.
})

// Button component onClick outcome is set to this.props.whenClicked, so when the Dropdown component renders a Button inside it,
// you give it a whenClicked function and assign that to this.handleClick, which refers to the Dropdown component's hendleClikc function.
// So any component that renders a Button inside it can decide what the Button's onClick outcome will be. Makes the Button component
// reusable and adaptable, and you won't need to re-write any bit of Button again.
