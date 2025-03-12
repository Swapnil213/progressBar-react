import { useEffect, useState } from 'react';
import './App.css';

const ProgressBar = ({ progress }) => {

  const [animatedProgress, setAnimatedProgress] = useState(0);

  useEffect(() => {
    setTimeout(()=> setAnimatedProgress(progress), 100);
  }, [progress]);

  return (
    <div className='progressContainer'>
      <div
        className='progressBar'
        style={{
          transform: `translateX(-${100 - animatedProgress}%)`
        }}
        role='progressBar'
        aria-valuenow={animatedProgress}
        aria-valuemax={100}
        aria-valuemin={0}>
        {progress}%
      </div>
    </div>
  );
}

function App() {
  return (
    <>
      <div className='App'>
        <h1 className='heading'>Progress Bar</h1>
        <ProgressBar progress={70} />
      </div>
    </>
  );
}

export default App;
