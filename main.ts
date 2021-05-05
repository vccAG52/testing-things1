joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P13, joystickbit.ButtonType.down, function () {
    D_pressed___Times += 1
    if (D_pressed___Times >= 100) {
        music.startMelody(music.builtInMelody(Melodies.JumpUp), MelodyOptions.Once)
    } else {
        music.startMelody(music.builtInMelody(Melodies.BaDing), MelodyOptions.Once)
    }
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P12, joystickbit.ButtonType.down, function () {
    joystickbit.Vibration_Motor(How_long_the_motor_vibrates * 1000)
})
let D_pressed___Times = 0
let How_long_the_motor_vibrates = 0
joystickbit.initJoystickBit()
How_long_the_motor_vibrates = 10
D_pressed___Times = 0
basic.forever(function () {
	
})
