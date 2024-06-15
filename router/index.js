import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import DiagnosisPage from '@/components/DiagnosisPage'
import PostPage from '@/components/PostPage'
import LoginPage from '@/components/LoginPage'
import SignUpPage from '@/components/SignUpPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/DiagnosisPage',
      name: 'DiagnosisPage',
      component: DiagnosisPage
    },
    {
      path: '/PostPage',
      name: 'PostPage',
      component: PostPage
    },
    {
      path: '/LoginPage',
      name: 'LoginPage',
      component: LoginPage
    },
    {
      path: '/SignUpPage',
      name: 'SignUpPage',
      component: SignUpPage
    }
  ]
})
