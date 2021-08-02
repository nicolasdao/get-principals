const https = require('https')

const GIST = 'https://gist.githubusercontent.com/nicolasdao/77d52c5323f0f5f539184ffebb764607/raw'

const httpGet = url => new Promise((next, fail) => https.get(url, res => {
	let data = []
	
	res.on('data', chunk => {
		data.push(chunk)
	})

	res.on('end', () => {
		next(JSON.parse(Buffer.concat(data).toString()))
	})
}).on('error', err => {
	fail(err)
}))

const awsPrincipals = httpGet(`${GIST}/aws_principals.json`)

module.exports = {
	awsPrincipals
}