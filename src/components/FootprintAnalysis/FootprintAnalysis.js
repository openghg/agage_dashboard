import PropTypes from "prop-types";
import React from "react";

import SliderMap from "../SliderMap/SliderMap";
import VisLayout from "../VisLayout/VisLayout";
import GraphContainer from "../GraphContainer/GraphContainer";
import LineChart from "./../LineChart/LineChart";
import colours from "../../data/colours.json";

import { isEmpty, importSVGs } from "../../util/helpers";

import styles from "./FootprintAnalysis.module.css";

class FootprintAnalysis extends React.Component {
  constructor(props) {
    super(props);

    const footprints = importSVGs();

    let dates = Object.keys(footprints);
    dates.sort();

    this.state = { selectedDate: dates[0], footprints: footprints, dates: dates };
    this.dateSelector = this.dateSelector.bind(this);
  }

  createGraphs() {
    const measurementData = this.props.measurementData;

    let visualisations = [];

    // For now just fix this to be TMB
    // const selectedKeys = this.state.selectedKeys;
    const selectedKeys = { TMB: { CO2: true, CH4: true } };

    let speciesData = {};

    if (selectedKeys) {
      for (const [site, subObj] of Object.entries(selectedKeys)) {
        for (const [species, value] of Object.entries(subObj)) {
          if (value) {
            // Create a visualisation and add it to the list
            const data = measurementData[site][species];

            if (!speciesData.hasOwnProperty(species)) {
              speciesData[species] = {};
            }

            speciesData[species][site] = data;
          }
        }
      }

      let totalSites = 0;

      const tab20 = colours["tab20"];

      if (!isEmpty(speciesData)) {
        for (const [species, siteData] of Object.entries(speciesData)) {
          // Create a graph for each species
          const title = String(species).toUpperCase();
          const key = title.concat("-fp-", Object.keys(siteData).join("-"));
          const containerKey = `footprint-plot-${key}`;
          const nSites = Object.keys(siteData).length;
          const selectedColours = tab20.slice(totalSites, totalSites + nSites);

          //   for (let i = 0; i < nSites; i++) {
          //     tab20.push(tab20.shift());
          //   }

          const vis = (
            <GraphContainer key={containerKey}>
              <LineChart
                data={siteData}
                colours={selectedColours}
                title={title}
                xLabel="Date"
                yLabel="Concentration"
                key={key}
                selectedDate={this.state.selectedDate}
              />
            </GraphContainer>
          );

          visualisations.push(vis);

          totalSites += nSites;
        }
      }
    }
    return <VisLayout slimPlot={true}>{visualisations}</VisLayout>;
  }

  dateSelector(date) {
    // Here date is a ms-based UNIX timestamp
    this.setState({ selectedDate: parseInt(date) });
  }

  dataSelector() {
    // Select the data we want to plot on the linechart based on the date range we have the footprint for.
  }

  render() {
    const footprints = this.state.footprints;
    const footprintImg = footprints[this.state.selectedDate];

    // TODO - change this to be read in instead of hard-coding the bounding box
    const overlayBounds = [
      [50.87063, -1.26],
      [52.0193672, 0.46799811],
    ];

    return (
      <div className={styles.container}>
        <div className={styles.map}>
          <SliderMap
            data-testid="slider-map"
            dateSelector={this.dateSelector}
            selectedDate={this.state.selectedDate}
            dates={this.state.dates}
            sites={this.props.sites}
            centre={this.props.centre}
            zoom={this.props.zoom}
            width={this.props.width}
            height={this.props.height}
            overlayImg={footprintImg}
            overlayBounds={overlayBounds}
            showSites={true}
            measMarkers={false}
          />
        </div>
        <div className={styles.plots}>{this.createGraphs()}</div>
      </div>
    );
  }
}

FootprintAnalysis.propTypes = {
  centre: PropTypes.arrayOf(PropTypes.number).isRequired,
  height: PropTypes.string,
  measurementData: PropTypes.object,
  siteData: PropTypes.object,
  width: PropTypes.string,
  zoom: PropTypes.number.isRequired,
};

export default FootprintAnalysis;
