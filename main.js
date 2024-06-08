// 変数の初期化
let untyped = '';
let typed = '';
let score = 0;
let pageCount = 0; // 質問のカウント
const MAX_PAGE = 10; // 出題数

//　必要なHTML要素を取得
const untypedfield = document.getElementById('untyped');
const typedfield = document.getElementById('typed');
const wrap = document.getElementById('wrap');
const start = document.getElementById('start');
const count = document.getElementById('count');
const jaspan = document.getElementById('ja');


// 複数のテキストを格納する配列
const textLists = [
    'Hello World',
    'This is my App',
    'How are you?',
    'Have you ever seen the deep forest?',
    'After the rain',
    'This is a picture of the earth',
    'Twilight and Breaking dawn',
    'Humanity organization',
    'Yes We Can',
    'We are all different and all wonderful',
    'Boys be ambitious',
    'X stream',
    'Myers briggs type indicator',
    'Character and Personality',
    'You can’t get away from yourself by moving from one place to another'
];


const words = [
    { en: "apple", ja: "りんご" },
    { en: "book", ja: "本" },
    { en: "cat", ja: "猫" },
    { en: "dog", ja: "犬" },
    { en: "elephant", ja: "象" },
    { en: "flower", ja: "花" },
    { en: "grape", ja: "ぶどう" },
    { en: "house", ja: "家" },
    { en: "ice cream", ja: "アイスクリーム" },
    { en: "juice", ja: "ジュース" },
    { en: "key", ja: "鍵" },
    { en: "lemon", ja: "レモン" },
    { en: "monkey", ja: "猿" },
    { en: "notebook", ja: "ノート" },
    { en: "orange", ja: "オレンジ" },
    { en: "pencil", ja: "鉛筆" },
    { en: "queen", ja: "女王" },
    { en: "rabbit", ja: "ウサギ" },
    { en: "sun", ja: "太陽" },
    { en: "table", ja: "テーブル" },
    { en: "umbrella", ja: "傘" },
    { en: "vase", ja: "花瓶" },
    { en: "water", ja: "水" },
    { en: "xylophone", ja: "木琴" },
    { en: "yacht", ja: "ヨット" },
    { en: "zebra", ja: "シマウマ" },
    { en: "airplane", ja: "飛行機" },
    { en: "banana", ja: "バナナ" },
    { en: "car", ja: "車" },
    { en: "door", ja: "ドア" },
    { en: "ear", ja: "耳" },
    { en: "fish", ja: "魚" },
    { en: "goat", ja: "ヤギ" },
    { en: "hat", ja: "帽子" },
    { en: "island", ja: "島" },
    { en: "jacket", ja: "ジャケット" },
    { en: "kite", ja: "凧" },
    { en: "lion", ja: "ライオン" },
    { en: "moon", ja: "月" },
    { en: "nest", ja: "巣" },
    { en: "ocean", ja: "海" },
    { en: "piano", ja: "ピアノ" },
    { en: "queen", ja: "女王" },
    { en: "rose", ja: "バラ" },
    { en: "star", ja: "星" },
    { en: "train", ja: "電車" },
    { en: "umbrella", ja: "傘" },
    { en: "violin", ja: "バイオリン" },
    { en: "whale", ja: "鯨" },
    { en: "x-ray", ja: "エックス線" },
    { en: "yogurt", ja: "ヨーグルト" },
    { en: "zoo", ja: "動物園" }
  ];
  


// ランダムなテキストを表示
const createText = () => {

    // 出題数のカウントアップ
    pageCount++;
    //　-----　MAXPAGEを超えたら終了
    if(pageCount > MAX_PAGE){
        gameOver();        
    }

    // 正タイプした文字列をクリア
    typed = '';
    typedfield.textContent = typed;

    // 配列のインデックス数からランダムな数値を生成する
    let random = Math.floor(Math.random()* words.length);

    // 配列からランダムにテキストを取得し画面に表示する
    untyped = words[random].en;
    untypedfield.textContent = untyped;

    // ---- 今何問目というのを画面上に表示する ----
    count.textContent = `第${pageCount}問`;
    count.textContent = "第" + pageCount + "問";

    // ---- 日本語を表示する ----
    jaspan.textContent = `日本語訳：${words[random].ja}`;

};

// キー入力の判定
const keyPress = e => {

    // 誤タイプの場合
    if(e.key !== untyped.substring(0, 1)){
        wrap.classList.add('mistyped');
        // 100ms後に背景色を元に戻す
        setTimeout(()=> {
            wrap.classList.remove('mistyped');
        }, 100);
        return;
    }

    // 正タイプの場合
     // スコアのインクリメント
     score++;
    wrap.classList.remove('mistyped');
    typed += untyped.substring(0, 1);
    untyped = untyped.substring(1);
    typedfield.textContent = typed;
    untypedfield.textContent = untyped;

    // テキストが無くなったら新しいテキストを表示
    if(untyped === '') {
        createText();
    }
};

// タイピングスキルのランク判定
const rankCheck = score => {
    // テキストを格納する変数を作る
    let text = '';

    // スコアに応じて異なるメッセージを変数textに格納する
    if(score < 100){
        text = `あなたのランクはCです。\nBランクまであと${100 - score}文字です。`;
    } else if (score < 200){
        text = `あなたのランクはBです。\nAランクまであと${200 - score}文字です。`;
    } else if (score < 300){
        text = `あなたのランクはAです。\nSランクまであと${300 - score}文字です。`;
    } else if(score >= 300){
        text = `あなたのランクはSです。\nおめでとうございます!`;
    }

    // 生成したメッセージと一緒に文字列を返す
    return `${score}文字打てました! \n${text}\n【OK】リトライ / 【キャンセル】終了`;
};

// ゲームを終了
const gameOver = () => {
    const result = confirm(rankCheck(score));

    // OKボタンをクリックされたらリロードする
    if(result == true) {
        window.location.reload();
    }
};


// ゲームスタート時の処理
start.addEventListener ('click', () => {

    // 出題カウントのクリア
    pageCount = 0;

    // ランダムなテキストを表示する
    createText();

    // 「スタート」 ボタンを非表示にする
    start.style.display = 'none';

    //　キーボードのイベント処理
    document.addEventListener('keypress', keyPress);
});


untypedfield.textContent = 'スタートボタンで開始';
count.textContent = `${MAX_PAGE}問出題します！`;

