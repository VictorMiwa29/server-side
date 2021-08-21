const jwt = require('jsonwebtoken');

const secret = 'case_stone';
const jwtConfig = { expiresIn: '3h', algorithm: 'HS256' };

const JWT = (data) => jwt.sign(data, secret, jwtConfig);

module.exports = JWT;
