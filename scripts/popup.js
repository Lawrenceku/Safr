let btns = document.querySelectorAll('.btn');
let links = document.querySelectorAll('.page')
let currSiteName = document.getElementById('site-name');
let defaultImg = document.getElementById('default-img');
let defaultText = document.getElementById('default-text');
let stats = document.getElementById('stats')
let activityCount = document.getElementById('activity-count')
let activeContainer = document.getElementById('active')
// let canvas = document.getElementById('canvas'); // Assuming canvas is defined somewhere in your HTML

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
        activityCount.textContent = result.adBlockCount || 0;
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
    activeContainer.style.display = 'none'
  }
  console.log('Current state.active:', state.active);
};

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
      } else {
        setActive(false); // Set active to false for invalid websites
        currSiteName.textContent = '';
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
