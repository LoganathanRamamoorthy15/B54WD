class Person{
    constructor(name,age,gender,city,state) {
       this.name = name;
       this.age = age;
       this.gender = gender;
       this.city = city;
       this.state = state;
       
    }
    getName(){
       return `    This is My Name ${this.name}
                   This is My age ${this.age}
                   This is My gender ${this.gender}
                   This is My city ${this.city}
                   This is My state ${this.state}`;
    }
 }
    var a =new Person("John","25","Male","Chennai","TN");
    console.log(a.getName());
 
 