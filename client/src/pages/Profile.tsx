import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Button, Input, Logo, Rating, Geolocation } from "../components/index";
import LogoImg from "../assets/images/prof.jpeg";
import useAuth from "../hooks/useAuth";

function Profile() {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-row-reverse  text-gray-600 justify-between">
        <div
          className="w-[400px] h-[400px]"
          style={{
            backgroundImage: `url(${LogoImg})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top center",
            backgroundSize: "cover",
          }}
        ></div>
        <div className="text-2xl flex-col">
          <h2 className="text-6xl text-teal-900 mb-6 font-semibold">
            John Doe
          </h2>
          <p>Software Engineer</p>
          <h3 className="mt-10 mb-4 text-3xl font-semibold">
            Contact Information
          </h3>
          <div className="space-y-6 text-xl">
            <p>
              <strong>Email:</strong> john.doe@example.com
            </p>
            <p>
              <strong>Phone:</strong> +1 (555) 123-4567
            </p>
            <p>
              <strong>Address:</strong> 1234 Street Name, City, State, 56789
            </p>
          </div>
          <h3 className="mt-10 mb-4 text-3xl font-semibold">Rating</h3>
          <Rating />
        </div>
      </div>
      <div className="mb-4">
        <h3 className="mt-10 mb-4 text-3xl font-semibold">About</h3>
        <div className="mt-2 text-xl">
          <p>
            John is a seasoned software engineer with over 10 years of
            experience in web development. Throughout his career, he has
            mastered a wide range of technologies and frameworks, enabling him
            to build robust and scalable applications. His expertise spans both
            front-end and back-end development, and he has a particular passion
            for creating seamless user experiences and efficient, maintainable
            code.
          </p>
          <p>
            John's love for coding is matched by his enthusiasm for teaching and
            mentoring. He has led numerous training sessions and workshops,
            helping junior developers hone their skills and grow in their
            careers. His approachable and patient demeanor makes him an
            excellent mentor, and he takes great pride in seeing his mentees
            succeed.
          </p>
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
        <h3 className="mt-10 mb-4 text-3xl font-semibold">Location</h3>
        <Geolocation />
      </div>
      <div className="my-4">
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
      </div>
    </>
  );
}

export default Profile;
