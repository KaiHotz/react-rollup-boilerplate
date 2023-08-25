import{a as n,j as t,c as _,F as C}from"./clsx-36eb8b48.js";import{r as a,R as I}from"./index-61bf1805.js";import"./_commonjsHelpers-de833af9.js";const P=a.createContext(null),y=a.createContext(null),x=a.createContext(null),D=()=>{const e=a.useContext(P);if(e==null)throw Error("A Tab must have a TabList parent");return e},N=()=>{const e=a.useContext(y);if(e==null)throw Error("A TabPanel must have a Tabs parent");return e},S=()=>{const e=a.useContext(x);if(e==null)throw Error("A TabList must have a Tabs parent");return e},b=({id:e="tab",children:i,testId:g})=>{const[u,r]=a.useState(0),d=a.Children.toArray(i),[h,...l]=a.useMemo(()=>d,[d]),s=a.useCallback(m=>{r(m)},[]);return n("div",{id:e,"data-testId":g,children:[t(x.Provider,{value:{selected:u,onTabChange:s,tabsId:e},children:h}),t(y.Provider,{value:{role:"tabpanel",id:`${e}-${u}-tab`,"aria-labelledby":`${e}-${u}`},children:l[u]})]})};try{b.displayName="Tabs",b.__docgenInfo={description:"",displayName:"Tabs",props:{id:{defaultValue:{value:"tab"},description:"",name:"id",required:!1,type:{name:"string"}},testId:{defaultValue:null,description:"",name:"testId",required:!1,type:{name:"string"}}}}}catch{}const v=({children:e})=>{const{tabsId:i,selected:g,onTabChange:u}=S(),r=a.createRef(),d=a.useCallback(l=>{if(r.current){const s=r.current.querySelector(`[id=${i}-${l}]`);s==null||s.focus(),u(l)}},[u,r,i]),h=a.useCallback(()=>{},[]);return t("div",{role:"tablist",ref:r,className:"tab-list",children:I.Children.map(e,(l,s)=>{const m=s===g;return t(P.Provider,{value:{key:`${i}-${s}`,id:`${i}-${s}`,role:"tab","aria-posinset":s+1,"aria-selected":m,"aria-controls":`${i}-${s}-tab`,tabIndex:m?0:-1,onClick:()=>d(s),onKeyDown:h},children:l})})})};try{v.displayName="TabsList",v.__docgenInfo={description:"",displayName:"TabsList",props:{}}}catch{}const o=({children:e})=>{const i=N();return t("div",{...i,className:"tab-panel",children:e})};try{o.displayName="TabPanel",o.__docgenInfo={description:"",displayName:"TabPanel",props:{}}}catch{}const c=({children:e})=>{const i=D();return t("div",{...i,className:_("tab",{"tab--active":i["aria-selected"]}),children:e})};try{c.displayName="Tab",c.__docgenInfo={description:"",displayName:"Tab",props:{}}}catch{}const F={title:"Tabs",component:b},p=()=>n(C,{children:[t("h4",{style:{textDecoration:"underline"},children:"This is a practical example of component composition in React:"}),t("div",{style:{padding:"20px 10px",marginTop:30,border:"1px solid #000"},children:n(b,{children:[n(v,{children:[t(c,{children:"First Tab"}),t(c,{children:"Second Tab"}),t(c,{children:"Third Tab"})]}),n(o,{children:[t("h2",{children:"First content:"}),t("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non nulla urna. Nulla nec malesuada arcu, vehicula venenatis libero. Curabitur ut lacus vel metus posuere finibus. Sed non lobortis ante. In id condimentum magna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ornare varius aliquet."}),t("p",{children:"Cras ut finibus ex. Donec eu sollicitudin ligula. Suspendisse potenti. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent faucibus pellentesque diam, sit amet tempus est interdum sit amet. Proin eget vehicula dui. Ut quis rutrum nisl. Sed sed risus ut lacus convallis laoreet. Nunc elit erat, venenatis at sodales eleifend, vestibulum ut sapien. Maecenas orci metus, bibendum sit amet massa eu, elementum dignissim dolor. Aliquam ut massa gravida, ultricies augue id, dignissim nulla. Duis vehicula, turpis non tempus malesuada, libero enim lacinia eros, ut vehicula magna ex nec turpis. Nulla ultrices, elit ut sodales facilisis, enim ligula varius odio, at venenatis purus sapien non nulla."})]}),n(o,{children:[t("h2",{children:"Second content:"}),t("p",{children:"Mauris placerat dui lacinia pellentesque porttitor. Mauris tincidunt pellentesque odio elementum lacinia. Duis maximus magna consectetur libero iaculis fringilla. Vivamus vestibulum, lorem sed lobortis molestie, odio justo feugiat eros, id mattis nisi turpis eget tellus. Ut porta in quam at cursus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent rutrum sit amet turpis ac ultrices. Pellentesque at scelerisque ipsum. Curabitur vulputate tempor elit, in pharetra nibh tincidunt ac. Duis ornare elementum lacus, ac commodo libero scelerisque blandit. Proin orci enim, eleifend laoreet ante in, sagittis mattis odio. Etiam id euismod augue. Integer maximus mi est, ac tincidunt magna venenatis in. Proin et enim eget urna egestas lacinia sed id libero."})]}),n(o,{children:[t("h2",{children:"Third content:"}),n("div",{style:{display:"flex",justifyItems:"center",justifyContent:"space-between"},children:[t("img",{src:"https://randomuser.me/api/portraits/lego/0.jpg","data-int":"0","data-gender":"lego",alt:"lego-user",width:100}),t("p",{children:"Fusce elementum sollicitudin turpis at lacinia. Pellentesque orci odio, dignissim a dolor at, tincidunt luctus lacus. Donec sit amet gravida nibh, eget auctor quam. Morbi aliquet odio ut aliquam efficitur. Vivamus arcu magna, porttitor eget tempus id, convallis vitae sem. Fusce hendrerit, neque vel congue eleifend, ex odio pretium est, nec venenatis nibh orci in metus. Vestibulum congue lectus quis ligula fermentum feugiat quis a sem. Praesent non lacinia justo, ut dictum odio."})]})]})]})})]});var T,f,q;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`() => {
  return <>
      <h4 style={{
      textDecoration: 'underline'
    }}>This is a practical example of component composition in React:</h4>
      <div style={{
      padding: '20px 10px',
      marginTop: 30,
      border: '1px solid #000'
    }}>
        <Tabs>
          <TabsList>
            <Tab>First Tab</Tab>
            <Tab>Second Tab</Tab>
            <Tab>Third Tab</Tab>
          </TabsList>
          <TabPanel>
            <h2>First content:</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non nulla urna. Nulla nec malesuada arcu,
              vehicula venenatis libero. Curabitur ut lacus vel metus posuere finibus. Sed non lobortis ante. In id
              condimentum magna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
              egestas. Vestibulum ornare varius aliquet.
            </p>
            <p>
              Cras ut finibus ex. Donec eu sollicitudin ligula. Suspendisse potenti. Interdum et malesuada fames ac ante
              ipsum primis in faucibus. Praesent faucibus pellentesque diam, sit amet tempus est interdum sit amet.
              Proin eget vehicula dui. Ut quis rutrum nisl. Sed sed risus ut lacus convallis laoreet. Nunc elit erat,
              venenatis at sodales eleifend, vestibulum ut sapien. Maecenas orci metus, bibendum sit amet massa eu,
              elementum dignissim dolor. Aliquam ut massa gravida, ultricies augue id, dignissim nulla. Duis vehicula,
              turpis non tempus malesuada, libero enim lacinia eros, ut vehicula magna ex nec turpis. Nulla ultrices,
              elit ut sodales facilisis, enim ligula varius odio, at venenatis purus sapien non nulla.
            </p>
          </TabPanel>
          <TabPanel>
            <h2>Second content:</h2>
            <p>
              Mauris placerat dui lacinia pellentesque porttitor. Mauris tincidunt pellentesque odio elementum lacinia.
              Duis maximus magna consectetur libero iaculis fringilla. Vivamus vestibulum, lorem sed lobortis molestie,
              odio justo feugiat eros, id mattis nisi turpis eget tellus. Ut porta in quam at cursus. Pellentesque
              habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent rutrum sit amet
              turpis ac ultrices. Pellentesque at scelerisque ipsum. Curabitur vulputate tempor elit, in pharetra nibh
              tincidunt ac. Duis ornare elementum lacus, ac commodo libero scelerisque blandit. Proin orci enim,
              eleifend laoreet ante in, sagittis mattis odio. Etiam id euismod augue. Integer maximus mi est, ac
              tincidunt magna venenatis in. Proin et enim eget urna egestas lacinia sed id libero.
            </p>
          </TabPanel>
          <TabPanel>
            <h2>Third content:</h2>
            <div style={{
            display: 'flex',
            justifyItems: 'center',
            justifyContent: 'space-between'
          }}>
              <img src="https://randomuser.me/api/portraits/lego/0.jpg" data-int="0" data-gender="lego" alt="lego-user" width={100} />
              <p>
                Fusce elementum sollicitudin turpis at lacinia. Pellentesque orci odio, dignissim a dolor at, tincidunt
                luctus lacus. Donec sit amet gravida nibh, eget auctor quam. Morbi aliquet odio ut aliquam efficitur.
                Vivamus arcu magna, porttitor eget tempus id, convallis vitae sem. Fusce hendrerit, neque vel congue
                eleifend, ex odio pretium est, nec venenatis nibh orci in metus. Vestibulum congue lectus quis ligula
                fermentum feugiat quis a sem. Praesent non lacinia justo, ut dictum odio.
              </p>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </>;
}`,...(q=(f=p.parameters)==null?void 0:f.docs)==null?void 0:q.source}}};export{p as Default,F as default};
//# sourceMappingURL=Tabs.story-b97d1b5c.js.map
