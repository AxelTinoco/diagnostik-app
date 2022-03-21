import { Routes, Route} from "react-router-dom";
import { LoginScreen } from "../components/auth/LoginScreen";
import { RegisterScreen } from "../components/auth/RegisterScreen";

export const AuthRouter = () => {
    return (
      
        
        <Routes>
                 <Route path="/auth/login"  element={<LoginScreen />} />
                 <Route path="/auth/register" element={<RegisterScreen />} />
        </Routes>
    

    
    )
}
