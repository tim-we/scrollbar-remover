const TOP_CSS = { code: "html { scrollbar-width: none !important; }" };
const ALL_CSS = { code: "* { scrollbar-width: none !important; }" };

browser.pageAction.onClicked.addListener(tab => {
    // detect current state
    // the script will send a message back to this background script
    browser.tabs.executeScript({file:"/detect.js"});
});

// receive message from detector script
browser.runtime.onMessage.addListener(msg => {
    if(msg === "add") {
        browser.tabs.insertCSS(TOP_CSS);
    } else if(msg === "remove") {
        browser.tabs.removeCSS(TOP_CSS);
        browser.tabs.removeCSS(ALL_CSS);
    }
});

// create page action context menu
browser.menus.create({
    contexts: ["page_action"],
    title: "Remove all scrollbars",
    onclick: () => {
        browser.tabs.insertCSS(ALL_CSS);
    }
});
