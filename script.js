// ====================
// 画面を取得
// ====================

// ホーム画面
const homePage = document.getElementById("homePage");

// 単語帳画面
const wordPage = document.getElementById("wordPage");

// クイズ画面
const quizPage = document.getElementById("quizPage");


// ====================
// ホーム画面へ戻る関数
// ====================

function showHome() {

    // ホーム画面を表示
    homePage.style.display = "block";

    // 単語帳画面を隠す
    wordPage.style.display = "none";

    // クイズ画面を隠す
    quizPage.style.display = "none";
}


// ====================
// 単語帳画面を表示する関数
// ====================

function showWordPage() {

    // ホーム画面を隠す
    homePage.style.display = "none";

    // 単語帳画面を表示
    wordPage.style.display = "block";

    // クイズ画面を隠す
    quizPage.style.display = "none";
}


// ====================
// クイズ画面を表示する関数
// ====================

function showQuizPage() {

    // ホーム画面を隠す
    homePage.style.display = "none";

    // 単語帳画面を隠す
    wordPage.style.display = "none";

    // クイズ画面を表示
    quizPage.style.display = "block";
}


// ====================
// 画面移動ボタン
// ====================

// 「単語帳ずも」が押されたとき
document.getElementById("wordPageButton").addEventListener("click", function () {

    // 単語帳画面を表示
    showWordPage();

});


// 「クイズも」が押されたとき
document.getElementById("quizPageButton").addEventListener("click", function () {

    // クイズ画面を表示
    showQuizPage();

});


// 「← ホームかも」が押されたとき
document.getElementById("wordBackButton").addEventListener("click", function () {

    // ホーム画面を表示
    showHome();

});


// クイズ画面の「← ホームかも」
document.getElementById("quizBackButton").addEventListener("click", function () {

    // ホーム画面を表示
    showHome();

});


// ====================
// ライト・ダークモード
// ====================

// ライトモードボタン
const lightModeButton = document.getElementById("lightModeButton");

// ダークモードボタン
const darkModeButton = document.getElementById("darkModeButton");


// ====================
// ライトモード
// ====================

lightModeButton.addEventListener("click", function () {

    // bodyからdarkModeを取り除く
    document.body.classList.remove("darkMode");

    // 「light」という文字を保存
    localStorage.setItem("theme", "light");

});


// ====================
// ダークモード
// ====================

darkModeButton.addEventListener("click", function () {

    // bodyにdarkModeを追加
    document.body.classList.add("darkMode");

    // 「dark」という文字を保存
    localStorage.setItem("theme", "dark");

});


// ====================
// 保存されているテーマを確認
// ====================

// localStorageからthemeを取り出す
const savedTheme = localStorage.getItem("theme");


// ダークが保存されていた場合
if (savedTheme === "dark") {

    // ダークモードにする
    document.body.classList.add("darkMode");

}


// ====================
// 最初はホーム画面を表示
// ====================

showHome();

// ====================
// 単語帳データ
// ====================

// 登録されている単語を入れる配列
let words = [];


// ====================
// 保存されている単語を読み込む
// ====================

// localStorageから「words」を取り出す
const savedWords = localStorage.getItem("words");


// 保存されている単語があれば
if (savedWords) {

    // 文字列をJavaScriptの配列に戻す
    words = JSON.parse(savedWords);

}


// ====================
// 単語を保存する関数
// ====================

function saveWords() {

    // words配列を文字列に変換して保存
    localStorage.setItem("words", JSON.stringify(words));

}


// ====================
// 単語一覧を表示する関数
// ====================

function renderWords() {

    // 単語一覧を表示する場所
    const wordList = document.getElementById("wordList");

    // いったん中身を空にする
    wordList.innerHTML = "";


    // 登録されている単語を1つずつ処理
    words.forEach(function (wordData, index) {

        // 単語を表示するカードを作る
        const card = document.createElement("div");

        // カード用のクラスを付ける
        card.className = "word-card";


        // 英単語を表示
        const wordText = document.createElement("h3");

        wordText.textContent = wordData.word;


        // 意味を表示
        const meaningText = document.createElement("p");

        meaningText.textContent = "意味：" + wordData.meaning;


        // スペルを表示
        const spellingText = document.createElement("p");

        spellingText.textContent = "スペル：" + wordData.spelling;


        // 削除ボタン
        const deleteButton = document.createElement("button");

        deleteButton.textContent = "削除";


        // 削除ボタンが押されたとき
        deleteButton.addEventListener("click", function () {

            // 配列からその単語を削除
            words.splice(index, 1);

            // 保存し直す
            saveWords();

            // 画面を更新
            renderWords();

        });


        // カードの中に英単語を追加
        card.appendChild(wordText);

        // 意味を追加
        card.appendChild(meaningText);

        // スペルを追加
        card.appendChild(spellingText);

        // 削除ボタンを追加
        card.appendChild(deleteButton);


        // カードを単語一覧に追加
        wordList.appendChild(card);

    });

}


// ====================
// 単語登録
// ====================

// 登録ボタンを取得
const addWordButton = document.getElementById("addWordButton");


// 登録ボタンが押されたとき
addWordButton.addEventListener("click", function () {

    // 入力された英単語
    const word = document.getElementById("word").value;

    // 入力された意味
    const meaning = document.getElementById("meaning").value;

    // 入力されたスペル
    const spelling = document.getElementById("spelling").value;


    // どれかが空欄なら
    if (
        word === "" ||
        meaning === "" ||
        spelling === ""
    ) {

        // メッセージを表示
        alert("ゆるさんぞゆるさんぞゆるさんぞゆるさんぞゆるさんぞゆるさんぞゆるさんぞゆるさんぞゆるさんぞゆるさんぞゆるさんぞゆるさんぞゆるさんぞゆるさんぞゆるさんぞゆるさんぞゆるさんぞゆるさんぞゆるさんぞゆるさんぞゆるさんぞゆるさんぞゆるさんぞゆるさんぞ");

        // ここで処理を終了
        return;

    }
    if (
        word === "ずも" ||
        meaning === "ずも"　||
        spelling === "ずも" 
    ) {

        alert("なぜわかった？")

        return;

    }

    if (
        word === "ズモ" ||
        meaning === "ズモ"　||
        spelling === "ズモ" 
    ) {

        alert("ナゼワカッタ？")

        return;
        
    }

    if (
        word === "zumo" ||
        meaning === "zumo"　||
        spelling === "zumo" 
    ) {

        alert("How did you figure that out?")

        return;
        
    }


    // 新しい単語を配列に追加
    words.push({

        word: word,

        meaning: meaning,

        spelling: spelling

    });


    // 保存
    saveWords();


    // 入力欄を空にする
    document.getElementById("word").value = "";

    document.getElementById("meaning").value = "";

    document.getElementById("spelling").value = "";


    // 単語一覧を更新
    renderWords();

});


// ====================
// 最初に単語一覧を表示
// ====================

renderWords();

// ====================
// Service Workerを登録
// ====================

if ("serviceWorker" in navigator) {

    window.addEventListener("load", function () {

        navigator.serviceWorker.register("./sw.js")

            .then(function () {

                console.log("Service Worker 登録成功ずも！");

            })

            .catch(function (error) {

                console.log(
                    "Service Worker 登録失敗したわ。まじすまん：",
                    error
                );

            });

    });

}