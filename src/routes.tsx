import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './app';
import Cardapio from './pages/Cardapio';
import Registration from './pages/Registration';
import Cart from './pages/Cart';

const AppRouter = () => {
	return(
		<Router>
			<Routes>
				<Route path="/" element={<App />}>
					<Route index element={<Cardapio />} />
					<Route path="cadastro" element={<Registration />} />
					<Route path="carrinho" element={<Cart />} />
				</Route>
				<Route path="*" element={<h1>Not Found</h1>} />
			</Routes>
		</Router>
	);
};

export default AppRouter;