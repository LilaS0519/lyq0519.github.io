// AI知识库网站结构描述

// 网站基本信息
site {
    name: "AI知识库"
    author: "李运其"
    version: "1.0"
    lastUpdate: "2024-12-24"
    description: "个人AI学习笔记与资源分享平台"
}

// 页面结构
pages {
    // 主页
    index {
        path: "/index.html"
        title: "AI知识库 - 个人学习笔记"
        sections: [
            {
                type: "hero"
                content: {
                    title: "欢迎来到 AI 知识库"
                    description: "这里收录了我在学习和实践人工智能过程中的笔记、心得和资源分享"
                }
            },
            {
                type: "navigation"
                items: [
                    {
                        title: "内容分类"
                        icon: "folder"
                        link: "categories.html"
                    },
                    {
                        title: "最新更新"
                        icon: "clock"
                        link: "updates.html"
                    },
                    {
                        title: "关于本站"
                        icon: "user"
                        link: "about.html"
                    }
                ]
            },
            {
                type: "categories"
                items: [
                    {
                        title: "AI理论基础"
                        icon: "brain"
                        links: [
                            {
                                title: "机器学习基础"
                                url: "machine-learning.html"
                            },
                            {
                                title: "深度学习原理详解：神经网络基础"
                                url: "api.html"
                            }
                        ]
                    },
                    {
                        title: "学习资源"
                        icon: "book"
                        links: [
                            {
                                title: "精选课程推荐"
                                url: "courses.html"
                            },
                            {
                                title: "技术书籍导读"
                                url: "book.html"
                            }
                        ]
                    }
                ]
            }
        ]
    }

    // 机器学习基础页面
    machineLearning {
        path: "/machine-learning.html"
        title: "机器学习基础 - AI知识库"
        sections: [
            {
                title: "数学基础"
                topics: [
                    "线性代数",
                    "微积分",
                    "概率与统计",
                    "优化理论"
                ]
            },
            {
                title: "编程基础"
                topics: [
                    "Python",
                    "数据处理与分析",
                    "算法和数据结构"
                ]
            },
            {
                title: "机器学习基础"
                topics: [
                    "监督学习",
                    "无监督学习",
                    "强化学习",
                    "模型评估"
                ]
            },
            {
                title: "深度学习基础"
                topics: [
                    "人工神经网络（ANN）",
                    "卷积神经网络（CNN）",
                    "循环神经网络（RNN）",
                    "生成模型"
                ]
            },
            {
                title: "数据科学与特征工程"
                topics: [
                    "数据预处理",
                    "特征工程",
                    "数据增强"
                ]
            },
            {
                title: "常用框架与工具"
                topics: [
                    "TensorFlow和PyTorch",
                    "Keras",
                    "Scikit-learn",
                    "Jupyter Notebook"
                ]
            },
            {
                title: "计算机视觉与自然语言处理"
                topics: [
                    "计算机视觉",
                    "自然语言处理"
                ]
            },
            {
                title: "AI理论与伦理"
                topics: [
                    "AI伦理",
                    "可解释性AI",
                    "AI与自动化"
                ]
            }
        ]
    }

    // 课程推荐页面
    courses {
        path: "/courses.html"
        title: "精选课程推荐 - AI知识库"
        courses: [
            {
                title: "Microsoft AI Course: Artificial Intelligence for Beginners"
                provider: "Microsoft"
                content: "从基础开始，逐步深入到神经网络和深度学习的复杂世界"
                features: "为初学者和希望巩固基础知识的人设计，通过微软的综合AI课程，可以初步了解AI的神奇之处"
                audience: "好奇心强的人，以及对AI如何改变世界感兴趣的人"
            },
            {
                title: "edX: AI Applications and Prompt Engineering"
                provider: "edX"
                content: "通过提示工程的基础知识，引导学习者创建自己的AI驱动应用"
                features: "入门课程，适合开发人员、创意人士以及对AI潜力充满好奇的人"
                audience: "无需一开始就成为AI专家，只需有好奇心和探索AI技术前沿的动力"
            },
            {
                title: "AWS: Foundations of Prompt Engineering"
                provider: "Amazon Web Services"
                content: "揭开与AI沟通的艺术和科学的神秘面纱，从基础开始，然后掌握高级提示技术"
                features: "了解提示工程的全程指南，深入探索释放AI真正潜力的高级技术"
                audience: "对语言、技术和创意交叉点感兴趣的人，包括开发人员、内容创作者等"
            },
            {
                title: "Google AI Courses"
                provider: "Google"
                content: "一系列精心设计的课程，旨在从AI新手到行家。涵盖机器学习、神经网络和驱动生成性AI的原理"
                features: "由科技巨头Google提供，循序渐进的方法旨在解密和启发"
                audience: "学生、想转入科技领域的专业人士，以及对AI充满好奇的人"
            }
        ]
    }

    // 分类页面
    categories {
        path: "/categories.html"
        title: "分类 - AI知识库"
        categories: [
            {
                title: "AI理论基础"
                icon: "brain"
                articles: [
                    {
                        title: "机器学习基础：AI学习完整指南"
                        url: "machine-learning.html"
                        date: "2024-12-24"
                        views: 328
                        description: "全面的AI学习指南，涵盖数学基础、编程基础、机器学习、深度学习、数据科学与框架工具、计算机视觉与自然语言处理、AI理论与伦理等八大核心领域"
                    },
                    {
                        title: "深度学习原理详解：神经网络基础"
                        url: "api.html"
                        date: "2024-12-24"
                        views: 256
                    }
                ]
            },
            {
                title: "学习资源"
                icon: "book"
                articles: [
                    {
                        title: "2024年AI学习路线图与课程推荐"
                        url: "courses.html"
                        date: "2024-03-20"
                        views: 423
                        description: "精选来自Microsoft、edX、AWS和Google的AI课程，涵盖从入门到进阶的完整学习路径，帮助你系统地掌握AI知识"
                    },
                    {
                        title: "必读的AI技术书籍清单"
                        url: "book.html"
                        date: "2024-12-24"
                        views: 367
                    }
                ]
            }
        ]
    }
}

// 样式定义
styles {
    colors {
        primary: "#3498db"
        secondary: "#2c3e50"
        background: "#f5f5f5"
        text: "#333"
        textLight: "#666"
    }
    
    fonts {
        main: "'PingFang SC', 'Microsoft YaHei', sans-serif"
        size: {
            base: "16px"
            title: "2.5rem"
            subtitle: "1.2rem"
            small: "0.9rem"
        }
    }
    
    layout {
        maxWidth: "1200px"
        padding: "2rem"
        borderRadius: "8px"
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
    }
}

// 组件定义
components {
    header {
        type: "navigation"
        logo: {
            icon: "robot"
            text: "AI知识库"
        }
        links: [
            {
                text: "首页"
                icon: "home"
                url: "index.html"
            },
            {
                text: "分类"
                icon: "folder"
                url: "categories.html"
            },
            {
                text: "更新"
                icon: "clock"
                url: "updates.html"
            },
            {
                text: "关于"
                icon: "user"
                url: "about.html"
            }
        ]
    }
    
    footer {
        copyright: "© 2024 AI知识库"
        links: [
            {
                text: "联系我"
                url: "#contact"
            },
            {
                text: "隐私政策"
                url: "#privacy"
            }
        ]
        lastUpdate: "2024-12-24"
    }
} 