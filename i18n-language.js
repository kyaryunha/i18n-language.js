/**************************
 *    i18n-language.js
 *     Write by Shin Hyun (kyaryunha)
 *     Github: https://github.com/kyaryunha
 **************************/
(function () {
    let style = document.createElement('style');
    style.innerHTML = ".unselect-language{display: none;}";
    document.getElementsByTagName('head')[0].appendChild(style);
    function setLanguage(currentLanguage) {
        let notCurrentTagNames = document.querySelectorAll("[data-lang]");
         notCurrentTagNames.forEach(function (tag) {
            if ( !tag.classList.contains("unselect-language")) {
                tag.classList.add("unselect-language");
            }
        });
        let currentTagNames = document.querySelectorAll(`[data-lang="${currentLanguage}"]`);
         currentTagNames.forEach(function (tag) {
            if ( tag.classList.contains("unselect-language")) {
                tag.classList.remove("unselect-language");
            }
        });
        let selectLanguage = document.getElementById("change-language");
        selectLanguage.value = currentLanguage;
    }
    function changeLanguage(){
        let selectLanguage = document.getElementById("change-language");
        let selectLang = selectLanguage.options[selectLanguage.selectedIndex].value;
        localStorage.setItem('lang',selectLang);
        setLanguage(selectLang);
    }
    function getLanguage(){
        let language = window.navigator.userLanguage || window.navigator.language;
        let lang = language.toLowerCase();
        let localLang = null;
        try {
            localLang = localStorage.getItem('lang');
        } catch (e) {}
        if(localLang !== null) lang = localLang;
        let isExist = document.querySelectorAll(`[data-lang="${lang}"]`);
        if (isExist.length === 0) {
            lang = "en";
        }
        return lang;
    }
    document.getElementById("change-language").addEventListener("change", function (e) {
        changeLanguage();
    });
    try{
        setLanguage(getLanguage());
    }
    catch (e) {}
})();
