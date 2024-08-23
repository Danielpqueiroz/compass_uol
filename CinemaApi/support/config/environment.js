export const testConfig = {
    environment: {
        hml: {
            url: 'http://localhost:3000'
        },

        dev: {
            url: "http://localhost:3333"
        }
    },
    options: {

        smoke: {
            vus: 1,
            duration: '3s',
            thresholds: {
                http_req_duration: ['p(95)<2000'],
                http_req_failed: ['rate<0.01'],
                checks: ['rate>0.95']
                
            },
            // stages: [
            //     {duration: '1m', target: 150},
            //     {duration: '2m', target: 280},
            //     {duration: '1m', target: 0},
                
            // ]
        },
        
        carga: {
            setupTimeout: '4000s',
            thresholds: {
                http_req_duration: ['p(95)<2000'],
                http_req_failed: ['rate<0.01'],
                checks: ['rate>0.95']
                
            },
            stages: [
                {duration: '1m', target: 50},
                {duration: '2m', target: 200},
                {duration: '1m', target: 0},
                
            ]
        },

        concorrencia: {
            setupTimeout: '3000s',
            teardownTimeout: '4000s',
            thresholds: {
                http_req_duration: ['p(95)<2000'],
                http_req_failed: ['rate<0.01'],
                checks: ['rate>0.95']
            },
            stages: [
                {duration: '40s', target: 50},
                {duration: '1m', target: 300},
                
            ]
        },

        escalabilidade: {
            setupTimeout: '4000s',
            thresholds: {
                http_req_duration: ['p(95)<2000'],
                http_req_failed: ['rate<0.01'],
                checks: ['rate>0.95']
            },
            stages: [
                {duration: '1m', target: 50},
                {duration: '3m', target: 500},
                {duration: '1m', target: 0},
            ]
        },

        estresse: {
            setupTimeout: '4000s',
            teardownTimeout: '4000s',
            thresholds: {
                http_req_duration: ['p(95)<2000'],
                http_req_failed: ['rate<0.01'],
                checks: ['rate>0.95']
            },
            stages: [
                {duration: '1m', target: 50},
                {duration: '2m', target: 300},
                {duration: '1m', target: 0},
            ]
        },

        pico: {
            setupTimeout: '4000s',
            teardownTimeout: '4000s',
            thresholds: {
                http_req_duration: ['p(95)<2000'],
                http_req_failed: ['rate<0.01'],
                checks: ['rate>0.95']
            },
            stages: [
                {duration: '5s', target: 50},
                {duration: '30s', target: 500},
                {duration: '5s', target: 0},
                
            ]
        },

        capacidade: {
            
            thresholds: {
                http_req_duration: ['p(95)<2000'],
                http_req_failed: ['rate<0.01'],
                checks: ['rate>0.95']
            },
            stages: [
                {duration: '15s', target: 50},
                {duration: '3m', target: 500},
                {duration: '15s', target: 0},
            ]
        },
        
    }
}