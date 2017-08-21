import * as $ from "jquery";

export default class TalkService {
    findAllSpeakers() {
        return new Promise((resolve, reject) => {
            $.get("http://localhost:3000/speakers/", (speakers) => {
                resolve(speakers)
            })
        })
    }
}

