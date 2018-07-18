#hub.docker.com 접속



#가입



#github에서 repo생성 docker-test



#create new file
- Dockerfile

openssh, rsync 추가한뒤 저장

다시 hub.docker.com 접속
상단메뉴 link 클릭
추가할 항목 선택
상단메뉴 오가니제이션
create auto-build 선택
docker-test 클릭
대충 기입하고 create
dashboard? > bild setting > 연결된녀석 트리거

#터미널에서 docker run 계정/docker-test로 실행 가능

#연습
gihub에서 repo 만들고 클론으로 받아온뒤 index.html 생성하고 커밋&푸시

docker run -itd --name test ubuntu
attach test
apt-get update
apt-get install git nginx -y
cd var\www\html\
rm index.debian-index.html
get clone 주소 . (.을 꼭 붙여줘야 함)



github로 가서 Dockerfile 수정
FROM ubuntu
RUN apt-get update
    && apt-get install git ngnix -y
    && cd var\www\html\
    && rm -f index.html
    && git clone 주소 .
    && service ngnix enable
    && service ngnix start

EXPOSE 80

docker run --name test -itd -p 8080:80 -d dockerhub의repo이름