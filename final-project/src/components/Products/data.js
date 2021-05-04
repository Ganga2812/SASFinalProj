import product1 from '../../images/suv3.png';
import product2 from '../../images/suv1.png';
import product3 from '../../images/suv2.png';
import product4 from '../../images/compact1.png';
import product5 from '../../images/compact2.png';
import product6 from '../../images/compact3.png';
import product7 from '../../images/mid1.png';
import product8 from '../../images/mid2.png';
import product9 from '../../images/mid3.png';
import product10 from '../../images/lux2.png';
import product11 from '../../images/lux3.png';
import product12 from '../../images/feat2.jpg';
import park2 from '../../images/vippark.jpg';
import fire from '../../fire.js';



import park1 from '../../images/p1.jpeg';

/* function getData() {
  fire.firestore().collection("Vehicles")
    .get()
    .then(querySnapshot => {
    const data = querySnapshot.docs.map(doc => doc.data());
    alert(data.toString())
    return data;
  });
}

const info = [] = getData();
const a = info[0].name; */

/*const db = fire.firestore();
db.collection('Vehicles').get().then((snapshot) => {
  snapshot.docs.forEach(doc => {
    console.log(doc.data().name)
  })
}); */

/* const db = fire.firestore();

function getData(num, val){
  var value1 = "none";
  db.collection('Vehicles').get().then((snapshot) => {
    value1 = snapshot.docs[num].data()[val];
    //console.log(snapshot.docs[num].data()[val]);
  });
  return value1;
}

console.log(getData(0,'name')); */
export const totalCost = 0;

export const productData = [
  {
    img: product1,
    alt: 'Car',
    name: "Cheverolet Equinox",
    category: 'SUV',
    price: '$16.99',
    cost: 16.99,
    button: 'Add to Cart'
  },
  {
    img: product2,
    alt: 'Car',
    name: 'Nissan Rogue',
    category: 'SUV',
    price: '$16.99',
    cost: 16.99,
    button: 'Add to Cart'
  },
  {
    img: product3,
    alt: 'Car',
    name: 'Toyota RAV4',
    category: 'SUV',
    price: '$16.99',
    cost: 16.99,
    button: 'Add to Cart'
  },
  {
    img: product4,
    alt: 'Car',
    name: 'Toyota Prius',
    category: 'Compact',
    price: '$11.99',
    cost: 11.99,
    button: 'Add to Cart'
  },
  {
    img: product5,
    alt: 'Car',
    name: 'Chevrolet Cruze',
    category: 'Compact',
    price: '$11.99',
    cost: 11.99,
    button: 'Add to Cart'
  },
  {
    img: product6,
    alt: 'Car',
    name: 'Kia Soul',
    category: 'Compact',
    price: '$11.99',
    cost: 11.99,
    button: 'Add to Cart'
  },
  {
    img: product7,
    alt: 'Car',
    name: 'Honda Accord',
    category: 'Midsize',
    price: '$14.99',
    cost: 14.99,
    button: 'Add to Cart'
  },
  {
    img: product8,
    alt: 'Car',
    name: 'Toyota Camry',
    category: 'Midsize',
    price: '$14.99',
    cost: 14.99,
    button: 'Add to Cart'
  },
  {
    img: product9,
    alt: 'Car',
    name: 'Ford Fusion',
    category: 'Midsize',
    price: '$14.99',
    cost: 14.99,
    button: 'Add to Cart'
  },
  {
    img: product12,
    alt: 'Car',
    name: 'Mercedes-Benz GLE',
    category: 'Luxury',
    price: '$29.99',
    cost: 29.99,
    button: 'Add to Cart'
  },
  {
    img: product11,
    alt: 'Car',
    name: 'Audi A8',
    category: 'Luxury',
    price: '$29.99',
    cost: 29.99,
    button: 'Add to Cart'
  },
  {
    img: product10,
    alt: 'Car',
    name: 'BMW 5 Series',
    category: 'Luxury',
    price: '$29.99',
    cost: 29.99,
    button: 'Add to Cart'
  }
];
const rem1 = Math.floor(Math.random() * 10) + 1;
const rem = Math.floor(Math.random() * 10) + 1;
function parkingCost(num, rem_){
  let today = new Date();
  let hr = today.getHours();
  console.log(hr);
  num += (hr + (10 - rem_));
  return num;
}
const price_ = parkingCost(3.00,rem);
const price_1 = parkingCost(30.00,rem1);
console.log(price_);
export const productDataTwo = [
  {
    img: park1,
    alt: 'Parking',
    name: rem + '/10 spots remaining',
    category: 'Parking',
    desc:
      'Get access to one of the best parking garages. Floors 1-4 are available.',
    price: '$'+ price_ + ' per hour',
    cost: price_,
    button: 'Add to Cart'
  },

  {
    img: park2,
    alt: 'Parking',
    name: rem1 + '/10 spots remaining',
    category: 'VIP Parking',
    desc:
      'Our valet team will take care of your parking with best in class service. Park in the Luxury Heights exclusive parking garage.',
    price: '$'+ price_1 + ' per hour',
    cost: price_1,
    button: 'Add to Cart'
  }
];
