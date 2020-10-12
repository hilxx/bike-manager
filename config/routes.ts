export type Routes = Array<
  {
    /**
     * Any valid URL path
     */
    path?: string;
    /**
     * A React component to render only when the location matches.
     */
    component?: string | (() => any);
    wrappers?: string[];
    /**
     * navigate to a new location
     */
    redirect?: string;
    /**
     * When true, the active class/style will only be applied if the location is matched exactly.
     */
    exact?: boolean;
    routes?: Routes;
    [k: string]: any;
  }
>


const routes: Routes = [
  {
    path: '/user',
    component: '../layouts/UserLayout',
    routes: [
      {
        name: 'login',
        path: '/user/login',
        component: './user/login',
      },
    ],
  },
  {
    path: '/',
    // component: '../layouts/SecurityLayout',
    routes: [
      {
        path: '/',
        component: '../layouts/BasicLayout',
        authority: ['admin', 'user'],
        routes: [
          {
            path: '/',
            redirect: '/welcome',
          },
          {
            path: '/welcome',
            name: 'welcome',
            icon: 'smile',
            component: './Welcome',
          },
          {
            path: '/city',
            name: 'city',
            component: './city',
            icon: 'crown',
          },
          {
            path: '/order',
            name: 'order',
            component: './order',
            icon: 'crown',
          },
          {
            path: '/admin',
            name: 'admin',
            icon: 'crown',
            component: './Admin',
            authority: ['admin'],
            routes: [
              {
                path: '/admin/sub-page',
                name: 'sub-page',
                icon: 'smile',
                component: './Welcome',
                authority: ['admin'],
              },
            ],
          },
          {
            name: 'list.table-list',
            icon: 'table',
            path: '/list',
            component: './ListTableList',
          },
          {
            component: './404',
          },
        ],
      },
      {
        component: './404',
      },
    ],
  },
  {
    component: './404',
  },
]

export default routes