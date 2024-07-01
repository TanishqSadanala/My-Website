import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Profile from './components/Profile';
import SocialLinks from './components/SocialLinks';
import BlogPage from './components/BlogPage';
import SheetMusicPage from './components/SheetMusicPage';
import './index.css';

const HomePage: React.FC = () => {
  return (
    <div className="content">
      <div className="content-container">
        <Profile />
        <h1 className="section-title">Professional Background</h1>
        <p className="section-text">
          Grad @ University of Dayton<br></br>
          Experienced in music Genration - AI/ML, and machine learning. Intrested in Deeplearning, Music and software. 
        </p>
        <h1 className="section-title">Key Projects</h1>
        <p className="section-text">
          - Image Classification App: Developed using React Native, JavaScript, and Expo Go for real-time object detection.
        </p>
        <p className="section-text">
          - Music Genre Classification: Built a machine learning model to classify music genres with 95% accuracy using TensorFlow and Keras.
        </p>
        <h1 className="section-title">Contact Information</h1>
        <p className="section-text">
          Feel free to reach out to me <br></br>Email: tanishq3499@gmail.com 
          <br></br>Phone: 937-626-0531
        </p>
        <p className="social-title">Follow on social media:</p>
        <SocialLinks />
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <div className="layout-container">
          <Header />
          <Routes>
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/sheet-music" element={<SheetMusicPage />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
