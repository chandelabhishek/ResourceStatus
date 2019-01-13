import React from "react";
import "./Resource.css";
import UpArrow from "@material-ui/icons/ExpandLess";
import DownArrow from "@material-ui/icons/ExpandMore";

import { green, red } from "../Constant";

const ResourceCard = ({ name, volume, percentage, price, color }) => (
  <div className="resource-container">
    {console.log(color)}
    <div className="first-row">
      <div>{name}</div>
      <div style={{ color: color.price }}>{price}</div>
    </div>
    <div className="second-row">
      <div style={{ color: color.percentage }}>
        {color.percentage === green && (
          <UpArrow
            fontSize="small"
            className="status"
            style={{
              color: color.percentage
            }}
            viewBox="0 0 20 20"
          />
        )}

        {color.percentage === red && (
          <DownArrow
            fontSize="small"
            className="status"
            style={{
              color: color.percentage
            }}
            viewBox="0 0 20 20"
          />
        )}

        {`${Math.abs(percentage)}%`}
      </div>

      <div style={{ color: color.volume }} className="volume">
        {volume}
      </div>
    </div>
  </div>
);

export default ResourceCard;
