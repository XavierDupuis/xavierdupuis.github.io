function dispatchLanguage()
{
    switch(navigator.language) {
        case "en":
            window.open("en/index.html"); 
            break;
        case "fr":
        default:
            window.open("fr/index.html"); 
            break;
    } 
}