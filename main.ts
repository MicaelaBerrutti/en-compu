radio.onReceivedValue(function (name, value) {
    serial.writeValue(name, value)
    basic.showLeds(`
        # # # # .
        . # # . .
        . . # . .
        . . # # .
        # # # # #
        `)
})
basic.showIcon(IconNames.Yes)
radio.setGroup(128)
basic.forever(function () {
    let pulsoMinuto = 0
    basic.showNumber(pulsoMinuto)
    basic.showIcon(IconNames.Heart)
})
