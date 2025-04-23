<template>
    <div class="grid grid-flow-row grid-cols-1 justify-items-center gap-x-4 gap-y-4 md:grid-cols-2 lg:grid-cols-3">
            <AreaChart 
                :height="300"
                :width="300"
                :data="AreaChartData.data" 
                :xaxis_data="AreaChartData.xaxis_data" 
            />
            <LineChart 
                :height="300"
                :width="300"
                :cpc_data="LineChartData.cpc_data" 
                :click_data="LineChartData.click_data" 
                :xaxis_data="LineChartData.xaxis_data" 
            />
            <BarChart 
                :height="300"
                :width="300"
                :cpc_data="BarChartData.cpc_data" 
                :click_data="BarChartData.click_data" 
                :xaxis_data="BarChartData.xaxis_data" 
            />
    </div>
</template>

<script>
import AreaChart from './Chart/AreaChart.vue'
import BarChart from './Chart/BarChart.vue'
import LineChart from './Chart/LineChart.vue'

export default {
    components: {
        AreaChart, LineChart, BarChart
    },
    data() {
        return{
            AreaChartData: {
                data: [6500, 6418, 6456, 6526, 6356, 6456],
                xaxis_data: [
                    '01 Feb', '02 Feb', '03 Feb',
                    '04 Feb', '05 Feb', '06 Feb', '07 Feb'
                ],
            },
            BarChartData: {
                data: [6500, 6418, 6456, 6526, 6356, 6456],
                xaxis_data: [
                    '01 Feb', '02 Feb', '03 Feb',
                    '04 Feb', '05 Feb', '06 Feb', '07 Feb'
                ],
            },
            LineChartData: {
                cpc_data: [6456, 6356, 6526, 6332, 6418, 6500],
                click_data: [6500, 6418, 6456, 6526, 6356, 6456],
                xaxis_data: [
                    '01 Feb', '02 Feb', '03 Feb',
                    '04 Feb', '05 Feb', '06 Feb', '07 Feb'
                ],
            },
        };
    }
}
</script>