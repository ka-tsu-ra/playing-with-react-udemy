var ThumbnailList = React.createClass({
  render: function() {
    var list = this.props.thumbnailData.map(function(thumbnailProps){
      return < Thumbnail {...thumbnailProps}/>
      // This shortcut passes in all of the props for each Thumbnail created. So each one gets its relevant props.
      // Works by refering to the placeholder 'thumbnailProps' used in the map function.
    })
    return <div>{list}</div>
  }
});
