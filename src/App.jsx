import React,{useState,useEffect} from 'react';
import TabletAndDesktopSize from "./main/TableAndDesktopSize";
import MobileSize from "./main/MobileSize";

function App() {

const [windowWidth, setWindowWidth] = useState(window.innerWidth);
const isMobile = windowWidth  <= 767; // Check if the current viewport width is <= 767px

useEffect(() => {
  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth);
  };

  window.addEventListener('resize', handleWindowResize);

  return () => {
    window.removeEventListener('resize', handleWindowResize);
  };
});

const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    overflowX: 'hidden',
  };

  return (
    <div style={containerStyle}>
      {isMobile ? (
        <MobileSize />
      ) : (
          <TabletAndDesktopSize />
      )}
    </div>
  );
}

export default App;
