var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var OpenWeatherMap = require('OpenWeatherMap');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({
    getInitialState: function () {
        return {
            isLoading: false,
            errorMessage: undefined
        }
    },
    handleSearch: function (location) {
        var that = this;

        this.setState({
            isLoading: true
        });

        OpenWeatherMap.getTemp(location).then(function (data) {
            that.setState({
              location: data.name,
              temp: Math.floor(data.main.temp),
              isLoading: false
          })
        }, function (error) {
            that.setState({
              location: null,
              temp: null,
              isLoading: false,
              errorMessage: error.message
            });
        });
    },
    render: function () {
        var {isLoading, temp, location, errorMessage} = this.state;
        
        function renderMessage() {
            if (isLoading) {
                return <h3>Fetching weather...</h3>;
            } else if (temp && location) {
                return <WeatherMessage location={location} temp={temp}/>;
            }
        }
        
        function renderError() {
            if (typeof errorMessage === 'string') {
                return(
                    <ErrorModal message={errorMessage}/>
                )
            }
        }
        return(
            <div>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
                {renderError()}
            </div>
        )
    }
});

module.exports = Weather;