// Siapin Canvas
const mycanvas = document.querySelector('#myCanvas');

// Mengatur ukuran canvas
mycanvas.width = window.innerWidth;
mycanvas.height = window.innerHeight;

// Menentukan apakah canvas yang akan dibuat #D atau 2D
const c = mycanvas.getContext('2d')

// Manipulasi Canvas


// Buat rectangle 
c.fillStyle = 'pink';
c.strokeStyle = '#999';
c.lineWidth = '5';

