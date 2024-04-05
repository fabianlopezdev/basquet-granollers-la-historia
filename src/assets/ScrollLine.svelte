<script>
  function handleButtonClick() {

      const target = document.getElementById('seasons'); // Replace with your actual target element's ID
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
   
  }

let innerHeight;
let lineHeight = 134;
let reduceFactor;
let innerWidth;
  $: {
    if (innerHeight < 901) {
      reduceFactor = innerHeight / 901;

      lineHeight= 134 * reduceFactor;
    }
  }
</script>

<svelte:window bind:innerHeight bind:innerWidth/>
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
     /* background-color: rgba(0, 0, 0, 0.1); */
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
