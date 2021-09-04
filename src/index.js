import "./styles.css";

const onClickAdd = () => {
  //　テキストボックスの値を取得&初期化
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // divタグ生成
  const div = document.createElement("div");
  div.className = "list-row";

  // liタグ生成
  const li = document.createElement("li");
  li.innerText = inputText;

  // button（完了）タグ生成
  const completeBotton = document.createElement("button");
  completeBotton.innerText = "完了";
  completeBotton.addEventListener("click", () => {
    alert("完了");
  });

  // button（削除）タグ生成
  const deleteBotton = document.createElement("button");
  deleteBotton.innerText = "削除";
  deleteBotton.addEventListener("click", () => {
    alert("削除");
  });

  // divタグに各タグを挿入
  div.appendChild(li);
  div.appendChild(completeBotton);
  div.appendChild(deleteBotton);

  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
