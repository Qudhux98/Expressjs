const express = require('express');
const app = express();

app.use(express.json());

function cas(cars) {
  console.log(JSON.stringify(cars));
  return JSON.stringify(cars);
}
function getSpecificIndex(url) {
  const urlSplit = url.split('/');
  const specificIndex = urlSplit[2];
  return specificIndex;
}
function getSpecificCar(cars, index) {
  const specificCar = cars[index];
  return specificCar;
}

const cars = [
  { name: 'Lexus', year: '2019', model: 'GLX' },
  { name: 'Picanto', year: '1998', model: 'RL5' },
  { name: 'Benz', year: '2023', model: 'ML' },
  { name: 'Honda', year: '2001', model: 'FEDX' },
  { name: 'Ferarri', year: '2009', model: 'Muve' },
];
app.get('/cars', (req, res) => {
  res.send(JSON.stringify(cars));
  cas(cars);
});

app.get('/cars/:id', (req, res) => {
  const url = req.url;
  const specificIndex = getSpecificIndex(url);
  if (specificIndex > cars.length - 1) {
    res.send('This request is not available yet');
  } else {
    const specificCar = getSpecificCar(cars, specificIndex);
    console.log(specificCar);
    res.send(
      `The car you requested is as follows ${JSON.stringify(specificCar)}`
    );
  }
});
app.get('/cars/:id/get-model', (req, res) => {
  const url = req.url;
  const specificIndex = getSpecificIndex(url);
  if (specificIndex > cars.length - 1) {
    res.send('This request is not available yet');
  } else {
    const specificCar = getSpecificCar(cars, specificIndex);
    const carModel = specificCar.model;
    res.send(`The model of the car you requested is as follows ${carModel}`);
  }
});

app.listen(2001, () => {
  console.log('I am running on port 2001');
});
