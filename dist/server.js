const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
// Load config
dotenv.config({ path: './config/config.env' });
const PORT = process.env.PORT || 8000;
connectDB();
const app = express();
// app.use('/ticket-tracker', require('./routes/ticket-tracker-list'))
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'dev'
}));
app.listen(PORT, () => console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));
