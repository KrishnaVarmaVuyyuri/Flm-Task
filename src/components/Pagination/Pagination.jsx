import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../../slices/companiesSlice";

const Pagination = () => {
  const dispatch = useDispatch();
  const { page, perPage, filtered } = useSelector((state) => state.companies);

  const totalPages = Math.ceil(filtered.length / perPage);

  return (
    <div className="flex justify-center items-center gap-4 my-6">
      {/* Prev Button */}
      <button
        disabled={page === 1}
        onClick={() => dispatch(setPage(page - 1))}
        className="px-4 py-2 rounded-lg border border-emerald-700 text-emerald-800 font-medium 
                   hover:bg-blue-500 hover:text-white transition-all 
                   disabled:opacity-40 disabled:cursor-not-allowed"
      >
        Prev
      </button>

      {/* Page Indicator */}
      <span className="text-sm font-semibold text-slate-700 bg-emerald-50 px-3 py-1 rounded-full shadow-sm">
        Page <span className="text-emerald-800">{page}</span> of{" "}
        <span className="text-amber-700">{totalPages}</span>
      </span>

      {/* Next Button */}
      <button
        disabled={page === totalPages}
        onClick={() => dispatch(setPage(page + 1))}
        className="px-4 py-2 rounded-lg border border-emerald-700 text-emerald-800 font-medium 
                   hover:bg-blue-500 hover:text-white transition-all 
                   disabled:opacity-40 disabled:cursor-not-allowed"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
