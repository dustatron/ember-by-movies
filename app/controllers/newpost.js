import Ember from 'ember';
var jQuery = Ember.$;

export default Ember.Controller.extend({
  sortProperties: ['timestamp'],
  sortAscending: false, // sorts post by timestamp
  actions: {
    publishPost: function() {
      var ytId = this.get('link').split("v=")[1];
      var newPost = this.store.createRecord('post', {
        title: this.get('title'),
        link: ytId,
        body: this.get('body'),
        vote: '0',
        timestamp: new Date().getTime()
      });
      newPost.save();
    },
    getSearchData: function() {
    var searchValue =this.get('searchString');
    var searchLink = "https://api.themoviedb.org/3/search/movie?api_key=749c2902bde6802d4268a80d0011ab0f&query=";
    var searchString = searchLink+searchValue;
    var Controller = this;
    jQuery.getJSON(searchString).then(function(json) {
      console.log(json.results);
       Controller.set('model', json.results);
     });
   },
   pushMovie: function(callback) {
     var linkRange = "https://api.themoviedb.org/3/movie/"
     var keys = '?api_key=749c2902bde6802d4268a80d0011ab0f&append_to_response=videos'
     var movieLink = linkRange+callback+keys;
     var jData;
     var that = this;

     let getMovie = function(callback) {
       jQuery.getJSON(movieLink, callback);
     }

     getMovie(function(json){
        var newMovie = that.store.createRecord('post', {
             title: json.title,
             tagline: json.tagline,
             date: json.release_date,
             image: json.poster_path,
             overview: json.overview,
             vote: '0',
             timestamp: new Date().getTime()
           });

           newMovie.save();

     });







    //  var theMovie = jQuery.getJSON(movieLink).then(function(json) {
    //    jData = json;
     //
    //  });

    // var movie = jQuery.getJSON(movieLink).then(function(json) {
    //   make(json);
    //
    // })

 }//actions,
 }
});
