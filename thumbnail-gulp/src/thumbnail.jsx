var Thumbnail = React.createClass({
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
