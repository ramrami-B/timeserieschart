# 📈 시계열 차트 그리기

## About
- 원티드 4주차 기업 과제 (개인)
- 라이브러리를 사용하지 않고, 과제를 수행하였습니다.

## 배포
https://timeserieschart.vercel.app/

## 🛫 Start the Project
```
git clone https://github.com/ramrami-B/clinicaltrialskoreasearch.git
cd clinicaltrialskoreasearch
npm install
npm rum start
```

⚠️ 애플리케이션을 시작하기 위해서 `node v18`이 필요합니다.

## ⚒️ Teck Stack
- core: `typescript`
- framework: `Next.js`
- style: `styled-jsx`
- 배포: `Vercel`
- react-router-dom v6.xx
- node v18.xx

## 요구사항
### 1. 시계열 차트 만들기
- [x] 주어진 JSON 데이터의 `key`값(시간)을 기반으로 시계열 차트를 만들어주세요
- [x] 하나의 차트안에 Area 형태의 그래프와 Bar 형태의 그래프가 모두 존재하는 복합 그래프로 만들어주세요
- [x] Area 그래프의 기준값은 `value_area` 값을 이용해주세요
- [x] Bar 그래프의 기준값은 `value_bar` 값을 이용해주세요
- [x] 차트의 Y축에 대략적인 수치를 표현해주세요(예시 이미지 참고)

### 3. 호버 기능 구현
- [x] 특정 데이터 구역에 마우스 호버시 `id, value_area, value_bar` 데이터를 툴팁 형태로 제공해주세요

### 4. 필터링 기능 구현
- [x] 필터링 기능을 구현해주세요, 필터링은 특정 데이터 구역을 하이라이트 하는 방식으로 구현해주세요
- [x] 필터링 기능은 버튼 형태로 ID값(지역이름)을 이용해주세요
- [x] 필터링 시 버튼에서 선택한 ID값과 동일한 ID값을 가진 데이터 구역만 하이라이트 처리를 해주세요
- [x] 특정 데이터 구역을 클릭 시에도 필터링 기능과 동일한 형태로 동일한 ID값을 가진 데이터 구역을 하이라이트해주세요

## 💭 주절 주절
- 라이브러리를 사용하지 않고 svg로 직접 그린 이유:
  팀원들의 이야기를 들어보니 라이브러리 사용하면 1시간 컷으로 끝낼 수 있는 과제인듯 했다. 그래서 호기롭게 svg로 한번 그려보자! 하고 시작했다.
