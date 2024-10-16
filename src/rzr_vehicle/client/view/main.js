alt.on("update", (rpm, spd) => {
    document.querySelector(".speed-number").innerHTML = spd;

    let bars = document.querySelectorAll('.speed-bars-bar');
    for (let index = 0; index < bars.length; index++) {
        updateBar(rpm, bars[index], index);
    }
});

function updateBar(rpm, bar, index) {
    let count = Math.floor(rpm * 10) - 1;
    let className = "filled";

    if (index > 6) {
        className = "filled-max";
    }

    if (index <= count) {
        bar.classList.add(className);
    } else {
        bar.classList.remove(className);
    }
}

alt.on("hidden", (value) => {
    document.querySelector(".speed").classList.toggle('hidden', value);
});
