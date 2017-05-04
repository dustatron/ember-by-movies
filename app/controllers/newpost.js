import Ember from 'ember';

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
    }
  },
});
