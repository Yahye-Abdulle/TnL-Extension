function injectTheScript() {
    // Gets all tabs that have the specified properties, or all tabs if no properties are specified (in our case we choose current active tab)
    chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
        let url = tabs[0].url;
        // document.getElementById("downloadBtn").innerHTML =url;
        // use `url` here inside the callback because it's asynchronous!

        document.getElementById("URL").value = url;
    });
    
    }
// adding listener to your button in popup window
var el = document.getElementById('submitVid');
if(el){
  el.addEventListener('click', injectTheScript);
}