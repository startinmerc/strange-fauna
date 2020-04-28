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
* Expand cart action to handle quantity of id
* Expand reducer to add {id,qty} object to cart
* Modify remove reducer to search by id
* Modify middleware & inCart to search by id
* Add static defaultProp to ensure qty > 0
* Pass qty to onClick, reducer
* Show qty in carts

#### Expanding Redux pt.3
* Quantity in details page as state via hook
* Pass to addToCart

#### Expanding Redux pt.4
* Edit qty action,reducer,actionType
* Create EditQuantity component to handle quantity changes
* Render in Cart ProductCard
* Add function & button to ProductDetail (can't reuse, parent needs qty)
* Show/Hide when in cart

#### Expanding Redux pt.5
* redo edit function to pure edit

### V0.6

#### Stock Limit
* add stock limit to seeds
* add max limit to quantity
* disable button + quantity if 0 in stock

#### Expanding Redux pt.5
* add subscriber to monitor store
* add middleware to import localStore

#### Wishlist/Productlist redesign
* Change wishlist to Productlist
* Change Productlist to handle wish list
* Remove unneeded code in Cart + rename
* Rename components

#### Middleware/Shared functions
* Move isMobile to middleware for easier management
* split out getTotal from getItems
* getItem to retrieve single id

#### MiniCart
* Set max height
* Overflow to scroll
* Clean up pseudo & hover CSS

#### ProductDetail
* Reorganise inline styling
* CSS styling, mainly reviews table & info rendering

#### Wishlist
* Change button animation
* Clean up AddToWish click handler

#### Nav
* Show/hide nav submenu via transform
* Simplify display of elements
* Fix responsive styling

#### Checkout
* Summary styling
* Input field styling
* Add edit cart link

#### Styling
* link hover styling
* productList padding

#### Responsive Styling
* hide minicart from tablet down
* hide cart content if empty in mobilemenu
* Cart styling
* ProductDetail styling

#### LandingSection
* Swap section-stripe to pseudo
* Change animation to transition
* Tweak transition

#### BEM
* Change CSS classes to BEM naming
* Rearrange ProductCard css

#### Minicart Hover
* Add [SVG from Codepen](https://codepen.io/startinmerc/pen/RwPwLZv)
* Style hover
* Tweak minicart styling to fit
* Change to fixed height

#### ProductList
* Tweak card styling to accommodate longer titles
* Color ProductList header

#### ProductDetail
* Add Star to review scores
* Move average to const
* Add fill prop on Star w/default
* Redesign reviews [from Codepen](https://codepen.io/startinmerc/pen/JjdGoom)

#### Redux
* remove inCart from stock limit (middleware, hacky)

#### About Sections
* FAQ to button sections
* Show/hide on click

#### React Helmet
* Install react-helmet
* Import to App for defaults
* Replace any document.title with Helmet

#### Footer Redesign
* Add Social links
* Add newsletter signup
* Rearrange layout
* Responsive design

### V0.7

#### Accessibility Pt.1 - Colors
* Run all colors through accessibility contrase checker
* Change footer color for white contrast
* Change About link in navs for contrast using class
* Increase text shadow on LandingSections

#### Accessibility Pt.2 - SVG Labelling
* Add `<title>` to all SVGs
* Add `role=img` to all decorative SVGs
* Hide decorative SVGs

#### Accessibility Pt.3 - Aria Labeling
* Add aria-label to icon-based links
* Ensure all inputs labelled
* Add aria-pressed & handler to FAQ + MobileMenu buttons
* Add sr-only alternatives to ratings

#### Accessibility Pt.4 - Focus styling
* Add focus to current hover styles
* Add focus/hover to MobileMenu icons, FAQ questions

#### Header Refactor
* Create HeaderButtonContainer component
* Move all variables for rendering HeaderButton to parent
* Add shoudComponentUpdate to cut down rendering
* Reflect variable/props changes in HeaderButton & children
* Refactor animateIcon (To redo with React.ref())

#### MobileMenu
* Add Hamburger from (Codepen)[https://codepen.io/startinmerc/pen/vYOWvQM]
* Replace old button with Hamburger
* Create MobileHeaderButton for icons
* Rework MobileHeaderButton styling

### V0.8

#### Functional Components (the easy ones)
* Convert About components to functions
* Convert NavSection components to functions
* Convert Footer component to function
* Convert most Header components to functions
* Convert ProductCard component to function
* Convert App component to function

#### Functional Components (the harder ones)
* Convert Cart component to function
* Convert Checkout component to function
* Convert MobileMenu component to function
* Convert ProductList component to function

### V1.0 - BACKEND INTEGRATION

#### Redux prep
* Install thunk & axios
* Add api call function service worker
* Add proxy to package.json

#### Get Products
* Add Products Reducers, Actions files
* Add fetch & load functions to get all/category products
* UseEffect in ProductList

#### Wishlist
* Add pop by id to MiniCartItem
* Clear previous non-api functions
* *this could be a lot better*

#### Cart
* Move remove handler to MiniCartItem
* Pass full id/qty object to MiniCartItem
* Add price to Cart actions, reducer
* Include total in Redux Cart, handle through reducer
* Add price to AddToCart & props

#### Display Wishlist
* Build Wishlist component
* Populate list from ids using apiCall

#### Redux Search
* Modify fetchOneProduct to add to Products.search array
* Add Clear function to clear results of search on component unmount
* Add to Wishlist to replace apiCall

#### GetCategories
* API call to get category objects
* Change backend to sort response
* Swap static seeds in Nav
* Swap static seeds in MobileMenu

#### NavSection Products
* Remove static seeds
* Add fatchProducts, filter & pass to sections
* *Needs fixing, overrides products redux state*

#### NavSection Products Pt.2
* Add 'featured' Products attribute
* Add getFeaturedProducts route & handler
* Edit fetchproducts to new route
* Add navProds to products store

---

### ToDo...

* Refactor MobileHeaderButton & HeaderButton?
* move from cart to wish if in localstore & OoS
* Pagination in products (after Mongo)
* React Router Page transition on productlist
* Showing/hiding components transitions
* Review semantic HTML
* Install & config Prettier
* Slow scaleup of landingsection image in hover animation
