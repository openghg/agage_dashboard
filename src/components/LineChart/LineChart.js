import React from "react";
import Plot from "react-plotly.js";

import styles from "./LineChart.module.css";

class LineChart extends React.Component {
  render() {
    const data = this.props.data;

    // Data keyed by site
    let plotData = [];

    for (const [site, siteData] of Object.entries(data)) {
      // We want to conver UNIX ms timestamps to Dates
      const x_timestamps = Object.keys(siteData);
      const x_values = x_timestamps.map((d) => new Date(parseInt(d)));
      // Extract the count values
      const y_values = Object.values(siteData);

      const name = String(site).toUpperCase();

      const trace = {
        x: x_values,
        y: y_values,
        mode: "lines",
        line: {
          width: 1,
        },
        name: name,
      };

      plotData.push(trace);
    }

    const layout = {
      title: {
        text: this.props.title ? this.props.title : null,
        font: {
          size: 16,
        },
        xanchor: "center",
        y: 0.97,
        yanchor: "top",
      },
      xaxis: {
        title: this.props.xLabel,
        range: this.props.xRange ? this.props.xRange : null,
        showgrid: false,
      },
      yaxis: {
        title: this.props.yLabel,
        range: this.props.yRange ? this.props.yRange : null,
        showgrid: false,
      },
      width: this.props.width,
      height: this.props.height,
      margin: {
        l: 60,
        r: 40,
        b: 30,
        t: 20,
        pad: 5,
      },
    };

    return (
      <div className={styles.container}>
        <Plot data={plotData} layout={layout} />
      </div>
    );
  }
}

export default LineChart;
