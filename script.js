function time() {
    let today = new Date();
    today.setMinutes(today.getMinutes() + 30);
    let h = today.getHours().toString().padStart(2, '0');
    let m = today.getMinutes().toString().padStart(2, '0');
    let s = today.getSeconds().toString().padStart(2, '0');
    document.getElementById('1').innerHTML = `${h}:${m}:${s}`;
}
function time2() {
    let today = new Date();
    today.setMinutes(today.getMinutes() + 30);
    let h = today.getHours().toString().padStart(2, '0');
    let m = today.getMinutes().toString().padStart(2, '0');
    let s = today.getSeconds().toString().padStart(2, '0');
    document.getElementById('2').innerHTML = `${h}:${m}:${s}`;
}
function time3() {
    let today = new Date();
    today.setMinutes(today.getMinutes() + 30);
    let h = today.getHours().toString().padStart(2, '0');
    let m = today.getMinutes().toString().padStart(2, '0');
    let s = today.getSeconds().toString().padStart(2, '0');
    document.getElementById('3').innerHTML = `${h}:${m}:${s}`;
}
function time4() {
    let today = new Date();
    today.setMinutes(today.getMinutes() + 30);
    let h = today.getHours().toString().padStart(2, '0');
    let m = today.getMinutes().toString().padStart(2, '0');
    let s = today.getSeconds().toString().padStart(2, '0');
    document.getElementById('4').innerHTML = `${h}:${m}:${s}`;
}