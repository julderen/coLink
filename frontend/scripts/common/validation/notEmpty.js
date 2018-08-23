export default value => field => (String(value).length < 0 || !value ? `Необходимо указать ${field}` : undefined);
