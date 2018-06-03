export default (values) => values.map((value, index) => `$${index + 1}`).join(', ');
