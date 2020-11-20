//  write function to output html for each journal entry

export const journalEntry = (journalData) => {
  return `
    <section>
      <div class="date">date</div>
      <div class="concepts">concepts</div>
      <div class="entry">entry</textarea></div>
      <div class="mood">mood</select></div>
      <div class="edit"><button type="submit">edit</button></div>
      <div class="delete"><button type="submit">Delete</button></div>
    </section>
  `;
};
