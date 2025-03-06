import {
  HiCalendarDays,
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineChartBar,
} from "react-icons/hi2";

import Stat from "./Stat";
import { formatCurrency } from "@/utils/helpers";

function Stats({ bookings, confirmedStays, numDays, cabinCount }) {
  // 1.
  const numBookings = bookings.length;

  // 2.
  const sales = bookings.reduce((acc, booking) => acc + booking.totalPrice, 0);

  // 3.
  const checkins = confirmedStays.length;

  // 4.
  // Num checked in nights / all available nights (num days * num cabins)
  const numCheckedInNights = confirmedStays.reduce(
    (acc, confirmedStay) => acc + confirmedStay.numNights,
    0
  );
  const occupation = numCheckedInNights / (numDays * cabinCount);

  return (
    <>
      <Stat
        title="Bookings"
        color="blue"
        icon={<HiOutlineBriefcase />}
        value={numBookings}
      />
      <Stat
        title="Sales"
        color="green"
        icon={<HiOutlineBanknotes />}
        value={formatCurrency(sales)}
      />
      <Stat
        title="Check ins"
        color="indigo"
        icon={<HiCalendarDays />}
        value={checkins}
      />
      <Stat
        title="Occupancy rate"
        color="yellow"
        icon={<HiOutlineChartBar />}
        value={Math.round(occupation * 100) + "%"}
      />
    </>
  );
}

export default Stats;
