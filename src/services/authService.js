import axios from 'axios';

const API_URL = 'http://localhost:8000/api/users/';

class AuthService {
    async login(email, password) {
        const response = await axios.post(API_URL + 'login/', {
            email,
            password
        });
        if (response.data.access) {
            localStorage.setItem('user', JSON.stringify(response.data));
        }
        return response.data;
    }

    logout() {
        localStorage.removeItem('user');
    }

    async register(username, email, password, first_name, last_name) {
        const response = await axios.post(API_URL + 'register/', {
            username,
            email,
            password,
            first_name,
            last_name
        });
        // Store email for verification
        localStorage.setItem('verificationEmail', email);
        return response.data;
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));
    }

    async getProfile() {
        const user = this.getCurrentUser();
        if (user && user.access) {
            return axios.get(API_URL + 'profile/', {
                headers: {
                    'Authorization': `Bearer ${user.access}`
                }
            });
        }
        return null;
    }

    async forgotPassword(email) {
        return axios.post(API_URL + 'forgot-password/', { email });
    }

    async resetPassword(token, new_password) {
        return axios.post(API_URL + 'reset-password/', {
            token,
            new_password
        });
    }

    async verifyEmail(email, code) {
        return axios.post(API_URL + 'verify-email/', {
            email,
            code
        });
    }

    async resendVerificationCode(email) {
        return axios.post(API_URL + 'resend-verification/', { email });
    }

    // Add axios interceptor for token refresh
    setupAxiosInterceptors() {
        axios.interceptors.response.use(
            (response) => response,
            async(error) => {
                const originalRequest = error.config;
                if (error.response.status === 401 && !originalRequest._retry) {
                    originalRequest._retry = true;
                    try {
                        const user = this.getCurrentUser();
                        if (user && user.refresh) {
                            const response = await axios.post(API_URL + 'token/refresh/', {
                                refresh: user.refresh
                            });
                            const { access } = response.data;
                            localStorage.setItem('user', JSON.stringify({...user, access }));
                            originalRequest.headers['Authorization'] = `Bearer ${access}`;
                            return axios(originalRequest);
                        }
                    } catch (_) {
                        this.logout();
                        window.location.href = '/login';
                    }
                }
                return Promise.reject(error);
            }
        );
    }
}

const authService = new AuthService();
authService.setupAxiosInterceptors();

export default authService;