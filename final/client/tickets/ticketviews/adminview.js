/**
 * Created by JAIMARJOHN on 11/24/2015.
 */
Template.admin_view.ticket = function(){
  return Tickets.find({}, {sort: {createdAt: -1}});
};


Template.delet.events({
  'click .delete': function () {
    Tickets.remove(this._id);
  }
});

Template.registerHelper('createdAt', function(date) {
  return moment(date).format('MM-DD-YYYY');
});