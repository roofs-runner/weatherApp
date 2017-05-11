var React = require('react');

var WeatherMessage = ({temp, location}) => {
    return(
        <h3 className="text-center">Current temperature in {location} is {temp}&deg;C!</h3>
    )
};

module.exports = WeatherMessage;