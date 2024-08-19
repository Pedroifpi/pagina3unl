document.querySelectorAll('.draggable').forEach(box => {
  let isDragging = false;
  let offsetX = 0;
  let offsetY = 0;

  box.addEventListener('mousedown', (e) => {
    isDragging = true;
    offsetX = e.offsetX;
    offsetY = e.offsetY;
    box.style.cursor = 'grabbing';
  });

  document.addEventListener('mousemove', (e) => {
    if (isDragging) {
      const x = e.pageX - offsetX;
      const y = e.pageY - offsetY;
      box.style.left = `${x}px`;
      box.style.top = `${y}px`;
    }
  });

  document.addEventListener('mouseup', () => {
    isDragging = false;
    box.style.cursor = 'grab';
  });
});
