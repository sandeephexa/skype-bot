var builder = require("botbuilder");
var restify = require("restify");
var server = restify.createServer();
const MICROSOFT_APP_ID = "d105ed4b-a5a0-4423-8fd4-61932d183b3f";
const MICROSOFT_APP_PASSWORD = "DooeZfWb9ktfrxVwctrxPf4";
//setting up restify server

server.listen(process.env.port || process.env.PORT || 3001, function()
{
    console.log("%s server is listening at %s",server.name,server.url);
});

//create chat connector to communicate with bot framework

var connector = new builder.ChatConnector({
appId : process.env.MICROSOFT_APP_ID,
appPassword : process.env.MICROSOFT_APP_PASSWORD
});

// listen for meesages from user

server.post('api/messages',connector.listen());

// Receive messages from the user and respond by echoing 

var bot =  new builder.UniversalBot(connector,function(session)
{
    session.send("You said %s",session.message.text);
});   
