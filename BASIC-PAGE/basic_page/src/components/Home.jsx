import React from "react";
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1> TeK Kaushal</h1>
          <p>Solution to all your Problems</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="grahpics" />
        <div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Voluptates, molestias, suscipit illum natus, optio dolorum facere
            similique magni delectus expedita nihil fugiat voluptate animi
            tempora provident autem vitae id distinctio!
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>who are u?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni enim
            sapiente facere debitis explicabo eligendi mollitia odio dicta
            saepe, accusamus reprehenderit corrupti alias odit voluptate a ab
            repudiandae accusantium nemo assumenda nobis nulla? Vero possimus,
            molestias vel quidem quis assumenda natus? Culpa repudiandae
            accusantium aut dolor, neque ex eligendi et odio quam nam veritatis
            laboriosam, eos illo assumenda. Unde similique, temporibus
            doloremque assumenda mollitia eos! Voluptatum, odit impedit
            laudantium sunt voluptas corrupti quam vitae fugiat illum at
            pariatur neque rem ipsum quo harum? Autem sequi dolores vitae quis
            porro quasi ut cupiditate rerum fuga accusantium vel, accusamus, ad
            voluptas veniam.
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div style={{ animationDelay: "0.3s" }}>
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>
            <div style={{ animationDelay: "0.5s" }}>
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>
            <div style={{ animationDelay: "0.7s" }}>
              <AiFillYoutube />
              <p>Youtube</p>
            </div>
            <div style={{ animationDelay: "1s" }}>
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
