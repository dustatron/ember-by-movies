import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    voteUp: function () {
      var movieVote = this.get('post');
      console.log("up vote " + movieVote);
    }
  }
});
