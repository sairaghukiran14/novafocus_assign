import "./App.css";
import { MdArrowOutward } from "react-icons/md";
import { GoArrowRight } from "react-icons/go";
const App = () => {
  return (
    <div className="main_section">
      <div className="mainContent">
        <div className="navBar">
          <div className="dots">
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
          <div className="rightNav">
            <div className="language">EN</div>
            <div className="contacts">
              <span> CONTACT US</span> <MdArrowOutward />
            </div>
            <div className="lines">
              <div className="line"></div>
              <div className="line"></div>
            </div>
          </div>
        </div>
        <div className="showcase">
          <div className="text">
            <div>WE CREATE</div>
            <div>BEST DIGITAL</div>
            <div>PRODUCTS.</div>
          </div>
        </div>
        <div className="pro">
          <div className="left">
            <div className="circle1"></div>
            <div className="circle2"></div>
            <div className="name">
              DISCUSS <br /> THEPROJECT
            </div>
          </div>
          <div className="right">
            <span> WHO WE ARE</span> <GoArrowRight />{" "}
          </div>
        </div>
        <div className="footer">
          <div className="leftFooter">
            WE ARE THE LEADERS IN WEB & MOBILE <br />
            DESIGN AND DEVELOPMENT INDUSTRY.
          </div>
          <div className="rightFooter">
            We create quality content and cool ideas. We create websites,
            applications, <br /> 3D Design,motion design and animation.We bring
            the most daring ideas to life.
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
