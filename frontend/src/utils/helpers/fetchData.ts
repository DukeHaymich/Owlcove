function getDomainApi() {
  const domain = process.env.NEXT_PUBLIC_DOMAIN_API || 'http://localhost:3005';
  const prefix = process.env.NEXT_PUBLIC_PREFIX_API || '';
  return domain + prefix;
}

interface IFetchData {
  url: string;
  params?: string;
  options?: RequestInit;
}

export default async function fetchData({ url, params, options }: IFetchData) {
  let path = getDomainApi();
  path += url.startsWith('/') ? url : '/' + url;
  path += params ? '?' + new URLSearchParams(params) : '';
  const response = await fetch(path, options);
  if (!response.ok) {
    const errorText = await response.text();
    console.error('Error', response.status, 'from', path);
    console.error('Detail:', errorText);
    throw new Error(errorText);
  }

  return response.json();
}
