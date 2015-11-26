/**
 * Created by JAIMARJOHN on 11/15/2015.
 */

var clearValues = function(){
  $('[name=username]').val("");
  $('[name=password]').val("");

}
Template.logging_in.events({
  'submit form': function(event){
    event.preventDefault();
    var username = $('[name=username]').val();
    var password = $('[name=password]').val();


    Meteor.loginWithPassword(username, password, function(error){
      if(error){
       alert(error.reason);
      } else {
          clearValues()
          Router.go("/tickets");
      }

    });
  }
});

