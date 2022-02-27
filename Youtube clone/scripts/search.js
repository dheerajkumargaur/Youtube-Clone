
let Search_value = localStorage.getItem("Search_value")

let input = document.querySelector("#search")
    input.placeholder = Search_value || "Search"

let apikey2 = "AIzaSyB4KUKj6-oMbir5pilEzimC7qhGEL3GO-c"

ShowtheVideos()

async function ShowtheVideos(){
   
  try{
          let rep = await fetch(`https://youtube.googleapis.com/youtube/v3/search?q=${Search_value}&key=${apikey2}&type=video&maxResults=30&part=snippet&myRating=like`)

          let data = await rep.json()

          let array_of_videos = data.items
            
             Show_all_vide0o_function(array_of_videos)
      }catch (err){
          console.log(err)
      }

  }


  let Show_the_Search_videos = document.getElementById("Show_the_Search_videos") 


let Show_all_vide0o_function = (em) => {

  em.forEach(({snippet , id:{videoId}}) => {
    let url = snippet.thumbnails.medium.url
    
    let title = snippet.title

    let channelTitle = snippet.channelTitle

    let dec = snippet.description


    let Show_the_all_videos = document.createElement('div')
    Show_the_all_videos.setAttribute('class','Show_the_all_videos')

   
    let show_the_video = document.createElement("div")
    show_the_video.setAttribute('class' ,'show_the_video')

    let video_th = document.createElement("div")
    video_th.setAttribute('class' , 'video_th')

    let poster = document.createElement("img")
        poster.src = url

        video_th.append(poster)  
        
        show_the_video.append(video_th)


    let left_side_videos = document.createElement('div')
    left_side_videos.setAttribute('class' , 'left_side_videos')

    let video_title = document.createElement('div')
    video_title.setAttribute('class' , 'video_title')

    let video_title_h3 = document.createElement('h3')
    video_title_h3.textContent = title ;

     video_title.append(video_title_h3)

    let video_views_month = document.createElement('div')
    video_views_month.setAttribute('class' , 'video_views_month')

    let video_views_month_p = document.createElement('p')
      video_views_month_p.textContent = "1.3M views . 1 month ago"

      video_views_month.append(video_views_month_p)


    let channel_logo_name = document.createElement('div')
        channel_logo_name.setAttribute('class' , 'channel_logo_name')

    let channel_logo_img = document.createElement('div')
    channel_logo_img.setAttribute('class' , 'channel_logo_img') 
    
    let channel_logo_img_sec = document.createElement('img')
    channel_logo_img_sec.src = url

    channel_logo_img.append(channel_logo_img_sec)

    let channel_logo_p = document.createElement('p')  
    channel_logo_p.textContent = channelTitle ;


    channel_logo_name.append(channel_logo_img,channel_logo_p)

    let videos_dec = document.createElement('div')
     videos_dec.setAttribute('class' , 'videos_dec')


    let videos_dec_p = document.createElement('p')
    videos_dec_p.setAttribute('class' , "dec")
    videos_dec_p.textContent = dec 

    videos_dec.append(videos_dec_p)


     left_side_videos.append(video_title , video_views_month, channel_logo_name , videos_dec)


    Show_the_all_videos.append(show_the_video , left_side_videos)

   Show_the_Search_videos.append(Show_the_all_videos)


   let publishedAt = snippet.publishedAt

   let videos_Info = {
       videoId,
       channelTitle,
       title,
       dec,
       publishedAt,
   }

   Show_the_all_videos.onclick = () => {
            give_Same_value(videos_Info)
       }


  })

}  



let give_Same_value = (V_D) => {
  
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