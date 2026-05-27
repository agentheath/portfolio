---
layout: default
title: "Assessing the Impact of Content Quality on Metamate Response Feedback"
---

# Assessing the Impact of Content Quality on Metamate Response Feedback

# TL;DR:

**Goal:** 

* This study investigates whether the **quality of wiki content retrieved by Metamate directly influences user feedback on its responses**.   
* The objective is to identify specific wiki document characteristics—such as freshness, readability, and ownership—that reliably predict positive user feedback for Retrieval-Augmented Generation (RAG) responses.

**Key Findings:**

* **Quality Matters:** *There is a statistically significant correlation between higher quality wiki content and positive Metamate response feedback.*  
* **Predictive Signals:** *Key characteristics that predict positive feedback include high Page Scores (≥50), shorter sentence lengths, and content from highly-curated sources, such as the EP Doc Center. Metamate responses that retrieve pages exhibiting these characteristics are more likely to receive positive user feedback.*

# Introduction & Background

**Objective**: This study aims to determine if the quality of content retrieved by Metamate directly influences the quality and usefulness of its generated responses. We seek to understand how different aspects of content quality predict Metamate's creation of high-quality responses using Retrieval-Augmented Generation (RAG). By gaining a deeper understanding of the content layer within the RAG funnel, we can make data-driven decisions to strategically enhance and optimize RAG performance.

## RAG

Retrieval Augmented Generation (RAG) is an AI framework designed to improve outputs from large language models (LLMs). RAG achieves this by accessing external knowledge bases. When a prompt is submitted, RAG first retrieves relevant documents or data. The LLM then utilizes this retrieved information, alongside its own internal knowledge from training data to generate accurate and well-informed responses, thereby minimizing hallucinations and providing more current and specific answers.

| NOTE: The study does not examine how content quality affects model performance when the content is utilized as training data. The scope of this study is limited solely to examining how content quality affects Metamate responses when using Retrieval-Augmented Generation (RAG). |
| :---- |

Metamate utilizes RAG when user prompts require information beyond the scope of its training data. This is crucial because, for most models (including the latest versions of Llama, GPT, and Claude), training data can be a year or more out of date by the time the model is released. These models are also not trained on our internal data, so they often lack crucial context. RAG enables Metamate to search for and leverage current information from both the Internet and internal enterprise resources.

![][image1]  
\[[line chart of RAG as pct of MM responses over time \- 1/1/24 \- 9/30/25](https://fburl.com/daiquery/se8fvap0)\]

As more data sources are introduced, Metamate’s usage of RAG has steadily increased. In Q3 2025, Metamate used RAG for 34% of its responses.

## Measuring Metamate Response Quality

![][image2]

Metamate response quality, or rather, the user's perception of it, is measured directly through Positive Feedback Rate (PFR). PFR is determined by dividing the number of thumbs-up feedbacks Metamate responses receive from users by the total number of feedbacks within a specified time range.

The problem with PFR is the same as with other signals based on voluntary user feedback: low feedback rates.

* Since the start of 2024, only 0.66% of Metamate responses have received user feedback.   
* However, due to the high volume of overall Metamate activity ([104,234,674 total Metamate responses in that time period), we still have a significant sample of 683,539 responses that DID receive feedback](https://fburl.com/daiquery/pkvdb9df).  
* Even when we further limit our study to only Metamate responses using RAG, we still have [107,931 responses](https://fburl.com/daiquery/zzrltckr) that received feedback in our sample.

![][image3]

\[[line chart of overall Metamate PFR over time \- 1/1/24 \- 9/30/25](https://fburl.com/daiquery/2jr6jepw)\]

In the first three quarters of 2025, Metamate responses using RAG received positive feedback at a higher rate (54.3%) than non-RAG responses (49.7%). \[[query](https://fburl.com/daiquery/ztfolopl)\]

## Measuring Content Quality

Measuring the quality of the content retrieved by Metamate is more difficult. Metamate retrieves at least 80 different types of internal documents including but not limited to: Wikis, Workplace posts and chats, Wut definitions, Google Docs, Sheets, and Slides, Diffs, Calendar events, Daiquery and Bento notebooks, dashboards, code, user profiles, tasks, and People Portal articles.

This study specifically examined instances where Metamate retrieved wiki content. We chose this focus because, unlike many other document types, we have extensive metrics on various dimensions of wiki content quality. Furthermore, wikis are the second most frequently retrieved document type, only surpassed by Workplace (it's worth noting that granular content metrics for Workplace are not as readily available, suggesting a promising area for future research).

![][image4]

\[[pie chart of retrieved docs by type \- 1/1/25 \- 11/25/25](https://fburl.com/daiquery/cne731t9)\]

Workplace (45.1%) and Wiki (37.6%) together accounted for 82.7% of Metamate’s retrieved documents in 2025 (through 11/25/25).

We aimed to identify correlations between the positive feedback rate for Metamate responses and the tracked content metrics of the wiki pages utilized in those responses. Ultimately, **we seek to identify the wiki document characteristics that are the most reliable predictors of positive Metamate feedback** for RAG responses.

# Methodology

**Data timeframe**: In our [preliminary research](https://fb.workplace.com/groups/contentfyi/permalink/1826919987871946/), we looked at all historical Metamate feedback events up until May 7, 2025\. This included 97,015 Metamate responses that both retrieved documents and received user feedback. 

Due to improvements in Metamate’s RAG stack, we wanted to use a more recent time period for this expanded case study. For our binomial distribution analysis, we isolated the 6-month window from Mar 11, 2025 to Sep 11, 2025\. 

* This range includes [49,825 Metamate responses that both retrieved documents and received user feedback](https://fburl.com/daiquery/tznlxspv).   
* Of these responses, 31,524 retrieved at least one wiki page.  
* In this time window, there were 149,041 Metamate responses that received feedback but **did not** retrieve any documents.

For our logistic regression analysis, we built models for both H1 and H2 2025: 

* H1 ‘25 (Jan 1, 2025 \- Jun 30, 2025\)  
  * This range includes 41,382 Metamate responses that both retrieved documents and received user feedback.  
  * Of these responses, 26,256 retrieved at least one wiki page.  
* H2 ‘25 (Jul 1, 2025 \- Nov 18, 2025\)  
  * This range includes 37,849 Metamate responses that both retrieved documents and received user feedback.  
  * Of these responses, 24,975 retrieved at least one wiki page.

**Data source**: For this analysis, we used the `dim_metamate_feedback_details` Hive table provided by the Metamate team. This table provides comprehensive tracking of Metamate response activity, including feedback collection, document retrieval patterns, and conversation metadata. Despite its name suggesting a focus on feedback, the table actually captures nearly all Metamate responses regardless of whether feedback was collected, making it a broad-purpose data source for Metamate usage analysis.

**Unit of analysis**: As in our preliminary research, the units we analyzed were *individual Metamate feedback events* as represented in `dim_metamate_feedback_details` by `author_feedback.metamate_feedback_fbid`.

* One Metamate feedback event corresponds 1:1 to a particular Metamate response. There can be multiple responses in a single Metamate conversation, thus there are multiple opportunities for a user to give feedback within one conversation.  
* Each Metamate response either does or does not leverage RAG to retrieve documents. For responses that do leverage RAG, an average of 14.5 documents (of all types) are retrieved, and of these documents, an average of 6.075 are wikis.

**Analysis**: To identify whether there is any measurable effect here at all, we started by looking at responses that retrieved pages from either the [EP Doc Center](https://www.internalfb.com/wiki/EP_Doc_Center/) or [Infra Cloud](https://www.internalfb.com/wiki/Infra_Cloud/) wikis. These wikis are actively curated by internal documentation teams, so we assumed them to be of higher-than-average quality compared to the rest of the wiki.

We used these two sets of documentation as high-level indicators to answer the fundamental question: **does content quality have *any* effect on Metamate feedback?** Once we established an affirmative answer, we drilled-down into the specific characteristics of these pages to isolate in our analysis.

We identified the following signals of wiki content quality sourced from the `wiki_info`, `wiki_page_text_daily`, and `wiki_page_clean_text` Hive tables:

* **Page Score** is a composite metric that represents page freshness moderated by feedback. Page Scores start at 100 for newly-created content and begin decaying after 6 months. Recent unresolved negative feedback further reduces a wiki’s Page Score.  
* **Reading Ease score** (Flesch Reading Ease) measures how easy it is to understand the text on a wiki page. The score ranges from 0 (very difficult to read) to 100 (very easy to read), based on sentence length and word complexity. A higher reading ease score means the content is simpler and more accessible. Given the technical nature of our wiki content, a Reading Ease score of 40 or higher indicates a reasonable level of readability.  
* **Page freshness** is one of the strongest signals that content is accurate, relevant, and trustworthy.  
* **Certain content types**, such as FAQ pages and Getting Started pages, may be especially suitable as LLM reference material.  
* **Average sentence length** is a component of Flesch Reading Ease. We hypothesized that long sentences are inherently more ambiguous than short sentences and can lead to errors in LLM comprehension.  
* **Active content ownership** is a critical indicator of content health. Pages that do not have owners are less likely to be maintained.  
* **Pages with TL;DRs**, **Overviews**, or **Summaries** facilitate quicker understanding and retrieval of key information for humans and AI consumers alike.  
* **Pages with images and/or tables** may be more challenging for LLMs to comprehend.

We then analyzed this data in two ways: binomial distributions each based on a single signal and a logistic regression model which incorporated a group of signals.

# Results & Findings

## Binomial Distributions

In this analysis, we isolated the 6-month window from Mar 11, 2025 to Sep 11, 2025\. We partitioned the data set into two groups based on a single signal, such as whether a retrieved wiki page came from Infra Cloud. We then used two-proportion z-tests to verify that there were statistically-significant differences between the two groups in how likely responses were to receive positive feedback. In general, we found that each of these signals was predictive of positive feedback and in some cases the size of the effect was large.

| Signal | Effect Size (odds ratio)\* | p-value\*\* | Treatment group PFR | Control group PFR |
| :---: | :---: | :---: | :---: | :---: |
| Infra Cloud | 1.1513 | 0.0039 (0.39%) | 51.26% | 48.74% |
| Enterprise Products Doc Center | 1.4245 | Less than 0.0000 | 59.09% | 50.35% |
| Page Score \>= 50 | 1.4425 | Less than 0.0000 | 55.68% | 46.55% |
| Reading Ease \>= 40 | 1.9912	 | Less than 0.0000 | 60.06% | 43.02% |

\*The odds ratio is how much more likely a wiki page with this signal is to be in a retrieval set for a Metamate response that receives positive feedback. \*\*A p-value less than 0.05 (5%) is considered statistically significant. In most of these cases, the p-value was so small that Google Sheets reported zero for the value.

## Logistic Regression

**Motivation:** As described in the preceding section, we found two-proportion Z-tests for single variables, such as Page Score, to indeed be predictive of positive feedback. That said, we did not have a good view of how these signals related to each other. *For example, if we controlled for Page Score, was EP Doc Center still predictive?* To better understand these relationships and also to include additional, potentially-relevant signals, we built two logistic-regression models that incorporated a more comprehensive set of signals.

**Data:** We compiled two data sets that represented Metamate feedback events from H1 and H2 of 2025\. The data set for H1 had 40,875 rows, of which 21,317 (52.15%) represented positive feedback events. The data set for H2 had 38,295 rows, of which 22,611 (59.04%) represented positive feedback events. Each of these data sets included columns that corresponded to 20 potential signals of content quality. 

**Building the models:** Using Stepwise AIC, we built a logistic regression model with a reduced set of the above signals. From there, we eliminated any signals that were not statistically significant, further reducing the number of signals. Note that we arrived at a different set of signals for each half–although there was overlap.

**Signals:** The signals for each model (H1 and H2) are shown below. All signals are statistically significant. The effect size is a multiplier that represents the impact of that signal being present if all other variables are held constant. Effect sizes that represent increased probability of positive feedback are shown in **blue**; reduced probabilities are shown in **red**. For example, to answer our earlier question, a page from EP Doc Center *does* predict positive feedback irrespective of whether the Page Score is greater than or equal to 50\.

| H1 Data: 2025-01-01 to 2025-06-30 |  |  | H2 Data: 2025-07-01 to 2025-11-18 |  |
| ----- | ----- | ----- | ----- | ----- |
| **Signal** | **Effect Size** |  | **Signal** | **Effect Size** |
| **Intercept** | **`0.3478`** |  | **Intercept** | **`0.6303`** |
| **Page Score \>= 50** | **`1.4525`** |  | **Page Score \>= 50** | **`1.4229`** |
| **Page Score \>= 89.32 (p75)** | **`0.8694`** |  |  |  |
| **Updated in last 268 days (p25)** | **`1.3734`** |  | **Average sentence length \<= 17.9 (p75)** | **`1.3179`** |
| **Average sentence length \<= 12 (p50)** | **`1.1290`** |  | **Average sentence length \<= 9.6 (p25)** | **`1.1006`** |
| **Reading Ease score \>= 40** | **`1.1830`** |  | **Reading Ease score \>= 50** | **`0.8527`** |
| **Reading Ease score \>= 60** | **`0.8857`** |  | **Reading Ease score \>= 60** | **`0.8511`** |
| **All pages in retrieval set have images** | **`1.1842`** |  | **All pages in retrieval set have images** | **`1.1512`** |
| **User page** | **`1.1579`** |  | **User page** | **`1.1011`** |
| **No owner** | **`1.9459`** |  | **No owner** | **`1.7606`** |
| **FAQ** | **`1.0930`** |  | **Deep Wiki page** | **`0.7182`** |
| **EP Doc Center Page** | **`1.1131`** |  | **EP Doc Center page** | **`1.1455`** |
| **Infra Cloud Page** | **`0.7605`** |  | **Infra Cloud page** | **`0.8067`** |

**The *Intercept* term represents the effect if none of the other predictors are present.**

**Testing:** We used cross-validation to test the models. For each model (H1 and H2), we split the data set randomly into two subsets of equal size (S1 and S2). We first trained the model only with the data from S1 and subsequently tested its predictions using S2. Next, we reversed the process, training with S2 and testing with S1. The results of the cross validation are shown below.

| H1 Model |  |  | H2 Model |  |
| ----- | ----- | ----- | ----- | ----- |
| **Performance Metric** | **`Average across train/test sets`** |  | **Performance Metric** | **`Average across train/test sets`** |
| **Precision** | `59.98%` |  | **Precision** | `59.18%` |
| **Recall** | `68.63%` |  | **Recall** | `98.99%` |
| **F1-score** | `64.02%` |  | **F1-score** | `74.08%` |

*For more detailed information on the logistic-regression model, see the appendix at the end of this document.*

# Discussion

## Predictive Performance

We focused on **recall** as our metric of interest, with the idea that we wanted the model not to miss predicting positive feedback events; we wanted to avoid false negatives. For the H1 data set, we found a recall of **68.63%**. Remarkably, for the H2 data set, we found a recall of **98.99%**. One explanation for the high recall here is that the H2 data set itself has a higher prevalence of positive feedback events: 59.04% in H2 vs 52.15% in H1.

## Interpreting the Signals

We found statistically significant relationships between positive Metamate response feedback and the retrieval of wiki pages with specific characteristics. This was true in both our preliminary two-proportion Z-tests and later in our logistic regression models.

Our analysis of the tested samples reveals that specific wiki page characteristics reliably predict positive user feedback for Metamate responses. These characteristics include high Page Score, shorter sentence length, origination from either the `/EP_Doc_Center/` or `/User/` wikis, and the absence of a designated page owner.

**Freshness**   
In both data sets, wiki pages with Page Scores greater than or equal to 50 were predictive of positive feedback. In the H1 data set, wiki pages updated in the last 268 days (p25 page age) were also predictive. Interestingly, in the H1 data set, Page Scores greater than or equal to 89.32 (p75 Page Score) were predictive of lower rates of positive feedback, which could indicate that higher Page Scores run into diminishing returns.

**Sentence Length and Reading Ease**  
Both of these signals relate to writing quality. In both data sets, **shorter sentences were predictive of positive feedback**. Reading Ease here refers to the Flesch Reading Ease score. In the H1 data set, **Reading Ease greater than or equal to 40 was predictive of positive feedback, but higher Reading Ease scores were predictive of lower rates of positive feedback**. As with Page Score, this could indicate diminishing returns.

**Ownership: No-Owner Pages and User Pages**  
Surprisingly, **pages without owners** provide the strongest positive signal. When we investigated, we found that these appear to be very old pages whose owners have left the company. For example, the [most retrieved no-owner page is 19 years old](https://www.internalfb.com/wiki/Facebook_Slang/). Our theory about these pages is that they provide enduring value–so much so that they have outlasted their original owners. 

Conventional wisdom is that **user pages**–aka personal wiki pages–are not generally useful to a broader audience. However, in this case, we find that it is a relatively small subset of these pages that are frequently showing up in Metamates retrieval sets. These could be pages that have received an unusually high level of attention from their owners.

**EP Doc Center, InfraCloud, DeepWiki**  
**When pages are part of specific wiki roots, it seems to influence whether the page predicts positive feedback.** *However, we suspect that some less-obvious factors are in play.* For example, the types of questions that Metamate is trying to answer when it retrieves pages from InfraCloud could be more challenging than the questions that cause Metamate to retrieve from the highly-curated set of pages in EP Doc Center. In the case of DeepWiki, the technology to create these wikis is still relatively new; DeepWiki didn't show up in the model for H1. We should watch to see if DeepWiki develops into a positive signal over time.

## Potential Confounding Factors

While our study reveals strong correlations between wiki content quality and Metamate PFR, several confounding factors could influence these observed relationships:

* **Impossible to Root Cause Feedback**: It's impossible to pinpoint the exact aspect of Metamate's response that led to positive or negative user feedback. In many cases, users likely provided feedback based on features of the response entirely unrelated to the retrieved wiki page.  
* **Prompt Complexity and User Intent:** The complexity of the user's prompt or their underlying intent when querying Metamate could act as a confounder. Simpler, more direct queries might be more easily satisfied by a wider range of content quality, while highly specific or complex queries might inherently require more accurate and higher-quality information to yield positive user feedback. We have not controlled for variations in prompt complexity.  
* **Model Performance and Retrieval Nuances:** Although our study focuses on RAG-enabled responses, the underlying LLM's inherent capabilities and the nuances of Metamate's retrieval and re-ranking algorithms could play a significant role. Even with high-quality content, a less capable model or a less effective retrieval strategy might still lead to a poor response. Conversely, a very strong model might occasionally compensate for minor content deficiencies. The "Implicit Bias Objection" extensively discussed below highlights how Metamate's ranking system itself can be a major confounder, effectively selecting for higher-quality documents, which then appear to correlate with positive feedback.  
* **Time Sensitivity and Content Volatility:** The relevance and accuracy of information, especially in a fast-evolving technological environment, change rapidly. While page freshness is an important signal, the inherent volatility of certain topics might mean that even a fresh page can quickly become outdated. The impact of this time sensitivity on user feedback, independent of static content quality metrics, is difficult to isolate.

## Implicit Bias from Metamate’s Ranking and Retrieval System

A central methodological critique of our study concerns the **implicit bias** introduced by Metamate’s ranking and retrieval algorithms. The critique asserts that our analysis is fundamentally shaped by the selection effects of these algorithms. Specifically, the ranking and re-ranking processes act as filters, determining which documents are even eligible to be retrieved and thus included in our analysis. This filtering is not random; it is driven by a complex set of signals—such as content freshness, Page Score, and potentially other quality indicators—that the algorithm uses to optimize response quality.

![][image5]  
**E \= All Retrieved *Documents*; F \= All Wiki Pages; E ∩ F \= Retrieved Wiki pages**

The critique contends that, because our sample consists only of documents that have already passed through these algorithmic filters, any relationships we observe between document features (e.g., Reading Ease, Page Score, EP Doc Center membership) and positive feedback rates may be artifacts of the selection process rather than true reflections of causal or generalizable effects. In other words, the ranking algorithm itself may be a confounding variable, creating, masking, or distorting associations between document characteristics and user outcomes. As a result, the observed statistical relationships in our study may not be representative of the broader universe of all possible documents, nor can they be assumed to hold if the retrieval process changes.

**Implications**

The implicit bias described here has significant implications for the interpretation and generalizability of our findings. First, it means that our results are **conditional** on the current retrieval regime: they describe associations within the subset of documents surfaced by Metamate’s algorithms, but may not extend to documents that are never retrieved, or to scenarios where the retrieval logic is altered. 

Second, it raises caution against making **causal claims**—for example, that improving a document’s Reading Ease or Page Score will necessarily lead to higher positive feedback—since the observed relationships could be driven by the algorithm’s preferences rather than intrinsic document quality.

Moreover, we need to consider the potential for **collider bias** or **selection bias**: by conditioning our analysis on documents that have already been selected by the ranking system, we may inadvertently induce or amplify correlations between document features and outcomes that do not exist in the general population. This could lead to overestimating the impact of certain document attributes, or missing important effects that are masked by the selection process. In the context of product development or documentation strategy, this means that interventions based solely on our findings might not yield the expected improvements if the underlying retrieval dynamics change.

**Addressing Implicit Bias**

While the implicit bias critique is methodologically sound and deserves careful consideration, it does not invalidate the practical value of our findings. Our study is explicitly focused on the **current operational context** of Metamate: we seek to understand which document features are predictive of positive user feedback among *the set of documents that are actually retrieved and presented to users*. In this context, the selection effects of the ranking algorithm are not a flaw, but a reflection of the real-world system in which users interact with Metamate. *Even if the ranking process introduces some bias, the observed relationships are robust within the retrieved sample, and thus provide actionable insights for documentation teams and product owners seeking to improve user outcomes under the current system.*

From a practical standpoint, we need to consider the effects of this bias when interpreting our results. For example, we found that user pages predict positive feedback for Metamate’s answers. But after investigating, we found that it is only (or mostly) the user pages that are being retrieved by Metamate that have this property. Therefore, we cannot make the claim that user pages *in general* are helpful. 

Another example: We found that higher Page Scores also predict positive feedback. We know from discussions with colleagues on the Metamate team that the retrieval system biases for freshness–and freshness is a primary component of Page Score. But in this case, *the bias reinforces our finding*: to be in the retrieval set, a wiki page needs to already have a higher-than-average Page Score, but even within this “elite” group of pages, Page Score is *still* a differentiator for positive feedback. To take an analogy, getting into Harvard University requires strong preparation, but to do well in a class *at Harvard* requires a student to differentiate themselves *even more.* 

Finally, our analysis incorporates a diverse set of document attributes, some of which may not be directly used by the ranking algorithm–such as EP Doc Center membership–but which still exhibit consistently strong, and statistically-significant, associations with positive feedback. 

Ultimately, we consider our analysis to be a study not simply of wiki pages, but of how the properties of those wiki pages interact with the Metamate system to produce positive outcomes for Metamate’s users.

**Summation**

In summary, the implicit bias objection underscores the importance of interpreting our results within the context of Metamate’s current retrieval and ranking algorithms. While it cautions against overgeneralization and unwarranted causal claims, it does not diminish the practical significance of our findings for the present system. Our study demonstrates that, among documents retrieved by Metamate, higher-quality documentation—across multiple dimensions—is strongly associated with better user feedback. As long as the retrieval process continues to surface higher-quality docs, investing in documentation quality remains a sound strategy for improving RAG outcomes. *We encourage future work to build on these findings with experimental designs that can further disentangle algorithmic selection effects from intrinsic content quality.*

# Suggestions for further work

## Update the logistic regression model as Metamate evolves

The logistic-regression model changed between H1 and H2. The H2 model has a different set of signals and even where signals overlap between the two models, the coefficients/effect sizes have changed. These changes probably reflect evolution in the Metamate stack itself: the underlying model, how it is fine-tuned, the retrieval system, etc. In other words, the logistic-regression model is telling us not only about our Wiki, but also about Metamate itself. With that in mind, **it could be useful to build the model periodically to see what changes have occurred and relate these to both the Wiki and Metamate.** That said, we are somewhat constrained here by the availability of data to train the model. For example, when we split the data in order to do cross-validation, we lost statistical significance on some of our signals, which indicates that three months of data is probably not enough to build a robust model.

## Continue to identify new, potentially-relevant signals

**We have probably not identified the optimal set of signals to leverage.** For example, that no-owner pages provide such a strong signal appears to be misleading; instead, we should be focused on long-standing pages that continue to see activity–irrespective of ownership. Also, neither the H1 nor H2 models leverage interaction terms, that is, the effect that the terms have on each other–there is likely an opportunity to improve the model by exploring these terms.

## Deepen our interpretation of the current set of signals

Finally, **we should further investigate the signals already in the model**. For example, can we confirm that the discrepancy in effect size between EP Doc Center and Infra Cloud is related to the types of questions being asked? Why is it that sentence length is a positive signal whereas Reading Ease (of which sentence length is a component) is a negative signal? Relatedly, we should investigate more thoroughly the factors that resulted in the large improvement in recall between the H1 and H2 models.

## Is the decision to give feedback random?

Is there an implicit bias in the overall sample of responses that receive feedback? Is the set of responses that receive feedback non-random? Are certain kinds of user queries and responses more or less likely to receive user feedback?

# References & Resources

* [Preliminary Findings: Higher content quality predicts higher rates of positive Metamate feedback](https://fb.workplace.com/groups/contentfyi/permalink/1826919987871946/)  
* [Daiquery Notebook](https://fburl.com/daiquery/dd7um7kt)

# Appendix

## Detailed results from logistic-regression models

**H1 Data: 2025-01-01 to 2025-06-30 | n \= 40875**  
**Positive Feedback Events \= 21317 (52.15%)**

| Signal | Effect Size | Coefficients | Std Error | z value | p-value |
| ----- | ----- | ----- | ----- | ----- | ----- |
| **Intercept** | **`0.3478200607`** | `-1.05607` | `0.06867` | `-15.379` | `0` |
| **Page Score \>= 50** | **`1.45252003`** | `0.3733` | `0.07796` | `4.788` | `0.00000168` |
| **Page Score \>= 89.32 (p75)** | **`0.8693930104`** | `-0.13996` | `0.06484` | `-2.159` | `0.03088` |
| **Updated in last 268 days (p25)** | **`1.373373333`** | `0.31727` | `0.07321` | `4.334` | `0.0000147` |
| **Average sentence length \<= 12 (p50)** | **`1.12903129`** | `0.12136` | `0.04622` | `2.626` | `0.00865` |
| **Reading Ease score \>= 40** | **`1.182995759`** | `0.16805` | `0.07073` | `2.376` | `0.01751` |
| **Reading Ease score \>= 60** | **`0.8857150448`** | `-0.12136` | `0.03428` | `-3.54` | `0.0004` |
| **All pages in retrieval set have images** | **`1.184179346`** | `0.16905` | `0.038` | `4.449` | `0.00000864` |
| **FAQ** | **`1.092993213`** | `0.08892` | `0.03431` | `2.591` | `0.00956` |
| **User page** | **`1.157890714`** | `0.1466` | `0.03513` | `4.173` | `0.0000301` |
| **No owner** | **`1.945949436`** | `0.66575` | `0.06706` | `9.927` | `0` |
| **EP Doc Center Page** | **`1.113101207`** | `0.10715` | `0.03491` | `3.07` | `0.00214` |
| **Infra Cloud Page** | **`0.7605373926`** | `-0.27373` | `0.07006` | `3.907` | `0.0000035` |

| Metric | `n = 20437` | `n = 20438` | `Average` | `Percentage` |
| :---- | ----- | ----- | ----- | ----- |
| **Accuracy** | `0.596223` | `0.599031` | `0.597627` | `59.76%` |
| **Precision** | `0.599803` | `0.599869` | `0.599836` | `59.98%` |
| **Recall** | `0.68423` | `0.688394` | `0.686312` | `68.63%` |
| **F1-score** | `0.639241` | `0.64109` | `0.6401655` | `64.02%` |
| **True Negative Rate** | `0.499795` | `0.502142` | `0.5009685` | `50.10%` |

**H2 Data: 2025-07-01 to 2025-11-18 | n \= 38295**

**Positive Feedback Events \= 22611 (59.04%)**

| Signal | Effect Size | Coefficients | Std Error | z value | p-value |
| ----- | ----- | ----- | ----- | ----- | ----- |
| **Intercept** | **`0.6302933078`** | `-0.46157` | `0.08219` | `-5.616` | `0.0000000196` |
| **Page Score \>= 50** | **`1.422904208`** | `0.3527` | `0.07252` | `4.864` | `0.00000115` |
| **Average sentence length \<= 17.9 (p75)** | **`1.317940117`** | `0.27607` | `0.07594` | `3.635` | `0.000278` |
| **Average sentence length \<= 9.6 (p25)** | **`1.100615975`** | `0.09587` | `0.03374` | `2.842` | `0.00449` |
| **Reading Ease score \>= 50** | **`0.8526808087`** | `-0.15937` | `0.06074` | `-2.624` | `0.008699` |
| **Reading Ease score \>= 60** | **`0.8511218297`** | `-0.1612` | `0.04039` | `-3.991` | `0.0000658` |
| **All pages in retrieval set have images** | **`1.151194386`** | `0.1408` | `0.04297` | `3.277` | `0.001051` |
| **User page** | **`1.101089341`** | `0.0963` | `0.03506` | `2.746` | `0.006026` |
| **No owner** | **`1.760644614`** | `0.56568` | `0.08063` | `7.016` | `0` |
| **EP Doc Center page** | **`1.145532965`** | `0.13587` | `0.03869` | `3.512` | `0.000445` |
| **Deep Wiki page** | **`0.7182410802`** | `-0.33095` | `0.05468` | `-6.052` | `0.00000000143` |
| **Infra Cloud page** | **`0.8066543639`** | `-0.21486` | `0.06701` | `-3.206` | `0.001344` |

| Metric | `n = 19147` | `n = 19148` | `Average` | `Percentage` |
| :---- | ----- | ----- | ----- | ----- |
| **Accuracy** | `0.586515` | `0.59531` | `0.5909125` | `59.09%` |
| **Precision** | `0.587343` | `0.596327` | `0.591835` | `59.18%` |
| **Recall** | `0.992343` | `0.987433` | `0.989888` | `98.99%` |
| **F1-score** | `0.737926` | `0.743589` | `0.7407575` | `74.08%` |
| **True Negative Rate** | `0.010613` | `0.020981` | `0.015797` | `1.58%` |

[back](../)
