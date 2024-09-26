export const sortDataById = (data: any[], order: "desc" | "asc") => {
  const dataCopy = [...data];

  let sorted = [];

  order === "desc"
    ? (sorted = dataCopy.sort((a, b) => parseInt(b.id, 10) - parseInt(a.id, 10)))
    : (sorted = dataCopy.sort((a, b) => parseInt(a.id, 10) - parseInt(b.id, 10)));

  return sorted;
};