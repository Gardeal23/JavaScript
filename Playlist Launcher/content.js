// alert("rwahr");
// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//     const re = new RegExp('bear', 'gi')
//     const matches = 
//     document.documentElement.innerHTML.match(re) //finds matches to re 
//     sendResponse({count: matches.length}) 
// })

const re = new RegExp('bear', 'gi')
const matches = document.documentElement.innerHTML.match(re) || [] //finds matches to re 

chrome.runtime.sendMessage({
    url: window.location.href,
    count: matches.length
})