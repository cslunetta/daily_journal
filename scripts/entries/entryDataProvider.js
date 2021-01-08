//eventHub
const eventHub = document.querySelector(".container");

const dispatchStateChangeEvent = () => {
  eventHub.dispatchEvent(new CustomEvent("journalStateChanged"));
};

// This is the original
let journalEntries = [];

/*
  You export a function that provides a version of the
  raw data in the format that you want
*/
export const useJournalEntries = () => {
  const sortedByDate = journalEntries.sort(
    (currentEntry, nextEntry) =>
      Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
  );
  return sortedByDate;
};

export const getJournalEntries = () => {
  return fetch("http://localhost:8088/entries?_expand=mood")
    .then((response) => response.json())
    .then((parsedJournalEntries) => {
      journalEntries = parsedJournalEntries;
    });
};

export const saveJournalEntry = (newJournalEntry) => {
  // Use `fetch` with the POST method to add your entry to your API
  return fetch("http://localhost:8088/entries?_expand=mood", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newJournalEntry),
  })
    .then(getJournalEntries) // <-- Get all journal entries
    .then(dispatchStateChangeEvent); // <-- Broadcast the state change event
};
