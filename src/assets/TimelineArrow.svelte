<script>
  export let rotate = 0;
  export let opacity = 1;
  export let hover = ""
</script>

<svg
  
  style:transform={`rotate(${rotate}deg)`}
  width="56"
  height="56"
  viewBox="0 0 56 56"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  class:hover={hover}
>
    <!-- White background ellipse -->
    <ellipse cx="28" cy="28" rx="26.5" ry="26.5" fill="white"/>

    <!-- Group for semi-transparent elements -->
    <g class="fade-transition" opacity={opacity}>
        <ellipse class="hover-color" cx="28" cy="28" rx="26.5" ry="26.5" transform="rotate(180 28 28)" fill="#002E6D"/>
        <path d="M15.9 27.5H40.1" stroke="white" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M26.1 38.4375L15.2098 27.6432" stroke="white" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M25.8669 16.8918L15.2108 27.6431" stroke="white" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
    </g>
    
    <defs>
        <clipPath id="clip0_686_6315">
            <rect width="56" height="56" fill="white" transform="translate(56 56) rotate(180)"/>
        </clipPath>
    </defs>
</svg>

<style>

    .fade-transition {
        transition: opacity 0.5s ease;
    }

    .hover:hover .hover-color {
        fill: var(--clr-accent); 
        opacity: 0.8;
    }
</style>