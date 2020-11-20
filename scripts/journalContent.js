import { useJournalEntries } from "./journalDataProvider.js"
import { journalEntry } from "./journalEntry.js"

export const journalContent = () => {
  // refrence element to add code after
  const contentElement = document.querySelector(".journalContent");
  const journalData = useJournalEntries()

  for (const journalObject of journalData) {
    const journalHTML = journalEntry(journalObject);
    contentElement.innerHTML += journalHTML;
  }
}