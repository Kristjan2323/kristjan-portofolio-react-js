import React, {useState,useEffect} from "react";
import cv from "../CV/Kristjan-Ballolli-Resume.pdf"



export default function Resume(){

  const [cvPreview,  setCvPrview] = useState(false)
  const [visibleCV, setVisibleCV] = useState(true)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 600) {
        setVisibleCV(false);
      }
      else{
        setVisibleCV(true);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [window.innerWidth]);

function handleDownloadDocument(){
  const link = document.createElement('a');
  link.href = cv;
  link.download = 'KristjanPortfolio.pdf'; // The desired name for the downloaded file
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}


  function handlePreviewDocument(){
         setCvPrview(!cvPreview)      
  }

    return (
      <section id="resume" className="resume-container">
        
            <h2>Resume</h2>
        
      
        <div className="resume-btn-container">        
        <button
        onClick={handleDownloadDocument} 
        className="btn btn-download-cv"
        href={cv}
        download= "KristjanPortfolio"       
        >
          Download CV       
       </button>
       {visibleCV && 
         <button
        onClick={handlePreviewDocument} 
        className="btn-preview-doc"
        >
         {cvPreview ? "Hide CV" : "Preview CV"}        
       </button>}
       </div>
       {visibleCV && cvPreview &&
        <div className="img-cv-container">
       
        
        <embed className="cv-document"  src={cv}  type="application/pdf"  height={1000} p />
        
        
        </div>
        }
      </section>
     
    )
  }


