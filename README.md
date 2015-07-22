Readme

-How to Run

	Download the the entire directory from https://github.com/rc4326/P4-Website-Optimization

-Optimizations made on index.html
	-minify HTML, JS, and CSS
	-async the google font into a javascript font loader
	-async the google analyitics
	-print css only load if printing
	-reduced and compressed images
	-created a thumbnail for the pizza image main page
	
-Optimizations made on pizza.html
	-removed the unecessary pixel changes and simplified the for loop lines - 469-474
	-pulled the scrollTop element out of the for loop and cached it in a variable - line 525
	-forced the .movers into their own paint layer
	
	
	
-Resources
	-https://www.igvita.com/slides/2012/devtools-tips-and-tricks/jank-demo.html (big hint on the scrolling pizza's)
	-https://developer.mozilla.org/en-US/docs/Web/API/Screen/height - for screen height syntax
	-