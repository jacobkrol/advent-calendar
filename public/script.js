const links = [
  "https://drive.google.com/file/d/1mxFfygPt_icspxH1HRk7rSQy3R4Hm2kc/view?usp=sharing",
  "https://drive.google.com/file/d/1DP8Ckb0ET_6aWS9yspU1yo81dEUJe1he/view?usp=sharing",
  "https://drive.google.com/file/d/1IghoAi_oHdT204_cXGpkJEh6yyH4NOpO/view?usp=sharing",
  "https://drive.google.com/file/d/1i4QJC6hQW0vdxEFOKl8BqUTJr_FRiX-v/view?usp=sharing",
  "https://drive.google.com/file/d/1PQ_L21dknbiP2yneEt0Ld-2oep-oWivI/view?usp=sharing",
  "https://drive.google.com/file/d/1bDyEJTQ-G7SlufSzOkq3jqrjeIxwHH9U/view?usp=sharing",
  "https://drive.google.com/file/d/1LrS6YZ490phqbALA2Or8qLJL0uaDb0u9/view?usp=sharing",
  "https://drive.google.com/file/d/1xKZs0Alz0JKy2OmIECYlTT7a07niiqM4/view?usp=sharing",
  "https://drive.google.com/file/d/1Tmol4jQQqSLtAWQqOk5bf0iSHpQlYBgG/view?usp=sharing",
  "https://drive.google.com/file/d/1zeWnt2ZkTErRYP0y28nt564d9EQMP-oR/view?usp=sharing",
  "https://drive.google.com/file/d/1fSWdUzLywOQk85ZquCyENJwPDT-VhCrq/view?usp=sharing",
  "https://drive.google.com/file/d/15d8K70_ou8FBO-sPx5GJk_owRQfU6ouS/view?usp=sharing",
  "https://drive.google.com/file/d/1I1dOU9AFfIVwDMFGWj0przZj3nNm3sS-/view?usp=sharing",
  "https://drive.google.com/file/d/1mcdouArpG4dutMTAK7nVAiarbl5miQ2k/view?usp=sharing",
  "https://drive.google.com/file/d/1HTYqaLVHJyO565NnuIipeXEPoML8s0wq/view?usp=sharing",
  "https://drive.google.com/file/d/17JDL_q1qLzcC7KZdy_o4la7b_ImW_pyD/view?usp=sharing",
  "https://drive.google.com/file/d/1y25ld7o3oy6gE0LsyGxfBE_USIVjcHTs/view?usp=sharing",
  "https://drive.google.com/file/d/1JCDJMBQAXI2Zxtz733XHceWwHiW5Bd3t/view?usp=sharing",
  "https://drive.google.com/file/d/1OoGapVhijXJrz7CLuxQxDedwUgTeoDIq/view?usp=sharing",
  "https://drive.google.com/file/d/1QeXGYoHOL7eTYN_dkGpqpZH879JVNen0/view?usp=sharing",
  "https://drive.google.com/file/d/15QVzl9HEqZS1pMACITkbikYGuf8BhGX_/view?usp=sharing",
  "https://drive.google.com/file/d/1XuacbB00LIfFJeto5jHcvTyb9Cx0ukro/view?usp=sharing",
  "https://drive.google.com/file/d/17SqEZh26Of1avsLChxEyZA1nlS---IH-/view?usp=sharing",
  "https://drive.google.com/file/d/1-uBTxwcv0JY8jrpXNAyVo0KJFYmMgPT1/view?usp=sharing",
  "https://drive.google.com/file/d/1-OTlDUPcO7aHPgK48JjQfy8yA79zS4xz/view?usp=sharing",
];

const DateBox = (d, isLast) => {
  const anchor = document.createElement("a");
  const box = document.createElement("div");
  box.classList.add("datebox");
  anchor.appendChild(box);
  if (links?.[d - 1]) {
    anchor.target = "_blank";
    anchor.href = links?.[d - 1];
  }
  const p = document.createElement("p");
  p.innerText = d;
  box.appendChild(p);
  if (isLast) {
    const last = document.createElement("span");
    last.id = "last";
    box.appendChild(last);
  }
  return anchor;
};

window.onload = () => {
  const now = new Date();
  const xmas = new Date("12-25-2024");
  const currentDate = now > xmas ? 25 : new Date().getDate();
  const cal = document.getElementById("calendar");
  for (let d = 1; d <= Math.min(currentDate, 25); d++) {
    cal.appendChild(DateBox(d, d === Math.min(currentDate, 25)));
  }
};
