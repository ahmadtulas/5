const Sequelize = require("sequelize");

const database = "todo_db";
const username = "postgres";
const password = "mohsin";
const sequelize = new Sequelize(database,username,password,{
    host:"localhost",
    dialect:"postgres",
});


const connect = async() => {
    return sequelize.authenticate();
}

module.exports = {
    connect,
    sequelize
}

// sequelize
// .authenticate()
// .then(()=>{
//     console.log("Connection has been stablished");
// })
// .catch((error)=>{
//     console.log("Unable to connect with DB:",error);
// });


