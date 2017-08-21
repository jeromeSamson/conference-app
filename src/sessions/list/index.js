import * as $ from "jquery"
import SessionService from '../../common/session.service'


export default class SessionList{
    constructor(sessionService) {
        this.sessionService = sessionService
    }

    render(idView){
        this.sessionService.findAllSession().then(session=>{
        $("#"+idView).html(
            `<ul>
            ${session.map(session=> '<li><a href=#session-detail='+session.id+'>'+session.title +'</a></li>').join('')}
            </ul>
            `
        )
        }
       ,this)
    }
}