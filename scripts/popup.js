// let btns = document.querySelectorAll('.btn');
// let links = document.querySelectorAll('.page')
// let currSiteName = document.getElementById('site-name');
// let defaultImg = document.getElementById('default-img');
// let defaultText = document.getElementById('default-text');
// let stats = document.getElementById('stats')
// let activityCount = document.getElementById('activity-count')
// let activeContainer = document.getElementById('active')

// btns.forEach(btn => {
//   btn.addEventListener('click', () => {
//     chrome.tabs.create({ url: 'dashboard.html' });
//   });
// });

// links.forEach(link => {
//   link.addEventListener('click', () => {
// chrome.tabs.create({ url: 'https://safrapp.vercel.app/' });
//   });
// });

// stats.addEventListener('click', () => {
//   chrome.tabs.create({ url: 'dashboard.html' });
//     });

//     document.addEventListener('DOMContentLoaded', () => {
//       chrome.storage.local.get(['adBlockCount'], (result) => {
//         activityCount.textContent = result.adBlockCount || 0;
//       });
//     });
    

// const state = { active: false };

// const setActive = (newState) => {
//   state.active = newState;
//   checkIfActive(); // Update visibility based on new state
// };

// const checkIfActive = () => {
//   if (state.active) {
//     defaultImg.style.display = 'none';
//     defaultText.style.display = 'none';
//     activeContainer.style.display = 'block';
//   } else {
//     defaultImg.style.display = 'block';
//     defaultText.style.display = 'block';
//     activeContainer.style.display = 'none'
//   }
//   console.log('Current state.active:', state.active);
// };

// const updateSiteName = () => {
//   chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
//     let activeTab = tabs[0];
//     if (activeTab && activeTab.url) {
//       let url = new URL(activeTab.url);
//       let hostname = url.hostname;
//       if (hostname.startsWith('www.')) {
//         hostname = hostname.substring(4);
//       }

//       console.log('Hostname:', hostname); // Debugging: Check hostname

//       // Filter out unwanted URL patterns
//       if (isValidWebsite(hostname)) {
//         currSiteName.textContent = hostname;
//         setActive(true); // Set active to true for valid websites
//       } else {
//         setActive(false); // Set active to false for invalid websites
//         currSiteName.textContent = '';
//       }
//     }
//   });
// };

// const isValidWebsite = (hostname) => {
//   const invalidPatterns = [
//     'newtab',
//     'chrome',
//     'about',
//     'extensions',
//     'chrome-devtools',
//     'file',
//     'data',
//     'blob',
//     'chrome://',
//     'downloads'
//   ];

//   return !invalidPatterns.some(pattern => hostname.includes(pattern));
// };

// // Ensure to run after DOM is loaded
// document.addEventListener('DOMContentLoaded', () => {
//   console.log('DOM fully loaded and parsed'); // Debugging: Check if DOM is loaded
//   checkIfActive();
//   updateSiteName();
// });

// // Listen for tab updates
// chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
//   if (changeInfo.status === 'complete') {
//     updateSiteName();
//     checkIfActive();
//   }
// });
let btns = document.querySelectorAll('.btn');
let links = document.querySelectorAll('.page');
let currSiteName = document.getElementById('site-name');
let chart = document.getElementById('chart');
let defaultImg = document.getElementById('default-img');
let defaultText = document.getElementById('default-text');
let stats = document.getElementById('stats');
let activityCount = document.getElementById('activity-count');
let activeContainer = document.getElementById('active');

btns.forEach(btn => {
  btn.addEventListener('click', () => {
    chrome.tabs.create({ url: 'dashboard.html' });
  });
});

links.forEach(link => {
  link.addEventListener('click', () => {
    chrome.tabs.create({ url: 'https://safrapp.vercel.app/' });
  });
});

stats.addEventListener('click', () => {
  chrome.tabs.create({ url: 'dashboard.html' });
});

document.addEventListener('DOMContentLoaded', () => {
  chrome.storage.local.get(['adBlockCount'], (result) => {
    const adBlockCount = result.adBlockCount || 0;
    activityCount.textContent = adBlockCount;

    // Change border color based on adBlockCount
    if (adBlockCount > 0) {
      chart.style.borderColor = '#ecf018';
    } else {
      chart.style.borderColor = 'lightgray'; // Default border color
    }
  });
});

const state = { active: false };

const setActive = (newState) => {
  state.active = newState;
  checkIfActive(); // Update visibility based on new state
};

const checkIfActive = () => {
  if (state.active) {
    defaultImg.style.display = 'none';
    defaultText.style.display = 'none';
    activeContainer.style.display = 'block';
  } else {
    defaultImg.style.display = 'block';
    defaultText.style.display = 'block';
    activeContainer.style.display = 'none';
  }
  console.log('Current state.active:', state.active);
};

// const checkUrlSafety = (url, callback) => {
//   const apiKey = 'AIzaSyBLo00DkJ6Td_vNnGB8yqtERV497c-rX4Y'; // Replace with your actual API key
//   const requestBody = {
//     client: {
//       clientId: 'yourcompanyname',
//       clientVersion: '1.5.2'
//     },
//     threatInfo: {
//       threatTypes: ['MALWARE', 'SOCIAL_ENGINEERING'],
//       platformTypes: ['ANY_PLATFORM'],
//       threatEntryTypes: ['URL'],
//       threatEntries: [
//         { url: url }
//       ]
//     }
//   };

//   fetch(`https://safebrowsing.googleapis.com/v4/threatMatches:find?key=${apiKey}`, {
//     method: 'POST',
//     body: JSON.stringify(requestBody),
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   })
//   .then(response => {
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     return response.json();
//   })
//   .then(data => {
//     console.log('Safe Browsing API response:', data); // Debugging: Log the API response
//     callback(data && data.matches && data.matches.length > 0);
//   })
//   .catch(error => {
//     console.error('Error checking URL safety:', error);
//     callback(false);
//   });
// };

const updateSiteName = () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    let activeTab = tabs[0];
    if (activeTab && activeTab.url) {
      let url = new URL(activeTab.url);
      let hostname = url.hostname;
      if (hostname.startsWith('www.')) {
        hostname = hostname.substring(4);
      }

      console.log('Hostname:', hostname); // Debugging: Check hostname

      // Filter out unwanted URL patterns
      if (isValidWebsite(hostname)) {
        currSiteName.textContent = hostname;
        setActive(true); // Set active to true for valid websites

        // Check if the site is safe
        checkUrlSafety(activeTab.url, (isUnsafe) => {
          if (isUnsafe) {
            currSiteName.style.color = 'red';
          } else {
            currSiteName.style.color = '#49AF41';
          }
        });

      } else {
        setActive(false); // Set active to false for invalid websites
        currSiteName.textContent = '';
        currSiteName.style.color = '#ecf018'; // Reset color
      }
    }
  });
};

const isValidWebsite = (hostname) => {
  const invalidPatterns = [
    'newtab',
    'chrome',
    'about',
    'extensions',
    'chrome-devtools',
    'file',
    'data',
    'blob',
    'chrome://',
    'downloads'
  ];

  return !invalidPatterns.some(pattern => hostname.includes(pattern));
};

// Ensure to run after DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM fully loaded and parsed'); // Debugging: Check if DOM is loaded
  checkIfActive();
  updateSiteName();
});

// Listen for tab updates
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete') {
    updateSiteName();
    checkIfActive();
  }
});
