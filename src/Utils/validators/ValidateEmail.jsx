export const ValidateEmail = (Email) => {
    if (!Email) {
        return 'Email is required'
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(Email)) {
        return 'Invalid email'
    }
    return null
}