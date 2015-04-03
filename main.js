//
//
//var videoIndex=0;
//        var lightBlue ="#658DA6"
//        var mediumBlue = "#2E4959"
//        var darkBlue = "#131F26"
//        document.getElementById("headline-name").onclick=function() {
//            document.getElementById("media-grid").style.display="none";
//        }
//        document.getElementById("video-editing").onclick=function() {
//            showPromo();
//            document.getElementById("media-grid").style.display="block";
////            document.getElementById("next").style.display="none";
////            document.getElementById("right-next").style.display="none";
//            document.getElementById("dekamwedding").style.display="none";
//            document.getElementById("video-editing").style.borderLeftColor="white";
//            document.getElementById("web-development").style.borderLeftColor=darkBlue;
//
//        }
//        
//        
//         document.getElementById("web-development").onclick=function() {
//            document.getElementById("media-grid").style.display="block";
//            document.getElementById("dekamwedding").style.display="block";
//            document.getElementById("web-development").style.borderLeftColor="white";
//            document.getElementById("video-editing").style.borderLeftColor=darkBlue;
//
//             removeALL();
//        }
//        
//        var showPromo = function() {
//            document.getElementById("tutorial").style.display="block";
//            document.getElementById("man-o-war").style.display="none";
//            document.getElementById("abe-parker").style.display="none";
//            console.log("Showing Promo")
//        }
//         var showGolf = function() {
//            document.getElementById("man-o-war").style.display="block";
//            document.getElementById("tutorial").style.display="none";
//            document.getElementById("abe-parker").style.display="none";
//            console.log("Showing Golf")
//
//        }
//        var showAbe = function() {
//            document.getElementById("man-o-war").style.display="none";
//            document.getElementById("tutorial").style.display="none";
//            document.getElementById("abe-parker").style.display="block";
//            console.log("Showing Abe")
//        }
//        var removeALL = function() {
//            document.getElementById("man-o-war").style.display="none";
//            document.getElementById("tutorial").style.display="none";
//            document.getElementById("abe-parker").style.display="none";
//            document.getElementById("next").style.display="none";
//            console.log("VIDEO REMOVED")
//        }
//        
//        
//        document.getElementById("right-next").onclick=function(){
//            videoIndex=videoIndex + 1
//            console.log("Clicked Next")
//        
//        if (videoIndex === 0) {
//            showPromo();
//        } else if (videoIndex === 1) {
//            showGolf();
//        } else if (videoIndex === 2) {
//            showAbe();
//        } else if (videoIndex === 3) {
//            videoIndex = 0;
//            showPromo();
//        }
//        }
//
//        document.getElementById("left-next").onclick=function(){
//            videoIndex=videoIndex - 1
//            console.log("Clicked Back")
//        
//        if (videoIndex === 0) {
//            showPromo();
//        } else if (videoIndex === 1) {
//            showGolf();
//        } else if (videoIndex === 2) {
//            showAbe();
//        } else if (videoIndex === -1) {
//            videoIndex = 2;
//            showAbe();
//        }
//        }       
