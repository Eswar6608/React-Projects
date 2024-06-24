import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { useNavigate } from "react-router-dom";
import boy from "../Assets/anime-boy-dog-watching-sunset-generative-ai_900370-34831.avif";
import fantasy from "../Assets/fantasy-scene-anime-style_23-2151135310.avif";
import one from "../Assets/download (2).jpg";
import two from "../Assets/download (3).jpg";

const Home = () => {
  const navigate = new useNavigate();
  const [navOpen, setNavOpen] = useState(false);
  return (
    <div>
      <nav>
        <div className="logo">
          <Link to="/">ME</Link>
        </div>
        <ul id="nav" className={navOpen ? "showmenu" : ""}>
          <li>
            <Link to="#col">WHO</Link>
          </li>
          <li>
            <Link to="#col1">WHAT</Link>
          </li>
          <li>
            <Link to="#col2">WHERE</Link>
          </li>
          <li>
            <Link to="#col3">FOOTER</Link>
          </li>
        </ul>

        <div
          class="menu"
          onClick={() => {
            setNavOpen(!navOpen);
          }}
        >
          <div class="menu-line"></div>
          <div class="menu-line"></div>
          <div class="menu-line"></div>
        </div>
      </nav>
      <div class="content">
        <section id="col">
          <p class="bg">Who Am I?</p>
          <img
            className="col-im"
            src={boy}
            style={{ width: "300", height: "200" }}
          />
          <p class="bg">I'm an adventurer</p>
        </section>
        <section id="col1">
          <p class="bg">What Am I?</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <button onClick={() => navigate("/cart")} class="icon" type="submit">
            <i class="fa-solid fa-magnifying-glass"></i>Search
          </button>
        </section>
        <section id="col2">
          <p class="bg">Where To Find Me?</p>
          <div class="s">
            <p class="para">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </p>
            <img class="col-im" src={fantasy} />
          </div>
          <div class="s">
            <p class="para">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <img class="col-im" src={one} />
          </div>
          <div class="s">
            <p class="para">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <img class="col-im" src={two} />
          </div>
        </section>
        <section id="col3">
          <p class="bg">Footer</p>
          <p class="foo">
            Bootstrap Theme Made By <a href=""> www.w3schools.com</a>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
              Facilis nostrum eveniet quo veritatis aliquid velit illo quaerat
              consectetur sunt consequatur.
              <br /> Libero possimus ipsum earum quod vitae et delectus ipsam
              praesentium incidunt magnam saepe eos, <br /> temporibus soluta
              distinctio quas ullam maiores, rem optio consequuntur iusto
              blanditiis nobis fugiat tempore ratione? Delectus deserunt maiores
              id perferendis quisquam eaque commodi? <br /> Adipisci minima
              reprehenderit est nulla nobis quas non quidem quam pariatur? Sit
              voluptas tempora earum cupiditate similique, dicta vel. <br />
              Accusantium hic placeat debitis minima ea vel ex optio et
              distinctio ipsam illum beatae voluptatem aperiam, dolore quasi
              consequatur velit similique voluptatibus nostrum a.
            </p>
          </p>
        </section>
      </div>
    </div>
  );
};

export default Home;
