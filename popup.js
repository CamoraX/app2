
  function loadTwitterMessages() {
    chrome.windows.create({
      url: "https://twitter.com/messages",
      type: "popup",

    }, function(newWindow) {
      chrome.scripting.executeScript({
        target: {tabId: newWindow.tabs[0].id},
        function: function() {
          window.alert();
          window.scrollBy(0, 500);
        }
      });
    });
  }

}




