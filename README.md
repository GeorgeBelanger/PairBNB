# PairBNB: Your AirBNB Budget Across the World

Website is live here: [http://ec2-18-191-187-105.us-east-2.compute.amazonaws.com/](http://ec2-18-191-187-105.us-east-2.compute.amazonaws.com/)

The idea behind this app is to show how big the difference is in purchasing power between expensive locations and inexpensive ones. It shows two listings side by side *or together if on mobile* that have the same price.

<img src="https://konpa.github.io/devicon/devicon.git/icons/react/react-original.svg" alt="React Icon" width="75" height="75" /><img src="https://konpa.github.io/devicon/devicon.git/icons/nodejs/nodejs-original.svg" alt="Node Icon" width="75" height="75" /><img src="https://s3-us-west-2.amazonaws.com/svgporn.com/logos/graphql.svg" alt="GraphQL Icon" width="75" height="75" /><img src="https://konpa.github.io/devicon/devicon.git/icons/amazonwebservices/amazonwebservices-original.svg" alt="AWS Icon" width="75" height="75" /><img src="https://cdn.svgporn.com/logos/graphcool.svg" alt="Graphcool Icon" width="75" height="75" /><img src="https://cdn.svgporn.com/logos/apollostack.svg" alt="Apollo Icon" width="75" height="75" /><img src="https://cdn.svgporn.com/logos/webpack.svg" alt="Webpack Icon" width="75" height="75" /><img src="https://cdn.svgporn.com/logos/docker.svg" alt="Docker Icon" width="75" height="75" /><img src="https://cdn.svgporn.com/logos/mysql.svg" alt="mySQL Icon" width="75" height="75" />

### Table of Contents:  
[GraphQL Articles](https://github.com/GeorgeBelanger/PairBNB#GraphQL-articles)<br/>
[React Router and Transitions (fade in & slider)](https://github.com/GeorgeBelanger/PairBNB#react-router-and-transitions)<br/>
[Page Components](https://github.com/GeorgeBelanger/PairBNB#page-components) <br/>
[Scrolly Buttons](https://github.com/GeorgeBelanger/PairBNB#scrolly-buttons)<br/>
[Menu Lightbox](https://github.com/GeorgeBelanger/PairBNB#menu-lightbox)<br/>
[AWS Server](https://github.com/GeorgeBelanger/PairBNB#aws-server)<br/>
[General Notes](https://github.com/GeorgeBelanger/PairBNB#general-notes)<br/>
[Development Log](https://github.com/GeorgeBelanger/PairBNB#development-log)<br/>

  
## GraphQL Articles
  The first thing that makes this website stand out is that instead of all the listings being hardcoded, I make an api call to my graphcool database returns all the listings and thier information. This means I can add, remove and edit listings through graphql queries. The dataflow through components goes like this:
  
  > graphcool database -->  grapqhl api call --> listing.js --> listingsHome.js --> home.js --> app.js --> index.js --> browser
  
  To pair the inexpensive and expensive listings by price I: 
  
    1. queried for all listings, 
    2. ordered by decending price, 
    3. wrote a custom zipper function to pair exp and inexp listings, 
    4. filtered out all undefined listings, and 
    5. sent listings to listingHome.js to turn the data into html with css classes and react keys. 
  
  For the zipper, I wanted to alternate 2 exp/inexp listings at a time because on desktop, the big listings are at 1,2,5,6,etc.
   
  ```javascript
    const pairedListings = [expensiveListings[0]]
    for (var i = 0; i < expensiveListings.length; i += 2) {
          pairedListings.push(inexpensiveListings[i], inexpensiveListings[i + 1], expensiveListings[i + 1], expensiveListings[i + 2])
        }
    pairedListings.push(inexpensiveListings[-1])
    const result = pairedListings.filter(listing => listing !== undefined)
  ```
    
  Then the result is mapped to the format which listings can accept with react keys so they can be identified as added, removed or changed:
  
  ```javascript
    return result.map((currentListing) => (
      <Listing key={currentListing.id.toString()} listing={currentListing} />
    )
  ```
      
  Listing then transforms them into html to be inserted with into our home component: 
  
  ```javascript
    const Listing = (props) => (
    <article id={props.listing.price} className='image' style={{ backgroundImage: `url(${props.listing.displayImageUrl})`}}>
      <header className='major'>
        <h3>
          <a href={props.listing.url} rel='noopener noreferrer' target='_blank' className='link'>{props.listing.title} <br />
        ${props.listing.price}/night</a>
        </h3>
        <p>
          <b>{props.listing.location} <br />
            {props.listing.beds} <i className='icon alt fas fa-bed' /> {props.listing.baths} <i className='icon alt fas fa-bath' /> {props.listing.reviewRating} <i className='icon alt fas fa-star' />
          </b>
        </p>
      </header>
    </article>
  ```
    
  End result in our home component which is wrapped in our apollo provider which offers the address to our database, `{client}`:
  
  ```javascript
    <ApolloProvider client={client}>
      <section className='tiles'>
        <ListingsHome />
      </section>
    </ApolloProvider>
  ```
  My GraphQL listing schema can be found in `/graphcool/types.graphql` 
  
## React Router and Transitions
  
  Using React Router instead of traditional routing as you can see below. I also added SwitchWithSlide, whose guide to implementation can be found [here](https://medium.com/onfido-tech/animations-with-react-router-8e97222e25e1) in place of a traditonal switch which is what gives us the swiping transition animation between pages. You can see the complete architecture of our app here.
  
  ```javascript
    class App extends Component {
      render () {
        return (
          <BrowserRouter>
            <div id='wrapper' className='container'>
              <HeaderMenu />
              <SwitchWithSlide>
                <Route path='/' component={Home} exact />
                <Route path='/about' component={About} />
                <Route path='/listingPage/:id' component={ListingPage} />
                <Route component={Error} />
              </Switch>
              <Contact />
              <Footer />
            </div>
          </BrowserRouter>
        )
      }
    };
  ```
App goes between home, about and specific listing pages. The menu, contact and footer are included in every page. 

## Page Components

  The page components(contact, home, about, menu, footer, contact) are the different parts of the old HTML page broken down into different components, plugged into an HMTL to JSX transformer found here: [https://transform.now.sh/html-to-jsx/](https://transform.now.sh/html-to-jsx/) and saved as reusable .js components.

## Scrolly Buttons
  
  The scrolly buttons are regular `href=#100` buttons, but everytime the page is moused over the buttons get the scrolly attribute which is what gives them a gradual, smooth scroll instead of an instant snap.
  
  ```javascript
    // Scrolly. Had to change it so it reloaded after the page changed. 
    document.addEventListener("mouseover", function(){ 
      $('.scrolly').scrolly({
        offset: function () {
          return $header.height() - 2
        }
      })
    })
  ```
  
  I gave the page the mouseover event listener because every variation I tried of 'onload' didn't trigger the event listener when I went from home --> about --> home. I think this had something to do with react but maybe it doesn't. Too many event listeners to find the perfect one ¯\_(ツ)_/¯. 
  
## Menu Lightbox
  
  The menu is always present, but only visible when the href=#menu is clicked, as seen in the code below:
  
  ```javascript
    $root.on('click', 'a[href="#menu"]', function (event) {
      event.stopPropagation()
      event.preventDefault()

      // Toggle.
      $menu._toggle()
  ```
  
  $menu.toggle toggles the 'is-menu-visible' className which has the css style display:none. Stop propogation and prevent default stops the location from adding #menu on the end and scrolling to the menu section of the page. The menu also has a fade in css transition. 

## AWS Server

  AWS server was also my first implmentation and used EC2, CodeDeploy & Github(instead of S3) and IAM. This wasn't the easiest deployment but I got it done and now the website can be seen at [http://ec2-18-191-187-105.us-east-2.compute.amazonaws.com/](http://ec2-18-191-187-105.us-east-2.compute.amazonaws.com/) It was my first experience using AWS outside of S3 and took a while to figure out. I had to: 
  
    1. Create an EC2 instance
    2. Set up users, groups and roles that could use the instance
    3. Set up puTTy and SSH into the instance
    4. Install git, node, and codedeploy on the instance before installing my repository
    5. Create symbolic links to node, node-waf, npm, and react-scripts
    6. Install pm2 to keep deployment running without an SSH session open
    7. Install nginx to forward from port 80(default broswer port) to port 3000 where the app is live
    
  Next steps would be to host this site on AWS Lambda and figure out SSR!
  
## General Notes
  - The area surrounding the listing text is not a link so when users on mobile use the site they can see the color filter over top removed by clicking but also get rerouted when they click the text. 

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

## Wednesday 2/13/19 4:30pm quill
  - Today going to work on getting my projects hosted on lambda. The deadline is 22nd for my aws free teir I think but I can host on netlify if this doesn't happen before then. 
    - I still hadn't decided on which guide to use first, because I need to host a CRA app and also a node + express app.
      - I'm going to first do the create-react-app https://medium.com/@YatinBadal/rendering-and-serving-a-create-react-app-from-an-express-server-running-within-a-lambda-function-832576a5167e I was hesitant to do this one first because all the babel and webpack stuff is handled for me in CRA and I hadn't messed with it but it will be a good idea to get into it. 
      - Then node & express using the video guide here https://www.youtube.com/watch?v=71cd5XerKss&t=131s because the freecodecamp guide was using something called Claudia and I want to reduce this to the smallest amount of packages. Article found here https://medium.freecodecamp.org/express-js-and-aws-lambda-a-serverless-love-story-7c77ba0eaa35
  - Here we go with the CRA serverless.
    - Found out it is going to be server side rendered *thumbsupemoji*
    - Running `npm install -g serverless`
    - Following this video guide on setting up AWS credentials https://www.youtube.com/watch?v=KngM5bfpttA
     - Using my George user that I used for EC2
     - Added admin access permission
     - Created new access key id
     - ran `serverless config credentials --provider aws --key AKIAIGDYWOMU3DBIQP3Q --secret *****`
    - Ran `echo. > serverless.yml` to make our file
    - Ran `npm i -S serverless-http express` to install express and serverless-http
    - Ran `npm i -D webpack serverless-webpack serverless-offline webpack-node-externals` because 
    >We also want to install the serverless-webpack plugin which will help use all the shiny new JS. The serverless-offline plugin will allow us to deploy our Serverless stack locally. We will use webpack-node-externals to exclude node_modules from our build.
    - Copy pasted into serverless.yml 
    ```
    //serverless.yml

    service: my-project
    plugins:
      - serverless-webpack
      - serverless-offline
    custom:
      webpack:
        webpackConfig: ./webpack.config.js
        includeModules: true
        packager: 'npm'
    provider:
      name: aws
      runtime: nodejs8.10
      stage: dev
      region: eu-west-1
    functions:
      app:
        handler: index.handler
        events:
          - http: ANY /
          - http: 'ANY {proxy+}'
          - cors: true
    ```
      - On first look this shows the path for the webpack config, which I assume is in node_modules. 
        - After writing this I now realize we aren't going to be using react-scripts start anymore
      - I updated `runtime: nodejs8.10` to nodejs10.14.1 and `region: eu-west-1` to us-east-1
      - I see we have the index.handler and that's it. Also CORS is true which will save us headache. 
    - Changing our index.js next. 
      - Changed our index.js file. Wondering if we should use a service worker? 