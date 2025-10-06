import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCompanies = createAsyncThunk("companies/fetch", async () => {
  const res = await fetch("/companies.json");
  return res.json();
});

const companiesSlice = createSlice({
  name: "companies",
  initialState: {
    data: [],
    filtered: [],
    status: "idle",
    search: "",
    location: "All",
    industry: "All",
    empNo: "Any",
    sort: "name-asc",
    page: 1,
    perPage:6,
  },
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
      state.page = 1;
    },
    setLocation: (state, action) => {
      state.location = action.payload;
      state.page = 1;
    },
    setIndustry: (state, action) => {
      state.industry = action.payload;
      state.page = 1;
    },
    setEmpNo: (state, action) => {
      state.empNo = action.payload;
      state.page = 1;
    },
    setSort: (state, action) => {
      state.sort = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    applyFilters: (state) => {
      let result = [...state.data];


      if (state.search) {
        result = result.filter(c =>
          c.name.toLowerCase().includes(state.search.toLowerCase())
        );
      }


      if (state.location !== "All") {
        result = result.filter(c => c.location === state.location);
      }


      if (state.industry !== "All") {
        result = result.filter(c => c.industry === state.industry);
      }

      // 👥 employees filter
      if (state.empNo !== "Any") {
        if (state.empNo === "0-10") 
          {
          result = result.filter((c) => c.employees <= 10);
          } 
        else if (state.empNo === "11-50")
          {
          result = result.filter((c) => c.employees > 10 && c.employees <= 50);
          } 
        else if (state.empNo === "51-100")
          {
          result = result.filter((c) => c.employees > 50 && c.employees <= 100);
          } 
        else if (state.empNo === "101-200") 
          {
          result = result.filter((c) => c.employees > 100 && c.employees <= 200);
          }
        else if (state.empNo === "201-1000") 
          {
          result = result.filter((c) => c.employees > 200 && c.employees <= 1000);
          }
        else if(state.empNo === "1000+")
          {
          result = result.filter((c) => c.employees > 1000 )
          }
      }



      if (state.sort === "name-asc") {
        result.sort((a, b) => a.name.localeCompare(b.name));
      } else if (state.sort === "name-desc") {
        result.sort((a, b) => b.name.localeCompare(a.name));
      }

      state.filtered = result;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCompanies.fulfilled, (state, action) => {
      state.data = action.payload;
      state.filtered = action.payload;
      state.status = "done";
    });
  }
});

export const { setSearch, setLocation, setIndustry, setSort, setPage, applyFilters, setEmpNo } =
  companiesSlice.actions;

export default companiesSlice.reducer;
