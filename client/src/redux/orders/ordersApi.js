import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import getBaseUrl from "../../utils/baseURL";  

const ordersApi = createApi({
  reducerPath: "ordersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${getBaseUrl()}`, // Make sure this points to the /api base path
    credentials: "include", // Ensure authentication is handled properly
  }),
  tagTypes: ["Orders"],
  endpoints: (builder) => ({
    // Mutation to create an order
    createOrder: builder.mutation({
      query: (newOrder) => ({
        url: "/orders",  // Correctly points to the /orders endpoint
        method: "POST",
        body: newOrder,
        credentials: "include", // For authentication (if needed)
      }),
    }),
    // Query to get orders by email
    getOrderByEmail: builder.query({
      query: (email) => ({
        url: `/orders/email/${email}`,
      }),
      providesTags: ["Orders"],
    }),
  }),
});

export const { useCreateOrderMutation, useGetOrderByEmailQuery } = ordersApi;

export default ordersApi;
