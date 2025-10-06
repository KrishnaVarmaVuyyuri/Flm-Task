import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCompanies } from "./slices/companiesSlice";
import Filter from "./components/Filter/Filter";
import CompanyCard from "./components/CompanyCard/CompanyCard";
import Pagination from "./components/Pagination/Pagination";

function App() {
  const dispatch = useDispatch();
  const { filtered, page, perPage } = useSelector(state => state.companies);

  useEffect(() => {
    dispatch(fetchCompanies());
  }, [dispatch]);

  const start = (page - 1) * perPage;
  const paginated = filtered.slice(start, start + perPage);

  return (
    <>
    <div>
  <div className="bg-black h-64 sm:h-64 md:h-80 lg:h-96 
                  text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
                  text-white flex items-center justify-center text-center px-4">
    Company
  </div>
</div>
    <div className="container-fluid p-4 md:p-8 ">
      
      <Filter />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {paginated.map(c => <CompanyCard key={c.id} company={c} />)}
      </div>
      <Pagination />
    </div>
    </>
  );
}

export default App;
