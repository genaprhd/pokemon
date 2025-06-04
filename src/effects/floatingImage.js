export function startFloatingImages(container) {
  if (!container) return;
  const imagePath = Array.from(
    { length: 13 },
    (_, i) => "img/pokemons/" + (i + 1) + ".png"
  );
  const floatingImages = [];
  const cover = window.innerWidth < 768 ? 0 : 200;
  const coverH = window.innerHeight + cover;
  const coverW = window.innerWidth + cover;
  const velocity = window.innerWidth < 768 ? 1 : 1.5;

  imagePath.forEach((src) => {
    const img = document.createElement("img");
    img.src = src;
    img.className = "floating-image";

    const imgSize = window.innerWidth < 768 ? (window.innerWidth * 0.1)/2 : (window.innerWidth * 0.007)/2;
    img.style.width = `${imgSize}%`;
    img.style.height = `auto`;

    // Начальные координаты (в пикселях)
    const x = Math.random() * coverW;
    const y = Math.random() * coverH;
    const velocityX = (Math.random() - 0.5) * velocity;
    const velocityY = (Math.random() - 0.5) * velocity;
    const rotation = Math.random() * 360;
    const rotationSpeed = (Math.random() - 0.5) * 2;

    Object.assign(img.style, {
      position: "absolute",
      left: "0",
      top: "0",
      pointerEvents: "none",
      willChange: "transform",
      opacity: "0",
      transition: "opacity 2s ease-in",
      transform: `translate(${x}px, ${y}px) rotate(${rotation}deg)`,
    });

    container.appendChild(img);
requestAnimationFrame(() => {
      img.style.opacity = "1";
    }
    );
    
    floatingImages.push({
      element: img,
      x,
      y,
      velocityX,
      velocityY,
      rotation,
      rotationSpeed,
      imgSize,
    });
  });

  function animate() {
    floatingImages.forEach((image) => {
      image.x += image.velocityX;
      image.y += image.velocityY;
      image.rotation += image.rotationSpeed;

      // Отскок за пределами экрана (когда вся картинка ушла)
      if (image.x < -image.imgSize) {
        image.x = -image.imgSize;
        image.velocityX *= -1;
      }
      if (image.x > coverW) {
        image.x = coverW;
        image.velocityX *= -1;
      }
      if (image.y < -image.imgSize) {
        image.y = -image.imgSize;
        image.velocityY *= -1;
      }
      if (image.y > coverH) {
        image.y = coverH;
        image.velocityY *= -1;
      }

      image.element.style.transform = `translate(${image.x}px, ${image.y}px) rotate(${image.rotation}deg)`;
    });
    requestAnimationFrame(animate);
  }
  animate();
}