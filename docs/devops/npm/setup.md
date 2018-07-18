#nodejs 설치
스샷

#웹서버 띄우기 연습
원래 웹서버를 띄우려면 apm, ngnix 등의 서버 엔진 설치가 필요함.
nodejs를 사용하면 npm이 v8엔진을 통하여 알아서 다 해줌.

#npm install [package name]
cmd 열기
npm init
package.json이 생긴걸 볼수 있다. 열어보자. 일단 계속 진행
구식이긴 하지만 gulp를 설치해보자.
npm install -g gulp 설치
-g가 뭔지 모르겠지만 일단 넘어가자. 용어 설명은 차후에.
gulp에 대한 설명을 약간 넣어주면 좋을것 같음
package.json을 다시 열어보자. 뭔가 잔뜩 추가 되었다.
웹서버인 browser-sync을 설치해보자
npm install browser-sync
package.json 다시 확인

#gulpfile.js 작성
공식 browser-sync git 문서에 가서 코드를 긁어오자.
씽크 관련 코드도 긁어오자

#index.html 작성
대충 만들어보자

#무슨 일이 일어난 걸까?
package.json 열어보면
dependency가 걸려 있는것을 볼수 있다. 이게 내가 설치한 오픈소스이다. 1줄 썻는데 이만큼의 오픈소스 라이브러리가 같이 설치 된다.
devdependency는 개발용으로만 쓰고 빌드시에는 포함시키지 않는다.
npm install [package] -d 를 표시하면 됨