import * as alt from 'alt-server'

// test comment for deletion
alt.on('playerConnect', (player: alt.Player) => {
    alt.log('connected:', player.name);
});
