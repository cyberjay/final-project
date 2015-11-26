/**
 * Created by JAIMARJOHN on 11/24/2015.
 */


var clearValues = function(){
 $('[name=name]').val("");
 $('[name=department]').val("");
 $('[name=email]').val("");
 $('[name=username]').val("");
 $('[name=password]').val("");
 $('[name=accounttype]').val("");

}



Template.register.events({
  'submit form': function(event) {
    event.preventDefault();
    var name = $('[name=name]').val();
    var department = $('[name=department]').val();
    var email = $('[name=email]').val();
    var username = $('[name=username]').val();
    var password = $('[name=password]').val();
    var roles = $('[name=accounttype]').val();

    Meteor.call("createUsers", username, password, roles, name, email, department);
    return false;
  }

});

clearValues();

