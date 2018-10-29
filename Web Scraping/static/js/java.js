
function myFunction1()
{
    var obj = document.getElementById("colimg")
    obj.className ='show';
    document.getElementById("colimg").style.visibility='visible';
};
function myFunction2()
{
    document.getElementById("colimg").style.visibility='visible';
    var obj = document.getElementById("kanimg")
    obj.className ='show';
    document.getElementById("kanimg").style.visibility='visible';
};
function myFunction3()
{
    document.getElementById("colimg").style.visibility='visible';
    document.getElementById("kanimg").style.visibility='visible';
    var obj = document.getElementById("nebimg")
    obj.className ='show';
    document.getElementById("nebimg").style.visibility='visible';
};
function myFunction4()
{
    document.getElementById("colimg").style.visibility='visible';
    document.getElementById("kanimg").style.visibility='visible';
    document.getElementById("nebimg").style.visibility='visible';
    var obj = document.getElementById("oklimg")
    obj.className ='show';
    document.getElementById("oklimg").style.visibility='visible';
};
function myFunction5()
{
    document.getElementById("colimg").style.visibility='visible';
    document.getElementById("kanimg").style.visibility='visible';
    document.getElementById("nebimg").style.visibility='visible';
    document.getElementById("oklimg").style.visibility='visible';
    var obj = document.getElementById("sdimg")
    obj.className ='show';
    document.getElementById("sdimg").style.visibility='visible';
};
function myFunction6()
{
    document.getElementById("colimg").style.visibility='visible';
    document.getElementById("kanimg").style.visibility='visible';
    document.getElementById("nebimg").style.visibility='visible';
    document.getElementById("oklimg").style.visibility='visible';
    document.getElementById("sdimg").style.visibility='visible';
    var obj = document.getElementById("teximg")
    obj.className ='show';
    document.getElementById("teximg").style.visibility='visible';
};

function tn() 
{
    document.getElementById("colimg").style.visibility='hidden';
    document.getElementById("kanimg").style.visibility='hidden';
    document.getElementById("nebimg").style.visibility='hidden';
    document.getElementById("oklimg").style.visibility='hidden';
    document.getElementById("sdimg").style.visibility='hidden';
    document.getElementById("teximg").style.visibility='hidden';

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
