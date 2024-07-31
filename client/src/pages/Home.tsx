import React from "react";
import LogoImg from "../assets/images/logo.png";
import { useNavigate } from "react-router-dom";
import { generateRandomNumber } from "../utils/helpers";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const randomNumber = generateRandomNumber(10, 99);

  return (
    <>
      <h2 className="text-6xl text-teal-900 mb-6 font-semibold">About</h2>
      <div className="text-2xl mb-4 space-y-8">
        <p>
          John is a seasoned software engineer with over 10 years of experience
          in web development. Throughout his career, he has mastered a wide
          range of technologies and frameworks, enabling him to build robust and
          scalable applications. His expertise spans both front-end and back-end
          development, and he has a particular passion for creating seamless
          user experiences and efficient, maintainable code.
        </p>

        <p>
          John's love for coding is matched by his enthusiasm for teaching and
          mentoring. He has led numerous training sessions and workshops,
          helping junior developers hone their skills and grow in their careers.
          His approachable and patient demeanor makes him an excellent mentor,
          and he takes great pride in seeing his mentees succeed.
        </p>
        <img
          src={`https://mdbcdn.b-cdn.net/img/new/slides/0${randomNumber}.webp`}
          className="h-auto max-w-full"
          alt="..."
        />
        <p>
          Beyond his professional work, John is an avid contributor to
          open-source projects. He believes in the power of collaboration and
          community in advancing technology and solving complex problems. His
          contributions have earned him recognition and respect within the
          developer community.
        </p>
        <p>
          In his free time, John enjoys exploring new technologies, attending
          tech meetups, and sharing his knowledge through blog posts and
          speaking engagements. His dedication to continuous learning and
          passion for the craft of software development make him a valuable
          asset to any team.
        </p>
      </div>
      <button
        className="mt-8 bg-gray-400 text-white py-2 px-4 rounded hover:bg-teal-600"
        onClick={() => {
          navigate(-1);
        }}
      >
        Back
      </button>
      <button className="ml-4 mt-8 bg-teal-700 text-white py-2 px-4 rounded hover:bg-teal-600">
        Edit Profile
      </button>

      <button
        onClick={() => navigate("/list")}
        className="ml-4 mt-8 bg-red-700 text-white py-2 px-4 rounded hover:bg-red-600"
      >
        Item List
      </button>
    </>
  );
};

export default Home;
