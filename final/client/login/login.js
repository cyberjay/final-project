/**
 * Created by JAIMARJOHN on 11/15/2015.
 */
Template.admin.events({
  'submit form': function(event){
    event.preventDefault();
    var username = $('[name=username]').val();
    var password = $('[name=password]').val();

    Meteor.loginWithPassword(username, password, function(error){
      if(error){
        console.log(error.reason);
      } else {
        Router.go("/tickets");
      }
    });
  }
});
