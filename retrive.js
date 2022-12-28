const APIkey = "AIzaSyBmmWnWCsa07H5H-81HtRBoEPIEHqK_wfQ";
const ID = "UCX21bmPDMrE2WlAlo0ucrjA";

const subCount = document.getElementById('subcount');

let getSub = () => {
    fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${ID}&key=${APIkey}`)
    .then(Response => {
        return Response.json()
    })
    .then(data => {
        console.log(data);
        subcount.innerHTML = data["items"][0].statistics.subscriberCount;
    })
}

getSub();