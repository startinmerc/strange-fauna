# Strange Flora

## [Landing Page](https://strange-flora.herokuapp.com/)

### [GitHub Repo for backend](https://github.com/startinmerc/backend-strange-flora)

#### A full-stack site built on

* React
* Node.js
* Redux
* React-Router
* Custom CSS
* Heroku
* MongoDB Atlas
* Mongoose
* Express

An eCommerce site built for my portfolio, part of the Strange Industries Network.
The site is built on React using Node, built entirely from scratch.
It uses extensive components and state management for full interactivity.
Interaction with MongoDB API managed through async Redux actions.

#### Site Structure Plan

```none
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

#### Nav Pt. 1

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

#### Expanding Redux pt.6

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

#### MiniCart Pt. 1

* Set max height
* Overflow to scroll
* Clean up pseudo & hover CSS

#### ProductDetail Pt. 1

* Reorganise inline styling
* CSS styling, mainly reviews table & info rendering

#### Wishlist

* Change button animation
* Clean up AddToWish click handler

#### Nav Pt. 2

* Show/hide nav submenu via transform
* Simplify display of elements
* Fix responsive styling

#### Checkout Pt. 1

* Summary styling
* Input field styling
* Add edit cart link

#### Styling Pt. 1

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

#### ProductDetail Pt. 2

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

#### MobileMenu Pt. 1

* Add Hamburger from [Codepen](https://codepen.io/startinmerc/pen/vYOWvQM)
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

#### Wishlist Pt. 2

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

#### NavSection Products Pt.2

* Add 'featured' Products attribute
* Add getFeaturedProducts route & handler
* Edit fetchproducts to new route
* Add navProds to products store
* Catch fetchCategoryProducts("about")

#### ProductDetail Pt. 3

* Add async API call to populate product detail
* Render on page
* Return blank detail page if no product found

#### Delivery API

* Create fetchDeliveries action
* Populate delivery options in 'other' reducer
* Update DEFAULT_STATE

#### Cart Pt. 2

* Add useEffect to populate cart items from reduxState
* Fetch delivery options & populate `<select>`

#### Checkout Pt. 2

* Remove seeds & set js
* Add population from Cart
* Change JSX to handle api data & include api fns in redux
* Include quantity to items via find fn *hacky*

#### NavSectionContianer

* Refactor API population

#### LandingSection Pt. 3

* Add fetch actionType
* Add landingSection fetch action
* Add landingSection default state, fetch reducer
* Include in reducer index

#### Landing

* connect fetchLandingSections, sections to Landing
* Call if sections is empty
* Map sections to seperate const, splice in email cta

#### Email Ref

* Create emailRef hook in top App, pass to components
* Assign emailRef to email `input` in Footer
* Swap DOM to Ref in Landing cta

#### Tidy up

* Remove seeds.js
* Remove seeds import & functions from middleware
* Remove any remaining imports of seeds in components
* Clear dependency errors

#### Tidy Redux

* Simplify wish redux state as array
* Rename "other" as "delivery"
* Add qty from cart to 'cart' type product cards

#### API Change

* Product type switched to id ref of Category in API
* Category.type to match Product.type
* Update var names in product actions to reflect changes
* Use product.type as needed

### V1.2

#### Cart Pt. 3

* Hide checkout link if cart empty
* Remove scale animation on cards
* Tweak CSS in ProductCard

#### LandingSection Pt. 4

* Change to full width
* Reposition image as offset
* Change hover to greyscale (redo with pseudo + opacity)
* Change pseudo hover to block (redo to fit text width)

#### LandingSection Pt. 5

* Move ::before to text to match text width
* Add flex to mobile
* Change mobile positioning, hide ::before
* Seperate links to own container & position

#### MobileHeaderButton

* refactor into HeaderButton
* Add mobile prop
* remove unused MobileHeaderButton

#### HeaderButton

* Add reduce function to get total quantity of items
* Simplify shouldUpdate to allow quantity changes

### V1.3

#### Redux Cart

* Add update total to EDIT_CART
* Add comments
* Ensure qty is number
* Fix updateCart in ProductDetail

#### LandingSection Pt. 6

* Class based dark/light/section coloring
  * (Hacky, but needed to get around pseudo styling in React)
* Reduce section width & push to sides
* Further offset image
* Increase x offset on mobile
* Add section-links pseudo
* Make section-text pseudo full & translucent on mobile for contrast

#### Redux Cart Revisited

* Add middleware function to calculate total qty, value
* Import to Cart reducer
* Refactor reducer to use function & clean up code
* Simplify components using cart as needed

### V1.4

#### HeaderButton Redesign

* Remove minicart for now
* Remove border, overcomplex styling
* Refactor elements
* Refactor JS rendering
* Hide text until hover

#### LandingSection Pt. 7

* Recenter sections
* Reposition pseudos

#### Minicart

* Remove any references in other components
* Move all files to seperate folder

#### HeaderButton Pt. 1

* Add ref for buttons
* Use to add/remove `.updated` class
* Remove redundand middleware function
* Tweak update animation & pseudo

#### MobileMenu Pt. 2

* Add animation for quantity mounting
* Refactor expansion handling
* Tweak styling

### V2.0

#### Live API

* Add static.json with proxy
* Add error handling through Redux store

#### Heroku Launch

* Add new Heroku project
* Add buildpack
* Add remote heroku branch & push

#### API Call Priority

* Call categories as first API call to trigger rendering in App
* Catch API hang/empty store errors

#### Loader

* Add Loader component to cover API call time
* Display in App while awaiting API

### V2.1

#### Smooth CTA

* Change CTA link to scrollIntoView
* Create IntersectionObserver to watch for email field in view
* Focus email field when in view & disable after

#### Header/Menu position

* Change Header + MobileMenu to position: fixed
* Add calculated heights to `<main>` and `<footer>` elements when needed
* Change grid-rows at breakpoints

#### MobileMenu Pt. 3

* Fatten up options
* Spread link over entire `<li>`

#### Loader Pt. 2

* Create & render Loader component before initial API call
* Render at App level
* Create fullscreen option

### V2.2

#### Error Handling

* Conditionally catch errors in apiCall
* Add error status code to errors redux store

#### Dropup restyle

* Move nth-of-type stuff over to JS for flexibility of content
* Add alternate exp/min transition delays and transforms within JS style
* Change transition delay on .dropup to wait/anticipate animations

#### Full screen loader redesign Pt.1

* Add big SVG animation for a bit more interest
* Reposition as `<main>` element
* Tidy up CSS

#### Full screen loader redesign Pt.2

* Return using isLoading
* Install react-transition-group
* Wrap Loader in TransitionGriou, CSSTransition

#### Fix Nav API

* Remove unneeded API duplicate call

#### Fix isMobile

* Remove old one-time firing function
* Replace with eventListener for media query

#### Fix LOAD_CATEGORIES

* Move App local states to top of component
* Pass isLoading to useEffect
* ONLY call getCategories if loading

### V2.3

#### Authform Pt.1

* Add basic Authfrom component with simple state
* Add route to App

#### Authform Pt.2

* Add auth action
* Add currentUser reducer
* Pass Redux functions to Authform
* Add handleSubmit function

#### Authform Pt.3

* Add User SVG
* Add User HeaderButton
* Tweak HeaderButton to hide totals etc on user

#### Errors, post-Authform Pt.1

* Rewrite apiCall to handle message/status from api
* Handle this object in errors action/handler
* Show errors in Authfrom
* Add removeError cleanup function to Authform to clear errors

#### Errors, post-Authform Pt.2

* Reformat message div - positon relative, work out header margin
* Change colouring, blends in with Nav

#### Authform Pt.4

* Tweak elements
* Add styling
* Add to MobileMenu

#### User page

* Logout button
* Cart
* Wishlist
* fill/unfill user icon

#### API fixes

* pass isLoading from App to fetchCategories to set
* Tweak error checking for res data on apiCall

#### MobileMenu fixes

* Add fill prop to MobileMenu icons
* Remove fetchCategories from Mobilemenu
* Fix key assignment to proper element of dropups

#### Errors Component

* Refactor `.errors` as component
* have removeError attached to history listener
* call ^ as cleanup fn to clear listener

#### User lists

* join local & api user lists on login
* clear all on logout
* update user on db with local wish/store on logout

### V2.4

#### Background Gradients

* Add classes for background colors
* Add classes for left/right light/dark gradients
* Reassign block backgrounds as classes
* Pass index through LandingSection map for gradient direction
* Add classes to style pseudos

#### Button refactor

* Remove all button style variations
* Reset to a universal default style
* Add classes for button variation
* Add to components, pass as props if needed
* Handle exceptions

#### File structure refactor

* Move "partials" out to individual folders
* Split ProductCard/Detail/List to individual folders
* Refactor Header & MobileHeader to single component

#### Convert last Class components

* Convert AddToCart to functional component
* Convert AddToWish to functional component

#### Restyle Cart

* Convert cart product cards to grid
* Reposition card elements
* Restyle as needed, in tandem with mobile view
* Refactor ProductCard CSS

#### Refactor getCategories

* Add new route in api to return cats & featured prods in 1 call
* Create new action to handle new route
* Remove unneeded calls from components

#### PropTypes Pt.1

* Install prop-types
* Import into components
* Add propTypes to supplied props
* Fix raised errors

#### PropTypes Pt.2

* Put RegExs in middleware for props
* Import RegExs where needed
* Include in PropTypes
* Fix raised errors

### V2.5

#### Reviews Backend

* Add review handlers in API
* Populate reviews in getProduct
* Populate review authors

#### Reviews Form

* Add basic ReviewForm component
* Add component path to Product
* Add link from ProductDetail to ReviewForm when logged in

#### Reviews Form Redux

* Add postReview action
* Add deleteReview action

---

#### Reviews Form Advanced

* Make modular - full page / part of ProductDetail
* Extract review to seperate component
* Hide post review link if review already left
* Edit route
* Move get route out of auth

### ToDo

#### Cart to Wish/Adjust stock

* check if stock > 0 on login & cart component load
* pass to add wish & raise error if so

#### Pagination in products

* Create new product/category route which accepts page num, page size
* Add redux action to new route which takes category, page num, page size
* ProductList needs startIndex, endIndex, pages, currentPage, totalPages

#### Transitions

* LandingSection animation as CSSTransition
* ProductCard opacity CSSTransition

#### Other

* Review semantic HTML inc. component refactoring (containers), details/summary(?)
* Change icons
* Pass fill style to add-to-wish instead of class? or would it remove transition?
* Class backgrounds in ProductCards
* Possible PC refactor of nav/default
* Destructure LandingSection data for PropTypes
* Full width productDetail buttons on mobile

#### GSAP

* LandingSection
  * Parallax scroll - fast images, slow section
  * Loading animation - content from left, image fade from above

```javascript
function setVars() {
  let root = document.documentElement;
  root.style.setProperty("--headerHeight", `${root.getElementById("header").height}px`);
}

let OoS = localStorage.reduxState = "{\"cart\":{\"cart\":[{\"id\":\"5ee7765e8265482fe01a5026\",\"qty\":1,\"price\":\"48\"}],\"total\":{\"qty\":1,\"val\":48}},\"wish\":[]}"

let Overstock = localStorage.reduxState = "{\"cart\":{\"cart\":[{\"id\":\"5ee7765e8265482fe01a501b\",\"qty\":10,\"price\":\"11\"}],\"total\":{\"qty\":8,\"val\":88}},\"wish\":[]}"
```
