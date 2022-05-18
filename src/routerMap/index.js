const routerMap = [
    {
      path: "/cms/home",
      name: "Home", //首页
      meta: {
        index: 3,
      },
      component: (resolve) => require(["@/views/home"], resolve),
    },
    {
        path: "/cms/product",
        name: "product", //领料
        meta: {
          index: 3,
        },
        component: (resolve) => require(["@/views/product"], resolve),
      },
      {
        path: "/cms/working",
        name: "working", //施工
        meta: {
          index: 3,
        },
        component: (resolve) => require(["@/views/working"], resolve),
      },
  ];
  export default routerMap;