export const isValidName = name => /^[A-Za-z\s]+$/.test(name);
export const isValidEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
