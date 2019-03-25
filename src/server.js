import express from 'express'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'

export const app = express()

app.disable('x-powered-by')

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

app.get('/', (req, res) => {
	res.send({message: 'hello'})
})

app.get('/home', (req, res) => {
	res.send({message: 'welcome to the home page'})
})

app.post('/', (req, res) => {
	console.log(req.body);
	res.send({message: '200 OK'})
})

export const start = () => {
	app.listen(5002, () => {
		console.log('server running on port: 5002')
	})
}
