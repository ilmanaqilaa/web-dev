// Siapin Canvas
const mycanvas = document.querySelector('#myCanvas');

// Mengatur ukuran canvas
mycanvas.width = window.innerWidth;
mycanvas.height = window.innerHeight;

// Menentukan apakah canvas yang akan dibuat #D atau 2D
const c = mycanvas.getContext('2d')

// Manipulasi Canvas


// rectangle 
c.fillStyle = 'orange';
c.strokeStyle = '#999';
c.lineWidth = '5';

c.rect(50, 50, 300, 300);
c.fill();
c.stroke();

// Circle/Arc
c.fillStyle = 'blue';
c.beginPath();
c.arc(550, 200, 150, 0, 2 * Math.PI);
c.fill();
c.stroke();

// Path/Triangle
c.fillStyle = 'navy';
c.beginPath();
c.moveTo(900, 50);
c.lineTo(1050, 350);
c.lineTo(750, 350);
c.closePath();
c.stroke();
c.fill();