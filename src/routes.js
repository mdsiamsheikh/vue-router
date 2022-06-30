import HoMe from "./components/HoMe.vue";
import HeaDerVue from "./components/HeaDer.vue";

const UsErVue = (resolve) => {
  require.ensure(
    ["./components/user/UsEr.vue"],
    () => {
      resolve(require("./components/user/UsEr.vue"));
    },
    "user"
  );
};
const UserMtartVue = (resolve) => {
  require.ensure(
    ["./components/user/UserMtart.vue"],
    () => {
      resolve(require("./components/user/UserMtart.vue"));
    },
    "user"
  );
};
const UserEdit = (resolve) => {
  require.ensure(
    ["./components/user/UserEdit"],
    () => {
      resolve(require("./components/user/UserEdit"));
    },
    "user"
  );
};
const UserDetail = (resolve) => {
  require.ensure(
    ["./components/user/UserDetail.vue"],
    () => {
      resolve(require("./components/user/UserDetail.vue"));
    },
    "user"
  );
};

export const routes = [
  {
    path: "",
    name: "home",
    components: {
      default: HoMe,
      "header-top": HeaDerVue,
    },
  },
  {
    path: "/user",
    components: {
      default: UsErVue,
      "header-bottom": HeaDerVue,
    },
    children: [
      { path: "", component: UserMtartVue },
      {
        path: ":id",
        component: UserDetail,
        beforeEnter: (to, from, next) => {
          console.log("inside route setup");
          next();
        },
      },
      { path: ":id/edit", component: UserEdit, name: "UserEdit" },
    ],
  },
  { path: "/redirect-me", redirect: { name: "home" } },
  { path: "*", redirect: "/" },
];
