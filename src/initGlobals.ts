import moment from 'moment-timezone';
import * as axios from 'axios';

const initGlobals = () => {
    moment.tz.setDefault('Etc/UTC');

    axios.default.interceptors.response.use(
        (response) => {
            return response;
        },
        (error) => {
            if (error.response && error.response.status >= 400) {
                if (error.response.data && error.response.data.message) {
                    return Promise.reject(error.response.data.message);
                }
            }
            return Promise.reject(error);
        });
};

export default initGlobals;