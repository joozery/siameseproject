// API Base URL
const isProduction = import.meta.env.PROD || (typeof window !== 'undefined' && window.location.hostname !== 'localhost');
const API_URL = isProduction 
  ? 'https://siam.devwooyou.space/api' 
  : (import.meta.env.VITE_API_URL || 'http://localhost:5001/api');

// Get token from localStorage
const getToken = () => {
    return localStorage.getItem('auth_token');
};

// API request helper
const apiRequest = async (endpoint, options = {}) => {
    const token = getToken();

    const config = {
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...(token && { Authorization: `Bearer ${token}` }),
            ...options.headers,
        },
    };

    try {
        const response = await fetch(`${API_URL}${endpoint}`, config);
        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'Something went wrong');
        }

        return data;
    } catch (error) {
        console.error('API Error:', error);
        throw error;
    }
};

// Auth API
export const authAPI = {
    login: async (email, password) => {
        return apiRequest('/auth/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
        });
    },

    register: async (userData) => {
        return apiRequest('/auth/register', {
            method: 'POST',
            body: JSON.stringify(userData),
        });
    },

    getMe: async () => {
        return apiRequest('/auth/me');
    },

    logout: async () => {
        return apiRequest('/auth/logout', { method: 'POST' });
    },
};

// Admin API
export const adminAPI = {
    getAll: async () => {
        return apiRequest('/admins');
    },

    getById: async (id) => {
        return apiRequest(`/admins/${id}`);
    },

    create: async (adminData) => {
        return apiRequest('/admins', {
            method: 'POST',
            body: JSON.stringify(adminData),
        });
    },

    update: async (id, adminData) => {
        return apiRequest(`/admins/${id}`, {
            method: 'PUT',
            body: JSON.stringify(adminData),
        });
    },

    delete: async (id) => {
        return apiRequest(`/admins/${id}`, {
            method: 'DELETE',
        });
    },
};

// Agenda API
export const agendaAPI = {
    getAll: async (params = {}) => {
        const queryString = new URLSearchParams(params).toString();
        return apiRequest(`/agenda${queryString ? `?${queryString}` : ''}`);
    },

    getById: async (id) => {
        return apiRequest(`/agenda/${id}`);
    },

    create: async (agendaData) => {
        return apiRequest('/agenda', {
            method: 'POST',
            body: JSON.stringify(agendaData),
        });
    },

    update: async (id, agendaData) => {
        return apiRequest(`/agenda/${id}`, {
            method: 'PUT',
            body: JSON.stringify(agendaData),
        });
    },

    delete: async (id) => {
        return apiRequest(`/agenda/${id}`, {
            method: 'DELETE',
        });
    },
};

// Gallery API
export const galleryAPI = {
    getAll: async (params = {}) => {
        const queryString = new URLSearchParams(params).toString();
        return apiRequest(`/gallery${queryString ? `?${queryString}` : ''}`);
    },

    getById: async (id) => {
        return apiRequest(`/gallery/${id}`);
    },

    getStats: async () => {
        return apiRequest('/gallery/stats');
    },

    upload: async (formData) => {
        const token = getToken();
        const response = await fetch(`${API_URL}/gallery`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`,
                // Don't set Content-Type for FormData - browser will set it with boundary
            },
            body: formData,
        });
        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.message || 'Upload failed');
        }
        return data;
    },

    update: async (id, formData) => {
        const token = getToken();
        const response = await fetch(`${API_URL}/gallery/${id}`, {
            method: 'PUT',
            headers: {
                Authorization: `Bearer ${token}`,
            },
            body: formData,
        });
        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.message || 'Update failed');
        }
        return data;
    },

    delete: async (id) => {
        return apiRequest(`/gallery/${id}`, {
            method: 'DELETE',
        });
    },
};

// Sponsor API
export const sponsorAPI = {
    getAll: async (params = {}) => {
        const queryString = new URLSearchParams(params).toString();
        return apiRequest(`/sponsors${queryString ? `?${queryString}` : ''}`);
    },

    getById: async (id) => {
        return apiRequest(`/sponsors/${id}`);
    },

    getByTier: async (tier) => {
        return apiRequest(`/sponsors/tier/${tier}`);
    },

    create: async (formData) => {
        const token = getToken();
        const response = await fetch(`${API_URL}/sponsors`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`,
            },
            body: formData,
        });
        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.message || 'Create failed');
        }
        return data;
    },

    update: async (id, formData) => {
        const token = getToken();
        const response = await fetch(`${API_URL}/sponsors/${id}`, {
            method: 'PUT',
            headers: {
                Authorization: `Bearer ${token}`,
            },
            body: formData,
        });
        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.message || 'Update failed');
        }
        return data;
    },

    delete: async (id) => {
        return apiRequest(`/sponsors/${id}`, {
            method: 'DELETE',
        });
    },
};

// Hero Slide API
export const heroSlideAPI = {
    getAll: async (params = {}) => {
        const queryString = new URLSearchParams(params).toString();
        return apiRequest(`/hero-slides${queryString ? `?${queryString}` : ''}`);
    },

    getById: async (id) => {
        return apiRequest(`/hero-slides/${id}`);
    },

    create: async (formData) => {
        const token = getToken();
        const response = await fetch(`${API_URL}/hero-slides`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`,
            },
            body: formData,
        });
        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.message || 'Create failed');
        }
        return data;
    },

    update: async (id, formData) => {
        const token = getToken();
        const response = await fetch(`${API_URL}/hero-slides/${id}`, {
            method: 'PUT',
            headers: {
                Authorization: `Bearer ${token}`,
            },
            body: formData,
        });
        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.message || 'Update failed');
        }
        return data;
    },

    delete: async (id) => {
        return apiRequest(`/hero-slides/${id}`, {
            method: 'DELETE',
        });
    },
};

// Inquiry API
export const inquiryAPI = {
    getAll: async (params = {}) => {
        const queryString = new URLSearchParams(params).toString();
        return apiRequest(`/inquiries${queryString ? `?${queryString}` : ''}`);
    },

    getById: async (id) => {
        return apiRequest(`/inquiries/${id}`);
    },

    create: async (data) => {
        // Public endpoint, no token needed usually, but apiRequest handles it if available
        // Using fetch directly to ensure public access if headers issue
        const response = await fetch(`${API_URL}/inquiries`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        });

        const resData = await response.json();
        if (!response.ok) {
            throw new Error(resData.message || 'Submission failed');
        }
        return resData;
    },

    updateStatus: async (id, status) => {
        return apiRequest(`/inquiries/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ status }),
        });
    },

    delete: async (id) => {
        return apiRequest(`/inquiries/${id}`, {
            method: 'DELETE',
        });
    },
};

// Update/Article API
export const updateAPI = {
    getAll: async (params = {}) => {
        const queryString = new URLSearchParams(params).toString();
        return apiRequest(`/updates${queryString ? `?${queryString}` : ''}`);
    },

    getById: async (id) => {
        return apiRequest(`/updates/${id}`);
    },

    getBySlug: async (slug) => {
        return apiRequest(`/updates/slug/${slug}`);
    },

    create: async (formData) => {
        const token = getToken();
        const response = await fetch(`${API_URL}/updates`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`,
            },
            body: formData,
        });
        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.message || 'Create failed');
        }
        return data;
    },

    update: async (id, formData) => {
        const token = getToken();
        const response = await fetch(`${API_URL}/updates/${id}`, {
            method: 'PUT',
            headers: {
                Authorization: `Bearer ${token}`,
            },
            body: formData,
        });
        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.message || 'Update failed');
        }
        return data;
    },

    delete: async (id) => {
        return apiRequest(`/updates/${id}`, {
            method: 'DELETE',
        });
    },
};

export default {
    auth: authAPI,
    admin: adminAPI,
    agenda: agendaAPI,
    gallery: galleryAPI,
    sponsor: sponsorAPI,
    heroSlide: heroSlideAPI,
    update: updateAPI,
    inquiry: inquiryAPI,
};
