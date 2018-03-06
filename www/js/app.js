// Init F7 Vue Plugin
Vue.use(Framework7Vue)

// Init Page Components
Vue.component('page-student', {
  template: '#page-student'
})
Vue.component('page-guardian', {
  template: '#page-guardian'
})
Vue.component('page-accountant', {
  template: '#page-accountant'
})
Vue.component('page-faculty', {
  template: '#page-faculty'
})
Vue.component('page-creator', {
  template: '#page-creator'
})
Vue.component('page-about', {
  template: '#page-about'
})
Vue.component('page-form', {
  template: '#page-form'
})
Vue.component('page-dynamic-routing', {
  template: '#page-dynamic-routing'
})

// Handle device ready event
// Note: You may want to check out the vue-cordova package on npm for cordova specific handling with vue - https://www.npmjs.com/package/vue-cordova
document.addEventListener('deviceready', () => {
  console.log("DEVICE IS READY!");    
}, false)

// Init App
new Vue({
  el: '#app',
  // Init Framework7 by passing parameters here
  framework7: {
    root: '#app',
    /* Uncomment to enable Material theme: */
     material: true,
    routes: [
      {
        path: '/student/',
        component: 'page-student'
      },
      {
        path: '/guardian/',
        component: 'page-guardian'
      },
      {
        path: '/accoutant/',
        component: 'page-accoutant'
      },
      {
        path: '/faculty/',
        component: 'page-faculty'
      },
      {
        path: '/creator/',
        component: 'page-creator'
      },
      {
        path: '/about/',
        component: 'page-about'
      },
      {
        path: '/form/',
        component: 'page-form'
      },
      {
        path: '/dynamic-route/blog/:blogId/post/:postId/',
        component: 'page-dynamic-routing'
      }
    ],
  }
});



