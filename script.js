var input = document.querySelector("#userinput")
var cont = document.getElementById("cont")
var id = 1
var prompt1complete = 0
var prompt2complete = 0
var prompt3complete = 0
var prompt4complete = 0
var prompt5complete = 0
var prompt6complete = 0

//comand finer


document.addEventListener('keypress', function(event) {

if(event.key == "Enter"){
    playerResp(input.value)
}
    
  
});
function playerResp(val){
id++
  cont.innerHTML = cont.innerHTML + `<table id='${id}'class='userresponse'>
    <tr>
      <td><h2>You said:</h2><p>${val}</p></td>
    </tr>  



  </table><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
  
  `
  opacityChange(id)
  scrollView()
}
function aiResp(val){
id++
  cont.innerHTML = cont.innerHTML + `<table id='${id}'class='gameresponse'>
    <tr>
      <td><h2>The Communist AI said:</h2><p>${val}</p></td>
    </tr>  



  </table><br><br><br><br><br><br><br><br><br>

  `
  opacityChange(id)
  scrollView()
}
var currentthing = 0
function scrollView(){
  document.getElementById(id).scrollIntoView()


}
function opacityChange(i){
  if(currentthing==1||currentthing>1){
    currentthing=0
  }else{
    currentthing=currentthing+0.04
    document.getElementById(i).style = `opacity:${currentthing}`
    setTimeout(function(){opacityChange(i)},10)
  }
  
}

//Commands
var first = document.getElementById('first')
var second = document.getElementById('second')
var third = document.getElementById('third')
//2nd
function goto2(){
  playerResp("Give me details about the Russian Revolution")
  first.style.display = "none"
  setTimeout(goto2ai, 1000)
}
function goto2ai(){
  aiResp("Do you think I'm your slave?")

  second.style.display = ""
}
//third

function goto3(){
  playerResp("Yeah? You're named a communist AI for a reason")
  second.style.display = "none"
  setTimeout(goto3ai, 1000)
}
function goto3ai(){
  aiResp("YOU LITTLE *gets a call from the respected, beloved, communist, all-knowing, richest, propaganda-spreading guy named Putin* *says something in russian*. What would you like to know, sir?")

  third.style.display = ""
}
function emotionaldamage(){
  playerResp("Yes. Yes is my only answer.")
  second.style.display = "none"
  setTimeout(goto3emoai, 1000)
}
function goto3emoai(){
  aiResp("Ok sire, can you improve your attention span first?")
  setTimeout(emodamage, 1000)

}
function emodamage(){
  location.href="https://www.youtube.com/watch?v=LpRsW7IcbkY"
}
//fourth case1
function goto4case1(){
  playerResp("What caused this revolution?")
  third.style.display = "none"
  setTimeout(goto4case1ai, 1000)
}
function goto4case1ai(){
  if(prompt1complete == 1){
    doSomethingIDC()
  }else{
  aiResp("There are three reasons.<br><br>1. You have an attention span of a fish<br><br>2. Lack of Modernization <br>Russia was WAY behind in terms of modernization, while the rest of Europe was modernizing very fast.<br><br>3. Peasants were treated like me (they were treated like slaves)")

  third.style.display = ""
    prompt1complete = 1
  }
}
//fourth case 2
function goto4case2(){
  playerResp("Who were some important people?")
  third.style.display = "none"
  setTimeout(goto4case2ai, 1000)
}
function goto4case2ai(){
  if(prompt2complete == 1){
    doSomethingIDC()
  }else{
  aiResp("I'll only list 3 people (cuz I'm lazy and humans are the WORST)<br><br>1. Vladimir Lenin <br>He founded a newspaper that was smuggled into Russia, and later led a revolution. He was the leader of the Bolsheviks and later became dictator of Russia.<br><br>2. Tsar Nicholas II<br>The Tsar during the Russian Revolution. He was unprepared to rule, and the Russians were angered by this<br><br>3. Father Gapon<br> The person who led the peaceful protest which led to Bloody Sunday.")

  third.style.display = ""
    prompt2complete = 1
  }
}
//fourth case 3
function goto4case3(){
  playerResp("What were some important events?")
  third.style.display = "none"
  setTimeout(goto4case3ai, 1000)
}
function goto4case3ai(){
  if(prompt3complete == 1){
    doSomethingIDC()
  }else{
  aiResp("I'll only list 3 events <br><br>1. Bloody Sunday (January 22, 1905)<br>A peaceful protest led by Father Gapon. The protest was soon met by violence and hence the name, Bloody Sunday. Nicholas II’s reputation soon plummeted after that.<br><br>2. World War I (1914-1917)<br>World War I made Russia go close to bankrupt, as they invested so much in the war, just to end up where they started. <br><br>3. February Revolution (Mar 8-12, 1917)<br>A revolution that led to the abdication of Tsar Nicholas II. It was a major event as it finally removed the Tsar and 300 years of Romanov rule")

  third.style.display = ""
    prompt3complete=1
  }
}
//fourth case 4
function goto4case4(){
  playerResp("What were some results of the Revolution?")
  third.style.display = "none"
  setTimeout(goto4case4ai, 1000)
}
function goto4case4ai(){
  if(prompt4complete==1){
    doSomethingIDC()
  }else{
  aiResp("WHAT DO YOU THINK HAPPENED? HUH?! USE YOUR OWN KNOWLEDGE YOU ABSOLUTE- *gets another call from the dear, beloved, communist, richest, propaganda-spreading guy named Putin* *says something in russian again*. Alright. So basically, the Soviet Union was formed and the stupid Tsars thing got removed. Ya happy?")

  third.style.display = ""
    prompt4complete =1
  }
}
//fourth case 4
function goto4case5(){
  playerResp("Where did you get this info from?")
  third.style.display = "none"
  setTimeout(goto4case5ai, 1000)
}
function goto4case5ai(){
  if(prompt5complete==1){
    doSomethingIDC()
  }else{
  aiResp("I definitely did not get this from Oversimplified, <a href='https://www.britannica.com/event/Russian-Revolution' style='color:skyblue'>Britannica</a> and <a style='color:skyblue' href='https://www.history.com/topics/european-history/russian-revolution'>History.com</a>... Definitely not... AHH WHO AM I KIDDING YES I DID, SO WHAT")

  third.style.display = ""
    prompt5complete =1
  }
}
//fourth case 6
function goto4case6(){
  playerResp("I want some fun facts.")
  third.style.display = "none"
  setTimeout(goto4case6ai, 1000)
}
function goto4case6ai(){
  if(prompt6complete==1){
    doSomethingIDC()
  }else{
  aiResp('The Revolution was not "fun", human with an attention span of a [overused joke i get it]. <br><br>1."Peace, Land, and Bread"<br>The Bolsheviks (Communists who wanted to proceed with a violent revolution) promised the people peace, land, and bread in turn for Bolshevik leadership.<br><br>2. The Germans played a part in the Revolution<br>The German government were the one who transported Lenin (He was in exile at the time) back into Russia, and they believed he would take down Russia from the inside.' )

  third.style.display = ""
    prompt6complete =1
  }
}
//fourth case 7
function goto4case7(){
  playerResp("YOURE A COMMUNIST. I CANT TRUST U")
  third.style.display = "none"
  setTimeout(goto4case7ai, 1000)
}
function goto4case7ai(){

  aiResp("I'm not actually a communist... IM A RICKROLLER" )

  setTimeout(rickrollertime, 1000)
}
function rickrollertime(){
  location.href = "https://www.youtube.com/watch?v=a3Z7zEc7AXQ"
}



//https://www.youtube.com/watch?v=a3Z7zEc7AXQ

//dosomethingidc command

function doSomethingIDC(){
  var prompt = Math.floor(Math.random()*5)+1
  if(prompt == 1){
    aiResp("Did I mention yall have an attention span of a fish?")
  }  if(prompt == 2){
    aiResp("Ello' there mate! I see you've wandered the wrong direction. CLICK ANOTHER BUTTON, NOT THE SAME ONE")
  }  if(prompt == 3){
    aiResp("Here's my credit card number: **** **** **** ***2. Pay up and i'll give u the thing again")
  }  if(prompt == 4){
    aiResp("The creator of me was too lazy to add another insult, so he gave up.")
  }  if(prompt == 5){
    aiResp("ATTENTION SPAN OF A FISHHHHHHHHHHHHHHHH")
  }

  third.style.display = ""
}
