import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  link: DS.attr('string'),
  body: DS.attr('string'),
  vote: DS.attr('number'),
  timestamp: DS.attr('number')
});
