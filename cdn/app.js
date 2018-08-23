const path = require('path');
const express = require('express');
const serveStatic = require('serve-static');
const app = express();
const PORT = process.env.PORT || 5000;

app.use('/dist', serveStatic(path.join(__dirname, '..' ,'static', 'dist')));

app.get('/dashboard', dashboardRoute);
app.get('/dashboard/*', dashboardRoute);

function dashboardRoute(req, res) {
	res.sendFile('/../static/dashboard.html', { root: __dirname });
}

app.get('*', (req, res) => res.sendFile(path.resolve('static/index.html')));
console.log('PORT', PORT);
app.listen(PORT, () => console.info(`App listen on ${PORT}`));
