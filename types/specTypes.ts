export interface TransformedSpec {
  key: number;
  name: string;
  id: number;
  content: string;
}

export interface GetSpecsResponse {
  results: TransformedSpec[];
}

export interface GetSpecResponse {
  results: TransformedSpec;
}

export interface TransformedResponse {
  articles: TransformedSpec[];
}
