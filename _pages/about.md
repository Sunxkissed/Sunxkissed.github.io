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


I am Fan Xu, currently a third-year master's student at the University of Science and Technology of China (USTC). Before that, I received my bachelor's degree from Dalian Universuty of Technology in 2022. My research interest includes AI4Science, graph representation learning, and large language model. Feel free to contact me for communication and collaboration!



**Email**: <u>markxu@mail.ustc.edu.cn</u>


# 🔥 News
- *2024.09*: &nbsp; One paper was accepted by NeurIPS 2024.
- *2024.08*: &nbsp; One paper was accepted by FCS 2024 (First Author).
- *2024.07*: &nbsp; One paper was accepted by ACM MM 2024 (Co-First Author).
- *2024.05*: &nbsp; One paper was accepted by ECML PKDD 2024 (First Author).
- *2023.12*: &nbsp; One paper was accepted by AAAI 2024 (First Author).
- *2023.10*: &nbsp; One paper was accepted by IEEE ICPADS 2023 (First Author).
- *2023.06*: &nbsp; One paper was accepted by IEEE SMC 2023 (First Author).



# 📝 Publications 

#### AI for Science
- <span style="background-color: #003366; color: white; padding: 1px 4px; font-size: 12px;">``NeurIPS 2024``</span> [PURE: Prompt Evolution with Graph ODE for Out-of-distribution Fluid Dynamics Modeling](https://openreview.net/forum?id=z86knmjoUq&referrer=%5Bthe%20profile%20of%20Fan%20Xu%5D(%2Fprofile%3Fid%3D~Fan_Xu5)). Hao Wu, Changhu Wang, Fan Xu, Jinbao Xue, Chong Chen, Xian-Sheng Hua, Xiao Luo
- <span style="background-color: #003366; color: white; padding: 1px 4px; font-size: 12px;">``Arxiv``</span> [SPARK: Physics-Guided Quantitative Augmentation for Dynamical System Modeling](https://openreview.net/forum?id=BZQmpsuW7D&referrer=%5Bthe%20profile%20of%20Fan%20Xu%5D(%2Fprofile%3Fid%3D~Fan_Xu5)). **Fan Xu**, Penghao Zhao, Zhipeng Xu, Xinliang Zhou, Xinping Yi, Qingsong Wen, Hao Wu#, Kun Wang#. Submitted to ICLR 2025.
- <span style="background-color: #003366; color: white; padding: 1px 4px; font-size: 12px;">``Arxiv``</span> [SOCST: Learning Continuous Physics Simulation Overcoming Discretization from Partial Observations](https://openreview.net/forum?id=6qeHCZljCq&referrer=%5Bthe%20profile%20of%20Fan%20Xu%5D(%2Fprofile%3Fid%3D~Fan_Xu5)). **Fan Xu**, Cheng Yan, Penghao Zhao, Hao Wu, Kun Wang#, Yang Wang#. Submitted to AAAI 2025.
- <span style="background-color: #003366; color: white; padding: 1px 4px; font-size: 12px;">``Arxiv``</span> [Leveraging Lie Point Symmetries and Causal Inference for Enhanced Neural PDE Solvers](https://openreview.net/forum?id=WkVxfNdIPk&referrer=%5Bthe%20profile%20of%20Fan%20Xu%5D(%2Fprofile%3Fid%3D~Fan_Xu5)). Cheng Yan, Ziwei Niu, WangZihao, Penghao Zhao, Kun Wang, Fan Xu#, Hao Wu#. Submitted to AAAI 2025.
- <span style="background-color: #003366; color: white; padding: 1px 4px; font-size: 12px;">``Arxiv``</span> [Open-CK: The Non-linear Chaotic Combustion Kinetics Benchmark](https://openreview.net/forum?id=A23C57icJt&referrer=%5Bthe%20profile%20of%20Fan%20Xu%5D(%2Fprofile%3Fid%3D~Fan_Xu5)). **Zaige Fei**, **Fan Xu**, Junyuan Mao, Yuxuan Liang, Qingsong Wen, Kun Wang, Hao Wu#, Yang Wang#. Subbmitted to ICLR 2025.
- <span style="background-color: #003366; color: white; padding: 1px 4px; font-size: 12px;">``Arxiv``</span> [P-Align: Self-Alignment in Physical Dynamic System Modeling](https://openreview.net/forum?id=AgTSjXh7vl&referrer=%5Bthe%20profile%20of%20Fan%20Xu%5D(%2Fprofile%3Fid%3D~Fan_Xu5)). Zhipeng Xu, Fan Xu, Hanbin Wang, Xinliang Xin, Lilan Peng, Qingsong Wen, Kun Wang#, Hao Wu#. Subbmitted to ICLR 2025.

#### Spatio-temporal Prediction
- <span style="background-color: #003366; color: white; padding: 1px 4px; font-size: 12px;">``ACM MM 2024``</span> [PastNet: introducing physical inductive biases for spatio-temporal video prediction](https://openreview.net/forum?id=mL0KvSwXzk&referrer=%5Bthe%20profile%20of%20Fan%20Xu%5D(%2Fprofile%3Fid%3D~Fan_Xu5)).**Hao Wu**, **Fan Xu**, Chong Chen, Xian-Sheng Hua, Xiao Luo#, Haixin Wang#
- <span style="background-color: #003366; color: white; padding: 1px 4px; font-size: 12px;">``Arxiv``</span> [Earthfarseer-V2: A Versatile All-in-One Model for Learning Complex Spatio-Temporal Dynamics](https://scholar.google.com/citations?view_op=view_citation&hl=en&user=HdXMhfcAAAAJ&citation_for_view=HdXMhfcAAAAJ:IWHjjKOFINEC). Hao Wu, Junfeng Fang, Yuxuan Liang, Guibin Zhang, Fan Xu, Wei Xiong, Qingsong Wen, Yu Zheng, Kun Wang#. Submitted to TPAMI.
- <span style="background-color: #003366; color: white; padding: 1px 4px; font-size: 12px;">``Arxiv``</span> [Spatio-temporal Twins with A Cache for Modeling Long-term System Dynamics](https://openreview.net/forum?id=aE6HazMgRz&referrer=%5BAuthor%20Console%5D(%2Fgroup%3Fid%3DICLR.cc%2F2024%2FConference%2FAuthors%23your-submissions)). Hao Wu, Kun Wang, Fan Xu, Yue Li, Xu Wang, Weiyan Wang, Haixin Wang, Xiao Luo#.  Arxiv, 2024.
- <span style="background-color: #003366; color: white; padding: 1px 4px; font-size: 12px;">``Arxiv``</span> [Spatio-temporal fluid dynamics modeling via physical-awareness and parameter diffusion guidance](https://arxiv.org/abs/2403.13850). **Hao Wu**, **Fan Xu**, Yifan Duan, Ziwei Niu, Weiyan Wang, Gaofeng Lu, Kun Wang, Yuxuan Liang#, Yang Wang#. Submitted to TKDE.

#### Anomaly Detection
- <span style="background-color: #003366; color: white; padding: 1px 4px; font-size: 12px;">``AAAI 2024``</span> [Revisiting Graph-based Fraud Detection in Sight of Heterophily and Spectrum](https://arxiv.org/abs/2312.06441). **Fan Xu**, Nan Wang, Hao Wu, Xuezhi Wen, Xibin Zhao, Hai Wan
- <span style="background-color: #003366; color: white; padding: 1px 4px; font-size: 12px;">``ECML PKDD 2024``</span> [GLADformer: A Mixed Perspective for Graph-level Anomaly Detection](https://arxiv.org/abs/2406.00734). **Fan Xu**, Nan Wang, Hao Wu, Xuezhi Wen, Dalin Zhang, Siyang Lu, Binyong Li, Wei Gong, Hai Wan, Xibin Zhao
- <span style="background-color: #003366; color: white; padding: 1px 4px; font-size: 12px;">``FCS 2024``</span> [Advanced Persistent Threat Detection via Mining Long-Term Features in Provenance Graphs](https://scholar.google.com/citations?view_op=view_citation&hl=en&user=HdXMhfcAAAAJ&citation_for_view=HdXMhfcAAAAJ:IWHjjKOFINEC). **Fan Xu**, Qinxin Zhao, Xiaoxiao Liu, Nan Wang, Meiqi Gao, Xuezhi Wen, Dalin Zhang
- <span style="background-color: #003366; color: white; padding: 1px 4px; font-size: 12px;">``IEEE ICPADS 2023``</span> [Few-shot Message-Enhanced Contrastive Learning for Graph Anomaly Detection](https://arxiv.org/abs/2311.10370). **Fan Xu**, Nan Wang, Xuezhi Wen, Meiqi Gao, Chaoqun Guo, Xibin Zhao
- <span style="background-color: #003366; color: white; padding: 1px 4px; font-size: 12px;">``IEEE SMC 2023``</span> [Exploring Global and Local Information for Anomaly Detection with Normal Samples](https://arxiv.org/abs/2306.02025). **Fan Xu**, Nan Wang, Xibin Zhao
- <span style="background-color: #003366; color: white; padding: 1px 4px; font-size: 12px;">``Arxiv``</span> [Reinforced Causal Discovery of Multivariate Time Series Anomaly Detection](https://openreview.net/forum?id=Z8aYM2spPP&referrer=%5Bthe%20profile%20of%20Fan%20Xu%5D(%2Fprofile%3Fid%3D~Fan_Xu5)). **Fan Xu**, Nan Wang, Hao Wu, Xuezhi Wen, Binyong Li, Hai Wan, Xibin Zhao. Submitted to AAAI, 2025.




# 💬 Project Skills
I am adept at developing various deep learning algorithms using PyTorch. Specifically, I am proficient in various applications of graph neural networks and spatio-temporal architectures. Also, I am highly interested in diverse neural operators for fluid dynamics modeling.

# 🎖 Honors and Awards
- *2022.11* China Collegiate Computing Competition - Intelligent Interaction Innovation Contest, National Finals Second Prize
- *2022.09* First-class Academic Scholarship of the University of Science and Technology of China.
- *2022.06* HarmonyOS Developer Competition - Global Campus AI Algorithm Elite Track, Star Excellence Award (7/1000+)

# 📖 Educations
- *2022.09 - present*, Master student, University of Science and Technology of China. 
- *2018.09 - 2022.06*, Undergraduate, Dalian Universuty of Technology. 

# 🐣 Invited Talks
- *2024.08*, Review of Anomaly Detection Applications and Outlook for Extreme Event Forecasting. @ Tsinghua University
- *2024.04*, Application and Research of Diffusion model within Timeseries Anomaly Detection. @ Beijing Jiaotong University








# 🕶️ Selected Publications

<div class='paper-box'><div class='paper-box-image'><div><div class="badge"></div><img src='../images/spark.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[SPARK: Physics-Guided Quantitative Augmentation for Dynamical System Modeling](https://openreview.net/forum?id=BZQmpsuW7D&referrer=%5Bthe%20profile%20of%20Fan%20Xu%5D(%2Fprofile%3Fid%3D~Fan_Xu5))

**Fan Xu**, Penghao Zhao, Zhipeng Xu, Xinliang Zhou, Xinping Yi, Qingsong Wen, Hao Wu#, Kun Wang#

</div>
</div>

---

<div class='paper-box'><div class='paper-box-image'><div><div class="badge"></div><img src='../images/LIPS.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Leveraging Lie Point Symmetries and Causal Inference for Enhanced Neural PDE Solvers](https://openreview.net/forum?id=MGNsP0LGte&referrer=%5Bthe%20profile%20of%20Fan%20Xu%5D(%2Fprofile%3Fid%3D~Fan_Xu5))

Cheng Yan, Ziwei Niu, WangZihao, Penghao Zhao, Kun Wang, Fan Xu#, Hao Wu#

</div>
</div>

---

<div class='paper-box'><div class='paper-box-image'><div><div class="badge"></div><img src='../images/CIDR.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Reinforced Causal Discovery of Multivariate Time Series Anomaly Detection](https://openreview.net/forum?id=MGNsP0LGte&referrer=%5Bthe%20profile%20of%20Fan%20Xu%5D(%2Fprofile%3Fid%3D~Fan_Xu5))

**Fan Xu**, Nan Wang#, Hao Wu, Xuezhi Wen, Binyong Li, Hai Wan, Xibin Zhao#

</div>
</div>

---

<div class='paper-box'><div class='paper-box-image'><div><div class="badge"></div><img src='../images/socst.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[SOCST: Learning Continuous Physics Simulation Overcoming Discretization from Partial Observations](https://openreview.net/forum?id=MGNsP0LGte&referrer=%5Bthe%20profile%20of%20Fan%20Xu%5D(%2Fprofile%3Fid%3D~Fan_Xu5))

**Fan Xu**, Cheng Yan, Penghao Zhao, Hao Wu, Kun Wang#, Yang Wang#

</div>
</div>

---

<div class='paper-box'><div class='paper-box-image'><div><div class="badge"></div><img src='../images/fire.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Open-CK: The Non-linear Chaotic Combustion Kinetics Benchmark](https://openreview.net/forum?id=mKFFEXeIQS&referrer=%5Bthe%20profile%20of%20Fan%20Xu%5D(%2Fprofile%3Fid%3D~Fan_Xu5))

**Zaige Fei**, **Fan Xu**, Junyuan Mao, Yuxuan Liang, Qingsong Wen, Kun Wang, Hao Wu#, Yang Wang#

</div>
</div>

---

<div class='paper-box'><div class='paper-box-image'><div><div class="badge"></div><img src='../images/p-align.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[P-Align: Self-Alignment in Physical Dynamic System Modeling](https://openreview.net/forum?id=AgTSjXh7vl&referrer=%5Bthe%20profile%20of%20Fan%20Xu%5D(%2Fprofile%3Fid%3D~Fan_Xu5))

Zhipeng Xu, Fan Xu, Hanbin Wang, Xinliang Xin, Lilan Peng, Qingsong Wen, Kun Wang#, Hao Wu#

</div>
</div>

---

<div class='paper-box'><div class='paper-box-image'><div><div class="badge"></div><img src='../images/pure.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[PURE: Prompt Evolution with Graph ODE for Out-of-distribution Fluid Dynamics Modeling](https://openreview.net/forum?id=z86knmjoUq&referrer=%5Bthe%20profile%20of%20Fan%20Xu%5D(%2Fprofile%3Fid%3D~Fan_Xu5))

Hao Wu, Changhu Wang, Fan Xu, Jinbao Xue, Chong Chen, Xian-Sheng Hua, Xiao Luo

*NeurIPS, 2024* 

</div>
</div>

---

<div class='paper-box'><div class='paper-box-image'><div><div class="badge"></div><img src='../images/diffusion.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Spatio-temporal fluid dynamics modeling via physical-awareness and parameter diffusion guidance](https://arxiv.org/abs/2403.13850)

**Hao Wu**, **Fan Xu**, Yifan Duan, Ziwei Niu, Weiyan Wang, Gaofeng Lu, Kun Wang, Yuxuan Liang#, Yang Wang#
</div>
</div>

---

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ACM MM 2024</div><img src='../images/MM_pastnet.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[PastNet: introducing physical inductive biases for spatio-temporal video prediction](https://openreview.net/forum?id=mL0KvSwXzk&referrer=%5Bthe%20profile%20of%20Fan%20Xu%5D(%2Fprofile%3Fid%3D~Fan_Xu5))

**Hao Wu**, **Fan Xu**, Chong Chen, Xian-Sheng Hua, Xiao Luo#, Haixin Wang#

*ACM MM, 2024*  
</div>
</div>

---

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ECML-PKDD 2024</div><img src='../images/ecml.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[GLADformer: A Mixed Perspective for Graph-level Anomaly Detection](https://arxiv.org/abs/2406.00734)

**Fan Xu**, Nan Wang, Hao Wu, Xuezhi Wen, Dalin Zhang, Siyang Lu, Binyong Li, Wei Gong, Hai Wan, Xibin Zhao

*ECML PKDD, 2024*  
</div>
</div>

---

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">AAAI 2024</div><img src='../images/aaai.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Revisiting Graph-based Fraud Detection in Sight of Heterophily and Spectrum](https://arxiv.org/abs/2312.06441)

**Fan Xu**, Nan Wang, Hao Wu, Xuezhi Wen, Xibin Zhao, Hai Wan

*AAAI, 2024*  
</div>
</div>





<!--
I am Fan Xu, currently a second-year Master's student in Computer Science and Technology, University of Science and Technology of China (USTC). Before that, I received my bachelor degree in Dalian Universuty of Technology in 2022. My research interest includes AI4Science, graph representation learning, anomaly detection, and large language model. Feel free to contact me for communication and collaboration!

- <span style="background-color: #003366; color: white; padding: 1px 4px; font-size: 12px;">``ACM MM 2024``</span> [PastNet: introducing physical inductive biases for spatio-temporal video prediction](https://openreview.net/forum?id=mL0KvSwXzk&referrer=%5Bthe%20profile%20of%20Fan%20Xu%5D(%2Fprofile%3Fid%3D~Fan_Xu5)).**Hao Wu**, **Fan Xu**, Chong Chen, Xian-Sheng Hua, Xiao Luo#, Haixin Wang#

- <span style="background-color: #003366; color: white; padding: 1px 4px; font-size: 12px;">``ACM MM 2024``</span> [PastNet: introducing physical inductive biases for spatio-temporal video prediction](https://openreview.net/forum?id=mL0KvSwXzk&referrer=%5Bthe%20profile%20of%20Fan%20Xu%5D(%2Fprofile%3Fid%3D~Fan_Xu5)).**Hao Wu**, **Fan Xu**, Chong Chen, Xian-Sheng Hua, Xiao Luo#, Haixin Wang#

- <span style="background-color: #003366; color: white; padding: 1px 4px; font-size: 12px;">``Arxiv``</span> [PastNet: introducing physical inductive biases for spatio-temporal video prediction](https://arxiv.org/abs/2305.11421).Hao Wu, Wei Xiong, Fan Xu, Xiao Luo#, Chong Chen, Xian-Sheng Hua, Haixin Wang#. Arxiv, 2024.

I am adept at developing various deep learning algorithms using PyTorch. Specifically, I am proficient in various applications of Graph Neural Networks, including node-level, edge-level, graph-level, and spatio-temporal graph modeling. Additionally, I have successfully reproduced models such as FourCastNet, GraphCast and MeshGraphNet.

- *2024.0826*: &nbsp; One paper was accepted by FCS 2024 (First Author).
- *2024.0716*: &nbsp; One paper was accepted by ACM MM 2024 (Co-First Author).
- *2024.0527*: &nbsp; One paper was accepted by ECML PKDD 2024 (First Author).
- *2023.1209*: &nbsp; One paper was accepted by AAAI 2024 (First Author).
- *2023.1027*: &nbsp; One paper was accepted by IEEE ICPADS 2023 (First Author).
- *2023.0601*: &nbsp; One paper was accepted by IEEE SMC 2023 (First Author).

#  💻 Research Experience
<div style="display: flex; align-items: center;">
  <img src="../images/ustc.png" alt="" style="width: 90px; margin-right: 50px; margin-left: 20px;"/>
  <ul style="list-style-type: disc; padding-left: 20px;">
    <li style="list-style-type: none;">Data Intelligence Research Center, Suzhou Institute for Advanced Research, USTC</li>
    <li style="list-style-type: none;"><em>2023.09 - 2024.06</em>, <strong>Remote Internship</strong></li>
    <li style="list-style-type: none;">mentored by Kun Wang and Yang Wang</li>
  </ul>
</div>

<div style="display: flex; align-items: center;">
  <img src="../images/tencent.png" alt="" style="width: 90px; margin-right: 50px; margin-left: 20px;"/>
  <ul style="list-style-type: disc; padding-left: 20px;">
    <li style="list-style-type: none;">Keen Security Lab, Tencent Technology (Shenzhen)</li>
    <li style="list-style-type: none;"><em>2022.04 - 2023.05</em>, <strong>Remote Internship</strong></li>
    <li style="list-style-type: none;">mentored by Mengxia Luo and Nan Wang</li>
  </ul>
</div>

# 🎖 Honors and Awards
- *2023.10* Outstanding Graduate Student Award of Zhejiang University (Top 20%).
- *2021.02* Outstanding Undergraduate Award (Top 5%).
- *2020.10* National Scholarship, highest scholarship from Ministry of Education of China (Top 1%).
- *2020.03* Provincial Hundred-excellent College Student Award (Top 1%). 

# 📖 Educations
- *2021.09 - present*, Ph.D student, Zhejiang University, Hangzhou. 
- *2017.09 - 2021.06*, Undergraduate, Anhui Agricultural University, Hefei. 

# 💬 Invited Talks
- *2021.06*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
- *2021.03*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet.  \| [\[video\]](https://github.com/)

# 💻 Internships
- *2019.05 - 2020.02*, [Lorem](https://github.com/), China.
-->
