
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";


import Header from './components/Header';
import About from './components/About';
import Error from './components/Error';
import Contact from './components/Contact';
import Body from './components/Body';
import RestaurantMenu from './components/RestaurantMenu';
import Footer from './components/Footer';






const AppLayout = () => {
	return (
		<div className="app">
			<Header />
			<Outlet />
			<Footer />
		</div>
	)
}

const appRouter = createBrowserRouter([
	{
		path: "/",
		element: <AppLayout />,
		children: [
			{
				path: "/",
				element: <Body />
			},
			{
				path: "/about",
				element: <About />
			},
			{
				path: "/contact",
				element: <Contact />
			},
			{
				path: "/restaurant/:resId",
				element: <RestaurantMenu />
			}
		],
		errorElement: <Error />
	}

])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<RouterProvider router={appRouter} />
);




