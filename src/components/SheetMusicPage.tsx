import React from 'react';
import './SheetMusicPage.css';

const SheetMusicPage: React.FC = () => {
  const sheetMusicData = [
    {
      title: "Nocturne in B Minor",
      image: "https://placehold.co/400",
      downloadLink: "/path/to/download1.pdf",
      youtubeLink: "https://www.youtube.com/watch?v=XXXX"
    },
    {
      title: "La Valse au Clair de Lune",
      image: "https://placehold.co/400",
      downloadLink: "/path/to/download2.pdf",
      youtubeLink: "https://www.youtube.com/watch?v=XXXX"
    },
    {
      title: "Valse Sentimentale No. 2",
      image: "https://placehold.co/400",
      downloadLink: "/path/to/download3.pdf",
      youtubeLink: "https://www.youtube.com/watch?v=XXXX"
    }
  ];

  return (
    <div className="sheet-music-page">
      {sheetMusicData.map((item, index) => (
        <div key={index} className="sheet-music-item">
          <img src={item.image} alt={item.title} className="music-image" />
          <div className="music-info">
            <h2 className="music-title">{item.title}</h2>
            <a href={item.downloadLink} target="_blank" rel="noopener noreferrer" className="download-link">Download</a>
            <a href={item.youtubeLink} target="_blank" rel="noopener noreferrer" className="youtube-link">Watch on YouTube</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SheetMusicPage;
