// Blau Arbiol i Andrea Gines
// Practica 2 - Cartell de Pelicula

//La pelicula escollida es Aftersun. Va sortir el 2022 i la va dirigir la Chalotte Wells. Tracta duna nena (Frankie Corio) que va de vacances amb el seu pare (Paul Mescal), divorciat de la seva mare. Sinterpreta que aquesta sera lultima vegada que el veura, i que aquests son els seus ultims records amb ell.

//Aquest cartell te 3 escenes:
//La primera escena es quan el pare li fa una fotografia a la protagonista i sen va, per aixo quan cliques es fa mes gran i mes petit, per donar aquesta ilusio de que sallunya i sapropa.
//La segona escena el pare es quan es posa damunt del balco, i hem fet que desaparegui per representar la manera que desapareix dels records de la seva filla lentament, fins que ja no sap si el que recorda es el que va passar.
//La tercera escena es una imatge del pare que va fent pampallugues, com si sestessin obrim i tancant les llums. Aixo fa referencia a una escena on estan ballant ell i la seva filla, i les llums es comencen a obrir i tancar, cosa que fa que la protagonista no acabi de veure al seu pare.
//Les tres escenes tenen un overlay duna foto digital, ja que les fotografies i videos son una part important de la historia, perque es la unica manera que la filla pot recordar coses que sap que son reals, ja que els records la poden enganyar.
//El text que sha inclos ha estat una critica de The Guardian que li dona 5 estrelles a la pelicula i diu que es una primera pelicula de la directora espectacular, el titol de la pelicula(aftersun), i a baix de les imatges els noms de lactor i lactriu principals(Paul Mescal i Frankie Corio)

//Es determinen les variables per les imatges i per un color
let img1;
let img2;
let img3;
let img4;
let img5;
let img6;
let col1 = "black";
//Determinem la variable desapareix= quants pixels desapareixen a cada loop
let desapareix = 500;
//Determinem la variable augment per veure quan augmentara o disminuira una imatge quan es cliqui
let augment = 1;
//li diem que la variable gran es veritat per a que augmenti o disminueixi la mida de la imatge
let gran = true;
//Determinem la variable que dira cada quan canvia el color del text
let canvi = 0;
//Li diem la primera llista, la dels colors del text, aquesta ja esta completa
let llistaColors = ["darkblue", "tomato", "skyblue"];
//Li posem les altres dos llistes, una pel text que li posarem, i laltra per les fonts del text. Aquestes son llistes buides que plenarem despres
let llistaText = [];
let llistaFonts = [];
//Determinem com a variable el color del titol si no hi ha canvi
let colortitol = "darkblue";

function preload() {
  //Carreguem a la funcio preload totes les imatges que utilitzarem en aquesta practica, daquesta manera es carreguen abans dexecutar el codi, i els donem el nom a cada variable
  img1 = loadImage("imatges/pasadis.JPG");
  img2 = loadImage("imatges/pauls.jpg");
  img3 = loadImage("imatges/cara.JPG");
  img4 = loadImage("imatges/marxa.PNG");
  img5 = loadImage("imatges/foto.PNG");
  img6 = loadImage("imatges/overlay.jpg");
}

function setup() {
  //Posem la mida del canvas, que no ha de ser variable
  createCanvas(720, 1280);
  //Li diem que les imatges i els rectangles salinein al centre i els angles es determinin amb graus. Com salinea el text ho determinarem despres depen de la seccio
  imageMode(CENTER);
  angleMode(DEGREES);
  rectMode(CENTER);

  //Afegim una funcio per emplenar les dos llistes buides
  plenarLlistes();
}

function draw() {
  //Deixem el fons de color blanc
  background(255);
  //Determinem on comença el while
  let posx = 310;
  //Afegim la funcio while per a que es vegui la funcio estrella, daquesta manera podem veure les cinc estrelles en forma de rating a dalt de tot
  while (posx <= 410) {
    estrella(posx, 50);
    //Li diem la separacio entre estrella i estrella
    posx += 25;
  }
  //Cridem la funcio de comentari, que es veu a dalt de tot
  comentari();
  //Cridem la funcio de imatge1, que son les dos imatges que es veuen mes a dalt
  imatge1();
  //Cridem la funcio de imatge2, que son les dos imatges que es veuen al mig
  imatge2();
  //Cridem la funcio de imatge3, que es la imatge i el rectangle que es veuen mes a baix
  imatge3();
  //Cridem la funcio de textPeli, que es el text del titol i dels dos actors
  textPeli();
  //Cridem la funcio de overlays, que son les imatges superposades damunt de les tres escenes
  overlays();

  //Li diem que augmenti la variable "canvi" en 1 cada vegada que sexecuta el codi
  canvi = canvi + 1;

  //Determinem cada quan canvia
  if (canvi == 500) {
    //Si la condicio es compleix utilitzen el random per triar un numero entre el 0 i el 3. Depen del numero es veura un cas diferent que esta dins del switch
    let col = int(random(3));

    //Utilitzem la funcio switch per determinar quin color de la llista de colors es veura a "colortitol"
    switch (col) {
      //Si "col" es 1
      case 1:
        //Li posem el primer color de la llista "llistaColors" a "colortitol"
        colortitol = llistaColors[0];
        //Tanquem el cas 1
        break;
      //Si "col" es 2
      case 2:
        //Li posem el segon color de la llista "llistaColors" a "colortitol"
        colortitol = llistaColors[1];
        //Tanquem el cas 2
        break;
      //Si "col" no es ni 1 ni 2 per defecte sera aquest
      default:
        //Li posem el tercer color de la llista "llistaColors" a "colortitol"
        colortitol = llistaColors[2];
        //Tanquem el cas default (per defecte)
        break;
    }

    //Reiniciem la variable canvi a 0 per començar una altra vegada
    canvi = 0;
  }
}

//Fem una funció anomenada estrella que utilitza la funció rotate per ferse i tambe la funció for
function estrella(posx, posy) {
  push();
  translate(posx, posy);
  //Fem un bucle for per crear les cinc puntes de la estrella
  for (punta = 1; punta <= 5; punta = punta + 1) {
    noStroke();
    //Posem el "fill" del triangle amb el mateix color que el text, perque tambe vagi canviant
    fill(colortitol);
    triangle(-5, 0, 5, 0, 0, -10);
    //Li diem que roti 5 vegades en 360, i aixi crea una estrella
    rotate(360 / 5);
  }
  pop();
}

//A la funcio imatge1 posem la primera imatge, i afegim la img4 i utilitzem la funcio scale per dirli que es faci gran, cosa que acabarem de determinar dins del mousePressed
function imatge1() {
  image(img1, width / 2, 415, 500, 269);

  // Translate i scale de la img4
  push();
  translate(width / 2, 410);
  scale(augment);
  image(img4, 0, 0, 500, 269);
  pop();
}

//A la funcio imatge2 posem la segona imatge, i afegim la imatge que volem que desaparegui, he agafat el codi de happy coding i lhe modificat perque enlloc de que els pixels es tornin negres, facin que la opacitat arribi a zero
function imatge2() {
  //Amb la funcio loadPixels li diem que carregui les dades dels pixels de img5
  img5.loadPixels();
  for (let i = 0; i < desapareix; i++) {
    //Li diem que la variable agafi una coordenada x aleatoria
    let x = floor(random(img5.width));
    //Li diem que la variable agafi una coordenada y aleatoria
    let y = floor(random(img5.height));
    //Li diem que calculi lindex del pixel al array. Loperacio converteix les coordenades x i y en un index linial, i ho multipliquem per 4 perque cada pixel te 3 colors (roig, verd i blau) i el aplha(la opacitat)
    let index = (x + y * img5.width) * 4;
    //Li diem que el alpha (el que determina la opacitat duna imatge) es torni 0 (completament transparent)
    img5.pixels[index + 3] = 0;
  }
  //La funcio updatePixels actualitza la imatge amb les dades modificades
  img5.updatePixels();
  //Diem que dibuixi la img2
  image(img2, width / 2, height / 2 + 60, 500, 269);
  //Diem que dibuixi la img5 damunt de la img2
  image(img5, width / 2, height / 2 + 60, 500, 269);
}

//A la funcio imatge3 posem la tercera imatge, i afegim un rectangle negre per a donar la sensacio de que hi ha una llum que fa pampallugues.
function imatge3() {
  image(img3, width / 2, 980, 500, 269);
  //Aqui li diem cada quan volem que es vegui el rectangle
  if (frameCount % 20 < 10) {
    noStroke();
    fill(col1);
    rect(width / 2, 980, 500, 269);
  }
}

//a la funcio comentari posem el text que es veura a damunt de tot, un comentari de la revista The Guardian que va fer de la pelicula
function comentari() {
  //lemplenat del text es la funcio que fa que canvii de color
  fill(colortitol);
  //Hem alineat el text al centre i posat una font del sistema
  textAlign(CENTER);
  textFont(llistaFonts[0]);
  textSize(17);
  text(llistaText[0], width / 2, 75);
  push();
  textAlign(CENTER);
  //Hem utilitzat scale per fer el text mes petit i translate per posarlo on toca, i hem utilitzat la mateixa font
  scale(0.6);
  translate(240, 80);
  textSize(17);
  text(llistaText[1], width / 2, 75);
  pop();
}

//a la funcio textPeli posem el titol de la pelicula i el nom dels actors
function textPeli() {
  //lemplenat del text es la funcio que fa que canvii de color
  fill(colortitol);
  //Hem alineat el text a lesquerra i posat una font del sistema
  textAlign(LEFT, CENTER);
  textFont(llistaFonts[0]);
  textSize(30);
  text(llistaText[2], 110, 1145);
  //Hem alineat el text a la dreta i posat una font del sistema
  push();
  textAlign(RIGHT, CENTER);
  textFont(llistaFonts[0]);
  textSize(30);
  //Hem utilitzat translate per moure el text
  translate(500, 0);
  text(llistaText[3], 110, 1145);
  pop();
  //Hem alineat el text al mig i posat una font personalitzada
  textAlign(CENTER);
  textFont(llistaFonts[1]);
  textSize(125);
  text(llistaText[4], width / 2, 210);
}

//A la funcio overlays posem la imatge duna textura de camera digital amb blend, amb multiply per a que es vegi la textura per damunt de les altres imatges
function overlays() {
  push();
  //Determinem quina imatge volem utilitzar i on es troba en relacio a la imatge amb la que sha de "multiplicar", amb aquest cas on esta la funcio imatge1
  blend(
    img6,
    0,
    0,
    img6.width,
    img6.height,
    width / 2 - 250,
    280,
    500,
    269,
    MULTIPLY
  );
  //Determinem quina imatge volem utilitzar i on es troba en relacio a la imatge amb la que sha de "multiplicar", amb aquest cas on esta la funcio imatge2
  blend(
    img6,
    0,
    0,
    img6.width,
    img6.height,
    width / 2 - 250,
    height / 2 + 60 - 134.5,
    500,
    269,
    MULTIPLY
  );
  //Determinem quina imatge volem utilitzar i on es troba en relacio a la imatge amb la que sha de "multiplicar", amb aquest cas on esta la funcio imatge3
  blend(
    img6,
    0,
    0,
    img6.width,
    img6.height,
    width / 2 - 250,
    980 - 134.5,
    500,
    269,
    MULTIPLY
  );
  pop();
}

//A la funcio plenarLlistes semplenen les dos llistes buides, aquesta funcio es crida al setup
function plenarLlistes() {
  //Plenem la llista del text amb tot el text que volem
  llistaText.push("An amazing feature debut");
  llistaText.push("-The Guardian");
  llistaText.push("Paul Mescal");
  llistaText.push("Frankie Corio");
  llistaText.push("aftersun");

  //Plenem la llista de les fonts amb una font de sistema, Times New Roman, i una personalitzada, Cactus Classical Serif
  llistaFonts.push("Times New Roman");
  llistaFonts.push("Cactus Classical Serif");
}

//A la funcio de mousePressed li diem que volem que canvii quan es fa clic, en aquest cas la mida duna imatge
function mousePressed() {
  //Li diem que ajusti la mida quan cliqui
  if (gran) {
    //Aqui li diem que "augment" incrementa en 0.1 cada vegada que es clica
    augment += 0.1;
    // Li diem que si "augment" supera 0.8, canvii "gran" a false
    if (augment > 0.8) gran = false;
  } else {
    //Llavors "augment" es fa petit en 0.1 cada vegada que es clica
    augment -= 0.1;
    //I si "augment" es fa mes petit que 0.5, torna a canviar "gran" a true
    if (augment < 0.5) gran = true;
  }
}
