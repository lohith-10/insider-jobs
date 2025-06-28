import './config/instrument.js'
import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './db.js'
import * as Sentry from "@sentry/node";


const app = express()

await connectDB()

app.use(cors())
app.use(express.json())



app.get('/', (req, res) => {
    res.send('Api running')
})
app.get("/debug-sentry", function mainHandler(req, res) {
  throw new Error("My first Sentry error!");
});

app.post('/webhooks', clerkWebhook)

const PORT = process.env.PORT || 5000

Sentry.setupExpressErrorHandler(app);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
