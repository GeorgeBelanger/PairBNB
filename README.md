# PairBNB: Your AirBNB Budget Across the World
### The idea behind this app is to show how big the difference is in purchasing power between expensive locations and inexpensive ones. It shows two listings side by side *or together if on mobile* that have the same price, but one is amazing and the other is questionable.

### The technologies I used are Node.JS, React, GraphQL, AWS EC2 & S3, HTML & CSS


:hotsprings:

<img src="http://chittagongit.com/images/react-icon/react-icon-14.jpg" alt="React Icon" width="50" height="50" />

I took the theme from html5up.com and ran with it. 
  
## CSS
  
There are a few features that make the app feel the way it does: [React & Transitions (fade in & slider)](https://github.com/GeorgeBelanger/html_into_react#react-and-transitions), [scrolly buttons](https://github.com/GeorgeBelanger/html_into_react#scrolly-buttons), [GraphQL Articles](https://github.com/GeorgeBelanger/html_into_react#GraphQL-articles), [menu lightbox](https://github.com/GeorgeBelanger/html_into_react#menu-lightbox), and of course [CSS](https://github.com/GeorgeBelanger/html_into_react#CSS). 
  
## GraphQL Articles
  
  
  
## Scrolly Buttons
  
## React and Transitions
 
## Menu Lightbox

## CSS


# Development log
## Monday 11/26/18

The order that the javascripts are loading is causing an issue: one is that the routes get messed up if they don't load correctly and when you click the menu it brings you to your current address with #menu on the end and doesn't display the menu.
  To fix the javascript loading issue, my first thought was to put the script tags on the index.html in the public folder instead of importing them in app.js and put the js files in the public folder as well. 
  Next there are a few ways I can think to fix this. 
    I really want to be able to import the javascripts, but they rely on each other (one of them is jquery). Another thing I'm thinking of is main.js must be a compilation from webpack or otherwise. So my options are:
    -Making a new main.js with webpack 
    -Using Async and defer in the script tags in html doc
      ---Defering main.js, util.js, scrolly.js and scrollex.js fixed the issue. 
    -<script src="https://cdn.dwolla.com/1/dwolla.js"></script> & const dwolla = window.dwolla;




## Tuesday 11/27/18

Another issue seems to be that react isn't handling my css animations correctly. The attributes of the transitions are loading as shown in the styles tab, but the transitions are not occuring. 
  I have tried putting the transitions directly into the public index.html file and it is showing stange behavior: it will apply the styles but the transitions still do not occur and only show the end result.
    This makes me think that the issue is that react is showing the changes automatically and not allowing the transition period to take place. 
    ---The issue was that the body tag was missing class 'is-preload' and some functions in main.js required it to do transitions. Took 4ish or more hours to add a class to a div. That will happen. 

Next issue is that the correct font isn't loading. The font family is correct when I inspect it. 
---I was just misjudging the look of the font, it is actually the correct font but I remember it wasn't when I first started the project.


Fixed all the issues I was having with react router except that I can't figure out why when I click the NavLink on my logo it takes me to the home page but doesn't show my transitions but when I click the same NavLink in Menu it shows transitions.

## Wednesday 11/28/18

  Today the goal was to get custom routes to work for each of the listings to give them their own info page with react router. I got it to work but I'm not proud of it. Issues I had and how I resolved them:
    - Getting the parameters to the GQL query
      - I sent the match parameter to the landing page and from the landing page to the GQL query and into a filter. 
        -I couldn't find a way to turn this filter on and off after many tries and so I made a second listings component without filter to show all listings.
    - Putting the apollo client into home and listing page

## Thursday 11/29/18

Today I am going to input the listing data on my graphql server. 
  -One issue that's confusing me is why when I ask the server to return a description with the other properties, the order of the data returned gets mixed up.
I have to come up with a way to alternate between expensive listing for N dollars per night to inexpensive listing for N dollars per night.   
  - I made the boolean prop for listings, expensiveLocation. I could have 2 seperate columns and change the logic for the colors, but then on mobile it will be expensive listings then inexpensive listings.
  - Another solution is to sort the query by price and alternate between expensive and inexpensive locations, but I'm not sure how to do the alternating. I am going to look more into map and filter. 
    --- Filtering the price sorted query into expensive locations and inexpensive locations and then using a zipper function to combine them into one array works but-
      - This wouldn't work if there were more expensive or inexpensive listings of a certain price, it would throw all the pairs off so it is not robust. 
        - A way I'm thinking of fixing this is to group all the listings of a certain price together and then if amount of expensive listings != inexpensive listings at that price, omit the higher listings until the higher amount equals the lower amount
          - Found a way to omit the higher number of listings until they'r even, but don't know an elegant way to group them by price, and even then users might be unhappy when they don't see their listing up. The zipper could definitely mess this up though so another option is to skip the pairing all together, or create a listing structure that requires 2 entries. I think that is the best way. 
-Side note I want to reduce the color filter opacity on the listings on mobile because they don't have a chance to hover over the listings. Also change the fade in-out to feel more like an app than a website.
- Going to change my schema to have two listings per listing. This way they will always be paired on expensive and non-expensive. But the price will be the same. I will just duplicate the values for each listing in the schema and duplicate the JSX in my listings component. 

## Friday 11/30/18

- Today I have been thinking of the best way to structure my database. 
  - (Poor) Having two listings per listing instance
  - (Better) Having a pairedListingID property on each listing
  - (Best) Keeping the schema the same and having logic that pairs the listings based on exp/inexp & price, so that you don't always have the same two listings paired.
- The only reason for doing this is so user generated data doesn't get messed up, but now I'm thinking of having logic so you just put in the url of a listing and it fills all the form data out.
  - A couple ways of that I can think to do this.
    - Airbnb's API is only for hosts, so no option there
    - (Good)This article talks about a hidden api that allows you to collect data for a given listing (https://futuretravel.today/my-journey-on-using-the-hidden-airbnb-api-and-writing-my-first-electron-application-34c9dfabbc65)
    - (Better)Getting a web crawler to work.  
      - This article teaching about cheerio.js, puppeteer and request-promise seems like a good starting point after looking at several other options, but the main thing I need is that the feature fires as soon as someone puts the url into the form. (https://medium.freecodecamp.org/the-ultimate-guide-to-web-scraping-with-node-js-daa2027dcd3)
- Also decided to add security to my variables at this point- should have done it earlier because now I have to delete sensitive files in previous versions. 
  --- Had an issue with dotenv not working, had to run npm build and now it works.
- Had a slight issue when pushing to github because my files were too large in my node_modules folder. 
  ---Finally realized how to gitignore node_modules/** and also had to do a --soft reset. Love git!  


## Saturday 12/1/18

- Thinking about next steps, few things that I can be doing
  - Filling out my listing data
  - Editing the page navigation to feel like an app
    - Basically setting a timeout and fade out and fadein for transitions between pages
    - Also trying to figure out why my fade ins work only when you click a link in the menu
  - Working on my web scraper
  - Changing the app to be geared toward medical listings
  - Hosting this service somewhere
    - (bad but free) On heroku with poor load times
    - (better but not free) On AWS to get experience with it
    - (better) On a local machine at my house to get experience with it
- I think working on the page navigation is best because wiether or not I'm going to change the app to be centered around medical care is a big if right now:
  - I think the medical care site will be way more useful and popular but I'd have to change:
    - The UI
    - The schema
    - Also if I'm applying to hospitals this is kind of useless because it's a conflict of interest for them to hire me
- I decided to look at the navigation
  - The issue is that the menu links don't have the functionality of react-router(giving you the feel of staying on the same page) and that the Navlinks aren't displaying my css animations when they reach the page(This was caused last time by the body not having the is-preload class)
    - For the menu, it has it's own custom logic in main.js and I'm not sure what causes the react transition effect because the html renders as a and not NavLink. 
      - First I'll try appending it to root instead of body. 
        - Putting it in root didn't change anything.
      --- Getting rid of all the stopdefault code got the menu links to behave just like the other links. 
    - Now I have to find out how to get the transitions to appear and add a timeout, fadeout and fade in
      - This article seems promising (https://medium.com/onfido-tech/animations-with-react-router-8e97222e25e1)
## Sunday 12/2/18 
  - A few different things I could be doing today:
    - Watching the talk on hooks (https://reactjs.org/docs/hooks-intro.html)
      - This might allow me to make the ui animations work more seemlessly
      - Deffintely going to write my components like this from now on
    - Making a new website with GatsybyJS
      - Super fast an optimized, as well as free hosting and AWS 
      - My word website I've been thinking of
    - Working directly with the animations to get the fade in fade out
      - I feel like I want to know everything going on in this system and It's going to take a while. I've got the slide to work already but it's a lot of sphageeti rn
  - Deciding to watch the talk on hooks and take it from there. I feel like understanding the transitions will be easier after. 
    - Tried to get into the logic behind the slider and turn it from a class into a function. Didn't get very far. Will try to get the fadein/out mechanic to work first then decide if I want to refactor into hooks.

## Monday 12/3/18
  - Pushing to heroku and filling my database with listings. 
    - Got it to deploy after editing github files directly before realizing I just had to delete package-lock.json and switching my database url from the process.env variable to the actual address :/ but also :)


## Tuesday 12/4/18
  - Should be filling in my listings and setting the text for the site to make it presentable, but I want to work on the transitions and turn them into react hooks soooo
  - I started working on the css on the page. Got to switch the #300 goto buttons to be block display on mobile, first 2 wide then 1 wide
    --- Just had to add property flex-wrap: wrap;
  - Looking at getting a Google flight api interface on my landing page for the listings but it's been deprecated and skyscanner is said to be better (https://rapidapi.com/skyscanner/api/skyscanner-flight-search)
  - Was going to hold off on pushing my updates until I have a way to get my transitons to work flawlessly but I like the slider. 

## Wednesday 12/5/18 
  - Actuallying filling out the listing data today! Putting some font awesome icons in as well.
    - Changed my baths from int to float
    - Edited my listings query to include baths
  - I want to figure out how to get the line after the price and the title to be the same height on both listings even if one of the listings has a longer title. 
    - First thought is to set the line height of everything below the title and give the title it's own line height that allows for 2 rows and after those 2 rows the overflow gets cut. But first lets fill the listings in. 
    - Flexbox pattern?
  - I notice something weird going on with the first two listings, that the opacity of the color shade is very low. Also think that having the better listing always in the big box is better. To do that I would have to edit the zipper, and the easiest way I can think to do that is to have the linked listings in the DB.
    - Zipper with two 'teeth' at a time and a first and last conditional is actually the easiest.  

## Thursday 12/6/18 
  - Changed the banner image and image on the generic page. But they need to be shrunk and/or optimized because they are too big rn. 

- Did nothing really on friday and saturday. Not sure what I did on Thursday.

## Sunday 12/9/18
  - Made a list of the best cities for devs by dividing salary by cost of living. Omaha, Austin and Portland Or seems to be my top 3. 
  - Couple of things I'm looking at doing rn.
    - Changing the transition to react hooks and making a repo of it with a slide, fade and maybe another transition. 
    - Starting my words app
      - Issue I was having here was that I'm not sure what the best way to do user auth is.
        - (bad) I can use pure graphql but there is no abiliy to to use oauth(FB n google login)
        - I can use passport JS with express but there doesn't seem to be a guide on how to use it with create-react-app
          - This seems to be what I was looking for(https://hackernoon.com/m-e-r-n-stack-application-using-passport-for-authentication-920b1140a134)
            - This also looked good but the first one starts with create-react-app(https://codeburst.io/react-authentication-with-twitter-google-facebook-and-github-862d59583105)
          - Now I have to find a template/project that fits my needs for my words app. I will be looking on a few sites: (
            - https://www.gatsbyjs.org/starters/?v=2
            - https://react-md.mlaursen.com/
            - https://react.rocks/)
          - As for what the final poster will look like, I found two that I like- (
            - https://www.amazon.com/Mixology-Cocktail-Recipe-Chart-Poster/dp/B003B6N458
            - https://popchart.co/products/the-cocktail-chart-of-film-literature?variant=1009031284&gclid=CjwKCAiAl7PgBRBWEiwAzFhmmuSLUSOsUoF67PjKgEYkOxKRiknC_nWQIR1jGSXvZN__XrZKMm5gvRoCYkYQAvD_BwE)

## Tuesday 12/18/2018
- Couple of things I can think of doing today but first of all where are all my notes?!?:
  - Sperry Farms
    - Get a react router running for smooth transitions and change the banner
      - The latter is better to do while I'm home and the former I need a different transition than just the slide. 
  - PairBNB
    - Get a landing page for the listings
    - blahhh
    - fix the sf listing
    - infinite scroll
  - wordsapp
    - work on prisma and docker
    - Work on the react transition (would help with the other two projects)
    - Work on the UI
  - Portfolio site
    - start :p
  - ecommerce site
    - start :[]
