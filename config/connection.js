    
var mysql = require('mysql');

if(process.env.JAWSDB_URL){
    var connection = mysql.createConnection(process.env.JAWSDB_URL)
} else{
    var connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "root",
        database: "burger_db"
    });
};

connection.connect(function(err){
    if (err){
        console.error("error connecting " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;





// // Set up MySQL connection.
// var mysql = require('mysql');
// var connection;

// if (process.env.JAWSDB_URL) {
//   connection = mysql.createConnection(process.env.JAWSDB_URL);
// } else {
//   connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     port: 3306,
//     password: 'root',
//     database: 'burger_db',
//     // host: "gx97kbnhgjzh3efb.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
//     // port: 3306,
//     // user: "ibjyx7bd91xy2ffx",
//     // password: "z2822lksj9289i4u",
//     // database: "jh95tuiww7xin3yo"
// });

// };

// // console.log(connection);

// // // Make connection.
// connection.connect(function(err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }
//   console.log("connected as id " + connection.threadId);
// });


// // Export connection for our ORM to use.

// module.exports = connection;