export const sortDataById = (data: any[], order: "desc" | "asc") => {
  let sorted = [];

  order === "asc"
    ? (sorted = data.sort((a, b) => parseInt(b.id, 10) - parseInt(a.id, 10)))
    : (sorted = data.sort((a, b) => parseInt(a.id, 10) - parseInt(b.id, 10)));

  return sorted;
};
