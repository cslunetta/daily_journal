//  write function to output html for each journal entry

export const journalEntry = (journalData) => {
  return `
    <section class="journalEntry">
      <div class="journalEntry__date">Date: ${journalData.date}</div>
      <div class="journalEntry__concepts">Concept: ${journalData.concept}</div>
      <div class="journalEntry__mood">Mood: ${journalData.mood}</div>
      <div class="journalEntry__entry">${journalData.entry}</div>
      <div class="journalEntry__edit"><button type="submit">edit</button></div>
      <div class="journalEntry__delete"><button type="submit">Delete</button></div>
    </section>
  `;
};
