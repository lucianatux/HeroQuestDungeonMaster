//Constantes y Variables Globales//////////////////////////////////////////
// referencias a los elementos del DOM
const screenDiv = document.querySelector(".screen");
const missionInfoDiv = document.querySelector(".mission-info");
const missionTitle = document.getElementById("mission-title");
const missionPurpose = document.getElementById("mission-purpose");
const noteone = document.getElementById("note-one");
const notetwo = document.getElementById("note-two");
const notethree = document.getElementById("note-three");
const submitButton = document.querySelector(".submit");
const characterLevelSelect = document.getElementById("characterLevel");
const missionSelect = document.getElementById("mission");
const nextButton = document.getElementById("next");
const room = document.querySelector(".room");
const tonextroom = document.querySelector("#tonextroom");
let selectedCharacterLevel;
let selectedMission;
let counter = 0;
let currentRoomTable = null; // Variable para llevar un registro de la habitación actual


const missions = {
  1: {
    title: "Misión 1: El Comienzo",
    purpose:
      "Tu primera misión es enfrentarte a las ratas gigantes que han invadido el sótano del reino. Debes limpiar el sótano y garantizar la seguridad de todos los aldeanos.",
    note1: "This is note1",
    note2: "This is note2",
    note3: "This is note3",
  },
  2: {
    title: "Misión 2: Título: La Caza del Dragón",
    purpose:
      " En lo más profundo de las Montañas de Fuego, los rumores de un dragón aterrador han llevado al reino al borde del pánico. La amenaza que representa es inmensa, y no puedes permitir que continúe amenazando a tus compatriotas. Debes adentrarte en el corazón de las montañas, encontrar la guarida del dragón y enfrentarte a la bestia. Esta es una misión en la que te arriesgarás todo, pero solo tú puedes proteger el reino de su furia. La gloria y la recompensa esperan a aquel que sobreviva.",
    note1: "This is note1",
    note2: "This is note2",
    note3: "This is note3",
  },
  3: {
    title: "mision 3",
    purpose: " purpose 3",
    note1: "This is note1",
    note2: "This is note2",
    note3: "This is note3",
  },
  4: {
    title: "mision 4",
    purpose: " purpose 4",
    note1: "This is note1",
    note2: "This is note2",
    note3: "This is note3",
  },
  5: {
    title: "mision 5",
    purpose: " purpose 5",
    note1: "This is note1",
    note2: "This is note2",
    note3: "This is note3",
  },
  6: {
    title: "mision 6",
    purpose: " purpose 6",
    note1: "This is note1",
    note2: "This is note2",
    note3: "This is note3",
  },
  7: {
    title: "mision 7",
    purpose: " purpose 7",
    note1: "This is note1",
    note2: "This is note2",
    note3: "This is note3",
  },
  8: {
    title: "mision 8",
    purpose: " purpose 8",
    note1: "This is note1",
    note2: "This is note2",
    note3: "This is note3",
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
};


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
// Configura los eventos de transición de habitaciones
  nextButton.addEventListener("click", (e) => {
    e.preventDefault();
    showRoom(missionInfoDiv, room);
    console.log(selectedCharacterLevel);
    setupRoom(selectedCharacterLevel, monsters, furnitures);
  });

tonextroom.addEventListener("click", (e) => {
  e.preventDefault();
  destroyRoom(); // Llama a la función para destruir la habitación actual
  setupRoom(selectedCharacterLevel, monsters, furnitures);
});

// Función para destruir la habitación actual
function destroyRoom() {
  if (currentRoomTable) {
    currentRoomTable.remove(); // Elimina la tabla que representa la habitación actual
  }
}

function setupRoom(level, monsters, furnitures) {
  counter = counter + 1;
  console.log("counter: ", counter);
  const roomTable = createRoom(level, monsters, furnitures);
  document.body.appendChild(roomTable);
  currentRoomTable = roomTable; // Actualiza la variable con la nueva habitación
}


//Funciones auxiliares//////////////////////////////////////
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
  console.log(noteone);

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
    probabilities = [0.25, 0.25, 0.15, 0.15, 0.07, 0.07, 0.04, 0.01, 0.01];
  } else if (level === 2) {
    numMonsters = Math.floor(Math.random() * 5);
    probabilities = [0.2, 0.2, 0.18, 0.18, 0.09, 0.09, 0.04, 0.01, 0.01];
  } else if (level === 3) {
    numMonsters = Math.floor(Math.random() * 5);
    probabilities = [0.18, 0.18, 0.15, 0.15, 0.11, 0.11, 0.1, 0.01, 0.01];
  } else if (level === 4) {
    numMonsters = Math.floor(Math.random() * 6);
    probabilities = [0.14, 0.14, 0.15, 0.15, 0.15, 0.15, 0.1, 0.01, 0.01];
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

