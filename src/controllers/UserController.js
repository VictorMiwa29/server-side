const { registerUser, loginUser } = require('../services/UserService');
const JWT = require('../jwt/JsonWebToken');

async function store(req, res) {
  try {
    const { name, email, password } = req.body;
    const result = await registerUser(name, email, password);

    if (result === 'user exists') return res.status(409).json({ message: 'email já cadastrado' });

    return res.status(201).json({ message: 'usuário criado com sucesso' });
  } catch (error) {
    return res.status(500);
  }
}

async function login(req, res) {
  try {
    const { email, password } = req.body;
    const result = await loginUser(email, password);

    if (!result) return res.status(404).send('Not found');

    return res.status(200).json({ token: JWT(req.body) });
  } catch (error) {
    return res.status(500);
  }
}

module.exports = {
  store,
  login,
};
