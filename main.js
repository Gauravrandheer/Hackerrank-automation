let puppeter = require('puppeteer')


let browserlaunched = puppeter.launch({
    headless:false,
    defaultViewport:null
})

browserlaunched.then(function(browserinstance){
    let opennewtab = browserinstance.newPage()
    return opennewtab
}).then(function(newtab){
    let openwebsite = newtab.goto("https://www.pepcoding.com/")
    return openwebsite
}).then(function(){
    console.log("website opened")
})