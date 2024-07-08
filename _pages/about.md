---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

I am currently a second-year Master's student in Computer Science and Technology, University of Science and Technology of China (USTC). Before that, I received my bachelor degree in Dalian Universuty of Technology in 2022.

My research interest includes AI4Science, graph representation learning, and anomaly detection.


# 🔥 News
- *2024.0527*: &nbsp;🎉 One paper was accepted by ECML-PKDD 2024 (First Author).
- *2024.0527*: &nbsp;🎉 Three papers were submitted to NeurIPS 2024 (1\*First Author & 1\*Co-First Author).
- *2024.0420*: &nbsp;🎉 One paper was submitted to ACM MM2024 (Co-First Author).
- *2023.1209*: &nbsp;🎉 One paper was accepted by AAAI 2024 (First Author). 
- *2023.1027*: &nbsp;🎉 One paper was accepted by IEEE ICPADS 2023 (First Author).
- *2023.0601*: &nbsp;🎉 One paper was accepted by IEEE SMC 2023 (First Author). 

# 📝 Publications 
#### Graph Anomaly Detection

- <span style="background-color: #003366; color: white; padding: 1px 4px; font-size: 12px;">``ECML-PKDD 2024``</span> [GLADformer: A Mixed Perspective for Graph-level Anomaly Detection](https://arxiv.org/abs/2406.00734). **Fan Xu**, Nan Wang, Hao Wu, Xuezhi Wen, Dalin Zhang, Siyang Lu, Binyong Li, Wei Gong, Hai Wan, Xibin Zhao
- <span style="background-color: #003366; color: white; padding: 1px 4px; font-size: 12px;">``AAAI 2024``</span> [Revisiting Graph-based Fraud Detection in Sight of Heterophily and Spectrum](https://arxiv.org/abs/2312.06441). **Fan Xu**, Nan Wang, Hao Wu, Xuezhi Wen, Xibin Zhao, Hai Wan
- <span style="background-color: #003366; color: white; padding: 1px 4px; font-size: 12px;">``IEEE ICPADS 2023``</span> [Few-shot Message-Enhanced Contrastive Learning for Graph Anomaly Detection](https://arxiv.org/abs/2311.10370). **Fan Xu**, Nan Wang, Xuezhi Wen, Meiqi Gao, Chaoqun Guo, Xibin Zhao
- <span style="background-color: #003366; color: white; padding: 1px 4px; font-size: 12px;">``IEEE SMC 2023``</span> [Exploring Global and Local Information for Anomaly Detection with Normal Samples](https://arxiv.org/abs/2306.02025). **Fan Xu**, Nan Wang, Xibin Zhao
- <span style="background-color: #003366; color: white; padding: 1px 4px; font-size: 12px;"></span> [Advanced Persistent Threat Detection via Mining Long-Term Features in Provenance Graphs]. **Fan Xu**, Qinxin Zhao, Xiaoxiao Liu, Nan Wang, Meiqi Gao, Xuezhi Wen, Dalin Zhang. Frontiers of Computer Science, 2024 (under review).

#### Spatio-temporal Prediction

- <span style="background-color: #003366; color: white; padding: 1px 4px; font-size: 12px;">``Arxiv``</span> [PastNet: introducing physical inductive biases for spatio-temporal video prediction](https://arxiv.org/abs/2305.11421).**Hao Wu**, **Fan Xu**, Xiao Luo#, Chong Chen, Xian-Sheng Hua, Haixin Wang#. ACM MM, 2024 (under review).
- <span style="background-color: #003366; color: white; padding: 1px 4px; font-size: 12px;">``Arxiv``</span> [Earthfarseer-V2: A Versatile All-in-One Model for Learning Complex Spatio-Temporal Dynamics](https://ojs.aaai.org/index.php/AAAI/article/view/29521/30866). Hao Wu, Junfeng Fang, Yuxuan Liang, Guibin Zhang, Fan Xu, Wei Xiong, Qingsong Wen, Yu Zheng, Kun Wang#. TPAMI, 2024 (under review).

#### AI for Science

- <span style="background-color: #003366; color: white; padding: 1px 4px; font-size: 12px;">``Arxiv``</span> [Spatio-temporal fluid dynamics modeling via physical-awareness and parameter diffusion guidance](https://scholar.google.com/citations?view_op=view_citation&hl=en&user=HdXMhfcAAAAJ&citation_for_view=HdXMhfcAAAAJ:IWHjjKOFINEC). **Hao Wu**, **Fan Xu**, Yifan Duan, Ziwei Niu, Weiyan Wang, Gaofeng Lu, Kun Wang, Yuxuan Liang#, Yang Wang#. Arxiv, 2024.
- <span style="background-color: #003366; color: white; padding: 1px 4px; font-size: 12px;"></span> [SOCST: Learning Continuous Physics Simulation Overcoming Discretization from Partial Observations]. **Fan Xu**, Cheng Yan, Penghao Zhao, Pengliang Ji, Shuaipeng Li, Weiyan Wang, Hao Wu. NeurIPS, 2024 (under review).
- <span style="background-color: #003366; color: white; padding: 1px 4px; font-size: 12px;"></span> [Open-CK: The Non-linear Chaotic Combustion Kinetics Benchmark]. **Zaige Fei**, **Fan Xu**, Yuxuan Liang, Ziwei Niu, Penghao Zhao, Shuaipeng Li, Qingsong Wen, Tengyang Wan, Jinxiang Wang, Jinbao Xue, Hao Wu, Kun Wang, Yang Wang. NeurIPS, 2024 (under review).
- <span style="background-color: #003366; color: white; padding: 1px 4px; font-size: 12px;"></span> [PURE: Prompt Evolution with Graph ODE for Out-of-distribution Fluid Dynamics Modeling]. Hao Wu, Changhu Wang, Fan Xu, Jinbao Xue, Chong Chen, Xian-Sheng Hua, Xiao Luo. NeurIPS, 2024 (under review).
- <span style="background-color: #003366; color: white; padding: 1px 4px; font-size: 12px;">``Arxiv``</span> [Spatio-temporal Twins with A Cache for Modeling Long-term System Dynamics](https://openreview.net/forum?id=aE6HazMgRz&referrer=%5BAuthor%20Console%5D(%2Fgroup%3Fid%3DICLR.cc%2F2024%2FConference%2FAuthors%23your-submissions)). Hao Wu, Kun Wang, Fan Xu, Yue Li, Xu Wang, Weiyan Wang, Haixin Wang, Xiao Luo#.  Arxiv, 2024.



<!--
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CVPR 2016</div><img src='images/500x300.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Deep Residual Learning for Image Recognition](https://openaccess.thecvf.com/content_cvpr_2016/papers/He_Deep_Residual_Learning_CVPR_2016_paper.pdf)

**Kaiming He**, Xiangyu Zhang, Shaoqing Ren, Jian Sun

[**Project**](https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=DhtAFkwAAAAJ&citation_for_view=DhtAFkwAAAAJ:ALROH1vI_8AC) <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong>
- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
</div>
</div>

-->

# 🎖 Honors and Awards
- *2023.10* Outstanding Graduate Student Award of Zhejiang University (Top 20%).
- *2021.02* Outstanding Undergraduate Award (Top 5%).
- *2020.10* National Scholarship, highest scholarship from Ministry of Education of China (Top 1%).
- *2020.03* Provincial Hundred-excellent College Student Award (Top 1%). 

# 📖 Educations
- *2021.09 - present*, Ph.D student, Zhejiang University, Hangzhou. 
- *2017.09 - 2021.06*, Undergraduate, Anhui Agricultural University, Hefei. 

<!--
# 💬 Invited Talks
- *2021.06*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
- *2021.03*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet.  \| [\[video\]](https://github.com/)

# 💻 Internships
- *2019.05 - 2020.02*, [Lorem](https://github.com/), China.
-->
