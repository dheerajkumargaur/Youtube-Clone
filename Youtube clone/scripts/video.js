let videos_Info = JSON.parse( localStorage.getItem("videos_Info"))



let Showing_the_video = document.getElementById("Showing_the_video")


Showing_the_video.innerHTML = `
<div class="leftSide_showing_video">
        <div class="video_div">
            <iframe width="851px" height="500px" src="https://www.youtube.com/embed/${videos_Info.videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="video_tit">
            <h3>${videos_Info.title}</h3>
          <div class="viwes_like">
            <p>15,35,756 <sup>•</sup> 09-Dec-2019</p>
            <div class="Like_dislike">
                <i class="far fa-thumbs-up"> Like</i>
                <i class="far fa-thumbs-down"> DISLIKE</i>
                <i class="far fa-share-square"> SHARE</i>
                <i class="fas fa-save"> SAVE</i>
                <i class="fas fa-ellipsis-h"></i>
            </div>
          </div>
        </div>

        <div class="channel_div">
            <div class="channel_img">
                <img src="https://i.ytimg.com/vi/zdp0zrpKzIE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAhzsaCoAG-6QtY5boNamjYfpWddw" alt="">
                
            </div>
            <div class="channel_name">
                <p>${videos_Info.channelTitle}</p>
                <p>125K subscribe</p>
            </div>
            <div class="subscribe_button">
                <button>SUBSCRIBE</button>
            </div>
        </div>
        <div class="video_dec">
            <p>${videos_Info.dec}</p>
        </div>

    </div>

    <div class="rightSide_suggection">
    </div>
</div>
`


let showmeanutrue = "true"    

function showthemean() {
if(showmeanutrue === "true") {
  document.getElementById("silder_meanu").classList = "active"
  showmeanutrue = "false" 
} else{
    document.getElementById("silder_meanu").classList = ""
    showmeanutrue = "true"  
}
}


let apikey2 = "AIzaSyB4KUKj6-oMbir5pilEzimC7qhGEL3GO-c"

async function top50Youtube_video(){

    try{
    
    let url =`https://www.googleapis.com/youtube/v3/videos/?part=contentDetails&chart=mostPopular&regionCode=IN&maxResults=30&part=snippet&key=${apikey2}`;
    
    let rep = await fetch(url)
   
    let data = await rep.json()
   
    let array_of_videos = data.items
        appendVideos(array_of_videos)

    }catch (err){
        console.log(err)
    }

}

top50Youtube_video()



let right_side = document.querySelector('.rightSide_suggection')




let appendVideos = (arr) =>{


    arr.forEach(({snippet , id}) =>{

        let url = snippet.thumbnails.medium.url

        let channelTitle = snippet.channelTitle

        let title = snippet.title

        let dec = snippet.description

        let publishedAt = snippet.publishedAt

        let videoId = id;


        let right_div_con = document.createElement('div')
            right_div_con.setAttribute('class', 'right_div_con')

            right_div_con.innerHTML = `
            <div class="right_img">
                <img src=${url} alt="">
            </div>
            <div class="left_div_text">
                <h3>${title}</h3>
                <h5>${channelTitle}</h5>
                <p>296K views 2 months ago</p>
            </div>`

            right_side.append(right_div_con)

        let videos_Info = {
            videoId,
            channelTitle,
            title,
            dec,
            publishedAt,
        }

        right_div_con.addEventListener('click', () =>{
            showtheVideosOne(videos_Info)
        })


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