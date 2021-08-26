const {
  registerUser, loginUser, editUser, findUserByEmail, favorite,
} = require('../services/UserService');
const JWT = require('../jwt/JsonWebToken');

async function store(req, res) {
  try {
    const { firstName, email, password } = req.body;
    const result = await registerUser(firstName, email, password);

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

    return res.status(200)
      .json({
        id: result.id, name: result.firstName, email, token: JWT(req.body),
      });
  } catch (error) {
    return res.status(500);
  }
}

async function edit(req, res) {
  try {
    const {
      firstName, lastName, email, password, phone, oldEmail,
    } = req.body;
    const result = await editUser(firstName, lastName, email, password, phone, oldEmail);

    if (result === 'user exists') return res.status(409).json({ message: 'email já cadastrado' });

    return res.status(200).json({ message: 'atualizado com sucesso' });
  } catch (error) {
    return res.status(500);
  }
}

async function find(req, res) {
  try {
    const { email } = req.body;

    const result = await findUserByEmail(email);

    return res.status(200).json(result);
  } catch (error) {
    return res.status(500);
  }
}

async function favoritesUser(req, res) {
  try {
    const { id } = req.body;

    const { characters, comics } = await favorite(id);

    return res.status(200).json({ favorites: [...characters, ...comics] });
  } catch (error) {
    return res.status(500);
  }
}

module.exports = {
  store,
  login,
  edit,
  find,
  favoritesUser,
};
