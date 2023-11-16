
const JsUser = {
    name : "anurg diwakar" ,
    age : 18 ,
    location : "lucknow" ,
    email : "anuragdiwakar5@gmail.com",
    isLoggedIn : false ,

}

//console.log(JsUser["email"])
//console.log(JsUser["age"])
//console.log(JsUser["isLoggedIn"]);

JsUser.email = "ANURAGDIWAKAR@CHATGPT.COM"
Object.freeze(JsUser)
 JsUser.email = "anurag@microsoft.com"

 //console.log(JsUser)

 JsUser.greeting = function(){
    console.log("hello js user");
 }

 console.log(JsUser.greeting());