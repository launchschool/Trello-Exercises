import React from "react";
const SingleBoard = () => {
  return (
    <>
      <main>
        <div id="list-container" class="list-container">
          <div id="existing-lists" class="existing-lists">
            <div class="list-wrapper">
              <div class="list-background">
                <div class="list">
                  <a class="more-icon sm-icon" href=""></a>
                  <div>
                    <p class="list-title">Stuff to try (this is a list)</p>
                  </div>
                  <div class="add-dropdown add-top">
                    <div class="card"></div>
                    <a class="button">Add</a>
                    <i class="x-icon icon"></i>
                    <div class="add-options">
                      <span>...</span>
                    </div>
                  </div>
                  <div id="cards-container" data-id="list-1-cards">
                    <div class="card-background">
                      <div class="card ">
                        <i class="edit-toggle edit-icon sm-icon"></i>
                        <div class="card-info">
                          <div class="card-label green colorblindable"></div>
                          <div class="card-label yellow colorblindable"></div>
                          <div class="card-label red colorblindable"></div>
                          <div class="card-label orange colorblindable"></div>
                          <div class="card-label blue colorblindable"></div>
                          <div class="card-label purple colorblindable"></div>
                          <p>
                            Cards do many cool things. Click on this card to
                            open it and learn more...
                          </p>
                        </div>
                        <div class="card-icons">
                          <i class="clock-icon sm-icon overdue-recent completed">
                            Aug 4
                          </i>
                          <i class="description-icon sm-icon"></i>
                          <i class="comment-icon sm-icon"></i>
                        </div>
                      </div>
                    </div>
                    <div class="card-background">
                      <div class="card ">
                        <i class="edit-toggle edit-icon sm-icon"></i>
                        <div class="cover-image"></div>
                        <div class="card-info">
                          <p>Another list with stuff</p>
                        </div>
                        <div class="card-icons">
                          <i class="clock-icon sm-icon overdue ">Aug 3</i>
                          <i class="description-icon sm-icon"></i>
                        </div>
                      </div>
                    </div>
                    <div class="card-background">
                      <div class="card ">
                        <i class="edit-toggle edit-icon sm-icon"></i>
                        <div class="cover-image"></div>
                        <div class="card-info">
                          <p>
                            Use the + in the top menu to make your first board
                            now.
                          </p>
                        </div>
                        <div class="card-icons"></div>
                      </div>
                    </div>
                  </div>
                  <div class="add-dropdown add-bottom">
                    <div class="card">
                      <div class="card-info"></div>
                      <textarea name="add-card"></textarea>
                      <div class="members"></div>
                    </div>
                    <a class="button">Add</a>
                    <i class="x-icon icon"></i>
                    <div class="add-options">
                      <span>...</span>
                    </div>
                  </div>
                  <div class="add-card-toggle" data-position="bottom">
                    Add a card...
                  </div>
                </div>
              </div>
            </div>
            <div class="list-wrapper">
              <div class="list-background">
                <div class="list">
                  <a class="more-icon sm-icon" href=""></a>
                  <div>
                    <input
                      type="text"
                      class="list-title"
                      value="List title during editing"
                      autofocus="true"
                    />
                  </div>
                  <div class="add-dropdown add-top">
                    <div class="card"></div>
                    <a class="button">Add</a>
                    <i class="x-icon icon"></i>
                    <div class="add-options">
                      <span>...</span>
                    </div>
                  </div>
                  <div id="cards-container" data-id="list-2-cards">
                    <div class="card-background">
                      <div class="card ">
                        <i class="edit-toggle edit-icon sm-icon"></i>
                        <div class="cover-image"></div>
                        <div class="card-info">
                          <p>
                            Add members to a board (via the sidebar to
                            collaborate, share and discuss.
                          </p>
                        </div>
                        <div class="card-icons">
                          <i class="clock-icon sm-icon due-soon ">Sep 5</i>
                        </div>
                      </div>
                    </div>
                    <div class="card-background">
                      <div class="card ">
                        <i class="edit-toggle edit-icon sm-icon"></i>
                        <div class="cover-image"></div>
                        <div class="card-info">
                          <p>You can also change the background and more.</p>
                        </div>
                        <div class="card-icons"></div>
                      </div>
                    </div>
                  </div>
                  <div class="add-dropdown add-bottom">
                    <div class="card">
                      <div class="card-info"></div>
                      <textarea name="add-card"></textarea>
                      <div class="members"></div>
                    </div>
                    <a class="button">Add</a>
                    <i class="x-icon icon"></i>
                    <div class="add-options">
                      <span>...</span>
                    </div>
                  </div>
                  <div class="add-card-toggle" data-position="bottom">
                    Add a card...
                  </div>
                </div>
              </div>
            </div>
            <div class="list-wrapper add-dropdown-active">
              <div class="list-background">
                <div class="list">
                  <a class="more-icon sm-icon" href=""></a>
                  <div>
                    <p class="list-title">Third List</p>
                  </div>
                  <div class="add-dropdown add-top">
                    <div class="card"></div>
                    <a class="button">Add</a>
                    <i class="x-icon icon"></i>
                    <div class="add-options">
                      <span>...</span>
                    </div>
                  </div>
                  <div id="cards-container" data-id="list-3-cards">
                    <div class="card-background">
                      <div class="card ">
                        <i class="edit-toggle edit-icon sm-icon"></i>
                        <div class="cover-image"></div>
                        <div class="card-info">
                          <p>
                            This is a card. Drag it onto "Tried it" to show it's
                            done.
                          </p>
                        </div>
                        <div class="card-icons"></div>
                      </div>
                    </div>
                    <div class="card-background">
                      <div class="card ">
                        <i class="edit-toggle edit-icon sm-icon"></i>
                        <div class="cover-image"></div>
                        <div class="card-info">
                          <div class="card-label yellow colorblindable"></div>
                          <p>Add all the cards and lists you need</p>
                        </div>
                        <div class="card-icons">
                          <i class="description-icon sm-icon"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="add-dropdown add-bottom active-card">
                    <div class="card">
                      <div class="card-info"></div>
                      <textarea name="add-card"></textarea>
                      <div class="members"></div>
                    </div>
                    <a class="button">Add</a>
                    <i class="x-icon icon"></i>
                    <div class="add-options">
                      <span>...</span>
                    </div>
                  </div>
                  <div class="add-card-toggle" data-position="bottom">
                    Add a card...
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="new-list" class="new-list">
            <span>Add a list...</span>
            <input type="text" placeholder="Add a list..." />
            <div>
              <input type="submit" class="button" value="Save" />
              <i class="x-icon icon"></i>
            </div>
          </div>
        </div>
      </main>
      <div class="menu-sidebar">
        <div id="menu-main" class="main slide">
          <i class="back-icon icon"></i>
          <i class="x-icon icon"></i>
          <h1>Menu</h1>
          <div class="menu-contents">
            <div class="members">
              <div class="member-container">
                <div class="card-member ">VR</div>
              </div>
              <div class="member-container">
                <div class="card-member admin">TP</div>
              </div>
              <div class="member-container">
                <div class="card-member ">KW</div>
              </div>
            </div>
            <div class="add-members">
              <i class="add-icon sm-icon"></i>Add Members...
            </div>
            <hr />
            <ul class="menu-list">
              <li class="background-item">Change Background</li>
              <li class="filter-icon menu-icon">Filter Cards</li>
              <li class="power-icon menu-icon not-implemented">Power-Ups</li>
              <li class="stickers-icon menu-icon not-implemented">Stickers</li>
              <li class="more-icon menu-icon">More</li>
              <hr />
              <li class="activity-icon menu-icon not-implemented">Activity</li>
            </ul>
            <ul class="activity-list">
              <li>
                <i class="member-icon"></i>
                <p>
                  <span class="member-name">Taylor Peat</span> changed the
                  background of this board <small>yesterday at 4:53 PM</small>
                </p>
              </li>
              <li>
                <i class="member-icon"></i>
                <p>
                  <span class="member-name">Taylor Peat</span> sent{" "}
                  <span class="link">
                    Use the + in the top menu to make your first board now.
                  </span>{" "}
                  to the board <small>4 hours ago</small>
                </p>
              </li>
              <li>
                <i class="member-icon"></i>
                <p>
                  <span class="member-name">Taylor Peat</span> archived{" "}
                  <span class="link">
                    Use the + in the top menu to make your first board now.
                  </span>{" "}
                  <small>4 hours ago</small>
                </p>
              </li>
              <li>
                <i class="member-icon"></i>
                <p>
                  <span class="member-name">Taylor Peat</span> changed the
                  background of this board <small>5 hours ago</small>
                </p>
              </li>
              <li>
                <i class="member-icon"></i>
                <p>
                  <span class="member-name">Taylor Peat</span> changed the
                  background of this board <small>6 hours ago</small>
                </p>
              </li>
              <li>
                <i class="member-icon"></i>
                <p>
                  <span class="member-name">Taylor Peat</span> changed the
                  background of this board <small>yesterday at 10:23 PM</small>
                </p>
              </li>
            </ul>
            <a class="all-activity not-implemented">View all activity...</a>
          </div>
        </div>
      </div>
      <div id="modal-container"></div>
      <div id="dropdown-container"></div>
    </>
  );
};

export default SingleBoard;
