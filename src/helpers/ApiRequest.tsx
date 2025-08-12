import axios from "axios";
import { routeAPI } from "../const/routes";

const getData = async (ruta:string) =>{
    try {
        const response = await axios.get(ruta)
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null
    }
}

export const apiRequest = async (Request:string) => {
    switch (Request) {
        case 'getUser':
        return getData(routeAPI.Usuarios)

        case 'getAllPlans':
        return getData(routeAPI.Planes)
    }
}