var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(1000)
  .typeString('Equipos de computo')
  .pauseFor(1000)
  .deleteChars(18)
  .typeString('Muebles')
  .pauseFor(1000)
  .deleteChars(7)
  .typeString('Impresoras')
  .pauseFor(1000)
  .start(); 