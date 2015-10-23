var React = require('react');
var Dropdown = require('./dropdown')

var options = {
  title: 'Choose a dessert', // what shows up on the button to open/close the dropdown
  items: [
    'Apple Pie',
    'Peach Cobbler',
    'Coconut Cream Pie'
  ]
};
// React, please create an instance of this class and render that
var element = React.createElement(Dropdown, options);

// React, after you render this class, please place it in my body tag.
React.render(element, document.querySelector('.container'));
