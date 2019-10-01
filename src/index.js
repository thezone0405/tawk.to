import express from 'express'
import routes from './routes'

const app = express()
app.use(routes)

const serverUp = ( app ) => {
	const server = app.listen( 3030 )
	process.on( 'unhandledRejection', ( reason, p ) =>
		console.log( 'Unhandled Rejection at: Promise ', p, reason )
	)
	server.on( 'listening', () =>
    console.log( 'Application started on http://%s:%d', '192.168.99.100',  3030 )
	)
}

serverUp( app )
