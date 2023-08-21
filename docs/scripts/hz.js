const LOWER_BOUND = 50;
const UPPER_BOUND = 150;
const FREQUENCY_READINGS = 4;
const UPDATE_INTERVAL = 20;
const HOLD_DURATION = 250; // in milliseconds

let frequencyBuffer = [];
let lastStableFrequency = "N/A";
let holdEndTime = 0;  // Used to hold onto a detected frequency after a strum

async function startListening() {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const audioContext = new AudioContext();
    const analyser = audioContext.createAnalyser();
    const source = audioContext.createMediaStreamSource(stream);
    source.connect(analyser);
    analyser.fftSize = 8192;

    updateFrequency(analyser);
}

function updateFrequency(analyser) {
    const currentTime = Date.now();

    if (currentTime < holdEndTime) {
        setTimeout(() => updateFrequency(analyser), UPDATE_INTERVAL);
        return;
    }

    const frequencyData = new Uint8Array(analyser.frequencyBinCount);
    analyser.getByteFrequencyData(frequencyData);
    const dominantFrequency = getDominantFrequency(analyser, frequencyData);

    if (dominantFrequency !== -1 && dominantFrequency > LOWER_BOUND && dominantFrequency < UPPER_BOUND) {
        frequencyBuffer.push(dominantFrequency);
        if (frequencyBuffer.length > FREQUENCY_READINGS) {
            frequencyBuffer.shift();
        }

        const meanFrequency = mean(frequencyBuffer);
        if (isStableFrequency(frequencyBuffer, meanFrequency)) {
            lastStableFrequency = meanFrequency.toFixed(0);
            console.log(`Stable dominant frequency detected: ${lastStableFrequency} Hz`);
            displayFrequency(lastStableFrequency);
            holdEndTime = currentTime + HOLD_DURATION;  // Set the hold duration after detecting a stable frequency
        }
    } else {
        handleOutOfRange();
    }

    setTimeout(() => updateFrequency(analyser), UPDATE_INTERVAL);
}

function getDominantFrequency(analyser, frequencyData) {
    const freqStep = analyser.context.sampleRate / analyser.fftSize;
    let maxAmplitude = -Infinity;
    let dominantFrequencyIndex = -1;

    frequencyData.forEach((amplitude, index) => {
        if (amplitude > maxAmplitude && index * freqStep >= LOWER_BOUND && index * freqStep <= UPPER_BOUND) {
            maxAmplitude = amplitude;
            dominantFrequencyIndex = index;
        }
    });

    if (dominantFrequencyIndex === -1) return -1;

    const startIdx = Math.max(0, dominantFrequencyIndex - 2);
    const endIdx = Math.min(frequencyData.length - 1, dominantFrequencyIndex + 2);
    let sumFrequency = 0;
    let sumAmplitude = 0;

    for (let i = startIdx; i <= endIdx; i++) {
        sumFrequency += frequencyData[i] * i * freqStep;
        sumAmplitude += frequencyData[i];
    }

    return sumFrequency / sumAmplitude;
}

function isStableFrequency(frequencyBuffer, meanFrequency) {
    return frequencyBuffer.every(freq => Math.abs(freq - meanFrequency) < 20);
}

function displayFrequency(frequency) {
    const statusSpan = document.getElementById("frequencyStats");
    statusSpan.textContent = `Detected Tension Frequency: ${frequency} Hz`;
}

function handleOutOfRange() {
    const statusSpan = document.getElementById("frequencyStats");
    statusSpan.textContent = `Detected Tension Frequency: ${lastStableFrequency} Hz (Out of range)`;
}

function mean(arr) {
    return arr.reduce((acc, val) => acc + val, 0) / arr.length;
}

function initiateListening() {
    const button = document.getElementById("startButton");
    button.disabled = true;
    button.textContent = "Calibrating...";
    startListening();
}