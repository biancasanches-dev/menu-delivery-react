import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from 'styled-components';
import { IconContext } from 'react-icons';
import { GlobalStyles } from './styles/global';
import { theme } from './styles/theme';
import Router from './routes';
const queryClient = new QueryClient(); 

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<ThemeProvider theme={theme}>
				<GlobalStyles />
				<IconContext.Provider value={{ className: 'react-icons' }}>
					<Router />
				</IconContext.Provider>
			</ThemeProvider>
		</QueryClientProvider>
	</React.StrictMode>,
);
