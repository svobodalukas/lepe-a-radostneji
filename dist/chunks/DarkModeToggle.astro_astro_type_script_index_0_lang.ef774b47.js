function d(o){const t=document.head.querySelector('meta[name="theme-color"]');o==="dark"?(document.documentElement.classList.remove("light"),document.documentElement.classList.add("dark"),t&&(t.content="#262626")):(document.documentElement.classList.remove("dark"),document.documentElement.classList.add("light"),t&&(t.content="#ffffff"))}function a(o){o==="dark"?sessionStorage.setItem("theme","dark"):sessionStorage.setItem("theme","light")}class i extends HTMLElement{constructor(){super();let t=document.documentElement.classList.contains("dark")?"dark":"light";const c=this.querySelector("button"),e=c?.querySelector("#mode-circle");e&&(t==="dark"&&(e.classList.remove("light"),e.classList.add("dark")),e.classList.remove("invisible"),c?.addEventListener("click",()=>{if(t==="dark"){const s="light";e.classList.remove("dark"),e.classList.add("light"),d(s),a(s),t=s}else{const s="dark";e.classList.remove("light"),e.classList.add("dark"),d(s),a(s),t=s}e.classList.contains("duration-300")||e.classList.add("duration-300")}))}}customElements.define("mode-toggle",i);
