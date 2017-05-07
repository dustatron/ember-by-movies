import DS from 'ember-data';

export default DS.ActiveModelAdapter.extend({
  host: 'http://api.themoviedb.org',
  namespace: '3/search/movie',

  pathForType() {
    return "?api_key=749c2902bde6802d4268a80d0011ab0f&query=batman";
  }

});
