import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const pizzaData = [
	{
		name: 'Focaccia',
		ingredients: 'Bread with italian olive oil and rosemary',
		price: 6,
		photoName: 'pizzas/focaccia.jpg',
		soldOut: false,
	},
	{
		name: 'Pizza Margherita',
		ingredients: 'Tomato and mozarella',
		price: 10,
		photoName: 'pizzas/margherita.jpg',
		soldOut: false,
	},
	{
		name: 'Pizza Spinaci',
		ingredients: 'Tomato, mozarella, spinach, and ricotta cheese',
		price: 12,
		photoName: 'pizzas/spinaci.jpg',
		soldOut: false,
	},
	{
		name: 'Pizza Funghi',
		ingredients: 'Tomato, mozarella, mushrooms, and onion',
		price: 12,
		photoName: 'pizzas/funghi.jpg',
		soldOut: false,
	},
	{
		name: 'Pizza Salamino',
		ingredients: 'Tomato, mozarella, and pepperoni',
		price: 15,
		photoName: 'pizzas/salamino.jpg',
		soldOut: true,
	},
	{
		name: 'Pizza Prosciutto',
		ingredients: 'Tomato, mozarella, ham, aragula, and burrata cheese',
		price: 18,
		photoName: 'pizzas/prosciutto.jpg',
		soldOut: false,
	},
];

function App() {
	return (
		<div className="container">
			<Header />
			<Menu />
			<Footer />
		</div>
	);
}
function Header() {
	return (
		<header className="header">
			<h1>Fast React Pizza Co.</h1>
		</header>
	);
}
function Menu() {
	return (
		<main className="menu">
			<h2>Our Menu</h2>
			<p>
				Authentic Italian cuisine. 6 creative dishes to choose from. All from our stone oven, all organic, all
				delicious.
			</p>
			<ul className="pizzas">
				{pizzaData.map((pizza) => (
					<Pizza pizza={pizza} />
				))}
			</ul>
		</main>
	);
}
function Pizza({ pizza }) {
	return (
		<li className={`pizza ${pizza.soldOut ? 'sold-out' : ''}`}>
			<img src={pizza.photoName} alt={pizza.pizzaName} />
			<div>
				<h3>{pizza.pizzaName}</h3>
				<p>{pizza.ingredients}</p>
				<span>{pizza.soldOut ? 'SOLD OUT' : pizza.price}</span>
			</div>
		</li>
	);
}
function Footer() {
	const hours = new Date().getHours();
	const openHours = 12;
	const closeHours = 22;
	const isOpen = hours >= openHours && hours < closeHours;
	return (
		<footer className="footer">
			{isOpen ? (
				<div className="order">
					<p>We're open until {closeHours}:00. Come visit us or order online.</p>
					<button className="btn">Order</button>
				</div>
			) : (
				<p>
					We're happy to welcome between {openHours}:00 and {closeHours}:00.
				</p>
			)}
		</footer>
	);
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
