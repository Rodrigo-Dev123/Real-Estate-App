export const register = (req, res) => {
    // DB operations
    const { username, email, password } = req.body
    console.log('register');
    res.send(req.body);
}

export const login = (req, res) => {
    // DB operations
}

export const logout = (req, res) => {
    // DB operations
}