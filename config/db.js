import mongoose from "mongoose";
const MONGO_URI =
  "mongodb+srv://ramzankeroze30:T3OJvffYDdMIJnsQ@cluser1.olfpyoi.mongodb.net/?retryWrites=true&w=majority&appName=Cluser1";
const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log(`Successfully connnected to mongoDB 👍`);
  } catch (error) {
    console.error(`ERROR: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
//ramzankeroze30
//T3OJvffYDdMIJnsQ
