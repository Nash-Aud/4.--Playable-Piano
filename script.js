const pianoKeys = document.querySelectorAll(".piano-keys .key"),
      volumeSlider = document.querySelector(".volume-slider input"),
      keysCheckBox = document.querySelector(".keys-checkbox input");

let allKeys = [],
audio = new Audio("key_notes/a.wav"); // new Audio instance creates a HTML audio element

const playTune = (key) => {
    audio.src = `key_notes/${key}.wav`; //audio src based on key pressed
    audio.play(); //playing the audio
    
    //getting the clicked key element
    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    clickedKey.classList.add("active"); // add active class to each key element

    // removing active class after 150 ms
    setTimeout(() => {
        clickedKey.classList.remove("active");
    }, 150);
}

//looping through each key
pianoKeys.forEach(key => {
    allKeys.push(key.dataset.key); //adding data-key value to allKeys array

    // calling playTune function with passing data-key value as an argument
    key.addEventListener("click", () => playTune(key.dataset.key));
});


const pressedKey = (e) => {
    //if the pressed key is in the allKeys array, only call playTune function
    if(allKeys.includes(e.key)) playTune(e.key);
}

const handleVolume = (e) => {
    audio.volume = e.target.value; //setting the range slider value as an audio volume
}

const showHideKeys = () => {
    //toggling hide class from each key on the checkbox click
    pianoKeys.forEach(key => key.classList.toggle("hide"));
}

document.addEventListener("keydown", pressedKey);
volumeSlider.addEventListener("input", handleVolume);
keysCheckBox.addEventListener("click", showHideKeys);