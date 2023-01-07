import { ParsedUrlQuery } from 'querystring';

import { GetStaticPropsContext, PreviewData } from 'next';

export const programs = {
  'digital-marketing-master-class': {
    path: { params: { programName: 'digital-marketing-master-class' } },
    title: 'Digital Marketing Master Class',
    summary:
      'Mulai perubahan hari ini dengan upgrade diri di bidang Digital Marketing',
    heroImage: 'digital-marketing-hero.png',
    about:
      '<p>\n' +
      '            Kursus intensif tiga bulan ini berfokus pada optimisasi dan\n' +
      '            peningkatan keahlian profesional untuk:\n' +
      '          </p>\n' +
      "            <ul class='list-disc my-4 px-4'>\n" +
      '              <li>Create, maintain, and grow a brand & creative thinking</li>\n' +
      '              <li>Analyze trend, forecast, and implement ads-strategy for a brand</li>\n' +
      '              <li>Optimize the pyramid of funnel marketing in ads, ppc technical, and\n' +
      '                advanced strategy\n' +
      '              </li>\n' +
      '              <li>Optimize the website</li>\n' +
      '              <li>Identify, access, and augment your optimal customer base</li>\n' +
      '            </ul>\n' +
      '          <p>\n' +
      '            Harap dicatat bahwa cakupan kursus 3 bulan ini terdiri dari 2 bulan\n' +
      '            pembelajaran trend kasus terbaharukan tingkat awal dan menengah\n' +
      '            sedangkan pada bulan terakhir kasus berat dan tingkat lanjut akan\n' +
      '            menjadi prioritas praktek dan pembahasan.\n' +
      '          </p>',
    aboutImage: 'digital-marketing-about.png',
    userPersona: [
      {
        title: 'Umum',
        description: 'Mahasiswa atau umum yang memulai karir di bidang tech.',
        image: 'digital-marketing-persona-first.png',
      },
      {
        title: 'Marketing Manager',
        description: 'Untuk Praktisi Senior yang perlu mengupdate ilmu.',
        image: 'digital-marketing-persona-second.png',
      },
      {
        title: 'Pengusaha',
        description: 'Untuk tech founder yang perlu mengembangkan bisnis.',
        image: 'digital-marketing-persona-third.png',
      },
    ],
    schedule: {
      nearest: '31 Agustus 2022',
      main: {
        title: 'Kelas online',
        title2: '(Bootcamp & Bootcamp Pro)',
        detail: [{ day: 'Rabu & Minggu', time: '19.00-21.00 WIB' }],
      },
      secondary: {
        title: 'Kelas offline',
        title2: '(Hanya untuk Bootcamp Pro)',
        detail: [{ day: 'Sabtu', time: ' 09.00-16.00 WIB' }],
      },
    },
    curriculums: [
      {
        name: 'Content Marketing Strategy',
        description:
          'Proses pengembangan identitas produk yang berkaitan dengan pilar dan perencanaan pemasaran',
      },
      {
        name: 'Branding Strategy',
        description:
          'Mempelajari proses pembentukan identitas produk dan memahami perkembangannya.',
      },
      {
        name: 'Website Landing Page',
        description:
          'Mempelajari cara membuat konversi pada Laman dengan strategi terkemuka.',
      },
      {
        name: 'Develop Soft Skill',
        description:
          'Mengembangkan kepercayaan diri serta keahlian komunikasi bisnis.',
      },
      {
        name: 'Digital Social Media Ads',
        description:
          'Mengoptimalkan Fitur dan dasbor Iklan media sosial dimulai dari tahap awal pengenalan hingga konversi bisnis, strategi untuk meninjau performa iklan serta kualitas dari iklan itu sendiri.',
      },
      {
        name: 'Google Ads',
        description:
          'Mengoptimalkan Fitur dan dasbor Iklan Google, dimulai dari tahap awal pengenalan hingga konversi bisnis, strategi untuk meninjau performa iklan serta kualitas dari iklan itu sendiri melalui Google Display Network, Youtube Ads, dan Search Engine Marketing.',
      },
      {
        name: 'SEO',
        description:
          'Pengenalan cara kerja SEO, Penempatan kata kunci yang tepat untuk riset atau pencarian, Optimisasi On-Page dan Off-Page, Hal-hal teknis serta mengukur dan analisa hasil.',
      },
      {
        name: 'Google Certification',
        description:
          'Memahami konsep iklan pada Google serta proses Sertifikasi nya.',
      },
      {
        name: 'Influencer/KOL Marketing',
        description:
          'Efektivitas KOL dan strategi untuk menjalankan sebuah program atau perencanaan, peningkatan, pengukuran, serta pelaksanaan akan suatu brand atau produk yang sedang Anda pasarkan dimulai dari sisi kreatif, perkembangan dan analisis nya.',
      },
      {
        name: 'Media Recommendation & Budget Optimization',
        description:
          'Mempelajari cara untuk mengoptimalkan anggaran pada setiap media yang digunakan serta praktek untuk menyampaikan brand yang dimiliki.',
      },
      {
        name: 'Digital Marketing & Strategy to Set Up Campaign',
        description:
          'Pengenalan digital marketing dimulai dari tujuan, fitur, strategi, cara berfikir strategis serta proses penganggaran biaya.',
      },
      {
        name: 'Measuring Ads & Brand Activity',
        description:
          'Sebagai Master, Kamu akan menjadi ahli untuk mengoptimalkan angggaran dan performance iklan serta menilai efektifitas branding yang efektif di dunia digital',
      },
      {
        name: 'Paid Ads Specialist Workflow',
        description:
          'Memahami tanggung jawab seorang performance marketing specialist.',
      },
      {
        name: 'Measurement of Budget Management',
        description:
          'Mengelola budget untuk penempatan di berbagai platform ads seperti Facebook, Instagram dan Google Ads.',
      },
      {
        name: 'Measurement of Audience Management',
        description:
          'Menentukan dan mengelola audiens yang tepat sebagai sasaran beriklan.',
      },
      {
        name: 'Efficacious Paid Media Structure',
        description:
          'Menstrukturisasi paid media campaign yang efektif dan efisien.',
      },
      {
        name: 'Google Ads Strategy & Placement',
        description:
          'Optimisasi model Google Ads sesuai dengan kebutuhan perusahaan / bisnis.',
      },
      {
        name: 'Facebook Ads Strategy & Placement',
        description:
          'Optimisasi model di Facebook dan Instagram Ads sesuaidengan kebutuhan perusahaan / bisnis.',
      },
    ],
    mentor: [
      {
        name: 'Nahdiah Estu',
        profession: 'Head of Online Marketing IT at \nSamsung Electronics',
        image_profile: 'nahdiah-estu.png',
        profile_url:
          'https://www.linkedin.com/in/nahdiah-estu-pawestri-50502430/',
        company_name: 'samsung',
      },
      {
        name: 'Witta Sylvia',
        profession: 'KOL Specialist at Shopee',
        image_profile: 'witta-sylvia.png',
        profile_url: 'https://www.linkedin.com/in/witta-sylvia-1bb07b38/',
        company_name: 'shopee',
      },
      {
        name: 'Febri Ratna',
        profession: 'Business Director at MicroAd Indonesia',
        image_profile: 'febri-ratna.png',
        profile_url: 'https://www.linkedin.com/',
        company_name: 'microad',
      },
      {
        name: 'Arief Laksono',
        profession: 'Product Manager at ACT Foundation',
        image_profile: 'arief-laksono.png',
        profile_url: 'https://www.linkedin.com/in/ariefdl/',
        company_name: 'act',
      },
    ],
    programPackages: [
      {
        name: 'QarirLabs Bootcamp (Online)',
        headline: 'Good Recommend Program to be a Master',
        fake_price: '10,000,000',
        real_price: '8,999,000',
        is_sold_out: false,
        package_advantages: [
          {
            content: '16 Weeks Intensive with Advanced Complete Module',
          },
          {
            content: 'Qarir preparation',
          },
          {
            content: 'Job Connector',
          },
          {
            content: '12 Months Career Support',
          },
          {
            content: 'Internship Opportunity',
          },
          {
            content: 'International Class With Global Expert Access',
          },
          {
            content: 'Lifetime Recording Access',
          },
          {
            content: 'Real-life Project',
          },
        ],
        program_name: 'Digital Marketing',
      },
      {
        name: 'QarirLabs Bootcamp Pro (Hybrid)',
        headline: 'Best Recommended for Networking',
        fake_price: '16,000,000',
        real_price: '12,000,000',
        is_sold_out: false,
        package_advantages: [
          {
            content: '16 Weeks Intensive With Advanced Complete Module',
          },
          {
            content: 'All Benefits of QarirLabs Bootcamp Online',
          },
          {
            content: 'Access to Offline Class in Marriott Hotel Group',
          },
          {
            content: 'High Quality Network',
          },
        ],
        program_name: 'Digital Marketing',
      },
      {
        name: 'QarirLabs Bali Bootcamp',
        headline: 'Best Learning Experience',
        fake_price: '16,000,000',
        real_price: '12,000,000',
        is_sold_out: false,
        package_advantages: [
          {
            content: '16 Weeks Intensive with Advanced Complete Module',
          },
          {
            content: 'All of QarirLabs Bootcamp Online Benefits',
          },
          {
            content: '7 Days Vacation And Short Offline Course In Bali',
          },
          {
            content: 'Free Hotel in Bali During Offline Course',
          },
          {
            content: 'Flight Assistance in CGK Airport & Ngurah Rai Airport',
          },
          {
            content: 'Free Airport Lounge Access by Garuda Indonesia',
          },
        ],
        program_name: 'Digital Marketing',
      },
    ],
    reviews: [
      {
        student_name: 'Tyas',
        student_profession: 'Channel Project Officer',
        student_image_profile_url: 'DM-tyas.png',
        content:
          'QarirLabs Digital Marketing training helped me to start my career at Danone. The QarirLabs learning materials are very easy to apply. Plus, the trainers are fun, fun, and caring. Really recommend to join QarirLabs.',
      },
      {
        student_name: 'Agnes',
        student_profession: 'Digital Marketing Manager',
        student_image_profile_url: 'DM-agnes.png',
        content:
          'I got a lot of benefits at QarirLabs. I had the opportunity to learn SEO, basic digital marketing, to complex case studies, tips and tricks and insights related to digital marketing. I had the best experience here with all the interesting and great coaches.',
      },
    ],
    faqs: [
      {
        question: 'Bagaimana Jika saya tidak bisa Hadir dalam kelas ?',
        answer:
          'Kamu dapat mengajukan kelas pengganti dengan konfirmasi ke bagian Asisten Akademik Pribadimu.',
      },
      {
        question: 'Apakah ada perbedaan kelas beginner dan advanced ?',
        answer:
          'Kelas di QarirLabs dirancang untuk Beginner-Intermediate-dan Advanced, khusus advanced level, kelas Intensive Bootcamp Pro adalah cara menuju upgrade skill yang paling tepat dan memperbanyak relasi.',
      },
      {
        question: 'Berapa persen alumni diserap kerja ?',
        answer:
          '91% Alumni QarirLabs telah diserap oleh industri. Job Connector adalah layanan favorit alumni untuk menghubungkan mereka dengan hiring partner kami',
      },
      {
        question: 'Apa itu Internship?',
        answer:
          'Internship adalah final project dan unpaid internship/magang tidak berbayar di hiring partner QarirLabs',
      },
      {
        question: 'Apa perbedaan Intensive Online dan Intensive Bootcamp Pro ?',
        answer:
          'Intensive Online adalah program yang mengajarkan dari level beginner hingga upper intermediate (strategi spesifik , dan praktek studi kasus menengah) sedangkan Intensive Bootcamp pro selain memulai dari fundamental digital marketing dengan trend terbaru , kelas ini juga akan mempelajari kasus dan strategi tingkatan advanced dan tersedia kelas offline.',
      },
      {
        question:
          'Apa perbedaan kelas WDP dengan kursus singkat Digital Marketing?',
        answer:
          'Kelas QarirLabs memuat seluruh strategi dan data terbaharukan melalui serangkaian riset global bekerja sama dengan kampus internasional dan sesuai perkembangan Industri saat ini. Kelas kami akan dan selalu diajarkan oleh pakar dari Director Level dan praktisi terbaik.',
      },
    ],
  },
  'data-science-master-class': {
    path: { params: { programName: 'data-science-master-class' } },
    title: 'Data Science Master Class',
    summary:
      'Mulai perubahan hari ini dengan upgrade diri di bidang Data Science',
    heroImage: 'data-science-hero.png',
    about:
      '<p>Data Science Master Class dibagi menjadi dua program:</p> \n' +
      "          <ul class='list-disc my-4 px-4'>\n" +
      '            <li>Tingkat Menengah dan,</li>\n' +
      '            <li>Tingkat Pemula</li>\n' +
      '          </ul>\n' +
      '          <p>\n' +
      '            Kursus ini bertujuan untuk memperkenalkan siswa pada perpaduan konsep dan teknologi Ilmu Data untuk\n' +
      '            memungkinkan mereka bekerja dengan masalah terkait Data sehari-hari secara analitis.\n' +
      '            <br /><br />\n' +
      '            Siswa akan mendapatkan pengalaman dari seluruh rantai pasokan Ilmu Data, yaitu pengumpulan, pemrosesan,\n' +
      '            analisis, dan visualisasi Data, menggunakan proyek praktis Kelompok Ilmu Data praktis yang inovatif.\n' +
      '            Kursus intensif tiga bulan ini berfokus pada optimisasi dan\n' +
      '            peningkatan keahlian profesional untuk:\n' +
      '          </p>',
    aboutImage: 'data-science-about.png',
    userPersona: [
      {
        title: 'Umum',
        description:
          'Setiap orang yang tidak memiliki latar belakang IT (Perlu bergabung dengan Kelas Dasar kami terlebih dahulu).',
        image: 'data-science-persona-first.png',
      },
      {
        title: 'Data Science Leader',
        description: 'Untuk Praktisi Senior yang perlu mengupdate ilmu.',
        image: 'data-science-persona-second.png',
      },
      {
        title: 'Junior or Mid Level Data Science',
        description: 'Siswa yang telah mengenal Data Science sebelumnya.',
        image: 'data-science-persona-third.png',
      },
    ],
    schedule: {
      nearest: '1 September 2022',
      main: {
        title: 'Kelas online',
        title2: '',
        detail: [{ day: 'Kamis & Minggu', time: '19.00-21.00 WIB' }],
      },
      secondary: null,
    },
    curriculums: [
      {
        name: 'Python Programming',
        description:
          'In this module, student would learn about the Python Programming fundamental and how to use the basic usage of Python language.\n• Data Types : numbers, strings, lists, dictionaries, Boolean\n• Comparison Operators\n• If, else if, and else statements\n• For loops, while loops,\n• Functions, lambda expressions & Algorithm Training',
      },
      {
        name: 'Data Science with Python',
        description:
          'Personal Data Science Project Presentation that student create and presented in front of Trainer and/or Expert. The project should address a business problem and try to solve this problem with data.',
      },
      {
        name: 'Data Analysis',
        description:
          'In this module, student focus on learning how to using various Python data package, learning basic data exploration, analysis theory, and basic statistic.\n• Numpy\n• Pandas\n• Visualization Package (Matplotlib, Seaborn)\n• Statistic\n• SQL Language\n• Exploratory Data Analysis (EDA)',
      },
      {
        name: 'Machine Learning',
        description:
          'In this module, student would focus on the Data Scientist activity and learning the basic concept of Machine Learning algorithm, machine learning modelling, and machine learning evaluation.\n• Supervised Analysis (Regression, Classification)\n• Unsupervised Analysis (Clustering)\n• Model Tuning and Evaluation\n• Case Study: Develop ML for business case',
      },
      {
        name: 'Experiments and Causal Inference',
        description:
          'In this module, student would focus on design practical experiments to gain insights, and learn to deal with external factors and events outside your control.',
      },
      {
        name: 'Data Science to Drive Business Value',
        description:
          'In this module, student would focus on learn how to put the tools and techniques you have learned to the service of business growth and value generation.',
      },
      {
        name: 'Final Project',
        description:
          'Personal Data Science Project Presentation that student create and presented in front of Trainer and/or Expert. The project should address a business problem and try to solve this problem with data.',
      },
    ],
    mentor: [
      {
        name: 'Yuni Rafita',
        profession: 'Data Team at Traveloka',
        image_profile: 'yuni-rafita.png',
        profile_url:
          'https://www.linkedin.com/in/nahdiah-estu-pawestri-50502430/',
        company_name: 'traveloka',
      },
      {
        name: 'Ricki Chandra Hidayatullah',
        profession: 'Data Scientist at PT Citra Niaga Teknologi',
        image_profile: 'ricki-chandra-hidayatullah.png',
        profile_url: 'https://www.linkedin.com/in/witta-sylvia-1bb07b38/',
        company_name: 'citra-niaga-teknologi',
      },
    ],
    programPackages: [
      {
        name: 'Online Intensive',
        headline: 'Match for Student/Jobseeker/Beginner',
        fake_price: null,
        real_price: '14,000,000',
        is_sold_out: false,
        package_advantages: [
          {
            id: 1141,
            content: '16 Weeks Intensive Completed With Real Project',
          },
          {
            id: 1142,
            content: 'Job Connector Access',
          },
          {
            id: 1143,
            content: '12 Months Career Support',
          },
          {
            content: 'Soft Skill Development Class',
          },
          {
            id: 1143,
            content: 'Beginner Friendly Module',
          },
          {
            id: 1143,
            content: 'No Need Programming Background',
          },
        ],
        program_name: 'Data Science',
      },
      {
        name: 'Advanced',
        headline: 'Very recommend to be a Master',
        fake_price: null,
        real_price: '18,000,000',
        is_sold_out: true,
        package_advantages: [
          {
            content: '16 Weeks Intensive + Advanced Module Machine Learning',
          },
          {
            content: 'Semi Private Class',
          },
          {
            content: 'Job Connector Access',
          },
        ],
        program_name: 'Data Science',
      },
    ],
    reviews: [
      {
        student_name: 'Andimas Iben',
        student_profession: 'Optimization Manager',
        student_image_profile_url: 'DS-andimas.png',
        content:
          'QarirLabs membantu saya memahami lebih dalam mengenai data science. Setelah mengikuti course dan stay connected dengan mentor, saya pun berhasil mulai bekerja di perusahaan impian saya menggunakan skill yang sangat meningkat.',
      },
      {
        student_name: 'Indira Yasmine',
        student_profession: 'Field Manager at Fixplorer',
        student_image_profile_url: 'DS-indira.png',
        content:
          'Sebagai orang awam, kelasnya dikemas menarik, dan juga dibimbing oleh praktisi berpengalaman sehingga berbagai studi kasus dapat terselesaikan.',
      },
    ],
    faqs: [
      {
        question: 'Bagaimana Jika saya tidak bisa Hadir dalam kelas ?',
        answer:
          'Kamu dapat mengajukan kelas pengganti dengan konfirmasi ke bagian Asisten Akademik Pribadimu.',
      },
      {
        question: 'Apakah ada perbedaan kelas beginner dan advanced ?',
        answer:
          'Kelas di QarirLabs dirancang untuk Beginner-Intermediate-dan Advanced, khusus advanced level, kelas Intensive Bootcamp Pro adalah cara menuju upgrade skill yang paling tepat dan memperbanyak relasi.',
      },
      {
        question: 'Berapa persen alumni diserap kerja ?',
        answer:
          '91% Alumni QarirLabs telah diserap oleh industri. Job Connector adalah layanan favorit alumni untuk menghubungkan mereka dengan hiring partner kami',
      },
      {
        question:
          'Apa perbedaan kelas QarirLabs dengan kursus singkat Data Science?',
        answer:
          'Kelas QarirLabs memuat seluruh strategi dan data terbaharukan melalui serangkaian riset global bekerja sama dengan kampus internasional dan sesuai perkembangan Industri saat ini. Kelas kami akan dan selalu diajarkan oleh pakar dari Director Level dan praktisi terbaik.',
      },
    ],
  },
  'ui-ux-design-master-class': {
    path: { params: { programName: 'ui-ux-design-master-class' } },
    title: 'UI/UX Design Master Class',
    summary:
      'Mulai perubahan hari ini dengan upgrade diri di bidang UI/UX Design',
    heroImage: 'ui-ux-design-hero.png',
    about:
      '<p>\n' +
      '            User Interface dan User Experience (UI/UX) memegang peran penting dalam pembangunan sebuah aplikasi, karena\n' +
      '            desain pada sebuah aplikasi harus rapi dan terorganisir. Selain itu User Interface dan User Experience\n' +
      '            (UI/UX) harus sesuai dengan kebutuhan pengguna dari aplikasi yang akan dibangun. User Interface dan User\n' +
      '            Experience (UI/UX) dibangun dengan melihat kebutuhan pengguna atas sebuah aplikasi yang akan dibangun mulai\n' +
      '            dari desain tampilan, fitur-fitur, dan berbagai kebutuhan lainnya.\n' +
      '            <br/><br/>\n' +
      '            User Interface (UI) dan User Experience (UX) menjadi sesuatu yang mulai trend dalam perkembangan dunia\n' +
      '            teknologi Informasi, khususnya di era Industri 4.0 ini. UI/UX menjadi salah satu faktor yang cukup\n' +
      '            diperhitungkan dalam pengembangan aplikasi dan perangkat lunak, karena dengan adanya UI/UX yang baik dapat\n' +
      '            meningkatkan minat dan memberikan kemudahan kepada pengguna dalam menggunakan aplikasi tersebut.\n' +
      '            <br/><br/>\n' +
      '            Perdalam dan asah skillmu dalam bidang UI UX Design selama 4,5 bulan. Diajarkan UX Research + UX Writing\n' +
      '            juga untuk mempersiapkan kamu berkarir dalam bidang UI UX. Belajar bersama mentor-mentor terbaik di\n' +
      '            bidangnya.\n' +
      '          </p>',
    aboutImage: 'ui-ux-design-about.png',
    userPersona: [
      {
        title: 'Umum',
        description: 'Siapapun yang ingin belajar design atau UI/UX Design.',
        image: 'ui-ux-design-persona-first.png',
      },
      {
        title: 'Tim Product',
        description:
          'UI Designer, UX Researcher, Graphic Desginer, Product Designer.',
        image: 'ui-ux-design-persona-second.png',
      },
      {
        title: 'Pengusaha',
        description:
          'Pengusaha, untuk pengembangan rencana strategis dan peningkatan angka penjualan.',
        image: 'ui-ux-design-persona-third.png',
      },
    ],
    schedule: {
      nearest: '2 September 2022',
      main: {
        title: 'Kelas online',
        detail: [{ day: 'Jumat & Sabtu', time: '19.00-21.00 WIB' }],
      },
      secondary: null,
    },
    curriculums: [
      {
        name: 'Intro to UI/UX',
        description:
          '• Introduction to UI/UX Design \n• Hands-On Figma\n• Mastering Figma (Component, Element, Tools, etc)',
      },
      {
        name: 'Design Thinking',
        description:
          '• UX Design Process & Design Thinking\n• Define & Ideate Process',
      },
      {
        name: 'User Experience Design',
        description:
          '• User flow\n• Wireframe\n• Study Case: User flow & Wireframing (1 web / 1 app)',
      },
      {
        name: 'User Interface Designing & Prototyping',
        description:
          '• Fundamental of UI Design\n• Design System\n• Mockup UI Design\n• UX Writing\n• Prototyping\n• Study Case: UI Design & Prototyping (1 web / 1 app)',
      },
      {
        name: 'Research & Usability Testing',
        description: '• User Research\n• Practice User Research',
      },
      {
        name: 'Softskill & Career Development',
        description:
          '• UX Case Study\n• Getting a Job in UI/UX\n• UI/UX Design in The Daily Basis\n• Basic Mentality For Career Development\n• Portofolio Management\n• Interview Preparation\n• Entrepreneurship & Pitching\n• Project Group (2-3 orang)',
      },
    ],
    mentor: [
      {
        name: 'Jamika Nasaputra',
        profession: 'Lead UI/UX at kitabeli',
        image_profile: 'jamika-nasaputra.png',
        profile_url: 'https://www.linkedin.com/',
        company_name: 'kita-beli',
      },
      {
        name: 'Yoga Tri Nugroho',
        profession: 'Principle UX Designer at Tokopedia',
        image_profile: 'yoga-tri-nugroho.png',
        profile_url: 'https://www.linkedin.com/',
        company_name: 'tokopedia',
      },
      {
        name: 'Adhe Kurniawan Putra',
        profession: 'Senior UI Designer at Tokopedia',
        image_profile: 'adhe-kurniawan-putra.png',
        profile_url: 'https://www.linkedin.com/',
        company_name: 'tokopedia',
      },
    ],
    programPackages: [
      {
        name: 'Early Bird',
        headline: 'The most affordable and high quality class',
        fake_price: '10,000,000',
        real_price: '7,980,000',
        is_sold_out: false,
        package_advantages: [
          {
            content: '12 Weeks Completed With Real Project',
          },
          {
            content: 'Ui/Ux Certification',
          },
          {
            content: 'Project Design Master Class',
          },
          {
            content: 'Job Connector',
          },
          {
            content: '12 Months Consultation For Free',
          },
        ],
        program_name: 'Ui/UX Design',
      },
    ],
    reviews: [
      {
        student_name: 'Dio',
        student_profession: 'UI/UX Designer',
        student_image_profile_url: 'UX-dio.png',
        content:
          'Materi yang diberikan sangat aplikatif, mulai dari metode dan flow ux proses yang baik, sampai dengan membuat design system dan prototyping yang sesuai dengan standar real industry.',
      },
      {
        student_name: 'Balad Al Barokah',
        student_profession: 'UI/UX Designer',
        student_image_profile_url: 'UX-balad.png',
        content:
          'Dengan bimbingan dari praktisi yang udah expert banget di industri, materi yang diajarkan juga dari real case yang pernah mereka kerjakan. Para trainer juga open untuk discuss kalo ada materi yang ingin kita cari jalan keluarnya.',
      },
    ],
    faqs: [
      {
        question: 'Bagaimana Jika saya tidak bisa Hadir dalam kelas ?',
        answer:
          'Kamu dapat mengajukan kelas pengganti dengan konfirmasi ke bagian Asisten Akademik Pribadimu.',
      },
      {
        question: 'Berapa persen alumni diserap kerja ?',
        answer:
          '91% Alumni QarirLabs telah diserap oleh industri. Job Connector adalah layanan favorit alumni untuk menghubungkan mereka dengan hiring partner kami',
      },
      {
        question:
          'Apa perbedaan kelas QarirLabs dengan kursus singkat UI/UX Design?',
        answer:
          'Kelas QarirLabs memuat seluruh strategi dan data terbaharukan melalui serangkaian riset global bekerjasama dengan Harvard dan Kampus Internasional dan sesuai perkembangan Industri saat ini. Kelas kami akan dan selalu diajarkan oleh pakar dari Director Level dan praktisi terbaik.',
      },
      {
        question: 'Bagaimana peluang karir di bidang UI/UX Design?',
        answer:
          'UI/UX designer memegang peran yang semakin besar dalam pengembangan aplikasi web dan mobile. Berbeda dengan web/mobile designer biasa, seorang UI/UX designer tidak hanya memahami aspek visual dari proses mendesain sebuah aplikasi. Mereka juga mampu mempertimbangkan sisi psikologi seorang user ketika menggunakan sebuah aplikasi.',
      },
      {
        question:
          'Apa saja profesi yang dapat saya tempati setelah lulus dari program ini?',
        answer:
          'Industri digital Indonesia bertransformasi dengan pesat. Hal ini memicu demand yang besar untuk pekerja yang memiliki kualifikasi di bidang UI/UX design. Varian pekerjaan yang dapat kamu lakukan dengan skill yang didapat dari program ini termasuk (tapi tidak terbatas pada):\n' +
          '\n' +
          '• Information Architect\n' +
          '• Interaction Designer\n' +
          '• Product Designer\n' +
          '• Usability Analyst\n' +
          '• User Researcher\n' +
          '• UX Designer',
      },
      {
        question:
          'Apa saya harus mempunyai pengetahuan dalam bidang UI/UX atau IT untuk mengikuti program ini?',
        answer:
          'Tidak perlu. Dengan mengikuti program bootcamp ini tentunya kamu akan belajar dari awal sampai kamu siap berkarir dalam bidang ini. Kamu tentunya akan belajar langsung dari Mentor yang berpengalaman juga!',
      },
      {
        question:
          'Apakah program bootcamp ini hanya untuk mereka yang ingin bekerja di bidang UI/UX?',
        answer:
          'Tentu saja tidak! Program ini ditujukan untuk siapapun yang ingin belajar mengenai UI UX khususnya UI UX Design. Jika kamu ingin meniti karir sebagai UI UX Design, UX Research, UX Writing, atau ingin mengembangkan bisnis kamu, bisa banget untuk ikutan program bootcamp ini!',
      },
    ],
  },
};

export function getProgram(
  programName: GetStaticPropsContext<ParsedUrlQuery, PreviewData>
) {
  const key = programName?.params?.programName;
  const program = programs[key as keyof typeof programs];
  return program;
}

export function getProgramParams() {
  const path: { params: { programName: string } }[] = [];
  Object.entries(programs).forEach(([, value]) => {
    path.unshift(value.path);
  });

  return path;
}

type Keys = keyof typeof programs;
export type Program = typeof programs[Keys];
