input.onButtonPressed(Button.A, function () {
    if (Ball.get(LedSpriteProperty.X) == 4) {
        game.addScore(1)
        basic.showIcon(IconNames.Heart)
    }
    if (Ball.get(LedSpriteProperty.X) == 3) {
        game.addScore(-1)
    }
    if (Ball.get(LedSpriteProperty.X) == 2) {
        game.addScore(-1)
    }
    if (Ball.get(LedSpriteProperty.X) == 1) {
        game.addScore(-1)
    }
    if (Ball.get(LedSpriteProperty.X) == 0) {
        game.addScore(1)
    }
})
let Ball: game.LedSprite = null
music.play(music.stringPlayable("C5 B C5 B G C5 A C5 ", 120), music.PlaybackMode.LoopingInBackground)
basic.showString("Press A when ball at edge")
game.setScore(0)
basic.showNumber(3)
basic.showNumber(2)
basic.showNumber(1)
basic.showNumber(0)
Ball = game.createSprite(0, 2)
for (let index = 0; index < 180; index++) {
    Ball.move(1)
    basic.pause(40)
    Ball.ifOnEdgeBounce()
}
game.gameOver()
basic.forever(function () {
	
})
