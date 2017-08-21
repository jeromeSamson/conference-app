import * as $ from "jquery"
import TalkService from '../../common/talk.service'


export default class SpeakerList{

    constructor(talkService) {
        this.talkService = talkService
    }
    render(idView){
       this.talkService.findAllSpeakers().then(speakers=>{
        $("#"+idView).html(
            `<ul>
            ${speakers.map(speaker=> '<li><a href=#speaker-detail='+speaker.id+'>'+speaker.firstname +'</a></li>').join('')}
            </ul>
            `
        )
        }
       ,this)
    }
}