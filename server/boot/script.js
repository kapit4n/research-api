/*
'use strict';
// uncomment this to migrate tables on mysql 
var async = require('async');

module.exports = function (app) {
  var mysqlDB = app.dataSources.mysql;
  var lbTables = ['User', 'ACL', 'RoleMapping', 'Role', 'Research', 'ResearchGoal'];

  mysqlDB.autoupdate(lbTables, function (err) {
    if (err) {
      throw err;
    }
    console.log('Loopback tables [' + lbTables + '] created in'
      , mysqlDB.adapter.name);
    mysqlDB.disconnect();
  });
};
*/
