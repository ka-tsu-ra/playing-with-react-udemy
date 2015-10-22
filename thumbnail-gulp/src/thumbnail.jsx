var React = require('react'); // require with keyword for modules
var Badge = require('./badge'); // to require code from other components I write, have to give the path.

module.exports = React.createClass({
  render: function() {
    return <div className="thumbnail">
      <img src={this.props.imageUrl} />
      <div className="caption">
        <h3>{this.props.header}</h3>
        <p>{this.props.description}</p>
        <p>
          < Badge title={this.props.title} count={this.props.count} />
        </p>
      </div>
    </div>
  }
});
