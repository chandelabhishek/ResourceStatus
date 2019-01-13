import React from "react";
import ResourceCard from "./ResourceCard";
import "./Resource.css";
import data from "./Data";
import { green, red, white } from "../Constant";

const getDataByIndex = index =>
  data.map(row => ({
    name: row.name,
    price: row.prices[index],
    percentage: row.percentage[index],
    volume: row.volume[index]
  }));

const determineColor = (previousValue, currentValue) => {
  if (currentValue === previousValue) return white;
  if (currentValue > previousValue) return red;
  if (currentValue < previousValue) return green;
};

const getColor = (data, prevData) => ({
  price: determineColor(data.price, prevData.price),
  percentage: determineColor(data.percentage, prevData.percentage),
  volume: determineColor(data.volume, prevData.volume)
});

export default class ResourceStatus extends React.Component {
  timer = null;
  statusIndex = 1;
  state = {
    statusData: getDataByIndex(this.statusIndex - 1),
    previousStatusData: getDataByIndex(this.statusIndex),
    statusColor: {}
  };

  startTimer = () => {
    this.timer = setInterval(() => {
      this.previousStatusIndex = this.statusIndex;
      this.statusIndex = (this.statusIndex + 1) % 5; // To make sure it doesn't overflow
      this.setState(prevState => ({
        previousStatusData: prevState.statusData,
        statusData: getDataByIndex(this.statusIndex)
      }));
    }, 5000);
  };

  stopTimer = () => clearInterval(this.timer);

  componentDidMount() {
    this.startTimer();
  }

  componentWillUnmount() {
    this.stopTimer();
  }

  render() {
    return this.state.statusData.map((sd, index) => {
      return (
        <div className="resource-card">
          <ResourceCard
            {...sd}
            color={getColor(sd, this.state.previousStatusData[index])}
          />
          <div className="separator" />
        </div>
      );
    });
  }
}
