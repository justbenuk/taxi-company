import { FaCheck, FaMinusCircle } from "react-icons/fa";
const HolidayItem = ({ holiday }) => {
  return (
    <tr
      key={holiday.id}
      className="border-b text-center overflow-scroll overflow-x-hidden"
    >
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {holiday.fromDate}
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {holiday.toDate}
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {holiday.returnToWorkDate}
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {holiday.totalDaysUsed}
      </td>
      <td className="flex flex-row text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap justify-center">
        {holiday.isApproved === false ? (
          <FaMinusCircle className="text-red-500 text-2xl" />
        ) : (
          <FaCheck className="text-green-500 text-2xl" />
        )}
      </td>
    </tr>
  );
};
export default HolidayItem;
