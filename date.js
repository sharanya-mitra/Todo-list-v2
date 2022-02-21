//jshint esversion: 6
// Language: javascript
module.exports.getdate = function()
{
let today = new Date();
let options = { weekday: "long", 
                day: "numeric", 
                month: "long" };
return today.toLocaleDateString("en-US", options);
}