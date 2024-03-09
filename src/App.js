
import './App.css';
import Cart from './Cart';
import Mainpage from './Mainpage';
import Navbar from './Navbar';
import { useState } from 'react';

function App() {

  const [content, setContent] = useState([]);

  // Callback function to update content state
  const updateContent = (newContent) => {
    setContent(newContent);
  };
  return (
    <div>
      <Navbar />
      <div>
      <Mainpage onUpdateContent={updateContent}/>
      <Cart content={content}/>
      </div>
      
    </div>
    
  );
}

export default App;
