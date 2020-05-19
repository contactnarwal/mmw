import React, { useRef } from "react"
import Styles from "./Slider.module.css"

const Test = () => {
  SliderRef = useRef(null)
  class Slider extends React.Component {
    constructor(props) {
      super(props)

      this.state = {
        images: [
          "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/aurora.jpg",
          "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/canyon.jpg",
          "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/city.jpg",
          "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/desert.jpg",
          "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/mountains.jpg",
          "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/redsky.jpg",
          "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/sandy-shores.jpg",
          "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/tree-of-life.jpg",
        ],
        currentIndex: 0,
        translateValue: 0,
      }
    }

    goToPrevSlide = () => {
      if (this.state.currentIndex === 0) return

      this.setState(prevState => ({
        currentIndex: prevState.currentIndex - 1,
        translateValue: prevState.translateValue + this.slideWidth(),
      }))
    }

    goToNextSlide = () => {
      // Exiting the method early if we are at the end of the images array.
      // We also want to reset currentIndex and translateValue, so we return
      // to the first image in the array.
      if (this.state.currentIndex === this.state.images.length - 1) {
        return this.setState({
          currentIndex: 0,
          translateValue: 0,
        })
      }

      // This will not run if we met the if condition above
      this.setState(prevState => ({
        currentIndex: prevState.currentIndex + 1,
        translateValue: prevState.translateValue + -this.slideWidth(),
      }))
    }

    slideWidth = () => {
      return SliderRef.clientWidth
    }

    render() {
      return (
        <div className={Styles.slider}>
          <div
            className={Styles.slider_wrapper}
            style={{
              transform: `translateX(${this.state.translateValue}px)`,
              transition: "transform ease-out 0.45s",
            }}
          >
            {this.state.images.map((image, i) => (
              <Slide key={i} image={image} />
            ))}
          </div>

          <LeftArrow goToPrevSlide={this.goToPrevSlide} />

          <RightArrow goToNextSlide={this.goToNextSlide} />
        </div>
      )
    }
  }

  const Slide = ({ image }) => {
    const styles = {
      backgroundImage: `url(${image})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "50% 60%",
    }
    return <div className={Styles.slide} ref={SliderRef} style={styles}></div>
  }

  const LeftArrow = props => {
    return (
      <div
        className={`${Styles.backArrow} ${Styles.arrow}`}
        onClick={props.goToPrevSlide}
      >
        <i
          className={`${Styles.fa} ${Styles.fa_arrow_left} ${Styles.fa_2x}`}
          aria-hidden="true"
        ></i>
      </div>
    )
  }

  const RightArrow = props => {
    return (
      <div
        className={`${Styles.nextArrow} ${Styles.arrow}`}
        onClick={props.goToNextSlide}
      >
        <i
          className={`${Styles.fa} ${Styles.fa_arrow_right} ${Styles.fa_2x}`}
          aria-hidden="true"
        ></i>
      </div>
    )
  }
  return (
    <>
      <h1>hello slider </h1>
      <Slider />
    </>
  )
}

export default Test
