// For more information on background script,
// See https://developer.chrome.com/extensions/background_pages
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === 'GREETINGS') {
    const message = `Hello, this is background! You sent me a message: ${request.payload.message}`
    sendResponse({
      message,
    })
  }
})
