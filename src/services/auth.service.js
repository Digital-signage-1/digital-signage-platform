const API_URL = 'https://uz8akwvc0e.execute-api.us-east-1.amazonaws.com';

export const authService = {
    async signup(data) {
        const res = await fetch(`${API_URL}/auth/signup`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: data.username,
                password: data.password,
                email: data.email,
                given_name: data.given_name,
                family_name: data.family_name,
                gender: data.gender,
                phone_number: data.phone_number
            }),
        });
        const result = await res.json();
        if (!res.ok) throw new Error(result.message || 'Signup failed');
        return result;
    },

    async confirmSignup(username, code) {
        const res = await fetch(`${API_URL}/auth/confirm-signup`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, confirmation_code: code }),
        });
        const result = await res.json();
        if (!res.ok) throw new Error(result.message || 'Confirmation failed');
        return result;
    },

    async login(email, password) {
        const res = await fetch(`${API_URL}/auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        });
        const result = await res.json();
        if (!res.ok) throw new Error(result.message || 'Login failed');
        return result;
    },

    async refreshToken(token) {
        const res = await fetch(`${API_URL}/auth/refresh`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ refresh_token: token }),
        });
        const result = await res.json();
        if (!res.ok) throw new Error(result.message || 'Refresh failed');
        return result;
    }
};
