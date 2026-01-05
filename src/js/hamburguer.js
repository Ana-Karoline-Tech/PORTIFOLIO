// Script simples para controlar menu hamburguer caso exista na página
document.addEventListener('DOMContentLoaded', () => {
	const menuButton = document.querySelector('.menu');
	// Seleciona o nav pelo seletor principal; mantém fallback para "header nav"
	const nav = document.querySelector('.cyberpunk-navbar') || document.querySelector('header nav');

	// Debounce/lock para evitar múltiplos cliques rápidos durante animação
	let isAnimating = false;
	const ANIM_DURATION = 300; // ms (ajuste conforme animação CSS)

	if (menuButton && nav) {
		// estado inicial de acessibilidade
		menuButton.setAttribute('aria-expanded', 'false');

		menuButton.addEventListener('click', () => {
			if (isAnimating) return;
			isAnimating = true;
			const opened = nav.classList.toggle('menu-open');
			menuButton.setAttribute('aria-expanded', opened ? 'true' : 'false');
			setTimeout(() => { isAnimating = false; }, ANIM_DURATION);
		});
	}

	// Adiciona comportamento para links do navbar em modo mobile
	const navLinks = document.querySelectorAll('.navbar-link');
	navLinks.forEach(link => {
		link.addEventListener('click', () => {
			// fecha menu mobile se estiver aberto
			if (nav && nav.classList.contains('menu-open')) {
				nav.classList.remove('menu-open');
				if (menuButton) menuButton.setAttribute('aria-expanded', 'false');
			}
		});
	});
});
