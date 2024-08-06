// Function to extract and check text for terms and conditions
function extractTextForSummary() {
    // Define regex patterns to look for terms and conditions
    const patterns = [
      /terms\sand\sconditions/i,
      /privacy\spolicy/i,
      /user\sagreement/i,
      /disclaimer/i,
      /data\sprotection/i,
    ];
  
    // Extract text from the page
    const bodyText = document.body.innerText;
  
    // Check if any patterns match the extracted text
    const containsKeywords = patterns.some(pattern => pattern.test(bodyText));
  
    if (containsKeywords) {
      // Send the text to the service worker if any keywords are found
      chrome.runtime.sendMessage({ type: 'extractText', text: bodyText });
    }
  }
  
  // Run the function when the content script is loaded
  extractTextForSummary();
// Listen for the summary message from the service worker
chrome.runtime.onMessage.addListener((message) => {
    if (message.type === 'summary') {
      console.log('Received summary:', message.summary);
  
      // You can display the summary in a popup, alert, or any other way
      alert('Summary of the text: ' + message.summary);
    }
  });
    