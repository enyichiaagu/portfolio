import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

function Carousel ({ imageArray }) {
  return (
    <AwesomeSlider>
        {
          imageArray.map((imageSrc, index) => <div data-src={imageSrc} key={index}/>)
        }
    </AwesomeSlider>
  )
};

export default Carousel