import { useEffect } from "react";

function About() {
  useEffect(() => {
    let my_skills = document.querySelector("#my_skills");

    my_skills.addEventListener("click", () => {
      document.querySelector(".my_skills").classList.toggle("hidden_class");
    });
  });

  return (
    <div id="about" className="pt-3 col-sm-12">
      <div className="row second-row ">
        <div className="image_3 col-md-3">
          <img src="images/my_photo.jpg" />
        </div>

        <div className="col-md-5">
          <span>
            <h3>Lal Chand Teli</h3>
            <p>
              hello, there I am a full time WEB DEVELOPER,
              <br />
              I'm pursuing B Tech from SANGAM UNIVERSITY in the computer
              science. Right now, I am in the seventh semester. I have three
              years of experience in web development. I already developed many
              websites like - SHOPPING SITE, RESTAURANT MANAGEMENT, INSTAGRAM
              CLONE, FORT-FOLIO SITE.
              <br />
              <br />
              I AM SPECIALIZED IN MERN STACK WEB DEVELOPER. I can build
              responsive single-page applications like zomato, oyo, make my
              trip, live chat, shopping site using the latest technology REACT,
              EXPRESS, MongoDB, NODE, ADVANCE JAVASCRIPT, BOOTSTRAP, PHP, SQL,
              PYTHON a lot of technologies.
              <br />I got many certificates in web development from different
              platforms, and I also have 6 months of virtual Internship
              experience with 'EDUREKA' and I was the super intern here.
            </p>
          </span>
        </div>

        <div id="education" className="col-md-4">
          <div className="academic_box">
            <span className="year">2016</span>
            <span className="flag">
              <i className="fas fa-flag fa-lg"></i>
            </span>
            <span className="class">Matriculation</span>
            <span>
              <p>
                from Board of Secondary Education, Rajasthan with first division
              </p>
            </span>
          </div>

          <div className="academic_box">
            <span className="year">2018</span>
            <span className="flag">
              <i className="fas fa-flag fa-lg"></i>
            </span>
            <span className="class">Intermediate</span>
            <span>
              <p>from Board of Secondary Education, Rajasthan with 'A' grade</p>
            </span>
          </div>

          <div id="skills" className="academic_box">
            <span className="year">2018</span>
            <span className="flag">
              <i className="fas fa-flag fa-lg"></i>
            </span>
            <span className="class">College Joining</span>
            <span>
              <p>
                I'm pursuing B Tech from 'SANGAM UNIVERSITY'
                <br />
                (currently in seventh semester)
              </p>
            </span>
          </div>
        </div>

        <div id="my_skills">
          <label>
            <i className="fas fa-arrow-circle-down"></i>check my skills
          </label>
        </div>
      </div>

      <div className="my_skills hidden_class container">
        <div className="row">
          <div className="col-lg-3">
            <div className="skills skill1">90% HTML</div>
          </div>

          <div className="col-lg-3">
            <div className="skills skill2">80% CSS</div>
          </div>

          <div className="col-lg-3">
            <div className="skills skill3">75% JS</div>
          </div>

          <div className="col-lg-3">
            <div className="skills skill4">80% CODE</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
