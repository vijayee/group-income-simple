import i18next from 'i18next'
import XHR from 'i18next-xhr-backend'
import Vue from 'vue'
import I18n from '../views/i18n.vue'

i18next.use(XHR)

// Initialize language to browser language
// Set backend to xhr
i18next.init(i18next.init({
  lng: navigator.language,
  defaultValue: 'en',
  backend: {
    loadPath: '/simple/locales/{{lng}}/{{ns}}.json',
    allowMultiLoading: false
  }
}))
// create vue plugin to provide i18n component

var translation = {}
translation.install = function (Vue, options) {
  Vue.component('i18n', I18n)
}
Vue.use(translation)

export default function (key, comments, options) {
  if (typeof comments === 'object') {
    options = comments
    comments = null
  }
  return i18next.t(key, options)
}