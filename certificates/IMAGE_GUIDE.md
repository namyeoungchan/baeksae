# 인증서 이미지 생성 가이드

PDF 인증서를 이미지로 변환하는 방법입니다.

## 방법 1: 온라인 변환기 사용
1. https://pdf2png.com/ 또는 https://pdftoimage.com/ 접속
2. PDF 파일 업로드
3. PNG 또는 JPG로 변환
4. 변환된 이미지 다운로드
5. 파일명을 다음과 같이 변경:
   - certification_1.pdf → certification_1_preview.jpg
   - certification_2.pdf → certification_2_preview.jpg
   - certification_3.pdf → certification_3_preview.jpg
6. public/certificates/ 폴더에 이미지 저장

## 방법 2: Mac 사용자의 경우
1. PDF 파일을 미리보기(Preview)로 열기
2. 파일 > 내보내기 선택
3. 포맷을 JPEG 또는 PNG로 선택
4. 해상도를 150-200 DPI로 설정
5. 저장

## 방법 3: Windows 사용자의 경우
1. PDF를 Adobe Acrobat Reader로 열기
2. 파일 > 다른 형식으로 저장 > 이미지 > JPEG
3. 저장

## 이미지 최적화
- 권장 해상도: 800px x 1130px (비율 유지)
- 파일 크기: 200KB 이하
- 포맷: JPG 또는 PNG

변환 후 src/App.js의 이미지 경로를 실제 경로로 변경하세요:
```javascript
src="/certificates/certification_1_preview.jpg"
```
