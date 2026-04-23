import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  salePrice?: number;
  sku: string;
  stockQuantity: number;
  imageUrls: string; // Comma separated URLs
  brand: string;
  rating: number;
  reviewCount: number;
  category?: {
    id: number;
    name: string;
  };
}

export interface CartItem {
  id: number;
  productId: number;
  productName: string;
  price: number;
  quantity: number;
  imageUrl: string;
}

export const productApi = {
  getAll: () => api.get<Product[]>('/products'),
  getById: (id: string | number) => api.get<Product>(`/products/${id}`),
  getByCategory: (categoryId: number) => api.get<Product[]>(`/products/category/${categoryId}`),
  search: (query: string) => api.get<Product[]>(`/products/search?q=${query}`),
  getReviews: (productId: number) => api.get<any[]>(`/products/${productId}/reviews`),
};

export const cartApi = {
  getCart: (userId: string) => api.get<CartItem[]>(`/cart/${userId}`),
  addItem: (userId: string, productId: number, quantity: number) => 
    api.post(`/cart/${userId}/items`, { productId, quantity }),
  updateItem: (userId: string, productId: number, quantity: number) => 
    api.put(`/cart/${userId}/items/${productId}`, { quantity }),
  removeItem: (userId: string, productId: number) => 
    api.delete(`/cart/${userId}/items/${productId}`),
  clearCart: (userId: string) => api.delete(`/cart/${userId}`),
};

export const aiApi = {
  chat: (message: string) => api.post('/chat', { message }),
};

export default api;
