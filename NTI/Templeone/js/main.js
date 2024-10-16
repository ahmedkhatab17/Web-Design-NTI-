// // var x = 4;
// // x = 5
// //console.log(x);
// // var age = 30;
// // //console.log(age);

// // //String
// // var firstName ="ahmed";
// // var lastName ="ali";
// // var fullName = firstName +" "+ lastName;
// // //console.log('hello '+ fullName);

// // //float
// // var z=11.5;
// //console.log(z);
// //console.log('5');

// //boolean
// // var isGraduate=false;
// //console.log(isGraduate);

// //null
// // var y=null;
// //console.log(y);

// //operation
// //mathmatical operator
// // var num1 =7;
// // var num2 =2+6;
// //console.log(((num1 + (num2 - num2)) * num1 / num2) % 6.125)

// //unaryoperator
// // var m;
// //console.log(typeof(m))

// //comparison operator
// // > < >= <= == === != !==
// //  var x=5;
// //  var y='5';
// // console.log(x===y);

// //logical operator
// //&& || !

// //number methods
// // var number1=100;
// // console.log(100..toString())
// // console.log((12345.2542).toFixed(2))
// // console.log(parseInt(12345.2542))
// // console.log(parseInt((12345.2542).toFixed(2)))
// // console.log(Number.isInteger(100))
// // console.log(Number.isNaN('a'/2))
// // console.log('a'/2)
// // console.log(parseInt(''));
// // console.log(Math.round(99.2));
// // console.log(Math.round(99.5));
// // console.log(Math.ceil(99.2));
// // console.log(Math.floor(99.9));

// // var a=32, d=234, t=34;
// // console.log(Math.min(a,d,t));
// // console.log(Math.max(a,d,t));

// // console.log(2**3)
// // console.log(Math.pow(2,3))
// // console.log((parseInt(Math.round()*100)).toString())
// // console.log((Math.trunc(Math.round()*100)).toString()) //trunc = parseInt

// //string methods
// // let Name='ahmed '
// // console.log(Name[2])
// // console.log(Name.charAt(3))
// // console.log(Name.length)
// // console.log(Name)
// // console.log(Name.trim().length)
// // console.log(Name.toUpperCase())
// // console.log(Name[3].toUpperCase())

// // let text='hello in javascript'
// // console.log(text.length)
// // console.log(text.indexOf('in',8))
// // console.log(text.indexOf('l'))
// // console.log(text.lastIndexOf('l'))
// // console.log(text.slice(6,8))
// // console.log(text.slice(16,18))
// // console.log(text.slice(-3,-1))
// // console.log(text.slice(13))
// // console.log(text.slice(-6).repeat(3))
// // console.log(text.split(" ",2))
// // console.log(text.split("",2))

// // console.log(text)
// // console.log(text.length)
// // console.log(text.substring(text.length-6,text.length-4))
// // console.log(text.substr(0,15))
// // console.log(text.substr(-6))

// // console.log(text.includes('in'))
// // console.log(text.includes('in',8))
// // console.log(text.startsWith('h'))
// // console.log(text.endsWith('T'))

// // if-condition
// //  var gender='male'
// //  if(gender == 'male'){
// //     console.log('he')
// //  }else if(gender == 'female'){
// //     console.log('she')
// //  }else{
// //     console.log('select the gender')
// //  }

// //  var salary=2000
// //  var job= 'doctor'

// //  if(salary < 2000){
// //     console.log('no job')
// //  }else if(salary>= 2000 && salary<= 4000){
// //     if(job='doctor'){
// //         console.log('the doctor salary is 3000')
// //     }else{
// //         console.log('the '+job+' salary average between 2000 : 4000')
// //     }
// //  }else{
// //     console.log(' salary is '+salary)
// //  }

// // //ternary operator
// // //(condition)?true:false

// // var age=30
// // age == 30 ?console.log('age = 30'):console.log('age = '+age)

// // age < 20 ?console.log('younger'):age>=20 && age<=35? console.log('adult'):console.log('older')

// // let a =10
// // a < 10 ?console.log(10):a >= 10 && a <= 40?console.log('10 to 40'):a > 40 ?console.log('> 40'):console.log('unknown')

// // let text = "Your JavaScript";
// // //task 2

// //  if (text.repeat(2).length.toString() === "30") {
// //   console.log("30");
// //  }
// // //task3
// // if (text.charAt(5) === "J") {
// //   console.log("J");
// // }
// // //task 4
// // console.log(text.substr(-6).toLocaleLowerCase());
// // if (typeof(text) == "string") {
// //     console.log("string");
// // }
// // //task 5
// // if ( typeof(text.length) === "number") {
// //   console.log("number");
// // }
// // // //task 6
// // if (text.substr(0,4).repeat(2) === "YourYour") {
// //   console.log("YourYour");
// // }
// // // //task7
// // var degree=65
// // // degree>50 -->fail , 50<=degree>=70 -> good  degree > 70 ->excellent if condition

// // degree < 50 ?console.log("fail"):degree >= 50 && degree <= 70?console.log('good'):console.log('excellent')

// var fName ='sara',age = 30
// console.log(`hello ${fName} my age = ${age}`)

// // switch
// // switch(expression){
// //   case: block of code
// //   case:
// // }

// // var x=5
// // switch(x){
// //   case 3:
// //     console.log('x = 3')
// //     break
// //     case 5:
// //     console.log('x = 5')
// //     break
// //     case 10:
// //     console.log('x = 10')
// //     break
// //     default:
// //       console.log(`default value = ${x}`)
// // }

// array

// var numbers=[1,2,3]
// console.log(numbers)
// console.log(`lenght of array ${numbers}`)
// numbers[0]= 'ahmed'
// console.log(numbers)
// console.log(numbers[0][2].toUpperCase())
// numbers[3]='cairo'
// numbers[4]=true
// console.log(numbers)

// //array methods
// let userinfo=[1,'ali','ahmed',true,35,'0100']
// console.log(userinfo)
// //unshift()
// userinfo.unshift('23')
// console.log(userinfo)
// //shift()
// var start = userinfo.shift()
// console.log(userinfo)
// console.log(start)
// //push()
// userinfo.push('cairo')
// console.log(userinfo)
// //pop()
// console.log(userinfo.pop().toUpperCase())
// console.log(userinfo)

// let mix=[-10, 'ali', true, "10" ,"20 a",false, 100,'sara']
// console.log(mix)
// console.log(mix.indexOf('sara'))

// console.log(mix.sort().reverse())
// console.log((mix[1].slice(2)+mix[3].slice(1,2)))
// console.log()

// mix=[-10, 'ali', true, "10" , "20 a", false, 100, 'sara']
// // console.log(mix)
// // console.log(mix.slice(-5,-1))
// // console.log(mix)

// console.log(mix.splice(2,1,'mixOne','mixTwo'))
// console.log(mix)

// var f='hello java script';
// console.log(f.split(' ').join(' * '))
// console.log(mix.join(' '))
// console.log(mix)

// let num=[1,2,3]
// let str=['a','b','c']
// let names=['sara','ahmed']
// let all=str.concat(num,names)
// console.log(all)

// //task #1
// let myFriends = ["Sara", "Soha", "Ahmed", "Ali"];
// // ['Sara', 'Soha', 'Ahmed']
// console.log(myFriends.splice(0,3))


// //task #2
// let arrOne = ["C", "D", "X"];
// let arrTwo = ["A", "B", "Z"];
// let finalArr = [];
// finalArr=arrTwo.concat(arrOne)
// // Write One Single Line Of Code
// // ["Z", "X", "D", "C", "B", "A"]
// console.log(finalArr.sort().reverse())


// //task 3
// let arr1 = ["A", "C", "X"];
// let arr2 = ["D", "E", "F", "Y"];
// let allArrs = [];//[f,x,y]
// allArrs=arr1.splice(2,1).concat(arr2.splice(2,2))
// allArrs.sort()
// allArrs
// console.log(allArrs.join('').toLocaleLowerCase())
// // console.log(); // fxy
 
// //----------------------// ++ --
// let Zero = 0;
// let counter = 3;
// let my = ["Ahmed", "Maryan", "Elham", "Osama", "Gamal", "Ameer"];
 
// //task #1
// // ["Osama", "Elham", "Maryan", "Ahmed"];
// my.reverse()
// ++Zero ;++Zero ;++counter 
// my=my.splice(Zero,counter)
// console.log(my)

// //task #2
// // ["Elham", "Maryan"]
// --counter
// my=my.splice(--Zero,--counter)
// console.log(my)

// //task #3
// // "Elryan"
// my[--Zero]=my[Zero].slice(Zero,counter)
// my[++Zero]=my[Zero].slice(counter)
// my[--Zero]=my[Zero].concat(my[++Zero])
// my.pop()
// console.log(my.join())
// counter++
// counter++//4
// //task #4
// // "aN"
// my[--Zero]=my[Zero].slice(counter)
// console.log(my[Zero][Zero]+my[Zero][++Zero].toUpperCase())

// print from 10 --> 1
// print the data in userArray
// #note stop at location and skip phone number
// let userArray=['ahmed',30,'phoneNumber',true,'cairo',false]

// for(var i=10; i>0; i--){
//   console.log(i)
// }

// for(var j=0; j<userArray.length; j++){
//   if(userArray[j]==='phoneNumber' ){
//     continue
//   }
//   if(userArray[j] ==='cairo') break; 
//   console.log(userArray[j])
// }


// task 1
function fullName (fName , mName, lName){
    return console.log(fName+mName+lName)
}
fullName('ahmed ','ashraf ','khatab')

// task 2
function printAll(arr){
    for(var i=0; i<arr.length; i++){
        console.log(arr[i])
    }
}
let  fff=['ahmed ','ashraf ','khatab']
printAll(fff)

// task 3
function lookNum(firstNum,endNum,continueNum,breakNum){
    for(firstNum; firstNum<=endNum; firstNum++){
        if(firstNum == continueNum){
            continue;
        }else if(firstNum == breakNum){
            console.log(firstNum)
            break;
        }
        else{
            console.log(firstNum)
        }
    }
}

lookNum(5,10,8,9)
