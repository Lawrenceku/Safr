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

  
/////////////ADBBLOCK///////////////
let adBlockCount = 0;

chrome.declarativeNetRequest.onRuleMatchedDebug.addListener((info) => {
  console.log('Rule matched:', info);
  adBlockCount++;
  // Optionally, store the count in storage for persistence
  chrome.storage.local.set({ adBlockCount });
});

// Function to retrieve the count (for use in popup or other parts of the extension)
const getAdBlockCount = (callback) => {
  chrome.storage.local.get(['adBlockCount'], (result) => {
    callback(result.adBlockCount || 0);
  });
};

// Example of retrieving the count and logging it
getAdBlockCount((count) => {
  console.log('Total ads blocked:', count);
});

// Ensure the initial count is stored
chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.set({ adBlockCount: 0 });
});


////////////////TLDR//////////////////////
// chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//   if (message.type === 'extractText') {
//     const textToSummarize = message.text;

//     // Prepare the API request to summarize the text
//     fetch('https://api.ai21.com/studio/v1/summarize', {
//       method: 'POST',
//       headers: {
//         'Authorization': 'KOeMy5Gfw8xkKEtCIKLLYtJUntTCekJt',
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         source: textToSummarize,
//         sourceType: 'TEXT'
//       })
//     })
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
//       return response.json();
//     })
//     .then(data => {
//       console.log('Summary response:', data);

//       // Process the summary or notify the user
//       if (data && data.summary) {
//         // Send summary back to the content script or handle it as needed
//         chrome.runtime.sendMessage({ type: 'summary', summary: data.summary });
//       }
//     })
//     .catch(error => {
//       console.error('Error summarizing text:', error);
//     });
//   }
// });

