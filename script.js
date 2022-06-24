"use strict";

const copy_elem = document.getElementById('copy');
const generate_elem = document.getElementById('generate');
const password_elem = document.getElementById('password');
const ch_special_elem = document.getElementById('ch_special');
const ch_literal_elem = document.getElementById('ch_literal');
const ch_digits_elem = document.getElementById('ch_digits');
const psw_length_elem = document.getElementById('psw-length');

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const random_bool = () => {
    if (Math.random() < 0.5)
        return true;
    else
        return false;
}

let pswrd = '';

generate_elem.addEventListener('click', () => {
    generatePass();
});

copy_elem.addEventListener('click', () => {
    let password = password_elem.innerText;
    if (!password)
        return

    const textarea = document.createElement("textarea");
    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    alert("Password copied to clipboard");

});


function generatePass() {
    let length_of_psw = psw_length_elem.value;
    if (!length_of_psw)
        length_of_psw = 12;

    for (let i = 0; i < length_of_psw; i++) {

        if (ch_special_elem.checked && random_bool()) {
            pswrd += String.fromCharCode(random(31, 47));
            continue;
        }

        if (ch_literal_elem.checked && random_bool()) {
            pswrd += String.fromCharCode(random(65, 90));
            continue;
        }

        if (ch_digits_elem.checked && random_bool()) {
            pswrd += String.fromCharCode(random(48, 57));
            continue;
        }

        pswrd += String.fromCharCode(random(97, 122));
    }

    password_elem.innerText = pswrd;
    pswrd = '';
}