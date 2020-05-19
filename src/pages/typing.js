import React, { useRef, useEffect } from "react"

const Typing = () => {
  // animate counting effect start
  const aniDiv = useRef(0)

  const deviDiv = useRef(0)
  const animateValue = (id, start, end, duration) => {
    const range = end - start
    let current = start
    const increment = end > start ? 1 : -1
    const stepTime = Math.abs(Math.floor(duration / range))

    const timer = setInterval(function() {
      current += increment
      id.current.innerHTML = current
      if (current === end) {
        clearInterval(timer)
      }
    }, stepTime)
  }

  // typing effect start
  const typingEl = useRef(null)
  let isDeleting = false
  let loopNum = 0
  let txt = ""
  const period = parseInt(2000, 10) || 2000
  const toText =
    '["Happy Clients in All States & Territories.","Design On Point","Lets build a future out of the History","Your Ambition together with our engagement leads to business growth", "Speak with Our Specialists to expand your social reach"]'
  const toRotate = JSON.parse(toText)
  const initiliz = () => {
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
    tick()
    animateValue(aniDiv, 100, 25, 5000)
    animateValue(deviDiv, 0, 100, 1000)
  }

  useEffect(initiliz, [])

  return (
    <>
      <h1 ref={typingEl}>Hello Typing effect </h1>
      <div ref={aniDiv}>100</div>
      <div ref={deviDiv}>100</div>
    </>
  )
}
export default Typing
