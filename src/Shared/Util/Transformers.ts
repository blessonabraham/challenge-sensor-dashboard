import { SensorRowType, StatsListType } from "../Types/Types";

export const tranformStatsForChart = (sensorRowData: SensorRowType) => {
    const sensorIds: string[] = [];
    const statsList: StatsListType[] = [];

    sensorRowData?.results?.map((result) => {
        const deviceId = result.device_id || 'Unknown';
        sensorIds.push(deviceId);

        result.stats.map((statsRowData: any) => {
            const date = new Date(Number(statsRowData?.time));
            const month =
                date.getMonth() +
                1 +
                '/' +
                date.getFullYear().toString().substr(2, 2);
            const index = statsList.findIndex((data) => data?.date === month);
            if (index >= 0) {
                statsList[index] = {
                    ...statsList[index],
                    [deviceId]: statsRowData?.temp,
                };
            } else {
                statsList.push({
                    date: month,
                    [deviceId]: statsRowData?.temp,
                });
            }
        });
    });

    statsList.sort();

    return { sensorIds, statsList };
};
