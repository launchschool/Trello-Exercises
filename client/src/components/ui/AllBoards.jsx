import React from "react";

const AllBoards = () => {
  return (
    <main class="dashboard">
      <section class="board-group">
        <header>
          <div class="board-section-logo">
            <span class="person-logo"></span>
          </div>
          <h2>Personal Boards</h2>
        </header>

        <ul class="dashboard-board-tiles">
          <li class="board-tile">
            <a>
              <span class="board-title">Website Development</span>
            </a>
          </li>

          <li class="board-tile">
            <a>
              <span class="board-title">Recipes</span>
            </a>
          </li>

          <li class="board-tile">
            <a>
              <span class="board-title">Weekend Projects</span>
            </a>
          </li>

          <li class="board-tile">
            <a>
              <span class="board-title">Legal Stuff</span>
            </a>
          </li>

          <li class="board-tile">
            <a>
              <span class="board-title">Running Amuck</span>
            </a>
          </li>

          <li class="board-tile">
            <a class="new-board">
              <span class="board-title">Create new board...</span>
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
};

export default AllBoards;
