import * as $ from "jquery";

export default class SpeakerDetailService {
    findSpeakerById(id) {
        return new Promise((resolve, reject) => {
            $.get("http://localhost:3000/speakers/", (speakers) => {
                speakers.forEach(speaker=>{
                    if(speaker.id===id){
                        resolve(speaker)
                    }
                })
            })
        })
    }
}
