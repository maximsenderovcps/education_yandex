import {baseApi} from "components/shared/api";
import {API_PATH_ORDER} from "components/shared/configs/api";

import {IOrder} from "../models";

import {mapOrder} from "./maps";
import {IngredientsBody, OrderDto} from "./types";


const orderAPI = baseApi.injectEndpoints({
  endpoints: builder => ({
      postOrder: builder.mutation<IOrder, IngredientsBody>({
          query: (body: IngredientsBody) => ({
              url: API_PATH_ORDER,
              body,
              method: 'POST'
          }),
          transformResponse: (response: OrderDto) => mapOrder(response),
      })
  })
})

export const { usePostOrderMutation } = orderAPI