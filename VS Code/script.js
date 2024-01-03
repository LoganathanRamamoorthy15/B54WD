// var request = new XMLHttpRequest();
// request.open('GET',"https://restcountries.com/v3.1/all");
// request.send();
// request.onload = function() {
//     var result=JSON.parse(request.response);
//     console.log(result);

//     for(var i=0; i<=result.length; i++) {
//         console.log(result[i].flags.png, result[i].continents);

// }
// }


// (function a(b){
//     for (var i = 0; i <a.length; i++)
//     console.log(a[i]);
// })
// a([2,3,4,5]);

// var arr1 = [1,2,3,4,5];
// var arr2 = [6,453,3,4];
// var res = [...arr1,...arr2];
// console.log(res);

// let arr1 = ["a","b","c"];
// let [a1,a2,a3]= arr1;
// console.log(a3);

// var a = 34;
// var b = 35;
// console.log("The sum of a =",a,"and b=",b, "\n" , a+b);  
// console.log(`The sum of a =
// ${a} and b = ${b}
//  ${a+b}`);


//  function sum(){
//     var a;
//     var b;
//     a+b;
//  }
//  console.log(`The sum of ${sum(3,2)} `);


// class Car{

//    constructor(names,colors)
//    {
//       this.name = names;
//       this.color = colors;
//    }
//    getname(){
//       return `THis is the car ${this.name}, ${this.color}`
//    }

// }
// var a = new Car("Audi","Red");
// var b = new Car("Mercedes","Green");
// var c= b;
// console.log(c.getname());




// class Car{

//    constructor(names,colors)
//    {
//       this.name = names;
//       this.color = colors;
//    }
//    getname(){
//       return `THis is the car Brand ${this.name} & Color is  ${this.color}`
//    }
//    set a1(d){
//       this.name = d;
//    }
// }
// var a = new Car("Audi","Red");
// var b = new Car("Mercedes","Green");
// var c= b;
// a.a1="BMW1";
// console.log(a.name);

// console.log(c.getname());


// var arr = [{name:"John",age:20},{name:"Logan",age:21}]
// var res=arr.map((ele)=>(ele.age+5))
// console.log(res);

// var arr = [1,2,3,4,5,6 ]
// var res = arr.filter((ele)=>(ele%2==0))
// console.log(res);

// var arr = [{name:"John",mark:35},{name:"Logan",mark:55},{name:"Logan2",mark:100}]
// var res=arr.filter((ele)=>ele.mark>35);
// var res2=res.map((ele)=>ele.name);

// console.log(res2);

// var request = new XMLHttpRequest();
// request.open('GET',"https://restcountries.com/v3.1/all");
// request.send();
// request.onload = function() {
//     var result=JSON.parse(request.response);
//     console.log(result);
// }
// console.log(result.population);

//   var res=result.filter((ele)=>ele.population);
//   console.log(res);

var div = document.createElement("div");

div.innerText ="Click";
document.body.append(div);
div.addElementListener("mouseover",()=>div.style.backgroundColor="red");