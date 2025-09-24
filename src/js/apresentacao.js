const text = `💻 Transformo linhas de código em soluções inovadoras.
🤓 Apaixonada por tecnologia e resolução de problemas.
❤️ Construindo pontes digitais com programação. 💻

Vamos criar algo incrível juntos?

Desenvolvedora Frontend desbravando o mundo Fullstack.`;

        const typingElement = document.getElementById('typingText');
        const cursor = document.getElementById('cursor');
        let index = 0;
        let currentLine = '';

        // Velocidades diferentes para criar ritmo mais natural
        const speeds = {
            normal: 80,
            fast: 40,
            slow: 120,
            pause: 800
        };

        function getTypingSpeed(char) {
            if (char === '\n') return speeds.pause;
            if (char === ' ') return speeds.fast;
            if ('.,!?'.includes(char)) return speeds.slow;
            return speeds.normal + Math.random() * 40; // Variação natural
        }

        function typeText() {
            if (index < text.length) {
                const char = text[index];
                
                if (char === '\n') {
                    currentLine += '<br>';
                } else {
                    // Aplicar classes especiais para diferentes tipos de texto
                    let styledChar = char;
                    
                    // Destacar emojis
                    if (/[\u{1F300}-\u{1F9FF}]/u.test(char)) {
                        styledChar = `<span class="emoji">${char}</span>`;
                    }
                    // Destacar palavras-chave
                    else if (index > 0) {
                        const word = getWordAtIndex(index);
                        if (['Desenvolvedora', 'Frontend', 'tecnologia', 'programação'].includes(word)) {
                            styledChar = `<span class="highlight">${char}</span>`;
                        } else if (['soluções', 'inovadoras', 'digitais', 'incrível'].includes(word)) {
                            styledChar = `<span class="secondary">${char}</span>`;
                        } else if (['Apaixonada', 'Construindo', 'juntos'].includes(word)) {
                            styledChar = `<span class="accent">${char}</span>`;
                        }
                    }
                    
                    currentLine += styledChar;
                }
                
                typingElement.innerHTML = currentLine + cursor.outerHTML;
                index++;
                
                setTimeout(typeText, getTypingSpeed(char));
            } else {
                // Animação final quando termina
                setTimeout(() => {
                    cursor.style.animation = 'blink 0.8s infinite';
                }, 500);
            }
        }

        function getWordAtIndex(idx) {
            let start = idx;
            let end = idx;
            
            // Encontrar início da palavra
            while (start > 0 && /[a-zA-ZÀ-ÿ]/.test(text[start - 1])) {
                start--;
            }
            
            // Encontrar fim da palavra
            while (end < text.length && /[a-zA-ZÀ-ÿ]/.test(text[end])) {
                end++;
            }
            
            return text.slice(start, end);
        }

        // Iniciar a animação após um pequeno delay
        setTimeout(() => {
            typeText();
        }, 1000);

        // Efeito de scanline (opcional)
        function createScanline() {
            const scanline = document.createElement('div');
            scanline.style.cssText = `
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 2px;
                background: linear-gradient(90deg, transparent, #00ff41, transparent);
                animation: scan 3s linear infinite;
                pointer-events: none;
            `;
            
            const style = document.createElement('style');
            style.textContent = `
                @keyframes scan {
                    0% { top: 0; opacity: 1; }
                    100% { top: 100%; opacity: 0; }
                }
            `;
            document.head.appendChild(style);
            document.querySelector('.terminal').appendChild(scanline);
        }

        // Ativar scanline após 2 segundos
        setTimeout(createScanline, 2000);