---
permalink: /
title: ""
excerpt: "Fan Xu - Research Homepage"
author_profile: false
redirect_from: 
  - /about/
  - /about.html
layout: single
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

<!-- ================= GLOBAL STYLES ================= -->
<style>
  /* --- Apple Minimalist & Serif Academic Theme --- */
  :root {
    /* 核心色板 */
    --accent-color: #0071e3; /* Apple Blue (更有活力的科技蓝) */
    --accent-hover: #0077ed;
    --text-primary: #1d1d1f; /* Apple Black */
    --text-secondary: #86868b; /* Apple Grey */
    --bg-page: #fbfbfd; /* 极淡的灰白背景 */
    --bg-card: #ffffff;
    --border-light: rgba(0, 0, 0, 0.04); /* 极细微的边界 */
    --shadow-soft: 0 8px 30px rgba(0, 0, 0, 0.04); /* 弥散阴影 */
    --shadow-hover: 0 20px 40px rgba(0, 0, 0, 0.08);
    --radius-card: 16px;
    --radius-btn: 12px;
  }

  /* 基础重置 */
  body, h1, h2, h3, h4, h5, h6, p, div, span, li, a, strong, b, button {
    font-family: Georgia, 'Times New Roman', Times, serif !important;
    color: var(--text-primary);
    line-height: 1.65;
    -webkit-font-smoothing: antialiased; /* 让字体渲染更平滑 */
  }

  body {
    background-color: var(--bg-page);
  }

  .sidebar { display: none !important; }
  
  .page__content {
    width: 100% !important;
    max-width: 100% !important;
    margin: 0 !important;
    padding: 0 !important;
    background-color: transparent;
  }

  .page__inner-wrap {
    max-width: 1080px !important;
    margin: 0 auto;
    padding: 80px 40px;
    float: none !important;
  }

  a { 
    color: var(--accent-color); 
    text-decoration: none; 
    transition: all 0.2s cubic-bezier(0.25, 0.1, 0.25, 1); 
  }
  a:hover { 
    color: var(--accent-hover); 
    text-decoration: none; 
    opacity: 0.8;
  }

  /* 标题样式：更干净，移除厚重下划线 */
  .section-title {
    font-size: 32px;
    font-weight: 700;
    margin-top: 80px;
    margin-bottom: 30px;
    color: #111;
    position: relative;
    letter-spacing: -0.5px;
  }
  /* 仅保留极其隐约的分割线，保持整洁 */
  .section-title::after {
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    background: rgba(0,0,0,0.06);
    margin-top: 15px;
  }

  /* --- BIO 布局 --- */
  .bio-container {
    display: flex;
    justify-content: space-between;
    gap: 70px; /* 增加间距 */
    margin-bottom: 60px;
    align-items: flex-start;
  }

  .bio-text-col { flex: 1; }
  
  .bio-name {
    font-size: 42px;
    font-weight: 700;
    margin-bottom: 8px;
    color: #000;
    letter-spacing: -0.02em;
  }
  
  .bio-sub {
    font-size: 20px;
    color: var(--text-secondary);
    margin-bottom: 30px;
    font-style: italic;
    font-weight: 400;
  }

  .bio-desc {
    font-size: 18px;
    color: #333;
    text-align: justify;
    line-height: 1.75;
  }
  
  /* 头像区域 */
  .bio-photo-col {
    flex: 0 0 240px !important;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .bio-photo {
    width: 200px;
    height: 200px; 
    border-radius: 50%;
    /* 更加柔和的高级阴影 */
    box-shadow: 0 20px 40px -10px rgba(0,0,0,0.15);
    object-fit: cover;
    border: none; /* 移除白色粗边框，更现代 */
    background-color: #fff;
  }

  /* 按钮链接组：Apple 风格 Pill Button */
  .link-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 35px;
  }
  
  .link-btn {
    display: inline-flex;
    align-items: center;
    padding: 8px 20px;
    background-color: #fff;
    border: 1px solid rgba(0,0,0,0.1);
    border-radius: 98px; /* 胶囊圆角 */
    color: var(--text-primary) !important;
    font-size: 15px;
    font-weight: 600;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    box-shadow: 0 2px 5px rgba(0,0,0,0.02);
  }
  
  .link-btn svg { margin-right: 8px; fill: var(--text-primary); transition: fill 0.2s;}

  .link-btn:hover {
    background-color: #111; /* 悬停变黑 */
    border-color: #111;
    color: #fff !important;
    text-decoration: none;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.15);
  }
  .link-btn:hover svg { fill: #fff; }

  /* --- NEWS SECTION --- */
  .news-wrapper {
    background: var(--bg-card);
    border-radius: var(--radius-card);
    border: 1px solid var(--border-light);
    padding: 25px 30px;
    box-shadow: var(--shadow-soft);
  }
  
  .news-scroll {
    max-height: 320px;
    overflow-y: auto;
    padding-right: 15px;
    /* 自定义滚动条样式 (WebKit) */
    scrollbar-width: thin;
    scrollbar-color: #d1d1d6 transparent;
  }
  .news-scroll::-webkit-scrollbar { width: 6px; }
  .news-scroll::-webkit-scrollbar-thumb { background-color: #d1d1d6; border-radius: 3px; }
  
  .news-scroll ul { padding-left: 18px; margin: 0; }
  .news-scroll li { 
    margin-bottom: 14px; 
    font-size: 17px; 
    color: #333;
    padding-left: 5px;
  }
  .news-scroll li strong { color: var(--accent-color); font-weight: 600; }

  /* --- EXPERIENCE --- */
  .exp-container {
    background: var(--bg-card);
    padding: 35px;
    border-radius: var(--radius-card);
    border: 1px solid var(--border-light);
    box-shadow: var(--shadow-soft);
  }

  .exp-item {
    display: flex;
    align-items: center; /* 垂直居中对齐 */
    margin-bottom: 35px;
    padding-bottom: 35px;
    border-bottom: 1px solid rgba(0,0,0,0.05);
  }
  .exp-item:last-child { border-bottom: none; margin-bottom: 0; padding-bottom: 0; }
  
  .exp-logo {
    width: 72px; 
    height: 72px; 
    margin-right: 30px;
    object-fit: contain;
    border-radius: 14px; /* iOS App Icon 风格圆角 */
    border: 1px solid rgba(0,0,0,0.05);
    padding: 8px;
    background: #fff;
    box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  }
  
  .exp-content { flex: 1; }
  .exp-title { font-weight: 700; font-size: 20px; color: #000; margin-bottom: 4px; }
  .exp-subtitle { font-size: 18px; color: #555; margin-bottom: 4px; font-style: italic; }
  .exp-date { font-size: 15px; color: #888; font-weight: 500; text-transform: uppercase; letter-spacing: 0.5px;}

  /* --- PUBLICATIONS (Card Style Refined) --- */
  .pub-card {
    display: flex;
    background: var(--bg-card);
    border: 1px solid var(--border-light);
    border-radius: var(--radius-card);
    margin-bottom: 40px;
    overflow: hidden;
    transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
    box-shadow: var(--shadow-soft);
  }
  
  .pub-card:hover {
    transform: translateY(-4px) scale(1.005);
    box-shadow: var(--shadow-hover);
    border-color: rgba(0,0,0,0.08);
  }

  .pub-img-col {
    flex: 0 0 380px; 
    background: #fcfcfd; /* 图片区域稍微灰一点，突出图片 */
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    border-right: 1px solid rgba(0,0,0,0.03);
    padding: 20px;
  }
  
  .pub-img {
    width: 100%;
    height: auto;
    object-fit: contain;
    display: block;
    max-height: 260px;
    border-radius: 4px;
    /* 图片本身加一点点阴影让它浮起来 */
    filter: drop-shadow(0 4px 6px rgba(0,0,0,0.1));
  }

  .pub-badge {
    position: absolute;
    top: 15px;
    left: 15px;
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(10px);
    color: #000;
    padding: 6px 14px;
    font-size: 13px;
    font-weight: 700;
    border-radius: 20px;
    z-index: 2;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    border: 1px solid rgba(0,0,0,0.05);
    font-family: Georgia, serif !important;
  }

  .pub-content-col {
    flex: 1;
    padding: 30px 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .pub-title {
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 12px;
    line-height: 1.35;
    color: #000;
  }
  .pub-title a { color: #000; transition: color 0.2s; }
  .pub-title a:hover { color: var(--accent-color); text-decoration: none; }

  .pub-authors {
    font-size: 17px;
    color: #444;
    margin-bottom: 14px;
    line-height: 1.6;
  }
  .pub-authors strong { color: #000; border-bottom: 2px solid rgba(0,0,0,0.1); text-decoration: none; }

  .pub-venue {
    font-size: 16px;
    color: #d70015; /* Apple Red for emphasis */
    margin-bottom: 20px;
    font-weight: 600;
    font-style: italic;
  }

  .pub-links {
    display: flex;
    gap: 15px;
  }
  
  .pub-links a {
    font-size: 14px;
    font-weight: 700;
    color: var(--accent-color);
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 0.5px;
    position: relative;
    padding: 4px 0;
  }
  /* 链接下划线动效 */
  .pub-links a::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: var(--accent-color);
    transition: width 0.2s ease;
  }
  .pub-links a:hover::after { width: 100%; }
  .pub-links a:hover { text-decoration: none; }
  
  /* --- MISC & TALKS --- */
  .misc-box {
    background: var(--bg-card);
    padding: 30px;
    border-radius: var(--radius-card);
    border: 1px solid var(--border-light);
    font-size: 17px;
    box-shadow: var(--shadow-soft);
  }

  /* 移动端适配 */
  @media (max-width: 900px) {
    .page__inner-wrap { padding: 40px 20px; }
    .bio-container { flex-direction: column-reverse; gap: 40px; text-align: center; }
    .bio-photo-col { width: 100%; margin: 0 auto; }
    .bio-text-col { width: 100%; }
    .bio-desc { text-align: left; }
    .link-grid { justify-content: center; }
    
    .pub-card { flex-direction: column; }
    .pub-img-col { flex: 0 0 auto; width: 100%; border-right: none; border-bottom: 1px solid rgba(0,0,0,0.05); padding: 30px; }
    .pub-img { width: 100%; max-height: none; }
    .pub-content-col { padding: 30px 25px; }
  }
</style>


<!-- ================= BIO SECTION ================= -->
<div class="bio-container">
  
  <!-- 左侧：文字介绍 -->
  <div class="bio-text-col">
    <div class="bio-name">Fan Xu</div>
    <div class="bio-sub">Ph.D. Student</div>
    
    <div class="bio-desc">
      <p>
        I am currently a first-year Ph.D. student in Computer Science and Technology at Shenzhen Loop Area Institute (SLAI), supervised by <a href="https://scholar.google.com/citations?user=pw_0Z_UAAAAJ&hl=zh-CN&oi=ao">Prof. Wanli Ouyang</a>. Before that, I conducted my Master's studies at University of Science and Technology of China (USTC). My research interests primarily center on foundation models, scientific machine learning, and generative AI.
      </p>
    </div>

    <!-- 链接按钮 -->
    <div class="link-grid">
      <a href="mailto:markxu@mail.ustc.edu.cn" class="link-btn">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
        Email
      </a>
      <a href="https://github.com/Sunxkissed" class="link-btn">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
        Github
      </a> 
      <a href="https://scholar.google.com/citations?user=qfMSkBgAAAAJ&hl=zh-CN" class="link-btn">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
        Google Scholar
      </a>
      </div>  
    </div>
  
  <!-- 右侧：头像（使用占位图，因原文无头像链接） -->
  <div class="bio-photo-col"> 
    <!-- 提示：请将此处 src 替换为您的头像路径，例如 ../images/avatar.jpg -->
    <img src="../images/touxiang1.png" class="bio-photo" alt="Fan Xu">
  </div>

</div>


<!-- ================= NEWS SECTION ================= -->
<h1 class="section-title" id='news'>🔥 News</h1>
<div class="news-wrapper">
  <div class="news-scroll">
    <ul>
      <li><strong>2025.11.23</strong>: 1 paper was accepted to KDD2026, Main Track (Research) (First Author).</li>
      <li><strong>2025.11.08</strong>: 2 papers were accepted to AAAI2026, Congrats to All !</li>
      <li><strong>2025.09.18</strong>: 1 paper was accepted to NeurIPS2025 (First Author).</li>
      <li><strong>2025.09.10</strong>: I have joined Shenzhen Loop Area Institute as a Phd student @ SLAI. </li>
      <li><strong>2025.05.01</strong>: 1 paper was accepted to ICML2025, Congrats to Yuan !</li>
      <li><strong>2025.01.22</strong>: 1 paper was accepted to ICLR2025 (Co-First Author).</li>
      <li><strong>2024.09.26</strong>: 1 paper was accepted to NeurIPS2024, Congrats to Hao !</li>
      <li><strong>2024.07.16</strong>: 1 paper was accepted to ACM MM2024 (Co-First Author).</li>
      <li><strong>2023.12.09</strong>: 1 paper was accepted to AAAI2024 (First Author).</li>
    </ul>
  </div>
</div>


<!-- ================= SELECTED PUBLICATIONS ================= -->
<h1 class="section-title">🌟 Selected Publications</h1>

<!-- Paper: KDD 2026 HiGO -->
<div class="pub-card">
  <div class="pub-img-col">
    <div class="pub-badge">KDD 2026</div>
    <img src="../images/HiGO.png" class="pub-img" alt="Paper Image">
  </div>
  <div class="pub-content-col">
    <div class="pub-title">
      <a href="https://openreview.net/forum?id=BZQmpsuW7D&referrer=%5Bthe%20profile%20of%20Fan%20Xu%5D(%2Fprofile%3Fid%3D~Fan_Xu5)">Advanced Global Wildfire Activity Modeling with Hierarchical Graph ODE</a>
    </div>
    <div class="pub-authors">
      <strong>Fan Xu</strong>, Wei Gong, Hao Wu, Lilan Peng, Nan Wang, Qingsong Wen, Xian Wu<sup>*</sup>, Kun Wang, Xibin Zhao<sup>*</sup>
    </div>
    <div class="pub-venue">(KDD 2026, CCF Rank A)</div>
    <div class="pub-links"><a href="https://openreview.net/forum?id=ieh9QzG6VO&referrer=%5BAuthor%20Console%5D(%2Fgroup%3Fid%3DKDD.org%2F2026%2FResearch_Track_August%2FAuthors%23your-submissions)">Paper</a></div>
  </div>
</div>

<!-- Paper: AAAI 2026 NeuralOM -->
<div class="pub-card">
  <div class="pub-img-col">
    <div class="pub-badge">AAAI 2026</div>
    <img src="../images/neuralom.png" class="pub-img" alt="Paper Image">
  </div>
  <div class="pub-content-col">
    <div class="pub-title">
      <a href="https://arxiv.org/abs/2505.21020">NeuralOM: Neural Ocean Model for Subseasonal-to-Seasonal Simulation</a>
    </div>
    <div class="pub-authors">
      Yuan Gao<sup>†</sup>, Hao Wu<sup>†‡</sup>, <strong>Fan Xu</strong>, Yanfei Xiang, Ruijian Gou, Ruiqi Shu, Qingsong Wen, Xian Wu, Kun Wang*, Xiaomeng Huang*
    </div>
    <div class="pub-venue">(AAAI 2026, CCF Rank A)</div>
    <div class="pub-links">
      <a href="https://arxiv.org/abs/2505.21020">Paper</a>
      <a href="https://github.com/YuanGao-YG/NeuralOM">Code</a>
      <img src="https://img.shields.io/github/stars/YuanGao-YG/NeuralOM?label=Star&style=social" style="vertical-align:middle; height: 16px;">
    </div>
  </div>
</div>


<!-- Paper: NeurIPS 2025 Breaking -->
<div class="pub-card">
  <div class="pub-img-col">
    <div class="pub-badge">NeurIPS 2025</div>
    <img src="../images/cops.png" class="pub-img" alt="Paper Image">
  </div>
  <div class="pub-content-col">
    <div class="pub-title">
      <a href="https://arxiv.org/abs/2509.17955">Breaking the Discretization Barrier of Continuous Physics Simulation Learning</a>
    </div>
    <div class="pub-authors">
      <strong>Fan Xu</strong>, Hao Wu, Nan Wang, Lilan Peng, Kun Wang, Wei Gong, Xibin Zhao<sup>*</sup>
    </div>
    <div class="pub-venue">(NeurIPS 2025, CCF Rank A)</div>
    <div class="pub-links"><a href="https://arxiv.org/abs/2509.17955">Paper</a></div>
  </div>
</div> 

<!-- Paper: ICML 2025 OneForecast -->
<div class="pub-card">
  <div class="pub-img-col">
    <div class="pub-badge">ICML 2025</div>
    <img src="../images/oneforecast.png" class="pub-img" alt="Paper Image">
  </div>
  <div class="pub-content-col">
    <div class="pub-title">
      <a href="https://arxiv.org/abs/2502.00338">OneForecast: A Universal Framework for Global and Regional Weather Forecasting</a>
    </div>
    <div class="pub-authors">
      Yuan Gao, Hao Wu, Ruiqi Shu, Huanshuo Dong, <strong>Fan Xu</strong>, Rui Chen, Yibo Yan, Qingsong Wen, Xuming Hu, Kun Wang, Jiahao Wu, Qing Li, Hui Xiong, Xiaomeng Huang<sup>*</sup>
    </div>
    <div class="pub-venue">(ICML 2025, CCF Rank A)</div>
    <div class="pub-links"><a href="https://arxiv.org/abs/2502.00338">Paper</a></div>
  </div>
</div>

<!-- Paper: ICLR 2025 Open-CK -->
<div class="pub-card">
  <div class="pub-img-col">
    <div class="pub-badge">ICLR 2025</div>
    <img src="../images/fire.png" class="pub-img" alt="Paper Image">
  </div>
  <div class="pub-content-col">
    <div class="pub-title">
      <a href="https://openreview.net/forum?id=A23C57icJt&referrer=%5Bthe%20profile%20of%20Fan%20Xu%5D(%2Fprofile%3Fid%3D~Fan_Xu5)">Open-CK: The Non-linear Chaotic Combustion Kinetics Benchmark</a>
    </div>
    <div class="pub-authors">
      Zaige Fei<sup>†</sup>, <strong>Fan Xu</strong><sup>†</sup>, Junyuan Mao, Yuxuan Liang, Qingsong Wen, Kun Wang, Hao Wu<sup>*</sup>, Yang Wang<sup>*</sup>
    </div>
    <div class="pub-venue">(ICLR 2025, THU Rank A)</div>
    <div class="pub-links"><a href="https://openreview.net/forum?id=mKFFEXeIQS&referrer=%5Bthe%20profile%20of%20Fan%20Xu%5D(%2Fprofile%3Fid%3D~Fan_Xu5)">Paper</a></div>
  </div>
</div>

<!-- Paper: NeurIPS 2024 PURE -->
<div class="pub-card">
  <div class="pub-img-col">
    <div class="pub-badge">NeurIPS 2024</div>
    <img src="../images/pure.png" class="pub-img" alt="Paper Image">
  </div>
  <div class="pub-content-col">
    <div class="pub-title">
      <a href="https://openreview.net/forum?id=z86knmjoUq&referrer=%5Bthe%20profile%20of%20Fan%20Xu%5D(%2Fprofile%3Fid%3D~Fan_Xu5)">PURE: Prompt Evolution with Graph ODE for Out-of-distribution Fluid Dynamics Modeling</a>
    </div>
    <div class="pub-authors">
      Hao Wu, Changhu Wang, <strong>Fan Xu</strong>, Jinbao Xue, Chong Chen, Xian-Sheng Hua, Xiao Luo<sup>*</sup>
    </div>
    <div class="pub-venue">(NeurIPS 2024, CCF Rank A)</div>
    <div class="pub-links"><a href="https://openreview.net/forum?id=z86knmjoUq&referrer=%5Bthe%20profile%20of%20Fan%20Xu%5D(%2Fprofile%3Fid%3D~Fan_Xu5)">Paper</a></div>
  </div>
</div>

<!-- Paper: ACM MM 2024 PastNet -->
<div class="pub-card">
  <div class="pub-img-col">
    <div class="pub-badge">ACM MM 2024</div>
    <img src="../images/MM_pastnet.png" class="pub-img" alt="Paper Image">
  </div>
  <div class="pub-content-col">
    <div class="pub-title">
      <a href="https://openreview.net/forum?id=mL0KvSwXzk&referrer=%5Bthe%20profile%20of%20Fan%20Xu%5D(%2Fprofile%3Fid%3D~Fan_Xu5)">PastNet: introducing physical inductive biases for spatio-temporal video prediction</a>
    </div>
    <div class="pub-authors">
      Hao Wu<sup>†</sup>, <strong>Fan Xu</strong><sup>†</sup>, Chong Chen, Xian-Sheng Hua, Xiao Luo<sup>*</sup>, Haixin Wang<sup>*</sup>
    </div>
    <div class="pub-venue">(ACM MM 2024, CCF Rank A)</div>
    <div class="pub-links"><a href="https://arxiv.org/abs/2305.11421">Paper</a></div>
  </div>
</div>

<!-- Paper: AAAI 2024 Fraud -->
<div class="pub-card">
  <div class="pub-img-col">
    <div class="pub-badge">AAAI 2024</div>
    <img src="../images/aaai.png" class="pub-img" alt="Paper Image">
  </div>
  <div class="pub-content-col">
    <div class="pub-title">
      <a href="https://arxiv.org/abs/2312.06441">Revisiting Graph-based Fraud Detection in Sight of Heterophily and Spectrum</a>
    </div>
    <div class="pub-authors">
      <strong>Fan Xu</strong>, Nan Wang<sup>*</sup>, Hao Wu, Xuezhi Wen, Xibin Zhao<sup>*</sup>, Hai Wan
    </div>
    <div class="pub-venue">(AAAI 2024, CCF Rank A)</div>
    <div class="pub-links"><a href="https://arxiv.org/abs/2312.06441">Paper</a></div>
  </div>
</div>


<!-- ================= PRE-PRINT ================= -->
<h1 class="section-title">🌟 Pre-prints</h1>

<!-- Paper: Arxiv Triton -->
<div class="pub-card">
  <div class="pub-img-col">
    <div class="pub-badge">Arxiv 2025</div>
    <img src="../images/temperature_850_animation.gif" class="pub-img" alt="Paper Image">
  </div>
  <div class="pub-content-col">
    <div class="pub-title">
      <a href="https://tritoncast4earth.netlify.app/">Advanced Long-term Earth System Forecasting</a>
    </div>
    <div class="pub-authors">
      Hao Wu, Yuan Gao, Ruijian Gou, Xian Wu, Chuhan Wu, Huahui Yi, Johannes Brandstetter, Fan Xu, Niklas Boers, Kun Wang, Penghao Zhao, Hao Jia, Qi Song, Xinliang Liu, Juncai He, Shuhao Cao, Huanshuo Dong, Yanfei Xiang, Fan Zhang, Haixin Wang, Xingjian Shi, Qiufeng Wang, Shuaipeng Li, Ruobing Xie, Feng Tao, Yuxu Lu, Yu Guo, Yuntian Chen, Yuxuan Liang, Qingsong Wen, Wanli Ouyang, Deliang Chen, Xiaomeng Huang
    </div>
    <div class="pub-venue">
      (Submit to Journal)
    </div>
    <div class="pub-links">
      <a href="https://arxiv.org/abs/2505.19432">Paper</a>
      <a href="https://github.com/Alexander-wu/TritonCast">Code</a>
      <a href="https://huggingface.co/TritonCast">Hugging Face</a>
      <a href="https://tritoncast4earth.netlify.app/">Project Page</a>
    </div>
  </div>
</div>

<!-- Paper: Arxiv Unlocking OOD / Spark -->
<div class="pub-card">
  <div class="pub-img-col">
    <div class="pub-badge">Arxiv 2025</div>
    <img src="../images/spark.png" class="pub-img" alt="Paper Image">
  </div>
  <div class="pub-content-col">
    <div class="pub-title">
      <a href="https://arxiv.org/abs/2510.24216">Unlocking Out-of-Distribution Generalization in Dynamics through Physics-Guided Augmentation</a>
    </div>
    <div class="pub-authors">
      <strong>Fan Xu</strong>, Wei Gong, Hao Wu, Nan Wang, Qingsong Wen, Kun Wang, Xian Wu, Xibin Zhao<sup>*</sup>
    </div>
    <div class="pub-venue">(Arxiv 2025)</div>
    <div class="pub-links"><a href="https://arxiv.org/abs/2510.24216">Paper</a></div>
  </div>
</div>







<!-- ================= MISC SECTIONS ================= -->
<h1 class="section-title">🎖 Honors and Awards</h1>
<div class="misc-box">
  <ul style="line-height: 1.6; padding-left: 20px;">
    <li><em>2022, 2024, 2025</em>, First-class Academic Scholarship of the University of Science and Technology of China.</li>
    <li><em>2022.11</em>, China Collegiate Computing Competition - Intelligent Interaction Innovation Contest, National Finals Second Prize.</li>
    <li><em>2022.06</em>, HarmonyOS Developer Competition - Global Campus AI Algorithm Elite Track, Star Excellence Award (7/1000+).</li>
  </ul>
</div>


<h1 class="section-title">💻 Academic Service</h1>
<div class="misc-box">
  <strong>Conference Reviewer / PC Member:</strong><br>
  ACM MM (2024), KDD (2025), ICLR (2025, 2026), NeurIPS (2025), AAAI (2026), CVPR (2026).
</div>

<!-- Map -->
<div style="margin-top: 40px; width: 200px; height: 200px;">
    <script type="text/javascript" id="clstr_globe" src="//clustrmaps.com/globe.js?d=vVlvDabXwmen4OHhXasyewzZDnAZ72bjHHXZxx5J1wI"></script>
</div>





<!-- 
      <p style="color:red; font-weight: bold;">
        Please feel free to contact me for communication and collaboration.
      </p>



<h1 class="section-title">💬 Invited Talks</h1>
<div class="misc-box">
  <ul style="line-height: 1.6; padding-left: 20px;">
    <li><em>2024.08</em>, Review of Anomaly Detection Applications and Outlook for Extreme Event Forecasting. @ Tsinghua University</li>
  </ul>
</div>




-->


