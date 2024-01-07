import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import MainLayout from "@/layouts/main-layout/MainLayout.vue";
import Profile from "@/components/profile-layout-page/Profile.vue";
import ProfileLayout from "../layouts/ProfileLayout.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "MainLayout",
      component: MainLayout,
      redirect: "/",
      children: [
        {
          path: "/sign-up",
          name: "Register",
          component: () => import("../auth/Register.vue"),
        },
        {
          path: "/",
          name: "Home",
          component: Home,
        },
        {
          path: "/guess-products",
          name: "GuessProducts",
          component: () =>
            import(
              "../components/banner-products/guess-products/FilterGuessProducts.vue"
            ),
        },
        {
          path: "/guess-product/:id",
          name: "GuessProductDetails",
          component: () =>
            import(
              "../components/banner-products/guess-products/GuessProductDetails.vue"
            ),
        },
        {
          path: "/carters-products",
          name: "CartersProducts",
          component: () =>
            import(
              "../components/banner-products/carters-products/FilterCartersProducts.vue"
            ),
        },
        {
          path: "/carters-product/:id",
          name: "CartersProductDetails",
          component: () =>
            import(
              "../components/banner-products/carters-products/CartersProductDetails.vue"
            ),
        },
        {
          path: "/sale-products",
          name: "SaleProduct",
          component: () =>
            import(
              "../components/banner-products/sale-products/FilterSaleProduct.vue"
            ),
        },
        {
          path: "/sale-product/:id",
          name: "SaleProductDetails",
          component: () =>
            import(
              "../components/banner-products/sale-products/SaleProductDetails.vue"
            ),
        },
        {
          path: "/express-products",
          name: "ExpressProducts",
          component: () =>
            import(
              "../components/banner-products/express-products/FilterExpressProducts.vue"
            ),
        },
        {
          path: "/express-product/:id",
          name: "ExpressProductDetails",
          component: () =>
            import(
              "../components/banner-products/express-products/ExpressProductDetails.vue"
            ),
        },
        {
          path: "/active-wear",
          name: "ActiveWearProducts",
          component: () =>
            import(
              "../components/shop-brand-products/active-wear/FilterActiveWear.vue"
            ),
        },
        {
          path: "/active-wear/:id",
          name: "ActiveWearDetails",
          component: () =>
            import(
              "../components/shop-brand-products/active-wear/ActiveWearDetails.vue"
            ),
        },
        {
          path: "/kids-clothes",
          name: "KidsClothesProducts",
          component: () =>
            import(
              "../components/shop-brand-products/kids-clothes/FilterKidsClothes.vue"
            ),
        },
        {
          path: "/kids-cloth/:id",
          name: "KidsClothesDetails",
          component: () =>
            import(
              "../components/shop-brand-products/kids-clothes/KidsClothesDetails.vue"
            ),
        },
        {
          path: "/sunglasses",
          name: "SunglassesProducts",
          component: () =>
            import(
              "../components/shop-brand-products/sunglasses/FilterSunglasses.vue"
            ),
        },
        {
          path: "/sunglasses/:id",
          name: "SunglassesDetails",
          component: () =>
            import(
              "../components/shop-brand-products/sunglasses/SunglassesDetails.vue"
            ),
        },
        {
          path: "/accessories-and-bags",
          name: "AccessoriesAndBagsProducts",
          component: () =>
            import(
              "../components/shop-brand-products/accessories-and-bags/FilterAccessoriesAndBags.vue"
            ),
        },
        {
          path: "/accessories-and-bags/:id",
          name: "AccessoriesAndBagsDetails",
          component: () =>
            import(
              "../components/shop-brand-products/accessories-and-bags/AccessoriesAndBagsDetails.vue"
            ),
        },
        {
          path: "/woo",
          name: "WooProducts",
          component: () =>
            import("../components/woo-products/FilterWooProducts.vue"),
        },
        {
          path: "/woo/:id",
          name: "WooDetails",
          component: () => import("../components/woo-products/WooDetails.vue"),
        },

        //categories
        {
          path: "/categories",
          name: "Categories",
          component: () => import("../components/categories/Categories.vue"),
        },
        {
          path: "/women",
          name: "Women",
          component: () => import("../components/categories/women/Women.vue"),
        },
        {
          path: "/men",
          name: "Men",
          component: () => import("../components/categories/men/Men.vue"),
        },
        {
          path: "/juniors-kids",
          name: "JuniorsAndKids",
          component: () =>
            import("../components/categories/juniors-kids/JuniorsAndKids.vue"),
        },
        {
          path: "/electronics",
          name: "ElectronicsProducts",
          component: () =>
            import(
              "../components/categories/electronics/FilterElectronicsProducts.vue"
            ),
        },
        {
          path: "/electronics/:id",
          name: "ElectronicsProductDetails",
          component: () =>
            import(
              "../components/categories/electronics/ElectronicsProductDetails.vue"
            ),
        },
        {
          path: "/beauty",
          name: "BeautyProducts",
          component: () =>
            import("../components/categories/beauty/FilterBeautyProducts.vue"),
        },
        {
          path: "/beauty/:id",
          name: "BeautyProductDetails",
          component: () =>
            import("../components/categories/beauty/BeautyProductDetails.vue"),
        },

        {
          path: "/cart",
          name: "Cart",
          component: () => import("../reusable/cart/Cart.vue"),
        },
        {
          path: "/checkout",
          name: "Checkout",
          component: () => import("@/components/Checkout.vue"),
        },
        {
          path: "/blog",
          name: "Blog",
          component: () => import("../components/blogs/Blog.vue"),
        },
        {
          path: "/contact-us",
          name: "ContactUs",
          component: () => import("../components/ContactUs.vue"),
        },
      ],
    },

    //profile
    {
      path: "/profile",
      name: "ProfileLayout",
      component: ProfileLayout,
      redirect: "/profile",
      children: [
        {
          path: "/profile",
          name: "Profile",
          component: Profile,
        },
        {
          path: "/addresses",
          name: "Addresses",
          component: () =>
            import("../components/profile-layout-page/addresses/Addresses.vue"),
        },
        {
          path: "/addresses/create",
          name: "CreateAddress",
          component: () =>
            import(
              "@/components/profile-layout-page/addresses/CreateAddress.vue"
            ),
        },
        {
          path: "/orders-history",
          name: "OrdersHistory",
          component: () =>
            import("@/components/profile-layout-page/orders/OrdersHistory.vue"),
        },
      ],
    },

    {
      path: "/:catchAll(.*)",
      name: "Error404",
      component: () => import("../views/Error404.vue"),
    },
  ],

  scrollBehavior() {
    return { top: 0, left: 0, behavior: "instant" };
  },
});

// router.beforeEach((to, from, next) => {
//   document.title = to.name;
//   next();
// });

export default router;
