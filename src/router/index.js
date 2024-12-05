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
    {
        path: '/user/:id',
        component: UserDetailView
    }

]

// create router 
const router = createRouter({
    history: createMemoryHistory(),
    routes: routes // bisa juga tidak di tulis karena sudah di deklarasi di atas
})

export default router