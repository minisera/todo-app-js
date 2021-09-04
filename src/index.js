import "./styles.css";

const onClickAdd = () => {
  //　テキストボックスの値を取得&初期化
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

//未完了リストに追加する関数
const createIncompleteList = (text) => {
  // divタグ生成
  const div = document.createElement("div");
  div.className = "list-row";

  // liタグ生成
  const li = document.createElement("li");
  li.innerText = text;

  // button（完了）タグ生成
  const completeBotton = document.createElement("button");
  completeBotton.innerText = "完了";
  completeBotton.addEventListener("click", () => {
    //　TODOの削除
    deleteFormIncompleteList(completeBotton.parentNode);

    // 完了リストに追加する要素
    const addTarget = completeBotton.parentNode;
    const text = addTarget.firstElementChild.innerText;

    // div以下を初期化
    addTarget.textContent = null;

    //liを生成
    const li = document.createElement("li");
    li.innerText = text;

    // 戻すボタン生成
    const backBotton = document.createElement("button");
    backBotton.innerText = "戻す";
    backBotton.addEventListener("click", () => {
      const deleteTarget = backBotton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      const text = backBotton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    });

    addTarget.appendChild(li);
    addTarget.appendChild(backBotton);

    document.getElementById("complete-list").appendChild(addTarget);
  });

  // button（削除）タグ生成
  const deleteBotton = document.createElement("button");
  deleteBotton.innerText = "削除";
  deleteBotton.addEventListener("click", () => {
    deleteFormIncompleteList(deleteBotton.parentNode);
  });

  // divタグに各タグを挿入
  div.appendChild(li);
  div.appendChild(completeBotton);
  div.appendChild(deleteBotton);

  document.getElementById("incomplete-list").appendChild(div);
};

//未完了リストから指定の要素を削除
const deleteFormIncompleteList = (terget) => {
  document.getElementById("incomplete-list").removeChild(terget);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
