const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://emilymerrow:Albastru10@cluster0.o22fnfw.mongodb.net/emi?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("connected", function () {
  console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});



