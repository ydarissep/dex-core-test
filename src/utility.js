fetch("https://raw.githubusercontent.com/ydarissep/dex-core/main/src/utility.js").then(response => {
    return response.text()
}).then(text => {
    eval.call(window,text)
}).catch(error => {
    console.warn(error)
})






async function forceUpdate(){
    const update = 18
    if(localStorage.getItem("update") != `${update} IR`){
        await localStorage.clear()
        await localStorage.setItem("update", `${update} IR`)
        await footerP("Fetching data please wait... this is only run once")
    }
}