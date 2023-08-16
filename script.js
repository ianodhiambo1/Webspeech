const SpeechRecognition =
    window.SpeechRecognition || 
    window.webkitSpeechRecogniton;
const SpeechGrammarList = 
    window.SpeechGrammarList || 
    window.webkitSpeechGrammarList;
const SpeechRecognitionEvent =
    window.SpeechRecognitionEvent ||
    window.webkitSpeechRecognitionEvent;

const output = document.getElementById("output");
function chatspeak (){
    if(SpeechRecognition in window){
    
    } else {
        output.textContent= "Bomboclaaaat bruv";
    
    }

}