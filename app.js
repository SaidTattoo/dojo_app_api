const express = require ('express');
const cors = require ('cors');
const dotenv = require ('dotenv');
const dbConnect = require ('./config/mongo.js');

dotenv.config();
const app = express();

// Define a port
const PORT = process.env.PORT || 3000;

// Define a route for the root URL
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use('/api/1.0', require('./api/routes/index.js'));
dbConnect()
// Start the server
app.listen(PORT, () => {
  console.log(`Server running  on http://localhost:${ PORT }`);
});