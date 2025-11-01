// const express = require('express');
// const { PassThrough } = require('stream');
// const app = express();
// const port = process.env.port || 5000;

// // data Pass
// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });


const express = require('express');
const app = express();
const dotenv = require('dotenv')

const databaseConnect = require('./config/database')

dotenv.config({
     path : 'backend/config/config.env'
})

const PORT = process.env.PORT || 5000
app.get('/', (req, res)=>{
     res.send('This is from backend Sever')
})

databaseConnect();

app.listen(PORT, ()=>{
     console.log(`Server is running on port ${PORT}`)
})