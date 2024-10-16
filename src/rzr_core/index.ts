import * as alt from 'alt-server'

// test comment for deletion
alt.on('playerConnect', (player: alt.Player) => {

    player.model = 'A_M_M_Hillbilly_01';
    player.spawn(813.0, -279.0, 66.0);

    alt.log('connected:', player.name);
});

alt.on('playerSpawn', () => {
   
    let vehicle = new alt.Vehicle('virtue', 813.5, -279.5, 67.0, 0, 0, 0);
    vehicle.customPrimaryColor = alt.RGBA.white;
});
