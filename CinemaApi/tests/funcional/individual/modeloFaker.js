import {  sleep } from 'k6';
import { SharedArray } from 'k6/data';
import { BaseChecks, BaseRest, ENDPOINTS, testConfig } from '../../../support/base/baseTest.js'
import { randomItem } from 'https://jslib.k6.io/k6-utils/1.2.0/index.js';


export const options = testConfig.options.smoke;

const base_uri = testConfig.environment.hml.url;
const baseRest = new BaseRest(base_uri);
const baseChecks = new BaseChecks();

const data = new SharedArray('Movies', function () {
    const jsonData = JSON.parse(open('../../../data/dynamic/movies.json'));
    console.log(jsonData.movies)
    return jsonData.movies;
});

// const payload = {             
//     nome: 'Fulano da Silva',
//     email: 'fulano1222332443@qa.com',
//     password: 'teste',
//     administrador: 'true'
// }


export function setup() {
    let responseData = [];

    data.forEach(movie => {
        console.log('Criando filme', movie);
        const res = baseRest.post(ENDPOINTS.MOVIE_ENDPOINT, movie)
        console.log('Criando filme', res.json());
        baseChecks.checkStatusCode(res, 201)
        
        responseData.push(res.json())
    })

    return { responseData }
}


export default () => {
    // let movie = randomItem(data);
  
    // const payload = {
    //     title: movie.title,
    //     description: movie.description
    // };
    // console.log('Enviando requisição POST para filme', payload);

    // const urlRes = baseRest.post(ENDPOINTS.MOVIE_ENDPOINT, payload);
    // console.log(urlRes.body);
    // baseChecks.checkStatusCode(urlRes, 201); // Mudado para 201, já que estamos criando um recurso
    // baseChecks.checkResponseSize(urlRes, 5000);
    // baseChecks.checkResponseTime(urlRes, 2000);
    let responseData = [];

    data.forEach(movie => {
        console.log('Criando filme', movie);
        const res = baseRest.post(ENDPOINTS.MOVIE_ENDPOINT, movie)
        console.log('Criando filme', res.json());
        baseChecks.checkStatusCode(res, 201)
        
        responseData.push(res.json())
    })

    sleep(1);
};

export function teardown(responseData) {
    console.log(responseData.responseData)

    const ids = responseData.responseData.map(item => item._id)

    ids.forEach(id => {
        console.log(`Teardown: deletando o filme com ID ${id}`);
        const res = baseRest.del(ENDPOINTS.MOVIE_ENDPOINT + `/${id}`);
        baseChecks.checkStatusCode(res, 200);
        
    })

}
    // const userId = responseData.responseData._id
    // const res = baseRest.del(ENDPOINTS.USER_ENDPOINT + '/${userId}')

    // baseChecks.checkStatusCode(res, 200)
    
    // console.log( 'Teardown deleatndo o usuário com ID ${userId}')
