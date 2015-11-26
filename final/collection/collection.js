/**
 * Created by JAIMARJOHN on 11/24/2015.
 */
Tickets = new Meteor.Collection("tickets");


Tickets.allow({
  insert: function(userId, doc) {
    // only allow posting if you are logged in
    return !! userId;
  }
});

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish("tickets", function () {
    return Tickets.find()
  });


}

if (Meteor.isClient) {
  // This code only runs on the client
  Meteor.subscribe("tickets");
}
