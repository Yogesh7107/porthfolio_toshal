let toggle=document.querySelector(".toggle");
let off=true;

let sidebar=document.querySelector(".sidebar");

let as=document.querySelectorAll(".portfolio-bar>ul li");
let img_sources=document.querySelectorAll(".col-grid>div");
let colGrid=document.querySelectorAll(".col-grid");
let portFolio=document.querySelector(".portfolio-img");

let sideIcons=document.querySelectorAll(".sidebar>ul li>a")
let sections=document.querySelectorAll("#home,#bio_main,#education,#myPortfolio,#latestBlog,#footer")
console.log(sections);




function underline(params) {
    let 
}


let sources=[];
 async function img_src() {
    
    img_sources.forEach(element => {
    sources.push(element);

});
}

img_src();

toggle.addEventListener('click',()=>{
    if (off) {
        off=false;
        sidebar.style.left="0";
        toggle.classList.add("toggleOff");
          
         
    }else{
        off=true; 
        sidebar.style.left="-100px";
        toggle.classList.remove("toggleOff") 
        
    }
})


 function portfolio_img_change() {
    as.forEach((element)=>{
        element.addEventListener('click',()=>{
            let id=element.id;
            let current = document.getElementsByClassName("active");
             if (current.length > 0) { 
               current[0].className = current[0].className='';
             }
            element.className='active';
 
            switch (id) {
                 case "All":
                    sources.forEach(element => element.style.display="block");
                    
                    break;
                 case "Branding":
                    sources.forEach(element => element.style.display="block");
                   let reject= sources.filter((e)=>{
                        return e.id!=="1"&& e.id!=="2"&& e.id!=="3";
                     })
                     
                    reject.forEach(e=>e.style.display="none")
                  break;

                 case "Photography":
                    sources.forEach(element => element.style.display="block");
                    let reject1= sources.filter((e)=>{
                        return e.id!=="4"&& e.id!=="5";
                     })
                     
                     reject1.forEach(e=>e.style.display="none")
                  break;
                    
                  
                  case "Fashion":
                    sources.forEach(element => element.style.display="block");
                    let reject2= sources.filter((e)=>{
                        return e.id!=="6"&& e.id!=="7"&& e.id!=="8";
                     })
                     
                    reject2.forEach(e=>e.style.display="none")
                    
                  break;

                  case "Product":

                  sources.forEach(element => element.style.display="block");
                    let reject3= sources.filter((e)=>{
                        return e.id!=="7"&& e.id!=="8"&&e.id!=="9";
                     })
                     
                    reject3.forEach(e=>e.style.display="none")
                  
                  break;
            
               }
        })
    });
    
}
portfolio_img_change()

function colorChange(){
        sideIcons.forEach((icons)=>{
            icons.addEventListener("click",()=>{
                document.querySelector(".current")?.classList.remove("current");                
                icons.classList.add("current");
            })
        })
}
colorChange();


window.addEventListener('scroll',scrollAnim);
function scrollAnim() {
   
   let reveals = document.querySelectorAll(".reveal");
    reveals.forEach((element)=>{
        let windowHeight=window.innerHeight;
        let revealTop=element.getBoundingClientRect().top;
        
        let revealPoint=130;

        if (revealTop < windowHeight-revealPoint) {
            element.classList.add('show');
        }else{
            element.classList.remove('show');
        }
    })
}

window.addEventListener('scroll',onScrollActive);

function onScrollActive(){
    sections.forEach((element)=>{
        let top=window.scrollY;
        let offset=element.offsetTop-30;
        let height=element.offsetHeight;
        let id=element.getAttribute('id');

        if (top > offset && top<=offset+height) {
            sideIcons.forEach((e)=>{
                e.classList.remove('current');
                document.querySelector('.sidebar ul>li>a[href*='+id+']').classList.add('current');
            })
        }
    })
}


