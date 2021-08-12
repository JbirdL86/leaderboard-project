export default function renderHtml() {
  const main = document.getElementById('main');

  const mainContent = `<section class="header">
    <h1>Leaderboard</h1>
  </section>
  <section class="content">
    <section class="recent-scores">
      <div class="recent-score-header">
        <h2>Recent scores</h2>
        <button class="refresh-scores">Refresh</button>
      </div>
      <ul class="score-table">
      </ul>
    </section>
    <section class="add-score">
      <h2>Add your score</h2>
      <input id="name-input" name="user-name" type="text" placeholder="Your name">
      <input id="score-input" name="user-score" type="text" placeholder="Your Score">
      <div class="submit-div">
        <button id="input-submit">Submit</button>
      </div>
    </section>
  </section>`;

  main.innerHTML = mainContent;
}