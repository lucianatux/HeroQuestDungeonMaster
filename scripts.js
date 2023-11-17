document.addEventListener("DOMContentLoaded", function () {

//Constantes y Variables Globales. Referencias a los elementos del DOM
const screenDiv = document.querySelector(".screen");
const missionInfoDiv = document.querySelector(".mission-info");
//constantes que almacenan los datos de la misión//
const missionTitle = document.getElementById("mission-title");
const missionPurpose = document.getElementById("mission-purpose");
const noteone = document.getElementById("note-one");
const notetwo = document.getElementById("note-two");
const notethree = document.getElementById("note-three");
const final = document.getElementById("final");
////////////////////////////////////////////////////////
const missionDiv = document.getElementById("missionDiv");
const extranoteDiv = document.getElementById("extranoteDiv");
const note1Div = document.getElementById("note1Div");
const note2Div = document.getElementById("note2Div");
const note3Div = document.getElementById("note3Div");
const finalDiv = document.getElementById("finalDiv");
const submitButton = document.querySelector(".submit");
const characterLevelSelect = document.getElementById("characterLevel");
const missionSelect = document.getElementById("mission");
const nextButton = document.getElementById("next");
const room = document.querySelector(".room");
const tonextroom = document.querySelector("#tonextroom");
const puertaGIF = document.getElementById("puertaGIF");

let selectedCharacterLevel;
let selectedMission;
let counter = 0; 
let currentRoomTable = null; // Variable para llevar un registro de la habitación actual
const momentNote1 = Math.floor(Math.random() * 3) + 2;  // Números aleatorios entre 2 y 4
const momentNote2 = Math.floor(Math.random() * 3) + 5;  // Números aleatorios entre 5 y 7
const momentNote3 = Math.floor(Math.random() * 3) + 8;  // Números aleatorios entre 8 y 10
console.log(momentNote1, momentNote2, momentNote3);


const missions = {
  1: {
    title: "Misión 1: El Comienzo",
    purpose:
      "Tu primera misión es enfrentarte a las ratas gigantes que han invadido el sótano del reino. Debes limpiar el sótano y garantizar la seguridad de todos los aldeanos.",
    note1: "This is note1",
    note2: "This is note2",
    note3: "This is note3",
    final: "This is the final",
  },
  2: {
    title: "Misión 2: Título: La Caza del Dragón",
    purpose:
      " En lo más profundo de las Montañas de Fuego, los rumores de un dragón aterrador han llevado al reino al borde del pánico. La amenaza que representa es inmensa, y no puedes permitir que continúe amenazando a tus compatriotas. Debes adentrarte en el corazón de las montañas, encontrar la guarida del dragón y enfrentarte a la bestia. Esta es una misión en la que te arriesgarás todo, pero solo tú puedes proteger el reino de su furia. La gloria y la recompensa esperan a aquel que sobreviva.",
    note1: "This is note1",
    note2: "This is note2",
    note3: "This is note3",
    final: "This is the final",
  },
  3: {
    title: "El artefacto perdido de los enanos",
    purpose: "La antigua forja de los enanos ha sido olvidada por generaciones, pero se dice que dentro de ella se encuentra un poderoso artefacto que puede forjar armas legendarias. Un duende alquimista les encomienda la tarea de encontrar este artefacto para ayudar a la causa de la resistencia. Deben navegar por los pasillos oscuros de la forja y enfrentar peligrosas criaturas de fuego y metal.",
    note1: "En este cuarto, encuentran una inscripción ancestral que sugiere que el artefacto está oculto en la cámara del forjador, pero la entrada está protegida por un dragón de bronce. Deben encontrar una manera de hacer que el dragón les permita pasar.",
    note2: "En este cuarto, llegan a la cámara del forjador y descubren un rompecabezas de runas antiguas. Deben descifrarlo para revelar la ubicación exacta del artefacto.",
    note3: "En este cuarto, finalmente encuentran el artefacto, pero también se enfrentan al Forjador de las Llamas, un antiguo espíritu de fuego que custodia el artefacto. Deben superar sus pruebas de habilidad y resistencia para obtenerlo.",
    final: "El duende alquimista les agradece por su valentía y les recompensa con 700 monedas de oro y la promesa de forjar un arma legendaria para cada uno."
  },
  4: {
    title: "La conspiración de las sombras",
    purpose: "Los habitantes de un oscuro bosque han notado una creciente actividad de criaturas corruptas que amenazan con destruir su hogar. Un elfo sabio les implora que investiguen y desentrañen una conspiración que amenaza el equilibrio de la naturaleza. Deben explorar el bosque oscuro, enfrentando a las criaturas corruptas y buscando pistas para descubrir quién está detrás de la conspiración.",
    note1: "En este cuarto, se topan con un lobo corrupto que les habla en susurros y les menciona una figura encapuchada que dirige a las criaturas. Deben seguir las pistas para encontrarla.",
    note2: "En este cuarto, llegan a un antiguo santuario natural donde deben resolver un enigma mágico para avanzar. El santuario contiene pistas sobre la identidad de la figura encapuchada.",
    note3: "En este cuarto, finalmente encuentran a la figura encapuchada, que resulta ser un druida traicionero que ha caído en la oscuridad. Deben enfrentarlo en una batalla épica y desenmascarar su conspiración.",
    final: "El elfo sabio agradece su valentía al detener la conspiración y restaurar el equilibrio del bosque. Les recompensa con 800 monedas de oro y la bendición de la naturaleza para cada uno."
  },
  5: {
    title: "El Templo de las Almas Perdidas",
    purpose: "En el oscuro bosque del Lamento Eterno se encuentra el legendario Templo de las Almas Perdidas, un lugar donde las almas de los difuntos buscan la redención. Un sacerdote les pide que investiguen las crecientes apariciones de espíritus vengativos en el bosque y encuentren una manera de restaurar la paz en el templo.",
    note1: "En este lugar maldito, descubren un antiguo libro que contiene pistas sobre cómo encontrar el camino hacia el Templo de las Almas Perdidas. También se cruzan con un espíritu errante que les ruega que ayuden a su alma a encontrar la paz.",
    note2: "Dentro del templo, se enfrentan a un rompecabezas de espejos mágicos que deben resolver para avanzar. Los espejos reflejan las emociones de las almas atrapadas y deben encontrar la combinación correcta para abrir el camino.",
    note3: "En la cámara central del templo, se encuentran con el espíritu atormentado que está causando el desequilibrio. Deben ayudar al espíritu a enfrentar sus miedos y arrepentirse de sus acciones pasadas para liberar el templo de la maldición.",
    final: "El sacerdote agradece su valentía al devolver la paz al Templo de las Almas Perdidas. Como recompensa, les ofrece la bendición de los espíritus y la promesa de protección en sus futuras aventuras."
  },
  6: {
    title: "La Búsqueda del Corazón de Dragón",
    purpose: "Un sabio anciano les revela una profecía antigua que habla de un Corazón de Dragón, un cristal mágico que otorga inmenso poder. La profecía dice que solo un grupo de héroes valientes puede encontrarlo y evitar que caiga en manos equivocadas. Deben emprender un viaje peligroso para encontrar el Corazón de Dragón y cumplir la profecía.",
    note1: "En este rincón remoto del mundo, encuentran un antiguo mapa con pistas sobre la ubicación del Corazón de Dragón. También se cruzan con un cazador solitario que les advierte sobre las trampas mortales que guardan el camino.",
    note2: "En las profundidades de una cueva, se enfrentan a una serie de pruebas físicas y mentales establecidas por los antiguos guardianes del Corazón de Dragón. Deben demostrar su valentía y sabiduría para avanzar.",
    note3: "Finalmente, llegan al santuario del Corazón de Dragón y se enfrentan a un dragón antiguo que protege el cristal. Deben luchar contra el dragón y demostrar su nobleza para ganarse su confianza y acceso al Corazón de Dragón.",
    final: "El sabio anciano les agradece por cumplir la profecía y les otorga el poder del Corazón de Dragón. Como recompensa, les ofrece el conocimiento antiguo y la promesa de que su nombre será recordado en las leyendas."
  },
  7: {
    title: "mision 7",
    purpose: " purpose 7",
    note1: "This is note1",
    note2: "This is note2",
    note3: "This is note3",
    final: "This is the final",
  },
  8: {
    title: "mision 8",
    purpose: " purpose 8",
    note1: "This is note1",
    note2: "This is note2",
    note3: "This is note3",
    final: "This is the final",
  },
};

const furnitures = [
  "table",
  "table",
  "throne",
  "alchemistbench",
  "chest",
  "chest",
  "chest",
  "tomb",
  "sorcerertable",
  "bookcase",
  "bookcase",
  "rack",
  "fireplace",
  "weaponsrack",
  "cupboard",
  "stone",
  "sphere",
  "note",
  "taberna",
];

const monsters = {
  goblin: 1,
  skeleton: 1,
  orc: 2,
  zombie: 2,
  mummie: 3,
  abomination: 3,
  dreadWarrior: 4,
  dreadSorcerer: 5,
  gargoyle: 5,
  orcSergeant: 3,
  mongrelfolk: 2,
  dekanterGoblin: 2,
  sahuaginRanger: 3,
  devilCriature: 4,
  destrachan: 4,
  dragon: 6,
};

const challenges = [
  "Mientras atraviesan un bosque encantado, escuchan risas melodiosas a lo lejos. Descubren un grupo de criaturas diminutas conocidas como los 'Guardianes del Bosque'. Deben demostrar su buena voluntad para avanzar. Cada héroe puede elegir entre hacer un chiste, cantar una canción o contar una historia para ganarse el favor de los guardianes.",
  
  "Encuentran un espejo mágico en una habitación. Cuando se miran en él, ven reflejos de su futuro. Cada héroe debe interpretar su visión y tomar una decisión basada en lo que ven. Dependiendo de sus elecciones, podrían obtener una ventaja o desventaja temporal en el próximo encuentro.",

  "Encuentran una fuente mística que emana conocimiento. Para beber de ella, cada héroe debe responder a una pregunta de enigmas y acertijos. Las respuestas correctas les otorgan un punto extra de mente, mientras que las incorrectas pueden desencadenar efectos inesperados.",
  
  "Llegan a una encrucijada donde sombras oscuras se ciernen sobre ellos. Cada héroe debe enfrentarse a su propio temor personal que toma forma física en la sombra. Superar este desafío les otorga resistencia emocional, agregando un punto extra de defensa.",

  "Entrando en un laberinto mágico, los héroes se encuentran con ilusiones confusas que desafían su percepción. Deben confiar en su intuición y tomar decisiones audaces para encontrar el camino correcto. Superar el laberinto les recompensa con un punto extra de ataque por su agudeza estratégica.",

  "En una habitación sombría, encuentran espectros de personas atrapadas en un ciclo de tristeza. Cada héroe debe compartir una historia alentadora o inspiradora para liberar a las almas. Al hacerlo, obtienen un punto extra de mente al fortalecer su voluntad.",

  "Encuentran un pozo misterioso que susurra secretos del pasado y del futuro. Para extraer sabiduría, cada héroe debe compartir un secreto personal. A cambio, reciben información útil para la siguiente parte de su aventura y ganan un punto extra de mente por su sinceridad.",

  "En el centro de una sala, hay una estatua majestuosa que representa el valor. Cada héroe debe enfrentarse a una representación ilusoria de su peor miedo. Al superar este desafío, ganan un punto extra de defensa al demostrar coraje.",

  "Una puerta custodiada por un espíritu enigmático bloquea su camino. Para abrirla, deben resolver acertijos relacionados con sus habilidades únicas. Superar este desafío les otorga un punto extra de ataque al demostrar ingenio.",

  "Encuentran una fuente de aguas ilusorias que prometen curación. Cada héroe debe enfrentar una imagen de su herida más profunda y superarla. Al hacerlo, reciben una curación mágica y ganan un punto extra de cuerpo."
];

////////////Controladores de eventos////////////////////////////
/* controlador de eventos al botón "Submit" verifica que se haya completado el formulario
y muestra el titulo de la mision y el objetivo */
submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  selectedCharacterLevel = characterLevelSelect.value;
  selectedMission = missionSelect.value;
  const selectedMissionInfo = missions[selectedMission];
  if (selectedCharacterLevel) {
    if (selectedMissionInfo) {
      missionTitle.textContent = selectedMissionInfo.title;
      missionPurpose.textContent = selectedMissionInfo.purpose;
      noteone.textContent = selectedMissionInfo.note1;
      notetwo.textContent = selectedMissionInfo.note2;
      notethree.textContent = selectedMissionInfo.note3;
      final.textContent = selectedMissionInfo.final;
      screenDiv.style.display = "none";
      missionInfoDiv.style.display = "block";
    } else {
      alert("Misión no encontrada");
    }
  } else {
    alert("Selecciona el nivel de los personajes");
  }
  console.log(
    "level " +
      selectedCharacterLevel +
      " mision " +
      selectedMission +
      " title " +
      selectedMissionInfo.title +
      " purpose " +
      selectedMissionInfo.purpose +
      " Note 1: " +
      selectedMissionInfo.note1
  );
});
// Configura los eventos de transición de la misión a la primer habitación
  nextButton.addEventListener("click", (e) => {
    e.preventDefault();
    nextMusic();
    showDoor();
    missionDiv.style.display = "block";
    extranoteDiv.style.display = "block";
    showRoom(missionInfoDiv, room);
    console.log(selectedCharacterLevel);
    setupRoom(selectedCharacterLevel, monsters, furnitures);
  });
  // Configura los eventos de transición de habitaciones
tonextroom.addEventListener("click", (e) => {
  e.preventDefault();
  destroyRoom(); // Llama a la función para destruir la habitación actual
  nextMusic();
  showDoor();
  // Luego, después de cerrar la alerta, llama a setupRoom
  setTimeout(() => {
    setupRoom(selectedCharacterLevel, monsters, furnitures);
  }, 0);
});

// Función para mostrar un mensaje personalizado
function showMessage(title, message) {
    const messageContainer = document.createElement("div");
    messageContainer.className = "message-container";

    const messageBox = document.createElement("div");
    messageBox.className = "message-box";

    const closeButton = document.createElement("span");
    closeButton.className = "close-button";
    closeButton.innerText = "X";
    closeButton.addEventListener("click", () => {
        document.body.removeChild(messageContainer);
    });

    const titleElement = document.createElement("h2");
    titleElement.innerText = title;
    titleElement.className = "title-note";

    const messageElement = document.createElement("p");
    messageElement.innerText = message;
    messageElement.className = "message-note";

    messageBox.appendChild(closeButton);
    messageBox.appendChild(titleElement);
    messageBox.appendChild(messageElement);

    messageContainer.appendChild(messageBox);
    document.body.appendChild(messageContainer);
}
function showDoor(){
  // Mostrar el GIF
  puertaGIF.style.display = "block";

  // Agregar un event listener para el evento 'load'
  puertaGIF.onload = function () {
    // Iniciar un temporizador para ocultar el GIF después de un cierto tiempo (por ejemplo, 3000 milisegundos o 3 segundos)
    setTimeout(function () {
      puertaGIF.style.display = "none";
    }, 3000); // Ajusta este valor según tu necesidad
  };

  // Establecer la fuente del GIF con un parámetro de tiempo para forzar la recarga
  puertaGIF.src = puertaGIF.src.split("?")[0] + "?" + new Date().getTime();
}

// Event listeners para los botones
missionDiv.addEventListener("click", () => {
    showMessage("Misión", missionPurpose.textContent);
});
extranoteDiv.addEventListener("click", () => {
  var challengeElement = setupChallenges(challenges);
  showMessage("Challenge", challengeElement);
});

note1Div.addEventListener("click", () => {
    showMessage("Nota 1", noteone.textContent);
});

note2Div.addEventListener("click", () => {
    showMessage("Nota 2", notetwo.textContent);
});

note3Div.addEventListener("click", () => {
    showMessage("Nota 3", notethree.textContent);
});

finalDiv.addEventListener("click", () => {
    showMessage("Final", final.textContent);
});


//Funciones auxiliares//////////////////////////////////////
// Función para destruir la habitación actual
function destroyRoom() {
  if (currentRoomTable) {
    currentRoomTable.remove(); // Elimina la tabla que representa la habitación actual
  }
}
function setupRoom(level, monsters, furnitures) {
  counter = counter + 1;
  showMissionMessage(); // Muestra el mensaje
  console.log("counter: ", counter);
  const roomTable = createRoom(level, monsters, furnitures);
  document.body.appendChild(roomTable);
  currentRoomTable = roomTable; // Actualiza la variable con la nueva habitación
}
// Función para mostrar una habitación y ocultar otra
function showRoom(currentRoom, nextRoom) {
  currentRoom.style.display = "none";
  nextRoom.style.display = "block";
}
//Funcion que dibuja la habitacion con monstruos y muebles
function createRoom(playerLevel, monsters, furnitures) {
  const table = createTable();
  const roomMonsters = setupMonsters(playerLevel, monsters);
  const roomFurnitures = setupFurnitures(furnitures);
  const roomDoors = setupDoors();
  const roomAllElements = roomMonsters.concat(roomFurnitures);
  // Asignar elementos aleatoriamente a la tabla.
  asignarElementosAleatoriosATabla(table, roomAllElements);
  drawDoors(table, roomDoors);
  return table;
}
// Función para crear una tabla de 3x3
function createTable() {
  const table = document.createElement("table");
  for (let i = 0; i < 3; i++) {
    const row = document.createElement("tr");
    for (let j = 0; j < 3; j++) {
      const cell = document.createElement("td");
      row.appendChild(cell);
    }
    table.appendChild(row);
  }
  return table;
}
// Función que establece la cantidad y el tipo de monstruos en una habitación
function setupMonsters(playerLevel, monsters) {
  const monsterNames = Object.keys(monsters);
  const level = parseInt(playerLevel, 10); // Asegura que sea un número base 10
  let generatedMonsters = [];
  let numMonsters = 0;
  let probabilities;
  if (level === 1) {
    numMonsters = Math.floor(Math.random() * 4);
    probabilities = [0.25, 0.25, 0.15, 0.14, 0.06, 0.06, 0.04, 0.01, 0.01, 0.01, 0.01, 0.01];
  } else if (level === 2) {
    numMonsters = Math.floor(Math.random() * 5);
    probabilities = [0.2, 0.19, 0.17, 0.17, 0.08, 0.08, 0.03, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01];
  } else if (level === 3) {
    numMonsters = Math.floor(Math.random() * 5);
    probabilities = [0.18, 0.17, 0.14, 0.14, 0.10, 0.10, 0.09, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01];
  } else if (level === 4) {
    numMonsters = Math.floor(Math.random() * 6);
    probabilities = [0.14, 0.13, 0.14, 0.14, 0.14, 0.14, 0.08, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01];
  }
  for (let i = 0; i < numMonsters; i++) {
    let rand = Math.random();
    let cumulativeProb = 0;
    for (let j = 0; j < probabilities.length; j++) {
      cumulativeProb += probabilities[j];
      if (rand < cumulativeProb) {
        generatedMonsters.push(monsterNames[j]);
        break;
      }
    }
  }
  return generatedMonsters;
}
//Función que establece la cantidad y el tipo de muebles en una habitación
function setupFurnitures(furnitures) {
  const furnituresNames = furnitures;
  const generatedFurnitures = [];
  let numFurnitures = 0;
  numFurnitures = Math.floor(Math.random() * 3);
  for (let i = 0; i < numFurnitures; i++) {
    // Generate a random index to select a furniture from the array.
    const randomIndex = Math.floor(Math.random() * furnitures.length);
    // Add the selected furniture to the generatedFurnitures array.
    generatedFurnitures.push(furnitures[randomIndex]);
    // Remove the selected furniture from the original array to avoid duplicates.
    furnitures.splice(randomIndex, 1);
  }
  return generatedFurnitures;
}
function setupChallenges(challenges) {
  const randomIndex = Math.floor(Math.random() * challenges.length);
  console.log(challenges[randomIndex]);
  return (challenges[randomIndex]);
}

function setupDoors() {
  const doors = ["left", "right", "front"];
  const roomDoors = [];
  // Determina la cantidad de puertas (0, 1, 2, o 3).
  const numDoors = Math.floor(Math.random() * 4);
  // Determina la posición de las puertas sin repetir la posición.
  while (roomDoors.length < numDoors) {
    const randomPosition = doors[Math.floor(Math.random() * doors.length)];
    if (!roomDoors.includes(randomPosition)) {
      roomDoors.push(randomPosition);
    }
  }
  return roomDoors;
}
function asignarElementosAleatoriosATabla(table, elementos) {
  const totalCeldas = table.rows.length * table.rows[0].cells.length;
  // Verifica que haya suficientes celdas para los elementos.
  if (elementos.length > totalCeldas) {
    console.error("No hay suficientes celdas para los elementos.");
    return;
  }
  // Genera números aleatorios únicos para asignar a los elementos.
  const numerosAleatoriosUnicos = generarNumerosAleatoriosUnicos(
    totalCeldas,
    elementos.length
  );
  // Recorre las celdas y asigna elementos en posiciones aleatorias.
  elementos.forEach((elemento, indice) => {
    const numeroAleatorio = numerosAleatoriosUnicos[indice];
    const fila = Math.floor(numeroAleatorio / table.rows[0].cells.length);
    const columna = numeroAleatorio % table.rows[0].cells.length;
    table.rows[fila].cells[columna].textContent = elemento;
  });
}
// Función para generar números aleatorios únicos en un rango.
function generarNumerosAleatoriosUnicos(max, cantidad) {
  const numerosUnicos = new Set();
  while (numerosUnicos.size < cantidad) {
    const numeroAleatorio = Math.floor(Math.random() * max);
    numerosUnicos.add(numeroAleatorio);
  }
  return [...numerosUnicos];
}
function drawDoors(table, roomDoors) {
  const cells = table.getElementsByTagName('td');
  if (roomDoors.includes('left')) {
    // Crea un borde izquierdo en la celda 'd' (segunda columna)
    cells[3].style.borderLeft = '10px solid #6f3b1b';
  }
  if (roomDoors.includes('right')) {
    // Crea un borde derecho en la celda 'f' (segunda columna)
    cells[5].style.borderRight = '10px solid #6f3b1b';
  }
  if (roomDoors.includes('front')) {
    // Crea un borde superior en la celda 'b' (primera fila)
    cells[1].style.borderTop = '10px solid #6f3b1b';
  }
  cells[7].style.borderBottom = '10px solid #6f3b1b';
}
function showMissionMessage() {
  if (counter == momentNote1) {
    note1Div.style.display = 'block';
  } else if (counter == momentNote2) {
    note2Div.style.display = 'block';
  } else if (counter == momentNote3) {
    note3Div.style.display = "block";
  }
  if (counter == 11){
    finalDiv.style.display = "block";
    showMessage("Final", final.textContent);
  }
}




//////////////////////////////*Musica*/////////////
//MUSIC
const musicPlayer = document.getElementById("music-player");
const playPauseButton = document.querySelector(".play-pause");
const nextMusicButton = document.querySelector(".next-music");
const musicTitle = document.querySelector(".music-title");
let currentTrack = 0; // Índice de la pista actual

function playPauseMusic() {
  if (musicPlayer.paused) {
    musicPlayer.play().then(() => {
      playPauseButton.textContent = "❚❚"; // Cambia el botón a pausa
      console.log("Reproduciendo música");
    }).catch(error => {
      console.error("Error al reproducir música:", error);
    });
  } else {
    musicPlayer.pause();
    playPauseButton.textContent = "▶"; // Cambia el botón a reproducir
    console.log("Pausando música");
  }
}

function nextMusic() {
  currentTrack = (currentTrack + 1) % musicPlayer.children.length;
  musicPlayer.src = musicPlayer.children[currentTrack].src;
  playPauseMusic();
  updateMusicTitle();
  console.log("Cambiando a la siguiente pista");
}

function updateMusicTitle() {
  musicTitle.textContent = `Música ${currentTrack + 1}`;
}

musicPlayer.addEventListener("ended", function () {
  // Llama a la función nextMusic para pasar a la siguiente pista automáticamente
  nextMusic();
});


playPauseButton.addEventListener("click", playPauseMusic);
nextMusicButton.addEventListener("click", nextMusic);
updateMusicTitle();



});
