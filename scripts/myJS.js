//when page is loaded
window.addEvent('domready', function(){

    //check there are multiBox elements on the page before initialising the class
    if (mbImgs.length > 0) {
	    //call multiBox
	    var initMultiBox = new multiBox({
	        mbClass: '.mb',//class you need to add links that you want to trigger multiBox with (remember and update CSS files)
	        container: $(document.body),//where to inject multiBox
	        descClassName: 'multiBoxDesc',//the class name of the description divs
	        path: './players/',//path to mp3 and flv players
	        useOverlay: true,//use a semi-transparent background. default: false
	        maxSize: { w: 600, h: 400 },//max dimensions (width,height) - set to null to disable resizing
	        addDownload: false,//makes media downloadable - only use when website hosted on Windows/ASP server
	        pathToDownloadScript: './scripts/forceDownload.asp',//if above is true, specify path to download script (classicASP and ASP.NET versions included)
	        addRollover: true,//add rollover fade to each multibox link
	        addOverlayIcon: false,//adds overlay icons to images within multibox links
	        addChain: true,//cycle through all images fading them out then in
	        recalcTop: true,//subtract the height of controls panel from top position
	        addTips: true,//adds MooTools built in 'Tips' class to each element (see: http://mootools.net/docs/Plugins/Tips)
	        autoOpen: 0//to auto open a multiBox element on page load change to (1, 2, or 3 etc)
	    })
    }

  
})

