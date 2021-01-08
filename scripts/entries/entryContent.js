import {
  useJournalEntries,
  getJournalEntries,
  deleteEntry,
} from "./entryDataProvider.js";
import { entry } from "./entry.js";

const eventHub = document.querySelector(".container");
// refrence element to add code after
const contentElement = document.querySelector(".journalContent");

eventHub.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id.startsWith("deleteEntry--")) {
    const [prefix, id] = clickEvent.target.id.split("--");
    //needs to run deleteEntry Function
    deleteEntry(id).then(() => {
      journalContent();
    });
  }
});

eventHub.addEventListener("journalStateChanged", (customEvent) => {
  journalContent();
});

export const journalContent = () => {
  getJournalEntries().then(() => {
    let journalEntries = useJournalEntries();
    
    let journalCards = [];
    for (const journalObject of journalEntries) {
      journalCards.push(entry(journalObject))
    }
    contentElement.innerHTML = journalCards.join("");
  });
};
