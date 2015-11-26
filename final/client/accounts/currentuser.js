Template.currentuser.helpers({
  firstName: function() {
    return Meteor.user().username;
  }
});
