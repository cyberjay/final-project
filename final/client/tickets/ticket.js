Template.tickets.events({
  'click .logout': function(event){
    event.preventDefault();
    Meteor.logout();
    Router.go('/');
  },
  'click .vieww': function(event){
    event.preventDefault();
    Router.go('/ticketview');
  },
  'click .logo': function(event){
    event.preventDefault();
    Router.go('/tickets');
  }

});

