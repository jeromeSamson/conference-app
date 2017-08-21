import * as $ from "jquery"
import SpeakerDetailService from '../../common/detail.speaker.service'


export default class SpeakerDetail{
    render(idView,idSpeak){
        var detail = new SpeakerDetailService();
       detail.findSpeakerById(idSpeak).then(speaker=>{
       $("#"+idView).html(

            
            `
            <br>
            <div class="row ">
                <a href="#speakers-list" class="btn btn-primary col-xs-5">retour à la liste des speakers</a>
            </div>
            <br>
            <ul>
            <li>${speaker.lastname}</li>
            <li>${speaker.firstname}</li>
            <li>${speaker.topspeaker}</li>
            <li>${speaker.company}</li>
            <li>${speaker.about}</li>
            </ul>
            `
        )
        }
       ,this)

    }
}