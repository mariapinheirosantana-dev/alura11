// Cores da Monalisa Original (Renascença)
const SKIN_COLOR = { r: 198, g: 155, b: 108 };      // Tom de pele renascentista
const HAIR_COLOR = { r: 71, g: 52, b: 35 };         // Castanho escuro
const BACKGROUND_COLOR = { r: 101, g: 133, b: 107 }; // Verde-acinzentado
const LIPS_COLOR = { r: 165, g: 90, b: 75 };        // Vermelho terra
const EYES_COLOR = { r: 71, g: 57, b: 44 };         // Marrom escuro
const EYEWHITE_COLOR = { r: 245, g: 238, b: 225 };  // Branco morno

let mouseX = 0;
let mouseY = 0;
let centerX = 0;
let centerY = 0;

function setup() {
    let container = document.getElementById('p5-container');
    let w = min(window.innerWidth - 40, 800);
    let h = min(window.innerHeight - 200, 800);
    
    let canvas = createCanvas(w, h);
    canvas.parent('p5-container');
    centerX = width / 2;
    centerY = height / 2;
}

function draw() {
    // Background com cor original
    background(BACKGROUND_COLOR.r, BACKGROUND_COLOR.g, BACKGROUND_COLOR.b);
    
    // Rastrear posição do mouse
    mouseX = mouseX * 0.95 + pmouseX * 0.05;
    mouseY = mouseY * 0.95 + pmouseY * 0.05;
    
    centerX = width / 2;
    centerY = height / 2;
    
    // Desenhar Monalisa
    drawMonalisa(centerX, centerY);
}

function drawMonalisa(centerX, centerY) {
    let scale = min(width, height) / 400;
    
    push();
    translate(centerX, centerY);
    
    // Cabeça/Rosto
    drawFace(scale);
    
    // Cabelo
    drawHair(scale);
    
    // Olhos (com tracking do mouse)
    drawEyes(scale);
    
    // Nariz
    drawNose(scale);
    
    // Boca (sorriso famoso)
    drawMouth(scale);
    
    // Pescoço e ombros
    drawNeckAndShoulders(scale);
    
    pop();
}

function drawFace(scale) {
    fill(SKIN_COLOR.r, SKIN_COLOR.g, SKIN_COLOR.b);
    stroke(SKIN_COLOR.r - 30, SKIN_COLOR.g - 30, SKIN_COLOR.b - 30);
    strokeWeight(2 * scale);
    
    // Rosto principal (ovóide)
    ellipse(0, 0, 140 * scale, 180 * scale);
    
    // Sombreamento do rosto (leve degradé)
    fill(SKIN_COLOR.r - 20, SKIN_COLOR.g - 20, SKIN_COLOR.b - 20, 50);
    ellipse(-30 * scale, 20 * scale, 80 * scale, 100 * scale);
}

function drawHair(scale) {
    fill(HAIR_COLOR.r, HAIR_COLOR.g, HAIR_COLOR.b);
    noStroke();
    
    // Cabelo superior
    arc(0, -70 * scale, 150 * scale, 130 * scale, PI, TWO_PI);
    
    // Cabelo lateral esquerdo
    bezier(
        -70 * scale, -30 * scale,
        -90 * scale, 0 * scale,
        -75 * scale, 60 * scale,
        -50 * scale, 70 * scale
    );
    
    // Cabelo lateral direito
    bezier(
        70 * scale, -30 * scale,
        90 * scale, 0 * scale,
        75 * scale, 60 * scale,
        50 * scale, 70 * scale
    );
    
    // Franja
    fill(HAIR_COLOR.r - 10, HAIR_COLOR.g - 10, HAIR_COLOR.b - 10);
    ellipse(0, -50 * scale, 120 * scale, 40 * scale);
}

function drawEyes(scale) {
    // Olho esquerdo
    drawEye(-35 * scale, -20 * scale, scale);
    
    // Olho direito
    drawEye(35 * scale, -20 * scale, scale);
}

function drawEye(eyeX, eyeY, scale) {
    // Branco do olho
    fill(EYEWHITE_COLOR.r, EYEWHITE_COLOR.g, EYEWHITE_COLOR.b);
    stroke(SKIN_COLOR.r - 50, SKIN_COLOR.g - 50, SKIN_COLOR.b - 50);
    strokeWeight(1.5 * scale);
    ellipse(eyeX, eyeY, 25 * scale, 30 * scale);
    
    // Calcular direção para o mouse
    let dx = mouseX - eyeX;
    let dy = mouseY - eyeY;
    
    // Normalizar e calcular ângulo
    let angle = atan2(dy, dx);
    
    // Posição da pupila (seguir o mouse com limite)
    let pupilDistance = 8 * scale;
    let pupilX = eyeX + cos(angle) * pupilDistance;
    let pupilY = eyeY + sin(angle) * pupilDistance;
    
    // Desenhar pupila
    fill(EYES_COLOR.r, EYES_COLOR.g, EYES_COLOR.b);
    noStroke();
    circle(pupilX, pupilY, 14 * scale);
    
    // Reflexo de luz
    fill(255, 255, 255, 180);
    circle(pupilX - 4 * scale, pupilY - 4 * scale, 5 * scale);
    
    // Sobrancelha
    stroke(HAIR_COLOR.r - 10, HAIR_COLOR.g - 10, HAIR_COLOR.b - 10);
    strokeWeight(2 * scale);
    noFill();
    arc(eyeX, eyeY - 18 * scale, 28 * scale, 12 * scale, PI, 0);
}

function drawNose(scale) {
    fill(SKIN_COLOR.r - 15, SKIN_COLOR.g - 15, SKIN_COLOR.b - 15);
    noStroke();
    
    // Estrutura do nariz
    triangle(
        -5 * scale, -5 * scale,
        5 * scale, -5 * scale,
        0, 15 * scale
    );
    
    // Narinas
    fill(SKIN_COLOR.r - 40, SKIN_COLOR.g - 40, SKIN_COLOR.b - 40);
    circle(-8 * scale, 12 * scale, 3 * scale);
    circle(8 * scale, 12 * scale, 3 * scale);
}

function drawMouth(scale) {
    // O famoso sorriso enigmático
    stroke(LIPS_COLOR.r, LIPS_COLOR.g, LIPS_COLOR.b);
    strokeWeight(2.5 * scale);
    noFill();
    
    // Linha superior dos lábios
    bezier(
        -25 * scale, 45 * scale,
        -15 * scale, 50 * scale,
        15 * scale, 50 * scale,
        25 * scale, 45 * scale
    );
    
    // Linha inferior dos lábios
    bezier(
        -25 * scale, 45 * scale,
        -10 * scale, 55 * scale,
        10 * scale, 55 * scale,
        25 * scale, 45 * scale
    );
    
    // Preenchimento leve da boca
    fill(LIPS_COLOR.r, LIPS_COLOR.g, LIPS_COLOR.b, 100);
    stroke(LIPS_COLOR.r - 20, LIPS_COLOR.g - 20, LIPS_COLOR.b - 20);
    strokeWeight(1.5 * scale);
    bezier(
        -20 * scale, 46 * scale,
        -5 * scale, 52 * scale,
        5 * scale, 52 * scale,
        20 * scale, 46 * scale
    );
}

function drawNeckAndShoulders(scale) {
    // Pescoço
    fill(SKIN_COLOR.r - 5, SKIN_COLOR.g - 5, SKIN_COLOR.b - 5);
    stroke(SKIN_COLOR.r - 30, SKIN_COLOR.g - 30, SKIN_COLOR.b - 30);
    strokeWeight(1.5 * scale);
    rect(-20 * scale, 75 * scale, 40 * scale, 50 * scale);
    
    // Roupa/Ombros (tecido renascentista)
    fill(137, 110, 79); // Marrom terra
    noStroke();
    
    // Ombro esquerdo
    ellipse(-60 * scale, 130 * scale, 80 * scale, 60 * scale);
    
    // Ombro direito
    ellipse(60 * scale, 130 * scale, 80 * scale, 60 * scale);
    
    // Tecido central
    fill(156, 120, 85);
    quad(
        -50 * scale, 110 * scale,
        50 * scale, 110 * scale,
        70 * scale, 160 * scale,
        -70 * scale, 160 * scale
    );
}

// Atualizar tracking do mouse
function mouseMoved() {
    mouseX = mouseX || 0;
    mouseY = mouseY || 0;
}

// Responsividade
function windowResized() {
    let container = document.getElementById('p5-container');
    if (container) {
        let w = min(window.innerWidth - 40, 800);
        let h = min(window.innerHeight - 200, 800);
        resizeCanvas(w, h);
    }
}