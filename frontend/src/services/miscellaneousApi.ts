import fetchData from '@/utils/helpers/fetchData';

export function miscellaneousApi() {
  return {
    getAll: () => {
      const url = '/miscellaneous';
      return fetchData({ url });
    },
    updateMaxTable: (maxTable: number) => {
      const url = '/miscellaneous/maxTable';
      const options: RequestInit = {
        method: 'PUT',
        body: JSON.stringify({ maxTable }),
        headers: {
          'Content-Type': 'application/json',
        },
      };
      return fetchData({ url, options });
    },
    updateMaxGuestsPerTable: (maxGuestsPerTable: number) => {
      const url = '/miscellaneous/maxGuestsPerTable';
      const options: RequestInit = {
        method: 'PUT',
        body: JSON.stringify({ maxGuestsPerTable }),
        headers: {
          'Content-Type': 'application/json',
        },
      };
      return fetchData({ url, options });
    },
    updateOpenHours: (openHours: string) => {
      const url = '/miscellaneous/openHours';
      const options: RequestInit = {
        method: 'PUT',
        body: JSON.stringify({ openHours }),
        headers: {
          'Content-Type': 'application/json',
        },
      };
      return fetchData({ url, options });
    },
  };
}
