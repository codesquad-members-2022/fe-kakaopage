const workSections = {
    'home': ['dayRanking', 'newTop', 'dailyRanking'],
    'daily': ['dayRanking'],
    'webtoon': ['dayRanking'],
    'boy': [],
    'drama': [],
    'romance': [],
    'rofan': [],
    'action': [],
    'BL': [],
}

export const genreRenderList = {
    'home' : ['mainBanner', 'categoryGrid', 'eventBanner',...workSections.home, 'recommendEvent'],
    'daily' :  ['mainBanner', ...workSections.daily],
    'webtoon' :  ['mainBanner', ...workSections.webtoon],
    'boy' :  ['mainBanner', 'categoryGrid', 'eventBanner', ...workSections.boy],
    'drama' :  ['mainBanner', 'categoryGrid', 'eventBanner', ...workSections.drama],
    'romance' :  ['mainBanner', 'categoryGrid', 'eventBanner', ...workSections.romance],
    'rofan' :  ['mainBanner', 'categoryGrid', 'eventBanner', ...workSections.rofan],
    'action' :  ['mainBanner', 'categoryGrid', 'eventBanner', ...workSections.action],
    'BL' :  ['mainBanner', 'categoryGrid', ...workSections.BL] 
}

