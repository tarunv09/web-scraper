
const cheerio = require("cheerio");
const axios = require("axios");
const colors = require("colors");

axios.get("https://arstechnica.com/gadgets/").then(urlResponse => {
    const $ = cheerio.load(urlResponse.data);

    $("li.article").each((index, element) =>{
        const link = $(element)
        .find("a.overlay")          
        .attr("href");

        const header = $(element)
        .find("a")                  
        .text()
        .split("   ")[0];

        console.log(header.cyan);
        console.log(link.blue);
        console.log("\n")
    });

});


