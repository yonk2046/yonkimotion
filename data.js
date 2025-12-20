// ===================================
// 個人資訊
// ===================================
const profileData = {
  name: "Fan Chuang",
  title: "Motion Designer / Interaction Design",
  bio: "I'm a MOTION Graphic DESIGNER +++ I focus in Motion Design>>> and {INTERACTIVE design++} with different platforms.<br>Currently BASE in Taipei, Taiwan.",
  showreelVideo: "videos/showreel-2021.mp4",
profileImage: "images/profolio.jpg" 
};

// ===================================
// 聯絡資訊 (Footer 用)
// ===================================
const contactData = {
  email: "yonkidesign@gmail.com",
  phone: e: "+886 928-015-161,
  instagram: "@tbd",
  linkedin: "linkedin.com/in/fanchuang",
  behance: e: "----
};

// ===================================
// 專案列表
// ===================================
const projects = [
  {
    // 專案 ID (用於 URL,不要有空格或特殊符號)
    id: "motion-design-brand",
    
    // ===== 首頁顯示用 =====
    thumbnailImage: "images/thumbnails/project1-thumb.jpg",
    previewGif: "images/thumbnails/project1-preview.gif", // 或用 video
    homeTitle: "MOTION DESIGN",
    homeSubtitle: "Interactive experience for brand identity",
    
    // ===== 專案詳細頁內容 =====
    detailPage: {
      // 基本資訊
      title: "Brand Identity Motion Design",
      subtitle: "Creating dynamic visual language for modern brands",
      year: "2024",
      client: "ABC Company",
      role: "Motion Designer, Art Director",
      duration: "3 months",
      
      // 主要影片
      mainVideo: "videos/projects/project1/main-video.mp4",
      
      // 專案描述
      description: `
        This project focused on creating a comprehensive motion identity system 
        for a tech startup. The goal was to establish a unique visual language 
        that could be applied across all digital touchpoints.
        
        We developed a flexible system of animated elements, transitions, 
        and micro-interactions that work together to create a cohesive brand experience.
      `,
      
      // 專案標籤
      tags: ["Motion Design", "Brand Identity", "Animation", "UI/UX"],
      
      // 照片集 (可以放很多張)
      photos: [
        {
          src: "images/projects/project1/photo1.jpg",
          caption: "Logo animation sequence"
        },
        {
          src: "images/projects/project1/photo2.jpg",
          caption: "Color system exploration"
        },
        {
          src: "images/projects/project1/photo3.jpg",
          caption: "Typography in motion"
        }
      ],
      
      // 額外影片 (如果有多個影片)
      additionalVideos: [
        {
          src: "videos/projects/project1/extra-video1.mp4",
          title: "Process Video",
          description: "Behind the scenes look at our design process"
        }
      ],
      
      // 工具/技術
      tools: ["After Effects", "Cinema 4D", "Figma", "Premiere Pro"]
    }
  },
  
  {
    id: "ui-animation-mobile",
    thumbnailImage: "images/thumbnails/project2-thumb.jpg",
    previewGif: "images/thumbnails/project2-preview.gif",
    homeTitle: "UI ANIMATION",
    homeSubtitle: "Mobile app transitions and interactions",
    
    detailPage: {
      title: "Mobile App UI Animation System",
      subtitle: "Smooth transitions for enhanced user experience",
      year: "2023",
      client: "XYZ App",
      role: "UI Animator",
      duration: "2 months",
      
      mainVideo: "videos/projects/project2/main-video.mp4",
      
      description: `
        Designed and animated a complete set of UI transitions for a mobile 
        banking application. Focus on creating intuitive, delightful interactions 
        that guide users through complex financial tasks.
      `,
      
      tags: ["UI Animation", "Mobile Design", "Prototyping"],
      
      photos: [
        {
          src: "images/projects/project2/photo1.jpg",
          caption: "Home screen animations"
        },
        {
          src: "images/projects/project2/photo2.jpg",
          caption: "Transaction flow"
        }
      ],
      
      tools: ["Principle", "After Effects", "Lottie"]
    }
  },
  
  {
    id: "3d-animation-product",
    thumbnailImage: "images/thumbnails/project3-thumb.jpg",
    previewGif: "images/thumbnails/project3-preview.gif",
    homeTitle: "3D ANIMATION",
    homeSubtitle: "Product visualization and storytelling",
    
    detailPage: {
      title: "3D Product Visualization",
      subtitle: "Bringing products to life through animation",
      year: "2024",
      client: "Tech Brand",
      role: "3D Animator",
      duration: "4 months",
      
      mainVideo: "videos/projects/project3/main-video.mp4",
      
      description: `
        Created photorealistic 3D product animations for marketing campaigns.
        Focused on showcasing product features through dynamic camera movements
        and lighting techniques.
      `,
      
      tags: ["3D Animation", "Product Visualization", "Rendering"],
      
      photos: [
        {
          src: "images/projects/project3/photo1.jpg",
          caption: "Product showcase"
        }
      ],
      
      tools: ["Cinema 4D", "Octane Render", "After Effects"]
    }
  },
  
  {
    id: "motion-identity-system",
    thumbnailImage: "images/thumbnails/project4-thumb.jpg",
    previewGif: "images/thumbnails/project4-preview.gif",
    homeTitle: "MOTION IDENTITY",
    homeSubtitle: "Brand motion system development",
    
    detailPage: {
      title: "Corporate Motion Identity System",
      subtitle: "Systematic approach to brand animation",
      year: "2023",
      client: "Global Corp",
      role: "Lead Motion Designer",
      duration: "5 months",
      
      mainVideo: "videos/projects/project4/main-video.mp4",
      description: "Comprehensive motion design system for corporate brand...",
      tags: ["Brand Identity", "Motion System", "Guidelines"],
      photos: [],
      tools: ["After Effects", "Illustrator"]
    }
  },
  
  {
    id: "interactive-web-design",
    thumbnailImage: "images/thumbnails/project5-thumb.jpg",
    previewGif: "images/thumbnails/project5-preview.gif",
    homeTitle: "INTERACTIVE DESIGN",
    homeSubtitle: "Web-based user experiences",
    
    detailPage: {
      title: "Interactive Web Experience",
      subtitle: "Pushing the boundaries of web design",
      year: "2024",
      client: "Creative Agency",
      role: "Interactive Designer",
      duration: "3 months",
      
      mainVideo: "videos/projects/project5/main-video.mp4",
      description: "Award-winning interactive website with advanced animations...",
      tags: ["Web Design", "Interactive", "WebGL"],
      photos: [],
      tools: ["Three.js", "GSAP", "WebGL"]
    }
  },
  
  {
    id: "title-sequence-film",
    thumbnailImage: "images/thumbnails/project6-thumb.jpg",
    previewGif: "images/thumbnails/project6-preview.gif",
    homeTitle: "TITLE SEQUENCE",
    homeSubtitle: "Film opening credits animation",
    
    detailPage: {
      title: "Film Title Sequence",
      subtitle: "Cinematic opening for independent film",
      year: "2023",
      client: "Independent Film",
      role: "Title Designer",
      duration: "2 months",
      
      mainVideo: "videos/projects/project6/main-video.mp4",
      description: "Atmospheric title sequence that sets the tone for the film...",
      tags: ["Title Design", "Cinema", "Typography"],
      photos: [],
      tools: ["After Effects", "Cinema 4D", "Premiere Pro"]
    }
  }
];

// ===================================
// 輔助函數 - 根據 ID 找專案
// ===================================
function getProjectById(projectId) {
  return projects.find(project => project.id === projectId);
}

// ===================================
// 輔助函數 - 取得所有專案 (首頁用)
// ===================================
function getAllProjects() {
  return projects;
}
