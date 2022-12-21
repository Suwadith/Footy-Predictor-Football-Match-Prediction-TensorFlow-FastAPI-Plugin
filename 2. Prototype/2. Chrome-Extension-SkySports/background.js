chrome.tabs.onUpdated.addListener(async function(tabId, changeInfo, tab) {

   const page_url = tab.url
   const path = page_url.split("-")[2]
   const response = await fetch('http://localhost:8000/predictions/'+path);
   const myJson = await response.json();
   chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ['content-script.js']
   });

   if(path == "results"){
      chrome.runtime.onMessage.addListener(
         function(request, sender, sendResponse) {
           if (request.greeting === "results")
             sendResponse(myJson);
         }
      );
   } else if(path == "fixtures"){
      chrome.runtime.onMessage.addListener(
         function(request, sender, sendResponse) {
           if (request.greeting === "fixtures")
             sendResponse(myJson);
         }
      );
   }



   

}); 
 