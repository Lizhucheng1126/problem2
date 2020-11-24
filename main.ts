radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber)
})
basic.forever(function () {
    radio.setGroup(10)
})
