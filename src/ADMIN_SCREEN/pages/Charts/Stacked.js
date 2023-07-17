import React from "react";

import { ChartsHeader, Stacked as StackedChart } from "../../components";

const Stacked = () => (
  <div className="my-3 absolute top-12 left-96 w-9/12">
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartsHeader category="Stacked" title="Revenue Breakdown" />
      <div className="w-full">
        <StackedChart />
      </div>
    </div>
  </div>
);

export default Stacked;
