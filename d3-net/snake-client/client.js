const net = require('net');
const {
  IP,
  PORT
} = require('./constants');
/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  conn.setEncoding('utf8');
  conn.on('data', (data) => {
    console.log('Message from client: ', data);
  });

  conn.on('connect', () => {
    console.log('successfuly conneted');
    conn.write('Name: XXX \n');
    conn.write('Say: go lonnggggg \n');
  });

  return conn;
}

module.exports = {
  connect
};