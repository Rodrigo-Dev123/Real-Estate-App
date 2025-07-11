import bcrypt from "bcrypt"

export const register = async (req, res) => {
    // DB operations
    const { username, email, password } = req.body
    
    const hashPassword = await bcrypt.hash(password, 10)
    console.log(hashPassword)

    res.json({ message: hashPassword })
}

export const login = (req, res) => {
    // DB operations
}

export const logout = (req, res) => {
    // DB operations
}