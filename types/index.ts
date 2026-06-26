export interface Product {
  id: string;
  name: string;
  name_hi?: string;
  slug: string;
  sku?: string;
  brand?: string;
  description?: string;
  price: number;
  mrp?: number;
  stock: number;
  image_url?: string;
  images?: string[];
  category_id?: string;
  category_name?: string;
  category_slug?: string;
  is_featured?: boolean;
  avg_rating?: number;
  review_count?: number;
  specifications?: Record<string, string>;
}

export interface Category {
  id: string;
  name: string;
  name_hi?: string;
  slug: string;
  icon?: string;
  product_count?: number;
}

export interface CartItem {
  product_id: string;
  name: string;
  price: number;
  quantity: number;
  image_url?: string;
  stock: number;
}

export interface Order {
  id: string;
  order_number: string;
  order_status: string;
  payment_status: string;
  payment_method: string;
  subtotal: number;
  delivery_charge: number;
  total_amount: number;
  created_at: string;
  items?: OrderItem[];
  history?: OrderStatusHistory[];
}

export interface OrderItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  subtotal: number;
}

export interface OrderStatusHistory {
  id: string;
  status: string;
  note?: string;
  created_at: string;
}

export interface Booking {
  id: string;
  booking_number: string;
  service_type: string;
  description?: string;
  address: string;
  preferred_date?: string;
  status: string;
  created_at: string;
}

export interface User {
  id: string;
  name: string;
  phone: string;
  email?: string;
  role: string;
}

export interface Address {
  id: string;
  label: string;
  name: string;
  phone: string;
  line1: string;
  line2?: string;
  city: string;
  state: string;
  pin: string;
  is_default: boolean;
}

export interface Review {
  id: string;
  user_name: string;
  rating: number;
  comment?: string;
  created_at: string;
}

export interface Translations {
  [key: string]: { en: string; hi: string };
}
