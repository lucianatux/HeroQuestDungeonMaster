// Obtén referencias a los elementos del DOM
const screenDiv = document.querySelector('.screen');
const missionDetailsDiv = document.querySelector('.mission-info'); 
const missionTitle = document.getElementById('mission-title'); 
const missionPurpose = document.getElementById('mission-purpose'); 
const submitButton = document.querySelector('.submit');
const characterLevelSelect = document.getElementById('characterLevel');
const missionSelect = document.getElementById('mission');
const nextButton = document.getElementById('next');
const roomone = document.querySelector('.roomone');
const roomtwo = document.querySelector('.roomtwo');
const roomthree = document.querySelector('.roomthree');
const roomfour = document.querySelector('.roomfour');
const roomfive = document.querySelector('.roomfive');
const roomsix = document.querySelector('.roomsix');
const roomseven = document.querySelector('.roomseven');
const roomeight = document.querySelector('.roomeight');
const roomnine = document.querySelector('.roomnine');
const roomten = document.querySelector('.roomten');
const final = document.querySelector('.final');
const toroomtwo = document.querySelector('#toroomtwo');
const toroomthree = document.querySelector('#toroomthree');
const toroomfour = document.querySelector('#toroomfour');
const toroomfive = document.querySelector('#toroomfive');
const toroomsix = document.querySelector('#toroomsix');
const toroomseven = document.querySelector('#toroomseven');
const toroomeight = document.querySelector('#toroomeight');
const toroomnine = document.querySelector('#toroomnine');
const toroomten = document.querySelector('#toroomten');
const tofinal = document.querySelector('#tofinal');
const tohome = document.querySelector('#tohome');

const missions = {
    1: {
        title: "Misión 1: El Comienzo",
        purpose: "Tu primera misión es enfrentarte a las ratas gigantes que han invadido el sótano del reino. Debes limpiar el sótano y garantizar la seguridad de todos los aldeanos."
    },
    2: {
        title: "Misión 2: Título: La Caza del Dragón",
        purpose:" En lo más profundo de las Montañas de Fuego, los rumores de un dragón aterrador han llevado al reino al borde del pánico. La amenaza que representa es inmensa, y no puedes permitir que continúe amenazando a tus compatriotas. Debes adentrarte en el corazón de las montañas, encontrar la guarida del dragón y enfrentarte a la bestia. Esta es una misión en la que te arriesgarás todo, pero solo tú puedes proteger el reino de su furia. La gloria y la recompensa esperan a aquel que sobreviva." 
    },
    3: {
        title: "mision 3",
        purpose:" purpose 3"
    },
    4: {
        title: "mision 4",
        purpose:" purpose 4"
    },
    5: {
        title: "mision 5",
        purpose:" purpose 5"
    },
    6: {
        title: "mision 6",
        purpose:" purpose 6"
    },
    7: {
        title: "mision 7",
        purpose:" purpose 7"
    },
    8: {
        title: "mision 8",
        purpose:" purpose 8"
    }  
};

const furnitures = [
    'table', 'table', 'throne', 'alchemistbench', 'chest', 'chest', 'chest', 'tomb', 
    'sorcerertable', 'bookcase', 'bookcase', 'rack', 'fireplace', 'weaponsrack', 'cupboard'
];

const monsters = {
    goblin: 1,
    orc: 2,
    skeleton: 1, 
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

// Agrega un controlador de eventos al botón "Next"
nextButton.addEventListener('click', (e) => {
    e.preventDefault(); // Evita la recarga de la página por defecto
    missionDetailsDiv.style.display = 'none';
    roomone.style.display = 'block';
});

// Agrega un controlador de eventos al botón "Next"
toroomtwo.addEventListener('click', (e) => {
    e.preventDefault(); // Evita la recarga de la página por defecto
    roomone.style.display = 'none';
    roomtwo.style.display = 'block';
});

