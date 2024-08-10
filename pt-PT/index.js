import audit from './audit'
import blog from './blog'
import challenges from './challenges'
import comments from './comments'
import common from './common'
import courses from './courses'
import discovery from './discovery'
import emails from './emails'
import encyclopedia from './encyclopedia'
import enrollment from './enrollment'
import events from './events'
import fanManager from './fan_manager'
import feed from './feed'
import feedback from './feedback'
import form from './form'
import forums from './forums'
import genre from './genre'
import groups from './groups'
import legal from './legal'
import library from './library'
import licenses from './licenses'
import notifications from './notifications'
import organizations from './organizations'
import pages from './pages'
import personalNotes from './personalNotes'
import plans from './plans'
import pm from './pm'
import rating from './rating'
import reader from './reader'
import readingList from './reading_list'
import roadmap from './roadmap'
import settings from './settings'
import sharing from './sharing'
import stats from './stats'
import universe from './universe'
import user from './user'
import workshop from './workshop'
import writer from './writer'

export default {
  locales: ['pt', 'pt-PT'],
  ...common,
  ...form,
  ...emails,
  ...blog,
  ...challenges,
  ...discovery,
  ...encyclopedia,
  ...enrollment,
  ...feedback,
  ...feed,
  ...genre,
  ...groups,
  ...licenses,
  ...organizations,
  ...pages,
  ...plans,
  ...pm,
  ...rating,
  ...settings,
  ...sharing,
  ...stats,
  ...workshop,
  ...comments,
  ...library,
  ...writer,
  ...reader,
  ...legal,
  ...universe,
  ...audit,
  ...user,
  ...forums,
  ...notifications,
  ...roadmap,
  ...events,
  ...fanManager,
  ...readingList,
  ...personalNotes,
  ...courses,
}
