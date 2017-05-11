import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    deletePost: function(id) {
      let thisPost = this.store.findRecord('post', id);
      thisPost.then(function(post) {
        post.deleteRecord();
        post.get('isDeleted'); // => true
        post.save(); // => DELETE to /posts/1
      })
    }
  }
});
