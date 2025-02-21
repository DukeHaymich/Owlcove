import fetchData from '@/utils/helpers/fetchData';
import { IReservationForm } from '@/utils/type/reservation';

export function reservationApi() {
  return {
    getSlots: () => {
      const url = '/reservation/slots';
      return fetchData({ url });
    },
    getReservationByDateAndBranch: (date: string, branch: string) => {
      const url = `/reservation?` + new URLSearchParams({ date, branch });
      console.log(url);
      return fetchData({ url });
    },
    postReservation: (data: IReservationForm) => {
      const url = '/reservation';
      const options: RequestInit = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      };
      return fetchData({ url, options });
    },
  };
}
