const path = require('path');
const express = require('express');
const serveStatic = require('serve-static');

const app = express();

app.use('/dist', serveStatic(path.join(__dirname, '..' ,'static', 'dist')));

app.get('/dashboard', dashboardRoute);
app.get('/dashboard/*', dashboardRoute);

function dashboardRoute(req, res) {
	res.sendFile('/../static/dashboard.html', { root: __dirname });
}

app.get('*', (req, res) => res.sendFile(path.resolve('static/index.html')));

app.listen(8090, () => console.info('App listen on 8090'));
