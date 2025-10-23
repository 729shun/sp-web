# オクトリンク株式会社のスマートフォン対応
オクトリンク株式会社　コーポレートサイトのスマートフォン対応用リポジトリです。


---

## メンバー
*荒木(ディレクター)
*渋谷(デザイナー)
*白金(デザイナー)

## ファイル構成

```
sp-web/
├── index.html          # メインHTMLファイル
├── css/
│   └── style.css       # レスポンシブ対応スタイルシート
├── js/
│   └── script.js       # インタラクション機能
├── images/             # 画像ファイル格納用
└── README.md           # プロジェクト説明
```

## 機能

### レスポンシブデザイン
- スマートフォン（〜480px）
- タブレット（481px〜768px）
- デスクトップ（769px以上）

### 実装済み機能
- ハンバーガーメニュー（スマートフォン表示時）
- スムーズスクロール
- お問い合わせフォーム（バリデーション機能付き）
- カード要素のフェードインアニメーション
- レスポンシブグリッドレイアウト

## 使用方法

1. ブラウザでindex.htmlを開く
```bash
# ローカルサーバーを起動する場合（Python 3の例）
python -m http.server 8000
```

2. ブラウザで `http://localhost:8000` にアクセス

## 対応ブラウザ

- Chrome（最新版）
- Firefox（最新版）
- Safari（最新版）
- Edge（最新版）

## リリース方法

### 開発環境での確認
```bash
# ローカルサーバーを起動
python -m http.server 8000

# または Node.jsの場合
npx http-server
```

### 本番環境へのデプロイ
1. 各種Webサーバー（Apache, Nginx等）の公開ディレクトリに配置
2. 静的サイトホスティングサービス（GitHub Pages, Netlify, Vercel等）にデプロイ

### GitHub Pagesへのデプロイ例
```bash
git add .
git commit -m "サイト公開"
git push origin main
```

Settings > Pages > Source で "main" ブランチを選択


