
Notes for my ruby on rails PairBNB

create the hamburger menu

put create listing in the menu and have it become a lightbox with escape working

put login in the menu

steal the edit profile page from healfly

have the listings paginate 2 at a time


Monday 11/26/18

The order that the javascripts are loading is causing an issue: one is that the routes get messed up if they don't load correctly and when you click the menu it brings you to your current address with #menu on the end and doesn't display the menu.
  To fix the javascript loading issue, my first thought was to put the script tags on the index.html in the public folder instead of importing them in app.js and put the js files in the public folder as well. 
  Next there are a few ways I can think to fix this. 
    I really want to be able to import the javascripts, but they rely on each other (one of them is jquery). Another thing I'm thinking of is main.js must be a compilation from webpack or otherwise. So my options are:
    -Making a new main.js with webpack 
    -Using Async and defer in the script tags in html doc
      ---Defering main.js, util.js, scrolly.js and scrollex.js fixed the issue. 
    -<script src="https://cdn.dwolla.com/1/dwolla.js"></script> & const dwolla = window.dwolla;




Tuesday 11/27/18

Another issue seems to be that react isn't handling my css animations correctly. The attributes of the transitions are loading as shown in the styles tab, but the transitions are not occuring. 
  I have tried putting the transitions directly into the public index.html file and it is showing stange behavior: it will apply the styles but the transitions still do not occur and only show the end result.
    This makes me think that the issue is that react is showing the changes automatically and not allowing the transition period to take place. 
    ---The issue was that the body tag was missing class 'is-preload' and some functions in main.js required it to do transitions. Took 4ish or more hours to add a class. That will happen. 

Next issue is that the correct font isn't loading. The font family is correct when I inspect it. 
---I was just misjudging the look of the font, it is actually the correct font but I remember it wasn't when I first started the project.


Fixed all the issues I was having with react router except that I can't figure out why when I click the NavLink on my logo it takes me to the home page but doesn't show my transitions but when I click the same NavLink in Menu it shows transitions.

Wednesday 11/28/18

  Today the goal was to get custom routes to work for each of the listings to give them their own info page with react router. I got it to work but I'm not proud of it. Issues I had and how I resolved them:
    - Getting the parameters to the GQL query
      - I sent the match parameter to the landing page and from the landing page to the GQL query and into a filter. 
        -I couldn't find a way to turn this filter on and off after many tries and so I made a second listings component without filter to show all listings.
    - Putting the apollo client into home and listing page

Thursday 11/29/18

Today I am going to input the listing data on my graphql server. 
  -One issue that's confusing me is why when I ask the server to return a description with the other properties, the order of the data returned gets mixed up.
I have to come up with a way to alternate between expensive listing for N dollars per night to inexpensive listing for N dollars per night.   
  - I made the boolean prop for listings, expensiveLocation. I could have 2 seperate columns and change the logic for the colors, but then on mobile it will be expensive listings then inexpensive listings.
  - Another solution is to sort the query by price and alternate between expensive and inexpensive locations, but I'm not sure how to do the alternating. I am going to look more into map and filter. 
    --- Filtering the price sorted query into expensive locations and inexpensive locations and then using a zipper function to combine them into one array works but.
      - This wouldn't work if there were more expensive or inexpensive listings of a certain price, it would throw all the pairs off so it is not robust. 
        - A way I'm thinking of fixing this is to group all the listings of a certain price together and then if amount of expensive listings != inexpensive listings at that price, omit the higher listings until the higher amount equals the lower amount
          - Found a way to omit the higher number of listings until they'r even, but don't know an elegant way to group them by price, and even then users might be unhappy when they don't see their listing up. The zipper could definitely mess this up though so another option is to skip the pairing all together, or create a listing structure that requires 2 entries. I think that is the best way. 
-Side note I want to reduce the color filter opacity on the listings on mobile because they don't have a chance to hover over the listings. Also change the fade in-out to feel more like an app than a website.
- Going to change my schema to have two listings per listing. This way they will always be paired on expensive and non-expensive. But the price will be the same. I will just duplicate the values for each listing in the schema and duplicate the JSX in my listings component. 