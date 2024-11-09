import React from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../style/BookPage.css'

// Busca os livros na API
const books = await axios.get("https://potterapi-fedeperin.vercel.app/pt/books").then((res) => {
	return res.data;
});


export default function Book() {
  const { id } = useParams(); // pegar o id do livro da URL
  const selectedBook = books[id];

  return (
    <>
      <Header />
      <main>
        <div className="book-container">
          <div className='img'>
            <img src={selectedBook.cover} alt={selectedBook.title} />
          </div>
          <h1>{selectedBook.title}</h1>
          <p>{selectedBook.description}</p>
        </div>
      </main>
      <Footer />
    </>
  )
}
