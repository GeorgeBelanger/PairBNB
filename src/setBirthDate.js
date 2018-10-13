export default async event => {
  const data = { ...event.data };

  data.dateOfBirth = data.dateOfBirth || new Date(1999, 1, 1);

  return {
    data
  };
};