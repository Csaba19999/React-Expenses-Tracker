import ChartBar from "./ChartBar";
import "./Chart.css";

function Chart(props) {

    const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
    const totalMaximum = Math.max(...dataPointValues);


  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.lable}
          value={dataPoint.value}
          maxValue={totalMaximum}
          lable={dataPoint.lable}
        />
      ))}
    </div>
  );
}
export default Chart;
