import {baseApi} from "components/shared/api";

import {API_PATH_ORDER} from "components/shared/configs/api";

import {IOrder} from "../../models";

import {mapResponse} from "./maps";
import {TOrderBody, TOrdersDto} from "./types";


export const orderAPI = baseApi.injectEndpoints({
    endpoints: builder => ({
        getOrder: builder.query<IOrder, TOrderBody>({
            query: ({number}) => ({
                url: API_PATH_ORDER + `/${number}`,
                method: 'GET'
            }),
            transformResponse: (response: TOrdersDto) => mapResponse(response),
        })
    })
})

// export const { useGetOrderQuery } = orderAPI
