import React from 'react';
import Hero from '../components/Home/Hero';
import Features from '../components/Home/Features';
import CoursePreview from '../components/Home/CoursePreview';

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <Features />
      <CoursePreview />
    </div>
  );
};

export default Home;