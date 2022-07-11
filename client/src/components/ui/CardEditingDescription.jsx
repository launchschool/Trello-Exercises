import React from "react";
const CardEditingDescription = () => {
  return (
    <div id="modal-container">
      <div class="screen"></div>
      <div id="modal">
        <i class="x-icon icon close-modal"></i>
        <header>
          <i class="card-icon icon .close-modal"></i>
          <textarea class="list-title" style={{ height: "45px" }}>
            Cards do many cool things. Click on this card to open it and learn
            more...
          </textarea>
          <p>
            in list <a class="link">Stuff to try (this is a list)</a>
            <i class="sub-icon sm-icon"></i>
          </p>
        </header>
        <section class="modal-main">
          <ul class="modal-outer-list">
            <li class="details-section">
              <ul class="modal-details-list">
                <li class="labels-section">
                  <h3>Labels</h3>
                  <div class="member-container">
                    <div class="green label colorblindable"></div>
                  </div>
                  <div class="member-container">
                    <div class="yellow label colorblindable"></div>
                  </div>
                  <div class="member-container">
                    <div class="orange label colorblindable"></div>
                  </div>
                  <div class="member-container">
                    <div class="blue label colorblindable"></div>
                  </div>
                  <div class="member-container">
                    <div class="purple label colorblindable"></div>
                  </div>
                  <div class="member-container">
                    <div class="red label colorblindable"></div>
                  </div>
                  <div class="member-container">
                    <i class="plus-icon sm-icon"></i>
                  </div>
                </li>
                <li class="due-date-section">
                  <h3>Due Date</h3>
                  <div id="dueDateDisplay" class="overdue completed">
                    <input
                      id="dueDateCheckbox"
                      type="checkbox"
                      class="checkbox"
                      checked=""
                    />
                    Aug 4 at 10:42 AM <span>(past due)</span>
                  </div>
                </li>
              </ul>
              <form class="description">
                <p>Description</p>
                <textarea class="textarea-toggle" rows="1" autofocus>
                  Cards have a symbol to indicate if they contain a description.
                </textarea>
                <div>
                  <div class="button" value="Save">
                    Save
                  </div>
                  <i class="x-icon icon"></i>
                </div>
              </form>
            </li>
            <li class="comment-section">
              <h2 class="comment-icon icon">Add Comment</h2>
              <div>
                <div class="member-container">
                  <div class="card-member">TP</div>
                </div>
                <div class="comment">
                  <label>
                    <textarea
                      required=""
                      rows="1"
                      placeholder="Write a comment..."
                    ></textarea>
                    <div>
                      <a class="light-button card-icon sm-icon"></a>
                      <a class="light-button smiley-icon sm-icon"></a>
                      <a class="light-button email-icon sm-icon"></a>
                      <a class="light-button attachment-icon sm-icon"></a>
                    </div>
                    <div>
                      <input
                        type="submit"
                        class="button not-implemented"
                        value="Save"
                      />
                    </div>
                  </label>
                </div>
              </div>
            </li>
            <li class="activity-section">
              <h2 class="activity-icon icon">Activity</h2>
              <ul class="horiz-list">
                <li class="not-implemented">Show Details</li>
              </ul>
              <ul class="modal-activity-list">
                <li>
                  <div class="member-container">
                    <div class="card-member">TP</div>
                  </div>
                  <h3>Taylor Peat</h3>
                  <div class="comment static-comment">
                    <span>The activities are not functional.</span>
                  </div>
                  <small>
                    22 minutes ago - <span class="link">Edit</span> -{" "}
                    <span class="link">Delete</span>
                  </small>
                  <div class="comment">
                    <label>
                      <textarea required="" rows="1">
                        The activities have not been implemented yet.
                      </textarea>
                      <div>
                        <a class="light-button card-icon sm-icon"></a>
                        <a class="light-button smiley-icon sm-icon"></a>
                        <a class="light-button email-icon sm-icon"></a>
                      </div>
                      <div>
                        <p>You haven't typed anything!</p>
                        <input
                          type="submit"
                          class="button not-implemented"
                          value="Save"
                        />
                        <i class="x-icon icon"></i>
                      </div>
                    </label>
                  </div>
                </li>
                <li>
                  <div class="member-container">
                    <div class="card-member small-size">VR</div>
                  </div>
                  <p>
                    <span class="member-name">Victor Reyes</span> changed the
                    background of this board <small>yesterday at 4:53 PM</small>
                  </p>
                </li>
                <li class="activity-comment">
                  <div class="member-container">
                    <div class="card-member">VR</div>
                  </div>
                  <h3>Victor Reyes</h3>
                  <div class="comment static-comment">
                    <span>Example of a comment.</span>
                  </div>
                  <small>
                    22 minutes ago - <span class="link">Edit</span> -{" "}
                    <span class="link">Delete</span>
                  </small>
                  <div class="comment">
                    <label>
                      <textarea required="" rows="1">
                        Example of a comment.
                      </textarea>
                      <div>
                        <a class="light-button card-icon sm-icon"></a>
                        <a class="light-button smiley-icon sm-icon"></a>
                        <a class="light-button email-icon sm-icon"></a>
                      </div>
                      <div>
                        <p>You haven't typed anything!</p>
                        <input
                          type="submit"
                          class="button not-implemented"
                          value="Save"
                        />
                        <i class="x-icon icon"></i>
                      </div>
                    </label>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </section>
        <aside class="modal-buttons">
          <h2>Add</h2>
          <ul>
            <li class="member-button">
              <i class="person-icon sm-icon"></i>Members
            </li>
            <li class="label-button">
              <i class="label-icon sm-icon"></i>Labels
            </li>
            <li class="checklist-button">
              <i class="checklist-icon sm-icon"></i>Checklist
            </li>
            <li class="date-button not-implemented">
              <i class="clock-icon sm-icon"></i>Due Date
            </li>
            <li class="attachment-button not-implemented">
              <i class="attachment-icon sm-icon"></i>Attachment
            </li>
          </ul>
          <h2>Actions</h2>
          <ul>
            <li class="move-button">
              <i class="forward-icon sm-icon"></i>Move
            </li>
            <li class="copy-button">
              <i class="card-icon sm-icon"></i>Copy
            </li>
            <li class="subscribe-button">
              <i class="sub-icon sm-icon"></i>Subscribe
              <i class="check-icon sm-icon"></i>
            </li>
            <hr />
            <li class="archive-button">
              <i class="file-icon sm-icon "></i>Archive
            </li>
          </ul>
          <ul class="light-list">
            <li class="not-implemented">Share and more...</li>
          </ul>
        </aside>
      </div>
    </div>
  );
};

export default CardEditingDescription;
