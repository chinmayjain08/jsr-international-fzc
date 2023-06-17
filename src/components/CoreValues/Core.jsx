import React from "react";
import "./Core.css";

function Core() {
  return (
    <div className="app_core">
      <div className="app_core-heading">
        <h2><span className="heading-initial">O</span>UR <span className="heading-initial">C</span>ORE <span className="heading-initial">V</span>ALUES</h2>
      </div>

      <div class="ag-courses_box">
        <div class="ag-courses_item">
          <a href="#" class="ag-courses-item_link">
            <div class="ag-courses-item_bg"></div>

            <div class="ag-courses-item_title">SUSTAINABILITY</div>

            <div class="ag-courses-item_date-box">
              WE ARE
              <span class="ag-courses-item_date"> JSR</span>
            </div>
          </a>
        </div>
        <div class="ag-courses_item">
          <a href="#" class="ag-courses-item_link">
            <div class="ag-courses-item_bg"></div>

            <div class="ag-courses-item_title">QUALITY</div>

            <div class="ag-courses-item_date-box">
              WE ARE
              <span class="ag-courses-item_date"> JSR</span>
            </div>
          </a>
        </div>
        <div class="ag-courses_item">
          <a href="#" class="ag-courses-item_link">
            <div class="ag-courses-item_bg"></div>

            <div class="ag-courses-item_title">COMMITMENT</div>

            <div class="ag-courses-item_date-box">
              WE ARE
              <span class="ag-courses-item_date"> JSR</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Core;
