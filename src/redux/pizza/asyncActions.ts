import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { SearchPizzaParams } from "./slice";
import { PizzaItem } from "./types";

export const fetchPizzas = createAsyncThunk<PizzaItem[], SearchPizzaParams>('pizza/fetchPizzasStatus', async (params) => {
   const { category, sortBy, order, search, currentPage } = params;
 
   const { data } = await axios.get<PizzaItem[]>(
     `https://649ad6c9bf7c145d0239910f.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`,
   );
   return data;
 });