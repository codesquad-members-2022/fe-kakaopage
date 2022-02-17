import { makeImageSection } from './contents.js';
import { makeMenu } from './contents.js';
import { makeAdvert } from './contents.js';
import { makeDate } from './contents.js';
import { makeTitle } from './contents.js';
import { addTag } from './contents.js';
import { makeTodayRanking } from './contents.js';
import { makeTodayRecommend } from './contents.js';
import { makeNewThings } from './contents.js';
import { genreTop } from './contents.js';

export default function addHTML() {
  document.querySelector('.clear').innerHTML = `
  ${makeImageSection(
    'https://dn-img-page.kakao.com/download/resource?kid=bqyJkx/hzp2fwmJDP/qx8LbXn8n6DHxfK0B4sMkk',
    '톱스타, 그 자체',
    'NEW',
    '1.6',
    '다시 톱스타가 될 수 있을까?'
  )}
  ${makeMenu(
    '오늘 UP',
    '206',
    '오늘 신작',
    '10',
    '오리지널',
    '2,330',
    '완결까지 정주행',
    '독립운동가 웹툰',
    '오늘랭킹',
    '1위'
  )}
  ${makeAdvert(
    'https://dn-img-page.kakao.com/download/resource?kid=gPEB1/hzhOklLHwx/b9atKBc9aVXCF3Gu9KKKHK',
    '공모전'
  )}
  <section class="today_top">
  ${makeDate('완결')}
  ${makeTitle('요일연재TOP', '더보기👉')}
  ${addTag('span', '3,495', 'section_title')}
  ${makeTodayRanking(
    '	https://dn-img-page.kakao.com/download/resource?kid=JKbkM/hzhOksSPjb/Zk4kiHai3IGS77dRy1iO1K&filename=th2',
    '1위',
    '악당의 아빠를 꼬셔라',
    '159.2'
  )}
  ${makeTodayRanking(
    '	https://dn-img-page.kakao.com/download/resource?kid=rOfMN/hyEdeEtJFz/63XlMqYRjhokso828Ki6k0&filename=th2',
    '2위',
    '나 혼자만 레벨업',
    '417.4'
  )}
  ${makeTodayRanking(
    '	https://dn-img-page.kakao.com/download/resource?kid=biG4Nt/hzb7sXLBzm/Spy2JkLBLu3zUwNl9TaznK&filename=th2',
    '3위',
    '궁귀검신',
    '51.2'
  )}
  ${makeTodayRanking(
    '	https://dn-img-page.kakao.com/download/resource?kid=bJfSQM/hzhOey4Ce1/vdfn3bixVAOmkJYJOklf41&filename=th2',
    '4위',
    '아빠, 나 이결혼 안 할래요!',
    '159.2'
  )}
  ${makeTodayRanking(
    '	https://dn-img-page.kakao.com/download/resource?kid=nqcae/hy41PrwQNy/owLlWx5cXQR4NciK7kjcc1&filename=th2',
    '5위',
    '딸 바보가 되었습니다',
    '55.2'
  )}
  ${makeTodayRecommend(
    '	https://dn-img-page.kakao.com/download/resource?kid=b7H7Jx/hzmU3lmHWf/PYTUMe8KmuFYbvLETjjfOk&filename=th2',
    '★',
    '9.9',
    '재앙급 영웅님이 귀환하셨다',
    '57.2'
  )}
  ${makeTodayRecommend(
    '	https://dn-img-page.kakao.com/download/resource?kid=6WrkN/hzhOi9Q3rx/K9EcOe49J8tPsqkcZY9KB1&filename=th2',
    '★',
    '9.8',
    '카니발 베이비',
    '17'
  )} 
  ${makeTodayRecommend(
    '	https://dn-img-page.kakao.com/download/resource?kid=c7aN0E/hy41NmZFbx/XpuVPoG811XwKto4vKtxYK&filename=th2',
    '★',
    '9.9',
    '24분의 1 로멘스',
    '63.8'
  )} 
  ${makeTodayRecommend(
    '	https://dn-img-page.kakao.com/download/resource?kid=S1kxU/hyEdlYjRrz/e1OeuUKOpw07xau22O8N6k&filename=th2',
    '★',
    '10.0',
    '악녀가 사랑할 때',
    '133'
  )}
  ${makeTodayRecommend(
    '	https://dn-img-page.kakao.com/download/resource?kid=wIHwB/hzhOmRyx4s/c720DwZNXp99QzWbKrljIK&filename=th2',
    '★',
    '9.9',
    '대놓고 사내연애',
    '35.5'
  )}
  </section>

  <section class="new_things">
  ${makeTitle('기대신작 TOP', '더보기👉')}
  ${makeNewThings(
    'https://dn-img-page.kakao.com/download/resource?kid=vEn5x/hzp2ec8RPh/fT0WMvndQ54lxcYZPOQAIk&filename=th2',
    'first_new_thing',
    '프로파일러(개정판)',
    '4.8',
    '동기 없는 범죄는 없다'
  )}
  ${makeNewThings(
    'https://dn-img-page.kakao.com/download/resource?kid=gJnVp/hzhOlZQA6V/bOLsPczkpDmGtHlcutyopk&filename=th2',
    'second_new_thing',
    '별이 빈 소원',
    '12.6',
    '갑자기 이 이상한 초능력은 뭐야?'
  )}
  </section>

  <section class="drama_section"> 
  ${makeTitle('로맨스 TOP', '더보기👉')}
  ${genreTop(
    'https://dn-img-page.kakao.com/download/resource?kid=lLRDp/hzb7uHbYRi/3aMKXm2PXLc62IZKWBOSak&filename=th2',
    '누구의 아이를 낳을까',
    '9.7',
    '26.5'
  )}  
  ${genreTop(
    'https://dn-img-page.kakao.com/download/resource?kid=lLRDp/hzb7uHbYRi/3aMKXm2PXLc62IZKWBOSak&filename=th2',
    '누구의 아이를 낳을까',
    '9.7',
    '26.5'
  )}  
  ${genreTop(
    'https://dn-img-page.kakao.com/download/resource?kid=lLRDp/hzb7uHbYRi/3aMKXm2PXLc62IZKWBOSak&filename=th2',
    '누구의 아이를 낳을까',
    '9.7',
    '26.5'
  )}  
  ${genreTop(
    'https://dn-img-page.kakao.com/download/resource?kid=lLRDp/hzb7uHbYRi/3aMKXm2PXLc62IZKWBOSak&filename=th2',
    '누구의 아이를 낳을까',
    '9.7',
    '26.5'
  )}  
  ${genreTop(
    'https://dn-img-page.kakao.com/download/resource?kid=lLRDp/hzb7uHbYRi/3aMKXm2PXLc62IZKWBOSak&filename=th2',
    '누구의 아이를 낳을까',
    '9.7',
    '26.5'
  )}  
  </section>

  <section class="boy_section"> 
  ${makeTitle('로판 TOP', '더보기👉')}
  ${genreTop(
    'https://dn-img-page.kakao.com/download/resource?kid=czz1LH/hzhOdNxBuR/13Yh4xVNddVTlBceG9PgvK&filename=th2',
    '미연시 게임 속 하찮은 엑스트라',
    '9.8',
    '23.7'
  )}  
  ${genreTop(
    'https://dn-img-page.kakao.com/download/resource?kid=czz1LH/hzhOdNxBuR/13Yh4xVNddVTlBceG9PgvK&filename=th2',
    '미연시 게임 속 하찮은 엑스트라',
    '9.8',
    '23.7'
  )}  
  ${genreTop(
    'https://dn-img-page.kakao.com/download/resource?kid=czz1LH/hzhOdNxBuR/13Yh4xVNddVTlBceG9PgvK&filename=th2',
    '미연시 게임 속 하찮은 엑스트라',
    '9.8',
    '23.7'
  )}  
  ${genreTop(
    'https://dn-img-page.kakao.com/download/resource?kid=czz1LH/hzhOdNxBuR/13Yh4xVNddVTlBceG9PgvK&filename=th2',
    '미연시 게임 속 하찮은 엑스트라',
    '9.8',
    '23.7'
  )}  
  ${genreTop(
    'https://dn-img-page.kakao.com/download/resource?kid=czz1LH/hzhOdNxBuR/13Yh4xVNddVTlBceG9PgvK&filename=th2',
    '미연시 게임 속 하찮은 엑스트라',
    '9.8',
    '23.7'
  )}
  </section>

  `;
}
