import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // 必須フィールドの検証
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: '全ての項目を入力してください' },
        { status: 400 }
      );
    }

    // メール送信設定
    // 注意: 実際のサービスでは環境変数から設定を読み込むことを推奨
    const transporter = nodemailer.createTransport({
      service: 'gmail', // または他のサービス
      auth: {
        user: process.env.EMAIL_USER,  // 環境変数から読み込む
        pass: process.env.EMAIL_PASS,  // 環境変数から読み込む
      },
    });

    // 件名の日本語表示用にマッピング
    const subjectMap: Record<string, string> = {
      'project': 'プロジェクトの相談',
      'collaboration': 'コラボレーションの提案',
      'question': '質問',
      'other': 'その他',
    };

    // メール本文の作成
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_RECEIVER || process.env.EMAIL_USER, // 受信用メールアドレス
      subject: `ポートフォリオサイトからのお問い合わせ: ${subjectMap[subject] || subject}`,
      text: `名前: ${name}\nメールアドレス: ${email}\n件名: ${subjectMap[subject] || subject}\n\nメッセージ:\n${message}`,
      html: `
        <h2>ポートフォリオサイトからのお問い合わせ</h2>
        <p><strong>名前:</strong> ${name}</p>
        <p><strong>メールアドレス:</strong> ${email}</p>
        <p><strong>件名:</strong> ${subjectMap[subject] || subject}</p>
        <p><strong>メッセージ:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };

    // メール送信
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Mail sending error:', error);
    return NextResponse.json(
      { error: 'メールの送信に失敗しました' },
      { status: 500 }
    );
  }
} 