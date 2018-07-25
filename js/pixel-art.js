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

var tamanoGrilla = 1750;

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
  for (var i = 0; i < tamanoGrilla; i++) {
    var elementoDiv = document.createElement('div');
    grillaDePixeles.appendChild(elementoDiv);
  }
};

// funcion para borrar la grilla de pixeles
/* sin jquery */
// function borrarGrilla() {
//   var $pixeles = $("#grilla-pixeles div");
//   for (var i = 0; i < tamanoGrilla; i++) {
//     $pixeles[i].style.backgroundColor = '#f9913c';
//   }
// };
// // eventListener para borrar Grilla
// var botonBorrar = document.getElementById('borrar');
// botonBorrar.addEventListener('click', function() {
//   borrarGrilla(); //esta bien llamarla desde aca o se podria reemplazar en el parametro del addEventListener lugo del click ??
// });

// funcion para borrar la grilla de pixeles
/* con jquery */

// TODO: no entiendo lo siguiente de la guia "Recomiendan los/as Pro: conviene guardar en una variable todos los <div> (píxeles) de grilla-pixeles y trabajar con ellos para borrarlos."
$( "#borrar" ).click(function() {
  $( "#grilla-pixeles div" ).each(function() {
    $( this ).animate({backgroundColor:"#ffffff"}, 3000);
  });
});

$("#guardar").click(function(){
  guardarPixelArt();
});


// funcion para cargar los superheroes en la grillla
// TODO: fijarse en vez de usar el swith usar eval
$(".imgs li img").click(function(){
  var superhero = $(this).prop('id');
  switch (superhero) {
    case "batman":
      cargarSuperheroe(batman);
      break;
    case "flash":
      cargarSuperheroe(flash);
      break;
    case "invisible":
      cargarSuperheroe(invisible);
      break;
    case "wonder":
      cargarSuperheroe(wonder);
      break;
    default:
  };
  console.log('pinchaste una imagen con id: ' + $(this).prop('id') + ' - ' + $(this).prop('src') );
});


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

// funciones para pintar la grillaDePixeles
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

grillaDePixeles.addEventListener('mousemove',
  (function(e) {
    if (clickOn) {
      var indicadorDeColor = document.getElementById("indicador-de-color");
      e.target.style.backgroundColor = indicadorDeColor.style.backgroundColor;
    }
  }));



// function inicia(){
//   generarPaletaDeColores();
//   generarGrillaDePixeles();
// };
//
// inicia();
