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

I am currently a PhD student at College of Computer Science and Technology, Zhejiang University (浙江大学计算机科学与技术学院), and advised by Prof. [Lanfen Lin (林兰芬)](http://give.zju.edu.cn/en/memberHomepage/LinLanfen.html). Before that, I graduated from School of Information and Computer Science, Anhui Agricultural University  (安徽农业大学信息与计算机学院) with a bachelor’s degree.

My research interest includes domain adaptation, domain generalization, medical image analysis and multi-modal learning.

To help a quick start in domain generalization, we set up a [repository](https://github.com/Ziwei-Niu/Domain-generalization) for organizing papers ,codes, datasets and etc related to domain generalization. If you find it helpful, feel free to give it a star 🌟!

<!--
My research interest includes neural machine translation and computer vision. I have published more than 100 papers at the top international AI conferences with total <a href='https://scholar.google.com/citations?user=DhtAFkwAAAAJ'>google scholar citations <strong><span id='total_cit'>260000+</span></strong></a> (You can also use google scholar badge <a href='https://scholar.google.com/citations?user=DhtAFkwAAAAJ'><img src="https://img.shields.io/endpoint?url={{ url | url_encode }}&logo=Google%20Scholar&labelColor=f6f6f6&color=9cf&style=flat&label=citations"></a>).
-->

# 🔥 News
- *2023.02*: &nbsp;🎉One paper is accepted by ICASSP 2024. 
- *2023.07*: &nbsp;🎉Two papers are accepted by ACM MM 2024.
- *2023.04*: &nbsp;🎉One paper is accepted by IJCAI 2023. 
- *2023.03*: &nbsp;🎉One paper is accepted by IEEE TMM (IF: 7.3). 
- *2023.02*: &nbsp;🎉One paper is accepted by ICASSP 2023 Oral. 
- *2022.07*: &nbsp;🎉 I release a [Domain Generalization Repository](https://github.com/Ziwei-Niu/Domain-generalization) for organizing papers, codes, datasets and etc. Welcome to STAR!

# 📝 Publications 
<!--
- <span style="background-color: #003366; color: white; padding: 1px 4px; font-size: 12px;">``ICASSP 2023``</span> [Instance-Aware Hierarchical Structured Policy for Prompt Learning in Vision-Language Models](https://ieeexplore.ieee.org/abstract/document/10095231). **Xun Wu** *, Guolong Wang *, Zhaoyuan Liu, Xuan Dang, Zhen Qin. IEEE International Conference on Acoustics, Speech and Signal Processing (<b>ICASSP</b>), 2023. <span style="color:red">(Top 3% recongintion)</span>
-->
- <span style="background-color: #003366; color: white; padding: 1px 4px; font-size: 12px;">``TMM 2023``</span> [Knowledge Distillation-based Domain-invariant Representation Learning for Domain Generalization]([https://dl.acm.org/doi/pdf/10.1145/3503161.3548004](https://ieeexplore.ieee.org/abstract/document/10093034)). **Ziwei Niu**, Junkun Yuan, Xu Ma, Yingying Xu, Jing Liu, Yen-Wei Chen, Ruofeng Tong, Lanfen Lin
- <span style="background-color: #003366; color: white; padding: 1px 4px; font-size: 12px;">``ICASSP 2023``</span> <span style="color:red">(Oral)</span> [MCKD: Mutually Collaborative Knowledge Distillation For Federated Domain Adaptation And Generalization]([[https://dl.acm.org/doi/pdf/10.1145/3503161.3548004](https://ieeexplore.ieee.org/abstract/document/10093034](https://ieeexplore.ieee.org/abstract/document/10095699))). **Ziwei Niu**, Junkun Yuan, Xu Ma, Yingying Xu, Jing Liu, Yen-Wei Chen, Ruofeng Tong, Lanfen Lin
- <span style="background-color: #003366; color: white; padding: 1px 4px; font-size: 12px;">``ACM MM 2023``</span> [IS2Net: Intra-domain Semantic and Inter-domain Style Enhancement for Semi-supervised Medical Domain Generalization]([https://www.ijcai.org/proceedings/2023/0144](https://dl.acm.org/doi/abs/10.1145/3581783.3612159])). Shiao Xie *, **Ziwei Niu** *, Huimin Huang, Hao Sun, Rui Qin, Yen-Wei Chen, Lanfen Lin
- <span style="background-color: #003366; color: white; padding: 1px 4px; font-size: 12px;">``ACM MM 2023``</span> [HSVLT: Hierarchical Scale-Aware Vision-Language Transformer for Multi-Label Image Classification]([[https://www.ijcai.org/proceedings/2023/0144](https://dl.acm.org/doi/abs/10.1145/3581783.3612159)])). Shuyi Ouyang, Hongyi Wang, **Ziwei Niu**, Zhenjia Bai, Shiao Xie, Yingying Xu, Ruofeng Tong, Yen-Wei Chen, Lanfen Lin
- <span style="background-color: #003366; color: white; padding: 1px 4px; font-size: 12px;">``IJCAI 2023``</span> [SLVIT: Scale-wise language-guided vision transformer for referring image segmentation]([https://www.ijcai.org/proceedings/2023/0144])). Shuyi Ouyang, Hongyi Wang, Shiao Xie, **Ziwei Niu**, Ruofeng Tong, Yen-Wei Chen, Lanfen Lin
- <span style="background-color: #003366; color: white; padding: 1px 4px; font-size: 12px;">``ICME 2023``</span> [MedFCT: A Frequency Domain Joint CNN-Transformer Network for Semi-supervised Medical Image Segmentation]([https://www.sciencedirect.com/science/article/pii/S0306457322002485](https://ieeexplore.ieee.org/abstract/document/10219579)). Shiao Xie, Huimin Huang, **Ziwei Niu**, Lanfen Lin, Yen-Wei Chen


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
