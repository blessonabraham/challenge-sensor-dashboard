import {
    SensorRowType,
    SensorWeeklyAvgRowType,
    SensorWeeklyRowType,
    StatsListType,
} from '../Types/Types';

export const tranformStatsForChart = (sensorRowData: SensorRowType) => {
    const sensorIds: string[] = [];
    const statsList: StatsListType[] = [];

    sensorRowData?.results?.map((result) => {
        const deviceId = result.device_id || 'Unknown';
        sensorIds.push(deviceId);
        result.stats.sort((a, b) => Number(a.time) - Number(b.time));
        result.stats.map((statsRowData: { time: string; temp: number }) => {
            const date = new Date(Number(statsRowData?.time));
            const dateFormated =
                date.getMonth() +
                1 +
                '/' +
                date.getFullYear().toString().substr(2, 2);
            const index = statsList.findIndex(
                (data) => data?.date === dateFormated,
            );
            if (index >= 0) {
                statsList[index] = {
                    ...statsList[index],
                    [deviceId]: statsRowData?.temp,
                };
            } else {
                statsList.push({
                    date: dateFormated,
                    [deviceId]: statsRowData?.temp,
                });
            }
        });
    });

    return { sensorIds, statsList };
};

export const tranformWeeklyStatsForChart = (
    sensorRowData: SensorWeeklyRowType,
) => {
    const statsList: StatsListType[] = [];
    sensorRowData.results.sort((a, b) => Number(a.time) - Number(b.time));
    sensorRowData?.results?.map((result) => {
        const date = new Date(Number(result?.time));
        const dateFormated =
            date.getDate() +
            1 +
            '/' +
            (date.getMonth() + 1) +
            '/' +
            date.getFullYear().toString().substr(2, 2);
        const index = statsList.findIndex(
            (data) => data?.date === dateFormated,
        );
        if (index >= 0) {
            statsList[index] = {
                ...statsList[index],
                sensor: result?.temp,
            };
        } else {
            statsList.push({
                date: dateFormated,
                sensor: result?.temp,
            });
        }
    });
    return statsList;
};


export const tranformWeeklyAvgStatsForChart = (sensorRowData: SensorWeeklyAvgRowType) => {
    const sensorIds: string[] = [];
    const statsList: StatsListType[] = [];

    sensorRowData?.results?.map((result) => {
        const deviceId = result.sensor_id || 'Unknown';
        sensorIds.push(deviceId);
        result.stats.sort((a, b) => Number(a.time) - Number(b.time));
        result.stats.map((statsRowData: { time: string; temp: number }) => {
            const date = new Date(Number(statsRowData?.time));
            const dateFormated =
                date.getMonth() +
                1 +
                '/' +
                date.getFullYear().toString().substr(2, 2);
            const index = statsList.findIndex(
                (data) => data?.date === dateFormated,
            );
            if (index >= 0) {
                statsList[index] = {
                    ...statsList[index],
                    [deviceId]: statsRowData?.temp,
                };
            } else {
                statsList.push({
                    date: dateFormated,
                    [deviceId]: statsRowData?.temp,
                });
            }
        });
    });

    return { sensorIds, statsList };
};