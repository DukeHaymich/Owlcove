import fetchData from '@/utils/helpers/fetchData';

export function menuApi() {
  return {
    getCategories: () => {
      const url = '/category';
      const options: RequestInit = {
        cache: 'no-store',
      };
      return fetchData({ url, options });
    },
    getMenus: () => {
      const url = '/menus';
      const options: RequestInit = {
        cache: 'no-store',
      };
      return fetchData({ url, options });
    },
  };
}
