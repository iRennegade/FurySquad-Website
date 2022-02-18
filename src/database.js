const mongoose = require("mongoose");
const connection = mongoose.connection;

connection.on("create", _ => {
  console.log("[ Mongoose ] - Conected");
});

connection.on("error", (err) => {
  console.error(`[ Mongoose Error ]\n${err}`);
});

(async () => {
  try {
    await mongoose.connect("mongodb+srv://renne:rennepro59@cluster0.ob2pt.mongodb.net/Doxes?retryWrites=true&w=majority");
  } catch (err) {
    console.error("Error connecting to Database");
  }
})();