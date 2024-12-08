// setup router
import {
    createRouter,
    createMemoryHistory
} from "vue-router";
// import views
import DashboardView from "../views/Dashboard.vue"
import AboutView from "../views/About.vue"
import UserView from "../views/User.vue"
import UserDetailView from "../views/UserDetail.vue"
import UserProfileView from "../views/UserProfile.vue"
import UserPostView from "../views/UserPost.vue"
import UserIndexView from "../views/UserIndex.vue"


// create jalur
const routes = [{
        path: '/',
        component: DashboardView
    },
    {
        path: '/about',
        component: AboutView
    },
    {
        path: '/user',
        component: UserView
    },
    // {
    //     path: '/user/:id',
    //     component: UserDetailView
    // },
    // {
    //     path: '/user/:name/profile',
    //     component: UserProfileView
    // },
    // {
    //     path: '/user/:name/post',
    //     component: UserPostView
    // }
    { // nested route
        path: '/user/:id',
        component: UserIndexView,
        // yang childred pertama itu mengacu ke path /user/:id
        children: [{
                path: '',
                component: UserDetailView
            },
            {
                path: '/user/:id/posts',
                component: UserPostView
            },
            {
                path: '/user/:id/profile',
                component: UserProfileView
            }
        ]
    }

]

// create router 
const router = createRouter({
    history: createMemoryHistory(),
    routes: routes // bisa juga tidak di tulis karena sudah di deklarasi di atas
})

export default router