document.addEventListener('DOMContentLoaded', () => {
    const elementCard = document.getElementsByClassName('card-container');
    let turn = 0;

    elementCard[0].addEventListener('click', () => {

        if (turn == 0) {
            elementCard[0].classList.add('flip');
            turn = 1;
        } else {
            elementCard[0].classList.remove('flip');
            turn = 0;
        }

    })
    
})