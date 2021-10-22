import "dotenv/config"
import express from 'express'

const app = express()

app.listen(process.env.PORT, () => console.log(`[${Date.now()}] 🚀 Running on port: ${process.env.PORT}`))
