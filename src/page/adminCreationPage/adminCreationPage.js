import "../adminCreationPage/style.css";
export let adminCreationPage = /*html*/ `
<div class="form-heading-input">
      <div class="title">
        <h1 class="title-heading"><i>CREATE STORY</i></h1>
      </div>

      <div class="form-header">
        <form id="update-form" class="update-form">
          <div class="group_form_1">
            <div class="link-content_name">
              <span class="name_film">Tên truyện:</span>
              <input
                id="name"
                type="text"
                class="name"
                placeholder="Nhập tên truyện"
              />

              <input id="id" type="hidden" />
            </div>

            <div class="link-image">
              <span class="name-contents">IMG:</span>
              <input
                id="image"
                type="url"
                class="image-content"
                accept="image/png, image/jpg"
              />
            </div>
            <div class="link-url">
              <span class="url-name">Link url:</span>
              <input
                id="url"
                type="text"
                class="url-link-content"
                placeholder="Url:https//...."
              />
            </div>

            <div class="text-content">
              <p class="url-name_content">Tóm tắt:</p>
              <textarea
                id="content"
                class="content"
                placeholder="Nhập nội dung tóm tắt"
              ></textarea>
            </div>
          </div>

          <div class="group_form_2">
            <div class="name-authors">
              <span class="name-content">Tác giả:</span>
              <input
                id="authors"
                type="text"
                class="authors"
                placeholder="Nhập tác giả"
              />
            </div>

            <div class="link-time">
              <span class="time-text">Tình trạng:</span>
              <input
                id="status"
                type="text"
                class="status"
                placeholder="Tình trạng"
              />
            </div>
            <div class="category">
              <span class="cate-name">Thể loại:</span>
              <input
                id="category"
                type="text"
                class="link-category"
                placeholder="Nhập thể loại"
              />
            </div>

            <div class="link-year">
              <span class="title-years">Năm phát hành:</span>
              <input
                id="year"
                type="text"
                class="link-time-year"
                placeholder="Nhập năm phát hành"
              />
            </div>

            <div class="btn-create-value">
              <button type="submit" class="btn-create">SAVE</button>
            </div>
          </div>
        </form>
      </div>
    </div>`;
