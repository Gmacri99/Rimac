import { apiRequest } from "../../../../../helpers/ApiRequest"

export interface Plan {
  name: string
  price: number
  description: string[]
  age: number
}

export const Planes = async (): Promise<Plan[]> => {
  try {
    const data = await apiRequest('getAllPlans');
    const lista=data.list
    if (Array.isArray(lista)) {
      return lista.slice(0, 20);
    } else {
      console.error('Error al obtener planes');
      return [];
    }
  } catch (error) {
    console.error('Error al obtener planes:', error);
    return [];
  }
};
