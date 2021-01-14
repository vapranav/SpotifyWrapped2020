import Chart from "react-google-charts";
import './App.css';

let data1 =  [
  ['Task', 'Hours per Day'],
  ['Pop',     233],
  ['Rock',      139],
  ['Modern Rock',  61],
  ['Rap', 52],
  ['K-Pop',    27],
  ['Lo-Fi Beats',   22],
  ['Indie Pop',    20],
  ['Show Tunes',    20],
  ['EDM',    20],
  ['Pop Punk',    17],
  ['Others',    217],
]

let options1 = {
  chartArea: { width: '80%' },
  legend: {position:'bottom',
            textStyle: {
              color: 'white'
            }},
  backgroundColor: '#121212',
  titleTextStyle: {color: 'white'},
  fontName:'Montserrat',
}

let data2 = [
  ['Task', 'No. of people'],
  ['0-20k', 287],
  ['20k-50k', 328],
  ['50k-100k', 174],
  ['100k-200k', 36],
  ['200k-300k', 3]
]

let options2 = {
  // Material design options
  fontName:'Montserrat',
  chartArea: { width: '80%' },
  legend: {position:'bottom',
              textStyle: {
                color: 'white'
              }},
  titleTextStyle: {color: 'white'},
  backgroundColor: '#121212',
  hAxis: {
    textStyle: { color: 'white',
    fontName: 'Montserrat'
  }
  },
  vAxis: {
    textStyle: { color: 'white',
    fontName: 'Montserrat'
  }
  },
}

function App() {
  return (
    <div className="App">
      <h1 style={{color: "#1DB954"}}>Spotify Wrapped Data 2020</h1>
      <p>I recently conducted a survey on people's Spotify wrapped data and decided to see some trends and visualise this data. The following are the results.</p>
      <h2 className="title">Popular Genres</h2>
      <Chart
      width="100%"
      height="500px"
      chartType="PieChart"
      loader={<div>Loading Chart</div>}
      legendToggle
      data= {data1}
      options = {options1}
  />
  <h2>Minutes Listened</h2>
  <Chart
  width="100%"
  height="500px"
  chartType="BarChart"
  loader={<div>Loading Chart</div>}
  data={data2}
  options = {options2}
  
/>
<h2> Top Artists (Ranked)</h2>
<div className="Artists">
<li>1. Taylor Swift</li>
<li>2. The Beatles</li>
<li>3. BTS</li>
<li>4. Glass Animals</li>
<li>5. Eminem</li>
<li>6. Artic Monkeys</li>
<li>=The 1975</li>
<li>=The Weeknd</li>
<li>7. Dua Lipa</li>
<li>= Juice WRLD</li>
<li>= Illenium</li>
<li>= Frank Ocean</li>
<li>= Post Malone</li>
<li>8. Nirvana</li>
<li>9. Logic</li>
<li>10. Billie Eilish</li>
</div>
</div>
  );
}
export default App;
