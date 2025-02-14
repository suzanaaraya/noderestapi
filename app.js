const express = require('express'); // Import express
const dotenv = require('dotenv'); // Import dotenv
const app = express(); // Create an express app
const bodyParser = require('body-parser'); // Import body-parser
// configure dotenv
dotenv.config();

//serve static files from the public directory

app.use(express.static('public'));

//import Routes
const userRoutes = require('./routes/usersRoutes'); // Import user routes
const incomeRoutes = require('./routes/incomeRoutes'); // Import income routes% 
const expenseRoutes = require('./routes/expensesRoutes'); // Import expense routes

//middleware
app.use(bodyParser.json()); // Parse JSON data
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded data
app.use('/users', userRoutes); // Middleware for user routes
app.use('/incomes', incomeRoutes); // Middleware for income routes
app.use('/expenses', expenseRoutes); // Middleware for expense routes
 

//setting the port
const PORT = process.env.PORT || 3000;  // Set the port


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});



// Test route
// app.get("/", (req, res) => {
//     res.send("Welcome to the REST API");
// });

// Test Firebase connection
// app.get('/test', (req, res) => {
//     const ref = db.ref("test");
//     ref.set({ message: "Firebase connection secured" })
//         .then(() => {
//             res.send("Data is written to Firebase");
//         })
//         .catch((error) => {
//             res.status(500).send("Error writing to Firebase: " + error.message);
//         });
// });

