<script>
  function handleButtonClick() {
    const target = document.getElementById('seasons'); // Target element to scroll to
    if (!target) return;

    const targetPosition = target.getBoundingClientRect().top; // Position of target relative to viewport
    const startPosition = window.pageYOffset; // Current scroll position
    const distance = targetPosition - 0; // Adjust 0 as needed if you want to offset the final scroll position
    const duration = 800; // Duration of the scroll animation in milliseconds
    let start = null;

    function step(timestamp) {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      // Calculate current scroll position using easing function
      const position = easeInOutCubic(progress, startPosition, distance, duration);
      window.scrollTo(0, position);
      if (progress < duration) window.requestAnimationFrame(step);
    }

    window.requestAnimationFrame(step);
  }

  // Easing function for a smooth animation effect
  function easeInOutCubic(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t * t + b;
    t -= 2;
    return c / 2 * (t * t * t + 2) + b;
  }

let innerHeight;
let lineHeight = 134;
let reduceFactor;
  $: {
    if (innerHeight < 901) {
      reduceFactor = innerHeight / 901;

      lineHeight= 134 * reduceFactor;
      console.log('lineHeight', lineHeight)
    }
  }
</script>

<svelte:window bind:innerHeight />
  <p>Comença aquí, fent scroll</p>

<div class="svg-container">
  <button id="pillButton" style="height: 30px;" on:click={handleButtonClick}>
    <svg
      width="18"
      height="29"
      viewBox="0 0 18 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        id="Rectangle51"
        x="1"
        y="1"
        width="16"
        height="26"
        rx="8"
        stroke="white"
        stroke-width="2"
      />
      <path
        id="Line20"
        d="M9 8L9 11"
        stroke="white"
        stroke-width="3"
        stroke-linecap="round"
      />
    </svg>
  </button>

  <!-- Separate SVG for the vertical line -->
  <svg
    width="18"
    height={lineHeight}
    viewBox="0 0 18 134"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M9 0L9.00001 133" stroke="white" stroke-width="2" />
  </svg>
</div>

<style>
  p {

    text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    font-size: 1rem;
    margin-bottom: 1rem;
    padding-bottom: 0.3rem;
     background-color: rgba(0, 0, 0, 0.1);
    text-align: center;
  }
    .svg-container {
    display: flex;
    flex-direction: column;
  }
  @keyframes scrollAnimation {
    0% {
      transform: translateY(0);
    }
    50% {
      opacity: 1;
    }
    100% {
      transform: translateY(9px);
      opacity: 0;
    }
  }

  #Line20 {
    animation: scrollAnimation 2s infinite;
  }

  #Rectangle51:hover,
  #Line20:hover {
    cursor: pointer;
  }
</style>
