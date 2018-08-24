const path = require('path');
const express = require('express');
const serveStatic = require('serve-static');
const app = express();
const PORT = process.env.PORT || 3000;
const PATH_STATIC = path.join(__dirname, '..' ,'static', 'dist');

app.use('/dist', serveStatic(path.join(PATH_STATIC, 'dist')));

app.get('*', (req, res) => res.sendFile(path.join(PATH_STATIC, 'index.html')));

app.listen(PORT, () => console.info(`App listen on ${PORT}`));
