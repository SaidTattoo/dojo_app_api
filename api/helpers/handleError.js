const httpError = (res, err) => {
    console.log(err,res)
    res.status(500).send(err.message )
}

module.exports = {
    httpError
}