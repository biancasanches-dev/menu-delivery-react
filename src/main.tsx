import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from 'styled-components';
import { IconContext } from 'react-icons';
import { GlobalStyles } from './styles/global';
import { theme } from './styles/theme';
import Router from './routes';
import { AuthProvider } from './contexts/AuthContext';
import CartProvider from './contexts/CartContext';
const queryClient = new QueryClient(); 

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<ThemeProvider theme={theme}>
				<GlobalStyles />
				<IconContext.Provider value={{ className: 'react-icons' }}>
					<AuthProvider>
						<CartProvider>
							<Router />
						</CartProvider>
					</AuthProvider>
				</IconContext.Provider>
			</ThemeProvider>
		</QueryClientProvider>
	</React.StrictMode>,
);
