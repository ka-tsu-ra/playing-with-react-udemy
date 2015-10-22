(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/kirsten.jones/k-projects/react-flux-udemy/thumbnail-gulp/src/app.jsx":[function(require,module,exports){
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

},{}]},{},["/Users/kirsten.jones/k-projects/react-flux-udemy/thumbnail-gulp/src/app.jsx"])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMva2lyc3Rlbi5qb25lcy9rLXByb2plY3RzL3JlYWN0LWZsdXgtdWRlbXkvdGh1bWJuYWlsLWd1bHAvc3JjL2FwcC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQSxJQUFJLE9BQU8sR0FBRztJQUNWLGFBQWEsRUFBRSxDQUFDO01BQ2QsS0FBSyxFQUFFLGNBQWM7TUFDckIsS0FBSyxFQUFFLEVBQUU7TUFDVCxNQUFNLEVBQUUsV0FBVztNQUNuQixXQUFXLEVBQUUsSUFBSTtNQUNqQixRQUFRLEVBQUUsZ0hBQWdIO0tBQzNILENBQUM7TUFDQSxLQUFLLEVBQUUsZUFBZTtNQUN0QixLQUFLLEVBQUUsRUFBRTtNQUNULE1BQU0sRUFBRSxTQUFTO01BQ2pCLFdBQVcsRUFBRSxJQUFJO01BQ2pCLFFBQVEsRUFBRSxnSEFBZ0g7S0FDM0gsQ0FBQztHQUNILENBQUM7RUFDRixpRUFBaUU7QUFDbkUsRUFBRSxJQUFJLE9BQU8sR0FBRyxLQUFLLENBQUMsYUFBYSxDQUFDLGFBQWEsRUFBRSxPQUFPLENBQUMsQ0FBQzs7RUFFMUQsc0VBQXNFO0VBQ3RFLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIgb3B0aW9ucyA9IHtcbiAgICB0aHVtYm5haWxEYXRhOiBbe1xuICAgICAgdGl0bGU6ICdTaG93IEFuaW1hbHMnLFxuICAgICAgY291bnQ6IDMyLFxuICAgICAgaGVhZGVyOiAnS2F0c3VyYWt1JyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnT0snLFxuICAgICAgaW1hZ2VVcmw6ICdodHRwczovL2VuY3J5cHRlZC10Ym4zLmdzdGF0aWMuY29tL2ltYWdlcz9xPXRibjpBTmQ5R2NUZEpoWXlOdUZtRFFQelpIN1I1d1F2bGlJWm5BVHk4YTd1X3JFbVh1Q3NaM1ZaZlFjbzNfZ25lQSdcbiAgICB9LHtcbiAgICAgIHRpdGxlOiAnU2hvc2UgQ291cnNlcycsXG4gICAgICBjb3VudDogMjUsXG4gICAgICBoZWFkZXI6ICdQaWthY2h1JyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnT0snLFxuICAgICAgaW1hZ2VVcmw6ICdodHRwczovL2VuY3J5cHRlZC10Ym4zLmdzdGF0aWMuY29tL2ltYWdlcz9xPXRibjpBTmQ5R2NUZEpoWXlOdUZtRFFQelpIN1I1d1F2bGlJWm5BVHk4YTd1X3JFbVh1Q3NaM1ZaZlFjbzNfZ25lQSdcbiAgICB9XVxuICB9O1xuICAvLyBSZWFjdCwgcGxlYXNlIGNyZWF0ZSBhbiBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGFuZCByZW5kZXIgdGhhdFxuICB2YXIgZWxlbWVudCA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGh1bWJuYWlsTGlzdCwgb3B0aW9ucyk7XG5cbiAgLy8gUmVhY3QsIGFmdGVyIHlvdSByZW5kZXIgdGhpcyBjbGFzcywgcGxlYXNlIHBsYWNlIGl0IGluIG15IGJvZHkgdGFnLlxuICBSZWFjdC5yZW5kZXIoZWxlbWVudCwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpKTtcbiJdfQ==
