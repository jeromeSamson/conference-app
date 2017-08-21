import * as $ from "jquery";

export default class SessionDetailService {
    findSessionById(id) {
        return new Promise((resolve, reject) => {
            $.get("http://localhost:3000/sessions/", (sessions) => {
                sessions.forEach(session=>{
                    if(session.id===id){
                        resolve(session)
                    }
                })
            })
        })
    }
}
