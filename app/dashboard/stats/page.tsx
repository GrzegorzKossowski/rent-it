import React from "react";
import { ChartBarInteractive } from "@/components/charts/chart-bar-interactive";
import { ChartBarDefault } from "@/components/charts/chart-bar-default";
import { ChartBarNegative } from "@/components/charts/chart-bar-negative";
import { ChartBarMixed } from "@/components/charts/chart-bar-mixed";
import { ChartLineDefault } from "@/components/charts/chart-line-default";
import { ChartLineLabel } from "@/components/charts/chart-line-label";
import { ChartPieLabel } from "@/components/charts/chart-pie-label";
import { ChartRadarDefault } from "@/components/charts/chart-radar-default";
import { ChartRadialText } from "@/components/charts/chart-radial-text";
import { ChartLineInteractive } from "@/components/charts/chart-line-interactive";

export default function Page() {
  return (
    <>
      <div className="p-4">
        <ChartLineInteractive />
      </div>
      <div className="p-4">
        <ChartBarInteractive />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 p-4">
        <ChartBarDefault />
        <ChartRadarDefault />
        <ChartLineDefault />
        <ChartRadialText />
        <ChartBarNegative />
        <ChartLineLabel />
        <ChartBarMixed />
        <ChartPieLabel />
        <ChartRadarDefault />
      </div>
    </>
  );
}
