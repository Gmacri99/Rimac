import { useNavigate } from "react-router-dom";
import { useDataContext } from "../context/context";

export const useRedirect = () => {
  const navigate = useNavigate();
  const {setData,setOption}=useDataContext()

  const logout = () => {
    localStorage.removeItem("Usuario");
    setOption(undefined)
    setData(null)
    navigate("/");
  };

  const redirectPlan = () => {
    navigate("/planes");
  };

  return { logout, redirectPlan };
};
