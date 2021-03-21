import { useEffect, useState } from "react";
import "./Style.css";

const Tempapp = () => {

  const [City, setCity] = useState(null);
  const [Country, setCountry] = useState(null);
  const [Search, setSearch] = useState("Korba");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `http://api.weatherapi.com/v1/current.json?key=8c8c6e22b1e54321a0a221804212003&q=${Search}&aqi=no`;
      const response = await fetch(url);
      const resJson = await response.json();
      //console.log(resJson.current);
      setCity(resJson.current);
      //setCity(resJson.current);
      // setCountry(resJson.location);
      //console.log(`${resJson.location.name}`);
      //console.log(`${City.location.name}`);

    }
    fetchApi();
  }, [Search]);

  useEffect(() => {
    const fetchApi2 = async () => {
      const url = `http://api.weatherapi.com/v1/current.json?key=8c8c6e22b1e54321a0a221804212003&q=${Search}&aqi=no`;
      const response2 = await fetch(url);
      const resJson2 = await response2.json();
      //console.log(resJson2.location);
      setCountry(resJson2.location);
      //setCity(resJson.current);
      // setCountry(resJson.location);
      //console.log(`${resJson.location.name}`);
      //console.log(`${City.location.name}`);

    }
    fetchApi2();
  }, [Search]);


  // useEffect(() => {
  //   const fetchApi = async () => {
  //     const url = `http://api.openweathermap.org/data/2.5/weather?q=${Search}&appid=23fda7f1ec6d712cbc96c9fde90d4580`;
  //     const response = await fetch(url);
  //     const resJson = await response.json();
  //     console.log(resJson);
  //     setCity(resJson);
  //     //setCity(resJson.current);
  //     // setCountry(resJson.location);
  //     //console.log(`${resJson.location.name}`);
  //     //console.log(`${City.location.name}`);

  //   }
  //   fetchApi();
  // }, [Search]);



  return (
    <div className="tempapp">
      <h1 className="title center-align white-text black z-depth-3">Weather Around The World</h1>
      <div className="row">
        <div className="col l4 s12 offset-l4">
          <div className="box black z-depth-3">
            <div className="input-field enter">
              <input
                id="city_name"
                type="text"
                className="white-text"
                // className="validate"
                autoComplete="off"
                value={Search}
                onChange={(event) => {
                  setSearch(event.target.value);
                }} />
              <label className="enter" for="city_name">Enter City</label>
            </div>

            {(!City) ? (
              <div className="error">
                <div className="center-align">
                  <i className=" error-icon material-icons white-text">error</i>
                </div>
                <div className="errorBox">
                  <h4 className="errorTop center-align white-text">DATA NOT AVAILABLE!</h4>
                  <h6 className="errorLine center-align white-text">Please enter a valid City name.</h6>
                </div>
              </div>
            ) : (
              (!Country) ? (<p className="white-text">No data available</p>) : (
                <div className="">
                  <div className="city-box">
                    <h2 className="city center-align white-text">
                      {Search}
                    </h2>
                  </div>
                  <div className="myLocation center-align">
                    <h6 className="location white-text">
                      <i className="myIcon material-icons white-text">location_on</i>
                      {Country.region}, {Country.country}
                    </h6>
                  </div>
                  <div className="city-temp">
                    <h3 className="myTemp white-text center-align">{City.feelslike_c}°C / {City.feelslike_f}°F</h3>
                    <h5 className="condition center-align white-text">{City.condition.text}</h5>
                    <div className="other hide-on-med-and-down">
                      <div className="left">
                        <p className=" humidity white-text">Humidity: {City.humidity}%</p>
                        <p className=" speed white-text">Wind Speed: {City.wind_kph}Kph</p>
                      </div>
                      <div className="right">
                        <p className="pressure white-text">Atm. Pressure: {City.pressure_mb}Mb</p>
                        <p className="right press white-text">Precipitation: {City.precip_mm}mm</p>
                      </div>
                    </div>
                  </div>
                </div>
              )




            )}



          </div>
        </div>
      </div>
    </div>
  );
}

export default Tempapp;


// "current": {
//   "last_updated_epoch": 1616275357,
//     "last_updated": "2021-03-21 02:52",
//       "temp_c": 22.0,
//         "temp_f": 71.6,
//           "is_day": 0,
//             "condition": {
//     "text": "Partly cloudy",
//       "icon": "//cdn.weatherapi.com/weather/64x64/night/116.png",
//         "code": 1003
//   },
//   "wind_mph": 3.4,
//     "wind_kph": 5.4,
//       "wind_degree": 337,
//         "wind_dir": "NNW",
//           "pressure_mb": 1009.0,
//             "pressure_in": 30.3,
//               "precip_mm": 0.0,
//                 "precip_in": 0.0,
//                   "humidity": 32,
//                     "cloud": 6,
//                       "feelslike_c": 23.4,
//                         "feelslike_f": 74.1,
//                           "vis_km": 10.0,
//                             "vis_miles": 6.0,
//                               "uv": 1.0,
//                                 "gust_mph": 6.9,
//                                   "gust_kph": 11.2
// }