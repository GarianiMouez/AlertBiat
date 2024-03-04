"use client";
import { useState, useEffect } from "react";
import { Responsive, WidthProvider, Layout } from "react-grid-layout";
import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";
import QuantaraAlertOne from "./chartOne";
import QuantaraAlertTwo from "./chartTwo";
import QuantaraAlertThree from "./chartThree";
import QuantaraAlertFour from "./chartFour";
import AlertLineChart from "./lineChartQuantara";
const { quantaraAlert } = require("../../data/quantara");

const ResponsiveReactGridLayout = WidthProvider(Responsive);

export default function QuantaraLayout() {
  const [layout, setLayout] = useState<Layout[]>([
    { i: "a", x: 0, y: 0, w: 5, h: 13 },
  ]);
  const dashElement = [
    { a: <AlertLineChart name="alert2" param="alert2" /> },
    { a: <QuantaraAlertTwo /> },
    { a: <QuantaraAlertThree /> },
    { a: <QuantaraAlertFour /> },
  ];

  return (
    <div>
      <ResponsiveReactGridLayout
        rowHeight={30}
        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
        measureBeforeMount={false}
        isDroppable={true}
        droppingItem={{ i: "xx", h: 50, w: 250 }}
      >
        {layout.map((itm, i) => (
          <div
            key={itm.i}
            data-grid={itm}
            className=" rounded-md border border-stroke bg-white  px-5 pb-5 pt-7.5 shadow-default drop-shadow-lg dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-8"
          >
            <AlertLineChart
              name={quantaraAlert[i]?.alert || "Alert"}
              param="alert1"
            />
            {/* {dashElement[i].a} */}
          </div>
        ))}
      </ResponsiveReactGridLayout>
    </div>
  );
}
