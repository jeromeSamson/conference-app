
import TalkService from './common/talk.service'
import SessionService from './common/session.service'
import SpeakerList from './speakers/list/index.js'
import SpeakerDetail from './speakers/detail/index.js'
import SessionDetail from './sessions/detail/index.js'
import SessionList from './sessions/list/index.js'
import Layout from './layout/index.js'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap'

console.log('Conférence App démarrée encore  !')
let layoutDefault = new Layout()
layoutDefault.render()
let talkService = new TalkService()
let sessionService = new SessionService()

var router = () => {
   let layout = new Layout()
    let speakersList = new SpeakerList(talkService)
    let sessionList = new  SessionList(sessionService)
    let speakerDetail = new SpeakerDetail()
    let sessionDetail = new SessionDetail()
        if (location.hash == '#speakers-list') {
            speakersList.render('main-view')
        } else if (location.hash == '#sessions-list') {
            sessionList.render('main-view')

        }
        else {
            var url = location.hash.split('=')
            var nom = url[0]
            var param = url[1]
            if(nom == '#speaker-detail'){
                speakerDetail.render('main-view',param)
            }else if(nom == '#session-detail'){
                sessionDetail.render('main-view',param)
            }
            else{
                layout.render()
            }          
        }
    }
    window.addEventListener('load', () => {
    window.onhashchange = () => {
    router();
    };
    router();
    });