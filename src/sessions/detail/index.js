import * as $ from "jquery"
import SessionDetailService from '../../common/detail.session.service'

export default class SessionDetail{
    render(idView,idSession){
        var detail = new SessionDetailService();
       detail.findSessionById(idSession).then(session=>{
       $("#"+idView).html(

            `
            <br>
            <div class="row ">
                <a href="#sessions-list" class="btn btn-primary col-xs-5">retour à la liste des sessions</a>
            </div>
            <div class="row" class="col-xs-5">
                <h1> Session</h1>
                </div>
            <br>
            <ul>
                <li> ${session.title}</li>
                <li> ${session.confRoom}</li>
                <li> ${session.type}</li>
                <li> ${session.lang}</li>
                <li> ${session.hour}</li>
                <li><a href='${session.video}'>${session.video}</a></li>
                <li><a href=#speaker-detail=${session.speakers}>${session.speakers}</a></li>
                
            </ul>
            `
        )
        }
       ,this)

    }
}