//function to validate user data

function validateUserDTO(data) {
    const { name, email } = data;

    if (!name || typeof name !== 'string') {
        return { valid: false, error: 'Name is required and must be a string.' };
    }

    if (!email || typeof email !== 'string' || !email.includes('@')) {
        return { valid: false, error: 'Email is required and must be a valid email address.' };
    }

    return { valid: true };
}

module.exports = { validateUserDTO };