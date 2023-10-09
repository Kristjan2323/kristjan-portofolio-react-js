
import skillsData from "../../data/skillsData.json"

export default function MySkills(){


    return(
        <section id="mySkills" className="skill-section-container">
            <h1>My Expertise</h1>
           
            <div className="skill-container">
           
  {skillsData.skills.map(skillCategory => {
    if (skillCategory.frontend) {
      return skillCategory.frontend.map((item, index) => (
        <div key={index} className="skill-details-container">
        
          <div className="c-image">
            <img className="skill-image" src={item.src} alt="skill" />
          </div>
          <div className="c-tittle">
            <h2>{item.title}</h2>
          </div>
          <div className="c-description">
            <p>{item.description}</p>
          </div>
        </div>
      ));
    }
    return null; // Handle other skill categories if needed
  })}
  {skillsData.skills.map(skillCategory => {
    if (skillCategory.backend) {
      return skillCategory.backend.map((item, index) => (
        <div key={index} className="skill-details-container">
        
          <div className="c-image">
            <img src={item.src} alt="skill" />
          </div>
          <div className="c-tittle">
            <h2>{item.title}</h2>
          </div>
          <div className="c-description">
            <p>{item.description}</p>
          </div>
        </div>
      ));
    }
    return null; // Handle other skill categories if needed
  })}
</div>

 </section>
    )
}