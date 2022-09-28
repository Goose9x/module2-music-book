import "../adminPage/style-admin.css";
import link from "../../page/adminCreationPage/adminCreationPage";
export let adminPage = /*html*/ `
<div id="adminControl">
<div class="heading-name">
      <h3 class="header-content"><i>STORY </i></h3>
    </div>
    <div style="display: flex">
      <nav class="sidebar">
        <header class ="headerWrapper">
          <div class="image-text">
            <!-- <span class="image">
              <img
                src="https://genk.mediacdn.vn/2019/9/18/lmht-156878350530840809990.jpg"
                alt="logo"
              />
            </span> -->

            <div class="text header-text">
              <span class="name">ADMIN</span>
            </div>
          </div>

          <i class="bx bx-chevron-right toggle"></i>
        </header>

        <div class="menu-bar">
          <div class="menu">
            <ul class="menu-links">
              <li class="listAdmin nav-link">
                <a href="">
                  <i class="bx bx-home icon"></i>
                  <span class="text nav-text">Dashboard</span>
                </a>
              </li>
              <li class="listAdmin nav-link createdGenBtn">
                  <i class="bx bx-folder-plus icon"></i>
                  <span class="text nav-text ">Create GENNERALS</span>
              </li>
            </ul>
          </div>

          <div class="bottom-content">
            <li class="listAdmin log-out">
              <a href="../sign-in/sign-in.html">
                <i class="bx bxs-log-out icon"></i>
                <span class="text nav-text">Log out</span>
              </a>
            </li>
            <div class="bottom-content">
              <!-- <li class="log-out">
                <a href="../HTML/sign_in.html">
                  <i class="bx bxs-log-out icon"></i>
                  <span class="text nav-text">Log out</span>
                </a>
              </li> -->

            <li class="listAdmin mode">
              <div class="moon-sun">
                <i class="bx bx-moon icon moon"></i>
                <i class="bx bx-sun icon sun"></i>
              </div>

              <span class="mode-text text">Mode</span>
              <div class="toggle-switch">
                <span class="switch"></span>
              </div>
            </li>
          </div>
        </div>
      </nav>

      <!-- <div
        style="
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 20px;
          width: 100%;
        "
      >  -->
        <div class="table_dashboard">
          <div class="heading_list">
            <h3 class="title_list"><i>LIST CREATE GENNERALS</i></h3>
          </div>
          <!-- <a href="../HTML/form_create.html">
            + ADD NEW
        </a> -->
          <table border="1" class="table">
            <thead>
              <tr>
                <th class="id">ID</th>
                <th class="name">Name</th>
                <th class="adminContent">content</th>
                <th class="authors">comment</th>
                <th class="status">authors</th>
                <th class="category">status</th>
                <th class="year">category</th>
                <th class="image">year</th>
                <th class="status">image</th>
                <th class="option">option</th>
              </tr>
            </thead>
            <tbody>
              <!-- ADD DATA = JS-->
            </tbody>
          </table>
        </div>
      </div>
    </div></div>

`;
