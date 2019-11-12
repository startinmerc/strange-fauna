# Strange Fauna

## A React/Node app

Part of the Strange Industries network, an eCommerce app built in React, using GSAP and SVG animation.

Site Structure Plan:
```
+-- Header
+-- Footer
+-- Landing Page/Home Page
+-- Product Listings
| +-- Product Detail
| | +-- Description
| | +-- Photos
| | +-- Ratings & Comments
| | +-- Quantity selection
| | +-- Add to basket
| | +-- Add to wishlist
| `-- Pagination
+-- About Page
| +-- FAQ
| +-- Disclaimer
| +-- Returns
| `-- Delivery
```
## Features:
|Feature|Front/Back|Done?|
|-------|----------|-----|
|-------|----------|-----|
|-------|----------|-----|

### V0.1

#### Initial design choices
* Define display & body fonts
* Define color palette
* Mock up main page to display choices
* Transfer choices to `:root`

#### Page mockup
* [Mock up main page on Codepen](https://codepen.io/startinmerc/pen/JjPVGJo)
* Add sections menu skeleton
* [Add submenu from Codepen](https://codepen.io/startinmerc/pen/oNNxRNx)

### V0.2

#### REACT_ROUTER
* Install react-router
* npm install
* import components

#### Implement router components
* wrap app
* wrap relevant switches
* replace internal links with components
* rearrange file structure as needed

#### Begin Products listings
* create seeds based on readme model
* create product list component
* dynamically render based on url