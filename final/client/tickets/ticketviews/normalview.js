
Template.normal_view.ticket = function(){
  return Tickets.find({username:Meteor.user().username}, {sort: {createdAt: -1}});
};



Template.delet2.events({
  'click .delete': function () {
    Tickets.remove(this._id);
  }
});

Template.registerHelper('createdAt', function(date) {
  return moment(date).format('MM-DD-YYYY');
});


