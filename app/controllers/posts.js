import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    voteUp: function (id) {
      let movie = this.store.findRecord('post', id);
      movie.then(function(post) {
        post.incrementProperty('vote');

        post.save();
      });
    },
    voteDown: function(id) {
      let movie = this.store.findRecord('post', id);
      movie.then(function(post) {
        post.decrementProperty('vote');

        post.save();
      });
    }
  }
});
