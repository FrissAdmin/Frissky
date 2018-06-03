const getIn = (obj, keys = []) => {
  if (!Array.isArray(keys) || keys.length === 0) return obj;
  if (typeof obj !== 'object' || obj === null) return undefined;

  const nextKey = keys[0];
  if (!obj[nextKey]) return undefined;

  return getIn(obj[nextKey], keys.slice(1));
};

export default getIn;
