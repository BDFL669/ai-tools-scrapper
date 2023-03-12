const puppeteer = require('puppeteer');
const xlxs = require('xlsx');


const dataArray = [
    "https://www.futuretools.io/tools/mem",
    "https://www.futuretools.io/tools/soundful",
    "https://www.futuretools.io/tools/character-gpt",
    "https://www.futuretools.io/tools/quizgrowth",
    "https://www.futuretools.io/tools/waverly",
    "https://www.futuretools.io/tools/instanovel",
    "https://www.futuretools.io/tools/bito",
    "https://www.futuretools.io/tools/phosus",
    "https://www.futuretools.io/tools/ghostwrite",
    "https://www.futuretools.io/tools/mightygpt",
    "https://www.futuretools.io/tools/twitter-bio-generator",
    "https://www.futuretools.io/tools/mark-copy-ai",
    "https://www.futuretools.io/tools/ghostwryter",
    "https://www.futuretools.io/tools/promptstacks",
    "https://www.futuretools.io/tools/is-this-image-nsfw",
    "https://www.futuretools.io/tools/localio-ai",
    "https://www.futuretools.io/tools/gpt-for-sheets",
    "https://www.futuretools.io/tools/magic-thumbnails",
    "https://www.futuretools.io/tools/paper-brain",
    "https://www.futuretools.io/tools/blubi-ai",
    "https://www.futuretools.io/tools/anytweet-com",
    "https://www.futuretools.io/tools/tabletalk",
    "https://www.futuretools.io/tools/getaiway",
    "https://www.futuretools.io/tools/photor",
    "https://www.futuretools.io/tools/keywrds-ai",
    "https://www.futuretools.io/tools/designs-ai",
    "https://www.futuretools.io/tools/jaq-n-jil",
    "https://www.futuretools.io/tools/rephrasee",
    "https://www.futuretools.io/tools/saas-library",
    "https://www.futuretools.io/tools/ordinary-prompts",
    "https://www.futuretools.io/tools/artsmart-ai",
    "https://www.futuretools.io/tools/ink",
    "https://www.futuretools.io/tools/midjourney-prompt-tool",
    "https://www.futuretools.io/tools/supermeme-ai",
    "https://www.futuretools.io/tools/donotpay",
    "https://www.futuretools.io/tools/applicant-ai",
    "https://www.futuretools.io/tools/atonce",
    "https://www.futuretools.io/tools/scribble-ai",
    "https://www.futuretools.io/tools/tldr-this",
    "https://www.futuretools.io/tools/pandora-avatars",
    "https://www.futuretools.io/tools/leiapix",
    "https://www.futuretools.io/tools/stylized",
    "https://www.futuretools.io/tools/vanceai-image-upscaler",
    "https://www.futuretools.io/tools/genieai",
    "https://www.futuretools.io/tools/bluewillow",
    "https://www.futuretools.io/tools/tweet-to-video",
    "https://www.futuretools.io/tools/gimme-summary-ai",
    "https://www.futuretools.io/tools/magicblog",
    "https://www.futuretools.io/tools/promptomania",
    "https://www.futuretools.io/tools/ai-photos",
    "https://www.futuretools.io/tools/ai-office-bot",
    "https://www.futuretools.io/tools/booth-ai",
    "https://www.futuretools.io/tools/smoking-robot-ai",
    "https://www.futuretools.io/tools/ai-depot",
    "https://www.futuretools.io/tools/all-things-ai",
    "https://www.futuretools.io/tools/contents-com",
    "https://www.futuretools.io/tools/eleven-labs",
    "https://www.futuretools.io/tools/manna",
    "https://www.futuretools.io/tools/campbell",
    "https://www.futuretools.io/tools/godly",
    "https://www.futuretools.io/tools/metavoice-studio",
    "https://www.futuretools.io/tools/vivid",
    "https://www.futuretools.io/tools/mason",
    "https://www.futuretools.io/tools/nightcafe-creator",
    "https://www.futuretools.io/tools/bardeen",
    "https://www.futuretools.io/tools/blocksurvey",
    "https://www.futuretools.io/tools/resumai",
    "https://www.futuretools.io/tools/checkforai",
    "https://www.futuretools.io/tools/voiceflow",
    "https://www.futuretools.io/tools/sudowrite",
    "https://www.futuretools.io/tools/playlistai",
    "https://www.futuretools.io/tools/langotalk",
    "https://www.futuretools.io/tools/checklist-gg",
    "https://www.futuretools.io/tools/fingerprint-for-success",
    "https://www.futuretools.io/tools/corrector-app",
    "https://www.futuretools.io/tools/giftasticai",
    "https://www.futuretools.io/tools/text-gpt",
    "https://www.futuretools.io/tools/content-at-scale-ai-detector",
    "https://www.futuretools.io/tools/seo-ai",
    "https://www.futuretools.io/tools/trudo",
    "https://www.futuretools.io/tools/assemblyai",
    "https://www.futuretools.io/tools/discuroai",
    "https://www.futuretools.io/tools/monkeylearn",
    "https://www.futuretools.io/tools/re-tune",
    "https://www.futuretools.io/tools/explain-like-i-m-five",
    "https://www.futuretools.io/tools/waymark",
    "https://www.futuretools.io/tools/tweet-hunter",
    "https://www.futuretools.io/tools/upstream-ai",
    "https://www.futuretools.io/tools/chatgpt-for-siri",
    "https://www.futuretools.io/tools/we-made-a-story",
    "https://www.futuretools.io/tools/ailab-tools",
    "https://www.futuretools.io/tools/studio",
    "https://www.futuretools.io/tools/synthesys-x",
    "https://www.futuretools.io/tools/digital-first-ai",
    "https://www.futuretools.io/tools/prezo",
    "https://www.futuretools.io/tools/dreamily",
    "https://www.futuretools.io/tools/ai-social-bio",
    "https://www.futuretools.io/tools/bannerbear",
    "https://www.futuretools.io/tools/gpt-2-output-detector",
    "https://www.futuretools.io/tools/aihelperbot",
    "https://www.futuretools.io/tools/peopleai",
    "https://www.futuretools.io/tools/promptlayer",
    "https://www.futuretools.io/tools/codeium",
    "https://www.futuretools.io/tools/magician-for-figma",
    "https://www.futuretools.io/tools/contentin",
    "https://www.futuretools.io/tools/explainthis-ai",
    "https://www.futuretools.io/tools/marketingblocks-ai",
    "https://www.futuretools.io/tools/suenagringo",
    "https://www.futuretools.io/tools/effortless-email",
    "https://www.futuretools.io/tools/targum-video",
    "https://www.futuretools.io/tools/uminal",
    "https://www.futuretools.io/tools/you-com",
    "https://www.futuretools.io/tools/sense",
    "https://www.futuretools.io/tools/project-description-generator",
    "https://www.futuretools.io/tools/languagepro",
    "https://www.futuretools.io/tools/promptextend",
    "https://www.futuretools.io/tools/endel",
    "https://www.futuretools.io/tools/moises-app",
    "https://www.futuretools.io/tools/papercup",
    "https://www.futuretools.io/tools/altered",
    "https://www.futuretools.io/tools/audo-ai",
    "https://www.futuretools.io/tools/context",
    "https://www.futuretools.io/tools/avanzai",
    "https://www.futuretools.io/tools/skipvid",
    "https://www.futuretools.io/tools/timemaster-ai",
    "https://www.futuretools.io/tools/cookup-ai",
    "https://www.futuretools.io/tools/meeple",
    "https://www.futuretools.io/tools/a-million-dollar-idea",
    "https://www.futuretools.io/tools/reachout-ai",
    "https://www.futuretools.io/tools/iris-ai",
    "https://www.futuretools.io/tools/astria",
    "https://www.futuretools.io/tools/buildt",
    "https://www.futuretools.io/tools/httpie",
    "https://www.futuretools.io/tools/krisp",
    "https://www.futuretools.io/tools/lovo-ai",
    "https://www.futuretools.io/tools/lumen5",
    "https://www.futuretools.io/tools/clipmaker",
    "https://www.futuretools.io/tools/steve-ai",
    "https://www.futuretools.io/tools/grammarly",
    "https://www.futuretools.io/tools/chatgpt-on-your-terminal",
    "https://www.futuretools.io/tools/seocopy-ai",
    "https://www.futuretools.io/tools/flowgpt",
    "https://www.futuretools.io/tools/mage-space",
    "https://www.futuretools.io/tools/picsart",
    "https://www.futuretools.io/tools/codesquire",
    "https://www.futuretools.io/tools/the-fy-studio",
    "https://www.futuretools.io/tools/ipso-ai",
    "https://www.futuretools.io/tools/spatial-ai",
    "https://www.futuretools.io/tools/ai-writer",
    "https://www.futuretools.io/tools/reply-io",
    "https://www.futuretools.io/tools/question-base",
    "https://www.futuretools.io/tools/repurpose-io",
    "https://www.futuretools.io/tools/cohere",
    "https://www.futuretools.io/tools/glean-ai",
    "https://www.futuretools.io/tools/mara",
    "https://www.futuretools.io/tools/olli-ai",
    "https://www.futuretools.io/tools/slidesai",
    "https://www.futuretools.io/tools/dreamlike-art",
    "https://www.futuretools.io/tools/towords",
    "https://www.futuretools.io/tools/prompt-box",
    "https://www.futuretools.io/tools/explore-ai",
    "https://www.futuretools.io/tools/gift-box",
    "https://www.futuretools.io/tools/imagine-me",
    "https://www.futuretools.io/tools/perplexity-ai",
    "https://www.futuretools.io/tools/supernormal",
    "https://www.futuretools.io/tools/scispace-by-typeset",
    "https://www.futuretools.io/tools/paper-wizard",
    "https://www.futuretools.io/tools/web-chatgpt",
    "https://www.futuretools.io/tools/longshot-ai",
    "https://www.futuretools.io/tools/runday",
    "https://www.futuretools.io/tools/mindsmith",
    "https://www.futuretools.io/tools/maigic-book",
    "https://www.futuretools.io/tools/detangleai",
    "https://www.futuretools.io/tools/ai-portrait-generator",
    "https://www.futuretools.io/tools/aitogrow",
    "https://www.futuretools.io/tools/zoomscape-ai",
    "https://www.futuretools.io/tools/tweept3",
    "https://www.futuretools.io/tools/mokker-ai",
    "https://www.futuretools.io/tools/tekst",
    "https://www.futuretools.io/tools/tubebuddy",
    "https://www.futuretools.io/tools/superreply",
    "https://www.futuretools.io/tools/ansy-ai",
    "https://www.futuretools.io/tools/maker-ai",
    "https://www.futuretools.io/tools/tweet-assist-app",
    "https://www.futuretools.io/tools/deepzen",
    "https://www.futuretools.io/tools/ted-smrzr",
    "https://www.futuretools.io/tools/chatgpt-cheat-sheet",
    "https://www.futuretools.io/tools/anime-ai",
    "https://www.futuretools.io/tools/rizz-keyboard",
    "https://www.futuretools.io/tools/verbatik",
    "https://www.futuretools.io/tools/100-ai-prompts",
    "https://www.futuretools.io/tools/quickvid",
    "https://www.futuretools.io/tools/chatgpt-for-chrome",
    "https://www.futuretools.io/tools/chatgpt-for-google",
    "https://www.futuretools.io/tools/promptheus",
    "https://www.futuretools.io/tools/merlin",
    "https://www.futuretools.io/tools/god-in-a-box",
    "https://www.futuretools.io/tools/bff",
    "https://www.futuretools.io/tools/macgpt",
    "https://www.futuretools.io/tools/hubble",
    "https://www.futuretools.io/tools/tweetemote",
    "https://www.futuretools.io/tools/cover-letter-ai",
    "https://www.futuretools.io/tools/ai-helpers",
    "https://www.futuretools.io/tools/ubiai",
    "https://www.futuretools.io/tools/playground-ai",
    "https://www.futuretools.io/tools/aigur",
    "https://www.futuretools.io/tools/inworld",
    "https://www.futuretools.io/tools/browse-ai",
    "https://www.futuretools.io/tools/boomy",
    "https://www.futuretools.io/tools/tutorai",
    "https://www.futuretools.io/tools/andi",
    "https://www.futuretools.io/tools/looka",
    "https://www.futuretools.io/tools/inworld-ai",
    "https://www.futuretools.io/tools/neutronfield",
    "https://www.futuretools.io/tools/genius-sheets",
    "https://www.futuretools.io/tools/mubert",
    "https://www.futuretools.io/tools/favird",
    "https://www.futuretools.io/tools/blackink-ai",
    "https://www.futuretools.io/tools/magic-prints",
    "https://www.futuretools.io/tools/daft-art",
    "https://www.futuretools.io/tools/autodraw",
    "https://www.futuretools.io/tools/there-s-an-ai-for-that",
    "https://www.futuretools.io/tools/voicepods",
    "https://www.futuretools.io/tools/swagai",
    "https://www.futuretools.io/tools/penelope-ai",
    "https://www.futuretools.io/tools/brandfort-co",
    "https://www.futuretools.io/tools/yourmove",
    "https://www.futuretools.io/tools/mentioned",
    "https://www.futuretools.io/tools/designed-with-ai",
    "https://www.futuretools.io/tools/resolveai",
    "https://www.futuretools.io/tools/boo-ai",
    "https://www.futuretools.io/tools/resign-ai",
    "https://www.futuretools.io/tools/orb-producer",
    "https://www.futuretools.io/tools/cyanite-ai",
    "https://www.futuretools.io/tools/magenta-studio",
    "https://www.futuretools.io/tools/aiva",
    "https://www.futuretools.io/tools/amadeus-code",
    "https://www.futuretools.io/tools/playphrase-me",
    "https://www.futuretools.io/tools/samplette",
    "https://www.futuretools.io/tools/lalal-ai",
    "https://www.futuretools.io/tools/hoppy-copy",
    "https://www.futuretools.io/tools/arti-pics",
    "https://www.futuretools.io/tools/sitekick",
    "https://www.futuretools.io/tools/flair",
    "https://www.futuretools.io/tools/photoroom",
    "https://www.futuretools.io/tools/polyai",
    "https://www.futuretools.io/tools/leadscripts",
    "https://www.futuretools.io/tools/huberman-ai",
    "https://www.futuretools.io/tools/stockimg-ai",
    "https://www.futuretools.io/tools/sumly-ai",
    "https://www.futuretools.io/tools/ai-image-upscaler",
    "https://www.futuretools.io/tools/clipdrop",
    "https://www.futuretools.io/tools/ai-image-enlarger"  
    ]




async function scraper() {
    const browser = await puppeteer.launch({
        timeout: 900000, // set to 0 to disable timeout
        // other options...
      });
  const page = await browser.newPage();
  const scrapeData = [];
  let count = 0;

  for(let link of dataArray){
  await page.goto(link);
  console.log(count);
  count+=1;
  if(count == 50) {
    const wb = xlxs.utils.book_new();
    const ws = xlxs.utils.json_to_sheet(scrapeData);
    xlxs.utils.book_append_sheet(wb, ws);
    xlxs.writeFile(wb, "allData50.xlsx");
  } else if(count == 100) {
    const wb = xlxs.utils.book_new();
    const ws = xlxs.utils.json_to_sheet(scrapeData);
    xlxs.utils.book_append_sheet(wb, ws);
    xlxs.writeFile(wb, "allData100.xlsx");

  } else if (count == 150){
    const wb = xlxs.utils.book_new();
    const ws = xlxs.utils.json_to_sheet(scrapeData);
    xlxs.utils.book_append_sheet(wb, ws);
    xlxs.writeFile(wb, "allData150.xlsx");
  }
  else if (count == 225){
    const wb = xlxs.utils.book_new();
    const ws = xlxs.utils.json_to_sheet(scrapeData);
    xlxs.utils.book_append_sheet(wb, ws);
    xlxs.writeFile(wb, "allData225.xlsx");
  }
   else {
    const wb = xlxs.utils.book_new();
    const ws = xlxs.utils.json_to_sheet(scrapeData);
    xlxs.utils.book_append_sheet(wb, ws);
    xlxs.writeFile(wb, "allData4.xlsx");
  }

  

const element = await page.$('.tool-main-content h1');
const title = await page.evaluate(element => element.textContent, element);
const element2 = await page.$('.w-richtext');
const description = await page.evaluate(element2 => element2.innerText, element2);
const element3 = await page.$('.text-block-2');
const pricing = await page.evaluate(element3 => element3.textContent, element3);
const element4 = await page.$$('.w-dyn-list .w-dyn-items .w-dyn-item .text-block-18');
const tag = await Promise.all(element4.slice(0, 3).map(element => page.evaluate(el => el.textContent, element)));
const tags = tag.join(', ');
console.log(tags);
const element5 = await page.$('.image-3');
const imageURL = await page.evaluate(element5 => element5.src, element5);
const element6 = await page.$('.div-block-6 a');
const webURL = await page.evaluate(element6 => element6.href, element6);
const element7 = await page.$('.text-block-49');
const upvotes = await page.evaluate(element7 => element7.textContent, element7);




const data = {
    title: title, 
    description: description,
    pricing: pricing,
    tags: tags,
    upvotes: upvotes,
    link: webURL,
    image: imageURL
}
scrapeData.push(data)


  };
  

};

scraper();