(() => {
    // detect current state
    let style = window.getComputedStyle(document.documentElement);
    let value = style.getPropertyValue("scrollbar-width");

    // default value is "auto"
    if(value === "none") {
        browser.runtime.sendMessage("remove");
    } else {
        browser.runtime.sendMessage("add");
    }
})();
