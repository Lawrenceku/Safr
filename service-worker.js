// const activeAdBlock = {
//     active:true,
// }

// const defaultFilters = [
// 	"*://*.doubleclick.net/*",
// 	"*://partner.googleadservices.com/*",
// 	"*://*.googlesyndication.com/*",
// 	"*://*.google-analytics.com/*",
// 	"*://creative.ak.fbcdn.net/*",
// 	"*://*.adbrite.com/*",
// 	"*://*.exponential.com/*",
// 	"*://*.quantserve.com/*",
// 	"*://*.scorecardresearch.com/*",
// 	"*://*.zedo.com/*",
// ]

// // chrome.webRequest.onBeforeRequest.addListener(
// //     function(details) { return { cancel: true }},
// //     { urls: defaultFilters },
// //     ["blocking"]
// // )

chrome.runtime.onInstalled.addListener(() => {
	console.log('Safr extension installed and running.');
  });
  
  const apiKey = 'AIzaSyBLo00DkJ6Td_vNnGB8yqtERV497c-rX4Y';
  
//   async function checkUrlWithGoogleSafeBrowsing(url) {
// 	const requestBody = {
// 	  client: {
// 		clientId: 'your-client-id',
// 		clientVersion: '1.0'
// 	  },
// 	  threatInfo: {
// 		threatTypes: ['MALWARE', 'SOCIAL_ENGINEERING'],
// 		platformTypes: ['ANY_PLATFORM'],
// 		threatEntryTypes: ['URL'],
// 		threatEntries: [{ url: url }]
// 	  }
// 	};
  
// 	const response = await fetch(`https://safebrowsing.googleapis.com/v4/threatMatches:find?key=${apiKey}`, {
// 	  method: 'POST',
// 	  headers: {
// 		'Content-Type': 'application/json'
// 	  },
// 	  body: JSON.stringify(requestBody)
// 	});
  
// 	const data = await response.json();
// 	return data.matches ? true : false;
//   }
  
//   chrome.webRequest.onBeforeRequest.addListener(
// 	async (details) => {
// 	  const isMalicious = await checkUrlWithGoogleSafeBrowsing(details.url);
// 	  if (isMalicious) {
// 		console.log(`Blocked malicious URL: ${details.url}`);
// 		return { cancel: true };
// 	  }
// 	},
// 	{ urls: ["<all_urls>"] },
// 	["blocking"]
//   );
  