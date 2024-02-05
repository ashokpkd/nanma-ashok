export const ValidatePassword = (password) => {
    if (!password) {
    return 'password is required'
    }
    if (password.length < 8) {
        return 'password must be atleast 8 characters log'
    }
    if (!/[a-z]/.test(password)) {
        return 'password must contain atleast one small letter'
    }
    if (!/\d/.test(password)) {
        return 'password must contain atleast one digit'
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        return "Password must contain at least one special character";
    }
    return null
}

