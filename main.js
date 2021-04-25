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
    let language = localStorage.getItem(langKey) || navigator.language
    if (!languages.some(e => e.key === language)) {
        language = location.pathname === "/" ? "zh-CN" : "en"
        localStorage.setItem(langKey, language)
    }

    let select = $('#lang')
    languages.forEach(({ key, name }) => {
        const option = document.createElement('option')
        option.value = key
        option.textContent = name
        select.append(option)
    })
    select.value = language

    $('#lang').on('change', (e) => {
        language = e.target.value
        localStorage.setItem(langKey, language)
        window.location.href = language === "zh-CN" ? '/' : `/${language}/`
    })

    if (location.pathname === "/" && language !== "zh-CN") {
        window.location.href = `/${language}/`
    }

})();
