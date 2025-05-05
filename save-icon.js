const fs = require('fs');
const path = require('path');

// アップロードされた画像のパスを指定
const targetDir = path.join(__dirname, 'public', 'images');
const sourceFile = path.join(__dirname, 'img', 'icon', 'icon.png');
const targetFile = path.join(targetDir, 'icon.png');

// ファイルをコピー
try {
  // ディレクトリが存在するか確認
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
    console.log(`ディレクトリを作成しました: ${targetDir}`);
  }
  
  // ファイルをコピー
  fs.copyFileSync(sourceFile, targetFile);
  console.log(`ファイルをコピーしました: ${sourceFile} -> ${targetFile}`);
} catch (error) {
  console.error(`エラーが発生しました: ${error.message}`);
  
  // 詳細なエラー情報
  if (error.code === 'ENOENT') {
    console.error('ファイルまたはディレクトリが見つかりません。パスを確認してください。');
    console.error(`ソースファイルのパス: ${sourceFile}`);
    console.error(`ソースファイルのパスが存在するか: ${fs.existsSync(path.dirname(sourceFile))}`);
    
    try {
      // imgディレクトリの内容を確認
      const imgDirPath = path.join(__dirname, 'img');
      if (fs.existsSync(imgDirPath)) {
        console.log('imgディレクトリの内容:');
        fs.readdirSync(imgDirPath).forEach(file => {
          console.log(` - ${file}`);
        });
      }
      
      // img/iconディレクトリの内容を確認
      const iconDirPath = path.join(__dirname, 'img', 'icon');
      if (fs.existsSync(iconDirPath)) {
        console.log('img/iconディレクトリの内容:');
        fs.readdirSync(iconDirPath).forEach(file => {
          console.log(` - ${file}`);
        });
      }
    } catch (dirError) {
      console.error(`ディレクトリ情報の取得中にエラーが発生しました: ${dirError.message}`);
    }
  }
} 