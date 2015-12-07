var clearValues = function(){
  $('[name=subject]').val("");
  $('[name=message]').val("");

}

Template.createticket.events({
  'submit form': function(event) {
    event.preventDefault();
    var username = Meteor.user().username;
    var name = Meteor.user().profile.name;
    var department = Meteor.user().profile.department;
    var email = Meteor.user().email;
    var topic = $('[name=topic]').val();
    var subject = $('[name=subject]').val();
    var message = $('[name=message]').val();

      Tickets.insert({
        username: username,
        name: name,
        department: department,
        email: email,
        topic: topic,
        subject: subject,
        message: message,
        createdAt: new Date()
    });
    clearValues()
    $('#CreateTicket')
        .on('hidden.bs.modal', function() {
          Router.go('/ticketview');
        })
        .modal('hide');
    alert("Ticket Created!");
  }
});

