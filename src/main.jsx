import * as React from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './ErrorPage'
import Contact from './routes/contact/Contact'
import { contactLoader } from './routes/contact/contactLoader'
import Root from './routes/root/Root'
import { rootAction } from './routes/root/rootAction'
import { rootLoader } from './routes/root/rootLoader'
import './styles/index.css'

const router = createBrowserRouter([
	// Root route
	{
		path: '/', // Root path
		element: <Root />, // Root component
		errorElement: <ErrorPage />, // Error component
		loader: rootLoader,
		action: rootAction,
		children: [
			/*
                Whatever components are added as children will render
                inside the parent component (in this case, Root).
            */
			{
				path: 'contacts/:contactId', // :contactId is the dynamic segment, and will be accessed through URL Params
				element: <Contact />,
				loader: contactLoader
			}
		]
	}
])
const container = document.getElementById('root')

createRoot(container).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)
