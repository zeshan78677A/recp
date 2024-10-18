import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllRecipes = createAsyncThunk("recipes/fetchAllRecipes", async () => {
  const result = await axios.get("https://dummyjson.com/recipes");
  sessionStorage.setItem("allRecipes", JSON.stringify(result.data.recipes));
  return result.data.recipes;
});

const recipeSlice = createSlice({
  name: 'recipes',
  initialState: {
    allRecipes: [],
    dummyAllRecipes: [],
    loading: false,
    error: ""
  },
  reducers: {
    // Recipe search
    searchRecipe: (state, action) => {
      state.allRecipes = state.dummyAllRecipes.filter(item =>
        item.name.toLowerCase().includes(action.payload)
      );
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllRecipes.fulfilled, (state, action) => {
      state.allRecipes = action.payload;
      state.dummyAllRecipes = action.payload;
      state.loading = false;
      state.error = "";
    });
    builder.addCase(fetchAllRecipes.pending, (state) => {
      state.allRecipes = [];
      state.dummyAllRecipes = [];
      state.loading = true;
      state.error = "";
    });
    builder.addCase(fetchAllRecipes.rejected, (state) => {
      state.allRecipes = [];
      state.dummyAllRecipes = [];
      state.loading = false;
      state.error = "API call failed. Please try again later.";
    });
  }
});

export const { searchRecipe } = recipeSlice.actions;
export default recipeSlice.reducer;
