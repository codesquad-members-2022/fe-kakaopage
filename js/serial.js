import { makeImageSection } from './contents.js';
import { makeDate } from './contents.js';
import { makeTitle } from './contents.js';

import { makeTodayRecommend } from './contents.js';
import { makeTodayRanking } from './contents.js';

export default function addHTML() {
  document.querySelector('.clear').innerHTML = `
  ${makeImageSection(
    'https://dn-img-page.kakao.com/download/resource?kid=U75Fe/hyZ8vLJXBq/PnCbWdqXRPgdpppo0cUaDK',

    '중천수월령',
    'UP',
    '23.9',
    '이번 새엔 반드시 화녀를 지키리라!'
  )}
  <section class="today_top">
  ${makeDate('완결')}
  ${makeTitle('전체 | 웹툰 | 🕔웹툰', '전체▼')}
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
`;
}
