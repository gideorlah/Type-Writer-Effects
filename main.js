// const typeWriter = function (txtElement, words, wait = 3000) {
//     this.txtElement = txtElement;
//     this.words = words;
//     this.txt = '';
//     this.wordIndex = 0;
//     this.wait = parseInt(wait, 10);
//     this.type();
//     this.isDeleting = false;
// }

// // Type Method
// typeWriter.prototype.type = function() {
//         // Current index of word
//         const current = this.wordIndex % this.words.length;
//         // Get full text of current word
//         const fullTxt = this.words[current];

//         // Check if in deleting state
//         if(this.isDeleting) {
//             // Remove Character
//             this.txt = fullTxt.substring(0, this.txt.length - 1);
//         } else {
//             // Add Character
//             this.txt = fullTxt.substring(0, this.txt.length + 1);
//         }

//         // Insert txt into element
//         this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

//         // Initial Type Speed
//         let typeSpeed = 300;

//         if (this.isDeleting) {
//             typeSpeed /= 2;      
//         }

//         // If word is complete
//         if (!this.isDeleting && this.txt === fullTxt) {
//             // Make pause at end
//             typeSpeed = this.wait;
//             // Set delete to true
//             this.isDeleting = true;
//         } else if (this.isDeleting && this.txt === '') {
//             this.isDeleting = false;
//             // Move to the next word
//             this.wordIndex++;
//             // Pause before typing again
//             typeSpeed = 500;
//         }


//         setTimeout(() => this.type(), typeSpeed);
// }

// // Initialize on DOM load
// document.addEventListener('DOMContentLoaded', init);

// // Initialize the App
// function init() {
//     const txtElement = document.querySelector('.txt-type');
//     const words = JSON.parse(txtElement.getAttribute('data-words'));
//     const wait = txtElement.getAttribute('data-wait');
//     // Initialize TypeWriter
//     new typeWriter(txtElement, words, wait);
// }

// Second Way to do things: Using ES6 Classes
class typeWriter {
    constructor(txtElement, words, wait = 3000 ) {
        this.txtElement = txtElement;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.type();
        this.isDeleting = false;
    }

    type() {
         // Current index of word
    const current = this.wordIndex % this.words.length;
    // Get full text of current word
    const fullTxt = this.words[current];

    // Check if in deleting state
    if(this.isDeleting) {
        // Remove Character
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        // Add Character
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    // Insert txt into element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    // Initial Type Speed
    let typeSpeed = 300;

    if (this.isDeleting) {
        typeSpeed /= 2;      
    }

    // If word is complete
    if (!this.isDeleting && this.txt === fullTxt) {
        // Make pause at end
        typeSpeed = this.wait;
        // Set delete to true
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        // Move to the next word
        this.wordIndex++;
        // Pause before typing again
        typeSpeed = 500;
    }
    setTimeout(() => this.type(), typeSpeed); 
    }
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', init);

// Initialize the App
function init() {
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    // Initialize TypeWriter
    new typeWriter(txtElement, words, wait);
}