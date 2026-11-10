'use strict'
const express = require('express')
const app = express()
app.use(express.json())
app.get('/actuator/health', (_, res) => res.json({ status: 'UP' }))
app.get('/webhook-relays', (_, res) => res.json({ status: 'ok' }))
app.post('/webhook-relays', (_, res) => res.json({ status: 'ok' }))
app.get('/webhook-relays/:id', (_, res) => res.json({ status: 'ok' }))
app.listen(process.env.PORT || 8119)
