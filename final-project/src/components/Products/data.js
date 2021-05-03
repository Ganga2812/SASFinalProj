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
import fire from '../../fire.js';



import park1 from '../../images/p1.jpeg';

function getData() {
  fire.firestore().collection("Vehicles")
    .get()
    .then(querySnapshot => {
    const data = querySnapshot.docs.map(doc => doc.data());
    alert(data.toString())
    return data;
  });
}

const info = [] = getData();
const a = info.vehicle1.name;

export const productData = [
  {
    img: product1,
    alt: 'Car',
    name: {a},
    category: 'SUV',
    price: '$19.99',
    button: 'Add to Cart'
  },
  {
    img: product2,
    alt: 'Car',
    name: 'Nissan Rogue',
    category: 'SUV',
    price: '$16.99',
    button: 'Add to Cart'
  },
  {
    img: product3,
    alt: 'Car',
    name: 'Toyota RAV4',
    category: 'SUV',
    price: '$14.99',
    button: 'Add to Cart'
  },
  {
    img: product4,
    alt: 'Car',
    name: 'Toyota Prius',
    category: 'Compact',
    price: '$14.99',
    button: 'Add to Cart'
  },
  {
    img: product5,
    alt: 'Car',
    name: 'Chevrolet Cruze',
    category: 'Compact',
    price: '$19.99',
    button: 'Add to Cart'
  },
  {
    img: product6,
    alt: 'Car',
    name: 'Kia Soul',
    category: 'Compact',
    price: '$16.99',
    button: 'Add to Cart'
  },
  {
    img: product7,
    alt: 'Car',
    name: 'Honda Accord',
    category: 'Midsize',
    price: '$14.99',
    button: 'Add to Cart'
  },
  {
    img: product8,
    alt: 'Car',
    name: 'Toyota Camry',
    category: 'Midsize',
    price: '$14.99',
    button: 'Add to Cart'
  },
  {
    img: product9,
    alt: 'Car',
    name: 'Ford Fusion',
    category: 'Midsize',
    price: '$19.99',
    button: 'Add to Cart'
  },
  {
    img: product12,
    alt: 'Car',
    name: 'Mercedes-Benz GLE',
    category: 'Luxury',
    price: '$16.99',
    button: 'Add to Cart'
  },
  {
    img: product11,
    alt: 'Car',
    name: 'Audi A8',
    category: 'Luxury',
    price: '$14.99',
    button: 'Add to Cart'
  },
  {
    img: product10,
    alt: 'Car',
    name: 'BMW 5 Series',
    category: 'Luxury',
    price: '$14.99',
    button: 'Add to Cart'
  }
];

export const productDataTwo = [
  {
    img: park1,
    alt: 'Parking',
    name: '1st Class Parking',
    category: 'Parking',
    desc:
      'Our valet services will take care of your parking. Park in the Luxury Heights exclusive parking garage.',
    price: '$12.99',
    button: 'Add to Cart and Checkout'
  }
];
