
function myFunction1()
{
    document.getElementById("img-id").src = "static/images/Colorado.png";
};
function myFunction2()
{
    document.getElementById("img-id").src = "static/images/Kansas.png";
};
function myFunction3()
{
    document.getElementById("img-id").src = "static/images/Nebraska.png";
};
function myFunction4()
{
    document.getElementById("img-id").src = "static/images/Oklahoma.png";
};
function myFunction5()
{
    document.getElementById("img-id").src = "static/images/South Dakota.png";
};
function myFunction6()
{
    document.getElementById("img-id").src = "static/images/Texas.png";
};

function tn() 
{
    // The image here is a blank one, so nothing is shown.  This is also the value for the initial 
    // image in the html template
    document.getElementById("img-id").src = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
}

//var imgArray = new Array["../../static/images/tornado1.jpg","../../static/images/tornado2.jpg","../../static/images/tornado3.jpg", "../../static/images/tornado4.jpg","../../static/images/tornado5.jpg","../../static/images/tornado6.jpg","../../static/images/tornado7.jpg", "../../static/images/tornado8.jpg","../../static/images/tornado10.jpg", "../../static/images/tornado11.jpg"];
//var Image: src="{{ url_for('static', filename= 'images/tornado1.jpg')}}"
// var imgCount = 0;
// function startTime() {

//     if(imgCount == imgArray.length) {
//         imgCount = 0;
//     }

//     document.getElementById("img1").src = imgArray[imgCount];
//     imgCount++;

//     setTimeout("startTime()", 5000);
// };


function disp_img()
{
    var obj = document.getElementById("tornadoimg")
    obj.className ='show';
    document.getElementById("tornadoimg").style.visibility='visible';
};




 
// img.onload = function() {
 
// //   div.innerHTML += '<img src="'+img.src+'" />'; 
//  div.innerHTML = img.src;

//  img.src ="https://wallpapercave.com/wp/JSzp1Qq.jpg";
// };
