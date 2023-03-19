import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hi from '@/components/Hi'
import Student from '@/components/pages/Student/Student'
import Department from '@/components/pages/Department/index'
import DepartmentCreate from '@/components/pages/Department/create'
import Subject from '@/components/pages/Subject/Subject'
import Post from '@/components/pages/Post/Post'
import Section from '@/components/pages/Section/Section'
import Session from '@/components/pages/Session/Session'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Hi',
      name: 'Hi',
      component: Hi
    },
    {
      path: '/Student',
      name: 'Student',
      component: Student
    },

    //Department
    {
      path: '/Department',
      name: 'Department',
      component: Department
    },
    {
      path: '/Department/Create',
      name: 'DepartmentCreate',
      component: DepartmentCreate
    },



    {
      path: '/Subject',
      name: 'Subject',
      component: Subject
    },
    {
      path: '/Post',
      name: 'Post',
      component: Post
    },
    {
      path: '/Section',
      name: 'Section',
      component: Section
    },
    {
      path: '/Session',
      name: 'Session',
      component: Session
    }
  ]
})
