// API
export interface User {
  id: string;
  email: string;
  organization: string;
  name: string;
  email_verified: boolean;
}

export interface Analytics {
  date?: {
    year: number;
    month: number | null;
    week: number | null;
    day: number | null;
  };
  tile: number;
  station: number;
  route: number;
  car: number;
  [key: string]: number | object | undefined | string;
}

export interface AnalyticsForAnUser extends Analytics {
  userId: string;
}

export interface AnalyticsForAClient extends AnalyticsForAnUser {
  clientId: string;
}

export interface Stats extends Analytics {
  tileDelta: number;
  stationDelta: number;
  routeDelta: number;
  carDelta: number;
}

export interface StatsForAnUser extends Stats {
  userId: string;
}

export interface Client {
  car?: null | string;
  id: string;
  name: string;
}

export interface CarBrandChild {
  value: boolean;
  label: string;
  children?: [];
}

export interface CarBrand {
  value: boolean;
  label: string;
  children?: CarBrandChild[];
}

export interface Car {
  id: string;
}

export interface RouteAnalytic {
  year: number;
  month: number;
  day: number;
  hour: number;
  totalGeneratedRoutes: number;
  week: number;
  date: Date;
}
