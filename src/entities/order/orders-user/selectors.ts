import {RootStateType} from "components/services/providers/store";


// export const selectIsStreamingOrdersAllOfUser = (state: RootStateType) => state.ordersAllOfUser.isStreaming;
// export const selectOrdersAllOfUserOnlyData = (state: RootStateType) => state.ordersAllOfUser.data;
export const selectOrdersAllOfUser = (state: RootStateType) => state.ordersAllOfUser;