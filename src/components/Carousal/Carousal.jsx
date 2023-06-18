import React from "react";

import "./Carousal.css";
import { Link } from "react-router-dom";



function Carousal() {
  return (
    <div className="app_carousal">
      <div className="app_carousal-carousal">
        <div
          id="carouselExampleInterval"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="2500">
              <img src="/images/JSR_Inter_project_pics/plastic/PC/IMG_4034.jpg" class="d-block" alt="..." />
            </div>
            <div class="carousel-item" data-bs-interval="2500">
              <img src="/images/JSR_Inter_project_pics/Paper/KRAFT_UNSHREDDED/KRAFT-UNSHREDDED-2.jpg" class="d-block" alt="..." />
            </div>
            <div class="carousel-item" data-bs-interval="2500">
              <img src="/images/JSR_Inter_project_pics/Rubber/USED-BUTYL-RUBBER-TUBES-4.png" class="d-block" alt="..." />
            </div>
            <div class="carousel-item" data-bs-interval="2500">
              <img src="/images/JSR_Inter_project_pics/Metal/Compressor_Scrap/Compressor-Scrap-6.jpeg" class="d-block" alt="..." />
            </div>
          </div>
        </div>
      </div>
      <div className="app_carousal-content">
        <h2><span className="heading-initial">O</span>UR PRODUCTS</h2>
        <ul>
            <Link  to={"/plastic"} ><li>- Plastic</li></Link>
            <p>(LDPE, LLDPE.HDPE, PP, PET, PS, PC, PMMA, POM, ABS, SAN etc)</p>
            <Link to={"/rubber"}><li>- Rubber</li></Link>
            <p>(used inner butyl rubber tubes & crumb rubber etc)</p>
            <Link to={"/paper"}><li>- Paper</li></Link>
            <p>(paper raw material and recyclables)</p>
            <Link to={"/metal"}><li>- Metal</li></Link>
            <p>(Non ferrous metals-Steel scrap and Aluminium scrap)</p>
        </ul>
      </div>
    </div>
  );
}

export default Carousal;
