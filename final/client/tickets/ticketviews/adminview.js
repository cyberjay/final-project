/**
 * Created by JAIMARJOHN on 11/24/2015.
 */
Template.admin_view.ticket = function(){
  return Tickets.find({}, {sort: {date_created: -1}});
}



