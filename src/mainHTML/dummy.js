import { mainContainer } from "../index.js";

const fragment = `
  <div>
    <img src="https://static.turbosquid.com/Preview/2019/02/18__04_59_25/Crash_Test_Dummy_Rigged_c4d_00.jpg06869F8F-4BC5-4818-AAAD-72A1BCBF72C5DefaultHQ.jpg">
  </div>
  `;

function renderDummyMain() {
  mainContainer.innerHTML = fragment;
}

export { renderDummyMain };
