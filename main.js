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
  

  const selectWords = [
    { en: "apple", ja1: "りんご", ja2: "リンゴ", ja3: "アップル", ja4: "オレンジ", answer: "りんご" },
    { en: "book", ja1: "本", ja2: "雑誌", ja3: "新聞", ja4: "ノート", answer: "本" },
    { en: "cat", ja1: "猫", ja2: "犬", ja3: "ウサギ", ja4: "ネズミ", answer: "猫" },
    { en: "dog", ja1: "犬", ja2: "猫", ja3: "魚", ja4: "鳥", answer: "犬" },
    { en: "elephant", ja1: "象", ja2: "ライオン", ja3: "トラ", ja4: "ゴリラ", answer: "象" },
    { en: "flower", ja1: "花", ja2: "草", ja3: "木", ja4: "葉", answer: "花" },
    { en: "grape", ja1: "ぶどう", ja2: "リンゴ", ja3: "バナナ", ja4: "オレンジ", answer: "ぶどう" },
    { en: "house", ja1: "家", ja2: "ビル", ja3: "公園", ja4: "学校", answer: "家" },
    { en: "ice cream", ja1: "アイスクリーム", ja2: "ケーキ", ja3: "チョコレート", ja4: "キャンディ", answer: "アイスクリーム" },
    { en: "juice", ja1: "ジュース", ja2: "水", ja3: "お茶", ja4: "コーヒー", answer: "ジュース" },
    { en: "key", ja1: "鍵", ja2: "ドア", ja3: "窓", ja4: "部屋", answer: "鍵" },
    { en: "lemon", ja1: "レモン", ja2: "オレンジ", ja3: "ライム", ja4: "グレープフルーツ", answer: "レモン" },
    { en: "monkey", ja1: "猿", ja2: "ゴリラ", ja3: "犬", ja4: "猫", answer: "猿" },
    { en: "notebook", ja1: "ノート", ja2: "本", ja3: "雑誌", ja4: "新聞", answer: "ノート" },
    { en: "orange", ja1: "オレンジ", ja2: "リンゴ", ja3: "レモン", ja4: "グレープフルーツ", answer: "オレンジ" },
    { en: "pencil", ja1: "鉛筆", ja2: "ペン", ja3: "マーカー", ja4: "消しゴム", answer: "鉛筆" },
    { en: "queen", ja1: "女王", ja2: "王", ja3: "皇帝", ja4: "王妃", answer: "女王" },
    { en: "rabbit", ja1: "ウサギ", ja2: "ネズミ", ja3: "猫", ja4: "犬", answer: "ウサギ" },
    { en: "sun", ja1: "太陽", ja2: "月", ja3: "星", ja4: "地球", answer: "太陽" },
    { en: "table", ja1: "テーブル", ja2: "椅子", ja3: "ベッド", ja4: "ソファ", answer: "テーブル" },
    { en: "umbrella", ja1: "傘", ja2: "帽子", ja3: "靴", ja4: "鞄", answer: "傘" },
    { en: "vase", ja1: "花瓶", ja2: "コップ", ja3: "皿", ja4: "鉢", answer: "花瓶" },
    { en: "water", ja1: "水", ja2: "ジュース", ja3: "お茶", ja4: "コーヒー", answer: "水" },
    { en: "xylophone", ja1: "木琴", ja2: "ピアノ", ja3: "ギター", ja4: "ドラム", answer: "木琴" },
    { en: "yacht", ja1: "ヨット", ja2: "船", ja3: "ボート", ja4: "カヌー", answer: "ヨット" },
    { en: "zebra", ja1: "シマウマ", ja2: "馬", ja3: "牛", ja4: "鹿", answer: "シマウマ" },
    { en: "airplane", ja1: "飛行機", ja2: "ヘリコプター", ja3: "船", ja4: "電車", answer: "飛行機" },
    { en: "banana", ja1: "バナナ", ja2: "リンゴ", ja3: "オレンジ", ja4: "ぶどう", answer: "バナナ" },
    { en: "car", ja1: "車", ja2: "バイク", ja3: "自転車", ja4: "バス", answer: "車" },
    { en: "door", ja1: "ドア", ja2: "窓", ja3: "屋根", ja4: "壁", answer: "ドア" },
    { en: "ear", ja1: "耳", ja2: "目", ja3: "鼻", ja4: "口", answer: "耳" },
    { en: "fish", ja1: "魚", ja2: "肉", ja3: "野菜", ja4: "果物", answer: "魚" },
    { en: "goat", ja1: "ヤギ", ja2: "羊", ja3: "牛", ja4: "馬", answer: "ヤギ" },
    { en: "hat", ja1: "帽子", ja2: "靴", ja3: "手袋", ja4: "マフラー", answer: "帽子" },
    { en: "island", ja1: "島", ja2: "山", ja3: "海", ja4: "川", answer: "島" },
    { en: "jacket", ja1: "ジャケット", ja2: "シャツ", ja3: "パンツ", ja4: "靴", answer: "ジャケット" },
    { en: "kite", ja1: "凧", ja2: "風船", ja3: "飛行機", ja4: "ヨット", answer: "凧" },
    { en: "lion", ja1: "ライオン", ja2: "トラ", ja3: "ヒョウ", ja4: "熊", answer: "ライオン" },
    { en: "moon", ja1: "月", ja2: "太陽", ja3: "星", ja4: "地球", answer: "月" },
    { en: "nest", ja1: "巣", ja2: "木", ja3: "花", ja4: "葉", answer: "巣" },
    { en: "ocean", ja1: "海", ja2: "湖", ja3: "川", ja4: "池", answer: "海" },
    { en: "piano", ja1: "ピアノ", ja2: "ギター", ja3: "ドラム", ja4: "バイオリン", answer: "ピアノ" },
    { en: "queen", ja1: "女王", ja2: "王", ja3: "皇帝", ja4: "王妃", answer: "女王" },
    { en: "rose", ja1: "バラ", ja2: "ユリ", ja3: "桜", ja4: "菊", answer: "バラ" },
    { en: "star", ja1: "星", ja2: "月", ja3: "太陽", ja4: "地球", answer: "星" },
    { en: "train", ja1: "電車", ja2: "バス", ja3: "車", ja4: "飛行機", answer: "電車" },
    { en: "umbrella", ja1: "傘", ja2: "帽子", ja3: "靴", ja4: "鞄", answer: "傘" },
    { en: "violin", ja1: "バイオリン", ja2: "ピアノ", ja3: "ギター", ja4: "ドラム", answer: "バイオリン" },
    { en: "whale", ja1: "鯨", ja2: "イルカ", ja3: "サメ", ja4: "魚", answer: "鯨" },
    { en: "x-ray", ja1: "エックス線", ja2: "超音波", ja3: "CTスキャン", ja4: "MRI", answer: "エックス線" },
    { en: "yogurt", ja1: "ヨーグルト", ja2: "チーズ", ja3: "バター", ja4: "ミルク", answer: "ヨーグルト" },
    { en: "zoo", ja1: "動物園", ja2: "水族館", ja3: "公園", ja4: "博物館", answer: "動物園" }
  ];
  


// ランダムなテキストを表示
const createText = () => {

    // 出題数のカウントアップ
    pageCount++;
    //　-----　MAXPAGEを超えたら終了
    if(pageCount > MAX_PAGE){
        gameOver(); 
        return;      
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

