import React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Typography } from "@mui/material";

class FAQ extends React.Component {
  render() {
    const Q1 = "What determines the concentration of greenhouse gases in the atmosphere?";
    const A1 = `Greenhouse gas concentrations are influenced by emissions and meteorology. 
    The concentration at a particular point in time will depend on the background concentration, 
    the magnitude of the emissions upwind of the sensor, the wind speed, and the amount of mixing that 
    the gas experiences in the atmosphere. These factors, as well as the wind direction, mean that 
    measured greenhouse gas concentrations at a given location change continuously.`;

    const Q2 = "What causes the amount of mixing in the atmosphere to change?";
    const A2 = `Mixing of greenhouse gases is driven by turbulence. You experience this turbulence every day as gusts of wind.
    
    Turbulence tends to be high when winds are strong or when the surface is warm compared to the air higher up in the atmosphere (e.g., on a sunny day, the sun warms the ground more than the air).
    Turbulence is weaker when the wind speed is low, or when the ground is cooler than the air (e.g., during a clear night).
    During periods of strong turbulence, gases are mixed away from the surface more rapidly than during times with low turbulence, or vice versa. Therefore, when the turbulence is strong and gases are mixed more rapidly, concentrations tend to be lower.`;

    const Q3 = "Why do the concentrations increase at night-time?";
    const A3 = `It may seem counter-intitive that measured concentrations tend to be high during the night,
    when we might expect emissions to be low. However, as explained in Questions 1 and 2, concentrations 
    are influenced by both emissions and meteorology. Typically, at nighttime, atmospheric mixing tends to 
    be weaker, because radiation from the sun is not warming the ground and generating turbulence. Therefore, gases tend to hang around near the surface, 
    close to where they are emitted, and concentrations tend to build up in the lower atmosphere. 
    This effect often overwhelms any emissions change, particularly on clear days.`;

    const Q4 = "What does the minimum concentration indicate?";
    const A4 = `During periods of strong winds and/or strong mixing, concentrations will tend toward some 
    minimum value, particularly at more remote or coastal locations. This concentration is often referred to as the 'background' or 
    'baseline'. It represents the concentration in the remote atmosphere, far from pollution sources. 
    In the UK, baseline concentrations are typically observed when the wind is blowing from the Atlantic to the west. Baseline concentrations
     represent the total accumulation of greenhouse gases that has occurred over decades. For carbon dioxide and methane, 
     the baseline value measured in the UK is currently increasing each year.`;

    const Q5 = "What causes the 'spikes' in the measurements?";
    const A5 = `The spikes, or 'pollution events' seen overlaying the measurements are caused by plumes of 
    gas passing over the sensor. These plumes could be due to nearby sources such as cars or chimneys. But more 
    prolongued pollution events are seen when air reaches the measurement site from more industrialised countries or regions.`;

    const Q6 = "How are these data used to infer emissions?";
    const A6 = `As discussed above, the concentration measurements
     are influenced by emissions and meteorology. 
    Therefore, in order to infer greenhouse gas emissions from the concentration data, we need to account for the influence of 
    meteorology. This can be done by using computer models that simulate the dispersion of greenhouse 
    gases in the atmosphere. These models use meteorological data from weather forecasting centres such as the Met Office, to estimate how
    a gas would be transported through the atmosphere. The model can be compared to the data, and the emissions adjusted if differences are found.`;

    const Q7 = "Are atmospheric measurements used in greenhouse gas reporting?";
    const A7 = `At present, it is not a requirement for countries to use greenhouse gas observations in their 
    greenhouse gas reports. Instead, countries are required only to use 'inventory' methods, based on economic data. However,
    the UK and a small number of other countries have begun submitting emissions derived from atmospheric measurements 
    along with their inventory estimates. These 'top-down' estimates are used to identify potential areas where the inventory could be improved.`;

    const Q8 = "Can greenhouse gases be measured from space?";
    const A8 = `Yes, there are several missions that can now measure carbon dioxide and methane concentrations 
    from space. These measurements are complementary to the ground-based data, because satellites can 'see' larger areas than the 
    in situ networks. However, there are some limitations at present, because they cannot 
    measure during the night, during cloudy conditions, and the measurements tend to be lower precision. Furthermore, there are many
    lower-abundance greenhouse gases that would be difficult to measure for the lower atmosphere from space (e.g. HFCs). 
    In future, greenhouse gas observing systems will likely rely on both space-based and ground-based data.`;

    return (
      <div>
        <Typography variant="h3" style={{ padding: "1.5%" }} gutterBottom>
          Frequently Asked Questions
        </Typography>

        <Card>
          <CardContent>
            <Typography variant="h4">Q1: {Q1}</Typography>
            <Typography>{A1}</Typography>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <Typography variant="h4">Q2: {Q2}</Typography>
            <Typography>{A2}</Typography>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <Typography variant="h4">Q3: {Q3}</Typography>
            <Typography>{A3}</Typography>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <Typography variant="h4">Q4: {Q4}</Typography>
            <Typography>{A4}</Typography>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <Typography variant="h4">Q5: {Q5}</Typography>
            <Typography>{A5}</Typography>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <Typography variant="h4">Q6: {Q6}</Typography>
            <Typography>{A6}</Typography>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <Typography variant="h4">Q7: {Q7}</Typography>
            <Typography>{A7}</Typography>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <Typography variant="h4">Q8: {Q8}</Typography>
            <Typography>{A8}</Typography>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default FAQ;
