function dispatchLanguage()
{
    switch(navigator.language) {
        case "en":
            window.location.replace("en/index.html"); 
            break;
        case "fr":
        default:
            window.location.replace("fr/index.html"); 
            break;
    } 
}