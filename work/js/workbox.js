const works = [
    {
        categories: ["develop"],
        img: "develop02.jpg",
        title: "TIK-TOK",
        sub: "REST API Weather webpage",
        modalImg: "develop02_long.jpg",
        modalTitle: "TIK-TOK",
        modalSub : [
            "REST API Weather API, Spotify API를 활용하여 제작하였습니다.<br />유저의 위치를 기반으로 시간과 날씨를 확인하고 그에 맞는 음악을 Spotify API를 이용하여 음악을 추천해 줍니다.",
            "Classic section은 기본 벽걸이 시계, Simple section은 심플한 느낌을 주고자 각 구간마다 box-shadow를 통해 구분하여 깔끔한 레이아웃, Casual section은 애플워치의 규격에 맞는 화면으로 구성하였습니다.",
            "사용자에게 위치 허용을 구하는 팝업창이 뜹니다.<br />사이트의 종류에 따라 허락을 하여도 기기의 설정으로 인해 위치를 확인할 수 없는 경우에는 기본 위치를 서울 서초구로 설정해두었습니다.",
            
        ],
        modalInfo : [
            "기여도 : 100%",
            "제작기간 : 14일",
        ],
        modalLinksGoto : "https://dlwldms.com/tik-tok",
        modalLinksGithub : "https://github.com/317dlwldms/tik-tok",
        programs: ["HTML5", "CSS3", "JavaScript", "REST API", "Figma", "Photoshop", "Illustrator"],
    },
    {
        categories: ["develop"],
        img: "develop01.jpg",
        title: "AKMU의 사춘기(思春記)",
        sub: "Album Introduce webpage",
        modalImg: "develop01_long.jpg",
        modalTitle: "AKMU 사춘기",
        modalSub : [
            "웹 디자인 과정을 거쳐 처음으로 작업한 웹사이트입니다.",
            "1500px 이상의 화면에서 최적화된 페이지입니다. 1500px 이하일 경우 오류는 없지만 보기에 불편할 수 있습니다.",
            "j-Query를 이용해 제작하였으며 스크롤 애니메이션을 넣어 더 동적인 변화를 볼 수 있게 구현하였습니다.<br />AKMU의 앨범 중 악뮤사춘기라는 앨범의 상, 하 버전에 대한 페이지이며 각 앨범의 수록곡과 뮤직비디오 공식 포스터를 보여줍니다.",
        ],
        modalInfo : [
            "기여도 : 100%",
            "제작기간 : 26일",
        ],
        modalLinksGoto : "https://dlwldms.com/akmu",
        modalLinksGithub : "https://github.com/317dlwldms/akmu",
        programs: ["HTML5", "CSS3", "j-Query", "Photoshop", "Illustrator"],
    },
    {
        categories: ["design"],
        img: "design01.jpg",
        title: "소년이 온다",
        sub: "Book cover design",
        modalTitle: "소년이 온다",
        modalSub : [
            "한강작가 '소년이 온다'의 북커버를 Redesign해 보았습니다.",
            "소설 중 '살아 있는 사람들이 죽은 자의 말을 들어주지 않으면, 죽은 자들은 영원히 떠돌 수밖에 없을 것이다.'라는 구절이 인상깊었고 이를 북커버 디자인으로 표현해 보았습니다.",
        ],
        modalInfo : [
            "기여도 : 100%",
            "제작기간 : 3시간",
        ],
        programs: ["Photoshop", "Illustrator"],
    },
    {
        categories: ["design"],
        img: "design02.jpg",
        title: "W.DRESSROOM",
        sub: "Brochure design",
        modalTitle: "W.DRESSROOM",
        modalSub : [
            "섬유향수 W.DRESSROOM의 브로슈어를 제작해 보았습니다.",
            "향의 종류와 향에 대한 설명을 볼 수 있습니다.",
        ],
        modalInfo : [
            "기여도 : 100%",
            "제작기간 : 4시간",
        ],
        programs: ["Indesign", "Photoshop", "Illustrator"],
    },
    {
        categories: ["design"],
        img: "design04.jpg",
        title: "핑크팬더 영화포스터",
        sub: "Poster design",
        modalTitle: "PINK PANTHER",
        modalSub : [
            "재개봉한 pink panther 영화의 포스터를 Redesign 해보았습니다.",
            "pink panther 원작인 흑백영화와 현대의 느낌을 주고자 흑백느낌과 핑크팬더 캐릭터의 색감을 더하였습니다.",
        ],
        modalInfo : [
            "기여도 : 100%",
            "제작기간 : 4시간",
        ],
        programs: ["Photoshop"],
    },
    {
        categories: ["design"],
        img: "design03.jpg",
        title: "Egon Schiele 전시회",
        sub: "Poster design",
        modalTitle: "EGON SCHIELE",
        modalSub : [
            "오스트리아 출신의 표현주의 화가 에곤쉴레의 전시회 포스터입니다.",
            "에곤쉴레의 손 드로잉 작품을 메인 소스로 활용하였습니다.",
        ],
        modalInfo : [
            "기여도 : 100%",
            "제작기간 : 4시간",
        ],
        programs: ["Photoshop"],
    },
]
/* <div class="workbox_text">
        <div class="textbox">
            <ul class="textbox_program">${programsHTML}</ul>
        </div>
    </div> */

function workboxArray() {
    works.forEach((work, idx) => {
        const categoriesClass = work.categories.join("");

        const workHTML = `
            <div class="workbox ${categoriesClass}" data-index="${idx}">
                <div class="workbox_wrap">
                    <img src="./asset/${work.img}" alt="${work.title}">
                    <p class="textbox_title">${work.title}</p>
                    <p class="textbox_sub">${work.sub}</p>
                </div>
            </div>
        `;
        workboxWrap.insertAdjacentHTML("beforeend", workHTML);
    });
    
}

document.addEventListener("DOMContentLoaded", () => {
    workboxArray();

    
    const modal = document.getElementById("modal");
    const modalImg = document.querySelector(".modal_img img");
    const modalLeftP = document.querySelector(".left_p p");
    const modalTitle = document.querySelector(".modal_title h2");
    const modalSub = document.querySelector(".modal_innertext");
    const modalInfotext = document.querySelector(".info_inner")
    const modalPrograms = document.querySelector(".info_programs ul");
    const modalLinks = document.querySelector(".modal_links");
    const modalClose = document.querySelector(".modal_close");

    const modalTitleH2 = document.querySelector(".modal_title h2");
    const modalTitleUnder = document.querySelector(".title_under");

    document.querySelectorAll(".workbox").forEach(box=>{
        box.addEventListener("click",()=>{
            const index = box.getAttribute("data-index");
            const work = works[index];
            const programsHTML = work.programs.map(p => `<li><p>${p}</p></li>`).join("");
            const modalSubHTML = work.modalSub.map(p => `<p>${p}</p>`).join("");
            const modalInfoTextHTML =work.modalInfo.map(p => `<p>${p}</p>`).join("");
            const modalLinksHTML = `<a href="${work.modalLinksGoto}" target="_blank">GO TO</a>
            <a href="${work.modalLinksGithub}" target="_blank">GITHUB</a>
            <a href="${work.modalLinksGithub}" target="_blank">TISTORY</a>`

            modalImg.alt = work.title;
            modalTitle.textContent = work.title;
            modalSub.innerHTML = modalSubHTML;
            modalPrograms.innerHTML = programsHTML;
            modalInfotext.innerHTML = modalInfoTextHTML;
            modalLinks.innerHTML = modalLinksHTML;
            modalLeftP.innerHTML = work.modalTitle;
            
            
            console.dir(modalTitleH2)

            if(work.categories.includes("design")){
                modal.classList.add("design");
                modalImg.src = `./asset/${work.img}`;
                
            }else{
                modal.classList.remove("design");
                modalImg.src = `./asset/${work.modalImg}`;
                
            }

            document.body.classList.add("modal_open");
            modal.style.display = "block";
            modalTitleUnder.style.width = (modalTitleH2.clientWidth + 40) + "px";
        })
    })

    modalClose.addEventListener("click",()=>{
        document.body.classList.remove("modal_open")
        modal.style.display = "none";
        modalTitleUnder.style.width = 0 + "px";
    });
    modal.addEventListener("click",(e)=>{
        if(e.target === modal) {
            modal.style.display = "none";
        }
    })
})