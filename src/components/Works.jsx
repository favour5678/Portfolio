import React, { useEffect } from "react";
import Foodspace from "../assets/foodspace.jpeg";
import Fan from "../assets/fan.png";
import Blogapp from "../assets/blogapp.png";
import Quizapp from "../assets/quizapp.png";
import Weatherapp from "../assets/weatherapp.png";
import Musicapp from "../assets/musicapp.png";
import { FaGithub } from "react-icons/fa6";
import { FaLink } from "react-icons/fa6";
import Aos from "aos";
import "aos/dist/aos.css";

export const Works = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });

  return (
    <section className="pt-24" id="works">
      <div>
        <div className="flex flex-col justify-center items-center">
          <h1
            className="border-2 border-[#C8CACD] py-2 px-5 font-bold text-lg md:text-xl"
            data-aos="fade-up"
          >
            Works
          </h1>
          <p className="mt-2 text-base md:text-lg" data-aos="fade-up">
            These are some of my works👇🏻
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-14 gap-y-10 mx-16 py-10 text-[#0C0C0C]">
          <div className="works-container " data-aos="fade-up">
            <img
              src={Foodspace}
              alt="foodspace-img"
              className="mb-4 rounded-md rounded-b-none w-full h-52 object-center object-cover"
            />
            <div>
              <h1 className="text-base md:text-lg font-semibold mb-1 px-2">FOOD-SPACE</h1>
              <p className="mb-3 px-2 text-sm md:text-base">
                An e-commerce website offering a variety of foods, drinks, and
                snacks, where users can explore different categories, each
                displaying products with their corresponding prices. Users have
                the flexibility to easily add items from any category to their
                shopping cart.
              </p>
              <span className="flex flex-wrap gap-2 px-2">
                <p className="works-pill">React.Js</p>
                <p className="works-pill">TailwindCSS</p>
              </span>
            </div>
            <span className="mt-3 mx-2 pt-2 border-t border-[#0C0C0C] flex items-center justify-between">
              <a href="https://github.com/favour5678/FoodSpace">
                <FaGithub className="text-lg" />
              </a>
              <a href="https://foodspacee.netlify.app/">
                <FaLink className="text-lg" />
              </a>
            </span>
          </div>
          <div className="works-container" data-aos="fade-down">
            <img
              src={Musicapp}
              alt="musicapp-img"
              className="mb-4 rounded-md rounded-b-none w-full h-52 object-center object-cover"
            />
            <div>
              <h1 className="text-base md:text-lg font-semibold mb-1 px-2">MUSIC APP</h1>
              <p className="text-gray-800 mb-3 px-2 text-sm md:text-base">
                This music web application allows users to play default songs,
                add them to playlists, and discover the artists behind each
                track. Additionally, users can search for any song among the
                default tunes available on the app.
              </p>
              <span className="flex flex-wrap gap-2 px-2">
                <p className="works-pill">React.Js</p>
                <p className="works-pill">TailwindCSS</p>
                <p className="works-pill">React-H5-Audio-Player</p>
                <p className="works-pill">Robo Music Api</p>
              </span>
            </div>
            <span className="mt-3 mx-2 pt-2 border-t border-gray-800 flex items-center justify-between">
              <a href="https://github.com/favour5678/MusicApp">
                <FaGithub className="text-lg" />
              </a>
              <a href="https://famusicapp.netlify.app/">
                <FaLink className="text-lg" />
              </a>
            </span>
          </div>
          <div className="works-container" data-aos="fade-up">
            <img
              src={Fan}
              alt="fan-img"
              className="mb-4 rounded-md rounded-b-none w-full h-52 object-center object-cover"
            />
            <div>
              <h1 className="text-base md:text-lg font-semibold mb-1 px-2">FAN</h1>
              <p className="text-gray-800 mb-3 px-2 text-sm md:text-base">
                This is a fan designed with the ability to rotate.
              </p>
              <span className="flex flex-wrap gap-2 px-2">
                <p className="works-pill">Html</p>
                <p className="works-pill">Css</p>
                <p className="works-pill">Animation</p>
              </span>
            </div>
            <span className="mt-3 mx-2 pt-2 border-t border-gray-800 flex items-center justify-between">
              <a href="https://github.com/favour5678/FAN">
                <FaGithub className="text-lg" />
              </a>
              <a href="https://favour5678.github.io/FAN/">
                <FaLink className="text-lg" />
              </a>
            </span>
          </div>
          <div className="works-container" data-aos="fade-down">
            <img
              src={Blogapp}
              alt="blogapp-img"
              className="mb-4 rounded-md rounded-b-none w-full h-52 object-center object-cover"
            />
            <div>
              <h1 className="text-base md:text-lg font-semibold mb-1 px-2">BLOG APP</h1>
              <p className="text-gray-800 mb-3 px-2 text-sm md:text-base">
                This blog web application enables users to create accounts, log
                in, generate and publish content, as well as edit and view
                default blog news.
              </p>
              <span className="flex flex-wrap gap-2 px-2">
                <p className="works-pill">React.Js</p>
                <p className="works-pill">TailwindCSS</p>
                <p className="works-pill">Express.JS</p>
                <p className="works-pill">Mongo DB</p>
              </span>
            </div>
            <span className="mt-3 mx-2 pt-2 border-t border-gray-800 flex items-center justify-between">
              <a href="https://github.com/favour5678/BlogApp">
                <FaGithub className="text-lg" />
              </a>
              <a href="https://fablog-app.netlify.app/">
                <FaLink className="text-lg" />
              </a>
            </span>
          </div>
          <div className="works-container" data-aos="fade-up">
            <img
              src={Quizapp}
              alt="quizapp-img"
              className="mb-4 rounded-md rounded-b-none w-full h-52 object-center object-cover"
            />
            <div>
              <h1 className="text-base md:text-lg font-semibold mb-1 px-2">QUIZ APP</h1>
              <p className="text-gray-800 mb-3 px-2 text-sm md:text-base">
                A quiz web application designed to challenge users with
                thought-provoking questions. Users can test their knowledge,
                answer questions, and receive a grade upon completing the quiz.
              </p>
              <span className="flex flex-wrap gap-2 px-2">
                <p className="works-pill">React.Js</p>
                <p className="works-pill">TailwindCSS</p>
              </span>
            </div>
            <span className="mt-3 mx-2 pt-2 border-t border-gray-800 flex items-center justify-between">
              <a href="https://github.com/favour5678/QuizApp">
                <FaGithub className="text-lg" />
              </a>
              <a href="https://faquizapp.netlify.app/">
                <FaLink className="text-lg" />
              </a>
            </span>
          </div>
          <div className="works-container" data-aos="fade-down">
            <img
              src={Weatherapp}
              alt="weatherapp-img"
              className="mb-4 rounded-md rounded-b-none w-full h-52 object-center object-cover"
            />
            <div>
              <h1 className="text-base md:text-lg font-semibold mb-1 px-2">WEATHER APP</h1>
              <p className="text-gray-800 mb-3 px-2 text-sm md:text-base">
                This is a web app that allows users to check the current weather
                conditions of a city or state.
              </p>
              <span className="flex flex-wrap gap-2 px-2">
                <p className="works-pill">React.Js</p>
                <p className="works-pill">TailwindCSS</p>
                <p className="works-pill">AccuWeather Api</p>
              </span>
            </div>
            <span className="mt-3 mx-2 pt-2 border-t border-gray-800 flex items-center justify-between">
              <a href="https://github.com/favour5678/WeatherApp">
                <FaGithub className="text-lg" />
              </a>
              <a href="https://faweather-app.netlify.app/">
                <FaLink className="text-lg" />
              </a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
