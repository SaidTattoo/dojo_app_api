const bcrypt = require('bcrypt');

const encrypt = async (password) => {
    const saltRounds = 10; // O el número de rondas que prefieras
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
};

const compare = async (password, passwordHash) => {
    const isValid = await bcrypt.compare(password, passwordHash);
    return isValid;
}

module.exports = {
    encrypt,
    compare
}