import mockTickets from "../data/mockTickets";

export const getTickets = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(mockTickets);
    }, 800);
  });
};
