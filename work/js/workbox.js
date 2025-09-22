const works = [
    {
        categories: ["develop"],
        img: "develop02.jpg",
        title: "TIK-TOK",
        sub: "REST API를 기반으로 사용자의 위치에 따라 날씨와 시간를 알려주고 그에 맞는 음악을 추천",
        programs: ["HTML5 & CSS3", "JavaScript", "REST API"],
        link: "https://www.dlwldms.com/tik-tok",
    },
    {
        categories: ["develop"],
        img: "develop01.jpg",
        title: "AKMU의 사춘기(思春記)",
        sub: "Album Introduce webpage",
        programs: ["HTML5 & CSS3", "j-Query"],
        link: "https://www.dlwldms.com/akmu",
    },
    {
        categories: ["design"],
        img: "design01.jpg",
        title: "소년이 온다",
        sub: "Book cover design",
        programs: ["Photoshop", "Illustrator"],
    },
    {
        categories: ["design"],
        img: "design02.jpg",
        title: "W.DRESSROOM",
        sub: "Brochure design",
        programs: ["Photoshop", "Illustrator"],
    },
    {
        categories: ["design"],
        img: "design04.jpg",
        title: "핑크팬더 영화포스터",
        sub: "Poster design",
        programs: ["Photoshop"],
    },
    {
        categories: ["design"],
        img: "design03.jpg",
        title: "Egon Schiele 전시회",
        sub: "Poster design",
        programs: ["Photoshop"],
    },
]

function workboxArray() {
    works.forEach(work => {
        const programsHTML = work.programs.map(p => `<li><p>${p}</p></li>`).join("");
        const categoriesClass = work.categories.join("");

        const workHTML = `
            <div class="workbox ${categoriesClass}">
                <div class="workbox_wrap">
                    <img src="./asset/${work.img}" alt="${work.title}">
                    <div class="workbox_text">
                        <div class="linkbox">
                            <a href="${work.link}" target="_blank">
                                <div class="link_svg">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M10.0002 13C10.4297 13.5741 10.9776 14.0491 11.6067 14.3929C12.2359 14.7367 12.9317 14.9411 13.6468 14.9923C14.362 15.0435 15.0798 14.9403 15.7515 14.6897C16.4233 14.4392 17.0333 14.047 17.5402 13.54L20.5402 10.54C21.451 9.59695 21.955 8.33394 21.9436 7.02296C21.9322 5.71198 21.4063 4.45791 20.4793 3.53087C19.5523 2.60383 18.2982 2.07799 16.9872 2.0666C15.6762 2.0552 14.4132 2.55918 13.4702 3.46997L11.7502 5.17997M14.0002 11C13.5707 10.4258 13.0228 9.95078 12.3936 9.60703C11.7645 9.26327 11.0687 9.05885 10.3535 9.00763C9.63841 8.95642 8.92061 9.0596 8.24885 9.31018C7.5771 9.56077 6.96709 9.9529 6.4602 10.46L3.4602 13.46C2.54941 14.403 2.04544 15.666 2.05683 16.977C2.06822 18.288 2.59407 19.542 3.52111 20.4691C4.44815 21.3961 5.70221 21.9219 7.01319 21.9333C8.32418 21.9447 9.58719 21.4408 10.5302 20.53L12.2402 18.82" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                            </a>
                        </div>
                        <div class="textbox">
                            <p class="textbox_title">${work.title}</p>
                            <p class="textbox_sub">${work.sub}</p>
                            <ul class="textbox_program">${programsHTML}</ul>
                        </div>
                    </div>
                </div>
            </div>
        `;
        workboxWrap.insertAdjacentHTML("beforeend", workHTML);
    });
    
}


document.addEventListener("DOMContentLoaded", () => {
    workboxArray()
})