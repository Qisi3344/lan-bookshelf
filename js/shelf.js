(function () {
  var shelvesEl = document.getElementById("shelves");
  var modal = document.getElementById("modal");
  var index = {};

  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  }
  function shade(hex, amt) {
    var n = parseInt(hex.slice(1), 16);
    var r = Math.max(0, Math.min(255, (n >> 16) + amt));
    var g = Math.max(0, Math.min(255, ((n >> 8) & 255) + amt));
    var b = Math.max(0, Math.min(255, (n & 255) + amt));
    return "rgb(" + r + "," + g + "," + b + ")";
  }

  (window.SHELVES || []).forEach(function (shelf, si) {
    var row = el("section", "shelf");
    var plate = el("div", "plate");
    plate.appendChild(el("b", null, shelf.name));
    plate.appendChild(el("span", null, shelf.note || ""));
    row.appendChild(plate);
    var books = el("div", "books");

    shelf.books.forEach(function (bk, bi) {
      var id = shelf.id + "-" + bi;
      index[id] = { book: bk, shelf: shelf };
      var btn = el("button", "book" + (bk.gold ? " gold" : ""));
      btn.type = "button";
      btn.dataset.id = id;
      btn.setAttribute("aria-label", "翻开《" + bk.title + "》");
      btn.style.setProperty("--h", (bk.h || 170) + "px");
      btn.style.setProperty("--w", (bk.w || 50) + "px");
      btn.style.setProperty("--c", bk.color);
      btn.style.setProperty("--c2", shade(bk.color, -38));
      btn.style.setProperty("--c3", shade(bk.color, 30));
      btn.style.setProperty("--tilt", (bk.tilt || 0) + "deg");
      var body = el("span", "body");
      var spine = el("span", "spine");
      spine.appendChild(el("span", "icon", bk.icon || "📖"));
      spine.appendChild(el("span", "t", bk.spine || bk.title));
      spine.appendChild(el("span", "band"));
      body.appendChild(spine);
      body.appendChild(el("span", "cover"));
      body.appendChild(el("span", "top"));
      btn.appendChild(body);
      books.appendChild(btn);
    });

    if (si === window.SHELVES.length - 1) {
      var empty = el("div", "book empty");
      empty.appendChild(el("span", "t", "＋ 待收录"));
      books.appendChild(empty);
    }
    if (shelf.id === "voice") {
      var end = el("div", "bookend");
      end.setAttribute("aria-hidden", "true");
      books.appendChild(end);
    }
    row.appendChild(books);
    row.appendChild(el("div", "plank"));
    shelvesEl.appendChild(row);
  });

  var lastBtn = null;
  function openBook(id, btn) {
    var it = index[id]; if (!it) return;
    var b = it.book;
    lastBtn = btn;
    document.getElementById("m-icon").textContent = b.icon || "📖";
    document.getElementById("m-title").textContent = b.title;
    document.getElementById("m-sub").textContent = b.sub || "";
    document.getElementById("m-shelf").textContent = "放在「" + it.shelf.name + "」这一层" + (b.added ? " · " + b.added + " 收录" : "");
    document.getElementById("m-desc").textContent = b.desc || "";
    document.getElementById("m-when").textContent = b.when || "";
    var a = document.getElementById("m-link");
    if (b.link) { a.href = b.link; a.hidden = false; } else { a.removeAttribute("href"); a.hidden = true; }
    modal.style.setProperty("--c", b.color);
    modal.hidden = false;
    requestAnimationFrame(function () { modal.classList.add("show"); });
    document.getElementById("m-close").focus();
  }
  function closeBook() {
    if (modal.hidden) return;
    modal.classList.remove("show");
    setTimeout(function () { modal.hidden = true; }, 260);
    if (lastBtn) lastBtn.focus();
  }

  document.addEventListener("click", function (e) {
    var t = e.target;
    if (t.closest("#m-close")) return closeBook();
    if (t === modal) return closeBook();
    var b = t.closest(".book[data-id]");
    if (b) openBook(b.dataset.id, b);
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeBook();
  });

  // 轻轻跟着鼠标/手指倾一下
  var room = document.getElementById("case");
  function tilt(x, y) {
    var rx = (0.5 - y / innerHeight) * 4, ry = (x / innerWidth - 0.5) * 6;
    room.style.setProperty("--rx", rx.toFixed(2) + "deg");
    room.style.setProperty("--ry", ry.toFixed(2) + "deg");
  }
  addEventListener("pointermove", function (e) { tilt(e.clientX, e.clientY); });

  // 小猫头鹰眨眨眼
  var owl = document.getElementById("owl");
  (function blink() {
    owl.classList.add("blink");
    setTimeout(function () { owl.classList.remove("blink"); }, 160);
    setTimeout(blink, 2500 + Math.random() * 3500);
  })();
})();
