import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearch, setLocation, setIndustry, setSort, applyFilters, setEmpNo } from "../../slices/companiesSlice";

const Filter = () => {
  const dispatch = useDispatch();
  const { data, search, location, industry, sort, empNo } = useSelector(
    (state) => state.companies
  );

  // Unique dropdown values
  const locations = ["Location", ...new Set(data.map((c) => c.location))];
  const industries = ["Industry", ...new Set(data.map((c) => c.industry))];
  const empRanges = ["Company Size", "0-10", "11-50", "51-100", "101-200", "201-1000", "1000+"];

  const handleFilterChange = (fn, value) => {
    dispatch(fn(value));
    dispatch(applyFilters());
  };

  return (
    <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch gap-3 p-4 shadow-md rounded-lg bg-white mb-4">

  <input
    type="text"
    placeholder="Search by name.."
    value={search}
    onChange={(e) => handleFilterChange(setSearch, e.target.value)}
    className="w-full sm:flex-1 md:w-auto px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
  />

  <select
    value={location}
    onChange={(e) => handleFilterChange(setLocation, e.target.value)}
    className="w-full sm:flex-1 md:w-auto px-3 py-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
  >
    {locations.map((loc) => (
      <option key={loc} value={loc}>
        {loc}
      </option>
    ))}
  </select>

  <select
    value={industry}
    onChange={(e) => handleFilterChange(setIndustry, e.target.value)}
    className="w-full sm:flex-1 md:w-auto px-3 py-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
>
    {industries.map((ind) => (
      <option key={ind} value={ind}>
        {ind}
      </option>
    ))}
  </select>

  <select
    value={empNo}
    onChange={(e) => handleFilterChange(setEmpNo, e.target.value)}
    className="w-full sm:flex-1 md:w-auto px-3 py-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
  >
    {empRanges.map((range) => (
      <option key={range}>{range}</option>
    ))}
  </select>

  <select
    value={sort}
    onChange={(e) => handleFilterChange(setSort, e.target.value)}
    className="w-full sm:flex-1 md:w-auto px-3 py-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
>
    <option value="name-asc">A → Z</option>
    <option value="name-desc">Z → A</option>
  </select>
</div>

  );
};

export default Filter;
