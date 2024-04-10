const ball = document.getElementById('ball');
document.addEventListener('keydown',handleKeyPress);
let position = 0;

function handleKeyPress(e){
    if (e.code === 'KeyA'){
        position = position - 100;
    }

    if (e.code === 'KeyD'){
        position = position + 100;
    }
    if (e.code === 'KeyW'){
        position = position - 100;
    }

    if (e.code === 'KeyS'){
        position = position + 100;
    }

    if (position < 0){
        position = 0;
    }

    refresh();
}

function refresh() {
    //ball.style.left = position + 'px';
    ball.style.top = position + 'px';
}