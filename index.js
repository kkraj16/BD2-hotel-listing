const express = require('express');
const { resolve } = require('path');
let cors = require('cors');

// server variable data
let hotels = [
  {
    id: 1,
    name: 'Romantic Getaway',
    category: 'Resort',
    rating: 2.2,
    reviews: 4572,
    amenity: 'Spa',
    price: 10464,
    country: 'South Africa',
  },
  {
    id: 2,
    name: 'Wellness Retreat',
    category: 'Family',
    rating: 2.8,
    reviews: 2114,
    amenity: 'Pool',
    price: 13243,
    country: 'Australia',
  },
  {
    id: 3,
    name: 'Romantic Getaway',
    category: 'Luxury',
    rating: 3.1,
    reviews: 4359,
    amenity: 'Restaurant',
    price: 3299,
    country: 'Germany',
  },
  {
    id: 4,
    name: 'Luxury Suites',
    category: 'Family',
    rating: 4.9,
    reviews: 3651,
    amenity: 'Bar',
    price: 16359,
    country: 'United Kingdom',
  },
  {
    id: 5,
    name: 'Luxury Suites',
    category: 'Budget',
    rating: 4.6,
    reviews: 688,
    amenity: 'Gym',
    price: 15570,
    country: 'France',
  },
  {
    id: 6,
    name: 'Cultural Heritage Hotel',
    category: 'Boutique',
    rating: 2.0,
    reviews: 219,
    amenity: 'Pet Friendly',
    price: 2321,
    country: 'USA',
  },
  {
    id: 7,
    name: 'Business Hotel',
    category: 'Mid-Range',
    rating: 3.7,
    reviews: 1040,
    amenity: 'Free WiFi',
    price: 4523,
    country: 'India',
  },
  {
    id: 8,
    name: 'Historic Plaza Hotel',
    category: 'Mid-Range',
    rating: 3.5,
    reviews: 300,
    amenity: 'Parking',
    price: 8543,
    country: 'Australia',
  },
  {
    id: 9,
    name: 'Adventure Resort',
    category: 'Boutique',
    rating: 4.2,
    reviews: 1222,
    amenity: 'Gym',
    price: 11894,
    country: 'South Africa',
  },
  {
    id: 10,
    name: 'Mountain Retreat',
    category: 'Resort',
    rating: 4.8,
    reviews: 4015,
    amenity: 'Spa',
    price: 17560,
    country: 'India',
  },
  {
    id: 11,
    name: 'Eco Friendly Lodge',
    category: 'Family',
    rating: 2.4,
    reviews: 528,
    amenity: 'Restaurant',
    price: 3124,
    country: 'Germany',
  },
  {
    id: 12,
    name: 'Urban Boutique Hotel',
    category: 'Mid-Range',
    rating: 3.9,
    reviews: 1401,
    amenity: 'Free WiFi',
    price: 9245,
    country: 'France',
  },
  {
    id: 13,
    name: 'Beachfront Hotel',
    category: 'Luxury',
    rating: 4.5,
    reviews: 489,
    amenity: 'Pool',
    price: 14567,
    country: 'USA',
  },
  {
    id: 14,
    name: 'Ocean View Resort',
    category: 'Budget',
    rating: 3.3,
    reviews: 783,
    amenity: 'Spa',
    price: 7432,
    country: 'United Kingdom',
  },
  {
    id: 15,
    name: 'City Central Hotel',
    category: 'Boutique',
    rating: 4.1,
    reviews: 2133,
    amenity: 'Bar',
    price: 9823,
    country: 'Australia',
  },
  {
    id: 16,
    name: 'Casino Resort',
    category: 'Luxury',
    rating: 4.9,
    reviews: 5000,
    amenity: 'Bar',
    price: 18900,
    country: 'South Africa',
  },
  {
    id: 17,
    name: 'Golf Resort',
    category: 'Mid-Range',
    rating: 4.7,
    reviews: 789,
    amenity: 'Gym',
    price: 16340,
    country: 'France',
  },
  {
    id: 18,
    name: 'Family Fun Hotel',
    category: 'Family',
    rating: 3.2,
    reviews: 1322,
    amenity: 'Pool',
    price: 7500,
    country: 'Germany',
  },
  {
    id: 19,
    name: 'Spa and Relaxation Hotel',
    category: 'Luxury',
    rating: 4.4,
    reviews: 2314,
    amenity: 'Spa',
    price: 14900,
    country: 'United Kingdom',
  },
  {
    id: 20,
    name: 'Country House Hotel',
    category: 'Budget',
    rating: 3.6,
    reviews: 1876,
    amenity: 'Parking',
    price: 6234,
    country: 'Australia',
  },
];

const app = express();
const port = 3010;
app.use(cors());

// Tesitng
app.get('/', (req, res) => {
  res.send(`Welcome to BD2 Assignment`);
});

// Endpoint 7: Send all hotels
app.get('/hotels', (req, res) => {
  res.json({ hotels: hotels });
});

function sortArray(order) {}

// Endpoint 1: Get the hotels sorted by pricing
app.get('/hotels/sort/pricing', (req, res) => {
  // retriving params
  let order = req.query.pricing;
  // create copy of array
  let result = hotels.slice();
  // sort array based on option
  if (order == 'low-to-high') {
    result.sort((h1, h2) => h1.price - h2.price);
  } else if (order == 'high-to-low') {
    result.sort((h1, h2) => h2.price - h1.price);
  }
  // return result
  res.json({ hotels: result });
});

// create sortingMethod
function sortHotels(hotels, key, order) {
  return hotels.sort((h1, h2) => {
    if (order == 'low-to-high') {
      return h1[key] - h2[key];
    }
    if (order == 'high-to-low') {
      return h2[key] - h1[key];
    }
  });
}
// Endpoint 2: Get the hotels sorted based on their Ratings
app.get('/hotels/sort/rating', (req, res) => {
  // retriving params
  let order = req.query.rating;
  // create copy of array
  let result = sortHotels([...hotels], 'rating', order);
  // return result
  res.json({ hotels: result });
});

// Endpoint 3: Get the Hotels sorted based on their Reviews
app.get('/hotels/sort/reviews', (req, res) => {
  // retriving params
  let order = req.query.reviews;
  // create copy of array
  let result = hotels.slice().sort((h1, h2) => {
    if (order == 'least-to-most') {
      return h1.reviews - h2.reviews;
    }
    if (order == 'most-to-least') {
      return h2.reviews - h1.reviews;
    }
  });
  // return result
  res.json({ hotels: result });
});

// Endpoint 4: Filter the hotels based on the Hotel Amenity
function filterByAmenity(hotels, amenity) {
  return hotels.filter(
    // Ignoure case sensitivity
    (hotel) => hotel.amenity.toLowerCase() == amenity.toLowerCase()
  );
}

app.get('/hotels/filter/amenity', (req, res) => {
  // retriving params
  let amenity = req.query.amenity;
  // filter array based on amenity
  let result = filterByAmenity([...hotels], amenity);
  // return result
  res.json({ hotels: result });
});

// Endpoint 5: Filter the hotels based on the selected Country
function filterByCountry(hotels, country) {
  return hotels.filter(
    // Ignoure case sensitivity
    (hotel) => hotel.country.toLowerCase() == country.toLowerCase()
  );
}

app.get('/hotels/filter/country', (req, res) => {
  // retriving params
  let country = req.query.country;
  // filter array based on country
  let result = filterByCountry([...hotels], country);
  // return result
  res.json({ hotels: result });
});

// Endpoint 6: Filter the hotels based on the selected Category
function filterByCategory(hotels, category) {
  return hotels.filter(
    // Ignoure case sensitivity
    (hotel) => hotel.category.toLowerCase() == category.toLowerCase()
  );
}

app.get('/hotels/filter/category', (req, res) => {
  // retriving params
  let category = req.query.category;
  // filter array based on country
  let result = filterByCategory([...hotels], category);
  // return result
  res.json({ hotels: result });
});

// Server log
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
