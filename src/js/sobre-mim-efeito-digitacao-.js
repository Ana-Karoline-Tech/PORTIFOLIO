// Efeito de digitação
        function typeWriter() {
            const lines = document.querySelectorAll('.line-content');
            const cursor = document.querySelector('.typing-cursor');
            let currentLine = 0;
            let currentChar = 0;
            
            // Primeiro, limpar todo o conteúdo
            lines.forEach(line => {
                const originalContent = line.innerHTML;
                line.setAttribute('data-original', originalContent);
                line.innerHTML = '';
            });

            function typeNextChar() {
                if (currentLine >= lines.length) {
                    // Terminou de digitar tudo
                    return;
                }

                const line = lines[currentLine];
                const originalContent = line.getAttribute('data-original');
                
                if (currentChar >= originalContent.length) {
                    // Linha atual completa, passar para a próxima
                    currentLine++;
                    currentChar = 0;
                    
                    // Mover cursor para próxima linha
                    if (currentLine < lines.length) {
                        const nextLine = lines[currentLine];
                        nextLine.appendChild(cursor);
                    }
                    
                    setTimeout(typeNextChar, 100);
                    return;
                }

                // Arquivo legado: `sobre-mim-efeito-digitacao-.js`
                // Este arquivo foi renomeado para `sobre-mim-efeito-digitacao.js`.
                // Mantenho este stub para compatibilidade local; por favor, use a versão renomeada.
                console.warn('Arquivo sobrescrito: usar src/js/sobre-mim-efeito-digitacao.js');