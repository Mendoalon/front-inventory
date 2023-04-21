export interface Product {
    id: number;
    name: string;
    price: number;
    account: number;
    category: {
      id: number;
      name: string;
      description: string;
    };
    picture: string;
  }
  
  export interface ProductResponse {
    metadata: {
      date: string;
      code: string;
      type: string;
    }[];
    productResponse: {
      products: Product[];
    };
  }