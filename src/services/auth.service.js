const API_URL = 'https://uz8akwvc0e.execute-api.us-east-1.amazonaws.com';

export const authService = {
    async signup(data) {
        const res = await fetch(`${API_URL}/auth/signup`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });
        if (!res.ok) throw new Error('Signup failed');
        return res.json();
    },

    async confirmSignup(username, code) {
        const res = await fetch(`${API_URL}/auth/confirm-signup`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, confirmation_code: code }),
        });
        if (!res.ok) throw new Error('Confirmation failed');
        return res.json();
    },

    async login(email, password) {
        const res = await fetch(`${API_URL}/auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        });
        if (!res.ok) throw new Error('Login failed');
        return res.json();
    },

    async refreshToken(token) {
        const res = await fetch(`${API_URL}/auth/refresh`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ refresh_token: token }),
        });
        if (!res.ok) throw new Error('Refresh failed');
        return res.json();
    }
};
