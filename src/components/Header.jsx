import React from 'react'
import '../style/Header.css'
import { FaArrowLeft  } from "react-icons/fa";

// Dados fixos do usuario
const user = {
	name: "sara",
	img:"https://cdn.discordapp.com/avatars/1216057426005065840/ba14e82035311a0ed348af3c639a6051.webp?size=80",
}
export default function Header() {
	return (
		<header>
			<div className='user'>
				<div className='img'>
					<img src={ user.img } alt="imagem usuario" />
				</div>
				<h3>Ola, { user.name }</h3>
			</div>
			<a href="/"><FaArrowLeft />{ /*icone importado da biblioteca */}</a>
		</header>
	)
}
