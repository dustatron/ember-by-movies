import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    voteUp: function (param) {
      var movieVote = this.store.('post');
      console.log("up vote " + movieVote);
    }
  }
});
