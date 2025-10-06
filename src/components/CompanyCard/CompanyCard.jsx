import pic from "../../assets/company-pic.jpg";

const CompanyCard = ({ company }) => (
  <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg border border-emerald-600 bg-white hover:shadow-2xl transition-all duration-300">
    {/* Image */}
    <img src={pic} alt={company.name} className="w-full h-40 object-cover" />

    {/* Info Section */}
    <div className="p-4 bg-gradient-to-b from-emerald-50 to-white">
      <h3 className="text-xl font-semibold text-emerald-900 tracking-wide">
        {company.name}
      </h3>
      <p className="mt-1 text-sm text-gray-600 font-medium">
        {company.location}
      </p>
      <p className="mt-2 text-sm text-amber-700 font-semibold">
        {company.industry}
      </p>
      <p className="mt-2 text-xs text-slate-500">
        Employees: <span className="font-bold text-emerald-800">{company.employees}</span>
      </p>
    </div>
  </div>
);

export default CompanyCard;
