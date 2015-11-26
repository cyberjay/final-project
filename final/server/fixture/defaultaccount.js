/**
 * Created by JAIMARJOHN on 11/24/2015.
 */

//creates a default account
if ( Meteor.users.find().count() === 0 ) {
  var id = Accounts.createUser({
      email: 'admin@admin.com',
      username: 'admin',
      password: 'admin1234',
      profile: {
      name: 'Admin user',
      department: 'IT department'
    }

  });

  Roles.addUsersToRoles(id, 'admin');
}