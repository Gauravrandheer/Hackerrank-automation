const loginLink = "https://www.hackerrank.com/auth/login";

let puppeteer = require("puppeteer")
let codefile = require("./code.js")

let browserlaunched = puppeteer.launch({
    headless:false,
    defaultViewport:null,
    args:['--start-maximized']

})

let page 
let selectorforemail = "input[id='input-1']"
let selectorforpassword = "input[id='input-2']"
let email = "depihe6317@cupbest.com"
let password = "mnbvcxz"
browserlaunched.then(function(browserinstance){
    let opennewtab = browserinstance.newPage()
    return opennewtab
}).then(function(newtab){
    page = newtab
   let openwebsite = newtab.goto(loginLink)
   return openwebsite
}).then(function(){
    let typeemail = page.type(selectorforemail,email,{delay:100})
    return typeemail
}).then(function(){
    let typepassword = page.type(selectorforpassword,password,{delay:100})
    return typepassword
}).then(function(){
    let loginpromise = page.click("button[type='submit']",{delay:100})
    return loginpromise
}).then(function(){
    let algowillbeclicked = waitandclick('.topic-card a[data-cd-topic-slug="algorithms"]',page)
    return algowillbeclicked
}).then(function(){
    let warmpwillbeclicked =  waitandclick('input[value="warmup"]', page)
    return warmpwillbeclicked
}).then(function(){
    let challengepromise = page.$$('.challenge-submit-btn button',{delay:100})
    return challengepromise
}).then(function(questionarr){g
    console.log(questionarr.length)
    // let questionwillbesoved = questionsolver(questionarr[1],codefile.answers[0],page)
    for(let i=1;i<questionarr.length;i++){
        questionsolver(questionarr[i],codefile.answers[i-1],page)
    }
}).then(function(){
    console.log("work is done")
})



function waitandclick(selector,cpage){
    return new Promise(function(resolve,reject){
        let waitforpromise = cpage.waitForSelector(selector)
        waitforpromise.then(function(){
                let clickalgo = cpage.click(selector,{delay:100})
                return clickalgo
        }).then(function(){
            return resolve()
        }).catch(function(){
            return reject()
        })
    })
}

function questionsolver(questions,answers,cpage){
    new Promise(function(resolve,reject){
        let questionwillbeclicked = questions.click()
        questionwillbeclicked.then(function(){
            let customiputwillbeclicked = waitandclick('input[class="checkbox-input"]',page)
            return customiputwillbeclicked
        }).then(function(){
            return cpage.waitForSelector('.text-area.custominput')
        }).then(function(){
            return page.type('.text-area.custominput',answers,{delay:5})
        }).then(function(){
            let controlisdown = page.keyboard.down('Control')
            return controlisdown
        }).then(function(){
            let Aispressed = page.keyboard.press('A')
            return Aispressed
        }).then(function(){
            let Xispressed = page.keyboard.press('X')
            return Xispressed
        }).then(function(){
            let controlisup = page.keyboard.up('Control')
            return controlisup
        }).then(function(){
            let editorwillbeclicked = page.click('div[class="lines-content monaco-editor-background"]')
            return editorwillbeclicked
        }).then(function(){
            let controlisdown = page.keyboard.down('Control')
            return controlisdown
        }).then(function(){
            let Aispressed = page.keyboard.press('A')
            return Aispressed
        }).then(function(){
            let Vispressed = page.keyboard.press('V')
            return Vispressed
        }).then(function(){
            let controlisup = page.keyboard.up('Control')
            return controlisup
        }).then(function(){
           let submitbuttonispressed = page.click('.hr-monaco-submit',{delay:5})
          return submitbuttonispressed
        }).then(function(){
           resolve()
        }).then(function(err){
            console.log(err)
        })
    })
}