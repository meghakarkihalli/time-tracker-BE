const express = require('express');
const dotenv = require('dotenv');
const DbConnector = require('./config/db');
const { graphqlHTTP} = require('express-graphql');
const schema = require('./schema/schema')
const cors = require('cors');

// Load config

dotenv.config({path: './config/config.env'})
const PORT = process.env.PORT || 8000

const conn = new DbConnector()
conn.connectDB();

const app = express()
app.use(cors());
// app.use('/ticket-tracker', require('./routes/ticket-tracker-list'))

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: process.env.NODE_ENV === 'dev'
}))

app.listen(PORT, () => console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))