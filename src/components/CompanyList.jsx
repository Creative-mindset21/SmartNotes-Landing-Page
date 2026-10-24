const CompanyList = ({ company }) => {
  return (
    <li>
      <img src={company} alt="" className="cursor-pointer" />
    </li>
  );
};

export default CompanyList;
