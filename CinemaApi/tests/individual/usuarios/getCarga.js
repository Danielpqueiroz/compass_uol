import { sleep } from 'k6';
import { BaseChecks, BaseRest, ENDPOINTS, testConfig, fakerUserData } from '../../../support/base/baseTest.js';
import { htmlReport } from 'https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js';

const base_uri = testConfig.environment.hml.url;
const baseRest = new BaseRest(base_uri);
const baseChecks = new BaseChecks();

export const options = testConfig.options.carga;

export function handleSummary(data) {
    return {
        "summaryGet.html": htmlReport(data),
    };
}

export function setup() {
    const payload = fakerUserData();
    const res = baseRest.post(ENDPOINTS.USER_ENDPOINT, payload);
    baseChecks.checkStatusCode(res, 201);
    const userId =  res.json()._id ;
    console.log(res.json()._id)

    return { userId };
}

export default () => {
    
    const updateRes = baseRest.get(ENDPOINTS.USER_ENDPOINT);
        baseChecks.checkStatusCode(updateRes, 200);
        baseChecks.checkResponseNotEmpty(updateRes);
        baseChecks.checkResponseSize(updateRes, 5000); 
        baseChecks.checkResponseTime(updateRes, 2000);

};

export function teardown(data) {

    const res = baseRest.del(ENDPOINTS.USER_ENDPOINT + `/${data.userId}`);
    baseChecks.checkStatusCode(res, 200);
    console.log(`Teardown deleting user with ID ${data.userId}`);
}