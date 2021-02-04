// main.js
document.getElementById("volume-number").oninput = () => {
    let audioVol = document.getElementById('horn-sound');
    let input = document.getElementById('volume-number');
    let output = document.getElementById('volume-slider');
    output.value = input.value;
    audioVol.volume = input.value / 100.0;
    if(output.value > 66) {
        document.getElementById("volume-image").src="./assets/media/icons/volume-level-3.svg";
        document.getElementById("honk-btn").disabled = false;
    }
    else if(output.value > 33) {
        document.getElementById("volume-image").src="./assets/media/icons/volume-level-2.svg";
        document.getElementById("honk-btn").disabled = false;
    }
    else if(output.value > 0) {
        document.getElementById("volume-image").src="./assets/media/icons/volume-level-1.svg";
        document.getElementById("honk-btn").disabled = false;
    }
    else {
        document.getElementById("volume-image").src="./assets/media/icons/volume-level-0.svg";
        document.getElementById("honk-btn").disabled = true;
    }
};

document.getElementById("volume-slider").oninput = () => {
    let audioVol = document.getElementById('horn-sound');
    let input = document.getElementById('volume-slider');
    let output = document.getElementById('volume-number');
    output.value = input.value;
    audioVol.volume = input.value / 100.0;
    if(output.value > 66) {
        document.getElementById("volume-image").src="./assets/media/icons/volume-level-3.svg";
        document.getElementById("honk-btn").disabled = false;
    }
    else if(output.value > 33) {
        document.getElementById("volume-image").src="./assets/media/icons/volume-level-2.svg";
        document.getElementById("honk-btn").disabled = false;
    }
    else if(output.value > 0) {
        document.getElementById("volume-image").src="./assets/media/icons/volume-level-1.svg";
        document.getElementById("honk-btn").disabled = false;
    }
    else {
        document.getElementById("volume-image").src="./assets/media/icons/volume-level-0.svg";
        document.getElementById("honk-btn").disabled = true;
    }
};

document.getElementById("radio-air-horn").onclick = () => {
    document.getElementById("sound-image").src="./assets/media/images/air-horn.svg";
    document.getElementById("horn-sound").src="./assets/media/audio/air-horn.mp3";
};

document.getElementById("radio-car-horn").onclick = () => {
    document.getElementById("sound-image").src="./assets/media/images/car.svg";
    document.getElementById("horn-sound").src="./assets/media/audio/car-horn.mp3";
};

document.getElementById("radio-party-horn").onclick = () => {
    document.getElementById("sound-image").src="./assets/media/images/party-horn.svg";
    document.getElementById("horn-sound").src="./assets/media/audio/party-horn.mp3";
};

document.getElementById("honk-btn").onclick = () => {
    this.event.preventDefault();
    document.getElementById('horn-sound').play();
};

