function myFunction() {
    var n=parseInt(document.getElementById("inputBox").value);
    var p=0;
    for(i=0;i<=n;i++){
        p+=i;
    }
    document.write(p);
    
    
}

myFunction();