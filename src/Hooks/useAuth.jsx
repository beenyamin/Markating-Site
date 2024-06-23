import { useContext } from "react";
import { AuthContext } from "../Provider/Auth/AuthProvider";


const useAuth = () => {
      const Auth = useContext(AuthContext);
      return Auth;
};

export default useAuth;