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

                // Digitar próximo caractere
                const currentText = originalContent.substring(0, currentChar + 1);
                line.innerHTML = currentText;
                line.appendChild(cursor);
                
                currentChar++;
                
                // Velocidade variável baseada no tipo de caractere
                let speed = 30;
                const char = originalContent[currentChar - 1];
                if (char === ' ') speed = 10;
                if (char === '\n') speed = 100;
                if (originalContent.includes('comment') || originalContent.includes('Comment')) speed = 20;
                
                setTimeout(typeNextChar, speed);
            }

            // Iniciar na primeira linha
            if (lines.length > 0) {
                lines[0].appendChild(cursor);
                setTimeout(typeNextChar, 500);
            }
        }

        // Iniciar efeito quando página carregar
        window.addEventListener('load', () => {
            setTimeout(typeWriter, 1000);
        });

        // Reiniciar efeito ao clicar no editor
        document.querySelector('.code-editor').addEventListener('click', () => {
            location.reload();
        });