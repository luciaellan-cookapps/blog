# 로컬 설치
윈도우 hyperv 활성화
다운로드 주소, 이미지

# ubuntu 설치 해보기
docker ps : 살아있는 프로세스 리스트 확인
docker run -it --name test1 ubuntu bin/bash : 우분투 설치
헐..bash 들어가짐
exit : 프로세스 종료
docker ps : 살아있는 프로세스 리스트 확인
docker ps -la : 전체 프로세스 리스트 확인

docker start test1 : 죽은 프로세스 살리기
docker attach test1 : 접속
docker exit : 프로세스 종료
docker rm test1 : 프로세스 제거

docker run -itd --name test1 ubuntu bin/bash : 백그라운드에서 실행

# webserver 환경 만들어보기

docker run --name nginx-test -d -p 8080:80 nginx
끝 ㄷㄷㄷㄷ

# 컨플루언스 환경 만들어보기

docker run -v /data/your-confluence-home:/var/atlassian/application-data/confluence --name="confluence" -d -p 8090:8090 -p 8091:8091 atlassian/confluence-server

처음이라 쫌 복잡해 보일수도 있다.
사실 이렇게 사용할 일이 많지는 않다. 대략 이렇다는 것만 알아보자.

# docker 프로토콜
