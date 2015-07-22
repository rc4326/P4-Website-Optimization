Readme

-How to Run
		Download the the entire directory from https://github.com/rc4326/P4-Website-Optimization and open Index.html for the main page and open views/pizza.html for the pizza page

-Optimizations made on index.html
	-minify HTML, JS, and CSS
	-async the google font into a javascript font loader
	-async the google analyitics
	-print css only load if printing
	-reduced and compressed images
	-created a thumbnail for the pizza image main page
	
-Optimizations made on pizza.html
	-removed the unecessary pixel changes and simplified the for loop lines - 471-476
	-pulled the scrollTop element out of the for loop and cached it in a variable - line 528
	-forced the .movers into their own paint layer
	-multiple lines 430,433,436,471,527 changed query selectors to much faster getElementbyClassname methods
	-line 472 - cached the number of randompizzas into a variable so it didn't reiterate within the FOR LOOP
	-line 491 pulled pizzaDiv elements out of the For Loop so they weren't called each iteration
	
	
	
-Resources
	-https://www.igvita.com/slides/2012/devtools-tips-and-tricks/jank-demo.html (big hint on the scrolling pizza's)
	-https://developer.mozilla.org/en-US/docs/Web/API/Screen/height - for screen height syntax
	-http://javascript-minifier.com/ - minfy javascript
	-http://cssminifier.com/ - minify css
	-http://www.willpeavy.com/minifier/ - minify html
	-https://developers.google.com/speed/pagespeed/insights/ - for pagespeed metrics
	