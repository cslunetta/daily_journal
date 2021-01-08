import { useJournalEntries, getJournalEntries } from "./entryDataProvider.js";
import { entry } from "./entry.js";
import { journalForm } from "./entryForm.js";

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
      const journalHTML = entry(journalObject);
      contentElement.innerHTML += journalHTML;
    }
  });
};
