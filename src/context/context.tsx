import React, { createContext, useState, useContext, type ReactNode, useEffect} from 'react';

export interface ApiResponse {
  birthDay: string;
  lastName: string;
  name: string;
  TipoDocumento: string;
  NroDocumento: string;
  celular: string;
}

interface Option {
  id: number;
  type: string;
  name: string;
  texto: string;
}


export interface PlanSelected {
  name: string;
  price: number;
  type: string;
}

interface ApiContextType {
  data: ApiResponse | null;
  setData: React.Dispatch<React.SetStateAction<ApiResponse | null>>;
  modalState: 'success' | 'error' | 'inactive';
  setModalState: React.Dispatch<React.SetStateAction<'success' | 'error' | 'inactive'>>;
  option: Option | undefined,
  setOption: React.Dispatch<React.SetStateAction<Option | undefined>>;
  selectedPlan: PlanSelected | undefined,
  setSelectedPlan: React.Dispatch<React.SetStateAction<PlanSelected | undefined>>;
}

const ApiContext = createContext<ApiContextType | undefined>(undefined);

const LOCAL_STORAGE_KEY = 'Usuario';

export const ApiProvider = ({ children }: { children: ReactNode }) => {
    const [modalState, setModalState] = useState<'success' | 'error' | 'inactive'>('inactive');
    const [option, setOption] = useState<Option>();
    const [selectedPlan, setSelectedPlan] = useState<PlanSelected>();
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
    <ApiContext.Provider value={{ data, setData,modalState,setModalState,option,setOption,selectedPlan,setSelectedPlan}}>
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
