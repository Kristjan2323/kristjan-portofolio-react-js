import React from "react";
import AboutMeImage from "../../images/aboutMeKristjan.jpg"

export default function AboutMe(){


    return(
       <section id="aboutMe" className="aboutMe-container">
        <div className="aboutMe-image-container">
        <img src={AboutMeImage} alter="aboutMe" />
        </div>
        <div className="aboutMe-description-container">
         <h2>About Me 👨🏻‍💻</h2>
         <p>👋 Hello! I'm Kristjan Ballolli, a passionate and curious Full-Stack Developer
             with a strong focus on backend development. With a deep love for technology,
              I thrive on the ever-evolving landscape of web development. 
            My journey through the digital realm has led me to master a variety of tools and technologies.
         </p>
         <p><strong>💻 Backend Expertise: </strong>My core strength lies in backend development, 
            where I harness the power of C# with .NET, ASP.NET Core API, SQL Server, and MongoDB to craft robust,
             efficient, and scalable solutions. Whether it's designing complex database structures,
             building RESTful APIs, or optimizing server-side processes, I'm up for the challenge.
         </p>
         <p><strong>📚 Continuous Learning: </strong>
         My enthusiasm for technology fuels a relentless pursuit of knowledge. 
         I'm constantly exploring emerging trends and tools in the software development world.
          I firmly believe that staying ahead of the curve is essential in delivering cutting-edge solutions.
         </p>
         <p><strong>💡 Problem Solver: </strong>
          I approach every project as a problem-solving opportunity.
          I enjoy dissecting challenges, devising creative solutions, and writing clean,
          maintainable code that stands the test of time. My goal is to not only meet but exceed expectations.
         </p>
         <p><strong>❤️ Passion: </strong>
          Beyond the lines of code, you'll find a developer who is genuinely passionate 
         about making a positive impact through technology. I'm committed to delivering solutions 
         that not only meet technical requirements 
         but also enhance the user experience and solve real-world problems
         </p>
        </div>
       </section>
    )
}