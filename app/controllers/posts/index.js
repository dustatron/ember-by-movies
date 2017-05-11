import Ember from 'ember';
var countUp = 2;
var countDown = 2;

export default Ember.Controller.extend({

  actions: {

    voteUp: function (id) {
      let movie = this.store.findRecord('post', id);
      movie.then(function(post) {
        if(countUp > 0) {
        post.incrementProperty('vote');
        countUp -= 1;
        post.save();
      }


      });
    },
    voteDown: function(id) {
      let movie = this.store.findRecord('post', id);
      movie.then(function(post) {
        if(countDown > 0) {
          post.decrementProperty('vote');
          countDown -= 1;
          post.save();
        }

      });
    }
  }
});
