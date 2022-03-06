import { icons } from '../../assets/icons.js'
import { getBannerContentTemplate } from './banner.js'

export const getWorkContainerTemplate = (layout, workData) => {
    const worksTemplate = workData.map(data => layoutDic[layout](data)).join(''); 
    return `
      <ul class='work-container'>
        ${worksTemplate}
      </ul>
    `
}

const makeSmallType = (workData) => {
    return `
        <li class='work--small'>
            <div class='work--small-thumbnail-box'>
              <div class='work--small-img-wrapper'>
                <img src=${workData.src} />
              </div>
              <div class='work--small-label'>
                <span>${workData.label}</span
                ><img class='small-icon' src=${icons[workData.labelIcon]} />
              </div>
            </div>
            <div class='work--small-info'>
              <div class='work--small-title'>${workData.title}</div>
              <div class='work--small-details'>
                ${workData.tagIcons ? `${workData.tagIcons.map(icon => `<img class='small-icon' src=${icons[icon]} />`).join('')}` : '' }
                <img class='small-icon' src=${icons.grayPerson} /><span>${workData.view}</span>
              </div>
            </div>
        </li>
    `
}

const makeHorizontalType = (workData) => {
    return `
      <li class='work--horizontal'>
          ${workData.ranking ? `<div class='work--horizontal-ranking'>${workData.ranking}</div>` : ''}
          <div class='work--horizontal-thumbnail-box'>
            <div class='work--horizontal-img-wrapper'>
              <img src=${workData.src} />
            </div>
            <div class='work--horizontal-label'>
              <img class='horizontal-icon' src=${icons.yellowClock} />
            </div>
          </div>
          <div class='work--horizontal-info'>
            <div class='work--horizontal-title'>${workData.titleIcon ? `<img class='small-icon' src=${icons[workData.titleIcon]}/>` : ''} ${workData.title}</div>
            <div class='work--horizontal-details'>
              <img class='small-icon' src=${icons.grayPerson} />
              ${workData.tags.map(tag => `<span>${tag}</span>`).join(`<div class='divider'></div>`)}     
            </div>
            <div class='work--horizontal-update-day'>${workData.updateDay} 연재</div>
          </div>
      </li>
    `
}

const makeVerticalType = () => {

}

const makeBannerType = (workData) => {
  return getBannerContentTemplate(workData, 'new-top');
}

const layoutDic = { 
  small: makeSmallType, 
  horizontal: makeHorizontalType, 
  vertical: makeVerticalType,
  banner: makeBannerType,
};