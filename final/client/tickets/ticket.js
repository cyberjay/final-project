Template.register.events({
  'submit form': function(event){
    event.preventDefault();
    var fname = $('[name=fname]').val();
    var lname = $('[name=lname]').val();
    var username = $('[name=username]').val();
    var password = $('[name=password]').val();
    var accounttype = $('[name=accounttype]').val();
    Accounts.createUser({
      firstname: fname,
      lastname: lname,
      username: username,
      password: password,
      accounttype: accounttype
    }, function(error){
      if(error){
        console.log(error.reason); // Output error if registration fails
      } else {
        Router.go("/tickets"); // Redirect user if registration succeeds
      }});
  }
});

Template.tickets.events({
  'click .logout': function(event){
    event.preventDefault();
    Meteor.logout();
    Router.go('/');
  }
});

