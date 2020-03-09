import { ChartDataSets, ChartOptions } from "chart.js";
import { Color, Label, BaseChartDirective } from "ng2-charts";

// Graph Options

const commonGraphOptions = {
  responsive: true,

  tooltips: {
    backgroundColor: "#f2a17e",
    borderColor: "#000000",
    borderWidth: 1.5,
    displayColors: false,
    callbacks: {
      label: (tooltipItem: any, data: any) => {
        var label = data.datasets[tooltipItem.datasetIndex].label || "";

        if (label) {
          label += ": ";
        }
        // label += Math.round(tooltipItem.yLabel * 100) / 100;
        label += ` ₹ ${tooltipItem.yLabel}`;
        return label;
      },
      title: (tooltipItem: any, data) => {
        return "";
      }
    }
  },
  scales: {
    xAxes: [
      {
        display: true,
        gridLines: {
          display: false
        }
      }
    ],
    yAxes: [
      {
        display: true,
        gridLines: {
          display: true
          // drawBorder: false,
          // lineWidth: 25
        },
        ticks: {
          beginAtZero: true
        }
      }
    ]
  }
};

//Line Options

// public barChartData: ChartDataSets[] = [
//   {
//     data: this.barData
//     // label: "Total Spend"
//   }
// ];

const lineChartOptions: ChartOptions = {
  ...commonGraphOptions,
  elements: {
    line: {
      // tension: 0.1,
      fill: false,
      borderJoinStyle: "round"
    },
    point: {
      borderColor: "#27878e"
    }
  }
};

const lineChartColors: Color[] = [
  {
    borderColor: "#77c7b4",
    backgroundColor: "#77c7b4"
  }
];

export const lineGraphOptions = {
  options: lineChartOptions,
  colors: lineChartColors,
  legend: false,
  type: "line",
  plugins: []
};

// Bar options

const barChartOptions: ChartOptions = {
  ...commonGraphOptions
};

const barChartColors: Color[] = [
  {
    backgroundColor: "#77c7b4"
  }
];

export const barGraphOptions = {
  options: barChartOptions,
  colors: barChartColors,
  type: "bar",
  legend: false,
  plugins: []
};
