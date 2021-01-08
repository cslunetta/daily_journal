let moods = [];

export const useMoods = () => {
  const sortedByDate = moods.sort(
    (currentEntry, nextEntry) =>
      Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
  );
  return sortedByDate;
};

export const getMoods = () => {
  return fetch("http://localhost:8088/moods")
    .then((response) => response.json())
    .then((parsedMoods) => {
      moods = parsedMoods;
    });
};