(function(){

    firebase.auth().onAuthStateChanged(user => {
    
    if(user)
    
    {
    
    }
    
    else
    
    {
    
    var newURL = window.location.origin + "/Filmovi/login.html"+ window.location.replace(newURL);
    
    }
    
    });   })();