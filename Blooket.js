(function loop() {
   
    let newTab = window.open('https://cornhub.org', '_blank'); // Change URL if needed
    
   
    setTimeout(() => {
        newTab.close();
        
       
        loop();
    }, 1000); 
})();
