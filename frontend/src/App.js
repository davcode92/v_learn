import styled from 'styled-components';
import Videos from './Components/Videos'
import { useGlobalContext } from './context/global';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import VideoPlayer from './Components/VideoPlayer';
import { useState } from 'react';
import Upload from './Components/Upload';
import Button from './Components/Button';
import Footer from './Components/Footer';


function App() {
  const [modal, setModal] = useState(false);
  

  return (
    <BrowserRouter>
      <AppStyled className="App">
        <div className="upload">
          <Button
            name="Upload"
            icon={<i className="fas fa-plus"></i>}
            onClick={() => {
              setModal(true);
            }}
            bg="#1e90ff"
          />
        </div>
        {modal && <Upload />}
        <h1>LEARNING</h1><br></br>
        <p>Share your coding Skills by Uploading a video</p>
        <Routes>
          <Route path='/' element={<Videos />} />
          <Route path='/videos/:id' element={<VideoPlayer />} />
        </Routes>
        {modal && (
          <div className="overlay" onClick={() => setModal(false)}></div>
        )}

        <Footer />
      </AppStyled>
    </BrowserRouter>
  );
}

const AppStyled = styled.div`
  padding: 3rem 18rem;
  h1 {
    color: #fff;
    background: linear-gradient(to right, #00b894 40%, #705df2);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    display: inline-block;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }
  p {
    color: #fff;
    background: linear-gradient(to right, #00b894 40%, #705df2);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    display: inline-block;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
  }
  .upload {
    display: flex;
    justify-content: flex-start;
  }
`;

export default App;
