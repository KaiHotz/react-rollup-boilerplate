import{j as e,c as P}from"./clsx-2NafhjCB.js";import{r as a,R as y}from"./index-CDs2tPxN.js";const T=a.createContext(null),x=a.createContext(null),q=a.createContext(null),C=()=>{const t=a.useContext(T);if(t==null)throw Error("A Tab must have a TabList parent");return t},D=()=>{const t=a.useContext(x);if(t==null)throw Error("A TabPanel must have a Tabs parent");return t},S=()=>{const t=a.useContext(q);if(t==null)throw Error("A TabList must have a Tabs parent");return t},g=({id:t="tabs",children:i,testId:u,selected:s,setSelected:r})=>{const c=a.Children.toArray(i),[b,...l]=a.useMemo(()=>c,[c]),n=a.useCallback(d=>{r(d)},[r]);return e.jsxs("div",{id:t,"data-testId":u,children:[e.jsx(q.Provider,{value:{selected:s,onTabChange:n,tabsId:t},children:b}),e.jsx(x.Provider,{value:{role:"tabpanel",id:`${t}-${s}-tab`,"aria-labelledby":`${t}-${s}`},children:l[s]})]})};g.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},id:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'tabs'",computed:!1}},testId:{required:!1,tsType:{name:"string"},description:""},selected:{required:!0,tsType:{name:"number"},description:""},setSelected:{required:!0,tsType:{name:"signature",type:"function",raw:"(idx: number) => void",signature:{arguments:[{type:{name:"number"},name:"idx"}],return:{name:"void"}}},description:""}}};const j=({children:t})=>{const{tabsId:i,selected:u,onTabChange:s}=S(),r=a.createRef(),c=a.useCallback(l=>{if(r.current){const n=r.current.querySelector(`[id=${i}-${l}]`);n==null||n.focus(),s(l)}},[s,r,i]),b=a.useCallback(()=>{},[]);return e.jsx("div",{role:"tablist",ref:r,className:"tab-list",children:y.Children.map(t,(l,n)=>{const d=n===u;return e.jsx(T.Provider,{value:{key:`${i}-${n}`,id:`${i}-${n}`,role:"tab","aria-posinset":n+1,"aria-selected":d,"aria-controls":`${i}-${n}-tab`,tabIndex:d?0:-1,onClick:()=>c(n),onKeyDown:b},children:l})})})};j.__docgenInfo={description:"",methods:[],displayName:"TabsList"};const o=({children:t})=>{const i=D();return e.jsx("div",{...i,className:"tab-panel",children:t})};o.__docgenInfo={description:"",methods:[],displayName:"TabPanel"};const p=({children:t,id:i})=>{const u=C();return e.jsx("div",{...u,id:i,className:P("tab",{"tab--active":u["aria-selected"]}),children:t})};p.__docgenInfo={description:"",methods:[],displayName:"Tab",props:{id:{required:!1,tsType:{name:"string"},description:""}}};const L={title:"Tabs",component:g},m={render:function(i){const[u,s]=a.useState(0);return e.jsxs(e.Fragment,{children:[e.jsx("h4",{style:{textDecoration:"underline"},children:"This is a practical example of component composition in React:"}),e.jsx("div",{style:{padding:"20px 10px",marginTop:30,border:"1px solid #000"},children:e.jsxs(g,{...i,selected:u,setSelected:s,children:[e.jsxs(j,{children:[e.jsx(p,{children:"First Tab"}),e.jsx(p,{children:"Second Tab"}),e.jsx(p,{children:"Third Tab"})]}),e.jsx("div",{children:e.jsxs(o,{children:[e.jsx("h2",{children:"First content:"}),e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non nulla urna. Nulla nec malesuada arcu, vehicula venenatis libero. Curabitur ut lacus vel metus posuere finibus. Sed non lobortis ante. In id condimentum magna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ornare varius aliquet."}),e.jsx("p",{children:"Cras ut finibus ex. Donec eu sollicitudin ligula. Suspendisse potenti. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent faucibus pellentesque diam, sit amet tempus est interdum sit amet. Proin eget vehicula dui. Ut quis rutrum nisl. Sed sed risus ut lacus convallis laoreet. Nunc elit erat, venenatis at sodales eleifend, vestibulum ut sapien. Maecenas orci metus, bibendum sit amet massa eu, elementum dignissim dolor. Aliquam ut massa gravida, ultricies augue id, dignissim nulla. Duis vehicula, turpis non tempus malesuada, libero enim lacinia eros, ut vehicula magna ex nec turpis. Nulla ultrices, elit ut sodales facilisis, enim ligula varius odio, at venenatis purus sapien non nulla."})]})}),e.jsxs(o,{children:[e.jsx("h2",{children:"Second content:"}),e.jsx("p",{children:"Mauris placerat dui lacinia pellentesque porttitor. Mauris tincidunt pellentesque odio elementum lacinia. Duis maximus magna consectetur libero iaculis fringilla. Vivamus vestibulum, lorem sed lobortis molestie, odio justo feugiat eros, id mattis nisi turpis eget tellus. Ut porta in quam at cursus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent rutrum sit amet turpis ac ultrices. Pellentesque at scelerisque ipsum. Curabitur vulputate tempor elit, in pharetra nibh tincidunt ac. Duis ornare elementum lacus, ac commodo libero scelerisque blandit. Proin orci enim, eleifend laoreet ante in, sagittis mattis odio. Etiam id euismod augue. Integer maximus mi est, ac tincidunt magna venenatis in. Proin et enim eget urna egestas lacinia sed id libero."})]}),e.jsxs(o,{children:[e.jsx("h2",{children:"Third content:"}),e.jsxs("div",{style:{display:"flex",justifyItems:"center",justifyContent:"space-between"},children:[e.jsx("img",{src:"https://randomuser.me/api/portraits/lego/0.jpg","data-int":"0","data-gender":"lego",alt:"lego-user",width:100}),e.jsx("p",{children:"Fusce elementum sollicitudin turpis at lacinia. Pellentesque orci odio, dignissim a dolor at, tincidunt luctus lacus. Donec sit amet gravida nibh, eget auctor quam. Morbi aliquet odio ut aliquam efficitur. Vivamus arcu magna, porttitor eget tempus id, convallis vitae sem. Fusce hendrerit, neque vel congue eleifend, ex odio pretium est, nec venenatis nibh orci in metus. Vestibulum congue lectus quis ligula fermentum feugiat quis a sem. Praesent non lacinia justo, ut dictum odio."})]})]}),e.jsx(o,{children:e.jsx("h2",{children:"Third content:"})})]})})]})}};var h,v,f;m.parameters={...m.parameters,docs:{...(h=m.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: function useTabs(args) {
    const [selected, setSelected] = useState(0);
    return <>
        <h4 style={{
        textDecoration: 'underline'
      }}>This is a practical example of component composition in React:</h4>
        <div style={{
        padding: '20px 10px',
        marginTop: 30,
        border: '1px solid #000'
      }}>
          <Tabs {...args} selected={selected} setSelected={setSelected}>
            <TabsList>
              <Tab>First Tab</Tab>
              <Tab>Second Tab</Tab>
              <Tab>Third Tab</Tab>
            </TabsList>
            <div>
              <TabPanel>
                <h2>First content:</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non nulla urna. Nulla nec malesuada
                  arcu, vehicula venenatis libero. Curabitur ut lacus vel metus posuere finibus. Sed non lobortis ante.
                  In id condimentum magna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac
                  turpis egestas. Vestibulum ornare varius aliquet.
                </p>
                <p>
                  Cras ut finibus ex. Donec eu sollicitudin ligula. Suspendisse potenti. Interdum et malesuada fames ac
                  ante ipsum primis in faucibus. Praesent faucibus pellentesque diam, sit amet tempus est interdum sit
                  amet. Proin eget vehicula dui. Ut quis rutrum nisl. Sed sed risus ut lacus convallis laoreet. Nunc
                  elit erat, venenatis at sodales eleifend, vestibulum ut sapien. Maecenas orci metus, bibendum sit amet
                  massa eu, elementum dignissim dolor. Aliquam ut massa gravida, ultricies augue id, dignissim nulla.
                  Duis vehicula, turpis non tempus malesuada, libero enim lacinia eros, ut vehicula magna ex nec turpis.
                  Nulla ultrices, elit ut sodales facilisis, enim ligula varius odio, at venenatis purus sapien non
                  nulla.
                </p>
              </TabPanel>
            </div>
            <TabPanel>
              <h2>Second content:</h2>
              <p>
                Mauris placerat dui lacinia pellentesque porttitor. Mauris tincidunt pellentesque odio elementum
                lacinia. Duis maximus magna consectetur libero iaculis fringilla. Vivamus vestibulum, lorem sed lobortis
                molestie, odio justo feugiat eros, id mattis nisi turpis eget tellus. Ut porta in quam at cursus.
                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent
                rutrum sit amet turpis ac ultrices. Pellentesque at scelerisque ipsum. Curabitur vulputate tempor elit,
                in pharetra nibh tincidunt ac. Duis ornare elementum lacus, ac commodo libero scelerisque blandit. Proin
                orci enim, eleifend laoreet ante in, sagittis mattis odio. Etiam id euismod augue. Integer maximus mi
                est, ac tincidunt magna venenatis in. Proin et enim eget urna egestas lacinia sed id libero.
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
                  Fusce elementum sollicitudin turpis at lacinia. Pellentesque orci odio, dignissim a dolor at,
                  tincidunt luctus lacus. Donec sit amet gravida nibh, eget auctor quam. Morbi aliquet odio ut aliquam
                  efficitur. Vivamus arcu magna, porttitor eget tempus id, convallis vitae sem. Fusce hendrerit, neque
                  vel congue eleifend, ex odio pretium est, nec venenatis nibh orci in metus. Vestibulum congue lectus
                  quis ligula fermentum feugiat quis a sem. Praesent non lacinia justo, ut dictum odio.
                </p>
              </div>
            </TabPanel>
            <TabPanel>
              <h2>Third content:</h2>
            </TabPanel>
          </Tabs>
        </div>
      </>;
  }
}`,...(f=(v=m.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};export{m as Default,L as default};
