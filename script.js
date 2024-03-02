let front = true;
window.onload = function () {
    let tim = document.getElementById("tim");
    tim.onclick = function() { // 修正了这里的语法
        if (front) {
            tim.src = "tim02.png";
            front = false;
        } else {
            tim.src = "tim.png";
            front = true;
        }
    }
}
