const cheerio = require("cheerio"); //Libraru to run jquery in the node console
const axios = require("axios");
const siteUrl = "http://example.com/";
let siteName = "";

const fetchData = async () => {
    const result = await axios.get(siteUrl);
    return cheerio.load(result.data);
  };
const getResults = async () => {
  const $ = await fetchData();
  siteName = $('h1').text();
  console.log(siteName)
  return {
    siteName,
   };
  };
  // module.exports = getResults;
getResults()