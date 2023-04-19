export interface RespCategories {
    metadata:         Metadatum[];
    categoryResponse: CategoryResponse;
}

export interface CategoryResponse {
    category: Category[];
}

export interface Category {
    id:          number;
    name:        string;
    description: string;
}

export interface Metadatum {
    date: string;
    code: string;
    type: string;
}