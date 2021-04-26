;(function(){
    "use strict"

    const $ = sel => document.querySelector(sel)
    const $$ = sel => Array.from(document.querySelectorAll(sel))
    Node.prototype.on = Node.prototype.addEventListener

    let tabs = $$('.sec-tab--item')
    let imgs = $$('.sec-tab--img img')
    function updateTab(activeTab) {
        tabs.forEach((tab, i) => {
            const visible = tab.classList.toggle('active', tab === activeTab)
            imgs[i].style.display = visible ? '' : 'none'
        });
    }
    tabs.forEach(tab => tab.on('click', updateTab.bind(null, tab)))

    const langKey = "flat:language"
    const languages = [
        { key: "zh-CN", name: "中文" },
        { key: "en", name: "English" },
    ]
    const langHref = {
        "zh-CN": "/",
        "en": "/en/",
    }
    const currentLanguage = location.pathname.split("/").filter(Boolean)[0] || "zh-CN"

    if (!localStorage.getItem(langKey)) {
        const language = languages.some(e => e.key === navigator.language) ? navigator.language : "en";
        if (language !== currentLanguage) {
            window.location.href = langHref[language]
            return
        }
    }

    let select = $('#lang')
    languages.forEach(({ key, name }) => {
        const option = document.createElement('option')
        option.value = key
        option.textContent = name
        select.append(option)
    })
    select.value = currentLanguage

    $('#lang').on('change', (e) => {
        const language = e.target.value
        localStorage.setItem(langKey, language)
        window.location.href = langHref[language]
    })

})();
