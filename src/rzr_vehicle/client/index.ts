import * as alt from 'alt-client';

const view = new alt.WebView('http://resource/client/view/index.html');
let interval = null;



alt.on('enteredVehicle', () => {
    interval = alt.setInterval(update, 16); // 16 ms ~ 60 FPS
    view.emit('hidden', false);
});

function update() : void {
    const player = alt.Player.local;

    if (!(player && player.vehicle != null)) {
        return;
    }

    const rpm = player.vehicle.rpm;
    const vector = player.vehicle.speedVector;
    const vectorSpd = Math.sqrt(vector.x * vector.x + vector.y * vector.y + vector.z * vector.z);
    
    let spd = Math.round(vectorSpd * 3.6);
    spd = Math.round(spd / (1 + (61 / spd))); // 61 smoothing factor

    view.emit('update', rpm, spd);
}

alt.on('leftVehicle', () => {
    alt.clearInterval(interval);
    view.emit('hidden', true);
});
