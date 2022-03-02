//rem계산법
//사용하려는 값 / 최상단 부모값

const rootPx = 16;

const cal = rootPx => {
  for (let px = 28; px >= 0; px -= 2) {
    console.log(`${px}px: ${px/rootPx}`);
  }
};

cal(rootPx);
