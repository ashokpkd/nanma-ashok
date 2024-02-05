export const ValidateEmail = (Email) => {
    if (!Email) {
        return 'email is required'
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(Email)) {
        return 'Invalid email'
    }
    return null
}