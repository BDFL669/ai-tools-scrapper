const puppeteer = require('puppeteer');
const xlxs = require('xlsx');




async function scraper() {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto('https://www.futuretools.io/');
  
  // Scroll down the page to load new content
  await page.evaluate(async () => {
    await new Promise(resolve => {
      let totalHeight = 0;
      let distance = 100;
      let timer = setInterval(() => {
        let scrollHeight = document.body.scrollHeight;
        window.scrollBy(0, distance);
        totalHeight += distance;

        if(totalHeight >= scrollHeight){
          clearInterval(timer);
          resolve();
        }
      }, 200);
    });
  });

  // Extract links from the page
  links = await page.$$eval('.main-content-box a', link => link.map(a => a.href));
  console.log(links);
  const aoaLinks = links.map(l => [l]);

  const wb = xlxs.utils.book_new();
  const ws = xlxs.utils.aoa_to_sheet(aoaLinks);
  xlxs.utils.book_append_sheet(wb, ws);
  xlxs.writeFile(wb, "descriptions.xlsx");

  // Close the browser
  await browser.close();
}

scrap