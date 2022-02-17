import { makeImageSection } from './contents.js';
import { makeDate } from './contents.js';
import { makeWebtoonInfo } from './contents.js';
import { makeTitle } from './contents.js';
import { makePromotion } from './contents.js';
import { makeClockImage } from './contents.js';

export default function addHTML() {
  document.querySelector('.clear').innerHTML = `
  ${makeImageSection(
    'https://dn-img-page.kakao.com/download/resource?kid=cl0NGc/hzacezTSJp/rNn75CBqttbKDY0Cgpierk',
    '내가 죽였다',
    '이벤트',
    '21.1',
    '자살 아니야. 내가 죽였어'
  )}

  <section class="today_top">
  ${makeDate('전체')} 
  ${makeWebtoonInfo(
    'https://dn-img-page.kakao.com/download/resource?kid=dy1Oc2/hywgI1bMRS/7QsDTWgZtp8XA30K0Si1u0&filename=th2',
    '샬롯에게는 다섯명의 제자가 있다',
    '대마법사 샬롯의 제자들이 이상하다?',
    '108.5',
    '용용'
  )}
  ${makeWebtoonInfo(
    'https://dn-img-page.kakao.com/download/resource?kid=brEVr3/hzhOkF7eSj/xHW4lqdI3DERYTAhj85wa1&filename=th2',
    '프로야구생존기',
    '노영웅의 프로야구 생존기!',
    '17.7',
    '최훈'
  )}
  ${makeWebtoonInfo(
    'https://dn-img-page.kakao.com/download/resource?kid=dmaZLT/hzb7rxhmlz/4UqTzrdzXkui9o6Lgs8CxK&filename=th2',
    '유리의 벽',
    '그를 만난 순간부터 시작이었다.',
    '44.5',
    '조호'
  )}
  ${makeWebtoonInfo(
    'https://dn-img-page.kakao.com/download/resource?kid=Tl2Q4/hzacfS2Bbs/kEUES1V6ggO21luFnVGca0&filename=th2',
    '더 챌린저',
    '게임 속에서 나는 최고가 된다!',
    '29.7',
    'TryTry(REDICE STUDIO)'
  )}
  ${makeWebtoonInfo(
    'https://dn-img-page.kakao.com/download/resource?kid=kA6QH/hzhOmjo7BL/2w8eSUBuRYODQpjTR0YK0k&filename=th2',
    '어른이',
    '20대가 되면 멋진 어른이 되는 줄 알았어.',
    '12.4',
    '하힘'
  )}
  </section>

  <section class="today_top">
  ${makeTitle('🔥HOT 최근 프로모션 진행작', '더보기👉')}
  ${makePromotion(
    'https://dn-img-page.kakao.com/download/resource?kid=rQjE3/hzp2l39Lfz/8MWGhF07tZNNjDE8txEzW0&filename=th2',
    '인터넷 중독 캠프',
    '이 캠프의 진짜 목족은...?',
    '1.9',
    '팀 천둥게',
    '웹툰'
  )}
  ${makePromotion(
    'https://dn-img-page.kakao.com/download/resource?kid=17yoQ/hzhOoa0ClK/BokP7kCWJpNlXOSx8fRPuk&filename=th2',
    '리플: 버서커',
    '세계 1위 게이머의 화려한 귀환!',
    '7.1',
    '허니보이',
    '웹툰'
  )}
  ${makeClockImage(
    'https://dn-img-page.kakao.com/download/resource?kid=B9yif/hyoXEYHVNL/gMonAbOI5FKnlnRpgUvmR0&filename=th2',
    '학사재생',
    '금수저를 물고 태어나 버렸다!',
    '167',
    '소유현, 윰짝짝'
  )}
  ${makePromotion(
    'https://dn-img-page.kakao.com/download/resource?kid=n79ft/hywgA9NVsj/sTq4TRecVyVL4cMEKuziO1&filename=th2',
    'FFF급 관심용사',
    '10년 개고생했더니, 인성 F등급?!',
    '68.2',
    '깡무, 파르나르',
    '웹툰'
  )}
  ${makePromotion(
    'https://dn-img-page.kakao.com/download/resource?kid=eGLDP/hzhOkswboB/xRaiFtK4AnA308YIF0RkIk&filename=th2',
    '극락왕생',
    '윤회의 끝, 극락왕생을 위해!',
    '23.7',
    '고사리박사',
    '웹툰',
    false
  )}
  </section>`;
}
