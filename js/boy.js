import { makeImageSection } from './contents.js';
import { makeThreeMenu } from './contents.js';
import { makeAdvert } from './contents.js';
import { makeTitle } from './contents.js';
import { makeRanking } from './contents.js';
import { makeClockImage } from './contents.js';

export default function addHTML() {
  document.querySelector('.clear').innerHTML = `
  ${makeImageSection(
    'https://dn-img-page.kakao.com/download/resource?kid=sU3Ip/hzhOd1K291/NlK8pODmELGCbJ8rJdF3v1',
    'BJ 대마도사',
    'UP',
    '26',
    '왜 게임 정보들이 보이는 거지? '
  )}
  ${makeThreeMenu('독점신작', '이벤트로 달리자', 'ㄸㅂㅇㄹ ㄹㅂㅇ')}
  ${makeAdvert(
    'https://dn-img-page.kakao.com/download/resource?kid=FDCfL/hzp2jS2BJL/R4hKEhngW4V6MtJXwj67Yk',
    '왕실교사 하이네 '
  )}

  <section class="ranking_section">
  ${makeTitle('일간 소년 TOP', '더보기👉')}
  ${makeRanking(
    '1',
    'https://dn-img-page.kakao.com/download/resource?kid=imfCM/hzmU0W1V6o/0q5JUn4tQIXrhPV98ng4n0&filename=th2',
    '8클래스 마법사의 회귀',
    '81.5',

    '테스,류송',
    '월'
  )}
  ${makeRanking(
    '2',
    'https://dn-img-page.kakao.com/download/resource?kid=NFDyw/hzb7v7UXak/sIRlf04F2kfYD9FnlKPry0&filename=th2',
    '도굴왕',
    '200.9',
    '윤쓰(REDICE STUDIO)',
    '화, 금'
  )}
  ${makeRanking(
    '3',
    'https://dn-img-page.kakao.com/download/resource?kid=b7NjCA/hySXG7oUua/N0VgMZrZg7M9AMDxZshZdk&filename=th2',
    '던전 리셋',
    '71.3',
    '엔트스튜디오',
    '화'
  )}
  </section>

  <section class="ranking_section">
  ${makeTitle('[GIFT] 오늘의 선물🎁', '더보기👉')}
  ${makeClockImage(
    'https://dn-img-page.kakao.com/download/resource?kid=bqGRvJ/hzhOiBaqTh/rMUNsRjC8R4taVsjY7Pkrk&filename=th2',
    '도굴왕',
    "여기도 '그자식'이 다 털어갔냐?",
    '200.9',
    '윤쓰(REDICE STUDIO)'
  )}
  ${makeClockImage(
    'https://dn-img-page.kakao.com/download/resource?kid=XAiBk/hzb7AUOJaa/1Cn8dn26avPLRekjxjDA21&filename=th2',
    'SSS급 죽어야 사는 헌터',
    '죽어야 발동되는 S+급 스킬?!',
    '91.9',
    '네이다,Bill K'
  )}
  ${makeClockImage(
    'https://dn-img-page.kakao.com/download/resource?kid=b7xOuh/hywgDSSfdy/W0LOoweCk5ZAjGkxLQz2v0&filename=th2',
    '드라코런',
    '드넓은 하늘의 드래곤 라이더!',
    '52.6',
    '병권'
  )}
  ${makeClockImage(
    'https://dn-img-page.kakao.com/download/resource?kid=b2J03f/hy41Jel0DP/VygRmkq8B77EkgNm8HUO1K&filename=th2',
    '올드뉴비 김춘식',
    '게임 무외한 꼰대의 도전!',
    '14.9',
    '게게겍'
  )}
  </section>
  `;
}
