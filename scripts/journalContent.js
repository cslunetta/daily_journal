import { useJournalEntries, getJournalEntries } from "./journalDataProvider.js";
import { journalEntry } from "./journalEntry.js";

// refrence element to add code after
const contentElement = document.querySelector(".journalContent");

export const journalContent = () => {
  getJournalEntries().then(() => {
    let journalEntries = useJournalEntries();
    for (const journalObject of journalEntries) {
      const journalHTML = journalEntry(journalObject);
      contentElement.innerHTML += journalHTML;
    }
  });
};
