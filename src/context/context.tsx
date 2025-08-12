import React, { createContext, useState, useContext, type ReactNode, useEffect} from 'react';

interface ApiResponse {
  birthDay: string;
  lastName: string;
  name: string;
}

interface ApiContextType {
  data: ApiResponse | null;
  setData: React.Dispatch<React.SetStateAction<ApiResponse | null>>;
  modalState: 'success' | 'error' | 'inactive';
  setModalState: React.Dispatch<React.SetStateAction<'success' | 'error' | 'inactive'>>;
}

const ApiContext = createContext<ApiContextType | undefined>(undefined);

const LOCAL_STORAGE_KEY = 'Usuario';

export const ApiProvider = ({ children }: { children: ReactNode }) => {
    const [modalState, setModalState] = useState<'success' | 'error' | 'inactive'>('inactive');
    const [data, setData] = useState<ApiResponse | null>(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    return saved ? JSON.parse(saved) : null;
    });

  
  useEffect(() => {
    if (data) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
    } else {
      localStorage.removeItem(LOCAL_STORAGE_KEY);
    }
  }, [data]);

  return (
    <ApiContext.Provider value={{ data, setData,modalState,setModalState }}>
      {children}
    </ApiContext.Provider>
  );
};

export const useDataContext = () => {
  const context = useContext(ApiContext);
  if (!context) {
    throw new Error('Error Obteniendo datos');
  }
  return context;
};
