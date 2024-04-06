<script>
  //Import stores
  import { truncateString, toggleDialog } from "@utils/helperFunctions";
  import { currentIndex } from "src/svelte/stores";
  import DialogRelat from "./DialogRelat.svelte";
  import { safari } from "src/svelte/stores";

  import { closeMenuIcon } from "@assets/icons";
  export let season;

  const { years, relat, images } = season;

  export let windowScrollY;
  export let seasonIndex;
  export let windowHeight;
  export let isDialogOpen;
  export let openImg1;
  export let openImg2;

  let translateY;
  $: innerWidth = 0;

  let dialogId = `dialog-${seasonIndex}`;

  $: {
    const progressY = windowScrollY / windowHeight;
    translateY = `translateY(${100 - 100 * progressY * progressY}%)`;
  }

  $: translateX = (seasonIndex - $currentIndex) * 100;

  function handleClick(num) {
    if (num === 1) {
      openImg1 = true;
    } else {
      openImg2 = true;
    }
    // Disable scrolling
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    // document.body.style.width = '100%';
  }
</script>

<svelte:window bind:innerWidth />

{#key season.years}
  <DialogRelat {relat} {dialogId} {years} bind:isDialogOpen />
{/key}
<div
  class="season-container"
  style="--translateX: {translateX}%; --translateY: {translateY};}"
>
  <div class="season-title">
    <aside>Temporada</aside>
    <h2 class="big-number">{years}</h2>
  </div>
  <div class="items-container">
    {#if season.relat !== undefined}
      <div
        class="translateY-wrapper relat"
        style="--rowStart: {relat.props.rowStart}; --rowEnd: {relat.props
          .rowEnd}; --colStart: {relat.props.colStart}; --colEnd: {relat.props
          .colEnd}; --rowStartMobile: {relat.props
          .rowStartMobile}; --rowEndMobile: {relat.props
          .rowEndMobile}; --colStartMobile: {relat.props
          .colStartMobile}; --colEndMobile: {relat.props.colEndMobile};"
        class:relatBlue={relat.props.color === "rgba(8, 67, 149, 0.90)"}
        class:safari={safari && relat.props.color === "rgba(8, 67, 149, 0.90)"}
      >
        <article
          class="relat-container"
          style="--clr-background: {relat.props.color};  --width: {relat.props
            .width}rem;"
        >
          <header>El Relat</header>
          <p>{truncateString(`${relat.content.text}`)}</p>
          <button
            on:click={() => {
              toggleDialog(dialogId);
              isDialogOpen = true;
            }}
            style="--hoverColor: {relat.props.hoverColor}">Llegir més</button
          >
        </article>
      </div>
    {/if}
    {#if season.images}
      {#if innerWidth > 648}
        <div
          class="translateY-wrapper blender img-0"
          class:imgRelatBlue={relat.props.color === "rgba(8, 67, 149, 0.90)"}
          style="transform: {translateY}; --rowStart: {images.img_1.layout
            .rowStart}; --rowEnd: {images.img_1.layout
            .rowEnd}; --colStart: {images.img_1.layout
            .colStart}; --colEnd: {images.img_1.layout
            .colEnd}; --rowStartShortHg: {images.img_1.layout
            .rowStartShortHg}; --rowEndShortHg: {images.img_1.layout
            .rowEndShortHg}; --colStartShortHg: {images.img_1.layout
            .colStartShortHg}; --colEndShortHg: {images.img_1.layout
            .colEndShortHg}; --rowStartMobile: {images.img_1.layout
            .rowStartMobile}; --rowEndMobile: {images.img_1.layout
            .rowEndMobile}; --colStartMobile: {images.img_1.layout
            .colStartMobile}; --colEndMobile: {images.img_1.layout
            .colEndMobile};"
        >
          <div
            class="img-container"
            class:container-0-1={images.firstLayout}
            class:container-1-1={images.secondLayout}
          >
            <img src={images.img_1.url} alt={images.img_1.alt} />
          </div>
        </div>
        <div
          class="translateY-wrapper blender img-1"
          style="transform: {translateY}; --rowStart: {images.img_2.layout
            .rowStart}; --rowEnd: {images.img_2.layout
            .rowEnd}; --colStart: {images.img_2.layout
            .colStart}; --colEnd: {images.img_2.layout
            .colEnd}; --rowStartShortHg: {images.img_2.layout
            .rowStart}; --rowEndShortHg: {images.img_2.layout
            .rowEndShortHg}; --colStartShortHg: {images.img_2.layout
            .colStartShortHg}; --colEndShortHg: {images.img_2.layout
            .colEndShortHg}; --rowStartMobile: {images.img_2.layout
            .rowStartMobile}; --rowEndMobile: {images.img_2.layout
            .rowEndMobile}; --colStartMobile: {images.img_2.layout
            .colStartMobile}; --colEndMobile: {images.img_2.layout
            .colEndMobile};"
        >
          <div
            class="img-container"
            class:container-1-2={images.secondLayout}
            class:container-0-2={images.firstLayout}
          >
            <img src={images.img_2.url} alt={images.img_2.alt} />
          </div>
        </div>
      {:else}
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div
          on:click={() => handleClick(1)}
          class="translateY-wrapper blender img-0"
          class:imgRelatBlue={relat.props.color === "rgba(8, 67, 149, 0.90)"}
          style="transform: {translateY}; --rowStart: {images.img_1.layout
            .rowStart}; --rowEnd: {images.img_1.layout
            .rowEnd}; --colStart: {images.img_1.layout
            .colStart}; --colEnd: {images.img_1.layout
            .colEnd}; --rowStartShortHg: {images.img_1.layout
            .rowStartShortHg}; --rowEndShortHg: {images.img_1.layout
            .rowEndShortHg}; --colStartShortHg: {images.img_1.layout
            .colStartShortHg}; --colEndShortHg: {images.img_1.layout
            .colEndShortHg}; --rowStartMobile: {images.img_1.layout
            .rowStartMobile}; --rowEndMobile: {images.img_1.layout
            .rowEndMobile}; --colStartMobile: {images.img_1.layout
            .colStartMobile}; --colEndMobile: {images.img_1.layout
            .colEndMobile};"
        >
          <div
            class="img-container"
            class:container-0-1={images.firstLayout}
            class:container-1-1={images.secondLayout}
          >
            <img src={images.img_1.url} alt={images.img_1.alt} />
          </div>
        </div>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div
          on:click={() => handleClick(2)}
          class="translateY-wrapper blender img-1"
          style="transform: {translateY}; --rowStart: {images.img_2.layout
            .rowStart}; --rowEnd: {images.img_2.layout
            .rowEnd}; --colStart: {images.img_2.layout
            .colStart}; --colEnd: {images.img_2.layout
            .colEnd}; --rowStartShortHg: {images.img_2.layout
            .rowStart}; --rowEndShortHg: {images.img_2.layout
            .rowEndShortHg}; --colStartShortHg: {images.img_2.layout
            .colStartShortHg}; --colEndShortHg: {images.img_2.layout
            .colEndShortHg}; --rowStartMobile: {images.img_2.layout
            .rowStartMobile}; --rowEndMobile: {images.img_2.layout
            .rowEndMobile}; --colStartMobile: {images.img_2.layout
            .colStartMobile}; --colEndMobile: {images.img_2.layout
            .colEndMobile};"
        >
          <div
            class="img-container"
            class:container-1-2={images.secondLayout}
            class:container-0-2={images.firstLayout}
          >
            <img src={images.img_2.url} alt={images.img_2.alt} />
          </div>
        </div>
      {/if}
    {/if}
  </div>
</div>

<!-- {#if openImg2 === true}
{/if} -->

<style>
  .season-container {
    position: relative;
    width: 100%;
    height: inherit;
    overflow-Y: scroll;
    /* overflow-x: hidden; */
  }

  .season-title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    mix-blend-mode: multiply;
  }

  aside {
    position: relative;
    top: 0;
    /* left: 0.5rem; */
    top: calc(
      clamp(1.8rem, 0.12911392405063293rem + 7.4261603375527425vw, 6.2rem) * -1
    );
    /* top: -6.2rem; */
    color: var(--clr-accent-2);

    font-size: 1.35125rem;
    font-size: clamp(
      1.35125rem,
      1.0194462025316455rem + 1.4746835443037973vw,
      2.225rem
    );
    font-weight: var(--fnt-wg-medium);
  }

  .big-number {
    position: relative;
    text-align: center;
    font-size: 6.6rem;
    font-size: 6.6rem;
    font-size: clamp(
      6.6rem,
      -3.464525810324128rem + 33.9015606242497vw,
      24.25rem
    );
    font-weight: var(--fnt-wg-medium);
    padding-bottom: 8rem;
  }

  .items-container {
    height: 100%;
    display: grid;
    grid-template-columns: repeat(72, 1.38%);
    grid-template-rows: repeat(60, 1.66%);
  }
  .relat {
    grid-column: var(--colStart) / var(--colEnd);
    grid-row: var(--rowStart) / var(--rowEnd);
  }

  .translateY-wrapper {
    transform: var(--translateY);
    transition: transform 0.5s ease-out;
  }

  .blender {
    mix-blend-mode: multiply;
  }

  .blender:hover {
    mix-blend-mode: normal;
    z-index: 1;
  }
  .relat-container {
    position: relative;
    display: flex;
    flex-direction: column;
    width: var(--width);
    gap: 1rem;
    color: var(--clr-contrast);
    background-color: var(--clr-background);
    padding-inline: 2.5rem;
    padding-block: 2rem;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }

  header {
    font-size: 1.2rem;
    font-weight: var(--fnt-wg-medium);
  }

  button {
    text-decoration: underline;
  }
  button:hover {
    color: var(--hoverColor);
  }
  img {
    filter: grayscale(100%);
    object-fit: cover;
    transition: transform 0.5s ease-out;
  }

  img:hover {
    filter: grayscale(0%);
    transform: scale(1.5);
  }

  .img-container {
    /* opacity: 0.75; */
    width: fit-content;
  }

  .relat-container,
  .img-container {
    transition: transform 1.9s ease-out;
    transform: translateX(var(--translateX));
  }
  .img-0 {
    grid-column: var(--colStart) / var(--colEnd);
    grid-row: var(--rowStart) / var(--rowEnd);
  }

  .img-1 {
    grid-column: var(--colStart) / var(--colEnd);
    grid-row: var(--rowStart) / var(--rowEnd);
  }

  .container-1-2:hover {
    transform: translateX(-30%);
    transition: transform 0.5s ease-in;
  }

  .container-0-1:hover {
    transform: translateY(17%);
    transition: transform 0.5s ease-in;
  }
  .container-1-1:hover {
    transform: translateY(20%);
    transition: transform 0.5s ease-in;
  }
  /* .container-0-2:hover {
    transform: translateY(-30%);
    transition: transform 0.5s ease-in; 
  } */

  @media (max-width: 648px) {
    .blender:hover {
      mix-blend-mode: multiply;
      z-index: 0;
    }
    img:hover {
      filter: grayscale(100%); /* Reset to original state, adjust if needed */
      transform: scale(1);
    }
    .container-1-2:hover {
      transform: translateX(0);
      /* transition: transform 0.5s ease-in;  */
    }

    .container-0-1:hover {
      transform: translateY(0);
      /* transition: transform 0.5s ease-in;  */
    }
    .container-1-1:hover {
      transform: translateY(0);
      /* transition: transform 0.5s ease-in;  */
    }
    .relat {
      grid-column: var(--colStartMobile) / var(--colEndMobile);
      grid-row: var(--rowStartMobile) / var(--rowEndMobile);
    }

    .safari {
      grid-row: calc(var(--rowStartMobile) - 3) / var(--rowEndMobile);
    }
    .img-0 {
      grid-column: var(--colStartMobile) / var(--colEndMobile);
      grid-row: var(--rowStartMobile) / var(--rowEndMobile);
    }

    .img-1 {
      grid-column: var(--colStartMobile) / var(--colEndMobile);
      grid-row: var(--rowStartMobile) / var(--rowEndMobile);
    }

    /* .season-container {
      display: flex;
      flex-direction: column;
    } */
    .season-title {
      width: 100vw;
      position: relative;
      top: 3rem;
      left: 0;
      transform: translate(0%, 0%);
      transform: translate(0%, 0%);
      padding-inline: var(--pd-x-small);
      height: 7rem;
    }
    /* .items-container {
      flex: 1;
    } */

    .items-container {
      padding-bottom: 0rem;
      grid-template-columns: repeat(24, 4.19%);
      grid-template-rows: repeat(24, 4.19%);
    }

    .relat-container {
      max-width: 14rem;
      padding: 1.1rem;
      gap: 0.7rem;
      /* text-wrap: pretty; */
    }

    .relat {
      z-index: 1;
    }
  }

  @media (max-height: 560px) and (max-width: 648px) {
    .season-title {
      top: 2.5rem;
      height: 6rem;
    }

    .relat-container {
      font-size: 0.7rem;
    }
  }

  @media (max-height: 588px) and (min-width: 586px) {
    .relat {
      grid-row: calc(var(--rowStart) - 1) / var(--rowEnd);
    }

    .img-0 {
      grid-column: var(--colStartShortHg) / var(--colEndShortHg);
      grid-row: var(--rowStartShortHg) / var(--rowEndShortHg);
    }

    .img-1 {
      grid-column: var(--colStartShortHg) / var(--colEndShortHg);
      grid-row: var(--rowStartShortHg) / var(--rowEndShortHg);
    }

    .container-0-1:hover {
      transform: translateY(30%);
      transition: transform 0.5s ease-in;
    }

    .container-0-2:hover {
      transform: translateY(-30%);
      transition: transform 0.5s ease-in;
    }

    .container-1-1:hover {
      transform: translateY(20%);
      transition: transform 0.5s ease-in;
    }
  }

  @media (max-height: 568px) {
    .relatBlue {
      grid-row: calc(var(--rowStartMobile) - 3) / var(--rowEndMobile);
    }

    .imgRelatBlue {
      grid-column: calc(var(--colStartMobile) - 2) / var(--colEndMobile);
      /* grid-row: var(--rowStartMobile) / var(--rowEndMobile); */
    }
  }
</style>
