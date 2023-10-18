process.stdout.write('\x1B[2J\x1B[0f')
require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const cors = require('cors')


    ; (async function () {
        try {
            await mongoose.connect(process.env.URL, {
                dbName: process.env.MONGO_DB
            })
            console.log('Connected to DB')
        } catch (err) {
            throw new Error(`Error connecting to DB: ${err}`)
        }
        try {
            const app = express()
                .use(cors('*'))
                .use(morgan('combined'))
                .use(express.json())
                .use('/API', require('./API/routes'))

                const PORT = process.env.PORT || 2222
                app.listen(PORT, (err) => {
                    console.log(`connected to port: ${PORT}`)
                    if (err) {
                        throw new Error(err)
                    }

                    console.info('>'.repeat(40))
                    console.info('💻 Dirion Server Live')
                    console.info(`📡 PORT: http//localhost:${PORT}`)
                    console.info('>'.repeat(40) + '\n')
                })
        } catch (error) {
            throw new Error(error)
        }
})()
