import "./OCR.css";
import React from 'react';
import ImageUpload from '../../bin/components/ImageUpload';
// import Output from '../components/Output';


const OCR = () => {

  return (
    <div>
      <div class='flexcontainer'>
        <div>Nepali Handwriting Digitizer</div>
      </div>
      <div class='flex2'>
        <div><ImageUpload /></div>
      </div>


    </div>
  )
};

export default OCR;