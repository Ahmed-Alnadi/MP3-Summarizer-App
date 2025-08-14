import { useState } from 'react'
import React from 'react'
import './App.css'

const App: React.FC = () => {
    const [audioFile, setAudioFile] = useState<File | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.target.files && event.target.files[0]) {
        setAudioFile(event.target.files[0]);

      }
      }


  return (
    <div>
      <h1>AI Audio Summarizer</h1>
      <p>Upload your MP3 file, and our AI will transcribe and summarize it for you.</p>

        <input 
        type="file" 
        accept=".mp3,audio/mpeg"
        onChange={handleFileChange}
      />

      {audioFile && (
        <div>
          <p>Selected file: {audioFile.name}</p>
        </div>
      )}

      
    </div>
    
  );
};

export default App
