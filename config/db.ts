const { connect } = require('mongoose');

class DbConnector {
  connectDB = async () => {
    try {
      const conn =  await connect(process.env.MONGO_URI)
      console.log(`MongoDB connected ${conn.connection.host}`)
    } catch (err) {
      console.log(err)
      process.exit(1)
    }
  }
}

export = DbConnector
