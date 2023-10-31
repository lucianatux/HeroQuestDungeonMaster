// Obtén referencias a los elementos del DOM
const screenDiv = document.querySelector('.screen');
const missionDetailsDiv = document.querySelector('.mission-info'); 
const missionTitle = document.getElementById('mission-title'); 
const missionPurpose = document.getElementById('mission-purpose'); 
const submitButton = document.querySelector('.submit');
const characterLevelSelect = document.getElementById('characterLevel');
const missionSelect = document.getElementById('mission');
const nextButton = document.getElementById('next');
const room = document.querySelector('.room');
const tonextroom = document.querySelector('#tonextroom');

const missions = {
    1: {
        title: "Misión 1: El Comienzo",
        purpose: "Tu primera misión es enfrentarte a las ratas gigantes que han invadido el sótano del reino. Debes limpiar el sótano y garantizar la seguridad de todos los aldeanos.",
        note1: "note1",
        note2: "note2",
        note3: "note3"
    },
    2: {
        title: "Misión 2: Título: La Caza del Dragón",
        purpose:" En lo más profundo de las Montañas de Fuego, los rumores de un dragón aterrador han llevado al reino al borde del pánico. La amenaza que representa es inmensa, y no puedes permitir que continúe amenazando a tus compatriotas. Debes adentrarte en el corazón de las montañas, encontrar la guarida del dragón y enfrentarte a la bestia. Esta es una misión en la que te arriesgarás todo, pero solo tú puedes proteger el reino de su furia. La gloria y la recompensa esperan a aquel que sobreviva." ,
        note1: "note1",
        note2: "note2",
        note3: "note3"
    },
    3: {
        title: "mision 3",
        purpose:" purpose 3",
        note1: "note1",
        note2: "note2",
        note3: "note3"
    },
    4: {
        title: "mision 4",
        purpose:" purpose 4",
        note1: "note1",
        note2: "note2",
        note3: "note3"
    },
    5: {
        title: "mision 5",
        purpose:" purpose 5",
        note1: "note1",
        note2: "note2",
        note3: "note3"
    },
    6: {
        title: "mision 6",
        purpose:" purpose 6",
        note1: "note1",
        note2: "note2",
        note3: "note3"
    },
    7: {
        title: "mision 7",
        purpose:" purpose 7",
        note1: "note1",
        note2: "note2",
        note3: "note3"
    },
    8: {
        title: "mision 8",
        purpose:" purpose 8",
        note1: "note1",
        note2: "note2",
        note3: "note3"
    }  
};

const furnitures = [
    'table', 'table', 'throne', 'alchemistbench', 'chest', 'chest', 'chest', 'tomb', 
    'sorcerertable', 'bookcase', 'bookcase', 'rack', 'fireplace', 'weaponsrack', 'cupboard'
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
}


// Agrega un controlador de eventos al botón "Submit"
submitButton.addEventListener('click', (e) => {
    e.preventDefault(); // Evita la recarga de la página por defecto

    // Obtiene el valor seleccionado del nivel de personaje y de la misión
    const selectedCharacterLevel = characterLevelSelect.value;
    const selectedMission = missionSelect.value;

    // Obtiene el objeto de misión correspondiente según el valor seleccionado
    const selectedMissionInfo = missions[selectedMission];

    if (selectedCharacterLevel) {
        // Se encontró información del nivel de los personajes
        if (selectedMissionInfo) {
            // Se encontró información de la misión seleccionada
            missionTitle.textContent = selectedMissionInfo.title;
            missionPurpose.textContent = selectedMissionInfo.purpose;
            screenDiv.style.display = 'none';
            missionDetailsDiv.style.display = 'block';
        } else {
            // No se encontró información de la misión seleccionada
            alert("Misión no encontrada");
        }
    } else {
        // No se encontró información del nivel de los personajes
        alert("Selecciona el nivel de los personajes");
    }
    
});

// Función para mostrar una habitación y ocultar otra
function showRoom(currentRoom, nextRoom) {
    currentRoom.style.display = 'none';
    nextRoom.style.display = 'block';
}

// Configura los eventos de transición de habitaciones
function setupRoomTransition(btn, from, to) {
    btn.addEventListener('click', (e) => {
        e.preventDefault();  // Evita la recarga de la página por defecto
        showRoom(from, to);
    });
}

setupRoomTransition(nextButton, missionDetailsDiv, room);


function createRoom(playerLevel, mission, monsters, furnitures){
    setupMonsters(playerLevel, monsters);
    setupFurnitures(furnitures);
    setupDoors();
    setupMonsters(mission);
}

function setupMonsters(playerLevel, monsters) {
    const monsterNames = Object.keys(monsters);
    console.log(monsterNames);
    const generatedMonsters = [];
    let numMonsters = 0;
    let probabilities;
    if (playerLevel === 1) {
        numMonsters = Math.floor(Math.random() * 4);
        probabilities = [0.25, 0.25, 0.15, 0.15, 0.07, 0.07, 0.04, 0.01, 0.01];
    } else if (playerLevel === 2) {
        numMonsters = Math.floor(Math.random() * 5);
        probabilities = [0.20, 0.20, 0.18, 0.18, 0.09, 0.09, 0.04, 0.01, 0.01];
    } else if (playerLevel === 3) {
        numMonsters = Math.floor(Math.random() * 5);
        probabilities = [0.18, 0.18, 0.15, 0.15, 0.11, 0.11, 0.1, 0.01, 0.01];
    } else if (playerLevel === 4) {
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

// Ejemplo de uso:
const playerLevel = 4;
const generatedMonsters = setupMonsters(playerLevel, monsters);
console.log(generatedMonsters); // Devolverá un arreglo con nombres de monstruos generados.

function setupFurnitures(furnitures){
    const furnituresNames = furnitures;
    console.log(furnituresNames); 
    const generatedFurnitures = [];
    let numFurnitures = 0;
    let probabilities;
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

// Example usage:
const furnituresArray = ["Chair", "Table", "Sofa", "Desk", "Bed"];
const selectedFurnitures = setupFurnitures(furnituresArray);
console.log(selectedFurnitures);

