const validateEmail = value => {
    let error;
    if (!value) {
        error = 'Email requis';
    } else if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
        error = 'Adresse email invalide';
    }
    return error;
};

module.exports = { validateEmail }
