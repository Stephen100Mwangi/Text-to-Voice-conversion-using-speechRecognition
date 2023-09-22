let speech = new SpeechSynthesisUtterance();

let textarea = document.querySelector("#textarea");

// Select voices
// let voices = [];
// let voiceSelect = document.querySelector("select");
// window.speechSynthesis.onvoiceschanged = ()=>{
//     voices = window.speechSynthesis.getVoices();
//     speech.voice = voices[0];
//     voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));
// };

// voiceSelect.addEventListener("change", ()=>{
//     speech.voice = voices[voiceSelect.value];
// });

// Listen function
function listen() {
    speech.text = textarea.value;
    window.speechSynthesis.speak(speech);
}