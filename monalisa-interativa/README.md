# Monalisa Interativa 🎨

Uma versão interativa da famosa obra "Monalisa" de Leonardo da Vinci, desenvolvida em **p5.js**, onde os olhos acompanham o movimento do seu mouse!

## Características ✨

- 👀 **Olhos Interativos**: Os olhos seguem o cursor do mouse em tempo real
- 🎨 **Cores Originais**: Utiliza as cores autênticas do quadro renascentista
- 📱 **Responsivo**: Adapta-se a diferentes tamanhos de tela
- ✨ **Animação Suave**: Tracking do mouse com interpolação suave
- 🎭 **Detalhes Realistas**: Cabelo, sobrancelhas, sorriso enigmático e muito mais

## Cores Utilizadas

| Elemento | RGB | Descrição |
|----------|-----|-----------|
| Pele | (198, 155, 108) | Tom renascentista |
| Cabelo | (71, 52, 35) | Castanho escuro |
| Fundo | (101, 133, 107) | Verde-acinzentado |
| Lábios | (165, 90, 75) | Vermelho terra |
| Olhos | (71, 57, 44) | Marrom escuro |
| Branco dos Olhos | (245, 238, 225) | Branco morno |

## Como Usar

### Localmente
1. Abra o arquivo `index.html` no seu navegador

### Estrutura de Arquivos

```
monalisa-interativa/
├── index.html          # Página principal
├── sketch.js           # Lógica p5.js
├── style.css          # Estilos
└── README.md          # Este arquivo
```

## Tecnologias

- **p5.js** - Biblioteca de criação gráfica
- **HTML5** - Estrutura
- **CSS3** - Estilização
- **JavaScript** - Lógica interativa

## Como Funciona

### Tracking do Mouse
A funcionalidade principal usa trigonometria para fazer os olhos acompanharem o cursor:

```javascript
// Calcular ângulo para o mouse
let angle = atan2(dy, dx);

// Posição da pupila (seguir o mouse com limite)
let pupilDistance = 8 * scale;
let pupilX = eyeX + cos(angle) * pupilDistance;
let pupilY = eyeY + sin(angle) * pupilDistance;
```

### Suavização de Movimento
```javascript
// Interpolação suave do mouse para movimento fluido
mouseX = mouseX * 0.95 + pmouseX * 0.05;
mouseY = mouseY * 0.95 + pmouseY * 0.05;
```

## Créditos

- **Obra Original**: Leonardo da Vinci (1503-1519)
- **Desenvolvido com**: p5.js

---

**Divirta-se interagindo com a Monalisa! 🎨✨**