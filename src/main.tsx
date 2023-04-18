import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import HomeController from './controllers/HomeController';
import LobbyController from './controllers/LobbyController';
import { WebsocketProvider } from './contexts/WebSocketContext';
//import ActionButton from './components/common/ActionButton/ActionButton';

const router = createBrowserRouter([
	{
		path: '/',
		element: <HomeController />,
		errorElement: <div>404 Not Found!</div>,
		children: [
			{
				path: 'lobby/:lobbyId',
				element: <LobbyController />
			}
		]
	}
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<WebsocketProvider>
			<RouterProvider router={router} fallbackElement={<div>Loading...</div>} />
		</WebsocketProvider>
	</React.StrictMode>
);
