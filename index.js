
// home typing
var typed = new Typed(".typing", {
    strings: ["Backed Developer", "Trader" , "Footballer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});
// about me typing
var typed = new Typed(".typing-2", {
    strings: ["Backed Developer", "Trader" , "Footballer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});


// Github calender
GitHubCalendar(".calendar", "7r-Rishi");

// or enable responsive functionality:
GitHubCalendar(".calendar", "7r-Rishi", { responsive: true });

// Use a proxy
GitHubCalendar(".calendar", "7r-Rishi", {
   proxy (username) {
     return fetch(`https://your-proxy.com/github?user=$7r-Rishi`)
   }
}).then(r => r.text())
