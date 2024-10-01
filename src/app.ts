import './index.css'
;(function () {
  const setContent = () => {
    const container = document.getElementById('container')
    if (container !== null) {
      container.innerHTML = `Hello world! This is a Chrome Extension, timestamp: ${new Date().toLocaleString()}`
    }
  }

  setContent()

  chrome.runtime.sendMessage(
    {
      type: 'GREETINGS',
      payload: {
        message: 'Hello world!',
      },
    },
    response => {
      console.log(response.message)
    }
  )
})()
