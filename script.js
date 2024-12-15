// script.js

document.addEventListener("DOMContentLoaded", function() {
    // 記事タイトルを変更
    document.getElementById("article-title").textContent = "新しい記事のタイトル";
    
    // サブタイトルを変更
    document.getElementById("subtitle").textContent = "新しい記事のサブタイトル";

    // セクション1の内容を変更
    document.getElementById("section1").innerHTML = `
        <h2>新しいセクション1のタイトル</h2>
        <p>新しい内容をここに追加します。記事の初めの部分を詳細に説明します。</p>
    `;

    // セクション2の内容を変更
    document.getElementById("section2").innerHTML = `
        <h2>新しいセクション2のタイトル</h2>
        <p>さらに深堀りした情報をここに追加します。</p>
        <ul>
            <li>新しいリスト項目1</li>
            <li>新しいリスト項目2</li>
            <li>新しいリスト項目3</li>
        </ul>
    `;
    
    // セクション3の内容を変更
    document.getElementById("section3").innerHTML = `
        <h2>新しいセクション3のタイトル</h2>
        <p>画像や図を使ってさらに説明します。</p>
        <img src="new-image.jpg" alt="新しい画像の説明" />
    `;
});
