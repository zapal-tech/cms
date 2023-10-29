export const getSlugifiableData = (data: any): string =>
  data.name ||
  (data.firstName && data.lastName ? `${data.firstName} ${data.lastName}` : data.firstName) ||
  data.title ||
  data.content?.name;
