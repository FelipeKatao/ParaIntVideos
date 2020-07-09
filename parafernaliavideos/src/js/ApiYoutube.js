function Api_get(SearchVideo){
    let api
    fetch('https://www.googleapis.com/youtube/v3/search?part=snippet&q='+SearchVideo+'&type=video&videoCaption=closedCaption&key=AIzaSyAIHDT4EUZNz6E30hNhBOeUr2V5MH9G6UI')
    .then((resp) => resp.json())
    .then(function(data){
        console.log(data)
        for (let index = 0; index < data["items"].length; index++) {
            console.log(data["items"][index]["snippet"]["title"])
            console.log(data["items"][index]["snippet"]["description"])
            console.log(data["items"][index]["snippet"]["publishTime"])
            console.log(data["items"][index]["id"]["videoId"])
            console.log(data["items"][index]["snippet"]["thumbnails"]["default"]["url"])
        }
    })
    return api
}

function teste(e){
   Api_get(document.getElementById("input_search").value)
}
export default teste