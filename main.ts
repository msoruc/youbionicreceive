radio.onReceivedValue(function (name, value) {
    if (name == "PotVal" && value > 0) {
        led.plotBrightness(2, 2, value)
        ServoBit.setServo(0, value * -1)
    } else if (name == "PotVal2" && value > 0) {
        ServoBit.setServo(1, value)
    } else if (name == "PotVal3" && value > 0) {
        ServoBit.setServo(2, value * -1)
    } else if (name == "PotVal4" && value > 0) {
        ServoBit.setServo(3, value * -1)
    } else if (name == "PotVal5" && value > 0) {
        ServoBit.setServo(4, value * -1)
    } else if (name == "PotVal6" && value > 0) {
        ServoBit.setServo(5, value * -1)
    } else {
        ServoBit.centreServos()
    }
})
radio.setGroup(0)
radio.setTransmitPower(7)
