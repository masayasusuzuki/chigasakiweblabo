'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const MailFormPage = () => {
  const formRef = useRef<HTMLFormElement>(null);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{type: 'success' | 'error', message: string} | null>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      // 非表示のiframeを作成
      const iframeName = `hidden-iframe-${Date.now()}`;
      const iframe = document.createElement('iframe');
      iframe.name = iframeName;
      iframe.style.display = 'none';
      document.body.appendChild(iframe);
      
      // フォームを作成
      const form = document.createElement('form');
      form.method = 'POST';
      form.action = 'https://script.google.com/macros/s/AKfycbxgXcEGquvomTFFgaurJOw4nFhY8ZX84B2VHfuTzltkIPxTeY10umQBxv8H3eWJ6IZi/exec';
      form.target = iframeName; // iframeに結果を表示
      
      // フォームデータを追加
      Object.entries(formData).forEach(([key, value]) => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = key;
        input.value = String(value);
        form.appendChild(input);
      });
      
      // フォームをDOMに追加して送信
      document.body.appendChild(form);
      form.submit();
      
      // 送信後、少し待ってからフォームとiframeを削除
      setTimeout(() => {
        if (document.body.contains(form)) {
          document.body.removeChild(form);
        }
        if (document.body.contains(iframe)) {
          document.body.removeChild(iframe);
        }
      }, 1000);
      
      // 成功メッセージを表示
      setSubmitStatus({
        type: 'success',
        message: 'お問い合わせありがとうございます！できるだけ早くご連絡いたします。'
      });
      
      // フォームをリセット
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({
        type: 'error',
        message: 'エラーが発生しました。後でもう一度お試しください。'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="py-20 bg-gradient-to-b from-gray-50 to-gray-100 font-sans relative overflow-hidden">
        <div className="absolute inset-0 bg-opacity-50 overflow-hidden">
          <div className="absolute -right-10 top-10 w-40 h-40 rounded-full bg-blue-300 opacity-20 blur-3xl"></div>
          <div className="absolute left-0 bottom-0 w-60 h-60 rounded-full bg-orange-300 opacity-20 blur-3xl"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 relative">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white text-2xl md:text-3xl font-bold py-4 px-6 rounded-t-full rounded-bl-full rounded-br-full inline-block mb-2 relative shadow-lg">
                メールでのお問い合わせ
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-0 h-0 
                  border-l-[15px] border-l-transparent 
                  border-r-[15px] border-r-transparent 
                  border-t-[20px] border-t-blue-600">
                </div>
              </div>
              <div className="h-8"></div>
              <p className="text-base md:text-xl opacity-80 max-w-2xl mx-auto text-justify md:text-center mt-4 font-sans">
                ご相談・お見積りはすべて無料です。<br />
                「こんなことできる？」といった軽いご質問でも、お気軽にご連絡ください。
              </p>
            </div>
            
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-8 bg-white rounded-xl p-8 md:p-10 shadow-xl border border-gray-100 font-sans transform transition-all">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="transition-all duration-300">
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">お名前</label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 text-gray-800 font-sans transition-all duration-200"
                      required
                    />
                  </div>
                </div>
                <div className="transition-all duration-300">
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">メールアドレス</label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 text-gray-800 font-sans transition-all duration-200"
                      required
                    />
                  </div>
                </div>
              </div>
              
              <div className="transition-all duration-300">
                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-700">件名</label>
                <div className="relative">
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 text-gray-800 appearance-none font-sans transition-all duration-200"
                    required
                    style={{
                      WebkitAppearance: 'none',
                      MozAppearance: 'none',
                      backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 1rem center',
                      backgroundSize: '1em'
                    }}
                  >
                    <option value="" className="bg-white text-gray-800 font-sans">選択してください</option>
                    <option value="project" className="bg-white text-gray-800 font-sans">ホームページのご相談</option>
                    <option value="collaboration" className="bg-white text-gray-800 font-sans">コラボレーションの提案</option>
                    <option value="question" className="bg-white text-gray-800 font-sans">質問</option>
                    <option value="other" className="bg-white text-gray-800 font-sans">その他</option>
                  </select>
                </div>
              </div>
              
              <div className="transition-all duration-300">
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">メッセージ</label>
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 text-gray-800 font-sans transition-all duration-200"
                    required
                  ></textarea>
                </div>
              </div>
              
              {submitStatus && (
                <div className={`p-5 rounded-lg ${submitStatus.type === 'success' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'} font-sans shadow-sm`}>
                  {submitStatus.message}
                </div>
              )}
              
              <div className="flex justify-end pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 rounded-full transition-all text-white font-bold disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:translate-y-0"
                >
                  {isSubmitting ? '送信中...' : '送信する'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MailFormPage; 