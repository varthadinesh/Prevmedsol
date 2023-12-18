import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import axios from "axios";
import Footer from "./Footer";


const Home = () => {
  const [packages, setPackages] = useState([]);
  const onMouseOver=()=>{
    document.getElementById('scroll_news').stop();
  }
  const onMouseOut=()=>{
    document.getElementById('scroll_news').start();
  }

  useEffect(() => {
    axios
      .get("http://localhost:8080/packages")
      .then((res) => {
        console.log(res)
        res.data.map((item) => {
          setPackages((oldArray) => [...oldArray, item]);
        });
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
    <Navbar />
      <div className="homemain">
          <div className="p-5">
          <h1
            className="text-white fw-bolder homeheading"
          >
            Engage
            <br />
            Empower
            <br />
            Enhance
          </h1>
          </div>
          <div className="mt-3 ps-5 pe-5 text-white w-50">
            <h4 className="homesideheading">
              Because those who made us deserve to age magnificently from the
              comfort of their own homes.
            </h4>
          </div>
          <div>
            <marquee width="100%" className="bg-secondary" scrollamount="10" id='scroll_news' onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
              <div className="d-flex  text-white">
                <div className="me-4 mt-2">
                  <p className="fs-5">Elders Empowered: <span className="fs-4"><b>30000<sup>+</sup></b></span></p>
                </div>
                <div className="me-4 ms-4 mt-2">
                <p className="fs-5">Operated: <span className="fs-4"><b>PAN India</b></span></p>
                </div>
                <div className="me-4 ms-4 mt-2">
                <p className="fs-5">Lives Saved: <span className="fs-4"><b>500<sup>+</sup></b></span></p>
                </div>
                <div className="ms-4 mt-2">
                <p className="fs-5">Events Organised: <span className="fs-4"><b>2000<sup>+</sup></b></span></p>
                </div>
              </div>
            </marquee>
         </div>
      </div>
      <div className="ms-md-5 me-md-5 mb-5 ps-md-5 p-1 pe-md-5 pb-5">
        <div className="d-md-flex justify-content-between mt-3 mb-2 mt-md-5 mb-md-3">
          <h3>Get the care plan your parents need</h3>
          <h6>We have all their needs covered.</h6>
        </div>
        <div className="d-flex flex-wrap justify-content-around  plansdiv mb-4">

        {packages.map((item)=>(
          
          <div className="m-3 position-relative">
            <img src={item.imageurl} alt="engage pic" />
            <h3
              style={{ bottom: "20%", left: "100px" }}
              className="position-absolute text-white fw-bold"
            >
              {item.packagename}
            </h3>
            <Link to="/plans">
              <button
                style={{ bottom: "10%", left: "140px" }}
                className="btn btn-primary position-absolute"
              >
                Learn More
              </button>
            </Link>
          </div>
          ))}

        </div>
      </div>
     <Footer/>
    </>
  );
};

export default Home;
