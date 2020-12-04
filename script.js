const videoElment = document.getElementById('video');
const button = document.getElementById('button');

async function selectMediaStream(){
    try{
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElment.srcObject = mediaStream;
        videoElment.onloadedmetadata = () =>{
            videoElment.play()
        }
    }catch(err){
        console.log('Woops error here: ', err)
    }
}


button.addEventListener('click', async ()=>{
button.disabled = true;

await videoElment.requestPictureInPicture();
button.disabled = false;
});

selectMediaStream();