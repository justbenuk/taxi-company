import { useDispatch, useSelector } from "react-redux";
import { getHolidays } from "../../features/holiday/holidaySlice";
import { useEffect } from "react";

/* components */
import HolidayItem from "./HolidayItem";

const HolidayList = () => {
  const { holidays } = useSelector((state) => state.holiday);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHolidays());
  }, [dispatch, holidays]);

  if (!holidays) {
    return <p>Loading</p>;
  }

  return (
    <div className="flex flex-col h-[30vh]">
      <div className="overflow-x-auto scrollbar-hide sm:-mx-6 lg:-mx-8">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full">
              <thead className="border-b text-center">
                <tr>
                  <th
                    scope="col"
                    className="text-sm font-bold text-gray-900 px-6 py-4"
                  >
                    From Date
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-bold text-gray-900 px-6 py-4"
                  >
                    To Date
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-bold text-gray-900 px-6 py-4"
                  >
                    Return to work
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-bold text-gray-900 px-6 py-4"
                  >
                    Number of requested days
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-bold text-gray-900 px-6 py-4"
                  >
                    Approved
                  </th>
                </tr>
              </thead>
              <tbody className="border-b overflow-scroll">
                {holidays.map((holiday) => (
                  <HolidayItem key={holiday._id} holiday={holiday} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HolidayList;
