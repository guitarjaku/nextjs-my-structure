import React, { useState, useEffect } from "react";
// import Head from "next/head";

const Home = () => {
  const [token, setToken] = useState("");

  const onGetToken = () => {
    setToken(localStorage.getItem("token"));
  };

  const onSetToken = () => {
    localStorage.setItem("token", token);
  };

  useEffect(() => {}, [token]);

  return (
    <div className="bg-black flex justify-center items-center min-h-screen">
      <div className="flex-col items-center">
        <input
          className="w-full p-2 rounded-md"
          type="text"
          value={token}
          onChange={(e) => {
            // console.log(e.target.value);
            setToken(e.target.value);
          }}
        />
        <div className="flex">
          <button
            onClick={onGetToken}
            className="inline-flex items-center px-4 py-2 m-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700 active:bg-indigo-700 transition duration-150 ease-in-out"
          >
            GET TOKEN
          </button>
          <button
            onClick={onSetToken}
            className="inline-flex items-center px-4 py-2 m-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700 active:bg-indigo-700 transition duration-150 ease-in-out"
          >
            SET TOKEN
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
