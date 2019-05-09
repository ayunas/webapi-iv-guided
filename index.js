// const envSetup = require('dotenv');
// envSetup.config();
require('dotenv').config();


const server = require('./api/server.js');

server.listen(4000, () => {
  console.log(`\n*** Server Running on http://localhost:${process.env.PORT}  ***\n`);
});
