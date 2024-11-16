function loadContent(elementId, filePath) {
  fetch(filePath)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById(elementId).innerHTML = data;
      if (elementId === "main") {
        document.dispatchEvent(new Event("DOMContentLoaded"));
      }
    })
    .catch((error) => console.error("Error loading file:", error));
}
function handleSearch(event) {
  event.preventDefault();
  const query = document.getElementById("searchInput").value.trim();
  if (query) {
      window.location.href = `https://myquynh15.github.io/STT46_22682851_ChauMyQuynh_BaiTapLon/html/timkiem.html?query=${encodeURIComponent(query)}`;
  }
}
function initializeUserData() {
  const defaultUser = {
      hoTen: "My Quynh",
      gTinh: "Nữ",
      email: "myquynh@iuh.edu.vn",
      password: "123456",
  };
  if (!localStorage.getItem("userData")) {
      localStorage.setItem("userData", JSON.stringify(defaultUser));
  }
}
function updateUserSection() {
    const userSection = document.getElementById("userSection");
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedInUser) {
        userSection.innerHTML = `
            <a href="https://myquynh15.github.io/STT46_22682851_ChauMyQuynh_BaiTapLon/html/thongtin.html" class="navbar-text ms-4">
            <i class="fas fa-user"></i> ${loggedInUser.hoTen}
        </a>
            <a href="#" class="btn btn-danger ms-4" id="logoutBtn">Đăng xuất</a>
        `;
        document.getElementById("logoutBtn").addEventListener("click", handleLogout);
        localStorage.setItem('isLoggedIn', 'true');
    } else {
        userSection.innerHTML = `
            <a href="https://myquynh15.github.io/STT46_22682851_ChauMyQuynh_BaiTapLon/html/dangnhap.html" class="btn btn-secondary ms-4">Đăng nhập</a>
            <a href="https://myquynh15.github.io/STT46_22682851_ChauMyQuynh_BaiTapLon/html/dangky.html" class="btn btn-success ms-4">Đăng ký</a>
        `;
        localStorage.removeItem('isLoggedIn');
    }
}
const productsContainer = document.getElementById("products");
  const products = [
    {
      id: 1,
      name: "Bưởi da xanh",
      image: "https://myquynh15.github.io/STT46_22682851_ChauMyQuynh_BaiTapLon/images/buoidaxanh.png",
      price: "85,000 đ",
      link: "html/chitiet.html?id=1",
      isNew: true,
      origin: "domestic"},
    { 
      id:2,
      name: "Lựu Tứ Xuyên", 
      image: "https://myquynh15.github.io/STT46_22682851_ChauMyQuynh_BaiTapLon/images/luu.png", 
      price: "105,000 đ" ,
      link: "html/chitiet.html?id=2",
      isNew: true,
      origin: "domestic",
    },
    { 
      id:3,
      name: "Dưa lưới Hoàng Kim", 
      image: "https://myquynh15.github.io/STT46_22682851_ChauMyQuynh_BaiTapLon/images/dualuoi.png", 
      price: "105,000 đ",
      link: "html/chitiet.html?id=3",
      isNew: true,
      origin: "imported",
    },
    { 
      id:4,
      name: "Táo Rockit New Zealand", 
      image: "https://myquynh15.github.io/STT46_22682851_ChauMyQuynh_BaiTapLon/images/tao.png", 
      price: "145,000 đ",
      link: "html/chitiet.html?id=4",
      isNew: true,
      origin: "imported",
    },
    { 
      id:5,
      name: "Cam Úc", 
      image: "https://myquynh15.github.io/STT46_22682851_ChauMyQuynh_BaiTapLon/images/camuc.png", 
      price: "110,000 đ",
      link: "html/chitiet.html?id=5",
      isNew: false,
      origin: "imported",
    },
    {
      id:6,
      name: "Nho mẫu đơn Hàn Quốc",
      image: "https://myquynh15.github.io/STT46_22682851_ChauMyQuynh_BaiTapLon/images/nhohanquoc.png",
      price: "785,000 đ",
      link: "html/chitiet.html?id=6",
      isNew: false,
      origin: "imported",
    },
    {
      id:7,
      name: "Kiwi vàng New Zealand",
      image: "https://myquynh15.github.io/STT46_22682851_ChauMyQuynh_BaiTapLon/images/kiwivang.png",
      price: "175,000 đ",
      link: "html/chitiet.html?id=7",
      isNew: false,
      origin: "imported",
    },
    {
      id:8,
      name: "Kiwi xanh New Zealand",
      image: "https://myquynh15.github.io/STT46_22682851_ChauMyQuynh_BaiTapLon/images/kiwixanh.png",
      price: "125,000 đ",
      link: "html/chitiet.html?id=8",
      isNew: false,
      origin: "imported",
    },
    { 
      id:9,
      name: "Nho xanh Mỹ", 
      image: "https://myquynh15.github.io/STT46_22682851_ChauMyQuynh_BaiTapLon/images/nhomy.png", 
      price: "325,000 đ",
      link: "html/chitiet.html?id=9",
      isNew: false,
      origin: "imported",
    },
    { 
      id:10,
      name: "Quýt Úc", 
      image: "https://myquynh15.github.io/STT46_22682851_ChauMyQuynh_BaiTapLon/images/quytuc.png", 
      price: "145,000 đ",
      link: "html/chitiet.html?id=10",
      isNew: false,
      origin: "imported",
    },
    {
      id:11,
      name: "Xoài cát chu da vàng",
      image: "https://myquynh15.github.io/STT46_22682851_ChauMyQuynh_BaiTapLon/images/xoaicatchu.png",
      price: "105,000 đ",
      link: "html/chitiet.html?id=11",
      isNew: false,
      origin: "domestic"
    },
    {
      id:12,
      name: "Dừa xiêm",
      image: "https://myquynh15.github.io/STT46_22682851_ChauMyQuynh_BaiTapLon/images/duaxiem.png",
      price: "15,500 đ",
      link: "html/chitiet.html?id=12",
      isNew: false,
      origin: "domestic"
    },
  ];
function handleLogout() {
  localStorage.removeItem("loggedInUser");
  updateUserSection();
  location.reload();
}
function setupSearchForm() {
  const searchForm = document.getElementById("searchForm");
  if (searchForm) {
      searchForm.addEventListener("submit", handleSearch);
  }
}
function handleCategoryClick() {
  document.querySelectorAll(".category").forEach((item) => {
      item.addEventListener("click", function () {
          const category = this.getAttribute("data-category");
          const productsSection = document.getElementById("products");
          productsSection.scrollIntoView({ behavior: "smooth" });
          let hasVisibleProduct = false;

          document.querySelectorAll(".product-item").forEach((product) => {
              product.style.display = "none";
              if (category === "all") {
                product.style.display = "block";
                hasVisibleProduct = true;
              }
              if (
                  product.classList.contains(category) ||
                  (category === "new" && product.classList.contains("new"))
              ) {
                  product.style.display = "block";
                  hasVisibleProduct = true;
              }
          });
          if (!hasVisibleProduct) {
              console.log("Không có sản phẩm nào phù hợp.");
          }
      });
  });
}
function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    document.getElementById('emailError').style.display = 'none';
    document.getElementById('passwordError').style.display = 'none';
    initializeUserData();   
    let hasError = false;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@iuh\.edu\.vn$/;
    if (!email) {
        document.getElementById('emailError').innerText = 'Email không được để trống.';
        document.getElementById('emailError').style.display = 'block';
        hasError = true;
    } else if (!emailRegex.test(email)) {
        document.getElementById('emailError').innerText = 'Email không đúng định dạng.(@iuh.edu.vn)';
        document.getElementById('emailError').style.display = 'block';
        hasError = true;
    }
    if (!password) {
        document.getElementById('passwordError').innerText = 'Mật khẩu không được để trống.';
        document.getElementById('passwordError').style.display = 'block';
        hasError = true;
    }
        if (hasError) {
            return;
        }
        const userData = JSON.parse(localStorage.getItem("userData"));
        if (email === userData.email && password === userData.password) {
            localStorage.setItem('loggedInUser', JSON.stringify(userData));
            window.location.href = 'https://myquynh15.github.io/STT46_22682851_ChauMyQuynh_BaiTapLon/index.html';
        } else {
            document.getElementById('passwordError').innerText = 'Email không tồn tại hoặc mật khẩu không chính xác.';
            document.getElementById('passwordError').style.display = 'block';
        }
    }    
function handleRegister(event) {
    event.preventDefault();
    const fullname = document.getElementById('fullname').value;
    const genderMale = document.getElementById('male').checked;
    const genderFemale = document.getElementById('female').checked;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;  
    let hasError = false;
    const fullnameError = document.getElementById('fullnameError');
    const fullnameRegex = /^[A-Z][a-z]{1,}$/;
    const fullnameParts = fullname.trim().split(" ");
    for (let part of fullnameParts) {
        if (!fullnameRegex.test(part) || part.length < 2) {
            fullnameError.innerText = 'Họ và tên phải viết hoa chữ cái đầu và mỗi từ phải có ít nhất 2 ký tự.';
            fullnameError.style.display = 'block';
            hasError = true;
        }else{
          fullnameError.style.display = 'none';
        }
    }

    const genderError = document.getElementById('genderError');
    if (!genderMale && !genderFemale) {
        genderError.innerText = 'Vui lòng chọn giới tính.';
        genderError.style.display = 'block';
        hasError = true;
    } else {
        genderError.style.display = 'none';
    }
    const emailError = document.getElementById('emailError');
    const emailRegex = /^[a-zA-Z0-9._%+-]+@iuh\.edu\.vn$/;
    if (!emailRegex.test(email)) {
        emailError.innerText = 'Email phải có đuôi @iuh.edu.vn.';
        emailError.style.display = 'block';
        hasError = true;
    } else {
        emailError.style.display = 'none';
    }
    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmpasswordError');
    if (password.trim() === '') {
        passwordError.innerText = 'Mật khẩu không được để trống.';
        passwordError.style.display = 'block';
        hasError = true;
    } else {
        passwordError.style.display = 'none';
    }
    if (password !== confirmPassword) {
        confirmPasswordError.innerText = 'Mật khẩu và Nhập lại mật khẩu không khớp.';
        confirmPasswordError.style.display = 'block';
        hasError = true;
    } else {
        confirmPasswordError.style.display = 'none';
    }
    if (hasError) {
        return false;
    }
    const userData = {
        hoTen: fullname,
        gTinh: genderMale ? "Nam" : "Nữ",
        email: email,
        password: password,
    };
    localStorage.setItem("userData", JSON.stringify(userData));
    alert("Đăng ký thành công!");
    window.location.href = 'https://myquynh15.github.io/STT46_22682851_ChauMyQuynh_BaiTapLon/html/dangnhap.html';
    return true; 
}
const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
if (loggedInUser) {
  document.getElementById("fullname").textContent = loggedInUser.hoTen;
  document.getElementById("email").textContent = loggedInUser.email;
  document.getElementById("gender").textContent = loggedInUser.gTinh;
  document.getElementById("password").textContent = "*******";
}
document.addEventListener("DOMContentLoaded", function () {
  initializeUserData();
  setupCartButtons();
  updateUserSection();
  setupSearchForm();
  handleCategoryClick();
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
      loginForm.addEventListener("submit", handleLogin);
  }
  
  const registerForm = document.getElementById("registerForm");
  if (registerForm) {
      registerForm.addEventListener("submit", handleRegister);
  }
});
