import React from "react";
import { Select as MuiSelect, MenuItem, FormControl, InputLabel } from "@mui/material";

class SelectOptions extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeValue = this.onChangeValue.bind(this);
  }

  onChangeValue(event) {
    this.props.onChange(event.target.value);
  }

  render() {
    return (
      <FormControl variant="standard" style={{ width: "50%" }}>
        <InputLabel style={{ fontWeight: "bold", color: "black", fontSize: "20px" }}>Select Species</InputLabel>
        <MuiSelect value={this.props.selected} onChange={this.onChangeValue} label="Species" style={{ width: "100%" }}>
          {this.props.options.map((option) => {
            const label = option.toUpperCase();
            return (
              <MenuItem key={option} value={option}>
                {label}
              </MenuItem>
            );
          })}
        </MuiSelect>
      </FormControl>
    );
  }
}

export default SelectOptions;
