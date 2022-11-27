import {React} from "react";


const ImageField = (props) => {
    
  const handleClick = () => {
    window.open("http://localhost:8000"+props.image,"_blank")
  }

  return (
    <>
    <div className="box">
          <div className="imageSection">
            <img src={props.image} alt={"Not available"} onClick={handleClick}/>
          </div>
    </div>
         

    </>
  );
};

export default ImageField;
