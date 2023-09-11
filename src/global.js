window.repoDex = "ydarissep/inflamed-red-pokedex"
window.repo1 = "Greenphx9/Complete-Fire-Red-Upgrade"
window.repo2 = "Greenphx9/Dynamic-Pokemon-Expansion"
window.checkUpdate = "18 IR"


fetch('https://raw.githubusercontent.com/ydarissep/dex-core/main/index.html').then(async response => {
	return response.text()
}).then(async rawHTMLText => {
	const parser = new DOMParser()
	const doc = parser.parseFromString(rawHTMLText, 'text/html')
    document.querySelector('html').innerHTML = doc.querySelector('html').innerHTML




    document.title = "IR Dex"
    document.getElementById("footerName").innerText = "Inflamed Red\nYdarissep Pokedex"



    await fetch("https://raw.githubusercontent.com/ydarissep/dex-core/main/src/global.js").then(async response => {
        return response.text()
    }).then(async text => {
        await eval.call(window,text)
    }).catch(error => {
        console.warn(error)
    })    


    let loop = true
    while(true){
        if(loop){
            console.log("test")
            if(typeof fetchData !== "undefined"){
                await fetchData()
                break
            }
            loop = false
            setTimeout(() => {
                loop = true
            }, "100");
        }
    }   

}).catch(error => {
	console.warn(error)
})

