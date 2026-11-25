const loginTab = document.querySelector("#login-tab");
const registerTab = document.querySelector("#register-tab");
const loginView = document.querySelector("#login-view");
const registerView = document.querySelector("#register-view");
const profileView = document.querySelector("#profile-view");
const statusMessage = document.querySelector("#status-message");

const loginForm = document.querySelector("#login-form");
const registerForm = document.querySelector("#register-form");
const profileForm = document.querySelector("#profile-form");
const logoutButton = document.querySelector("#logout-button");

let demoAccount = null;
let currentUser = null;

function showStatus(message, type = "") {
  statusMessage.textContent = message;
  statusMessage.className = "status-message";

  if (type) {
    statusMessage.classList.add(`is-${type}`);
  }
}

function showView(viewName) {
  loginView.hidden = viewName !== "login";
  registerView.hidden = viewName !== "register";
  profileView.hidden = viewName !== "profile";

  const isLogin = viewName === "login";
  const isRegister = viewName === "register";

  loginTab.classList.toggle("is-active", isLogin);
  registerTab.classList.toggle("is-active", isRegister);

  loginTab.setAttribute("aria-selected", String(isLogin));
  registerTab.setAttribute("aria-selected", String(isRegister));

  showStatus("");
}

function fillProfile(user) {
  document.querySelector("#profile-name").value = user.name;
  document.querySelector("#profile-email").value = user.email;
}

loginTab.addEventListener("click", () => showView("login"));
registerTab.addEventListener("click", () => showView("register"));

document.querySelectorAll("[data-show]").forEach((button) => {
  button.addEventListener("click", () => {
    showView(button.dataset.show);
  });
});

registerForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(registerForm);
  const name = formData.get("name").trim();
  const email = formData.get("email").trim().toLowerCase();
  const password = formData.get("password");
  const confirmPassword = formData.get("confirmPassword");

  if (password !== confirmPassword) {
    showStatus("Hai mật khẩu chưa khớp. Kiểm tra lại nhé.", "error");
    return;
  }

  if (demoAccount && demoAccount.email === email) {
    showStatus("Email này đã được đăng ký trong phiên demo.", "error");
    return;
  }

  demoAccount = { name, email, password };
  currentUser = { name, email };

  fillProfile(currentUser);
  showView("profile");
  showStatus("Tạo tài khoản demo thành công. Thông tin chỉ lưu trong phiên này.", "success");
});

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(loginForm);
  const email = formData.get("email").trim().toLowerCase();
  const password = formData.get("password");

  if (!demoAccount) {
    showStatus("Hãy tạo tài khoản demo trước khi đăng nhập.", "error");
    return;
  }

  if (email !== demoAccount.email || password !== demoAccount.password) {
    showStatus("Email hoặc mật khẩu chưa đúng.", "error");
    return;
  }

  currentUser = {
    name: demoAccount.name,
    email: demoAccount.email
  };

  fillProfile(currentUser);
  showView("profile");
  showStatus("Đăng nhập demo thành công.", "success");
});

profileForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!currentUser) {
    showView("login");
    showStatus("M hãy đăng nhập trước.", "error");
    return;
  }

  const formData = new FormData(profileForm);
  const updatedName = formData.get("name").trim();

  currentUser.name = updatedName;
  demoAccount.name = updatedName;

  showStatus("Đã cập nhật tên hiển thị trong phiên demo.", "success");
});

logoutButton.addEventListener("click", () => {
  currentUser = null;
  loginForm.reset();

  showView("login");
  showStatus("Đã đăng xuất khỏi phiên demo.", "success");
});