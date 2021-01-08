import { saveJournalEntry } from "./entryDataProvider.js";
import { getMoods, useMoods } from "../moods/moodProvider.js";

const eventHub = document.querySelector(".container");
const contentTarget = document.querySelector(".form--container");

const render = (allMoods) => {
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
            <option value="0">Choose your mood...</option>
            ${allMoods
              .map((mood) => {
                return `<option value="${mood.id}">${mood.label}</option>`;
              })
              .join("")}
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
    let moodId = parseInt(document.querySelector("#mood").value);
    let entry = document.querySelector("#entry").value;
    const newEntry = {
      date: dateOfEntry,
      concept,
      moodId,
      entry,
    };
    saveJournalEntry(newEntry);
  }
});

export const journalForm = () => {
  getMoods()
  .then(() => {
    const allMoods = useMoods();
    render(allMoods);
  })
};
