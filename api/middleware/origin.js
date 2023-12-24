const checkOrigin = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader) {
            return res.status(401).send('No authorization header found');
        }

        const token = authHeader.split(' ').pop();
        if (token === '123456') {
            next();
        } else {
            res.status(401).send('Unauthorized');
        }
    } catch (err) {
        res.status(500).send('Internal Server Error');
    }
};

module.exports = {
    checkOrigin
};
