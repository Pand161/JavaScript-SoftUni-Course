const express = require('express');
const handlebars = require('express-handlebars');
const mongoose = require('mongoose');
const path = require('path');
const cookieParser = require('cookie-parser');
const { auth } = require('./middlewares/authMiddleware');

const routes = require('./router');

const app = express();
const PORT = 3000;

app.engine('hbs', handlebars.engine({ extname: 'hbs' }));
app.set('view engine', 'hbs');
app.set('views', 'src/views');

async function DBConnect() {
  const projectName = 'BookTalk';
  await mongoose.connect(`mongodb://127.0.0.1:27017/${projectName}`);
  console.log('DB connected');
}
DBConnect();

app.use(express.static(path.resolve(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(auth);
app.use(routes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}...`));
