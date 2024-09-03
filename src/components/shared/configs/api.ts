export const API_URL = 'https://norma.nomoreparties.space/api/'
export const API_PATH_INGREDIENTS = 'ingredients'
export const API_PATH_ORDER = 'orders'

// Auth
export const API_PATH_LOGIN  = 'auth/login'
export const API_PATH_REGISTER = 'auth/register'
export const API_PATH_LOGOUT = 'auth/logout'
export const API_PATH_REFRESH_TOKEN = 'auth/token'
export const API_PATH_FORGOT_PASSWORD = 'password-reset'
export const API_PATH_RESET_PASSWORD = 'password-reset/reset'

//Profile
export const API_PATH_USER  = 'auth/user'

//Websocket
export const API_WS_URL = 'wss://norma.nomoreparties.space/'
//Tape (Feed)
export const API_WS_PATH_ALL_ORDERS = 'orders/all'
//Profile
export const API_WS_PATH_USER_ALL_ORDERS = 'orders?token=$(accessToken)'
