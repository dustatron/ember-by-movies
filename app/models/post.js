import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  tagline: DS.attr('string'),
  date: DS.attr('string'),
  image: DS.attr('string'),
  overview: DS.attr('string'),
  tagline: DS.attr('string'),
  vote: DS.attr('number'),
  timestamp: DS.attr('number'),
  trailer: DS.attr('string')
});
