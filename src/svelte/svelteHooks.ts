export function initialBallMove(node: Element, currentIndex: number) {
  if (currentIndex !== 0) return;

  let firstObservation = true;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (firstObservation) {
          firstObservation = false;
          return;
        }

        if (entry.isIntersecting) {
          node.classList.add("initial-move");
        } else {
          node.classList.remove("initial-move");
        }
      });
    },
    {
      rootMargin: "0px",
      threshold: 1,
    },
  );

  observer.observe(node);
}
