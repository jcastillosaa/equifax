require('dotenv').config();
require('./database');

const app = require('./server');

app.listen(app.get('port'), () => {
    console.log('Server On port ', app.get('port'));
});