export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  type: string;
  slug: string;
  pubgId?: string;
  quantity?: number;
  created_at?: string;
  updated_at?: string;
  token_placeholder: null | string;
}

export interface ProductResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Product[];
}
