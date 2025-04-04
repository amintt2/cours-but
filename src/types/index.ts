/**
 * Global types for the application
 */

export type User = {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: 'user' | 'admin';
  createdAt: string;
};

export type ApiResponse<T> = {
  data?: T;
  error?: string;
  message?: string;
  status: number;
};

export type PaginatedResponse<T> = {
  data: T[];
  meta: {
    currentPage: number;
    totalPages: number;
    totalItems: number;
    itemsPerPage: number;
  }
};

export type SortDirection = 'asc' | 'desc';

export type Filters = {
  [key: string]: string | number | boolean | null;
}; 