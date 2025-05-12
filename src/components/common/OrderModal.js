import React, { useState, useEffect } from 'react';
import { X, Phone, Mail, MessageCircle, Copy } from 'lucide-react';

const OrderModal = ({ isOpen, onClose, translations, lang }) => {
  const t = translations[lang];
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  
  const copyToClipboard = async (text, type) => {
    try {
      await navigator.clipboard.writeText(text);
      
      let message = '';
      if (type === 'email') {
        message = lang === 'ko' 
          ? '이메일이 복사되었습니다!' 
          : lang === 'en' 
            ? 'Email copied to clipboard!' 
            : '邮箱已复制到剪贴板！';
      } else if (type === 'kakao') {
        message = lang === 'ko' 
          ? '카카오톡 ID가 복사되었습니다!' 
          : lang === 'en' 
            ? 'KakaoTalk ID copied to clipboard!' 
            : '微信ID已复制到剪贴板！';
      }
      
      setToastMessage(message);
      setShowToast(true);
      
      // 2.5초 후 토스트 숨기기
      setTimeout(() => {
        setShowToast(false);
      }, 2500);
    } catch (err) {
      console.error('Failed to copy:', err);
      // 에러 시 토스트 메시지 표시
      const errorMessage = lang === 'ko' 
        ? '복사에 실패했습니다. 다시 시도해주세요.' 
        : lang === 'en' 
          ? 'Failed to copy. Please try again.' 
          : '复制失败，请重试。';
      
      setToastMessage(errorMessage);
      setShowToast(true);
      
      setTimeout(() => {
        setShowToast(false);
      }, 2500);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* 백드롭 */}
        <div 
          className="absolute inset-0 bg-black bg-opacity-50 transition-opacity modal-backdrop"
          onClick={onClose}
        />
        
        {/* 모달 컨텐츠 */}
        <div className="relative bg-white rounded-lg shadow-xl max-w-md w-full p-6 transform transition-all modal-content">
          {/* 닫기 버튼 */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
          
          {/* 모달 헤더 */}
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {lang === 'ko' ? '주문 문의' : lang === 'en' ? 'Order Inquiry' : '订购咨询'}
          </h2>
          
          <p className="text-gray-600 mb-6">
            {lang === 'ko' 
              ? '아래 연락처로 문의해 주시면 친절히 상담해 드리겠습니다.' 
              : lang === 'en'
                ? 'Please contact us through the following channels for assistance.'
                : '请通过以下方式联系我们，我们将竭诚为您服务。'}
          </p>
          
          {/* 연락처 정보 */}
          <div className="space-y-4">
            {/* 전화번호 */}
            <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <Phone className="h-6 w-6 text-green-600" />
              <div>
                <p className="font-semibold text-gray-900">{t.contact.phone}</p>
                <p className="text-gray-600">010-4291-3615</p>
              </div>
            </div>
            
            {/* 이메일 */}
            <div 
              onClick={() => copyToClipboard('info@baekse-farm.com', 'email')}
              className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer group"
            >
              <div className="flex items-center space-x-3">
                <Mail className="h-6 w-6 text-green-600" />
                <div>
                  <p className="font-semibold text-gray-900">{t.contact.email}</p>
                  <p className="text-gray-600">info@baekse-farm.com</p>
                </div>
              </div>
              <Copy className="h-4 w-4 text-gray-400 group-hover:text-gray-600" />
            </div>
            
            {/* 카카오톡/위챗 */}
            <div 
              onClick={() => copyToClipboard('@백세농업', 'kakao')}
              className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer group"
            >
              <div className="flex items-center space-x-3">
                <MessageCircle className="h-6 w-6 text-green-600" />
                <div>
                  <p className="font-semibold text-gray-900">
                    {lang === 'ko' ? '카카오톡' : lang === 'en' ? 'KakaoTalk' : '微信'}
                  </p>
                  <p className="text-gray-600">
                    {lang === 'ko' ? '@백세농업' : '@baekse-agriculture'}
                  </p>
                </div>
              </div>
              <Copy className="h-4 w-4 text-gray-400 group-hover:text-gray-600" />
            </div>
          </div>
          
          {/* 운영 시간 */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-600 text-center">
              <span className="font-semibold">{lang === 'ko' ? '운영시간: ' : lang === 'en' ? 'Business Hours: ' : '营业时间：'}</span>
              {t.contact.hours}
            </p>
          </div>
          
          {/* 하단 버튼 */}
          <div className="mt-6 flex gap-3">
            <a
              href="tel:010-4291-3615"
              className="flex-1 bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors text-center"
            >
              {lang === 'ko' ? '전화 연결' : lang === 'en' ? 'Call Now' : '立即通话'}
            </a>
            <button
              onClick={() => copyToClipboard('info@baekse-farm.com', 'email')}
              className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors text-center"
            >
              {lang === 'ko' ? '이메일 복사' : lang === 'en' ? 'Copy Email' : '复制邮箱'}
            </button>
          </div>
        </div>
      </div>
      
      {/* 토스트 메시지 */}
      {showToast && (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-[100] animate-slideUp">
          <div className="bg-gray-800 text-white px-6 py-3 rounded-lg shadow-lg flex items-center space-x-3">
            <Copy className="h-5 w-5 text-green-400" />
            <span className="font-medium">{toastMessage}</span>
          </div>
        </div>
      )}
    </>
  );
};

export default OrderModal;
