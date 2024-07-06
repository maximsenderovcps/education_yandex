import {baseApi} from "components/shared/api";
import {API_PATH_INGREDIENTS} from "components/shared/configs/api";

import {mapProducts} from "./maps";
import {ProductDto} from "./types";
import {IProduct} from "../context";



const productAPI = baseApi.injectEndpoints({
  endpoints: builder => ({
      getProducts: builder.query<IProduct[], void>({
          query: () => API_PATH_INGREDIENTS,
          transformResponse: (response: ProductDto) => mapProducts(response),
      })
  })
})


export const { useGetProductsQuery } = productAPI