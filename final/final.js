
if (Meteor.isClient) {
  }

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}

Router.route('/',{
  name: 'login',
  template: 'login'
});

Router.route('/tickets');

