// export const GrayCube = ( target, position)=> {
import {Component} from "../Core/Component";

export const GrayCube = class extends Component{
    template (){
        return`
         <div class="listContentBox  Cube">
            <div class="grayBox">
                <a href="">
                    <div><span>오늘 신작</span></div>
                    <div class="yellow">10</div>
                </a>
                <a href="">
                    <div><span>달콤한 선물❤️</span></div>
                </a>
                <a href="">
                    <div><span>앗뜨거!!</span></div>
                </a>
                <a href="">
                    <div><span>완결까지 정주행</span></div>
                </a>
                <a href="">
                    <div><span>독립운동가 웹툰</span></div>
                    툰 </a>
                <a href="">
                    <div><span>오늘 랭킹</span></div>
                    <div class="yellow">1위</div>
                </a>
            </div>
        </div>`
    }
    render(){
        this.$target.insertAdjacentHTML(position, this.template());
    }
}