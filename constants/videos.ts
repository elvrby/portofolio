export const videos = ["/videos/twitter.mp4", "/videos/qrgenerator.mp4", "/videos/lokachips.mp4"]

export const videoElement = (url: string) => {    
  const vid = document.createElement("video");  
  vid.src = url;  
  vid.crossOrigin = "Anonymous";   
  vid.loop = true;   
  vid.muted = true; 
  return vid;  
}


