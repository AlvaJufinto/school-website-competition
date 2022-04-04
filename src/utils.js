export const googleDriveParser = (link) => {
    return `https://drive.google.com/uc?export=download&id=${link?.split("/d/")[1]?.split("/")[0]}`;
}

export const champsHome = [
    {
        img: 'https://drive.google.com/file/d/1EJyCEMpX03rgiE33nV9EnPrNSpn4M_Lr/view',
        name: '4th SOUTHEAST ASIA CREATIVE CAMP : AUGMENTED REALITY ONLINE WOKSHOP',
        maintenance: 'SEAMEO',
        champ: '2',
        year: '2018',
    },
    {
        img: 'https://drive.google.com/file/d/1xekU9lws3FhIQ9clthc56fzJ4XZjiZIR/view',
        name: 'LKS MATA LOMBA IT SOFTWARE SOLUTION FOR BUSINESS',
        maintenance: 'KEMENDIKBUD',
        champ: '2',
        year: '2019',
    },
    {
        img: 'https://drive.google.com/file/d/1Ap9A380MRPtLvP7nUUz75ZMqAn_jz4HA/view',
        name: 'KAMP KREATIF SMK INDONESIA BIDANG PENGEMBANGAN GAME PENDIDIKAN - (JAGAD)',
        maintenance: 'KEMENDIKBUD   ',
        champ: '3',
        year: '2019',
    },
]

export const subjects = [
    {
        name: 'Dasar Desain Grafis',
        description: "Mempelajari dasar-dasar desain dengan bentuk komunikasi visual yang menggunakan teks dan gambar untuk menyampaikan informasi atau pesan seefektif mungkin"
    },
    {
        name: 'Komputer dan Jaringan Dasar',
        description: "Mempelajari tentang proses mengidentifikasi dan mencegah pengguna yang tidak sah dari suatu jaringan komputer "
    },
    {
        name: 'Pemrograman Dasar',
        description: "Mempelajari tentang proses menulis, menguji dan memperbaiki (debug), dan memelihara kode yang membangun suatu program komputer. Kode ini ditulis dalam berbagai bahasa pemrograman."
    },
    {
        name: 'Sistem Komputer',
        description: "Mempelajari tentang kumpulan dari elemen-elemen computer (hardware, software, brainware) yang saling berhubungan (terintegrasi) dan saling berinteraksi untuk melakukan pengolahan data dengan tujuan menghasilkan informasi sesuai dengan yang diharapkan."
    },
    {
        name: 'Software as a Service (SaaS)',
        description: "Mempelajari tentang model distribusi perangkat lunak dimana penyedia layanan menyediakan aplikasi untuk pelanggan dan membuatnya tersedia bagi pelanggan di internet."
    },
    {
        name: 'Platform as a Service (PaaS)',
        description: "Mempelajari tentang layanan Cloud yang disediakan dalam bentuk platform dan dapat dimanfaatkan pengguna untuk membuat aplikasi di atasnya."
    },
    {
        name: 'Infrastructure as a Service (IaaS)',
        description: "Mempelajari tentang layanan yang memungkinkan untuk menggunakan server tanpa perlu membeli komputer dan peralatannya secara fisik, melakukan pemeliharaan rutin, dan melakukan konfigurasi perangkat."
    },
    {
        name: 'Sistem Keamanan Jaringan (SKJ)',
        description: "Mempelajari tentang proses mengidentifikasi dan mencegah pengguna yang tidak sah dari suatu jaringan komputer."
    },
    {
        name: 'Internet of Things (IoT)',
        description: "Mempelajari tentang konsep di mana suatu benda atau objek ditanamkan teknologi-teknologi seperti sensor dan software dengan tujuan untuk berkomunikasi, mengendalikan, menghubungkan, dan bertukar data melalui perangkat lain selama masih terhubung ke internet."
    },
];

export const champImages = [
    {
        image: 'https://drive.google.com/file/d/11ZlKum3W4YjeA2R6V7-HoClNppr0zi6f/view',
        message: "Aren't they cool?"
    },
    {
        image: "https://drive.google.com/file/d/1W5muq1dttSKh3n3wdxd2eXCq6ZNqjrmi/view",
        message: "We're the champs!"
    },
    {
        image: "https://drive.google.com/file/d/1O6nvlnbdEgbaY33_vPWN14dnre4_kyg3/view",
        message: "Just leave no doubt to us."
    },
    {
        image: 'https://drive.google.com/file/d/1isRmZHevnqeJgnM3ZqjlwPAug1nm5I93/view',
        message: "Yes, we're amazing."
    },
    {
        image: "https://drive.google.com/file/d/1Sjj6Z6_6KN5DCXP3I1VTuiFxDPVHyv3z/view",
        message: "This is cool, right?"
    },
    {
        image: 'https://drive.google.com/file/d/1s4CCKXTeT7GTEuczPXOdvyh8acevEmZk/view',
        message: "No one can stop us!"
    },
];

export const buildingImages = [ 
    {
        image: 'https://drive.google.com/file/d/1BLJQ4k1kkfjn8_vNlMckZ7Qfg2stW0N8/view',
        message: 'What they doin huh?',
    },
    {
        image: 'https://drive.google.com/file/d/1Xj19aD2QGaWExZfx-QWmRjc2G_KHcUwJ/view',
        message: "This is not close up",
    },
    {
        image: 'https://drive.google.com/file/d/1SuXqFkm5UUwD-nGeWQWQF-toj_8RQEY6/view',
        message: "Here's the right side.",
    },
    {
        image: 'https://drive.google.com/file/d/1qfVeU-E1vlzu-QvX7RKqGjWIfxCwhJNb/view',
        message: "I know... It looks like a prison at first sight",
    },
    {
        image: 'https://drive.google.com/file/d/19jiuWMyF1b9hrqD24RUEFU4K2mVpFxzc/view',
        message: "Ay these are from victorious era",
    },
    {
        image: 'https://drive.google.com/file/d/1gnoOsPsq3FTBoKRMotN9yPik5AKBDK5y/view',
        message: "Here's the left side.",
    },
    {
        image: 'https://drive.google.com/file/d/1SuXqFkm5UUwD-nGeWQWQF-toj_8RQEY6/view',
        message: "Here's the right side.",
    },
];

export const jobs = [
    {
        name: "Frontend Developer",
        place: "Jakarta Timur",
        company: "PT Mencari Cinta Sejati",
        description: "Frontend developer yang berpengalaman selama 69 tahun",
        link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        salary: "Rp. 5.000.000 - 20.000.000",
    },
    {
        name: "Backend Developer",
        place: "Jakarta Barat",
        company: "PT Mencari Cinta Sejati",
        description: "Sseorang Backend Developer yang berpengalaman selama 69 tahun di perusahaan Ogah Rugi",
        link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        salary: "Rp. 10.000.000 - 18.000.000",
    },
    {
        name: "Psatir Handal",
        place: "Jakarta Timur",
        company: "PsaTir",
        description: "Psatir handal sangat dibutuhkan untuk menstranslate bahasa satir dengan bahasa manusia",
        link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        salary: "Rp. 5.000.000 - 20.000.000",
    },
    {
        name: "UI/UX Designer",
        place: "Jakarta Selatan",
        company: "Jakarta Pusat",
        description: "Ahli UI Design yang telah memiliki pengalaman selama 5 tahun",
        link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        salary: "Rp. 5.000.000 - 20.000.000",
    },
    {
        name: "Network Designer",
        place: "Jakarta Barat",
        company: "PT kang Jaringan",
        description: "Kamg jaringan yang jago merancang SOHO dengan pengalaman magang 1 tahun di PT mencari cinta sejati",
        link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        salary: "Rp. 5.000.000 - 20.000.000",
    },
    {
        name: "Android Developer",
        place: "Jakarta Pusat",
        company: "PT Anddroid Supremacy",
        description: "Manusia Android yang sudah menguasai bahasa Java dan Kotlin serta sudah berpengalaman di bidang ini selama 4 tahun",
        link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        salary: "Rp. 8.000.000 - 15.000.000",
    },
    {
        name: "React Native Developer",
        place: "Jakarta Pusat",
        company: "PT react native is now fast",
        description: "React Native is now fast brother",
        link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        salary: "Rp. 10.000.000 - 12.000.000",
    },
    {
        name: "MERN Developer",
        place: "Jakarta Timur",
        company: "PT Anddroid Supremacy",
        description: "MERN Developer yang sudah terbiasa disiksa 24/7 dan siap membuat aplikasi fullstack sesuai keinginan Anda",
        link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        salary: "Rp. 15.000.000 - 22.000.000",
    },
    {
        name: "PHP Developer",
        place: "Jakarta Barat",
        company: "PT Anddroid Supremacy",
        description: "Fullstack Developer yang ahli dalam menggunakan framework Laravel dan Codeigniter",
        link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        salary: "Rp. 5.000.000 - 12.000.000",
    },
    {
        name: "Satpam Jaringan",
        place: "Jakarta Selatan",
        company: "Ga tau mau nulis apa.",
        description: "manusia yang siap bekerja di bawah tekanan selama 24/7 demi mengawasi lalu lintas jaringan Anda",
        link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        salary: "Rp. 18.000.000 - 15.000.000",
    },

];