import { MENUTYPE } from "@/constants/menuList";
import { SECTIONBLOCK } from "@/constants/sectionsList";

// Define the initial state using that type
export const initialState = {
  homePageData: {
    heading: "We Care Your any IT Solution",
    description:
      "Proactively coordinate quality quality vectors vis-a-vis supply chains. Quickly engage client-centric web services.",
    featureImage: "",
    actionButton: {
      title: "Learn More",
      href: "/#whoweare",
    },
    keyStrategy: [
      {
        shortTitle: "24/7 Support",
        description: "Nunc molestie tellus sapien, quis laoreet orci.",
        iconBgColor: "colorPrimary",
        mdIcon: "shield",
      },
      {
        shortTitle: "Take Ownership",
        description: "Nunc molestie tellus sapien, quis laoreet orci.",
        iconBgColor: "colorWarning",
        mdIcon: "extension",
      },
      {
        shortTitle: "Team Work",
        description: "Nunc molestie tellus sapien, quis laoreet orci.",
        iconBgColor: "colorError",
        mdIcon: "diversity_3",
      },
    ],
    sectionsIncluded:[
      SECTIONBLOCK.WHOWEARE,
      SECTIONBLOCK.COMPANYVISION,
      SECTIONBLOCK.INSIGHT,
      SECTIONBLOCK.WHATWEBUILD,
      SECTIONBLOCK.SERVICESWEPROVIDE,
      SECTIONBLOCK.PRICING,
      SECTIONBLOCK.TESTIMONIAL,
      SECTIONBLOCK.OURTEAM,
      SECTIONBLOCK.FAQS,
      SECTIONBLOCK.CONTACTUS
    ],
  },
  siteSettings: {
    siteName: "Binary Development Studios",
    themeSettings: null,
    copyrightText: "© LandingPage. Design By Binary Dev Studios",
    logo: "/images/logos/LCK_Aayam_Logo.png",
    favicon: "",
    defaultSeo: null,
    logoWhite: "/images/logos/LCK_Aayam_Logo.png",
  },
  contactSettings: {
    id: 1,
    phoneNumber: "01-9840096080",
    location: " 3179 Raccoon Run Seattle, WA 98109",
    email: "youremailid@gmail.com",
    embededMapSrcHref:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d38518.2609239016!2d85.37668103268217!3d27.630051037034136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19d1be9baf71%3A0x48893d580864792f!2sPatan%20Hospital!5e0!3m2!1sen!2snp!4v1657716409338!5m2!1sen!2snp",
    socialLinks: {
      id: 1,
      facebookLink: "https://www.facebook.com/pravin.karki.98",
      instagramLink: "#",
      twitterLink: "#",
    },
  },
  header:{
  },

  footer:{
    showCopyRightText:true,
  },

  menus:{
    [MENUTYPE.HEADER_MENU]:{
      menuItems:[
        {
          label:'Home',
          key:'Home',
          href:'/#home'
        },
        {
          label:'About',
          key:SECTIONBLOCK.WHOWEARE,
          href:'/#whoweare'
        },
        {
          label:'Services',
          key:SECTIONBLOCK.SERVICESWEPROVIDE,
          href:'/#ourservices'
        },
        {
          label:'Pricing',
          key:SECTIONBLOCK.PRICING,
          href:'/#pricing'
        },
        {
          label:'Testimonial',
          key:SECTIONBLOCK.TESTIMONIAL,
          href:'/#testimonials'
        },
        {
          label:'Our Team',
          key:SECTIONBLOCK.OURTEAM,
          href:'/#our-team'
        },
        {
          label:'Faqs',
          key:SECTIONBLOCK.FAQS,
          href:'/#faqs'
        },
        {
          label:'Contact Us',
          key:SECTIONBLOCK.CONTACTUS,
          href:'/#contact-us'
        }
      ],
      lastButtonConfig:{
        show:true,
        label:'Get Started',
        key:'/#lastButton',
        href:'/#contact-us'
      },

    },
    [MENUTYPE.FOOTER_MENU]:{
      supportMenuItems:[
        {
          label:'Contact us',
          key:SECTIONBLOCK.CONTACTUS,
          href:'/#contact-us'
        },
        {
          label:'About us',
          key:SECTIONBLOCK.WHOWEARE,
          href:'/#whoweare'
        },
        {
          label:'Faqs',
          key:SECTIONBLOCK.FAQS,
          href:'/#faqs'
        }
      ],
      quickLinksMenuItems:[
        {
          label:'Terms & Conditions',
          key:'Terms & Conditions',
          href:'/#termsandconditions'
        },
        {
          label:'Privacy & Policy',
          key:'Privacy & Policy',
          href:'/#privacyandpolicy'
        },
        {
          label:'Services',
          key:SECTIONBLOCK.SERVICESWEPROVIDE,
          href:'/#ourservices'
        },
        {
          label:'Pricing',
          key:SECTIONBLOCK.PRICING,
          href:'/#pricing'
        }
      ]

    }
  },

  sectionsSettings: {
    title: "Section Data",
    [SECTIONBLOCK.WHOWEARE]: {
      title: "WHO WE ARE",
      heading: "We specialize in UI/UX, web development, digital marketing.",
      description:
        "It is a long established fact that a reader will be distracted by the readable content",
      keyPoints: "Vivamus ac elementum urna,Feugiat metus suscipiti.",
      display: true,
      htmlId: "whoweare",
      menuName:"",
      sectionImage: "/images/mega-creator.png",
      actionButton: {
        id: 5,
        title: "Get In Touch",
        href: "/#about",
      },
    },
    [SECTIONBLOCK.COMPANYVISION]: {
      title: "COMPANY'S VISION",
      heading: "The story behind how our company was founded",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit eque ipsum odio justo amet urna auctor. At congue vulputate augue praesent mauris eu posuere pretium tellus. Viverra volutpat a est quis egestas id risus cursus venenatis.",
      display: true,
      htmlId: 'companyvision',
      sectionImage: "/images/women.png",
      actionButton: {
        id: 6,
        title: "Read More Story",
        href: "/#about",
      },
    },
    [SECTIONBLOCK.INSIGHT]: {
      title: "INSIGHT",
      heading: "Insight that drives change",
      description:
        "It is a long established fact that a reader will be distracted by the readable content",
      display: true,
      htmlId: "companyvision",
      sectionImage: "/images/insight.png",
      actionButton: {
        id: 7,
        title: "See Our Services",
        href: "/#ourservices",
      },
      dataSource: [
        {
          id: 1,
          count: "98",
          prefix: null,
          suffix: "%",
          title: "Private Office",
        },
        {
          id: 2,
          count: "20",
          prefix: null,
          suffix: "M+",
          title: "Coworking Desks",
        },
        {
          id: 3,
          count: "100",
          prefix: null,
          suffix: "K+",
          title: "Meeting Rooms",
        },
        {
          id: 4,
          count: "55",
          prefix: null,
          suffix: "%",
          title: "Meeting Rooms",
        },
      ],
    },
    [SECTIONBLOCK.WHATWEBUILD]: {
      heading: "We Build any Kind Of <br/> Technology",
      description:
        "Credibly grow premier ideas rather than bricks-and-clicks strategic theme areas distributed for stand-alone web-readiness.",
      display: true,
      htmlId: "whatwebuild",
      technologies: [
        {
          id: 1,
          title: "Web Design",
          contentTitle: "We are working with 15 years exprience",
          contentDescription:
            "Credibly grow premier ideas rather than bricks-and-clicks strategic theme areas distributed for stand-alone web-readiness.",
          contentKeyPoints: "Digital Conferance,Great Speak,Event Mangement",
          mdIcon: "laptop_mac",
          contentImage: "",
        },
        {
          id: 2,
          title: "App Development",
          contentTitle: "Automation Power",
          contentDescription:
            "Continually network effective bandwidth whereas goal-oriented schemas. Intrinsicly incentivize corporate synergy with accurate task bricks-and-clicks leadership skills.",
          contentKeyPoints: "Digital Conferance,Great Speak,Event Mangement",
          mdIcon: "phone_android",
          contentImage: "",
        },
        {
          id: 3,
          title: "UX/UI Design",
          contentTitle: "Advanced Technology",
          contentDescription:
            "Continually network effective bandwidth whereas goal-oriented schemas. Intrinsicly incentivize corporate synergy with accurate task bricks-and-clicks leadership skills.",
          contentKeyPoints: "Digital Conferance,Great Speak,Event Mangement",
          mdIcon: "grid_view",
          contentImage: "",
        },
      ],
    },
    [SECTIONBLOCK.SERVICESWEPROVIDE]: {
      id: 1,
      heading: "Services We Provide",
      description:
        "Credibly grow premier ideas rather than bricks-and-clicks strategic theme areas distributed for stand-alone web-readiness.",
      display: true,
      htmlId: "ourservices",
      services: [],
    },
    [SECTIONBLOCK.FAQS]: {
      id: 1,
      heading: "Do you have any question ?",
      description:
        "Credibly grow premier ideas rather than bricks-and-clicks strategic theme areas distributed for stand-alone web-readiness.",
      display: true,
      htmlId: "faqs",
      faqs: [],
    },
    [SECTIONBLOCK.TESTIMONIAL]: {
      id: 1,
      title:'',
      heading: "What People Says About Us ?",
      description:
        "Credibly grow premier ideas rather than bricks-and-clicks strategic theme areas distributed for stand-alone web-readiness.",
      display: true,
      htmlId: "testimonials",
      testimonials: [],
    },
    [SECTIONBLOCK.OURTEAM]: {
      id: 1,
      heading: "Meet Our Team",
      description:
        "",
      display: true,
      htmlId: "our-team",
      teamMembers: [],
    },
    [SECTIONBLOCK.CONTACTUS]: {
      id: 1,
      title: "GET IN TOUCH",
      description: null,
      display: true,
      htmlId: "contact-us",
    },
  },
  services: [
    {
      id: 1,
      title: "Web Development",
      shortDescription:
        "There are many variations of the passages of Lorem Ipsum is an available the done.",
      contentBody: null,
      image: "/images/general/coding.png",
    },
    {
      id: 2,
      title: "App Development",
      shortDescription:
        "There are many variations of the passages of Lorem Ipsum is an available the done",
      contentBody: null,
      image: "/images/general/coding.png",
    },
    {
      id: 3,
      title: "Web Development",
      shortDescription:
        "There are many variations of the passages of Lorem Ipsum is an available the done",
      contentBody: null,
      image: "/images/general/coding.png",
    },
    {
      id: 4,
      title: "Web Development",
      shortDescription:
        "There are many variations of the passages of Lorem Ipsum is an available the done",
      contentBody: null,
      image: "/images/general/coding.png",
    },
    {
      id: 5,
      title: "Web Development",
      shortDescription:
        "There are many variations of the passages of Lorem Ipsum is an available the done",
      contentBody: null,
      image: "/images/general/coding.png",
    },
    {
      id: 6,
      title: "Web Development",
      shortDescription:
        "There are many variations of the passages of Lorem Ipsum is an available the done",
      contentBody: null,
      image: "/images/general/coding.png",
    },
  ],
  faqs: [
    {
      id: 1,
      question: "This is panel header 1",
      answer:
        "A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.",
      active: true,
      pin: null,
      order: null,
    },
    {
      id: 2,
      question: "This is panel header 2",
      answer:
        "A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.",
      active: true,
      pin: null,
      order: null,
    },
    {
      id: 3,
      question: "This is panel header 3",
      answer:
        "A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.",
      active: true,
      pin: null,
      order: null,
    },
    {
      id: 4,
      question: "This is panel header 4",
      answer:
        "A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.",
      active: true,
      pin: null,
      order: null,
    },
    {
      id: 5,
      question: "This is panel header 5",
      answer:
        "A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.",
      active: true,
      pin: null,
      order: null,
    },
    {
      id: 6,
      question: "This is panel header 6",
      answer:
        "A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.",
      active: true,
      pin: null,
      order: null,
    },
    {
      id: 7,
      question: "This is panel header 7",
      answer:
        "A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.",
      active: true,
      pin: null,
      order: null,
    },
    {
      id: 8,
      question: "This is panel header 8",
      answer:
        "A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.",
      active: true,
      pin: null,
      order: null,
    },
    {
      id: 9,
      question: "This is panel header 9",
      answer:
        "A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.",
      active: true,
      pin: null,
      order: null,
    },
  ],
  testimonials:[
    {
      name: "Prabin Karki",
      designation: "Sr. Software Developer",
      message: ` Lorem Ipsum is simply dummy text of the printing and
      typesetting industry. Lorem Ipsum has been the industry's
      standard dummy text ever since the.`,
      avatar: {
        url: "http://www.webcoderskull.com/img/team2.png",
      },
    },
    {
      name: "Jarina Karki",
      designation: "Web Developer",
      message: `Nisi Lorem fugiat ullamco occaecat elit Lorem labore ipsum. Quis culpa irure laborum amet. Voluptate ipsum officia Lorem velit aliquip. Reprehenderit et laborum consectetur occaecat quis.
                Mollit velit aliqua officia excepteur dolore nisi minim exercitation culpa aliquip in ad in duis. Dolor ea dolore
                nostrud laboris proident velit aute velit. Occaecat sunt eu enim dolor sint qui nulla culpa adipisicing sint.`,
      avatar: {
        url: "http://www.webcoderskull.com/img/team3.png",
      },
    },
    {
      name: "Milan Shrestha",
      designation: "Sr. Software Developer",
      message: `Cupidatat nostrud in quis ad consectetur deserunt aliquip pariatur laborum laborum. Commodo cupidatat pariatur ea in officia cillum. Laborum aliquip labore esse labore consequat eiusmod ullamco voluptate dolore nisi commodo nisi. Ut ea duis in qui do proident incididunt. Amet proident commodo nulla duis incididunt excepteur aliquip. Magna qui aliqua ipsum magna fugiat consectetur qui sint excepteur. Dolor sit et irure velit nulla non ex aute et voluptate elit.
                Consectetur excepteur sit eu nulla ipsum labore exercitation laborum veniam. Non voluptate laboris ipsum cupidatat occaecat. Ad aliqua dolore ullamco id id nostrud.
                Adipisicing proident ad excepteur ea eiusmod aute minim dolore qui pariatur elit. Consectetur
                commodo dolore dolore adipisicing consequat ullamco aliqua eu eiusmod nostrud fugiat commodo.`,
      avatar: {
        url: "http://www.webcoderskull.com/img/team4.png",
      },
    },
    {
      name: "Ramesh Nagal",
      designation: "Sr. Software Developer",
      message: `Ad mollit aliqua eiusmod id ea. Laborum sunt ex fugiat incididunt dolor commodo. Id sint commodo irure tempor Lorem culpa velit duis quis occaecat eiusmod fugiat.
                Ad esse elit officia qui ea eiusmod. Sunt culpa cillum deserunt aliqua commodo laboris non sunt id deserunt occaecat nisi anim. Ullamco est magna et consectetur incididunt
                in aute sunt eu culpa incididunt nostrud id. Enim ea sunt nostrud quis ex consequat ad ut ipsum irure duis veniam minim.
                Dolor consectetur incididunt exercitation culpa nulla.`,
      avatar: {
        url: "http://www.webcoderskull.com/img/team2.png",
      },
    },
  ],
  teamMembers:[
    {
      name: "Prabin Karki",
      designation: "Sr. Software Developer",
      message: ` Lorem Ipsum is simply dummy text of the printing and
      typesetting industry. Lorem Ipsum has been the industry's
      standard dummy text ever since the.`,
      imgUrl:
        "https://drive.google.com/uc?export=view&id=1E3aUYBe0ZP1_pw3WF9u-SYbifi30wRTd",
      facebookLink: "#",
      twitterLink: "#",
      instagramLink: "#",
      portfolio: "#",
    },
    {
      name: "Jarina Karki",
      designation: "Web Developer",
      message: `Nisi Lorem fugiat ullamco occaecat elit Lorem labore ipsum. Quis culpa irure laborum amet. Voluptate ipsum officia Lorem velit aliquip. Reprehenderit et laborum consectetur occaecat quis.
                Mollit velit aliqua officia excepteur dolore nisi minim exercitation culpa aliquip in ad in duis. Dolor ea dolore
                nostrud laboris proident velit aute velit. Occaecat sunt eu enim dolor sint qui nulla culpa adipisicing sint.`,
      imgUrl: "http://www.webcoderskull.com/img/team3.png",
      facebookLink: "#",
      twitterLink: "#",
      instagramLink: "#",
      portfolio: "#",
    },
    {
      name: "Milan Shrestha",
      designation: "Sr. Software Developer",
      message: `Cupidatat nostrud in quis ad consectetur deserunt aliquip pariatur laborum laborum. Commodo cupidatat pariatur ea in officia cillum. Laborum aliquip labore esse labore consequat eiusmod ullamco voluptate dolore nisi commodo nisi. Ut ea duis in qui do proident incididunt. Amet proident commodo nulla duis incididunt excepteur aliquip. Magna qui aliqua ipsum magna fugiat consectetur qui sint excepteur. Dolor sit et irure velit nulla non ex aute et voluptate elit.
                Consectetur excepteur sit eu nulla ipsum labore exercitation laborum veniam. Non voluptate laboris ipsum cupidatat occaecat. Ad aliqua dolore ullamco id id nostrud.
                Adipisicing proident ad excepteur ea eiusmod aute minim dolore qui pariatur elit. Consectetur
                commodo dolore dolore adipisicing consequat ullamco aliqua eu eiusmod nostrud fugiat commodo.`,
      imgUrl: "http://www.webcoderskull.com/img/team4.png",
      facebookLink: "#",
      twitterLink: "#",
      instagramLink: "#",
      portfolio: "#",
    },
    {
      name: "Ramesh Nagal",
      designation: "Sr. Software Developer",
      message: `Ad mollit aliqua eiusmod id ea. Laborum sunt ex fugiat incididunt dolor commodo. Id sint commodo irure tempor Lorem culpa velit duis quis occaecat eiusmod fugiat.
                Ad esse elit officia qui ea eiusmod. Sunt culpa cillum deserunt aliqua commodo laboris non sunt id deserunt occaecat nisi anim. Ullamco est magna et consectetur incididunt
                in aute sunt eu culpa incididunt nostrud id. Enim ea sunt nostrud quis ex consequat ad ut ipsum irure duis veniam minim.
                Dolor consectetur incididunt exercitation culpa nulla.`,
      imgUrl: "http://www.webcoderskull.com/img/team2.png",
      facebookLink: "#",
      twitterLink: "#",
      instagramLink: "#",
      portfolio: "#",
    },
  ]
};
