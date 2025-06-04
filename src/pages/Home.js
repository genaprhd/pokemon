import { useEffect, useRef } from "react";
import "../styles/Home.css";
import { startFloatingImages } from "../effects/floatingImage";

function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    if(window.innerWidth < 768) {
    for (let i = 0; i < 2; i++) {
      startFloatingImages(containerRef.current);
    }}
    else {
      for (let i = 0; i < 8; i++) {
        startFloatingImages(containerRef.current);
      }
    }
  }, []);

  return (
    <>
      <div className="home-background">
        <div className="floating-container" ref={containerRef}></div>
      </div>
      <div className="home-container">
        <div className="home-title-container">
            <h1 className="home-title">PokemonAPI</h1>
            <p className="home-small-title">
              Возьмите на работу по&#8209;братски
            </p>
          </div>
        </div>
    </>
  );
}

export default Home;