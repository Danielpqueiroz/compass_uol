const { faker } = require('./lib/node_modules/@faker-js/faker/dist/cjs/locale/pt_BR.js');
const fs =  require('fs');

const quantidade = process.argv[2] || 1; 

const movies = [];

for(let i = 0; i < quantidade; i++) {
  const movie = {
    
    title: faker.lorem.words(3), 
    description: faker.lorem.paragraph(), 
    launchdate: faker.date.soon({ days: 60 }), //faker.date.past(20, new Date()), 
    showtimes: [faker.date.soon({ days: 60 }) + faker.date.soon({ days: 60 }) ], 
    
  }
  movies.push(movie)
}

const data = {
  movies: movies
}

fs.writeFileSync( 'movies.json', JSON.stringify(data, null, 2), error => {
  if(error) {
    console.error(error)
  }
})



// export const fakerUserData = () => ({
 
//   nome: faker.name.firstName() + ' ' + faker.name.lastName(), // Gera nome completo
//   email: new Date().getTime() + faker.internet.email(),
//   password: faker.internet.password(), // Gera senha aleatória
//   administrador: 'true',
//   //administrador: faker.random.boolean().toString(), // Gera booleano aleatório convertido para string
// });