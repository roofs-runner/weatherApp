var React = require('react');

var WeatherMessage = ({temp, location}) => {
    return(
        <div>
            Current weather in {location} is {temp}&deg;C!
        </div>
    )
};

module.exports = WeatherMessage;