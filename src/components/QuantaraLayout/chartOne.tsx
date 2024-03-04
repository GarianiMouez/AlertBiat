import { ApexOptions } from "apexcharts";
import React, { use, useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
const { createDate, createDateForXaxis } = require("../../services/getData");
interface dataModel {
  y: string;
  x: string;
}

const options: ApexOptions = {
  legend: {
    show: false,
    position: "top",
    horizontalAlign: "left",
  },
  colors: ["#3C50E0"],
  chart: {
    zoom: {
      enabled: true,
      type: "x",
      autoScaleYaxis: false,
      zoomedArea: {
        fill: {
          color: "#000000",
          opacity: 0.5,
        },
        stroke: {
          color: "#ff4411",
          opacity: 0.7,
          width: 1,
        },
      },
    },

    fontFamily: "Satoshi, sans-serif",
    height: "100%",
    width: "100%",

    dropShadow: {
      enabled: true,
      color: "#623CEA14",
      top: 10,
      blur: 4,
      left: 0,
      opacity: 0.1,
    },

    toolbar: {
      show: true,
      offsetX: 0,
      offsetY: 0,
      tools: {
        download: true,
        selection: true,
        zoom: true,
        zoomin: true,
        zoomout: true,
        pan: true,

        customIcons: [],
      },
      export: {
        csv: {
          filename: undefined,
          columnDelimiter: ",",
          headerCategory: "category",
          headerValue: "value",
          dateFormatter: () => {
            createDate();
          },
        },
        svg: {
          filename: undefined,
        },
        png: {
          filename: undefined,
        },
      },
      autoSelected: "zoom",
    },
    animations: {
      enabled: true,
      easing: "linear",
      dynamicAnimation: {
        speed: 1000000,
      },
    },
  },
  responsive: [
    {
      breakpoint: 1024,
      options: {
        chart: {
          height: "80%",
          width: "80%",
        },
      },
    },
  ],
  stroke: {
    width: [2, 2],
    curve: "straight",
  },

  grid: {
    xaxis: {
      lines: {
        show: true,
      },
    },
    yaxis: {
      lines: {
        show: true,
      },
    },
  },
  dataLabels: {
    enabled: false,
  },

  xaxis: {
    type: "datetime",
    categories: [],
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: true,
    },
  },
  yaxis: {
    title: {
      style: {
        fontSize: "0px",
      },
    },
    min: 0,
    max: 1.5,
  },
};
interface ChartOneState {
  series: {
    name: string;
    data: any;
  }[];
}

const QuantaraAlertOne: React.FC = () => {
  const [listening, setListening] = useState<boolean>(false);
  const [currentDate, setCurrentDate] = useState<string>(createDate());
  const [state, setState] = useState<ChartOneState>({
    series: [{ name: "Alert One", data: [] }],
  });

  useEffect(() => {
    setInterval(() => {
      setCurrentDate(createDate());
    }, 1000);
  }, [setCurrentDate]);
  useEffect(() => {
    if (!listening) {
      const events = new EventSource(
        "http://localhost:3085/quantara/getquantara/alert2",
      );

      events.onmessage = (event) => {
        const parsedData = JSON.parse(event.data);

        setState((prevState) => ({
          series: [
            {
              name: prevState.series[0]?.name || "alert One",
              data:
                prevState.series[0].data.length > 20
                  ? prevState.series[0]?.data
                      .slice(prevState.series[0].data.length - 15)
                      .concat(parsedData)
                  : prevState.series[0]?.data.concat(parsedData),
            },
          ],
        }));
      };

      setListening(true);
    }
  }, [listening, state, setState]);

  return (
    <>
      <div
        className="flex
      items-center
        justify-evenly"
      >
        <div className="flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
          <div className="flex w-full flex-wrap gap-3 sm:gap-5">
            <div className="flex min-w-47.5">
              <span className="mr-2 mt-1 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-primary dark:border-white">
                <span className="block h-2.5 w-full max-w-2.5 rounded-full bg-primary dark:bg-white"></span>
              </span>
              <div className="w-full">
                <p className="font-semibold text-primary dark:text-white">
                  Alert One
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-end">
          <div className="w-full">
            <p className="font-semibold text-primary dark:text-white">
              {currentDate}
            </p>
          </div>
        </div>
      </div>

      <div
        className="h-full w-full"
        onMouseDown={(e) => {
          e.stopPropagation();
        }}
      >
        <ReactApexChart
          options={options}
          series={state.series}
          colors="#ffee00"
          type="area"
          height={"100%"}
          width={"100%"}
        />
      </div>
    </>
  );
};

export default QuantaraAlertOne;
