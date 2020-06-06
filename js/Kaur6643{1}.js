var flowerList=new Array();
var categoryName=new Array();
var categoryID;
$(document).ready(function() {

    name=localStorage.getItem("Myname");
    studentNumber=localStorage.getItem("StudentNumber");
    login=localStorage.getItem("Login");
    campus=localStorage.getItem("Campus");
    categoryID=localStorage.getItem("categoryID");
    flowerList=JSON.parse(localStorage.getItem("flowerList"));
    categoryName=JSON.parse(localStorage.getItem("categoryName"))
   
$("#header").html(`Assingment2 |${name} | ${studentNumber} <br>${categoryName[categoryID].category}`);

   
   
    $("#main").html("");

    for(let x=0;x<flowerList.length;x++){
        if(categoryName[categoryID].category===flowerList[x].category){
        $("#main").append(`<table><tr><td><img src='../images/${flowerList[x].photo}'></td><td>${flowerList[x].name}<br>${flowerList[x].instructions}<br>Price:${flowerList[x].price}</td></tr><table>`);
    }
}

$("#footer").html(`<a href='../index.html'><img src='../images/sign.jpg' height:50px width:50px></a></br>${login} | ${campus}`);


});
