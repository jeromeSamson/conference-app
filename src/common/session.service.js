import * as $ from "jquery";
export default class SessionService {
    findAllSession() {
        return new Promise((resolve, reject) => {
            $.get("http://localhost:3000/sessions/", (sessions) => {
                resolve(sessions)
            })
        })
    }
}