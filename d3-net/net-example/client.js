const net = require('net');

const conn = net.createConnection({

  host: '172.46.2.207', // change to IP address
  port: 3000
});

conn.on('data', (data) => {
  console.log('Server says: ', data);
});

conn.on('connect', () => {
  conn.write('Hello from client!');
});


conn.setEncoding('utf8'); // interpret data as text

return conn;


console.log('Connecting ...');
connect();