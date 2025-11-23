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

<!-- ================= GLOBAL STYLES (FROM HAO WU) ================= -->
<style>
  /* 0. 基础重置与高定质感 */
  :root {
    --accent-color: #003366; /* 经典的学术深蓝 */
    --text-primary: #111;
    --text-secondary: #444;
    --bg-page: #fafafa;
  }

  /* 隐藏默认侧边栏 */
  .sidebar { display: none !important; }
  
  .page__content {
    width: 100% !important;
    max-width: 100% !important;
    margin: 0 !important;
    padding: 0 !important;
    background-color: var(--bg-page);
  }

  .page__inner-wrap {
    max-width: 1060px !important;
    margin: 0 auto;
    padding: 60px 40px;
    float: none !important;
  }

  /* 1. 全局统一字体 */
  body, h1, h2, h3, h4, h5, h6, p, div, span, li, a, strong, b, button {
    font-family: Georgia, 'Times New Roman', Times, serif !important;
    color: var(--text-primary);
    line-height: 1.6;
  }

  a { 
    color: var(--accent-color); 
    text-decoration: none; 
    transition: all 0.2s ease; 
  }
  a:hover { 
    color: #0056b3; 
    text-decoration: underline; 
  }

  /* 2. 标题样式优化 */
  .section-title {
    font-size: 30px;
    font-weight: bold;
    margin-top: 60px;
    margin-bottom: 30px;
    color: #000;
    position: relative;
    padding-bottom: 12px;
    border-bottom: 2px solid #eaeaea;
    letter-spacing: 0.5px;
  }
  
  .subsection-title {
    font-size: 24px;
    font-weight: bold;
    margin-top: 40px;
    margin-bottom: 20px;
    color: #333;
    border-left: 5px solid var(--accent-color);
    padding-left: 15px;
  }

  /* --- BIO 布局 --- */
  .bio-container {
    display: flex;
    justify-content: space-between;
    gap: 60px;
    margin-bottom: 60px;
    align-items: flex-start;
  }

  .bio-text-col { flex: 1; }
  
  .bio-name {
    font-size: 38px;
    font-weight: bold;
    margin-bottom: 10px;
    color: #000;
  }
  
  .bio-sub {
    font-size: 19px;
    color: var(--text-secondary);
    margin-bottom: 25px;
    font-style: italic;
  }

  .bio-desc {
    font-size: 18px;
    color: #222;
    text-align: justify;
    line-height: 1.7;
  }

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
    box-shadow: 0 8px 25px rgba(0,0,0,0.15);
    object-fit: cover;
    border: 4px solid #fff;
    background-color: #eee; /* 占位背景色 */
  }

  /* 按钮链接组 */
  .link-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    margin-top: 30px;
  }
  
  .link-btn {
    display: inline-flex;
    align-items: center;
    padding: 6px 18px;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 4px;
    color: #333 !important;
    font-size: 16px;
    font-weight: bold;
    transition: all 0.2s;
    box-shadow: 0 2px 5px rgba(0,0,0,0.05);
  }
  
  .link-btn svg { margin-right: 8px; fill: #333; }

  .link-btn:hover {
    background-color: #f4f4f4;
    border-color: var(--accent-color);
    color: var(--accent-color) !important;
    text-decoration: none;
  }

  /* --- NEWS SECTION --- */
  .news-wrapper {
    background: #fff;
    border-radius: 6px;
    border: 1px solid #ddd;
    padding: 20px;
    box-shadow: 0 3px 10px rgba(0,0,0,0.03);
  }
  
  .news-scroll {
    max-height: 300px;
    overflow-y: auto;
    padding-right: 15px;
  }
  
  .news-scroll ul { padding-left: 20px; margin: 0; }
  .news-scroll li { 
    margin-bottom: 12px; 
    font-size: 17px; 
    color: #333; 
  }
  .news-scroll li strong { color: var(--accent-color); }

  /* --- PUBLICATIONS --- */
  .pub-card {
    display: flex;
    background: #fff;
    border: 1px solid #e0e0e0;
    border-radius: 6px;
    margin-bottom: 35px;
    overflow: hidden;
    transition: transform 0.2s, box-shadow 0.2s;
  }
  
  .pub-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 24px rgba(0,0,0,0.08);
    border-color: #bbb;
  }

  .pub-img-col {
    flex: 0 0 380px; 
    background: #fff; 
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    border-right: 1px solid #eee;
    padding: 10px;
  }
  
  .pub-img {
    width: 100%;
    height: auto;
    object-fit: contain;
    display: block;
    max-height: 280px; 
  }

  .pub-badge {
    position: absolute;
    top: 12px;
    left: 12px;
    background: #003366;
    color: white;
    padding: 4px 12px;
    font-size: 14px;
    font-weight: bold;
    border-radius: 4px;
    z-index: 2;
    opacity: 0.95;
    box-shadow: 2px 2px 6px rgba(0,0,0,0.25);
    font-family: Georgia, serif !important;
  }

  .pub-content-col {
    flex: 1;
    padding: 25px 35px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .pub-title {
    font-size: 22px;
    font-weight: bold;
    margin-bottom: 12px;
    line-height: 1.3;
    color: #111;
  }
  .pub-title a { color: #111; }
  .pub-title a:hover { color: var(--accent-color); text-decoration: underline; }

  .pub-authors {
    font-size: 17px;
    color: #444;
    margin-bottom: 12px;
    line-height: 1.5;
  }
  .pub-authors strong { color: #000; text-decoration: underline; }

  .pub-venue {
    font-size: 16px;
    color: #c62828;
    margin-bottom: 18px;
    font-weight: bold;
    font-style: italic;
  }

  .pub-links a {
    display: inline-block;
    font-size: 15px;
    font-weight: bold;
    margin-right: 20px;
    color: var(--accent-color);
    text-transform: uppercase;
    text-decoration: none;
  }
  .pub-links a:hover { text-decoration: underline; }
  
  /* --- MISC --- */
  .misc-box {
    background: #fbfbfb;
    padding: 25px;
    border-radius: 6px;
    border: 1px solid #ddd;
    font-size: 17px;
  }

  /* 移动端适配 */
  @media (max-width: 900px) {
    .page__inner-wrap { padding: 30px 20px; }
    .bio-container { flex-direction: column-reverse; gap: 30px; text-align: center; }
    .bio-photo-col { width: 100%; margin: 0 auto; }
    .bio-text-col { width: 100%; }
    .link-grid { justify-content: center; }
    
    .pub-card { flex-direction: column; }
    .pub-img-col { flex: 0 0 auto; width: 100%; border-right: none; border-bottom: 1px solid #eee; padding: 0; }
    .pub-img { width: 100%; max-height: none; }
    .pub-content-col { padding: 25px 20px; }
  }
</style>


<!-- ================= BIO SECTION ================= -->
<div class="bio-container">
  
  <!-- 左侧：文字介绍 -->
  <div class="bio-text-col">
    <div class="bio-name">Fan Xu</div>
    <div class="bio-sub">Ph.D. Student at Shenzhen Loop Area Institute (SLAI)</div>
    
    <div class="bio-desc">
      <p>
        I am currently a first-year Ph.D. student in Computer Science and Technology at Shenzhen Loop Area Institute (SLAI), supervised by <a href="https://scholar.google.com/citations?user=pw_0Z_UAAAAJ&hl=zh-CN&oi=ao">Prof. Wanli Ouyang</a>. Before that, I conducted my Master's studies at University of Science and Technology of China (USTC). My research interests primarily lie in foundation models, scientific machine learning, and generative AI.
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
    <img src="../images/xufan.png" class="bio-photo" alt="Fan Xu">
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
    <div class="pub-venue">(KDD 2026)</div>
    <div class="pub-links"><a href="https://openreview.net/forum?id=ieh9QzG6VO&referrer=%5BAuthor%20Console%5D(%2Fgroup%3Fid%3DKDD.org%2F2026%2FResearch_Track_August%2FAuthors%23your-submissions)">Paper</a></div>
  </div>
</div>

<!-- Paper: AAAI 2026 NeuralOM -->
<div class="pub-card">
  <div class="pub-img-col">
    <div class="pub-badge">AAAI 2026</div>
    <!-- 占位图：原文此条目无对应图片 -->
    <img src="../images/neuralom.png" class="pub-img" alt="Paper Image">
  </div>
  <div class="pub-content-col">
    <div class="pub-title">
      <a href="https://arxiv.org/abs/2505.21020">NeuralOM: Neural Ocean Model for Subseasonal-to-Seasonal Simulation</a>
    </div>
    <div class="pub-authors">
      Yuan Gao, Ruiqi Shu, Hao Wu, <strong>Fan Xu</strong>, Yanfei Xiang, Ruijian Gou, Qingsong Wen, Xian Wu, Kun Wang, Xiaomeng Huang<sup>*</sup>
    </div>
    <div class="pub-venue">(AAAI 2026)</div>
    <div class="pub-links"><a href="https://arxiv.org/abs/2505.21020">Paper</a></div>
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
    <div class="pub-venue">(NeurIPS 2025)</div>
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
    <div class="pub-venue">(ICML 2025)</div>
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
    <div class="pub-venue">(ICLR 2025)</div>
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
    <div class="pub-venue">(NeurIPS 2024)</div>
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
    <div class="pub-venue">(ACM MM 2024)</div>
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
    <div class="pub-venue">(AAAI 2024)</div>
    <div class="pub-links"><a href="https://arxiv.org/abs/2312.06441">Paper</a></div>
  </div>
</div>


<!-- ================= PRE-PRINT ================= -->
<h1 class="section-title">🌟 Pre-prints</h1>

<!-- Paper: Arxiv Triton -->
<div class="pub-card">
  <div class="pub-img-col">
    <div class="pub-badge">Arxiv 2026</div>
    <img src="../images/Tritoncast.png" class="pub-img" alt="Paper Image">
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
    <div class="pub-badge">Arxiv</div>
    <img src="../images/spark.png" class="pub-img" alt="Paper Image">
  </div>
  <div class="pub-content-col">
    <div class="pub-title">
      <a href="https://arxiv.org/abs/2510.24216">Unlocking Out-of-Distribution Generalization in Dynamics through Physics-Guided Augmentation</a>
    </div>
    <div class="pub-authors">
      <strong>Fan Xu</strong>, Wei Gong, Hao Wu, Nan Wang, Qingsong Wen, Kun Wang, Xian Wu, Xibin Zhao<sup>*</sup>
    </div>
    <div class="pub-venue">(Arxiv 2026)</div>
    <div class="pub-links"><a href="https://arxiv.org/abs/2510.24216">Paper</a></div>
  </div>
</div>

<!-- Paper: CIDeR -->
<div class="pub-card">
  <div class="pub-img-col">
    <div class="pub-badge">Conference</div>
    <img src="../images/CIDeR.png" class="pub-img" alt="Paper Image">
  </div>
  <div class="pub-content-col">
    <div class="pub-title">
      <a href="https://openreview.net/forum?id=YYRAWFOlk7&referrer=%5BAuthor%20Console%5D(%2Fgroup%3Fid%3DAAAI.org%2F2026%2FConference%2FAuthors%23your-submissions)">Learning Counterfactual-Invariant Representations for Robust Time Series Anomaly Detection</a>
    </div>
    <div class="pub-authors">
      <strong>Fan Xu</strong>, Nan Wang, Hao Wu, Cheng Yan, Hai Wan, Wei Gong, Hairong Dong, Xibin Zhao<sup>*</sup>
    </div>
    <div class="pub-venue">(Arxiv 2026)</div>
    <div class="pub-links"><a href="#">Paper</a></div>
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

<h1 class="section-title">💬 Invited Talks</h1>
<div class="misc-box">
  <ul style="line-height: 1.6; padding-left: 20px;">
    <li><em>2024.08</em>, Review of Anomaly Detection Applications and Outlook for Extreme Event Forecasting. @ Tsinghua University</li>
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



-->


