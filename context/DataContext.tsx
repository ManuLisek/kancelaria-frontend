import { createContext, ReactNode, useContext } from 'react';
import { TransformedArticle } from '../types/articleTypes';
import { TransformedSpec } from '../types/specTypes';

interface DataContextType {
  specs: TransformedSpec[];
  articles: TransformedArticle[];
}

interface DataProviderType {
  children: ReactNode;
  initialData: DataContextType;
}

const defaultData: DataContextType = {
  specs: [],
  articles: [],
};

const DataContext = createContext(defaultData);

export const DataProvider = ({ children, initialData }: DataProviderType) => (
  <DataContext.Provider value={initialData}>
    {children}
  </DataContext.Provider>
);

export const useData = () => useContext(DataContext);
