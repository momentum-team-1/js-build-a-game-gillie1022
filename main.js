let canvas = document.getElementById('canvas');
canvas.width = 500
canvas.height = 500
let context = canvas.getContext('2d');

// context.fillStyle = 'black';
// ccontext.fillRect(10, 190, 50, 50);

let gameboard = {
    x: 125,
    y: 125,
    
    draw: function(){
        context.fillStyle = "red",
        context.fillRect(this.x, this.y, canvas.width / 2, canvas.height / 2)  }
   
}

let player = {
    x: 135,
    y: 315,
    draw: function(){
        context.fillStyle = "black",
        context.fillRect(this.x, this.y, canvas.width / 10, canvas.height/10) }
}
setInterval(loop, 80)

function loop(){
    context.clearRect(0, 0, canvas.width, canvas.height);
    if(Keyboarder.isDown(37))
        player.x-=90;
    if(Keyboarder.isDown(39))
        player.x+=90;
    if(Keyboarder.isDown(38))
        player.y-=90;
    if(Keyboarder.isDown(40))
        player.y+=90;
    if(player.x > 315)
        player.x = 315;
    if(player.x < 135)
        player.x = 135;
    if(player.y < 135)
        player.y = 135;
    if(player.y > 315)
        player.y = 315
    gameboard.draw()
    player.draw();

}