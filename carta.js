const texto = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Sed euismod, nunc at facilisis suscipit, nisl nunc faucibus sapien, eget ullamcorper lorem justo sit amet massa.

Praesent at lacus ac eros vulputate viverra. 
Integer nec eros vitae quam ultricies vehicula. 
Curabitur commodo eros in erat consequat, nec posuere mauris viverra.

Suspendisse potenti. Duis a sapien nec tortor feugiat eleifend. 
Mauris egestas, felis vitae mattis sodales, risus felis malesuada libero, a interdum massa libero eget orci.

Nulla facilisi. Vivamus sed risus nec nunc suscipit tincidunt. 
Ut id mauris quis erat rhoncus feugiat. 
Donec fringilla, purus vitae aliquam tincidunt, felis risus malesuada risus, eget malesuada leo augue id sapien.`;

let i = 0;
const speed = 40; // velocidad en ms

function typeWriter() {
  if (i < texto.length) {
    document.getElementById("carta-texto").innerHTML += texto.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

window.onload = typeWriter;
