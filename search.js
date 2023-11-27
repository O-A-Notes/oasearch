{
    const e = $("#searchbar input"); let t = [
        {
            value: "O/A Notes",
            url: "https://oanotes.vercel.app",
            icon: '<i class=ti-world title="Website"></i>',
            type: "website"
        },
        {
            value: "📚 Wikipedia",
            url: "https://www.wikipedia.org",
            icon: '<i class=ti-world title="Website"></i>',
            type: "website"
        },
        {
            value: "📺 YouTube",
            url: "https://www.youtube.com",
            icon: '<i class=ti-youtube title="Website"></i>',
            type: "website"
        },
        {
            value: "Google",
            url: "https://www.google.com",
            icon: '<i class=ti-google title="Website"></i>',
            type: "website"
        },
        {
            value: "Github",
            url: "https://www.github.com",
            icon: '<i class=ti-world title="Website"></i>',
            type: "website"
        },
        {
            value: "GitLab",
            url: "https://www.gitlab.com",
            icon: '<i class=ti-world title="Website"></i>',
            type: "website"
        },
        {
            value: "🗒️ Notebd",
            url: "https://notebd.vercel.app/",
            icon: '<i class=ti-world title="Website"></i>',
            type: "website"
        },
        {
            value: "📺 OATV",
            url: "https://oatv.pages.dev/",
            icon: '<i class=ti-world title="Website"></i>',
            type: "website"
        },
        {
            value: "🔒 Password Database",
            url: "https://dub.sh/password-database",
            icon: '<i class=ti-world title="Website"></i>',
            type: "website"
        },
        {
            value: "Theory of magnetism",
            url: "https://discord.com/channels/1022116676558393386/1068011315244847184",
            icon: '<i class=ti-world title="Discord"></i>',
            type: "discussion"
        },
        {
            value: "Range and interquartile range",
            url: "https://discord.com/channels/1022116676558393386/1170240482673184868",
            icon: '<i class=ti-world title="Discussion"></i>',
            type: "discussion"
        },
        {
            value: "Worked example: Median",
            url: "https://discord.com/channels/1022116676558393386/1170239579144593470",
            icon: '<i class=ti-world title="Discussion"></i>',
            type: "discussion"
        },
        {
            value: "Worked example: Mode",
            url: "https://discord.com/channels/1022116676558393386/1170239323296256020",
            icon: '<i class=ti-world title="Discussion"></i>',
            type: "discussion"
        },
        {
            value: "The relative mass and relative charge of a proton, neutron and electron",
            url: "https://discord.com/channels/1022116676558393386/1119705964598267967",
            icon: '<i class=ti-world title="Discussion"></i>',
            type: "discussion"
        },
        {
            value: "All types of INTERCONVERSIONS",
            url: "https://discord.com/channels/1022116676558393386/1119705652135215196",
            icon: '<i class=ti-world title="Discussion"></i>',
            type: "discussion"
        },
        {
            value: "Difference between element and compound",
            url: "https://discord.com/channels/1022116676558393386/1119704932824653937",
            icon: '<i class=ti-world title="Discussion"></i>',
            type: "discussion"
        },
        {
            value: "Difference between compound and molecules",
            url: "https://discord.com/channels/1022116676558393386/1119704474513059901",
            icon: '<i class=ti-world title="Discussion"></i>',
            type: "discussion"
        },
        {
            value: "Moles",
            url: "https://discord.com/channels/1022116676558393386/1079013460291100802",
            icon: '<i class=ti-world title="Discussion"></i>',
            type: "discussion"
        },
        {
            value: "DC Motor and DC Generator",
            url: "https://discord.com/channels/1022116676558393386/1076463279582490644",
            icon: '<i class=ti-world title="Discussion"></i>',
            type: "discussion"
        },
        {
            value: "The Particulate Nature of Matter",
            url: "https://discord.com/channels/1022116676558393386/1074366305886548109",
            icon: '<i class=ti-world title="Discussion"></i>',
            type: "discussion"
        },
        {
            value: "Shawon Notes",
            url: "https://www.shawonnotes.com",
            icon: '<i class=ti-world title="Website"></i>',
            type: "website"
        },
        {
            value: "Edexcel Past Papers - Shawon Notes",
            url: "https://www.shawonnotes.com/index.php/edexcel-past-papers/",
            icon: '<i class=ti-world title="Files"></i>',
            type: "files"
        },
        {
            value: "Edexcel IAL Past Papers - Shawon Notes",
            url: "https://www.shawonnotes.com/index.php/edexcel-ial-past-papers/",
            icon: '<i class=ti-world title="Files"></i>',
            type: "files"
        },
        {
            value: "IGCSE Edexcel Revision Notes",
            url: "https://www.shawonnotes.com/index.php/igcse-edexcel-revision-notes/",
            icon: '<i class=ti-world title="Website"></i>',
            type: "website"
        },
        {
            value: "Chat GPT",
            url: "https://chat.openai.com",
            icon: '<i class=ti-world title="Website"></i>',
            type: "website"
        },
        {
            value: "Edexcel Mathematics B Past Papers",
            url: "https://www.shawonnotes.com/index.php/edexcel-past-papers/mathematics-b/",
            icon: '<i class=ti-world title="Files"></i>',
            type: "files"
        }
    ]; e.oninput = () => {
        const n = $("#search-result"); if (n.innerHTML = "", e.classList.remove("expanded"), !e.value.trim()) return; new Promise(e => { if (t.length > 0) { e(t); return } fetch("https://oasearch.netlify.app/pages.json").then(e => e.json()).then(n => { t = n, e(n) }) }).then(() => {
            const o = e.value.toUpperCase().split(" "), s = t.filter(e => o.reduce((t, n) => t && e.value.toUpperCase().indexOf(n) !== -1, !0)); e.classList.add("expanded"), s.push({ value: "Didn't find anything? Use Discord", url: "https://discord.gg/mR5c6ryfVX" }), s.forEach(e => {
                n.appendChild(Object.assign(document.createElement("LI"), {
                    innerHTML: `<a hr` + `ef="${e.url}" data-text="${e.value}">
    <code>${e.type || ""}</code> ${e.value}${e.icon || ""}</a>`
                }))
            })
        })
    }, $("#search-result").onmousemove = ({ target: t }) => e.value = t.closest("a")?.dataset.text || e.value, document.body.addEventListener("click", () => { const e = $("#searchbar input"); e.classList.remove("expanded"), e.value = "", $("#search-result").innerHTML = "" }), $("#search-result").onclick = e => e.stopPropagation()
}
