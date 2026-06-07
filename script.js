const header = document.querySelector(".site-header");
const contactModal = document.querySelector("[data-contact-modal]");
const contactOpenButtons = document.querySelectorAll("[data-contact-open]");
const contactCloseButtons = document.querySelectorAll("[data-contact-close]");
const copyButtons = document.querySelectorAll("[data-copy]");
const copyStatus = document.querySelector("[data-copy-status]");
const languageSelect = document.querySelector("#language-select");

const translations = {
  en: {
    documentTitle: "Hanbing (Flora) Zhao | FP&A and Finance Analytics",
    metaDescription:
      "Portfolio of Hanbing Flora Zhao, an FP&A professional working across budgeting, forecasting, profitability analysis, financial reporting, and workflow automation.",
    languageLabel: "Language",
    languageEnglish: "English",
    languageChinese: "Chinese",
    brand: "Hanbing Zhao",
    nav: ["Work", "Experience", "Skills", "Contact"],
    heroEyebrow: "FP&A Specialist | Finance & Business Analytics",
    heroTitle: "Turning financial data into clearer planning, profitability, and business decisions.",
    heroSummary:
      "I combine FP&A, profitability analysis, and reporting automation to improve financial visibility, monitor business drivers, and support operational and strategic decision-making.",
    previewResume: "Preview Resume",
    linkedin: "LinkedIn",
    contactMe: "Contact Me",
    aboutKicker: "About",
    aboutTitle: "Finance, analytics, and business context in one operating view.",
    aboutBody:
      "I am an FP&A professional with experience across manufacturing, financial services, and audit. My work focuses on budgeting, forecasting, financial reporting, variance analysis, profitability analysis, ERP reporting, and workflow automation.",
    strengths: [
      {
        title: "Financial Planning & Reporting",
        body: "Budgeting, forecasting, financial reporting, financial close, variance analysis, gross margin analysis, and profitability analysis.",
      },
      {
        title: "Reporting & Data Automation",
        body: "SAP and Oracle ERP, Excel Power Query automation, Power BI dashboards, data validation, and scalable reporting workflows.",
      },
      {
        title: "Business Process Improvement",
        body: "Operational reporting, management reporting, workflow automation, cross-functional collaboration, and process improvement.",
      },
    ],
    workKicker: "Career Journey",
    workTitle: "From Financial Data to Business Decisions",
    workBody:
      "My career has evolved from understanding how financial information is created and controlled, to analyzing business drivers, and ultimately supporting decision-making through FP&A and strategic finance.",
    projects: [
      {
        tag: "Foundation",
        title: "Understand Financial Data",
        body: "Started in audit, building a foundation in financial reporting, reconciliations, internal controls, and risk assessment.",
        impact: "KPMG · Financial Reporting & Controls",
      },
      {
        tag: "Analysis",
        title: "Analyze Business Drivers",
        body: "Applied operational analytics and forecasting to understand workflow patterns, volume drivers, and resource planning needs.",
        impact: "Swiss Re · Forecasting & Operational Analytics",
      },
      {
        tag: "Decision Support",
        title: "Influence Business Decisions",
        body: "Support FP&A, profitability analysis, and reporting automation to help management understand cost performance and operational outcomes.",
        impact: "Plumino · FP&A & Profitability Management",
      },
    ],
    experienceKicker: "Experience",
    experienceTitle: "From cost close and reporting to better management decisions.",
    experienceBody:
      "My experience spans manufacturing FP&A, operations finance, and audit, giving me a practical view of how financial data moves through close, reporting, analysis, controls, and planning.",
    roles: [
      {
        date: "February 2026 - Present",
        location: "Cape Girardeau, MO",
        title: "FP&A Specialist",
        body: "Perform weekly and monthly cost close activities in SAP, prepare cost sheets, P&L reports, gross margin analyses, and actual-versus-forecast variance analysis while partnering with production, quality, maintenance, and warehouse teams to improve product costing accuracy and reporting reliability.",
      },
      {
        date: "May 2025 - August 2025",
        location: "Kansas City, MO",
        title: "Operations & Finance Analysis Intern",
        body: "Built driver-based forecasting models for E&S Property operational volume, conducted adoption and usage analysis across U.S. and Canada business units, and analyzed SOP update workflows across reporting sources.",
      },
      {
        date: "October 2023 - April 2024",
        location: "Shenzhen, China",
        title: "Junior Auditor",
        body: "Supported financial statement audit procedures for IPO-stage and financial services clients, including walkthrough testing, reconciliation support, documentation review, analytical review, and internal control assessments.",
      },
    ],
    skillsKicker: "Skills",
    skillsTitle: "Tools and capabilities I use to make finance work clearer and more reliable.",
    skillHeadings: ["Finance & Accounting", "Data & Analytics", "Business Improvement"],
    skillTags: [
      [
        "Financial Close",
        "Financial Reporting",
        "Variance Analysis",
        "Budget Forecasting",
        "Account Reconciliation",
        "P&L Reporting",
        "Gross Margin Analysis",
        "Profitability Analysis",
      ],
      [
        "Excel",
        "Power Query",
        "Pivot Table",
        "XLOOKUP",
        "SUMIFS",
        "Power BI",
        "Tableau",
        "Python",
        "SAP",
        "Oracle ERP",
        "Dashboard Development",
        "Data Validation",
        "Reporting Automation",
      ],
      [
        "Workflow Automation",
        "Management Reporting",
        "KPI Tracking",
        "Operational Reporting",
        "Process Improvement",
        "Cross-functional Collaboration",
      ],
    ],
    educationKicker: "Education",
    educationTitle: "Business analytics foundation with strong academic performance.",
    education: [
      {
        date: "August 2024 - December 2025",
        location: "St. Louis, MO",
        school: "Washington University in St. Louis, Olin Business School",
        degree: "Master of Science in Business Analytics - Fintech",
        detail: "GPA: 3.82 / 4.00 | Beta Gamma Sigma | Charles F. Knight Scholar",
      },
      {
        date: "September 2019 - June 2023",
        location: "Guangzhou, China",
        school: "South China University of Technology",
        degree: "Bachelor of Management Science in Business Management",
        detail: "GPA: 3.81 / 4.00 | First-class Scholarship | Merit Student",
      },
    ],
    contactKicker: "Contact",
    contactTitle: "Let’s connect.",
    contactBody:
      "I am interested in opportunities where finance, analytics, and business operations come together to improve reporting, forecasting, and business decision-making.",
    linkedinProfile: "LinkedIn Profile",
    contactLabelEmail: "Email",
    contactLabelPhone: "Phone",
    copy: "Copy",
    copied: "Copied to clipboard.",
    footerName: "Hanbing (Flora) Zhao",
    backToTop: "Back to top",
  },
  zh: {
    documentTitle: "赵浛冰（Flora）| FP&A 与财务分析",
    metaDescription:
      "赵浛冰（Flora）的个人主页，展示 FP&A、预算预测、盈利能力分析、财务报告和流程自动化相关经历。",
    languageLabel: "语言",
    languageEnglish: "英文",
    languageChinese: "中文",
    brand: "赵浛冰",
    nav: ["职业路径", "工作经历", "技能", "联系"],
    heroEyebrow: "FP&A 专员 | 财务与商业分析",
    heroTitle: "将财务数据转化为更清晰的规划、盈利分析和业务决策。",
    heroSummary:
      "我结合 FP&A、盈利能力分析和报表自动化，提升财务可见度，追踪业务驱动因素，并支持运营和战略决策。",
    previewResume: "预览简历",
    linkedin: "领英",
    contactMe: "联系我",
    aboutKicker: "关于我",
    aboutTitle: "把财务、分析和业务背景放在同一个经营视角中。",
    aboutBody:
      "我是一名 FP&A 专业人士，拥有制造业、金融服务和审计相关经验。我的工作重点包括预算、预测、财务报告、差异分析、盈利能力分析、ERP 报表和流程自动化。",
    strengths: [
      {
        title: "财务规划与报告",
        body: "预算、预测、财务报告、财务结账、差异分析、毛利分析和盈利能力分析。",
      },
      {
        title: "报表与数据自动化",
        body: "SAP、Oracle ERP、Excel Power Query 自动化、Power BI 仪表盘、数据验证和可扩展的报表流程。",
      },
      {
        title: "业务流程优化",
        body: "运营报告、管理报告、流程自动化、跨部门协作和流程改进。",
      },
    ],
    workKicker: "职业路径",
    workTitle: "从财务数据到业务决策",
    workBody:
      "我的职业路径从理解财务信息如何被生成和控制开始，逐步发展到分析业务驱动因素，并最终通过 FP&A 和战略财务支持业务决策。",
    projects: [
      {
        tag: "基础",
        title: "理解财务数据",
        body: "从审计起步，建立了财务报告、对账、内部控制和风险评估方面的基础。",
        impact: "KPMG · 财务报告与内控",
      },
      {
        tag: "分析",
        title: "分析业务驱动因素",
        body: "运用运营分析和预测方法，理解工作流模式、业务量驱动因素和资源规划需求。",
        impact: "Swiss Re · 预测与运营分析",
      },
      {
        tag: "决策支持",
        title: "影响业务决策",
        body: "通过 FP&A、盈利能力分析和报表自动化，帮助管理层理解成本表现和运营结果。",
        impact: "Plumino · FP&A 与盈利能力管理",
      },
    ],
    experienceKicker: "工作经历",
    experienceTitle: "从成本结账和财务报告，到更好的管理决策。",
    experienceBody:
      "我的经历涵盖制造业 FP&A、运营财务和审计，让我能够理解财务数据如何流经结账、报告、分析、控制和规划流程。",
    roles: [
      {
        date: "2026年2月 - 至今",
        location: "密苏里州开普吉拉多市",
        title: "FP&A 专员",
        body: "在 SAP 中执行每周和每月成本结账，准备成本表、P&L 报告、毛利分析和实际与预测差异分析；同时与生产、质量、维修和仓储团队合作，提升产品成本核算准确性和管理报告可靠性。",
      },
      {
        date: "2025年5月 - 2025年8月",
        location: "密苏里州堪萨斯城",
        title: "运营与财务分析实习生",
        body: "建立基于驱动因素的预测模型，预测 E&S Property 运营业务量；分析美国和加拿大业务单元的采用率与使用情况，并基于多个报告来源分析 SOP 更新工作流。",
      },
      {
        date: "2023年10月 - 2024年4月",
        location: "深圳，中国",
        title: "初级审计员",
        body: "为 IPO 阶段和金融服务客户支持财务报表审计程序，包括穿行测试、对账支持、底稿与支持文件审阅、分析性复核和内部控制评估。",
      },
    ],
    skillsKicker: "技能",
    skillsTitle: "让我把财务工作做得更清晰、更可靠的工具和能力。",
    skillHeadings: ["财务与会计", "数据与分析", "业务改进"],
    skillTags: [
      ["财务结账", "财务报告", "差异分析", "预算预测", "账户调节", "P&L 报告", "毛利分析", "盈利能力分析"],
      [
        "Excel",
        "Power Query",
        "数据透视表",
        "XLOOKUP",
        "SUMIFS",
        "Power BI",
        "Tableau",
        "Python",
        "SAP",
        "Oracle ERP",
        "仪表盘开发",
        "数据验证",
        "报表自动化",
      ],
      ["流程自动化", "管理报告", "KPI 追踪", "运营报告", "流程改进", "跨部门协作"],
    ],
    educationKicker: "教育经历",
    educationTitle: "扎实的商业分析基础与优秀的学术表现。",
    education: [
      {
        date: "2024年8月 - 2025年12月",
        location: "密苏里州圣路易斯市",
        school: "圣路易斯华盛顿大学 Olin 商学院",
        degree: "商业分析硕士 - 金融科技方向",
        detail: "GPA: 3.82 / 4.00 | Beta Gamma Sigma | Charles F. Knight Scholar",
      },
      {
        date: "2019年9月 - 2023年6月",
        location: "广州，中国",
        school: "华南理工大学",
        degree: "管理学学士 - 工商管理",
        detail: "GPA: 3.81 / 4.00 | 一等奖学金 | 优秀学生",
      },
    ],
    contactKicker: "联系",
    contactTitle: "欢迎联系。",
    contactBody: "我关注财务、分析与业务运营结合的机会，希望通过更好的报告、预测和业务洞察支持决策。",
    linkedinProfile: "领英主页",
    contactLabelEmail: "邮箱",
    contactLabelPhone: "电话",
    copy: "复制",
    copied: "已复制到剪贴板。",
    footerName: "赵浛冰（Flora）",
    backToTop: "回到顶部",
  },
};

const getStoredLanguage = () => {
  try {
    return localStorage.getItem("preferredLanguage") || "en";
  } catch {
    return "en";
  }
};

const storeLanguage = (language) => {
  try {
    localStorage.setItem("preferredLanguage", language);
  } catch {
    // Language switching still works even when browser storage is unavailable.
  }
};

let currentLanguage = getStoredLanguage();

const setText = (selector, value) => {
  const element = document.querySelector(selector);
  if (element && value !== undefined) {
    element.textContent = value;
  }
};

const setTexts = (selector, values) => {
  document.querySelectorAll(selector).forEach((element, index) => {
    if (values[index] !== undefined) {
      element.textContent = values[index];
    }
  });
};

const setMetaDescription = (value) => {
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute("content", value);
  }
};

const applyLanguage = (language) => {
  const normalizedLanguage = translations[language] ? language : "en";
  const text = translations[normalizedLanguage];
  currentLanguage = normalizedLanguage;
  storeLanguage(normalizedLanguage);
  document.documentElement.lang = normalizedLanguage === "zh" ? "zh-CN" : "en";
  document.title = text.documentTitle;
  setMetaDescription(text.metaDescription);

  if (languageSelect) {
    languageSelect.value = normalizedLanguage;
    languageSelect.setAttribute("aria-label", text.languageLabel);
  }

  setText(".brand span:last-child", text.brand);
  setText(".language-control label", text.languageLabel);
  setTexts("#language-select option", [text.languageEnglish, text.languageChinese]);
  setTexts(".nav-links a", text.nav);

  setText(".hero .eyebrow", text.heroEyebrow);
  setText(".hero h1", text.heroTitle);
  setText(".hero-summary", text.heroSummary);
  setText(".hero-actions .primary", text.previewResume);
  setText('.hero-actions a[href*="linkedin"]', text.linkedin);
  setText(".hero-actions [data-contact-open]", text.contactMe);

  setText(".intro .section-kicker", text.aboutKicker);
  setText(".intro h2", text.aboutTitle);
  setText(".intro > p", text.aboutBody);

  setTexts(
    ".strengths article h3",
    text.strengths.map((item) => item.title)
  );
  setTexts(
    ".strengths article p",
    text.strengths.map((item) => item.body)
  );

  setText("#work .section-kicker", text.workKicker);
  setText("#work h2", text.workTitle);
  setText("#work .section-heading > p:last-child", text.workBody);
  setTexts(
    "#work .project-tag",
    text.projects.map((item) => item.tag)
  );
  setTexts(
    "#work .project h3",
    text.projects.map((item) => item.title)
  );
  setTexts(
    "#work .project > p",
    text.projects.map((item) => item.body)
  );
  setTexts(
    "#work .impact",
    text.projects.map((item) => item.impact)
  );

  setText("#experience .section-kicker", text.experienceKicker);
  setText("#experience h2", text.experienceTitle);
  setText("#experience .section-heading > p:last-child", text.experienceBody);
  document.querySelectorAll("#experience .role").forEach((role, index) => {
    const roleText = text.roles[index];
    if (!roleText) {
      return;
    }

    setText(`#experience .role:nth-child(${index + 1}) .role-meta span:first-child`, roleText.date);
    setText(`#experience .role:nth-child(${index + 1}) .role-meta span:last-child`, roleText.location);
    setText(`#experience .role:nth-child(${index + 1}) h3`, roleText.title);
    const description = role.querySelector("p:last-child");
    if (description) {
      description.textContent = roleText.body;
    }
  });

  setText("#skills .section-kicker", text.skillsKicker);
  setText("#skills h2", text.skillsTitle);
  setTexts("#skills .skills-grid h3", text.skillHeadings);
  document.querySelectorAll("#skills .skill-tags").forEach((group, groupIndex) => {
    group.querySelectorAll("span").forEach((tag, tagIndex) => {
      const tagText = text.skillTags[groupIndex]?.[tagIndex];
      if (tagText !== undefined) {
        tag.textContent = tagText;
      }
    });
  });

  setText(".education-section .section-kicker", text.educationKicker);
  setText(".education-section h2", text.educationTitle);
  document.querySelectorAll(".education-grid article").forEach((school, index) => {
    const schoolText = text.education[index];
    if (!schoolText) {
      return;
    }

    const meta = school.querySelectorAll(".role-meta span");
    if (meta[0]) {
      meta[0].textContent = schoolText.date;
    }
    if (meta[1]) {
      meta[1].textContent = schoolText.location;
    }
    setText(`.education-grid article:nth-child(${index + 1}) h3`, schoolText.school);
    const details = school.querySelectorAll("p");
    if (details[0]) {
      details[0].textContent = schoolText.degree;
    }
    if (details[1]) {
      details[1].textContent = schoolText.detail;
    }
  });

  setText("#contact .section-kicker", text.contactKicker);
  setText("#contact h2", text.contactTitle);
  setText("#contact > div:first-child > p:last-child", text.contactBody);
  setText('#contact .contact-actions a[href*="linkedin"]', text.linkedinProfile);

  setText(".contact-dialog .section-kicker", text.contactKicker);
  setText(".contact-dialog h2", text.contactMe);
  setTexts(".contact-dialog .contact-label", [text.contactLabelEmail, text.contactLabelPhone]);
  setTexts(".contact-dialog .copy-button", [text.copy, text.copy]);
  setText("footer p", text.footerName);
  setText("footer a", text.backToTop);
};

const updateHeader = () => {
  if (window.scrollY > 12) {
    header?.classList.add("is-scrolled");
  } else {
    header?.classList.remove("is-scrolled");
  }
};

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

const openContactModal = () => {
  if (copyStatus) {
    copyStatus.textContent = "";
  }

  if (contactModal?.showModal && !contactModal.open) {
    contactModal.showModal();
  }
};

const closeContactModal = () => {
  if (contactModal?.open) {
    contactModal.close();
  }
};

contactOpenButtons.forEach((button) => {
  button.addEventListener("click", openContactModal);
});

contactCloseButtons.forEach((button) => {
  button.addEventListener("click", closeContactModal);
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && contactModal?.open) {
    closeContactModal();
  }
});

contactModal?.addEventListener("click", (event) => {
  if (event.target === contactModal) {
    closeContactModal();
  }
});

copyButtons.forEach((button) => {
  button.addEventListener("click", async () => {
    const value = button.dataset.copy;

    try {
      await navigator.clipboard.writeText(value);
      copyStatus.textContent = translations[currentLanguage]?.copied || translations.en.copied;
    } catch {
      copyStatus.textContent = value;
    }
  });
});

languageSelect?.addEventListener("change", (event) => {
  applyLanguage(event.target.value);
});

applyLanguage(currentLanguage);
