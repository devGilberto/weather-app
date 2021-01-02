<h1> Weather App</h1>

Doing API Integration using Node.js:
<ul>
  <li>
    Weather
    <ul>
      <li> <a href="https://weatherstack.com/"> Watherstack Website </a></li>
      <li> <a href="https://weatherstack.com/quickstart"> Watherstack Quickstart </a> </li>
    </ul>
  </li>
  <li> 
    Geocoding
    <ul>
      <li> <a href="https://www.mapbox.com/"> MapBox Website </a>  </li>
      <li> <a href="https://docs.mapbox.com/"> MapBox Docs </a>  </li>
    </ul>
  </li>
</ul>
 
<br>



<b> Note: </b> Security measures -> Environment Variables (dotenv package) will be used in .env file which will be add in .gitignore file.
So, it won't be display here any sensitive data!

<br>
<h4> ⚙ Tools for development: </h4>
Visual Studio Code | 
Git BASH |
Node.js LTS |
<a href='https://www.npmjs.com/'> NPMJS </a>
<br>
<h3> API Authentication </h3>
Required HTTP GET Request Parameters: access_key query 
<br>
Base URL: http://api.weatherstack.com/

<br>

Endpoints: 
<ul>
  <li> current </li>
  <li> historical </li>
  <li> forecast </li>
</ul>

<br>

Required Parameters: 
<ul>
  <li> access_key </li>
  <li> query </li>
  <li> 
    <i> Others: </i>
    <ul>
      <li> historical_date </li>
      <li> historical_date_start </li>
      <li> historical_date_end </li>
    </ul>
  </li>
</ul>
