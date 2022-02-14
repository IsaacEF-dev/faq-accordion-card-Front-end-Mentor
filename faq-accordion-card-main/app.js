const lista = document.querySelectorAll('.list');

ejecutarEvento();

function ejecutarEvento() {
    lista.forEach(i => {
        i.addEventListener('click', openList);
    })
}

function openList(e) {
    if (e.target.classList.contains('list')) {
        const titulo = e.target.children[0];
        titulo.classList.toggle('active-head');
        const flech = titulo.querySelector('img');
        flech.classList.toggle('active-img');
        e.target.classList.toggle('active');
    }
}