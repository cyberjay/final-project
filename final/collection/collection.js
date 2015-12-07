/**
 * Created by JAIMARJOHN on 11/24/2015.
 */
Tickets = new Meteor.Collection("tickets");


Tickets.allow({
  insert: function(userId, doc) {
    // only allow posting if you are logged in
    return !! userId;
  },
  remove: function(userId, doc) {
    // only allow posting if you are logged in
    return !! userId;
  }

});

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish("tickets1", function () {
  return Tickets.find({}, {sort: {createdAt: -1}})
  });

  Meteor.publish('tickets2', function(){
    return Tickets.find({username:Meteor.user().username}, {sort: {createdAt: -1}})
  });


}

if (Meteor.isClient) {
  // This code only runs on the client
  Meteor.subscribe("tickets1");
  Meteor.subscribe("tickets2");

}
