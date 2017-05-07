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
    var searchLink = "http://api.themoviedb.org/3/search/movie?api_key=749c2902bde6802d4268a80d0011ab0f&query=";
    var searchString = searchLink+searchValue;
     var Controller = this;
      jQuery.getJSON(searchString).then(function(json) {
      console.log(json.results);
       Controller.set('model', json.results);
     });
   },
   pushMovie: function(id) {
     var newMovie = this.store.createRecord('post', {
       title: this.get('title'),
       date: this.get('date'),
       image: this.get('image'),
       overview: this.get('overview')
     });
     console.log(id);
     newMovie.save();
   }
 }//actions,
});
