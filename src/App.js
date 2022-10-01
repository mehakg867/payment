import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import AppRoute from './Route/AppRoute';


function App() {
  return (
<Router>
<AuthProvider>        
        <AppRoute />
      </AuthProvider>
</Router>

  );
}

export default App;
