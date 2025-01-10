# BD2 Assignment

## Endpoint 1: Get the hotels sorted by pricing

Write an Express code snippet to sort the hotels based on the pricing low-to-high or high-to-low.

Instructions:

Define an endpoint /hotels/sort/pricing using the get method.

Define a variable pricing to take in the sorting condition if the price is high to low or else low to high.

Send the sorted hotels as a JSON response.

API Call:

<http://localhost:3000/hotels/sort/pricing?pricing=low-to-high>

Expected Output:

JSON of sorted hotels low-to-high or high-to-low.

### Endpoint 2: Get the hotels sorted based on their Ratings

Write an Express code snippet to sort hotels based on their individual ratings.

Instructions:

Define an endpoint /hotels/sort/rating using the get method.

Define a variable rating to create a condition to sort the hotels based on their rating (high-to-low or low-to-high)

Send the sorted hotels as a JSON response.

API Call:

<http://localhost:3000/hotels/sort/rating?rating=low-to-high>

Expected Output:

JSON of sorted hotels on ratings (High to Low or Low to High)

### Endpoint 3: Get the Hotels sorted based on their Reviews

Write an Express code snippet to hotels based on their reviews.

Instructions:

Define an endpoint /hotels/sort/reviews using the get method.

Define a variable reviews to create a condition to sort the hotels “least-to-most” or “most-to-least”.

Send the sorted hotels as a JSON response.

API Call:

<http://localhost:3000/hotels/sort/reviews?reviews=least-to-most>

Expected Output:

JSON of sorted hotels from 'least-to-most' or 'most-to-least'.

### Endpoint 4: Filter the hotels based on the Hotel Amenity

Write an Express code snippet to filter hotels based on the following hotel amenities:

Spa

Bar

Pool

Restaurant

Gym

Pet Friendly

Parking

Free WiFi

Instructions:

Define an endpoint /hotels/filter/amenity using the get method.

Implement a function filterByAmenity that returns the hotels of the selected amenity.

Send the filtered hotels as a JSON response.

Note: Try converting the amenity name into LowerCase.

API Call:

<http://localhost:3000/hotels/filter/amenity?amenity=spa>

Expected Output:

JSON of hotels with the selected amenity.

### Endpoint 5: Filter the hotels based on the selected Country

Write an Express code snippet to filter hotels based on the selected country:

France

USA

India

Germany

United Kingdom

Australia

South Africa

Note: Try converting the amenity name into LowerCase.

Instructions:

Define an endpoint /hotels/filter/country using the get method.

Implement a function filterByCountry that returns the hotels if it meets the selected country criteria.

Send the filtered hotels as a JSON response.

API Call:

<http://localhost:3000/hotels/filter/country?country=india>

Expected Output:

JSON of hotels for the selected country.

### Endpoint 6: Filter the hotels based on the selected Category

Write an Express code snippet to filter hotels based on the selected category:

Mid-Range

Family

Luxury

Boutique

Resort

Budget

Instructions:

Define an endpoint /hotels/filter/category using the get method.

Implement a function filterByCategory that returns the hotels if it meets the selected category criteria.

Send the filtered hotels as a JSON response.

Note: Try converting the amenity name into LowerCase.

API Call:

<http://localhost:3000/hotels/filter/category?category=luxury>

Expected Output:

JSON of hotels for the selected category.

### Endpoint 7: Send all hotels

Write an Express code snippet to send all hotels

Instructions:

Define an endpoint /hotels using the get method.

Send all the hotels as a JSON response.

API Call:

<http://localhost:3000/hotels>

Expected Output:

JSON of all hotels.



Testing UI : 
https://bd2-hotel-listing.vercel.app/
