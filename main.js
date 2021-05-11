void function() {
    "use strict"

    const $ = sel => document.querySelector(sel)
    const $$ = sel => Array.from(document.querySelectorAll(sel))
    Node.prototype.on = Node.prototype.addEventListener

    let tabs = $$('.tabs .items .item')
    let imgs = $$('.tabs .images img')
    function updateTab(activeTab) {
        tabs.forEach((tab, i) => {
            const visible = tab.classList.toggle('active', tab === activeTab)
            imgs[i].style.display = visible ? '' : 'none'
        });
    }
    tabs.forEach(tab => tab.on('click', updateTab.bind(null, tab)))


    const langKey = "flat:language"
    const languages = [
        { key: "zh-CN", name: "简体中文" },
        { key: "en", name: "English" },
    ]
    const langHref = {
        "zh-CN": "/",
        "en": "/en/",
    }
    const currentLanguage = location.pathname.split("/").filter(Boolean)[0] || "zh-CN"

    let select = $('#lang')
    select.innerHTML = ""
    languages.forEach(({ key, name }) => {
        const option = document.createElement('option')
        option.value = key
        option.textContent = name
        select.append(option)
    })
    select.value = currentLanguage

    select.on('change', (e) => {
        const language = e.target.value
        localStorage.setItem(langKey, language)
        window.location.href = langHref[language]
    })

}();
