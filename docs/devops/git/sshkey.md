# 개요
공개키, 비공개키 방식
와 이건 어뜨케 정리하지 ㅋㅋㅋㅋ 직접하기 어려울듯

# 왜 PC마다 생성할까?
기기 상실시 관리가 편해서 보안상 더 좋다

# 생성
ssh-keygen 생성문 추가

# 네이밍 규칙
규칙은 닉네임-장소-PC네임 이런식으로 쓰면 좋음

# 결과물
유저폴더에 id_pub.rsa 생성됨

# GITHUB에 셋팅
user > setting > ssh key > id_pub.rsa에 외계어 긁어다가 붙혀넣으면 끝

# GITLAB에 셋팅
user > setting > ssh key > id_pub.rsa에 외계어 긁어다가 붙혀넣으면 끝 (위랑 얼추 비슷)

# SOURCETREE에 셋팅
도구 > 옵션 > 일반 > ssh 메뉴에 유저폴더의 id_pub.rsa 선택