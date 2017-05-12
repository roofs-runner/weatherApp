var React = require('react');

var About = (props) => {
    return(
        <div className="">
            <h1 className="text-center page-title">About</h1>
            <p>This is a small application to check weather at a desired location.</p>
            <p>You can also check the code at <a href="https://github.com/roofs-runner/weatherApp">GitHub</a></p>
        </div>

    )
};

module.exports = About;
