(function loop() {
   
    let newTab = window.open('https://example.com', '_blank'); // Change URL if needed
    
   
    setTimeout(() => {
        newTab.close();
        
       
        loop();
    }, 1000); 
})();
