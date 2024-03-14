import './App.css';
import NavSide from './component/NavSide';
import './Style/Landingpage.css';
import Intro from './component/Intro';
import {motion} from 'framer-motion';

function App() {
  return (
    <div>
      <div className='bgIntro'>
        <NavSide/>
        <motion.div
        initial={{width:0}}
        animate={{width:'100%'}}
        exit={{x:window.innerWidth, transition: {duration: 0.1}}}
        >
          <Intro/>
        </motion.div>
      </div>
      <div>

      </div>
    </div>
  );
}

export default App;
