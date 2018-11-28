
create the hamburger menu

put create listing in the menu and have it become a lightbox with escape working

put login in the menu

steal the edit profile page from healfly

have the listings paginate 2 at a time


Trying to put the template into create-react-app and am having two issues:


The order that the javascripts are loading is causing an issue: one is that the routes get messed up if they don't load correctly and when you click the menu it brings you to your current address with #menu on the end and doesn't display the menu.
  To fix the javascript loading issue, my first thought was to put the script tags on the index.html in the public folder instead of importing them in app.js and put the js files in the public folder as well. 
  Next there are a few ways I can think to fix this. 
    I really want to be able to import the javascripts, but they rely on each other (one of them is jquery). Another thing I'm thinking of is main.js must be a compilation from webpack or otherwise. So my options are:
    -Making a new main.js with webpack 
    -Using Async and defer in the script tags in html doc
      ---Defering main.js, util.js, scrolly.js and scrollex.js fixed the issue. 
    -<script src="https://cdn.dwolla.com/1/dwolla.js"></script> & const dwolla = window.dwolla;






Another issue seems to be that react isn't handling my css animations correctly. The attributes of the transitions are loading as shown in the styles tab, but the transitions are not occuring. 
  I have tried putting the transitions directly into the public index.html file and it is showing stange behavior: it will apply the styles but the transitions still do not occur and only show the end result.
    This makes me think that the issue is that react is showing the changes automatically and not allowing the transition period to take place. 
    ---The issue was that the body tag was missing class 'is-preload' and some functions in main.js required it to do transitions. Took 4ish or more hours to add a class. That will happen. 

Next issue is that the correct font isn't loading. The font family is correct when I inspect it. 
---I was just misjudging the look of the font, it is actually the correct font but I remember it wasn't when I first started the project.
