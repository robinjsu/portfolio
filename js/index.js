const proj1Text = "A desktop application meant to facilitate word definition lookups while reading text. \
An exploration of concurrency paradigms, as well as what support is provided by Go versus Python. \
Graphics rendering using Go and Python bindings for GLFW and OpenGL.";

const proj2Text = "A digital music synthesizer. Created with two classmates in CS510 Computers, Sound and Music. \
The project was focused on the foundations of subtractive synthesis, one method for creating and manipulating digital (or analog) sound waves.\
It is built with the JUCE framework, a C++ library that was created to make music apps of all kinds,\
but contains robust functionality for building apps with graphical user interfaces. Project \
features include: three different oscillators, which alter the quality of the sound(i.e.sine wave, \
triangle wave, and sawtooth wave patterns); an ADSR envelope for volume control(to control the \
attack, delay, sustain and release of the tones); options to use an on - screen keyboard or external \
 MIDI keyboard to play the synth, and a visualizer that reacts to the user's actions on the keyboard.";

const proj3Text = "A room impulse response processor module in Python. This project centered around an attempt to \
replicate methods laid out by Angelo Farina in “Simultaneous Measurement of Impulse Response and \
Distortion With a Swept-Sine Technique\”<a href=\"https://www.aes.org/e-lib/browse.cfm?elib=10211\" \
    rel=\"external\">[see paper]</a>. The method of extracting an impulse response with a linear \
or exponential sweep was the main innovation presented."



var proj1 = document.querySelector('.proj1');
var proj2 = document.querySelector('.proj2');
var proj3 = document.querySelector('.proj3');

function showText(className, text) {
    var show = () => {
        var element = document.querySelector(className);
        var descr = document.createElement('p');
        descr.textContent = text;
        descr.className = `${element.className}-content`;
        console.log(descr.className);
        element.append(descr);
    }
    return show;
}

function hideText(obj, className) {
    var hide = () => {
        content = document.querySelector(className);
        obj.removeChild(content);
    }
    return hide;
}

proj1.addEventListener('mouseover', showText('.proj1', proj1Text));
proj1.addEventListener('mouseout', hideText(proj1, '.proj1-content'));
proj2.addEventListener('mouseover', showText('.proj2', proj2Text));
proj2.addEventListener('mouseout', hideText(proj2, '.proj2-content'));
proj3.addEventListener('mouseover', showText('.proj3', proj3Text));
proj3.addEventListener('mouseout', hideText(proj3, '.proj3-content'));

