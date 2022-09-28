import './App.css';
import Accordion from './component/index';
import HorizontalAccordion from './component/HorizontalAccordion';

function App() {
  return (
    <>
      <div className='font-bold pt-[20px]'> vertical Accordion</div>
      <Accordion />

      <div className='font-bold mt-[50px] pt-[80px]'> Horizontal Accordion</div>
      <HorizontalAccordion />
    </>
  );
}

export default App;
