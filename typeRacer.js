//this is for example if you want to use it you need to manully run the simulate func
//when the game begins

const speed = 1000; //The wait time between each word
const input = document.getElementsByClassName('txtInput')[0];

//grabs texts splits each word
const grabText () => {
    let text = document.querySelector('[unselectable="on"]').parentElement.innerText;
    let words = text.split(' ');
    return words;

};

//loops through each word in the array and inputs it
const simulate = () => {
    let words = grabText();
    words.forEach((word, i) => {
        setTimeout(()=>{
            input.value += word;
            input.value += ' ';
        },i * speed);
    });
};

simulate();
