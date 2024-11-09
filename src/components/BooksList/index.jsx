import React from 'react'
import axios from 'axios'
import BookConteiner from './book';
import '../../style/BookList.css'

// Busca os livros na API
const books = await axios.get("https://potterapi-fedeperin.vercel.app/pt/books").then((res) => {
	return res.data;
});

export default function index() {
	return  (
		<div className='book-list'>
			{
				// Mapeia os livros e retorna um componente BookConteiner para cada um
				books.map(
					(book) =>
					<BookConteiner number={ book.index } title={ book.title } description={ book.description } cover={ book.cover } />)
			}
		</div>
	)
}
