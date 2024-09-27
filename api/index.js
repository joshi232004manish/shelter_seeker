import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import userRouter from "../api/routes/user.route.js"
import userAuth from "../api/routes/auth.route.js"


dotenv.config();



mongoose.connect(process.env.MONGO).then(()=>{
    console.log('Connected to mongoDB!!');
    
}).catch((err)=>{
    console.log(err);
    
})
const app = express();

const port = 3000;
app.use(express.json());

// app.get('/test', (req, res) => {
//   res.send('Hello World!')
// })
app.use('/api/user',userRouter);
app.use('/api/auth',userAuth);

app.use((err,req,res,next)=>{
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return res.status(statusCode).json(
    {
      success:false,
      statusCode,
      message
       
    }
  );
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port} !!`)
})
