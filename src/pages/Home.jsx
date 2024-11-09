import React from 'react'
import Header from '../components/Header';
import Booklist from '../components/BooksList';
import Footer from '../components/Footer';


// <> é um fragmento, que é uma forma de retornar mais de um elemento sem precisar de uma div
export default function home() {
	return (
		<>
			<Header />
			<Booklist />
			<Footer />
		</>
	)
}
