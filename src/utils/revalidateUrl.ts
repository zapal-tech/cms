export const revalidateUrl = (path: string) => {
  const revalidationApiUrl = `${process.env.PAYLOAD_PUBLIC_SITE_URL}/api/revalidate`;
  const pageToRevalidate = path.startsWith('/') ? path : `/${path}`;

  console.log(`Revalidating: ${process.env.PAYLOAD_PUBLIC_SITE_URL}${pageToRevalidate}`);

  return fetch(revalidationApiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Token: process.env.REVALIDATE_API_TOKEN,
      'Page-Url': pageToRevalidate,
    },
  }).then((res) => {
    if (res.status !== 200)
      throw new Error(`Failed to revalidate: ${process.env.PAYLOAD_PUBLIC_SITE_URL}${pageToRevalidate}`);
    else console.info(`Revalidated: ${process.env.PAYLOAD_PUBLIC_SITE_URL}${pageToRevalidate}`);

    return res;
  });
};
