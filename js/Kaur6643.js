var categories1=new Array();
var personal;
var flowerList=new Array();
var name;
var number;
var login;
var campus;

class Flower {
    constructor(category,price,instructions,photo,name,...productID){
    this.category=category;
    this.price=price;
    this.instructions=instructions;
    this.photo=photo;
    this.name=name;
    this.productID=productID;
}
}
class Categories{
    constructor(category,pic){
        this.category=category;
        this.pic=pic;
    }
}
$(document).ready(function(){
    $.ajax({
        type:"get",
        dataType:"json",
        url:"data/A2-Flowers.json",
        success:loadJSON,
        error:function(e){}
    });

});

function loadJSON(data){
   
name=data.personal.myFullName;
number=data.personal.myStudentNumber;
login=data.personal.myLoginName;
campus=data.personal.myCampus;
categories=data.categories;

for(let flow of data.flowerlist){
flowerList.push(new Flower(flow.category,flow.price,flow.instructions,flow.photo,flow.name,flow.productId));
} 

for(let c of data.categories){
    categories1.push(new Categories(c.category,c.pic));
}


mainScreen();
}


function mainScreen(){
    let x;
    $("#header").html(`Assignment2| ${name} | ${number}`);
    $("#list").html("");
    $("#listp").html("");
    for( x=0;x<categories1.length;x++){
        $("#list").append(
            `
            <li id='${x}'>
            <a href="pages/second.html">${categories1[x].category}</a></li>
            `)+
            $("#listp").append(
                `
                <li id='${x}'>
                <img src='images/${categories1[x].pic}'></li>
                `
        )
    }
 
    $("#footer").html(`${login} | ${campus}`);
    }
    $(document).on("click","#list >li",function(){

        localStorage.setItem("Myname",name);
        localStorage.setItem("StudentNumber",number);
        localStorage.setItem("Login",login);
        localStorage.setItem("Campus",campus);
        localStorage.setItem("categoryID",$(this).closest("li").attr("id"));
        localStorage.setItem("flowerList",JSON.stringify(flowerList));
        localStorage.setItem("categoryName",JSON.stringify(categories1));
    });