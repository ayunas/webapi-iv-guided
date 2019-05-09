// const envSetup = require('dotenv');
// envSetup.config();
require('dotenv').config();

const server = require('./api/server.js');

// server.get('/', (req,res) => {
//   const shoutouts = 
//   res.status(200).json({message : process.env.MOTD})
// })

server.listen(process.env.PORT, () => {
  console.log(`\n*** Server Running on http://localhost:${process.env.PORT}  ***\n`);
});
