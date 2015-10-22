var options = {
    thumbnailData: [{
      title: 'Show Animals',
      count: 32,
      header: 'Katsuraku',
      description: 'OK',
      imageUrl: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTdJhYyNuFmDQPzZH7R5wQvliIZnATy8a7u_rEmXuCsZ3VZfQco3_gneA'
    },{
      title: 'Shose Courses',
      count: 25,
      header: 'Pikachu',
      description: 'OK',
      imageUrl: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTdJhYyNuFmDQPzZH7R5wQvliIZnATy8a7u_rEmXuCsZ3VZfQco3_gneA'
    }]
  };
  // React, please create an instance of this class and render that
  var element = React.createElement(ThumbnailList, options);

  // React, after you render this class, please place it in my body tag.
  React.render(element, document.querySelector('.container'));
