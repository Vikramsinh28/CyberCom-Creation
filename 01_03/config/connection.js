import mysql from 'mysql';

const connection = mysql.createConnection({
    host: "localhost",  
    user: "root",  
    password: "root"
});

connection.connect((err) => {
    if (err) throw err;
    console.log("Connected!");
}
);

export default connection;