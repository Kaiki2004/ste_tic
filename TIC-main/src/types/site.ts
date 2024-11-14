export interface ApiResponse {
  success: boolean;
  data: CategoryData[];
  error: string;
}

export interface CategoryData {
  id: number;
  name: string;
  deleted_at: string | null;
  categories: SubCategory[];
}

export interface SubCategory {
  id: number;
  name: string;
  storage_front_id: number;
  deleted_at: string | null;
  products: Product[];
}

export interface Product {
  id: number;
  measurement_unit_id: number;
  category_id: number;
  name: string;
  quantity: number;
  min_quantity: number;
  created_by_user_id: number;
  updated_by_user_id: number | null;
  deleted_at_by_user_id: number | null;
  deleted_at: string | null;
  created_at: string;
  updated_at: string | null;
  observation: string;
}
