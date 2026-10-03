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

// クイズ機能
// ==============================


// 問題数を選ぶ場所
const quizCount = document.getElementById("quizCount");

// クイズ開始ボタン
const startQuizButton = document.getElementById("startQuizButton");

// 問題数を選ぶ画面
const quizSettings = document.getElementById("quizSettings");

// クイズ本体
const quizGame = document.getElementById("quizGame");

// 現在何問目か
const quizProgress = document.getElementById("quizProgress");

// 正解数
const quizScore = document.getElementById("quizScore");

// 問題文
const quizQuestion = document.getElementById("quizQuestion");

// 選択肢
const quizOptions = document.getElementById("quizOptions");

// 次の問題ボタン
const nextQuizButton = document.getElementById("nextQuizButton");

// もう一度挑戦するボタン
const retryQuizButton = document.getElementById("retryQuizButton");


// 現在の問題の単語
let currentQuizWord = null;

// クイズの問題数
let totalQuizCount = 10;

// 現在何問目か
let currentQuizNumber = 0;

// 正解数
let score = 0;


// =================================
// クイズ開始
// =================================

startQuizButton.addEventListener("click", function () {

    // 選択された問題数を取得
    totalQuizCount = Number(quizCount.value);

    // 4個未満だと4択問題が作れない
    if (words.length < 4) {
        alert("3単語しか登録してないとかどうゆうこと？");
        return;
    }

    // 最初の問題
    currentQuizNumber = 1;

    // 正解数を0にする
    score = 0;

    // 問題数選択画面を隠す
    quizSettings.style.display = "none";

    // クイズ画面を表示
    quizGame.style.display = "block";

    // 次の問題ボタンを表示
    nextQuizButton.style.display = "inline-block";

    // 再チャレンジボタンを隠す
    retryQuizButton.style.display = "none";

    // 1問目を作る
    createQuiz();

});


// =================================
// クイズを作る
// =================================

function createQuiz() {

    // 前の選択肢を消す
    quizOptions.innerHTML = "";

    // 問題番号を表示
    quizProgress.textContent =
        `第 ${currentQuizNumber} / ${totalQuizCount} 問`;

    // 正解数を表示
    quizScore.textContent =
        `正解数：${score}`;


    // ---------------------------------
    // 今回の問題の単語をランダムに選ぶ
    // ---------------------------------

    const randomIndex =
        Math.floor(Math.random() * words.length);

    currentQuizWord = words[randomIndex];


    // ---------------------------------
    // 問題の種類をランダムに決める
    // ---------------------------------

    const quizType =
        Math.floor(Math.random() * 3);


    // =================================
    // ① 意味 → 英単語
    // =================================

    if (quizType === 0) {

        quizQuestion.textContent =
            `「${currentQuizWord.meaning}」という意味の英単語は？`;


        // 正解を入れる
        let choices = [currentQuizWord];


        // 正解以外を3個追加
        while (choices.length < 4) {

            const randomWord =
                words[Math.floor(Math.random() * words.length)];

            if (!choices.includes(randomWord)) {
                choices.push(randomWord);
            }
        }


        // 選択肢の順番をランダムにする
        choices.sort(() => Math.random() - 0.5);


        // ボタンを作る
        choices.forEach(function (choice) {

            const button = document.createElement("button");

            button.textContent = choice.word;


            button.addEventListener("click", function () {

                // 正解か確認
                const isCorrect =
                    choice === currentQuizWord;

                finishAnswer(
                    isCorrect,
                    currentQuizWord.word
                );

            });


            quizOptions.appendChild(button);

        });

    }


    // =================================
    // ② 英単語 → 意味
    // =================================

    else if (quizType === 1) {

        quizQuestion.textContent =
            `「${currentQuizWord.word}」の意味は？`;


        // 正解を入れる
        let choices = [currentQuizWord];


        // 正解以外を3個追加
        while (choices.length < 4) {

            const randomWord =
                words[Math.floor(Math.random() * words.length)];

            if (!choices.includes(randomWord)) {
                choices.push(randomWord);
            }
        }


        // 順番をランダムにする
        choices.sort(() => Math.random() - 0.5);


        // ボタンを作る
        choices.forEach(function (choice) {

            const button = document.createElement("button");

            button.textContent = choice.meaning;


            button.addEventListener("click", function () {

                const isCorrect =
                    choice === currentQuizWord;

                finishAnswer(
                    isCorrect,
                    currentQuizWord.meaning
                );

            });


            quizOptions.appendChild(button);

        });

    }


    // =================================
    // ③ スペル入力
    // =================================

    else {

        quizQuestion.textContent =
            `「${currentQuizWord.meaning}」を英語で入力してね`;


        // 入力欄
        const input = document.createElement("input");

        input.type = "text";

        input.placeholder = "英単語を入力";


        // 回答ボタン
        const answerButton =
            document.createElement("button");

        answerButton.textContent = "回答";


        answerButton.addEventListener("click", function () {

            // 入力された答え
            const answer =
                input.value.trim();


            // 大文字小文字を区別しない
            const isCorrect =
                answer.toLowerCase() ===
                currentQuizWord.spelling.toLowerCase();


            finishAnswer(
                isCorrect,
                currentQuizWord.spelling
            );


            // 入力できなくする
            input.disabled = true;

            answerButton.disabled = true;

        });


        // 画面に追加
        quizOptions.appendChild(input);

        quizOptions.appendChild(answerButton);

    }

}


// =================================
// 回答が終わったときの処理
// =================================

function finishAnswer(isCorrect, correctAnswer) {

    // 正解なら1点追加
    if (isCorrect) {

        score++;

        quizQuestion.textContent =
            "正解ズモ";

    }

    // 不正解
    else {

        quizQuestion.textContent =
            `あれれ～正解は「${correctAnswer}」`;

    }


    // 正解数を更新
    quizScore.textContent =
        `正解数：${score}`;


    // すべての選択肢を押せなくする
    const allButtons =
        quizOptions.querySelectorAll("button");

    allButtons.forEach(function (button) {

        button.disabled = true;

    });

}


// =================================
// 次の問題
// =================================

nextQuizButton.addEventListener("click", function () {

    // 最後の問題だった場合
    if (currentQuizNumber >= totalQuizCount) {

        // 結果を表示
        quizQuestion.textContent =
            `${totalQuizCount}問中 ${score}問 正解　うぉw`;


        // 選択肢を消す
        quizOptions.innerHTML = "";


        // 次の問題ボタンを隠す
        nextQuizButton.style.display = "none";


        // 再チャレンジボタンを表示
        retryQuizButton.style.display = "inline-block";


        return;
    }


    // 次の問題へ
    currentQuizNumber++;


    // 新しい問題を作る
    createQuiz();

});


// =================================
// もう一度挑戦する
// =================================

retryQuizButton.addEventListener("click", function () {

    // 正解数をリセット
    score = 0;

    // 1問目に戻す
    currentQuizNumber = 1;

    // 再チャレンジボタンを隠す
    retryQuizButton.style.display = "none";

    // 次の問題ボタンを表示
    nextQuizButton.style.display = "inline-block";

    // 新しい問題を作る
    createQuiz();

});

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
// ====================
// バックアップ機能
// ====================

// バックアップボタンを取得
const backupButton = document.getElementById("backupButton");

// 復元ボタンを取得
const restoreButton = document.getElementById("restoreButton");

// ファイル選択欄を取得
const restoreFile = document.getElementById("restoreFile");


// ====================
// バックアップ
// ====================

backupButton.addEventListener("click", function () {

    // 現在の単語データをJSON形式に変換する
    const backupData = JSON.stringify(words, null, 2);

    // ダウンロードするファイルを作る
    const blob = new Blob(
        [backupData],
        { type: "application/json" }
    );

    // ファイルをダウンロードするためのURLを作る
    const url = URL.createObjectURL(blob);

    // ダウンロード用のリンクを作る
    const link = document.createElement("a");

    link.href = url;

    // 今日の日付を取得
const now = new Date();

// 年・月・日を取得
const year = now.getFullYear();
const month = String(now.getMonth() + 1).padStart(2, "0");
const day = String(now.getDate()).padStart(2, "0");

// ファイル名を作る
link.download = `EITAN-GO-backup-${year}-${month}-${day}.json`;

    // ダウンロードを実行
    link.click();

    // 作ったURLを削除
    URL.revokeObjectURL(url);

    alert("単語帳をバックアップしたズモ！");
});


// ====================
// 復元ボタン
// ====================

restoreButton.addEventListener("click", function () {

    // ファイル選択画面を開く
    restoreFile.click();

});


// ====================
// ファイルが選ばれたとき
// ====================

restoreFile.addEventListener("change", function () {

    // 選択されたファイルを取得
    const file = restoreFile.files[0];

    // ファイルが選ばれていなければ終了
    if (!file) {
        return;
    }

    // ファイルを読み込むためのもの
    const reader = new FileReader();


    reader.onload = function () {

        try {

            // JSONをJavaScriptの配列に戻す
            const restoredWords = JSON.parse(reader.result);

            // 配列になっているか確認
            if (!Array.isArray(restoredWords)) {
                throw new Error("データの形式が違いますw");
            }


            // 本当に復元するか確認
            const result = confirm(
                "現在の単語帳をバックアップデータで置き換えます。\n\n本当に復元しますか？"
            );

            if (!result) {
                return;
            }


            // 単語データを復元
            words = restoredWords;

            // localStorageにも保存
            saveWords();

            // 画面の単語一覧を更新
            renderWords();

            alert("単語帳を復元したズモ！");

        } catch (error) {

            // 正しいバックアップファイルではない場合
            alert(
                "このファイルはEITAN GOのバックアップではない可能性が高井さんズモ"
            );

        }

    };


    // ファイルを読み込む
    reader.readAsText(file);


    // 同じファイルをもう一度選べるようにする
    restoreFile.value = "";

});
