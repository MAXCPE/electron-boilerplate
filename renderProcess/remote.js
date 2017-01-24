/*jshint esversion: 6 */

const remote = require('electron').remote


MinMaxCloseBtn()

/**
 * Add event listeners to the minimize, maximize and close buttons
 */

function MinMaxCloseBtn() {
    const closeBtn = document.getElementById('close-btn')
    const minBtn = document.getElementById('min-btn')
    const resizeBtn = document.getElementById('resize-btn')

    minBtn.addEventListener('click', (event) => {
        let window = remote.getCurrentWindow()
        window.minimize()
    })

    resizeBtn.addEventListener('click', (event) => {
        let window = remote.getCurrentWindow()
        if(window.isMaximized()) {
            window.unmaximize()
        } else {
            window.maximize()
        }
    })

    closeBtn.addEventListener('click', (event) => {
        let window = remote.getCurrentWindow()
        window.close()
    })
}