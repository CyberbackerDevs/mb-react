import logo from './logo.svg';
import './App.css';
import './assets/css/login.css';
import style from './assets/css/style.js';



/**
 * import route dom
 */
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

/**
 * import pages
 */
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import Billing from "./pages/billing";
import Referrals from "./pages/referrals";

function App() {
	return (
		<Router>
			<Routes>
				<Route exact path="/" element={<Login />} />
				<Route exact path="/dashboard" element={<Dashboard />} />
				<Route exact path="/billing" element={<Billing />} />
				<Route exact path="/referrals" element={<Referrals />} />
			</Routes>
		</Router>
	);
}

export default App;
