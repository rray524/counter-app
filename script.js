// find counter ID value
let count = + document.getElementById('count').innerText;

// add button event handler
document.querySelector('.add').addEventListener('click', () => {
    count += 1;
    let increasedText = document.getElementById('count');
    increasedText.innerText = count;
    if (count > 0) {
        increasedText.style.color = 'yellow'
    }
    else {
        increasedText.style.color = 'white'
    }
})

// subtract button event handler
document.querySelector('.subtract').addEventListener('click', () => {
    count -= 1;
    let decreasedText = document.getElementById('count');
    decreasedText.innerText = count;
    if (count < 0) {
        decreasedText.style.color = 'red'
    }
    else {
        decreasedText.style.color = 'white'
    }
})

// Reset button handler
document.querySelector('.reset').addEventListener('click', () => {
    count -= 1;
    let decreasedText = document.getElementById('count');
    decreasedText.innerText = count;
    if (count < 0) {
        decreasedText.style.color = 'red'
    }
})