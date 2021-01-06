import { saveJournalEntry } from "./journalDataProvider.js";

const eventHub = document.querySelector(".container");
const contentTarget = document.querySelector(".form--container");

const render = () => {
  contentTarget.innerHTML = `
    <form class="form" action="">
      <div class="form--containerTop">
        <fieldset class="form__journalDate flexColumn">
          <label for="journalDate">Date of Entry</label>
          <input type="date" name="journalDate" id="journalDate">
        </fieldset>
        <fieldset class="form__concepts flexColumn">  
          <label for="concepts">Concepts Covered</label>
          <input type="text" name="concepts" id="concepts">
        </fieldset>
        <fieldset class="form__mood flexColumn">
          <label for="mood">Mood for the Day</label>
          <select name="mood" id="mood">
            <option value="confused">Confused</option>
            <option value="ok">OK</option>
            <option value="alright">Alright</option>
            <option value="mind_blown">Mind Blown!</option>
            <option value="making_it_work">Making it work!</option>
          </select>
        </fieldset>
      </div>
      <fieldset class="form__entry flexColumn">
        <label for="entry">Journal Entry</label>
        <textarea name="entry" id="entry" cols="30" rows="10"></textarea>
      </fieldset>
      <button class="form__record" id="saveEntry">Record Journal Entry</button>
    </form>
  `;
};

eventHub.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "saveEntry") {
    let dateOfEntry = document.querySelector("#journalDate").value;
    let concept = document.querySelector("#concepts").value;
    let mood = document.querySelector("#mood").value;
    let entry = document.querySelector("#entry").value;
    const newEntry = {
      date: dateOfEntry,
      concept,
      mood,
      entry,
    };
    saveJournalEntry(newEntry);
  }
});

export const journalForm = () => {
  render();
};
