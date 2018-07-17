## GIT SERVER
여러명이 함께 GIT을 사용하려면 GIT SERVER가 필요하다.\
그렇다면 GIT SERVER는 어디에 만드는가?

1. 디바이스에 직접 설치하여 사용
2. 외부 호스팅을 사용

1의 경우 디바이스 비용, 설치 시간, 약간의 삽질이 예상된다.\
(사실 그냥 귀찮다...)\
반드시 1을 사용해야 하는 용자가 아니라면 2를 추천한다.\ 

## GIT HOSTING 종류

헐 많다\
[https://git.wiki.kernel.org/index.php/GitHosting](https://git.wiki.kernel.org/index.php/GitHosting)

## GITHUB vs GITLAB vs BITBUCKET

유명한거 몇개만 알아보자.

![An image](./img/git-hosting.jpg)

|                 | Github                      | Gitlab              | Bitbucket                       |
|:---------------:|:---------------------------:|:-------------------:|:-------------------------------:|
| 개발사          | MS (최근인수)                | Gitlab              | Atlassian                       |
| 무료 저장소     | only public                  | unlimited           | unlimited under 5 users         |
| CI/CD          | travis-ci                    | gitlab-ci           | bamboo                          |
| 설치형지원      | no                           | yes                 | no                              |
| 가격           | private 사용시 과금(은근 비쌈) | 앵간하면 돈안내고 씀 | 인생의 쓴맛을 보여주는 유저당 과금 |

이거 게임수익보다 Git 비용이 더나오겠다.\
조직의 상황에(자금력에) 맞는걸로 적당히 고르자.

```
if(money <= enoughMoney)
{
    alert("gitlab......")
}
```