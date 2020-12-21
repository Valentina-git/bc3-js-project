import categories from '../templates/categories.hbs';

// ===========================REFS===================================
const categoriesMarkup = categories()
const categoriesList = document.querySelector('.categories-filter')
const mobileFilters = document.querySelector('.categories-filter-mobile')
const mobileFiltersBtn = document.querySelector('.mobile-filters-wrapper')
const tabletFilters = document.querySelector(".categories-filter-tablet");
const filterBtn = document.querySelector(".filters-wrapper");
const mobileInputBtn = document.querySelector(".mobile-search");
const mobileInput = document.querySelector(".mobile-input-closed");
const mobileInputClose = document.querySelector(".mobile-input-cross")
const mobileInputSearch = document.querySelector('.mobile-input-btn')
const mobileHeaderLogo = document.querySelector('.header__logo')
const menuBtnRef = document.querySelector(".mobile-burger");
const mobileMenuRef = document.querySelector(".mobile-menu-closed");
const mobileCloseRef = document.querySelector(".close-menu")
categoriesList.insertAdjacentHTML('beforeend', categoriesMarkup)

// ===========================MOBILE FILTER OPEN-CLOSE===============
function openMobileFilters() {
    if (mobileFilters.innerHTML === '') {
        mobileFilters.innerHTML = categoriesMarkup
    } else {
        mobileFilters.innerHTML = ''
    }
}
mobileFiltersBtn.addEventListener('click', openMobileFilters)

// ===========================TABLET FILTER OPEN-CLOSE================
function tabletCategoriesOpen() {
    if (tabletFilters.innerHTML === '') {
        tabletFilters.style.display = "flex"
        tabletFilters.innerHTML = categoriesMarkup
    } else {
        tabletFilters.innerHTML = ''
        tabletFilters.style.display = "none"
    }
}
filterBtn.addEventListener("click", tabletCategoriesOpen)

// ===========================MOBILE INPUT OPEN-CLOSE==================
function mobileInputOpen() {
    mobileInputBtn.addEventListener("click", () => {
        mobileInput.classList.toggle("mobile-input");
        mobileInputSearch.style.display = 'unset'
        mobileInputClose.style.display = 'unset'
        mobileHeaderLogo.style.display = 'none'
    });
    mobileInputClose.addEventListener("click", () => {
        mobileInput.classList.toggle("mobile-input");
        mobileInputSearch.style.display = 'none'
        mobileInputClose.style.display = 'none'
        mobileHeaderLogo.style.display = 'unset'
    })
}
mobileInputOpen()
// ===========================MOBILE MENU OPEN-CLOSE==================
function menuOpen() {
    menuBtnRef.addEventListener("click", () => {
        mobileMenuRef.classList.toggle("mobile-menu-opened");
    });
    mobileCloseRef.addEventListener("click", () => {
        mobileMenuRef.classList.toggle("mobile-menu-opened");
    })
}
menuOpen()