// swipeAction.js
export function swipe(node) {
  let x0, y0;

  function handleTouchStart(event) {
    const touch = event.touches[0];
    x0 = touch.clientX;
    y0 = touch.clientY;

    node.dispatchEvent(
      new CustomEvent("swipestart", {
        detail: { x0, y0 },
      }),
    );
  }

  function handleTouchMove(event) {
    const touch = event.touches[0];
    const dx = touch.clientX - x0;
    const dy = touch.clientY - y0;

    // Optional: Add conditions to ensure it's more of a horizontal than vertical swipe
    if (Math.abs(dx) > Math.abs(dy)) {
      event.preventDefault(); // Prevents scrolling while swiping horizontally
      node.style.transform = `translateX(${dx}px)`;
    }
  }
  
function handleTouchEnd(event) {
  const touch = event.changedTouches[0];
  const dx = touch.clientX - x0;

  // Assuming a threshold of 50px to consider it a swipe
  if (Math.abs(dx) > 50) {
    // Dispatch a "swipe" event with direction information
    node.dispatchEvent(
      new CustomEvent("swipe", {
        detail: { direction: dx > 0 ? "right" : "left" },
      }),
    );
  }

  // Reset the transform
  node.style.transform = "";
}

  
}
