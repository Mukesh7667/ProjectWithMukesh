var messages = [], //array that hold the record of each string in chat
  lastUserMessage = "", //keeps track of the most recent input string from the user
  botMessage = "", //var keeps track of what the chatbot is going to say
  botName = 'Chatbot', //name of the chatbot
  talking = true; //when false the speach function doesn't work
function chatbotResponse() {
  talking = true;
  botMessage = "I'm confused"; //the default message

  if (lastUserMessage === 'hi' || lastUserMessage =='hello') {
    const hi = ['hi','howdy','hello']
    botMessage = hi[Math.floor(Math.random()*(hi.length))];;
  }
else if (lastUserMessage === 'ok'){
  botMessage = 'How can i help you!';
}
  else if (lastUserMessage === 'name') {
    botMessage = 'My name is ' + botName;
  }
  else if(lastUserMessage === 'how are you?'){
    botMessage = 'I am fine! what about you';
  }
  else if(lastUserMessage === 'who created you?'){
    botMessage = 'created by MUKESH KUMAR YADAV';
  }
  else if(lastUserMessage === 'can you solve my problem?'){
    botMessage = 'ofcourse!';
  }
  else if(lastUserMessage === 'oh nice'){
    botMessage = 'thanks!';
  }
  else if(lastUserMessage === 'you know me?' || lastUserMessage === 'you know me'){
    botMessage = 'I dont know! but I can guess you are a human.';
  }
 else if(lastUserMessage === 'I love you' || lastUserMessage === 'i love you' || lastUserMessage === 'love you'){
    botMessage = 'sorry! I am a ' +botName+ 'I cannot understand feelings.';
    
  }
  else if(lastUserMessage === 'Thanks' || lastUserMessage === 'thanks'|| lastUserMessage === 'thank you' ||lastUserMessage === 'Thank You'|| lastUserMessage === 'thank you so much'){
    botMessage = 'Your Welcome! visit again!';
  } 
  else if(lastUserMessage === 'who is mukesh kumar yadav' || lastUserMessage === 'Who is Mukesh Kumar Yadav') {
    botMessage = 'He is a student who studiying in B tech IT Final Year, From DR MGR EDUCATIONAL AND RESEARCH INSTITUTE MADURAVOYAL CHENNAI. He is also created chatBot. He is from Bihar which is the amazing place in india as well as most popular place in the world.';
  }
  else if(lastUserMessage === 'I am going to chennai'){
    botMessage = 'ohhhh! nice! happy journey';
  }
  else if(lastUserMessage === 'what is java?' || lastUserMessage === 'what about java') {
    botMessage = 'Java is an Object Oriented Programming language. java is a very famous and popular programming language. which is created by james gogslin in yera of 1987.';
  }
  else if(lastUserMessage === 'i love uhh'){
    botMessage = 'chal nikal bhosri ke.';
  }





//Numbers
else if(lastUserMessage === 'counting'){
  botMessage = '1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 60 61 62 63 64 65 66 67 68 69 70 71 72 73 74 75 76 77 78 79 80 81 82 83 84 85 86 87 88 89 90 91 92 93 94 95 96 97 98 99 100';
}
else if(lastUserMessage === 'counting in romam'){
  botMessage = 'i ii iii iv v vi vii viii ix x ';
}
else if(lastUserMessage === '2+2'){
  botMessage = '4';
}
else if(lastUserMessage === '1+1'){
  botMessage = '1';
}


}
function newEntry() {
  //if the message from the user isn't empty then run 
  if (document.getElementById("chatbox").value != "") {
    //pulls the value from the chatbox ands sets it to lastUserMessage
    lastUserMessage = document.getElementById("chatbox").value;
    //sets the chat box to be clear
    document.getElementById("chatbox").value = "";
    //adds the value of the chatbox to the array messages
    messages.push(lastUserMessage);
    //Speech(lastUserMessage);  //says what the user typed outloud
    //sets the variable botMessage in response to lastUserMessage
    chatbotResponse();
    //add the chatbot's name and message to the array messages
    messages.push("<b>" + botName + ":</b> " + botMessage);
    // says the message using the text to speech function written below
    Speech(botMessage);
    //outputs the last few array elements of messages to html
    for (var i = 1; i < 50; i++) {
      if (messages[messages.length - i])
        document.getElementById("chatlog" + i).innerHTML = messages[messages.length - i];
    }
  }
}

//text to Speech
//https://developers.google.com/web/updates/2014/01/Web-apps-that-talk-Introduction-to-the-Speech-Synthesis-API
function Speech(say) {
  if ('speechSynthesis' in window && talking) {
    var utterance = new SpeechSynthesisUtterance(say);
    speechSynthesis.speak(utterance);
  }
}

//runs the keypress() function when a key is pressed
document.onkeypress = keyPress;
//if the key pressed is 'enter' runs the function newEntry()
function keyPress(e) {
  var x = e || window.event;
  var key = (x.keyCode || x.which);
  if (key == 13 || key == 3) {
    //runs this function when enter is pressed
    newEntry();
  }
  if (key == 38) {
    console.log('hi')
      //document.getElementById("chatbox").value = lastUserMessage;
  }
}

//clears the placeholder text ion the chatbox
//this function is set to run when the users brings focus to the chatbox, by clicking on it
function placeHolder() {
  document.getElementById("chatbox").placeholder = "";
}