import { SensorRowType, SensorWeeklyRowType, StatsListType } from "../Types/Types";

export const tranformStatsForChart = (sensorRowData: SensorRowType) => {
    const sensorIds: string[] = [];
    const statsList: StatsListType[] = [];

    sensorRowData?.results?.map((result) => {
        const deviceId = result.device_id || 'Unknown';
        sensorIds.push(deviceId);
        result.stats.sort((a, b) => Number(a.time) - Number(b.time));
        result.stats.map((statsRowData: { time: string; temp: number }) => {
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


export const tranformWeeklyStatsForChart = (sensorRowData: SensorWeeklyRowType) => {
    const sensorIds: string[] = [];
    const statsList: StatsListType[] = [];
    sensorRowData.results.sort((a, b) => Number(a.time) - Number(b.time));
    sensorRowData?.results?.map((result) => {

        const date = new Date(Number(result?.time));

        console.log(date)
        // const month =
        //     date.getMonth() +
        //     1 +
        //     '/' +
        //     date.getFullYear().toString().substr(2, 2);
        // const index = statsList.findIndex((data) => data?.date === month);
        // if (index >= 0) {
        //     statsList[index] = {
        //         ...statsList[index],
        //         [deviceId]: result?.temp,
        //     };
        // } else {
        //     statsList.push({
        //         date: month,
        //         [deviceId]: result?.temp,
        //     });
        // }


        // const deviceId = result.device_id || 'Unknown';
        // sensorIds.push(deviceId);

        // result.stats.map((statsRowData: any) => {
           
        // });
    });

    statsList.sort();

    return statsList;
};
