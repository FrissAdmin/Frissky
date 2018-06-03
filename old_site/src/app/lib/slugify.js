export default function slugify(...args) {
  let string  = '';

  if (args[0]) {
    string = args.join('-');
  }

  return string.toString().toLowerCase()
    .replace(/\s+/g, '-')          // Replace whitespace with hyphens
    .replace(/[^0-9a-zA-Z-]/g, '') // Remove non-word characters
    .replace(/_/g, '-')            // Replace underscores with hyphens
    .replace(/\-+/g, '-')          // Remove duplicate hyphens
    .replace(/(^\-+|\-+$)/g, '');  // Remove hyphens from the beginning and end
}
