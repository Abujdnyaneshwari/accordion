import './App.css';
import Accordion from './component/index';
import HorizontalAccordion from './component/HorizontalAccordion';

function App() {
  return (
    <div>
      <div className='md:hidden container px-[20px]'>  
        <div className='font-bold pt-[20px]'> vertical Accordion</div>
        <Accordion />
      </div>
      <div className='hidden md:block'>  
        <div className='font-bold'> Horizontal Accordion</div>
        <HorizontalAccordion />
      </div>
    </div>
  );
}

export default App;
