Meteor.methods({
  createUsers: function(username,password,roles, name, email, department){
    var users = [{name:name, email:email, username:username,roles:[roles], department:department}
    ]
    _.each(users, function (user) {
      var id;
      id = Accounts.createUser({
        email: email,
        username: user.username,
        password: password,
        profile: {name: name,
                  department: department}

      });
      if (user.roles.length > 0) {
        Roles.addUsersToRoles(id, user.roles);
      }
    });
  }

});