import React, { useRef, useEffect } from "react"
const TypingEffect = ({ text, duration, color }) => {
  // typing effect start
  const typingEl = useRef(null)
  let isDeleting = false
  let loopNum = 0
  let txt = ""
  const period = parseInt(2000, 10) || 2000
  const toText =
    '["Happy Clients in All States & Territories.","Design On Point","Lets build a future out of the History","Your Ambition together with our engagement leads to business growth", "Speak with Our Specialists to expand your social reach"]'
  const toRotate = JSON.parse(toText)

  const tick = () => {
    let i = loopNum % toRotate.length
    let fullTxt = toRotate[i]
    if (isDeleting) {
      txt = fullTxt.substring(0, txt.length - 1)
    } else {
      txt = fullTxt.substring(0, txt.length + 1)
    }

    typingEl.current.innerHTML = '<span class="wrap">' + txt + "</span>"

    let delta = 200 - Math.random() * 100

    if (isDeleting) {
      delta /= 2
    }

    if (!isDeleting && txt === fullTxt) {
      delta = period
      isDeleting = true
    } else if (isDeleting && txt === "") {
      isDeleting = false
      loopNum++
      delta = 500
    }

    setTimeout(function() {
      tick()
    }, delta)
  }
  const tInitialize = () => {
    tick()
  }
  useEffect(tInitialize, [])
  return (
    <>
      <h1 ref={typingEl}>Hello Typing effect </h1>
    </>
  )
}

export default TypingEffect
