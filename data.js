let T,W,F,S,SS;

const Mon_imageBoxInfo = {
  url : "https://dn-img-page.kakao.com/download/resource?kid=bbIdoP/hzhOi9qjVl/5FphIqKutQWsKju113rBhK",
  title : "SSS급 죽어야 사는 헌터",
  comment : "죽어야 발동되는 S+급 스킬?!",
  subscriber : "91.9만명"
}

const Mon_imageCardInfo = [
  {
    url: "https://dn-img-page.kakao.com/download/resource?kid=bhe9o7/hzmU3zpvL3/DWRcsmPxJAlrjDw7MkGWwK&filename=th2",
    rank : "1위",
    title : "8클래스 마법사의 회귀",
    info : ["image-card__comment__info-new hidden","image-card__comment__info-update hidden","image-card__comment__info-years hidden","image-card__comment__info-icon"],
    subscriber : "81.5만명"
  },
  {
    url: "https://dn-img-page.kakao.com/download/resource?kid=dpadT7/hzhOgqBSHA/HpZA6H7vPawsODuGIQaQO0&filename=th2",
    rank : "2위",
    title : "이번 생은 가주가 되겠습니다.",
    info : ["image-card__comment__info-new hidden","image-card__comment__info-update hidden","image-card__comment__info-years","image-card__comment__info-icon"],
    subscriber : "122.7만명"
  },
  {
    url: "https://dn-img-page.kakao.com/download/resource?kid=9Eoo5/hyATyGp2En/pYYjRkJJIrpHEvDible6T0&filename=th2",
    rank : "3위",
    title : "묵향 다크레이디",
    info : ["image-card__comment__info-new hidden","image-card__comment__info-update","image-card__comment__info-years hidden","image-card__comment__info-icon"],
    subscriber : "132만명"
  },
  {
    url: "https://dn-img-page.kakao.com/download/resource?kid=bjInsQ/hyORYE18fc/SHV461YOWiyk8bb1avebP1&filename=th2",
    rank : "4위",
    title : "레벨업 못하는 플레이어",
    info : ["image-card__comment__info-new hidden","image-card__comment__info-update","image-card__comment__info-years hidden","image-card__comment__info-icon"],
    subscriber : "85.4만명"
  },
  {
    url: "https://dn-img-page.kakao.com/download/resource?kid=bNhW1e/hzb7AOZqwu/Nvdfc6TfhUnn9CBNuUijq1&filename=th2",
    rank : "5위",
    title : "뒤끝 작렬",
    info : ["image-card__comment__info-new hidden","image-card__comment__info-update","image-card__comment__info-years hidden","image-card__comment__info-icon"],
    subscriber : "33.4만명"
  },
  {
    url: "https://dn-img-page.kakao.com/download/resource?kid=cburiM/hy41PLVqom/1BQa5TQO17iJiSIsRTKVr0&filename=th2",
    rank : ' <img src="./image/badge-thumbnail-star.svg" alt="" /> 9.3',
    title : "나는 이 집 아이",
    info : ["image-card__comment__info-new hidden","image-card__comment__info-update","image-card__comment__info-years hidden","image-card__comment__info-icon"],
    subscriber : "211.9만명"
  }
]

const mon = {
  box:Mon_imageBoxInfo,
  card:Mon_imageCardInfo,
  dayOfTheWeek:"mon"
}

const tue_imageBoxInfo = {
  url : "https://dn-img-page.kakao.com/download/resource?kid=bbIdoP/hzhOi9qjVl/5FphIqKutQWsKju113rBhK",
  title : "SSS급 죽어야 사는 헌터",
  comment : "죽어야 발동되는 S+급 스킬?!",
  subscriber : "91.9만명"
}

const tue_imageCardInfo = [
  {
    url: "https://dn-img-page.kakao.com/download/resource?kid=cbOcrh/hzhOeyLVuz/o3mzWEkKKAuJOLWv6bYJxK&filename=th2",
    rank : "1위",
    title : "도굴왕",
    info : ["image-card__comment__info-new hidden","image-card__comment__info-update","image-card__comment__info-years hidden","image-card__comment__info-icon"],
    subscriber : "200.9만명"
  },
  {
    url: "https://dn-img-page.kakao.com/download/resource?kid=4pT3F/hyLi76skGR/u3m5gW9VYP1mP6xNTTAafk&filename=th2",
    rank : "2위",
    title : "로드 오브 머니",
    info : ["image-card__comment__info-new hidden","image-card__comment__info-update hidden","image-card__comment__info-years","image-card__comment__info-icon"],
    subscriber : "49.7만명"
  },
  {
    url: "https://dn-img-page.kakao.com/download/resource?kid=chziT9/hyQ9N8NQR9/6GVju4wTFEmenXTlBb8yX1&filename=th2",
    rank : "3위",
    title : "용사의 전 여친입니다",
    info : ["image-card__comment__info-new hidden","image-card__comment__info-update","image-card__comment__info-years hidden","image-card__comment__info-icon"],
    subscriber : "78만명"
  },
  {
    url: "https://dn-img-page.kakao.com/download/resource?kid=W9plG/hyCvhI2fGW/OAld3JoQkLtKZbhbDzk02k&filename=th2",
    rank : "4위",
    title : "아비무쌍",
    info : ["image-card__comment__info-new hidden","image-card__comment__info-update","image-card__comment__info-years hidden","image-card__comment__info-icon"],
    subscriber : "73.7만명"
  },
  {
    url: "https://dn-img-page.kakao.com/download/resource?kid=dP5BX/hyATtkUlkI/84IK0kpI7OxqdDF52bQoU1&filename=th2",
    rank : "5위",
    title : "불사 무적",
    info : ["image-card__comment__info-new hidden","image-card__comment__info-update","image-card__comment__info-years hidden","image-card__comment__info-icon"],
    subscriber : "83.4만명"
  },
  {
    url: "https://dn-img-page.kakao.com/download/resource?kid=pw32S/hzhOgKyZGa/Sn5Z1dlG6XVyzgLM3vikPK&filename=th2",
    rank : ' <img src="./image/badge-thumbnail-star.svg" alt="" /> 8.3',
    title : "지옥에서 독식",
    info : ["image-card__comment__info-new hidden","image-card__comment__info-update","image-card__comment__info-years hidden","image-card__comment__info-icon"],
    subscriber : "17.3만명"
  }
]

const tue = {
  box:tue_imageBoxInfo,
  card:tue_imageCardInfo,
  dayOfTheWeek:"tue"
}





const wed_imageBoxInfo = {
  url : "./image/upload_webtoon.jpg",
  title : "신수제일검",
  comment : "오늘 수련도 짜릿해, 늘 새로워!",
  subscriber : "21만명"
}

const wed_imageCardInfo = [
  {
    url: "./image/manhwa_one.png",
    rank : "1위",
    title : "흑막을 버리는 데 실패했다",
    info : ["image-card__comment__info-new","image-card__comment__info-update hidden","image-card__comment__info-years","image-card__comment__info-icon"],
    subscriber : "28.6만명"
  },
  {
    url: "./image/manhwa_two.png",
    rank : "2위",
    title : "황제의 아이를 숨기는 방법",
    info : ["image-card__comment__info-new hidden","image-card__comment__info-update","image-card__comment__info-years hidden","image-card__comment__info-icon"],
    subscriber : "47.5만명"
  },
  {
    url: "./image/manhwa_three.png",
    rank : "3위",
    title : "시한부라서 흑막의 며느리가 되었는데",
    info : ["image-card__comment__info-new hidden","image-card__comment__info-update","image-card__comment__info-years hidden","image-card__comment__info-icon"],
    subscriber : "55.9만명"
  },
  {
    url: "./image/manhwa_four.png",
    rank : "4위",
    title : "인소의 법칙",
    info : ["image-card__comment__info-new hidden","image-card__comment__info-update","image-card__comment__info-years hidden","image-card__comment__info-icon"],
    subscriber : "141.2만명"
  },
  {
    url: "./image/manhwa_five.png",
    rank : "5위",
    title : "악역도 귀찮아서",
    info : ["image-card__comment__info-new hidden","image-card__comment__info-update","image-card__comment__info-years hidden","image-card__comment__info-icon"],
    subscriber : "31.2만명"
  },
  {
    url: "./image/manhwa_six.png",
    rank : ' <img src="./image/badge-thumbnail-star.svg" alt="" /> 10.0',
    title : "닥터 최태수",
    info : ["image-card__comment__info-new hidden","image-card__comment__info-update hidden","image-card__comment__info-years hidden","image-card__comment__info-icon"],
    subscriber : "271.3만명"
  }
]

const wed = {
  box:wed_imageBoxInfo,
  card:wed_imageCardInfo,
  dayOfTheWeek:"wed"
}




const thu_imageBoxInfo ={
  url : "https://dn-img-page.kakao.com/download/resource?kid=vY9EO/hzhOm4DsAe/ooN3xLPLUZPU6Uid2Matlk",
  title : "지옥에서 돌아온 성좌님",
  comment : "인간 최초의 성좌가 되는 길 !",
  subscriber : "46.7만명"
}

const thu_imageCardInfo = [
  {
    url: "https://dn-img-page.kakao.com/download/resource?kid=rOfMN/hyEdeEtJFz/63XlMqYRjhokso828Ki6k0&filename=th2",
    rank : "1위",
    title : "나 혼자만 레벨업",
    info : ["image-card__comment__info-new hidden","image-card__comment__info-update hidden","image-card__comment__info-years hidden","image-card__comment__info-icon"],
    subscriber : "417.4만명"
  },
  {
    url: "https://dn-img-page.kakao.com/download/resource?kid=biG4Nt/hzb7sXLBzm/Spy2JkLBLu3zUwNl9TaznK&filename=th2",
    rank : "2위",
    title : "궁귀 검신",
    info : ["image-card__comment__info-new hidden","image-card__comment__info-update hidden","image-card__comment__info-years","image-card__comment__info-icon"],
    subscriber : "51.3만명"
  },
  {
    url: "https://dn-img-page.kakao.com/download/resource?kid=kFPM3/hyATqBz2Kr/QT3iI8g7kR0R4YSdv0WWtK&filename=th2",
    rank : "3위",
    title : "샬롯에게는 다섯 명의 제자가 있다",
    info : ["image-card__comment__info-new hidden","image-card__comment__info-update","image-card__comment__info-years hidden","image-card__comment__info-icon"],
    subscriber : "108.5만명"
  },
  {
    url: "https://dn-img-page.kakao.com/download/resource?kid=bcSC27/hyCRfdqzwh/7zTlZUHyj50iUEd4kqJfyK&filename=th2",
    rank : "4위",
    title : "루시아",
    info : ["image-card__comment__info-new hidden","image-card__comment__info-update","image-card__comment__info-years hidden","image-card__comment__info-icon"],
    subscriber : "85.4만명"
  },
  {
    url: "https://dn-img-page.kakao.com/download/resource?kid=JKbkM/hzhOksSPjb/Zk4kiHai3IGS77dRy1iO1K&filename=th2",
    rank : "5위",
    title : "악당의 아빠를 꼬셔라",
    info : ["image-card__comment__info-new hidden","image-card__comment__info-update","image-card__comment__info-years hidden","image-card__comment__info-icon"],
    subscriber : "33.4만명"
  },
  {
    url: "https://dn-img-page.kakao.com/download/resource?kid=b7H7Jx/hzmU3lmHWf/PYTUMe8KmuFYbvLETjjfOk&filename=th2",
    rank : ' <img src="./image/badge-thumbnail-star.svg" alt="" /> 9.7',
    title : "재앙급 영웅님이 귀환하셨다",
    info : ["image-card__comment__info-new hidden","image-card__comment__info-update","image-card__comment__info-years hidden","image-card__comment__info-icon"],
    subscriber : "17.4만명"
  }
]

const thu = {
  box:thu_imageBoxInfo,
  card:thu_imageCardInfo,
  dayOfTheWeek:"thu"
}

const fri_imageBoxInfo ={
  url : "https://dn-img-page.kakao.com/download/resource?kid=vY9EO/hzhOm4DsAe/ooN3xLPLUZPU6Uid2Matlk",
  title : "지옥에서 돌아온 성좌님",
  comment : "인간 최초의 성좌가 되는 길 !",
  subscriber : "46.7만명"
}

const fri_imageCardInfo = [
  {
    url: "https://dn-img-page.kakao.com/download/resource?kid=cbOcrh/hzhOeyLVuz/o3mzWEkKKAuJOLWv6bYJxK&filename=th2",
    rank : "1위",
    title : "도굴왕",
    info : ["image-card__comment__info-new hidden","image-card__comment__info-update","image-card__comment__info-years hidden","image-card__comment__info-icon"],
    subscriber : "200.9만명"
  },
  {
    url: "https://dn-img-page.kakao.com/download/resource?kid=deE4e2/hzmU2gb3TS/51FXKvnkpArAKzgyHv1fWk&filename=th2",
    rank : "2위",
    title : "너의 죽음이 보여",
    info : ["image-card__comment__info-new hidden","image-card__comment__info-update","image-card__comment__info-years hidden","image-card__comment__info-icon"],
    subscriber : "35.5만명"
  },
  {
    url: "https://dn-img-page.kakao.com/download/resource?kid=2XcHF/hzacfyyDaP/AQvywUuQOQ9bmwXoyvCKbK&filename=th2",
    rank : "3위",
    title : "SSS급 죽어야 사는 헌터",
    info : ["image-card__comment__info-new hidden","image-card__comment__info-update","image-card__comment__info-years","image-card__comment__info-icon"],
    subscriber : "92만명"
  },
  {
    url: "https://dn-img-page.kakao.com/download/resource?kid=1dqit/hy41OzZK0J/q0M4m4gLW2Zjm4mmKkglI1&filename=th2",
    rank : "4위",
    title : "남편이 미모를 숨김",
    info : ["image-card__comment__info-new hidden","image-card__comment__info-update","image-card__comment__info-years hidden","image-card__comment__info-icon"],
    subscriber : "125.3만명"
  },
  {
    url: "https://dn-img-page.kakao.com/download/resource?kid=mLxer/hyZ8xiGrsa/lo9hJND6wYN5T51AklU2V0&filename=th2",
    rank : "5위",
    title : "프로 야구 생존기",
    info : ["image-card__comment__info-new hidden","image-card__comment__info-update","image-card__comment__info-years hidden","image-card__comment__info-icon"],
    subscriber : "17.7만명"
  },
  {
    url: "https://dn-img-page.kakao.com/download/resource?kid=cyq0ma/hzb7yDg2ke/bIzebxQnLC3RJj7mkrwcUK&filename=th2",
    rank : ' <img src="./image/badge-thumbnail-star.svg" alt="" /> 9.8',
    title : "비뢰도",
    info : ["image-card__comment__info-new hidden","image-card__comment__info-update","image-card__comment__info-years hidden","image-card__comment__info-icon"],
    subscriber : "104.1만명"
  }
]

const fri = {
  box:fri_imageBoxInfo,
  card:fri_imageCardInfo,
  dayOfTheWeek:"fri"
}



const sat_imageBoxInfo ={
  url : "https://dn-img-page.kakao.com/download/resource?kid=vY9EO/hzhOm4DsAe/ooN3xLPLUZPU6Uid2Matlk",
  title : "지옥에서 돌아온 성좌님",
  comment : "인간 최초의 성좌가 되는 길 !",
  subscriber : "46.7만명"
}

const sat_imageCardInfo = [
  {
    url: "https://dn-img-page.kakao.com/download/resource?kid=rOfMN/hyEdeEtJFz/63XlMqYRjhokso828Ki6k0&filename=th2",
    rank : "1위",
    title : "나 혼자만 레벨업",
    info : ["image-card__comment__info-new hidden","image-card__comment__info-update hidden","image-card__comment__info-years hidden","image-card__comment__info-icon"],
    subscriber : "417.4만명"
  },
  {
    url: "https://dn-img-page.kakao.com/download/resource?kid=biG4Nt/hzb7sXLBzm/Spy2JkLBLu3zUwNl9TaznK&filename=th2",
    rank : "2위",
    title : "궁귀 검신",
    info : ["image-card__comment__info-new hidden","image-card__comment__info-update hidden","image-card__comment__info-years","image-card__comment__info-icon"],
    subscriber : "51.3만명"
  },
  {
    url: "https://dn-img-page.kakao.com/download/resource?kid=kFPM3/hyATqBz2Kr/QT3iI8g7kR0R4YSdv0WWtK&filename=th2",
    rank : "3위",
    title : "샬롯에게는 다섯 명의 제자가 있다",
    info : ["image-card__comment__info-new hidden","image-card__comment__info-update","image-card__comment__info-years hidden","image-card__comment__info-icon"],
    subscriber : "108.5만명"
  },
  {
    url: "https://dn-img-page.kakao.com/download/resource?kid=bcSC27/hyCRfdqzwh/7zTlZUHyj50iUEd4kqJfyK&filename=th2",
    rank : "4위",
    title : "루시아",
    info : ["image-card__comment__info-new hidden","image-card__comment__info-update","image-card__comment__info-years hidden","image-card__comment__info-icon"],
    subscriber : "85.4만명"
  },
  {
    url: "https://dn-img-page.kakao.com/download/resource?kid=JKbkM/hzhOksSPjb/Zk4kiHai3IGS77dRy1iO1K&filename=th2",
    rank : "5위",
    title : "악당의 아빠를 꼬셔라",
    info : ["image-card__comment__info-new hidden","image-card__comment__info-update","image-card__comment__info-years hidden","image-card__comment__info-icon"],
    subscriber : "33.4만명"
  },
  {
    url: "https://dn-img-page.kakao.com/download/resource?kid=b7H7Jx/hzmU3lmHWf/PYTUMe8KmuFYbvLETjjfOk&filename=th2",
    rank : ' <img src="./image/badge-thumbnail-star.svg" alt="" /> 9.7',
    title : "재앙급 영웅님이 귀환하셨다",
    info : ["image-card__comment__info-new hidden","image-card__comment__info-update","image-card__comment__info-years hidden","image-card__comment__info-icon"],
    subscriber : "17.4만명"
  }
]

const sat = {
  box:sat_imageBoxInfo,
  card:sat_imageCardInfo,
  dayOfTheWeek:"sat"
}

const sun = {
  box:tue_imageBoxInfo,
  card:tue_imageCardInfo,
  dayOfTheWeek:"sun"
}




const weeklyDataInfo = [mon,tue,wed,thu,fri,sat,sun];
export {weeklyDataInfo};