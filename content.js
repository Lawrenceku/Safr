const safRtermsSummaries = [
  "Safr has detected the terms and conditions of this social media app. By using this app, you agree to abide by its privacy policy and content guidelines. Your data is stored securely, and any inappropriate content, including harassment or hate speech, may result in your account being suspended. Be mindful of the information you share.",
  "Safr has identified the terms and conditions of this e-commerce platform. By making purchases, you agree to the app's policies regarding data privacy and secure transactions. Note that all purchases are subject to the app's return and refund policies. Any fraudulent activities will lead to account suspension or legal actions.",
  "Safr has recognized the terms and conditions of this fitness app. Using this app means you consent to its privacy practices and guidelines. The app provides general fitness advice; however, it is recommended to consult a healthcare professional before starting any new workout routines. Safr advises you to use the app responsibly to avoid any health risks.",
  "Safr has found the terms and conditions of this finance app. By using it, you agree to its data security measures and confidentiality requirements. The app offers financial advice but is not a substitute for professional consultation. Unauthorized use of your account may result in termination. Keep your financial data secure.",
  "Safr has detected the terms and conditions of this education app. By accessing the app, you agree to its policies on data privacy and content use. The app provides educational resources which should be used responsibly. Any misuse, such as plagiarism, will result in suspension of your account. Stay updated with any changes to the terms."
];

function getRandomSummary() {
  const randomIndex = Math.floor(Math.random() * safRtermsSummaries.length);
  return safRtermsSummaries[randomIndex];
}

const termsAndConditionsRegex = /terms\s*and/i;

function checkForTermsAndConditions() {
  const textContent = document.body.textContent;
  if (termsAndConditionsRegex.test(textContent)) {
    const randomSummary = getRandomSummary();
    alert(randomSummary);
  }
}

// Check for terms and conditions after the page has fully loaded
document.addEventListener("DOMContentLoaded", () => {
  checkForTermsAndConditions();
});
