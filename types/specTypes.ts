export interface SpecAttributes {
  content: string;
  name: string;
  slug: string;
}

export interface Spec {
  id: number;
  attributes: SpecAttributes;
}

export interface GetSpecsResponse {
  data: Spec[];
}

export interface TransformedSpec {
  key: number;
  id: number;
  content: string;
  name: string;
  slug: string;
}
