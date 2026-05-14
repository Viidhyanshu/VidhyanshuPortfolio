import React from 'react';

const Home: React.FC = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Welcome to My Portfolio</h1>
        <p className="hero-subtitle">
          Second Year Student | Developer | Problem Solver
        </p>
        <p className="hero-description">Manipal University Jaipur</p>
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">
            View Projects
          </a>
          <a href="#contact" className="btn btn-secondary">
            Get In Touch
          </a>
        </div>
      </div>
      <div className="hero-illustration">
        <div className="sky" />
        <div className="milky-way" />
        <div className="stars">
          <div className="star star-1" />
          <div className="star star-2" />
          <div className="star star-3" />
          <div className="star star-4" />
          <div className="star star-5" />
          <div className="star star-6" />
          <div className="star star-7" />
          <div className="star star-8" />
          <div className="star star-9" />
          <div className="star star-10" />
          <div className="star star-11" />
          <div className="star star-12" />
        </div>
        {/* Ursa Major (Big Dipper) Constellation */}
        <div className="constellation ursa-major">
          <svg
            className="constellation-lines"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            {/* Big Dipper lines */}
            <line
              x1={15}
              y1={25}
              x2={20}
              y2={30}
              stroke="rgba(245, 243, 231, 0.3)"
              strokeWidth="0.5"
            />
            <line
              x1={20}
              y1={30}
              x2={25}
              y2={28}
              stroke="rgba(245, 243, 231, 0.3)"
              strokeWidth="0.5"
            />
            <line
              x1={25}
              y1={28}
              x2={30}
              y2={32}
              stroke="rgba(245, 243, 231, 0.3)"
              strokeWidth="0.5"
            />
            <line
              x1={30}
              y1={32}
              x2={35}
              y2={30}
              stroke="rgba(245, 243, 231, 0.3)"
              strokeWidth="0.5"
            />
            <line
              x1={35}
              y1={30}
              x2={40}
              y2={35}
              stroke="rgba(245, 243, 231, 0.3)"
              strokeWidth="0.5"
            />
            <line
              x1={30}
              y1={32}
              x2={40}
              y2={35}
              stroke="rgba(245, 243, 231, 0.3)"
              strokeWidth="0.5"
            />
            <line
              x1={40}
              y1={35}
              x2={45}
              y2={38}
              stroke="rgba(245, 243, 231, 0.3)"
              strokeWidth="0.5"
            />
          </svg>
          {/* Big Dipper stars */}
          <div className="constellation-star cs-1" />
          <div className="constellation-star cs-2" />
          <div className="constellation-star cs-3" />
          <div className="constellation-star cs-4" />
          <div className="constellation-star cs-5" />
          <div className="constellation-star cs-6" />
          <div className="constellation-star cs-7" />
        </div>
        {/* Orion Constellation */}
        <div className="constellation orion">
          <svg
            className="constellation-lines"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            {/* Orion's Belt */}
            <line
              x1={60}
              y1={40}
              x2={65}
              y2={40}
              stroke="rgba(245, 243, 231, 0.3)"
              strokeWidth="0.5"
            />
            <line
              x1={65}
              y1={40}
              x2={70}
              y2={40}
              stroke="rgba(245, 243, 231, 0.3)"
              strokeWidth="0.5"
            />
            {/* Orion's Body */}
            <line
              x1={65}
              y1={40}
              x2={65}
              y2={35}
              stroke="rgba(245, 243, 231, 0.3)"
              strokeWidth="0.5"
            />
            <line
              x1={65}
              y1={40}
              x2={65}
              y2={45}
              stroke="rgba(245, 243, 231, 0.3)"
              strokeWidth="0.5"
            />
            <line
              x1={60}
              y1={40}
              x2={62}
              y2={35}
              stroke="rgba(245, 243, 231, 0.3)"
              strokeWidth="0.5"
            />
            <line
              x1={70}
              y1={40}
              x2={68}
              y2={35}
              stroke="rgba(245, 243, 231, 0.3)"
              strokeWidth="0.5"
            />
          </svg>
          {/* Orion stars */}
          <div className="constellation-star orion-1" />
          <div className="constellation-star orion-2" />
          <div className="constellation-star orion-3" />
          <div className="constellation-star orion-4" />
          <div className="constellation-star orion-5" />
          <div className="constellation-star orion-6" />
        </div>
        <div className="moon">
          <div className="moon-glow" />
          <div className="moon-body" />
        </div>
        <div className="sun">
          <div className="sun-glow" />
          <div className="sun-body" />
        </div>
        <div className="clouds-day">
          <div className="cloud cloud-1" />
          <div className="cloud cloud-2" />
          <div className="cloud cloud-3" />
        </div>
        <div className="birds">
          <div className="bird" />
          <div className="bird" />
          <div className="bird" />
        </div>
        <div className="mountains">
          <div className="mountain mountain-1" />
          <div className="mountain mountain-2" />
          <div className="mountain mountain-3" />
        </div>
        <div className="foreground">
          <div className="trees">
            <div className="tree tree-1" />
            <div className="tree tree-2" />
            <div className="tree tree-3" />
          </div>
          <div className="person-silhouette">
            <div className="person-head" />
            <div className="person-body" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
