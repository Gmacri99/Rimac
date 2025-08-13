import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDataContext } from "../context/context";

export const useAuthRedirect = (
  key: string = "Usuario",
  rutaLogueado: string = "/planes",
  rutaNoLogueado: string = "/"
) => {
  const navigate = useNavigate();
  const location = useLocation();
  const {selectedPlan}=useDataContext()

  useEffect(() => {
    const usuario = localStorage.getItem(key);
    
    if (usuario) {
      if (location.pathname === rutaNoLogueado) {
        navigate(rutaLogueado, { replace: true });
      }
      if (location.pathname === '/resumen' && !selectedPlan) {
        navigate(rutaLogueado, { replace: true });
      }
    } else {
      if (location.pathname !== rutaNoLogueado) {
        navigate(rutaNoLogueado, { replace: true });
      }
    }
  }, [key, rutaLogueado, rutaNoLogueado, navigate, location.pathname]);
};
