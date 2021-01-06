import { useJournalEntries, getJournalEntries } from "./journalDataProvider.js";
import { journalEntry } from "./journalEntry.js";
import { journalForm } from "./JournalForm.js";

const eventHub = document.querySelector(".container");
// refrence element to add code after
const contentElement = document.querySelector(".journalContent");

eventHub.addEventListener("journalStateChanged", (customEvent) => {
  journalContent();
});

export const journalContent = () => {
  getJournalEntries().then(() => {
    let journalEntries = useJournalEntries();
    for (const journalObject of journalEntries) {
      const journalHTML = journalEntry(journalObject);
      contentElement.innerHTML += journalHTML;
    }
  });
};
