import React from "react";
import "./product.css";
import ItemHero from "./ItemHero";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Carousal from "../Carousal/Carousal";

function Plastic() {
  const data = {
    photo1: "/images/JSR_Inter_project_pics/plastic/HDPE/IMG_1309.jpg",
    photo2: "/images/JSR_Inter_project_pics/plastic/PET/PET-ROLLS-2-2.jpg",
    photo3: "/images/JSR_Inter_project_pics/plastic/PP/PP-CAPS-REGRIND-3-2.jpg",
    photo4:
      "/images/JSR_Inter_project_pics/plastic/PVC/5c6852cf-85fe-4852-bcca-8483bb81e6de.jpg",
  };
  return (
    // <Router>
    <>
      <div className="container">
        <Navbar></Navbar>
        <ItemHero
          photo1={data.photo1}
          photo2={data.photo2}
          photo3={data.photo3}
          photo4={data.photo4}
          title="PLASTIC"
          description="The postconsumer plastics recycling process consists of several steps. The first step is the collection of waste plastics (Bataineh, 2020; Franklin Associates, 2018; Santos et al., 2021). In terms of collection, MSW and industrial waste can be differentiated (Willis et al., 2020). The former process includes the collection of postconsumer plastic waste, which is typically mixed and contains contaminants."
        />
        <div className="itemProductContainer">
          <Link className="items" to={"/LDPE"}>
            LDPE
          </Link>
          <Link className="items" to={"/HDPE"}>
            HDPE
          </Link>
          <Link className="items" to={"/PS"}>
            PS
          </Link>
          <Link className="items" to={"/PVC"}>
            PVC
          </Link>
          <Link className="items" to={"/PET"}>
            PET
          </Link>
          <Link className="items" to={"/PP"}>
            PP
          </Link>
          <Link className="items" to={"/EPS"}>
            EPS
          </Link>
          <Link className="items" to={"/POM"}>
            POM
          </Link>
        </div>
        {/* <Routes> */}
      </div>
      <Carousal/>
    </>
  );
}

export default Plastic;
