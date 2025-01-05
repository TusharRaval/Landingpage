import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <section className="hero-section">
      <div className="container h-100">
        <div className="row h-50 align-items-center">
          <div className="col-12 text-center">
            {/* First Row: Heading */}
            <h1 className="hero-heading">Welcome to Paradise</h1>
            <p className="hero-subheading">Discover the world's most beautiful beaches, explore breathtaking destinations, and make memories that last a lifetime.</p>
          </div>
        </div>
        <div className="row h-25 align-items-center">
          <div className="col-12 text-center">
            {/* Second Row: Call to Action */}
            <Link to="/book" className="btn btn-book">Book Your Adventure</Link>
            <Link to="/explore" className="btn btn-explore">Explore Destinations</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
