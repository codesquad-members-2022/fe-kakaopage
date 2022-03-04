export const NaviRemoteComponent = (remoteMenus) => {
    console.log(remoteMenus);
    return /* html */`
    <nav class="nav-list">
            <ul class="nav-list__ul">
            ${remoteMenus.reduce((prev, cur) => {
                return prev += `<li class="nav-list__li">
                    <a class="nav-list_link" href="#${Object.keys(cur)}">${Object.values(cur)}</a>
                </li>`
            }, "")}
            </ul>
        </nav>
`;
}