const memeMaker = require('@erickwendel/meme-maker');

const options = {
  image: './img/meme2.jpg', // Required
  outfile: './img/meme.png', // Required
  topText: 'QUANDO TEM UM BUG EM PRODUÇÃO', // Required
  bottomText: 'MAS JÁ ENCERROU MEU EXPEDIENTE', // Optional
  // font: './../impact.ttf', // Optional
  // fontSize: 50, // Optional
  // fontFill: '#FFF', // Optional
  // textPos: 'center', // Optional
  // strokeColor: '#000', // Optional
  // strokeWeight: 2, // Optional
};

memeMaker(options)
  .then((_) => {
    console.log('Image saved: ' + options.outfile);
  })
  .catch((error) => console.log(error));
