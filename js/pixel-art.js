var paleta = document.getElementById('paleta');
var grillaDePixeles = document.getElementById('grilla-pixeles');
var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

// funcion para generar la paleta de colorPersonalizado
var generarPaletaDeColores = function() {
  for (var i = 0; i < nombreColores.length; i++) {
    var elementoDiv = document.createElement('div');
    elementoDiv.style.backgroundColor = nombreColores[i];
    elementoDiv.className = 'color-paleta';
    paleta.appendChild(elementoDiv);
  }
};

// funcion para generar la grilla de pixeles
var generarGrillaDePixeles = function() {
  for (var i = 0; i < 1750; i++) {
    var elementoDiv = document.createElement('div');
    grillaDePixeles.appendChild(elementoDiv);
  }
};

generarPaletaDeColores();
generarGrillaDePixeles();

// TODO: Estoy repitiendo codigo entre los 2 listeners

var cambiarColorActual = function (color){
  var indicadorDeColor = document.getElementById("indicador-de-color");
  var colorAnterior = indicadorDeColor.style.backgroundColor;
  indicadorDeColor.style.backgroundColor = color;
  console.log('Cambio de color: ' + colorAnterior + ' por ' + color);
};

var colorPaleta = document.getElementById('paleta');

// FIXME: Le sobra un parentesis al listener?,
colorPaleta.addEventListener('click',
  (function(e){
    // Se guarda el color seleccionado
    var colorActual = e.target.style.backgroundColor;
    cambiarColorActual(colorActual);
    // var indicadorDeColor = document.getElementById("indicador-de-color");
    // indicadorDeColor.style.backgroundColor = colorActual;
    // console.log(colorActual);
   })
);


// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');

colorPersonalizado.addEventListener('change',
  (function() {
    // Se guarda el color de la rueda en colorActual
    var colorActual = colorPersonalizado.value;
    cambiarColorActual(colorActual);
    // Completar para que cambie el indicador-de-color al colorActual
    // var indicadorDeColor = document.getElementById("indicador-de-color");
    // indicadorDeColor.style.backgroundColor = colorActual;
    // console.log(colorActual);
  })
);

// funcion para pintar la grillaDePixeles
grillaDePixeles.addEventListener('mousemove',
  (function(e) {
    if (clickOn) {
      var indicadorDeColor = document.getElementById("indicador-de-color");
      e.target.style.backgroundColor = indicadorDeColor.style.backgroundColor;
    }
  }));

var clickOn = false;
grillaDePixeles.addEventListener('mousedown',
  (function() {
    clickOn = true;
    console.log('clickOn es true');
  })
);
grillaDePixeles.addEventListener('mouseup',
  (function() {
    clickOn = false;
    console.log('clickOn es false');
  })
);

// function inicia(){
//   generarPaletaDeColores();
//   generarGrillaDePixeles();
// };
//
// inicia();
