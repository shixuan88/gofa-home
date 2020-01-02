import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
export default new Router({
    mode: 'history',
    base: process.env.VUE_APP_FILE,
    routes: [
        {
            name: '随访中心/随访计划列表',
            path: '/',
            component: resolve => require(['@/views/follow/FollowList'], resolve),
            meta: {
                name: '随访中心'
            },
            redirect: '/FollowList'
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: resolve => require(['@/views/About'], resolve)
        },
        {
            name: '登陆',
            path: '/Login',
            component: resolve => require(['@/views/Login'], resolve),
            meta: {
                name: '登陆'
            }
        },
        {
            name: '随访中心/随访规则列表',
            path: '/FollowList',
            component: resolve => require(['@/views/follow/FollowList'], resolve),
            meta: {
                name: '随访中心'
            }
        },
        {
            name: '随访中心/随访规则列表/新建计划',
            path: '/AddPlan',
            component: resolve => require(['@/views/follow/AddPlan'], resolve),
            meta: {
                name: '随访规则列表/新建计划'
            }
        },
        {
            name: '随访中心/随访规则列表/随访详情',
            path: '/FollowDetail',
            component: resolve => require(['@/views/follow/FollowDetail'], resolve),
            meta: {
                name: '随访规则列表/随访详情'
            }
        },
        {
            name: '随访中心/随访规则列表/随访详情/编辑权限',
            path: '/FollowDetail/permission',
            component: resolve => require(['@/views/follow/EditPermission'], resolve),
            meta: {
                name: '随访规则列表/随访详情/编辑权限'
            }
        },
        {
            name: '随访中心/随访规则列表/随访详情/患者修改',
            path: '/FollowDetail/editPatient',
            component: resolve => require(['@/views/follow/EditPatient'], resolve),
            meta: {
                name: '随访规则列表/随访详情/患者修改'
            }
        },
        {
            name: '随访中心/随访规则列表/患者列表',
            path: '/PatientList',
            component: resolve => require(['@/views/follow/PatientList'], resolve),
            meta: {
                name: '随访规则列表/患者列表'
            }
        },
        {
            name: '随访中心/随访规则列表/患者随访详情',
            path: '/PatientDetail',
            component: resolve => require(['@/views/follow/PatientDetail'], resolve),
            meta: {
                name: '患者列表/患者随访详情'
            }
        },
        {
            name: '知识库/随访模板管理',
            path: '/FollowPlanList',
            component: resolve => require(['@/views/knowledge/FollowPlanList'], resolve),
            meta: {
                name: '随访模板管理'
            }
        },
        {
            name: '知识库/随访模板管理/创建(编辑模板)',
            path: '/CreateTemplate',
            component: resolve => require(['@/views/knowledge/CreateTemplate'], resolve),
            meta: {
                name: '创建(编辑模板)'
            }
        },
        {
            name: '知识库/随访模板管理/随访计划模板详情',
            path: '/PlanTemplateDetail',
            component: resolve => require(['@/views/knowledge/PlanTemplateDetail'], resolve),
            meta: {
                name: '随访模板管理/随访计划模板详情'
            }
        },
        {
            name: '知识库/随访表单管理',
            path: '/FollowForm',
            component: resolve => require(['@/views/knowledge/FollowForm'], resolve),
            meta: {
                name: '随访表单管理'
            }
        },
        {
            name: '知识库/患教文章管理',
            path: '/EduArticleList',
            component: resolve => require(['@/views/knowledge/EduArticleList'], resolve),
            meta: {
                name: '患教文章管理'
            }
        },
        {
            name: '知识库/患教文章管理/附件详情',
            path: '/aritileDetail',
            component: resolve => require(['@/views/knowledge/aritileDetail'], resolve),
            meta: {
                name: '附件详情'
            }
        },
        {
            name: '统计中心/随访工作量统计',
            path: '/FollowUpSta',
            component: resolve => require(['@/views/statistics/FollowUpSta'], resolve),
            meta: {
                name: '统计中心'
            }
        },
        {
            name: '统计中心/满意度统计',
            path: '/Satisfaction',
            component: resolve => require(['@/views/statistics/Satisfaction'], resolve),
            meta: {
                name: '统计中心'
            }
        },
        {
            name: '统计中心/满意度统计',
            path: '/Demo',
            component: resolve => require(['@/views/demo'], resolve),
            meta: {
                name: '统计中心'
            }
        },
        {
            name: '个人中心/团队管理',
            path: '/TeamManage',
            component: resolve => require(['@/views/myCenter/TeamManage'], resolve),
            meta: {
                name: '团队管理'
            }
        },
        {
            name: '个人中心/团队管理/成员列表',
            path: '/TeamPeopleList',
            component: resolve => require(['@/views/myCenter/TeamPeopleList'], resolve),
            meta: {
                name: '成员列表'
            }
        },
        {
            name: '个人中心/个人设置/基本信息',
            path: '/UserBaseInfo',
            component: resolve => require(['@/views/myCenter/UserBaseInfo'], resolve),
            meta: {
                name: '基本信息'
            }
        },
        {
            name: '患者档案/患者列表',
            path: '/patientFile',
            component: resolve => require(['@/views/patientFile/header'], resolve),
            children: [
                {
                    path: '/',
                    component: resolve => require(['@/views/patientFile/list'], resolve),
                    meta: {
                        name: '患者列表'
                    },
                    alias: 'list'
                },
                {
                    path: 'medicalRecordList',
                    component: resolve => require(['@/views/patientFile/medicalRecordList'], resolve),
                    meta: {
                        name: '电子病历'
                    }
                },
                {
                    path: 'medicalRecordDetail',
                    component: resolve => require(['@/views/patientFile/medicalRecordDetail'], resolve),
                    meta: {
                        name: '电子病历详情'
                    }
                },
                {
                    path: 'detail',
                    component: resolve => require(['@/views/patientFile/detail'], resolve),
                    meta: {
                        name: '患者详情'
                    }
                }
            ]
        }
    ]
})
