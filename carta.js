const texto = `hola, bonita ;3. en esta fecha estoy demasiado agradecido de poder tenerte en mi vida. hace 22 años llegó la personita que es mi razón de ser y me cambió la forma en que veo muchas cosas, sobre todo el amor rn :3.

ojalá pudieras entrar algún día en mis ojos para que vieras lo especial que eres, lo suficiente que eres, lo gran mujer y persona que eres, lo PRECIOSA que eres. nunca me cansaré de decírtelo. hay días donde lloro de felicidad por amarte, porque eso mismo, amarte, me hace tan feliz que me pone sensible, pero mg pk se siente bonito amar y sentirse amado :,v.

gracias por ser tú y por dejarme disfrutar de tu compañía. sé que nos vamos a disfrutar los dos por muuuuuuuucho tiempo más, porque nuestro amor es infinito y nunca se acabará. quiero que cumplamos nuestras promesas, que mejoremos juntos y que nunca dejemos de ser nosotros, porque esa combinación es lo que nos hace especiales jj.

ya para despedirme, estoy orgulloso de ti, mi niña. sé que eres mayor que yo, pero eso no quita que quiera cuidarte y protegerte muchísimo. siempre serás mi princesita y espero que este día sea de los más felices de tu vida. tengo otro detalle para ti, pero ya lo verás con el paso del día <3`;

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
