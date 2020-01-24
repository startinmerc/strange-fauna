# Strange Flora

## [Landing Page](https://strange-flora.herokuapp.com/)

#### A full-stack site built on:

* React
* Node.js 
* Redux
* React-Router
* Custom CSS
* Heroku

An eCommerce site built for my portfolio, part of the Strange Industries Network.
The site is built on React using Node, built entirely from scratch.
It uses extensive components and state management for full interactivity.

#### Site Structure Plan:
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

Version logs for the project are below...

---

### V0.1.0

#### Initial design choices
* Define display & body fonts
* Define color palette
* Mock up main page to display choices
* Transfer choices to `:root`

#### Page mockup
* [Mock up main page on Codepen](https://codepen.io/startinmerc/pen/JjPVGJo)
* Add sections menu skeleton
* [Add submenu from Codepen](https://codepen.io/startinmerc/pen/oNNxRNx)

### V0.2.0

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
* split into seperate files

#### Product Cards
* Create Product Card component
* Style product cards
* Add components for cart/wish buttons
* Basic conditional rendering click functions

#### Product List Grid
* Add buttons for list layout options
* Put layout in ProductList state
* swap out styling

### V0.2.1

#### Mini Menu
* Add Mini Menu component to header
* Style
* Show/hide as required

#### Header Nav
* Add nav component to header
* Show/hide as required

#### Nav
* Refactor Landing Submenu component for reuse in header
* Reorganise files as needed
* Factor out components from new Nav

#### Misc
* Make section/colors object global

### V0.2.2

#### About Pages Templates
* About Page
* FAQ Page
* Delivery Page
* Returns Page
* Disclaimer Page

#### Redux Pt/1
* install redux
* add to App.js,create store
* add basic rootReducer

#### Redux Pt.2
* add actionCreators for add/remove
* import to HeaderButton
* pass as props to MiniBasketItem

#### Redux Pt.3
* import actionCreators to ProductCard
* basic add to cart/wish
* conditional formatting
* advanced add/remove

### V0.3

#### Cart + Wish
* add page components
* change header buttons to links to above
* render ProductCards for lists
* custom styling for each

#### Responsive Styling - 800px
* viewport in head
* Header
* Main
* Hide Landing NavSection
* Footer
* Header NavSection

#### Responsive Styling - 600px
* MobileHeader Component
* Hide regular Header
* ProductCard
* Render relevant components based on window.innerWidth

#### MobileMenu
* Create basic component
* Add SVGs for icons
* Show/hide DropUp form MobileMenu

#### List
* Refactor Cart & Wishlist to single component
* Change Router to pass prop to List for rendering

#### Styling
* Convert all color refs to root variables
* Remove unused/unneeded styling
* Link & Button resets

#### Product Card
* Switch/Case rendering on types of product card
* Swap out NavSectionItem for Product Card & style

#### About Pages
* Rough templates for each page with basic styling

#### Landing Page
* Expand Landing page to multiple sections
* Style odd/even sections
* Animate hover styling
* Contextual based on product type
* Factor out to Component
* Put landing content as seeds
* Stop blur effect from overflowing

#### Delivery
* Change delivery from local state to redux store
* Add action, reducer to handle change
* Implement in Cart, change refs

#### Nav
* Change first column to blurb
* Remove unused css

#### Checkout
* Checkout component skeleton
* Add styling
* React rendering for cart summary etc
* Pass form content to state

#### Middleware & Cleanups
* Move getItems from cart & checkout etc to middleware
* destructure seeds exports to only import as needed
* move componentDidUpdate from HeaderButton/MobileMenu

#### MiniCart
* Rewrite HeaderButton to use same rendering logic as Carts
* Factor MiniCart out of HeaderButton

### V0.4

#### ProductDetail
* put route matching in Products switch
* pass ID from switch to ProductDetail as hook via router
* template page to render details

#### Redux Reorganise
* split reducers
* split actions
* split actionTypes
* add index compilers
* change file refs
* change mapStateToProps destructuring

#### Cart + Wish Buttons
* make proto component in prodDetail for button
* pass prodID
* add redux actions & state to proto
* add click handler from ProductCard
* add inCart from same
* change props
* switch from proto to main component
* remove now-unused code from ProductCard
* as above for Wish button

#### Cart + Wish Buttons pt.2
* Add newly functional buttons to ProductDetail
* Create alternate add to wish button for ProductDetail

### V0.5

#### Expanding Redux pt.1
* Add action/reducer/actionType for gridColumns
* Add Redux to ProductList
* Switch click handlers to Redux actions
* Remove old local state handling

#### Expanding Redux pt.2
...

---

### To Do:
* change cart to [{id:-,quantity:-},...]
 * update reducer
 * update actions
 * implement on details page
 * default 1 on click in card
* all components to fncs
 * HOOKS!
* Wishlist renders ProductList?
* REview semantic HTML