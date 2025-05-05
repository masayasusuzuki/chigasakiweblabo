const fs = require('fs');
const path = require('path');
const { createCanvas } = require('canvas');

// 欠けている画像のみを定義
const images = [
  { name: 'work2.jpg', width: 800, height: 600, color: '#ff0080', text: 'ブランドアイデンティティ' },
  { name: 'work3.jpg', width: 800, height: 600, color: '#39c3ff', text: 'プロモーションビデオ' },
  { name: 'work4.jpg', width: 800, height: 600, color: '#7928ca', text: 'eコマースリデザイン' },
];

// 画像の保存先ディレクトリ
const imagesDir = path.join(__dirname, 'public', 'images');

// ディレクトリが存在することを確認
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// 同期的に各画像を処理
for (const { name, width, height, color, text } of images) {
  console.log(`Creating ${name}...`);
  
  try {
    // キャンバスを作成
    const canvas = createCanvas(width, height);
    const ctx = canvas.getContext('2d');
    
    // 背景色を設定
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, width, height);
    
    // テキストを描画
    ctx.fillStyle = 'white';
    ctx.font = 'bold 32px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, width / 2, height / 2);
    
    // 画像を保存
    const buffer = canvas.toBuffer('image/jpeg');
    fs.writeFileSync(path.join(imagesDir, name), buffer);
    console.log(`${name} created successfully!`);
  } catch (error) {
    console.error(`Error creating ${name}:`, error);
  }
}

console.log('Process completed!'); 