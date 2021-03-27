import common from './lang_common'
import form from './lang_form'
import emails from './lang_emails'

export default {
  locales: ['en', 'en-US', 'en-UK', 'en-CA', 'en-AU', 'en-NZ'],
  ...common,
  ...form,
  ...emails
}
