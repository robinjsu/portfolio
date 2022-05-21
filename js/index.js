const proj1Text = "";

const proj2Text = "A digital music synthesizer. Created with two classmates in CS510 Computers, Sound and Music. \
The project was focused on the foundations of subtractive synthesis, one method for creating and manipulating digital (or analog) sound waves.\
It is built with the JUCE framework, a C++ library that was created to make music apps of all kinds,\
but contains robust functionality for building apps with graphical user interfaces. Project \
features include: three different oscillators, which alter the quality of the sound(i.e.sine wave, \
triangle wave, and sawtooth wave patterns); an ADSR envelope for volume control(to control the \
attack, delay, sustain and release of the tones); options to use an on - screen keyboard or external \
 MIDI keyboard to play the synth, and a visualizer that reacts to the user's actions on the keyboard.";

const proj3Text = "";

// var proj1 = document.querySelector('.proj1');
var proj2 = document.querySelector('.proj2');
// var proj3 = document.querySelector('.proj3');

function showText(element, text) {
    var show = () => {
        var descr = document.createElement('p');
        descr.textContent = text;
        descr.className = 'proj2-content';

        element.append(descr);
    }
    return show;
}

function hideText() {
    content = document.querySelector('.proj2-content')
    proj2.removeChild(content);
}

proj2.addEventListener('mouseover', showText(proj2, proj2Text));
proj2.addEventListener('mouseout', hideText);

