const puppeteer = require('puppeteer');
(async () => {
    
    const { Client } = require('discord.js-selfbot');
    const client = new Client();
    
    await client.on("ready", () => {
        console.log(`Logged in as ${client.user.tag}!`)
      })
      
    console.log('live now');
  
    let url = 'https://discord.com/login';
  
    let browser = await puppeteer.launch({headless: false, executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', });
  
    let page = await browser.newPage();
  
    let stream_page = await browser.newPage()
    
    page.setDefaultNavigationTimeout(0);
    stream_page.setDefaultNavigationTimeout(0);
    page.setViewport({width: 1366, height: 786})
    stream_page.setViewport({width: 1366, height: 786})
  
      await page.goto(url);
      await stream_page.goto("https://youtube.com/");
  
    client.on("message", msg => {
      
        if (msg.content.includes('+stream'))
        {
          console.log(msg.content)
          console.log(msg.content.split('+stream')[1].trim());
          stream_page.goto(msg.content.split('+stream')[1].trim())
        }
      
        if(msg.content == '+fs')
        {
            console.log(msg.content)
            stream_page.keyboard.press("F");
        }
      
        if(msg.content == '+sa')
        {
            console.log(msg.content)
            stream_page.waitForSelector('#skip-button\:6 > span > button').click();
        }
      
      })
    
      
      client.login("self-bot-token-here");
})();
