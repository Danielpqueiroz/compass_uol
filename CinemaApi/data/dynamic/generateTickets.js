const { faker } = require('./lib/node_modules/@faker-js/faker/dist/cjs/locale/pt_BR');
const fs =  require('fs');

const quantidade = process.argv[2] || 1; 

const tickets = [];

for(let i = 0; i < quantidade; i++) {
  const ticket = {
    movieId: faker.datatype.uuid(), // ID do filme associado ao ticket, gerado aleatoriamente como UUID
    userId: faker.datatype.uuid(), // ID do usuário que está comprando o ticket, gerado aleatoriamente como UUID
    seatNumber: faker.datatype.number({ min: 1, max: 100 }), // Número do assento, entre 1 e 100
    price: faker.commerce.price(10, 60, 2, '$'), // Preço do ticket, entre 10 e 60, formatado como preço em dólares
    showtime: faker.date.future(), // Data e hora da apresentação do filme, gerada no futuro
  };
  tickets.push(ticket)
}

const data = {
  tickets: tickets
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