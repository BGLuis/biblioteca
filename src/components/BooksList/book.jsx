import React from 'react'
import '../../style/Book.css'

// Os parametros são passados como props
// props são objetos que contém informações sobre o componente
export default function book({number, cover, title, description}) {
	return (
		<a href={`/book/${number}`} className='book-iten' key={number}>
			<div className='img'>
				<img src={cover} alt={`capa do ${title}`} />
			</div>
			<div className='info'>
				<h1>{title}</h1>
				<p>{description}</p>
			</div>
		</a>
	)
}
