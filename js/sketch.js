//Andrea Ginés
//EXERCICI 2: MOSAIC



//Realitzo variants per cada color que utilitzaré per cada element del canva. Tots els colors que utilitzaré després seràn indicats com a random

var color1;
var color2;
var color3;
var color4;
var color5;
var color6;
var color7;
var color8;
var color9;

//estableixo les variants de les mesures del canva. Aquestes variants s'han realitzat amb l'objectiu de que canvian la mida del canvas el disseny no varii i es conservi la relació d'aspecte

var canvasWidth = 400;
var canvasHeight = 400;

function setup() {
  createCanvas(canvasWidth, canvasHeight);

// Utilitzo la funció random en cada color dels elements del canva amb l'objectiu de que cada vegada que es doni a l'start, els colors de tot el canva canviïn
  
  color1 = color(random(255), random(255), random(255));
  color2 = color(random(255), random(255), random(255));
  color3 = color(random(255), random(255), random(255));
  color4 = color(random(255), random(255), random(255));
  color5 = color(random(255), random(255), random(255));
  color6 = color(random(255), random(255), random(255));
  color7 = color(random(255), random(255), random(255));
  color8 = color(random(255), random(255), random(255));
  color9 = color(random(255), random(255), random(255));
}

function draw() {
  
  //s'estableix el color del fons
  background(color9);
  
  //estableixo on vull que el patro1 es trobi
  patro1(25);
  
  //estableixo on s'ubicarà i dibuixarà el motiu secundari
  motiuSecundari(25, 30);
}

// faig la funció del patró principal a partir d'una estructura condicional. Aquí estableixo els elements que vull que apareixin en la composició:rectangle, ellipse, cercle, linia, punt

function patro1(diametre) {
  for (var i = 0; i <= width; i = i + diametre) {
    for (var j = 0; j <= height; j = j + diametre) {
      if ((j / diametre) % 2 == 0) {
        objecte2(i, j, diametre);
      } else {
        objecte1(i, j, diametre);
      }
    }
  }
}

//realitzo la funció objecte 1 que es troba en l'estructura condicional de la funció anterior

function objecte1(x, y, diametre) {
  strokeWeight(1);
  fill(color1);
  
  //faig els rectangles que es trobarà darrere de la resta d'elements
  rect(x, y, diametre);
  
  //faig els cercles que s'ubicaran ón es creuen dues línies i s'aniràn alternan amb uns altres cercles més grans i elaborats
  fill(color2);
  circle(x, y, diametre / 2);
  
  //faig les línies ubicades en tot el canvas i que s'interceptaran entre elles crean creus
  fill(color3);
  line(x + diametre / 3, y, x - diametre / 3, y);
  line(x, y + diametre / 3, x, y - diametre);
  
  //faig els punts que es troben dins dels cercles més petits
  stroke(color4);
  strokeWeight(6);
  point(x, y);
}
//realitzo la funció objecte2 que es troba en l'estructura condicional de la funció anterior
function objecte2(x, y, diametre) {
  strokeWeight(1);
  fill(color5);
  
  //creo el cercles més grans del canvas, aquests tindràn una ellipse,un cercle més petit a dins i unes línies que s'uniràn amb les de l'objecte 2 crean així una mena de rajola
  circle(x, y, diametre);
  fill(color6);
  
  //creo ellipse dins dels cercles grans
  ellipse(x, y, diametre, diametre / 2);
  fill(color7);
  
  //línies dins dels cercles
  line(x + diametre / 3, y, x - diametre, y);
  line(x, y + diametre / 3, x, y - diametre);
}
//creo el patró secundari i utilitzo la forma del cercle que es superposaran en la mitat del canvas en les esferes que estàn interferides per una el·lipse
function motiuSecundari(diametre) {
  for (var i = 0; i <= width; i = i + diametre) {
    for (var j = 0; j <= height; j = j + diametre) {
      if ((j / diametre) % 2 == 0) {
        motiu1(i - 230, j - 30, 30);
      }
    }
    //realitzo una funció per al motiu del patró secundari que estarà realitzat a partir de cercles
    function motiu1(x, y, diametre) {
      fill(color8);
      circle(x + 30, y + 30, diametre / 4);
    }
  }
}
