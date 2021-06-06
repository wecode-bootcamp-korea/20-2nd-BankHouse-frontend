# Bank House(은행의집) 

- 원스톱 인테리어 플랫폼 [오늘의집](https://ohou.se/) 을 모티브로 한 팀 프로젝트

# 프로젝트 소개

- 커뮤니티, 스토어, 인테리어시공 중 SNS에서 핫 한 집구경 컨텐츠 및 커뮤니티 페이지를 메인 아이템으로 구현


# 프로젝트 기간

- 2021.05.24.~ 2021.06.04.

# 프로젝트 계획

- 1st Sprint : 각자 맡은 페이지 기능 구현
- 2nd Sprint : code Refactoring 및 conflict 해결


# :rocket:팀원

### Frontend 4명

- [김유림](https://github.com/yurim45)
- [안정현](https://github.com/ahnjeongh2)
- [안준현](https://github.com/junchi211)
- [이지연](https://github.com/Yonyas)

### Backend 2명

- [김경래](https://github.com/kyeongraekim)
- [최대환](https://github.com/Dae-Hwan)
- [백엔드 github 링크](https://github.com/wecode-bootcamp-korea/20-2nd-BankHouse-backend)

## 적용 기술

- Frontend : React, React Router, React Hooks, Styled Components, JavaScript
- Backend : Python, Aquery, Django web framework, Bcrypt, My SQL, PyJWT, Django Unit Test, Docker, AWS(RDS, EC2, S3), unicorn, nohup
- Common : Slack, Trello, GitHub, Git, RESTful API

## 구현 사항

🎈로그인/회원가입 페이지
- 일반 로그인 및 회원가입
  * 정규식을 활용한 로그인/회원가입 유효성 체크
  * 로그인/회원가입 input 값 유효성 체크 통과 여부 실시간 알림 기능
- 카카오 소셜 로그인 및 회원가입
  * OAuth2.0 기반 카카오 로그인 API 연동


🎈메인 페이지(사진 카테고리 페이지)
- Nav 컴포넌트
  *  location 객체를 활용한 커뮤니티 내 카테고리 메뉴 경로 이동에 따른 폰트 색 변경
  *  페이지 스크롤 시, 메인 Nav 고정 기능(position: sticky 적용)
  *  localStorge 상의 access token 저장 여부에 따른 로그인/로그아웃 상태 변화
- 페이지 헤더 슬라이더
  * 라이브러리(slick slider)를 활용한 슬라이더 구현
- 컨텐츠 필터링 기능
- 컨텐츠 card 기능
  * 동적라우팅을 활용한 페이지 이동 구현(카테고리 페이지 -> 상세 페이지)
  * 목데이터 활용 및 적용, 백엔드와 API 연결
- 페이지네이션 기능
  * 목데이터 적용, 백엔드와 API 연결
- throttle을 적용한 GoToTop button 기능 구현
- Footer 컴포넌트


🎈사진 card component 상세 페이지
- 댓글 추가 및 해당 이미지 삭제 기능 구현
- 댓글 게시된 시간 계산하여 1분전, 2분전 등 표기 기능 구현   


🎈글쓰기 페이지
- 글쓰기 기능 (사진 및 내용 업로드)
  * 옵션값 미선택시, 해당 인풋창 보더 색 변경
  * 옵션값 선택시, placeholder 검정으로 변경 
- 글쓰기 업로드 시, 메인페이지 내 사진 카테고리 페이지에 업데이트
- 업로드된 컨텐츠 삭제 기능


## 데모 영상
- [유튜브 영상 링크](https://www.youtube.com/watch?v=yCrwiy9oFAQ)


## 💥 Reference
- 이 프로젝트는 [오늘의집](https://ohou.se/) 사이트를 참조하여 학습목적으로 만들었습니다.
- 실무수준의 프로젝트이지만 학습용으로 만들었기 때문에 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제될 수 있습니다.
- 이 프로젝트에서 사용하고 있는 사진 대부분은 위코드에서 구매한 것이므로 해당 프로젝트 외부인이 사용할 수 없습니다.
