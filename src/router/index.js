import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hi from '@/components/Hi'
import Student from '@/components/pages/Student/index'
import StudentCreate from '@/components/pages/Student/create'
import StudentEdit from '@/components/pages/Student/edit'

import Department from '@/components/pages/Department/index'
import DepartmentCreate from '@/components/pages/Department/create'
import DepartmentEdit from '@/components/pages/Department/edit'

import Subject from '@/components/pages/Subject/index'
import SubjectCreate from '@/components/pages/Subject/create'
import SubjectEdit from '@/components/pages/Subject/edit'

import Post from '@/components/pages/Post/index'
import PostCreate from '@/components/pages/Post/create'
import PostEdit from '@/components/pages/Post/edit'

import Section from '@/components/pages/Section/index'
import SectionCreate from '@/components/pages/Section/create'
import SectionEdit from '@/components/pages/Section/edit'

import Session from '@/components/pages/Session/index'
import SessionCreate from '@/components/pages/Session/create'
import SessionEdit from '@/components/pages/Session/edit'

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

    //Student
    {
      path: '/Student',
      name: 'Student',
      component: Student
    },
    {
      path: '/Student/Create',
      name: 'StudentCreate',
      component: StudentCreate
    },
    {
      path: '/Student/Edit',
      name: 'StudentEdit',
      component: StudentEdit
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
      path: '/Department/Edit',
      name: 'DepartmentEdit',
      component: DepartmentEdit
    },


    //Subject
    {
      path: '/Subject',
      name: 'Subject',
      component: Subject
    },
    {
      path: '/Subject/Create',
      name: 'SubjectCreate',
      component: SubjectCreate
    },
    {
      path: '/Subject/Edit',
      name: 'SubjectEdit',
      component: SubjectEdit
    },

    //Post
    {
      path: '/Post',
      name: 'Post',
      component: Post
    },
    {
      path: '/Post/Create',
      name: 'PostCreate',
      component: PostCreate
    },
    {
      path: '/Post/Edit',
      name: 'PostEdit',
      component: PostEdit
    },

    //Section
    {
      path: '/Section',
      name: 'Section',
      component: Section
    },
    {
      path: '/Section/Create',
      name: 'SectionCreate',
      component: SectionCreate
    },
    {
      path: '/Section/Edit',
      name: 'SectionEdit',
      component: SectionEdit
    },

    //Session
    {
      path: '/Session',
      name: 'Session',
      component: Session
    },
    {
      path: '/Session/Create',
      name: 'SessionCreate',
      component: SessionCreate
    },
    {
      path: '/Session/Edit',
      name: 'SessionEdit',
      component: SessionEdit
    }
  ]
})
