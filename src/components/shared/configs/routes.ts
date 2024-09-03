export const ROUTES:Record<string, string> = {
    HOME: "/",

    // Auth
    LOGIN: "/login",
    LOGOUT: "/logout",
    REGISTER: "/register",
    FORGOT: "/forgot-password",
    RESET: "/reset-password",

    // Feed
    FEED: "/feed",
    ORDER_IN_FEED: "/feed/:id",

    // Ingredient
    INGREDIENT_DETAIL: "/ingredients/:id",

    // Profile
    PROFILE: "/profile",
    ORDERS_IN_PROFILE: "/profile/orders",
    ORDER_IN_PROFILE: "/profile/orders/:id",
}