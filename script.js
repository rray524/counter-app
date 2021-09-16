// find counter ID value
let count = + document.querySelector('.count').innerText;
console.log(count);
document.querySelector('.add').addEventListener('click', () => {
    count += 1;
})