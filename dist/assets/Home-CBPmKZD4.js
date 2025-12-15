import{r as n,j as t,L as j,m as e,u as S}from"./index-C7eO-EBj.js";import{u as g,a as y,b as x,S as C}from"./SEOHead-DJQ79Hly.js";const f=({to:o,children:s,onMouseEnter:i,onMouseLeave:a})=>{const[r,l]=n.useState(!1),c=()=>{l(!0),i&&i()},d=()=>{l(!1),a&&a()};return t.jsxs("div",{onMouseEnter:c,onMouseLeave:d,style:{position:"relative",display:"inline-block"},children:[t.jsx(j,{to:o,style:{display:"block",padding:"1.5rem 3rem",color:"var(--color-accent)",fontSize:"1.2rem",fontWeight:700,textTransform:"uppercase",letterSpacing:"2px",position:"relative",zIndex:10},children:s}),t.jsx("svg",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"120%",height:"140%",pointerEvents:"none",overflow:"visible"},viewBox:"0 0 200 60",children:t.jsx(e.path,{d:"M10,30 C30,10 170,10 190,30 C210,50 170,55 100,55 C30,55 -10,50 10,30",fill:"transparent",stroke:"var(--color-accent)",strokeWidth:"3",strokeLinecap:"round",initial:{pathLength:0,opacity:0},animate:{pathLength:r?1.1:0,opacity:r?1:0},transition:{duration:.6,ease:"easeInOut"}})})]})},I=({delay:o})=>t.jsx(e.div,{initial:{opacity:0,y:0,scale:.5,x:0},animate:{opacity:[0,.4,0],y:-100,scale:[.5,1.5,2],x:[0,Math.random()*20-10,Math.random()*40-20]},transition:{duration:2.5,delay:o,repeat:1/0,ease:"easeInOut"},style:{position:"absolute",width:"20px",height:"20px",background:"radial-gradient(circle, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 70%)",borderRadius:"50%",filter:"blur(8px)",pointerEvents:"none"}}),E=()=>{const[o,s]=n.useState([]);return n.useEffect(()=>{s(Array.from({length:6},()=>Math.random()*2))},[]),t.jsx("div",{style:{position:"absolute",top:"10%",left:"50%",transform:"translateX(-50%)",width:"100px",height:"100px",pointerEvents:"none",zIndex:10},children:o.map((i,a)=>t.jsx(I,{delay:i},a))})},v=()=>t.jsx(e.div,{initial:{x:"-100%",skewX:-20,opacity:0},animate:{x:"200%",opacity:[0,.4,0]},transition:{duration:1.5,repeat:1/0,repeatDelay:3,ease:"easeInOut"},style:{position:"absolute",top:0,left:0,width:"50%",height:"100%",background:"linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)",pointerEvents:"none",zIndex:5}}),k="/assets/momo_plate_start-B5HnQ9rz.png",M="/assets/momo_plate_final-Djx_QWz5.png",P="/assets/right_plate-Cpko7IHR.png",F="/assets/after-crackling-Dy-e73Og.png",B=()=>{const[o,s]=n.useState(!1),[i,a]=n.useState(!1),r=S();n.useEffect(()=>{if(r.hash){const u=r.hash.substring(1);setTimeout(()=>{const p=document.getElementById(u);if(p){const b=document.body.getBoundingClientRect().top,w=p.getBoundingClientRect().top-b-80;window.scrollTo({top:w,behavior:"smooth"})}},100)}},[r]);const l=g(0),c=g(0),d={damping:25,stiffness:150},m=y(x(l,[0,window.innerWidth],[20,-20]),d),h=y(x(c,[0,window.innerHeight],[20,-20]),d);return n.useEffect(()=>{const u=p=>{l.set(p.clientX),c.set(p.clientY)};return window.addEventListener("mousemove",u),()=>window.removeEventListener("mousemove",u)},[]),t.jsxs(t.Fragment,{children:[t.jsx(C,{title:"Fatt Pundit | Indo-Chinese Restaurant in Soho & Covent Garden London",description:"Experience bold Indo-Chinese flavors at Fatt Pundit. Two locations in London: Soho and Covent Garden. Book your table or order online today.",canonical:"https://fattpundit.com/"}),t.jsxs("div",{style:{height:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",position:"relative",overflow:"hidden"},children:[t.jsx("style",{children:`
                /* Desktop Default Styles */
                .plate-wrapper {
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    z-index: 0;
                    pointer-events: none;
                    width: 450px; /* Scaled width for desktop */
                    aspect-ratio: 2528 / 1696; /* Exact requested aspect ratio */
                    height: auto; /* Let aspect-ratio determine height */
                }
                .plate-left {
                    left: 2%; /* Pulled slightly outwards to accommodate wider ratio */
                }
                .plate-right {
                    right: 2%;
                }

                /* Mobile/Tablet Styles */
                @media (max-width: 768px) {
                    .plate-wrapper {
                        transform: none !important;
                        position: absolute !important;
                        width: 30vw !important; /* Smaller width to avoid overlapping text */
                        max-width: 140px !important; /* Cap width */
                        aspect-ratio: 2528 / 1696 !important;
                        height: auto !important;
                        /* Disable parallax on mobile by overriding transforms if needed, 
                           though framer motion styles usually override css classes.
                           Ideally we conditionally apply the 'style' prop in JS. */
                    }
                    .plate-left {
                        top: 10px !important; /* Pushed to top corner */
                        left: -10px !important;
                    }
                    .plate-right {
                        bottom: 10px !important; /* Pushed to bottom corner */
                        right: -10px !important;
                        top: auto !important;
                    }
                }
            `}),t.jsxs(e.div,{className:"plate-wrapper plate-left",initial:{x:"-100vw",y:"-50%",opacity:0,rotate:-30},animate:{x:0,y:"-50%",opacity:1,rotate:-5},transition:{duration:1.2,delay:.2,type:"spring",bounce:.3},children:[t.jsx(e.img,{src:k,alt:"Momo Plate Start",animate:{opacity:o?0:1},transition:{duration:.5},style:{width:"100%",height:"100%",x:m,y:h,objectFit:"contain",position:"absolute",top:0,left:0,filter:"drop-shadow(0 15px 25px rgba(0,0,0,0.3))"}}),t.jsx(e.img,{src:M,alt:"Momo Plate Final",animate:{opacity:o?1:0},transition:{duration:.5},style:{width:"100%",height:"100%",x:m,y:h,objectFit:"contain",position:"absolute",top:0,left:0,filter:"drop-shadow(0 15px 25px rgba(0,0,0,0.3))"}}),o&&t.jsx(v,{}),t.jsx(E,{})]}),t.jsxs(e.div,{className:"plate-wrapper plate-right",initial:{x:"100vw",y:"-50%",opacity:0,rotate:30},animate:{x:0,y:"-50%",opacity:1,rotate:5},transition:{duration:1.2,delay:.2,type:"spring",bounce:.3},children:[t.jsx(e.img,{src:P,alt:"Right Plate Start",animate:{opacity:i?0:1},transition:{duration:.5},style:{width:"100%",height:"100%",x:m,y:h,objectFit:"contain",position:"absolute",top:0,left:0,filter:"drop-shadow(0 15px 25px rgba(0,0,0,0.3))"}}),t.jsx(e.img,{src:F,alt:"Crackling Plate Final",animate:{opacity:i?1:0},transition:{duration:.5},style:{width:"100%",height:"100%",x:m,y:h,objectFit:"contain",position:"absolute",top:0,left:0,filter:"drop-shadow(0 15px 25px rgba(0,0,0,0.3))"}}),i&&t.jsx(v,{})]}),t.jsx(e.img,{src:"/src/assets/logos/tiger_stamp.png",alt:"Fatt Pundit Tiger Stamp",initial:{opacity:0,scale:4,rotate:15},animate:{opacity:1,scale:1,rotate:-2},transition:{duration:.7,type:"spring",stiffness:220,damping:20,mass:1.2},style:{width:"150px",marginBottom:"2rem"}}),t.jsx(e.h1,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.7,duration:.8},style:{fontSize:"3rem",marginBottom:"1rem",color:"var(--color-accent)",fontFamily:"var(--font-heading)"},children:"FATT PUNDIT"}),t.jsx(e.p,{initial:{opacity:0},animate:{opacity:1},transition:{delay:1,duration:.8},style:{fontSize:"1.2rem",marginBottom:"2rem",color:"#121212",fontFamily:"var(--font-body)"},children:"Where Chinese Craftsmanship Meets Indian Spices"}),t.jsxs(e.div,{initial:{opacity:0,y:10},animate:{opacity:.6,y:0},transition:{delay:1.4,duration:.8},style:{display:"flex",alignItems:"center",gap:"1rem",marginBottom:"1.5rem",color:"#333",fontFamily:"var(--font-body)",fontSize:"0.9rem",letterSpacing:"0.1em"},children:[t.jsx("div",{style:{height:"1px",width:"30px",background:"#333"}}),t.jsx("span",{children:"CHOOSE YOUR LOCATION"}),t.jsx("div",{style:{height:"1px",width:"30px",background:"#333"}})]}),t.jsxs("div",{style:{display:"flex",gap:"3rem",flexWrap:"wrap",justifyContent:"center"},children:[t.jsx(f,{to:"/soho",onMouseEnter:()=>s(!0),onMouseLeave:()=>s(!1),children:"SOHO"}),t.jsx(f,{to:"/covent-garden",onMouseEnter:()=>a(!0),onMouseLeave:()=>a(!1),children:"COVENT GARDEN"})]})]})]})};export{B as default};
