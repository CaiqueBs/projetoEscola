// https://jsonplaceholder.typicode.com/posts

function clicou() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((data) => {
        console.log(data);
    })
}

document.querySelector('#botao').addEventListener('click', clicou)