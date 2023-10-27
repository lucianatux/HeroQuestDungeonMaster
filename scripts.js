/*
document.addEventListener("DOMContentLoaded", function () {
    
    // Obtiene referencias a los elementos del DOM
    const screen = document.querySelector(".screen");
    const missionInfo = document.querySelector(".mission-info");
    const missionTitle = document.getElementById("mission-title");
    const missionPurpose = document.getElementById("mission-purpose");
    const selectCharacterLevel = document.getElementById("characterLevel");
    const selectMission = document.getElementById("mission");

    // Agrega un evento de escucha al formulario
    selectCharacterLevel.addEventListener("change", function () {
        // Aquí debes configurar la lógica para mostrar la misión seleccionada
        // Puedes usar el valor de selectCharacterLevel para determinar qué misión mostrar
        const selectedLevel = selectCharacterLevel.value;

        // Asume que tienes un objeto con las misiones definidas en tu código
        const missions = {
            1: {
                title: "Misión 1: El Comienzo",
                purpose: "Tu primera misión es enfrentarte a las ratas gigantes que han invadido el sótano del reino. Debes limpiar el sótano y garantizar la seguridad de todos los aldeanos."
            },
            2: {
                title: "Misión 2: Título: La Caza del Dragón",
                purpose:" En lo más profundo de las Montañas de Fuego, los rumores de un dragón aterrador han llevado al reino al borde del pánico. La amenaza que representa es inmensa, y no puedes permitir que continúe amenazando a tus compatriotas. Debes adentrarte en el corazón de las montañas, encontrar la guarida del dragón y enfrentarte a la bestia. Esta es una misión en la que te arriesgarás todo, pero solo tú puedes proteger el reino de su furia. La gloria y la recompensa esperan a aquel que sobreviva." 
            }
            // Define otras misiones aquí
        };

        if (selectedLevel in missions) {
            // Muestra el título y el propósito de la misión seleccionada
            missionTitle.textContent = missions[selectedLevel].title;
            missionPurpose.textContent = missions[selectedLevel].purpose;

            // Oculta el div de "screen" y muestra el div de "mission-info"
            screen.style.display = "none";
            missionInfo.style.display = "block";
        }
    });
});*/

// Obtén referencias a los elementos del DOM
const screenDiv = document.querySelector('.screen');
const missionDetailsDiv = document.querySelector('.mission-details');
const missionTitle = document.getElementById('missionTitle');
const missionPurpose = document.getElementById('missionPurpose');
const submitButton = document.querySelector('.submit');
const characterLevelSelect = document.getElementById('characterLevel');
const missionSelect = document.getElementById('mission');

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

// Agrega un controlador de eventos al botón "Submit"
submitButton.addEventListener('click', (e) => {
    e.preventDefault(); // Evita la recarga de la página por defecto

    // Obtiene el valor seleccionado del nivel de personaje y de la misión
    const selectedCharacterLevel = characterLevelSelect.value;
    const selectedMission = missionSelect.value;

    // Aquí puedes definir lógica para obtener el título y el propósito de la misión
    // basado en los valores seleccionados.
    // Por ejemplo, puedes usar un objeto o un switch para mapear los valores a los títulos y propósitos.

    const missionTitleText = "Título de la Misión " + selectedMission;
    const missionPurposeText = "Propósito de la Misión " + selectedMission;

    // Actualiza el contenido del div de detalles de la misión
    missionTitle.textContent = missionTitleText;
    missionPurpose.textContent = missionPurposeText;

    // Oculta el div de "screen" y muestra el div de detalles de la misión
    screenDiv.style.display = 'none';
    missionDetailsDiv.style.display = 'block';
});











// Agrega un controlador de eventos al botón "Submit"
submitButton.addEventListener('click', (e) => {
    e.preventDefault(); // Evita la recarga de la página por defecto

    // Obtiene el valor seleccionado del nivel de personaje y de la misión
    const selectedCharacterLevel = characterLevelSelect.value;
    const selectedMission = missionSelect.value;

    // Obtiene el objeto de misión correspondiente según el valor seleccionado
    const selectedMissionInfo = missions[selectedMission];

    // Verifica si se encontró información de la misión seleccionada
    if (selectedMissionInfo) {
        // Actualiza el contenido del div de detalles de la misión con el título y el propósito
        missionTitle.textContent = selectedMissionInfo.title;
        missionPurpose.textContent = selectedMissionInfo.purpose;

        // Oculta el div de "screen" y muestra el div de detalles de la misión
        screenDiv.style.display = 'none';
        missionDetailsDiv.style.display = 'block';
    } else {
        // Si no se encontró información de la misión, muestra un mensaje de error o manejo de errores
        // Puedes personalizar esto según tus necesidades
        alert("Misión no encontrada");
    }
});
