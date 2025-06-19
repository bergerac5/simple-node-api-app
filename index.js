const express = require('express');
const userRoutes = require('./routers/user.routes')
const errorHandler = require('./middlewares/error.middleware');


const app = express();
const Port = 3000;

app.use(express.json());
app.use('/users',userRoutes)

// Centralized error handler middleware
app.use(errorHandler);

app.listen(Port, () => {
    console.log(`Server running on PORT ${Port}`);    
});

