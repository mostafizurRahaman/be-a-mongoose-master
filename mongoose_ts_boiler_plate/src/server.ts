const mongoose = require("mongoose");
const app = require("./app");

async function main() {
   await mongoose.connect(process.env.DATABASE_URI);

   // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

app.listen(process.env.PORT, () => {
   console.log(`Example app listening on port ${process.env.PORT}`);
});
