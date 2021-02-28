const formRef = document.querySelector(".form");
const inputRef = document.querySelector(".input");
const filterRef = document.querySelector(".filter");
const btnRef = document.querySelector(".btn");
const listRef = document.querySelector(".list");
const arr = [];
console.log(inputRef.value);

formRef.addEventListener("submit", (e) => {
  e.preventDefault();

  arr.push(inputRef.value);
  listRef.innerHTML = "";
  const markup = arr.map((item) => `<li><p>${item}</p></li>`).join(" ");
  listRef.insertAdjacentHTML("beforeend", markup);
  inputRef.value = "";
  inputRef.focus();
});

filterRef.addEventListener("input", (e) => {
  const filteredArr = arr.filter((item) => item.includes(e.currentTarget.value));
  const markup = filteredArr.map((item) => `<li><p>${item}</p></li>`).join(" ");
  if (filteredArr.length > 0) {
    listRef.innerHTML = "";
    listRef.insertAdjacentHTML("beforeend", markup);
  } else {
    listRef.innerHTML = "";
  }
});
