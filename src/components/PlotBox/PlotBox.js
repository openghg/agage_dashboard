import PropTypes from "prop-types";
import React from "react";

import styles from "./PlotBox.module.css";

class PlotBox extends React.Component {
  constructor(props) {
    super(props);

    this.something = 2;
  }

  render() {
    // This needs a better name, normal layout is
    // header, plot, body
    // Layout two is header, body, plot
    const containerStyle = this.props.layoutTwo ? styles.containerTwo : styles.container

    return (
      <div className={styles.container}>
        <div className={styles.header}>{this.props.headerText}</div>
        <div className={styles.body}>{this.props.bodyText}</div>
        <div className={styles.plot}>
          <img src={this.props.imagePath} alt={this.props.altText} />
        </div>
      </div>
    );
  }
}

PlotBox.propTypes = {
  altText: PropTypes.string,
  bodyText: PropTypes.string,
  headerText: PropTypes.string,
  imagePath: PropTypes.string,
  layoutTwo: PropTypes.bool,
};

export default PlotBox;
