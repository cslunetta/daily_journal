import { useJournalEntries } from "./journalDataProvider.js";

useJournalEntries();

const journalLog = useJournalEntries();
console.log(journalLog);
