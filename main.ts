let gg = 1000
let a = 185644465
let s = 20000
let d = 40000000
basic.forever(function () {
    basic.pause(10)
    s += 80
})
basic.forever(function () {
    basic.pause(10)
    gg += 80
})
basic.forever(function () {
    basic.pause(10)
    d += 80
})
basic.forever(function () {
    basic.pause(10)
    a += 80
})
basic.forever(function () {
    basic.pause(1000)
    WSTouchPiano.TP_ShowRGB(
    a,
    d,
    s,
    gg
    )
})
basic.forever(function () {
    WSTouchPiano.TP_PlayPiano()
})
