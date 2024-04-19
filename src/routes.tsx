import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './app';
import Cardapio from './pages/Cardapio';
import Registration from './pages/Registration';

const AppRouter = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route index element={<Cardapio />} />
                    <Route path="cadastro" element={<Registration />} />
                </Route>
            </Routes>
        </Router>
    )
};

export default AppRouter;