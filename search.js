const searchInput = document.querySelector("#searchbar input");
let urlData = [
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
        type: "encyclopedia"
    },
    {
        value: "📺 YouTube",
        url: "https://www.youtube.com",
        icon: '<i class=ti-youtube title="Website"></i>',
        type: "Video sharing"
    },
    {
        value: "Google",
        url: "https://www.google.com",
        icon: '<i class=ti-google title="Website"></i>',
        type: "Technology"
    },
    {
        value: "Google Meet",
        url: "https://meet.google.com",
        icon: '<i class=ti-video-camera title="Website"></i>',
        type: "Computer program"
    },
    {
        value: "Google Drive",
        url: "https://drive.google.com",
        icon: '<i class=ti-cloud title="Website"></i>',
        type: "Cloud storage"
    },
    {
        value: "Google Calendar",
        url: "https://calendar.google.com",
        icon: '<i class=ti-calendar title="Website"></i>',
        type: "Time-management"
    },
    {
        value: "Google Docs",
        url: "https://docs.google.com",
        icon: '<i class=ti-file title="Website"></i>',
        type: "Word processor"
    },
    {
        value: "Google Keep",
        url: "https://keep.google.com",
        icon: '<i class=ti-notepad title="Website"></i>',
        type: "Application"
    },
    {
        value: "Google Classroom",
        url: "https://classroom.google.com",
        icon: '<i class=ti-book title="Website"></i>',
        type: "Learning platform"
    },
    {
        value: "Google Forms",
        url: "https://docs.google.com/forms",
        icon: '<i class=tti-agenda title="Website"></i>',
        type: "Survey"
    },
    {
        value: "Gmail",
        url: "https://mail.google.com",
        icon: '<i class=ti-goti-email title="Website"></i>',
        type: "Mail"
    },
    {
        value: "Github",
        url: "https://www.github.com",
        icon: '<i class=ti-github title="Website"></i>',
        type: "Software"
    },
    {
        value: "GitLab",
        url: "https://www.gitlab.com",
        icon: '<i class=ti-gitlab title="Website"></i>',
        type: "Software"
    },
    {
        value: "Vercel",
        url: "https://vercel.com",
        icon: '<i class=ti-world title="Website"></i>',
        type: "Web hosting service"
    },
    {
        value: "Netlify",
        url: "http://www.netlify.com",
        icon: '<i class=ti-world title="Website"></i>',
        type: "Computer application"
    },
    {
        value: "Twitter",
        url: "http://www.twitter.com",
        icon: '<i class=ti-world title="Website"></i>',
        type: "Social network"
    },
    {
        value: "Instagram",
        url: "https://www.instagram.com",
        icon: '<i class=ti-instagram title="Website"></i>',
        type: "Social network"
    },
    {
        value: "Facebook",
        url: "https://www.facebook.com",
        icon: '<i class=ti-facebook title="Website"></i>',
        type: "Social network"
    },
    {
        value: "Snapchat",
        url: "https://www.snapchat.com",
        icon: '<i class=ti-world title="Website"></i>',
        type: "Social network"
    },
    {
        value: "Discord",
        url: "https://discord.com",
        icon: '<i class=ti-world title="Website"></i>',
        type: "Social network"
    },
    {
        value: "Messenger",
        url: "https://www.messenger.com",
        icon: '<i class=ti-world title="Website"></i>',
        type: "Software"
    },
    {
        value: "WhatsApp Web",
        url: "https://web.whatsapp.com",
        icon: '<i class=ti-world title="Website"></i>',
        type: "Application"
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
        type: "Database"
    },
    {
        value: "Theory of magnetism",
        url: "https://shrinkme.info/E6CRRo",
        icon: '<i class=ti-world title="Discord"></i>',
        type: "Discussion"
    },
    {
        value: "Range and interquartile range",
        url: "https://discord.com/channels/1022116676558393386/1170240482673184868",
        icon: '<i class=ti-world title="Discussion"></i>',
        type: "Discussion"
    },
    {
        value: "Worked example: Median",
        url: "https://discord.com/channels/1022116676558393386/1170239579144593470",
        icon: '<i class=ti-world title="Discussion"></i>',
        type: "Discussion"
    },
    {
        value: "Worked example: Mode",
        url: "https://discord.com/channels/1022116676558393386/1170239323296256020",
        icon: '<i class=ti-world title="Discussion"></i>',
        type: "Discussion"
    },
    {
        value: "The relative mass and relative charge of a proton, neutron and electron",
        url: "https://discord.com/channels/1022116676558393386/1119705964598267967",
        icon: '<i class=ti-world title="Discussion"></i>',
        type: "Discussion"
    },
    {
        value: "All types of INTERCONVERSIONS",
        url: "https://discord.com/channels/1022116676558393386/1119705652135215196",
        icon: '<i class=ti-world title="Discussion"></i>',
        type: "Discussion"
    },
    {
        value: "Difference between element and compound",
        url: "https://discord.com/channels/1022116676558393386/1119704932824653937",
        icon: '<i class=ti-world title="Discussion"></i>',
        type: "Discussion"
    },
    {
        value: "Difference between compound and molecules",
        url: "https://discord.com/channels/1022116676558393386/1119704474513059901",
        icon: '<i class=ti-world title="Discussion"></i>',
        type: "Discussion"
    },
    {
        value: "Moles",
        url: "https://discord.com/channels/1022116676558393386/1079013460291100802",
        icon: '<i class=ti-world title="Discussion"></i>',
        type: "Discussion"
    },
    {
        value: "DC Motor and DC Generator",
        url: "https://discord.com/channels/1022116676558393386/1076463279582490644",
        icon: '<i class=ti-world title="Discussion"></i>',
        type: "Discussion"
    },
    {
        value: "The Particulate Nature of Matter",
        url: "https://discord.com/channels/1022116676558393386/1074366305886548109",
        icon: '<i class=ti-world title="Discussion"></i>',
        type: "Discussion"
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
        value: "Edexcel Mathematics B Past Papers",
        url: "https://www.shawonnotes.com/index.php/edexcel-past-papers/mathematics-b/",
        icon: '<i class=ti-world title="Files"></i>',
        type: "files"
    }
];
