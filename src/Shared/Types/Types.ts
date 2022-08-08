export interface State {
    toggleDrawer: boolean;
    isLoading: boolean;
    sensorList: SensorListType;
    sensorStats: SensorStatsType;
}

export type SensorStatsType = {
    sensorIds: string[];
    statsList: StatsListType[];
};

export type StatsListType = {
    date: string;
    [sensorId: string]: string;
};

export type SensorRowType = {
    results: {
        stats: { time: string; temp: number }[];
        device_id: string;
    }[]
};

export type SensorListType = {
    results?: SensorType[];
    paging?: PagingType;
};

export type SensorType = {
    device_id: string;
    last_online: string;
    last_temp: number;
    customer: string;
    location: string;
};

export type PagingType = {
    count: number;
    currentPage: number;
    nextPage: number;
    pageSize: number;
    pages: number[];
    previousPage: number;
};
