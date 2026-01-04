// Script simples para controlar menu hamburguer caso exista na página
document.addEventListener('DOMContentLoaded', () => {
	const menuButton = document.querySelector('.menu');
	const nav = document.querySelector('header nav');

	if (menuButton && nav) {
		menuButton.addEventListener('click', () => {
			nav.classList.toggle('menu-open');
		});
	}

	// Adiciona comportamento para links do navbar em modo mobile
	const navLinks = document.querySelectorAll('.navbar-link');
	navLinks.forEach(link => {
		link.addEventListener('click', () => {
			// fecha menu mobile se estiver aberto
			if (nav && nav.classList.contains('menu-open')) {
				nav.classList.remove('menu-open');
			}
		});
	});
});
