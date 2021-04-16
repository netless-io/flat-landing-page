;(function(){
    "use strict"

    // const $ = sel => document.querySelector(sel)
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

})();
