import axios from "axios";

let barChartProvider = {
    data: () => ({
        barChartData: null,
        barChartState: '',
        barChartError: null
    }),
    methods: {
        async fetchBarChartData() {
            try {
                var urlEndpoint = `http://localhost:3000/chartData`;
                await axios.get(urlEndpoint).then((response) => {
                    this.barChartData = response.data;
                    this.barChartState = 'OK';
                }).catch((error) => {
                    this.barChartError = error.message;
                })
            } catch (e) {
                this.barChartError = 'error';
            }
        },
        getBarChartData() {
            return this.barChartData;
        },
        getBarChartState() {
            return this.barChartState;
        },
        getBarChartError() {
            return this.barChartError;
        }
    }
};
export default barChartProvider;