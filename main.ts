input.buttonD4.onEvent(ButtonEvent.Click, function () {
    pixel.setBrightness(20)
    pixel.setColor(0x65471f)
    keyboard.functionKey(KeyboardFunctionKey.RightArrow, KeyboardKeyEvent.Press)
    pause(100)
    keyboard.clearAllKeys()
    pixel.setColor(0xff8000)
})
