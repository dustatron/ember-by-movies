import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  date: DS.attr('string'),
  image: DS.attr('string'),
  overview: DS.attr('string'),
  tagline: DS.attr('string'),
  vote: DS.attr('number'),
  runTime: DS.attr('string'),
  imdb: DS.attr('string'),
  revenue: DS.attr('string'),
  trailer: DS.attr('string'),
  timestamp: DS.attr('number'),
});
