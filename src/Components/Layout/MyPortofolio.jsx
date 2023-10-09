
import portofolioData from "../../data/myPortofolioData.json"
export default function MyPortofolio() {


    return(
        <section id="myPortofolio">
            <div className="myPortofolio-container">
                <div className="myPortofolio-top-section">
                <h2>My Portfolio</h2>
                <a href="https://github.com/Kristjan2323" className="git-btn" target="_blank" rel="noopener noreferrer">Visit My GitHub</a>
                </div>
                <div className="top-container-data">
                {portofolioData.myPortofolio?.map((item,index) =>
                <div key={index} className="portofolio-data-container" >
                <div>
                    <img className="image-portofolio" src={item.image}/>
                </div>
                <div className="portofolio-details-container">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <button>View in Github 🡭</button>
                </div>
                </div>
                )}
                </div>
            </div>
        </section>
    )
}