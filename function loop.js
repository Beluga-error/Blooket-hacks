(function loop() {
    // Open a new tab with a specific URL
    let newTab = window.open('https://example.com', '_blank'); // Change URL if needed
    
    // Wait for the tab to open, then close it after a short delay
    setTimeout(() => {
        newTab.close();
        
        // Open the tab again
        loop();
    }, 100); //free gold
})();
