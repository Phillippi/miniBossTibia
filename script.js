function time() {
    let today = new Date();
    today.setMinutes(today.getMinutes() + 30);
    let h = today.getHours().toString().padStart(2, '0');
    let m = today.getMinutes().toString().padStart(2, '0');
    let s = today.getSeconds().toString().padStart(2, '0');
    document.getElementById('1').innerHTML = `${h}:${m}:${s}`;

    let interval = today - Date.now();
    const audio = document.querySelector('audio');
    function changeColor() {
        document.getElementById('btn1').style.backgroundColor = 'yellow';
        document.getElementById('btn1').style.color = 'black';
    }
    setTimeout(() => {
        audio.play();
        changeColor();
    }, interval);

}
function time2() {
    let today = new Date();
    today.setMinutes(today.getMinutes() + 30);
    let h = today.getHours().toString().padStart(2, '0');
    let m = today.getMinutes().toString().padStart(2, '0');
    let s = today.getSeconds().toString().padStart(2, '0');
    document.getElementById('2').innerHTML = `${h}:${m}:${s}`;

    let interval = today - Date.now();
    const audio = document.querySelector('audio');
    function changeColor() {
        document.getElementById('btn2').style.backgroundColor = 'yellow';
        document.getElementById('btn2').style.color = 'black';
    }
    setTimeout(() => {
        audio.play();
        changeColor();
    }, interval);

}
function time3() {
    let today = new Date();
    today.setMinutes(today.getMinutes() + 30);
    let h = today.getHours().toString().padStart(2, '0');
    let m = today.getMinutes().toString().padStart(2, '0');
    let s = today.getSeconds().toString().padStart(2, '0');
    document.getElementById('3').innerHTML = `${h}:${m}:${s}`;

    let interval = today - Date.now();
    const audio = document.querySelector('audio');
    function changeColor() {
        document.getElementById('btn3').style.backgroundColor = 'yellow';
        document.getElementById('btn3').style.color = 'black';
    }
    setTimeout(() => {
        audio.play();
        changeColor();
    }, interval);

}
function time4() {
    let today = new Date();
    today.setMinutes(today.getMinutes() + 1);
    let h = today.getHours().toString().padStart(2, '0');
    let m = today.getMinutes().toString().padStart(2, '0');
    let s = today.getSeconds().toString().padStart(2, '0');
    document.getElementById('4').innerHTML = `${h}:${m}:${s}`;

    let interval = today - Date.now();
    const audio = document.querySelector('audio');
    function changeColor() {
        document.getElementById('btn4').style.backgroundColor = 'yellow';
        document.getElementById('btn4').style.color = 'black';
    }
    setTimeout(() => {
        audio.play();
        changeColor();
    }, interval);

}

