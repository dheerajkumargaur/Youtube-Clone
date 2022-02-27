
let apikey = "AIzaSyCIX-SjR55HiqihJ--4JerblmaYoabWMLI"

let apikey2 = "AIzaSyB4KUKj6-oMbir5pilEzimC7qhGEL3GO-c"

async function top50Youtube_video(){

    try{
    
    let url =`https://www.googleapis.com/youtube/v3/videos/?part=contentDetails&chart=mostPopular&regionCode=IN&maxResults=50&part=snippet&key=${apikey2}`;
    
    let rep = await fetch(url)
   
    let data = await rep.json()
   
    let array_of_videos = data.items
        appendVideos(array_of_videos)

    }catch (err){
        console.log(err)
    }

}

top50Youtube_video()

let main = document.querySelector("#main_Videos_Show")


let appendVideos = (arr) => {

      
    arr.forEach(({snippet ,id}) => {
    
        let url = snippet.thumbnails.medium.url

        let channelTitle = snippet.channelTitle

        let title = snippet.title

        let videos_Div = document.createElement("div")
        videos_Div.setAttribute("class" , "videos_Div")
        
        videos_Div.innerHTML=` <div class="videos_thubmail_div">
                <img src=${url} alt="">
            </div>
            <div class="videos_first_div">
                <div class="channel_first_img">
                    <img src=${url} alt="">
                </div>
                <div class="channel_Second_div">
                    <div class="text_title_text">
                        <h3>${title}</h3>
                    </div>
                </div>
                <div class="title_three_dots">
                    <i class="fas fa-ellipsis-v"></i>
                </div>
            </div>
            <div class="video_channel_name">
                <p>${channelTitle}</p>
                <p>1.1M views - 01day ago</p>
            </div>`

            let dec = snippet.description

            let publishedAt = snippet.publishedAt


            let videoId = id;

            let videos_Info = {
                videoId,
                channelTitle,
                title,
                dec,
                publishedAt,
            }

            videos_Div.addEventListener('click', () =>{
                showtheVideosOne(videos_Info)
            })

            main.append(videos_Div)
    })

}


let showtheVideosOne = (V_D) =>{
    localStorage.setItem("videos_Info", JSON.stringify(V_D))

    window.location.href = "./video.html"
}


let Serchvideos = () => {
    let inp = document.getElementById("search").value

    if(inp.length < 1){}

    else{
    localStorage.setItem("Search_value" , inp)

    window.location.href= "./search.html"
    }

}



