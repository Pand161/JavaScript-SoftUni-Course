const express = require('express');

const app = express();
const PORT = 5000;

const expressConfig = require('./config/expressConfig');
const handlebarsConfig = require('./config/handlebarsConfig');
const dbConnect = require('./config/mongooseConfig');
const router = require('./routes');

handlebarsConfig(app);
expressConfig(app);
dbConnect()
  .then(() => console.log('DB connected'))
  .catch((err) => console.log('DB error:', err));
app.use(router);

app.listen(PORT, () => console.log(`server is running on port ${PORT}...`));
