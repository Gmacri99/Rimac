import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useAuthRedirect = (
  key: string = "Usuario",    
  rutaLogueado: string = "/planes", 
  rutaNoLogueado: string = "/" 
) => {
  const navigate = useNavigate();

  useEffect(() => {
    const usuario = localStorage.getItem(key);

    if (usuario) {

      navigate(rutaLogueado, { replace: true });
    } else {

      navigate(rutaNoLogueado, { replace: true });
    }
  }, [key, rutaLogueado, rutaNoLogueado, navigate]);
};
