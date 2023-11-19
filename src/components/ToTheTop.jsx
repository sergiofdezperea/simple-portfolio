import "./ToTheTop.css"
export default function ToTheTopButton() {
  let scrollAnimation
  let lastScrollTop = 0

  function toTheTop() {
    // Call toTheTopAnimation immediately when the button is clicked
    toTheTopAnimation()
    scrollAnimation = setTimeout(toTheTopAnimation, 20)
  }

  function toTheTopAnimation() {
    let position = document.documentElement.scrollTop || document.body.scrollTop
    if (position > lastScrollTop) {
      // A scroll down was detected, so stop the scroll to top event
      clearTimeout(scrollAnimation)
    } else if (position > 0) {
      window.scrollBy(0, -Math.max(1, Math.floor(position / 10)))
      scrollAnimation = setTimeout(toTheTopAnimation, 20)
    } else {
      clearTimeout(scrollAnimation)
    }
    lastScrollTop = position <= 0 ? 0 : position // For Mobile or negative scrolling
  }

  window.onscroll = function () {
    scrollFunction()
  }

  // Make appear the button when the user scrolls down from the top of the document
  function scrollFunction() {
    if (
      document.body.scrollTop > 25 ||
      document.documentElement.scrollTop > 25
    ) {
      document.querySelector(".toTheTop").style.display = "block"
    } else {
      document.querySelector(".toTheTop").style.display = "none"
    }
  }

  return (
    <img
      className="toTheTop"
      src="https://img.icons8.com/laces/64/long-arrow-up.png"
      alt="long-arrow-up"
      onClick={toTheTop}
    ></img>
  )
}
