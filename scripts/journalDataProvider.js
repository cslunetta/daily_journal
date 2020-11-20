/*
 *   Journal data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

// This is the original data.
const journal = [
  {
    id: 1,
    date: "11/16/2020",
    concept: "HTML & CSS",
    entry:
      "We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
    mood: "Ok",
  },
  {
    id: 2,
    date: "11/17/2020",
    concept: "Git and GitHub",
    entry: "We discussed using git and github",
    mood: "alright",
  },
  {
    id: 3,
    date: "11/18/2020",
    concept: "Java script basics",
    entry: "started in on using javascript",
    mood: "mind blown",
  },
  {
    id: 4,
    date: "11/19/2020",
    concept: "Filtering Source Data Into Smaller Arrays",
    entry:
      "Started out with a quick lightning excersise and then went straight into chapter 13 learning how to filter arrays using javascript",
    mood: "making it work!",
  },
];

/*
  You export a function that provides a version of the
  raw data in the format that you want
*/
export const useJournalEntries = () => {
  const sortedByDate = journal.sort(
    (currentEntry, nextEntry) =>
      Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
  );
  return sortedByDate;
};
