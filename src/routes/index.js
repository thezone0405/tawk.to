import express from 'express'
const app = express()

import chatStatistics from '../services/chat-statistics'

app.use( '/chat', chatStatistics )

export default app
