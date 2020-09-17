// CHART
export interface ChartOptions {
  enum: string;
  format: string | Function;
  tooltipFormat: string | Function;
  startDate: Date;
  endDate: Date;
}

export interface ChartRect {
  x: number;
  w: number;
  y: number;
  h: number;
}

export interface TypeVar {
  [key: string]: {
    color: string;
    margin: number;
    width: number;
    labelPosition: string;
    axis: { x: number; y: number };
  };
}

export interface ChartSet {
  color: string;
  hoverColor: string;
  data: number[];
}

export interface ChartData {
  labels: string[];
  tooltipText: string[];
  sets: ChartSet[];
}

export interface TooltipText {
  color: string;
  fontSize: number;
  font: string;
  text: string;
}
