import React from "react";
import PropTypes from "prop-types";

import styles from "./OverlayContainer.module.css";

// Based on https://stackoverflow.com/a/55003301
function Overlay(props) {
  const { useState } = React;
  const [open, setOpen] = useState(true);
  if (open) {
    let style = styles.overlay;

    if (!props.useBackground) {
      style = styles.overlayNoBackground;
    }

    return (
      <div
        data-testid="overlay"
        className={style}
        onClick={() => {
          props.toggleOverlay();
          setOpen(false);
        }}
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          {props.children}
        </div>
      </div>
    );
  }
  return null;
}

Overlay.defaultProps = {
  useBackground: true,
};

export default Overlay;

Overlay.propTypes = {
  toggleOverlay: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
  useBackground: PropTypes.bool,
};
