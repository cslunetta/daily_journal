//  write function to output html for each journal entry

export const entry = (entry) => {
  return `
    <section class="journalEntry">
      <div class="journalEntry__date">Date: ${entry.date}</div>
      <div class="journalEntry__concepts">Concept: ${entry.concept}</div>
      <div class="journalEntry__mood">Mood: ${entry.mood.label}</div>
      <div class="journalEntry__entry">${entry.entry}</div>
      <div class="journalEntry__edit"><button type="submit">edit</button></div>
      <div class="journalEntry__delete"><button type="submit">Delete</button></div>
    </section>
  `;
};
