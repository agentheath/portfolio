---
layout: default
title: "Assessing the Impact of Content Quality on AI Assistant Response Feedback"
---

# Assessing the Impact of Content Quality on AI Assistant Response Feedback

> **Portfolio note:** This case study uses a synthetic model to demonstrate a generalized documentation analytics methodology for AI-enabled enterprise knowledge systems. Company names, system names, dates, charts, table names, and quantitative examples have been replaced or generalized. The findings are illustrative outputs from a synthetic model, not measured findings from a former employer environment. It does not disclose employer-specific data, systems, measurements, queries, or findings.

# TL;DR:

**Goal:**

* This study investigates whether the **quality of internal doc content retrieved by an AI assistant directly influences user feedback on its responses**.
* The objective is to identify specific doc characteristics — such as freshness, readability, and ownership — that reliably predict positive user feedback for Retrieval-Augmented Generation (RAG) responses.

**Illustrative Findings from the Synthetic Model:**

* **Quality Matters:** *In the synthetic model, higher-quality internal doc content is statistically associated with positive AI assistant response feedback. These are illustrative outputs from the synthetic model, not measured findings from a former employer environment.*
* **Predictive Signals:** *Illustrative characteristics that predict positive feedback include high freshness/quality scores, shorter sentence lengths, and content from highly curated documentation sources. AI assistant responses that retrieve pages exhibiting these characteristics are more likely to receive positive user feedback in the synthetic analysis.*

# Introduction & Background

**Objective**: This study aims to determine if the quality of content retrieved by an internal AI assistant directly influences the quality and usefulness of its generated responses. We seek to understand how different aspects of content quality predict the assistant’s creation of high-quality responses using Retrieval-Augmented Generation (RAG). By gaining a deeper understanding of the content layer within the RAG funnel, we can make data-driven decisions to strategically enhance and optimize RAG performance.

## RAG

Retrieval-Augmented Generation (RAG) is an AI framework designed to improve outputs from large language models (LLMs). RAG achieves this by accessing external knowledge bases. When a prompt is submitted, RAG first retrieves relevant documents or data. The LLM then utilizes this retrieved information, alongside its own internal knowledge from training data, to generate accurate and well-informed responses, thereby minimizing hallucinations and providing more current and specific answers.

| NOTE: The study does not examine how content quality affects model performance when the content is utilized as training data. The scope of this study is limited solely to examining how content quality affects AI assistant responses when using Retrieval-Augmented Generation (RAG). |
| :---- |

An internal AI assistant utilizes RAG when user prompts require information beyond the scope of its training data. This is crucial because, for many models, training data can be months or years out of date by the time the model is released. These models are also not trained on a company’s internal knowledge by default, so they often lack crucial organizational context. RAG enables an enterprise AI assistant to search for and leverage current information from both the internet and internal enterprise resources.

As more data sources are introduced, the assistant’s usage of RAG steadily increases in the synthetic model. In the final quarter of the synthetic analysis period, the assistant used RAG for **31%** of its responses.

## Measuring AI Assistant Response Quality

AI assistant response quality, or rather, the user’s perception of it, is measured directly through Positive Feedback Rate (PFR). PFR is determined by dividing the number of positive feedback events that AI assistant responses receive from users by the total number of feedback events within a specified time range.

The problem with PFR is the same as with other signals based on voluntary user feedback: low feedback rates.

* In the synthetic model, only **0.8%** of assistant responses receive explicit user feedback.
* However, due to the high volume of overall assistant activity, this still produces a significant sample of responses that did receive feedback.
* Even when we further limit the study to only assistant responses using RAG, the synthetic sample still includes enough feedback events to support meaningful analysis.

In the synthetic model, assistant responses using RAG received positive feedback at a higher rate (**56.1%**) than non-RAG responses (**50.4%**) during the analysis period.

## Measuring Content Quality

Measuring the quality of the content retrieved by an AI assistant is more difficult. Enterprise AI assistants may retrieve many different types of internal documents, including, but not limited to, docs, posts and chats from internal knowledge platforms, glossary definitions, cloud documents, spreadsheets, slide decks, code, notebooks, dashboards, user profiles, tasks, and policy articles.

This study specifically examined instances where the assistant retrieved internal doc content. We chose this focus because, unlike many other document types, docs often have extensive metrics on various dimensions of content quality. Furthermore, docs are typically one of the most frequently retrieved document types, alongside collaboration and knowledge-platform content.

In the synthetic model, internal knowledge platform content (**43.2%**) and docs (**34.9%**) together account for **78.1%** of retrieved documents during the analysis period.

We aimed to identify correlations between the positive feedback rate for assistant responses and the tracked content metrics of the doc pages utilized in those responses. Ultimately, **we seek to identify the doc characteristics that are the most reliable predictors of positive AI assistant feedback** for RAG responses.

# Methodology

**Data timeframe**: In preliminary research, we looked at historical assistant feedback events that both retrieved documents and received user feedback.

Due to improvements in the assistant’s RAG stack, we wanted to use a more recent time period for this expanded case study. For our binomial distribution analysis, we isolated a recent 6-month synthetic window.

* This range includes **44,260** assistant responses that both retrieved documents and received user feedback.
* Of these responses, **28,410** retrieved at least one doc page.
* In this time window, there were **137,500** assistant responses that received feedback but **did not** retrieve any documents.

For our logistic regression analysis, we built models for two sequential half-year synthetic windows:

* H1 synthetic window
  * This range includes **39,840** assistant responses that both retrieved documents and received user feedback.
  * Of these responses, **24,920** retrieved at least one doc page.
* H2 synthetic window
  * This range includes **36,750** assistant responses that both retrieved documents and received user feedback.
  * Of these responses, **23,610** retrieved at least one doc page.

**Data source**: For this analysis, we used a synthetic assistant-feedback dataset representing response activity, feedback collection, document retrieval patterns, and conversation metadata. Despite its name in many systems suggesting a narrow focus on feedback, this type of table often captures broad assistant-response activity regardless of whether feedback was collected, making it a useful source for assistant usage analysis.

**Unit of analysis**: As in the preliminary research, the units we analyzed were *individual assistant feedback events*.

* One assistant feedback event corresponds 1:1 to a particular assistant response. There can be multiple responses in a single assistant conversation, thus there are multiple opportunities for a user to give feedback within one conversation.
* Each assistant response either does or does not leverage RAG to retrieve documents. For responses that do leverage RAG in the synthetic model, an average of **12.8** documents of all types are retrieved, and of these documents, an average of **5.4** are internal docs.

**Analysis**: To identify whether there is any measurable effect here at all, we started by looking at responses that retrieved pages from either a highly curated enterprise documentation center or a curated infrastructure documentation space. These docs are actively maintained by documentation teams, so we assumed them to be of higher-than-average quality compared to the broader documentation corpus.

We used these two sets of documentation as high-level indicators to answer the fundamental question: **does content quality have *any* effect on AI assistant feedback?** Once we established an affirmative answer in the synthetic model, we drilled down into the specific characteristics of these pages to isolate in our analysis.

We identified the following signals of doc content quality sourced from synthetic documentation metadata and clean-text datasets:

* **Page Score** is a composite metric that represents page freshness moderated by feedback. Page Scores start high for newly created content and begin decaying after a defined freshness window. Recent unresolved negative feedback further reduces a page’s Page Score.
* **Reading Ease score** measures how easy it is to understand the text on a doc page. The score ranges from 0, very difficult to read, to 100, very easy to read, based on sentence length and word complexity. A higher reading ease score means the content is simpler and more accessible. Given the technical nature of enterprise docs, a Reading Ease score of 40 or higher indicates a reasonable level of readability.
* **Page freshness** is one of the strongest signals that content is accurate, relevant, and trustworthy.
* **Certain content types**, such as FAQ pages and Getting Started pages, may be especially suitable as LLM reference material.
* **Average sentence length** is a component of Reading Ease. We hypothesized that long sentences are inherently more ambiguous than short sentences and can lead to errors in LLM comprehension.
* **Active content ownership** is a critical indicator of content health. Pages that do not have owners are less likely to be maintained.
* **Pages with TL;DRs**, **Overviews**, or **Summaries** facilitate quicker understanding and retrieval of key information for humans and AI consumers alike.
* **Pages with images and/or tables** may be more challenging for LLMs to comprehend.

We then analyzed this data in two ways: binomial distributions, each based on a single signal, and a logistic regression model, which incorporated a group of signals.

# Results & Findings

## Binomial Distributions

In this analysis, we isolated a recent 6-month synthetic window. We partitioned the data set into two groups based on a single signal, such as whether a retrieved doc page came from a curated documentation center. We then used two-proportion z-tests to verify that there were statistically significant differences between the two groups in how likely responses were to receive positive feedback. In general, we found that each of these signals was predictive of positive feedback and in some cases the size of the effect was large.

| Signal | Effect Size (odds ratio)* | p-value** | Treatment group PFR | Control group PFR |
| :---: | :---: | :---: | :---: | :---: |
| Curated infrastructure docs | 1.18 | 0.0062 | 52.1% | 48.0% |
| Enterprise documentation center | 1.39 | Less than 0.0001 | 58.4% | 50.1% |
| Page Score >= 50 | 1.47 | Less than 0.0001 | 56.2% | 46.9% |
| Reading Ease >= 40 | 1.88 | Less than 0.0001 | 59.7% | 44.0% |

\*The odds ratio is how much more likely a doc page with this signal is to be in a retrieval set for an assistant response that receives positive feedback.  
\**A p-value less than 0.05, or 5%, is considered statistically significant. In several cases, the synthetic p-value is represented as less than 0.0001 to avoid implying real precision.

## Logistic Regression

**Motivation:** As described in the preceding section, we found that two-proportion z-tests for single variables, such as Page Score, were indeed predictive of positive feedback. That said, we did not have a good view of how these signals related to each other. *For example, if we controlled for Page Score, was curated documentation center membership still predictive?* To better understand these relationships and also to include additional, potentially relevant signals, we built two logistic regression models that incorporated a more comprehensive set of signals.

**Data:** We compiled two synthetic data sets that represented assistant feedback events from two half-year windows. The H1 data set had **39,480** rows, of which **20,420** represented positive feedback events. The H2 data set had **37,120** rows, of which **21,360** represented positive feedback events. Each of these data sets included columns that corresponded to 20 potential signals of content quality.

**Building the models:** Using Stepwise AIC, we built a logistic regression model with a reduced set of the above signals. From there, we eliminated any signals that were not statistically significant, further reducing the number of signals. Note that we arrived at a different set of signals for each half — although there was overlap.

**Signals:** The illustrative signals for each model are summarized below. In the synthetic model, these signals are statistically significant. The effect size is a multiplier that represents the impact of that signal being present if all other variables are held constant. For example, to answer our earlier question, a page from the enterprise documentation center *does* predict positive feedback in the synthetic model irrespective of whether the Page Score is greater than or equal to 50.

| H1 Synthetic Data |  |  | H2 Synthetic Data |  |
| ----- | ----- | ----- | ----- | ----- |
| **Signal** | **Effect Size** |  | **Signal** | **Effect Size** |
| **Intercept** | **`0.41`** |  | **Intercept** | **`0.58`** |
| **Page Score >= 50** | **`1.44`** |  | **Page Score >= 50** | **`1.36`** |
| **High Page Score threshold** | **`0.91`** |  |  |  |
| **Updated in recent freshness window** | **`1.31`** |  | **Average sentence length <= upper threshold** | **`1.29`** |
| **Average sentence length <= median threshold** | **`1.14`** |  | **Average sentence length <= lower threshold** | **`1.08`** |
| **Reading Ease score >= 40** | **`1.16`** |  | **Reading Ease score >= 50** | **`0.88`** |
| **Reading Ease score >= 60** | **`0.90`** |  | **Reading Ease score >= 60** | **`0.86`** |
| **All pages in retrieval set have images** | **`1.17`** |  | **All pages in retrieval set have images** | **`1.13`** |
| **Personal knowledge page** | **`1.12`** |  | **Personal knowledge page** | **`1.09`** |
| **Long-standing page without current ownership** | **`1.82`** |  | **Long-standing page without current ownership** | **`1.67`** |
| **FAQ** | **`1.08`** |  | **Generated reference page** | **`0.74`** |
| **Enterprise documentation center page** | **`1.12`** |  | **Enterprise documentation center page** | **`1.15`** |
| **Curated infrastructure docs page** | **`0.79`** |  | **Curated infrastructure docs page** | **`0.82`** |

**The *Intercept* term represents the effect if none of the other predictors are present.**

**Testing:** We used cross-validation to test the models. For each model, we split the data set randomly into two subsets of equal size. We first trained the model only with the data from the first subset and subsequently tested its predictions using the second subset. Next, we reversed the process. The results of the cross-validation are shown below.

| H1 Model |  |  | H2 Model |  |
| ----- | ----- | ----- | ----- | ----- |
| **Performance Metric** | **Average across train/test sets** |  | **Performance Metric** | **Average across train/test sets** |
| **Precision** | `58.7%` |  | **Precision** | `60.4%` |
| **Recall** | `70.2%` |  | **Recall** | `91.6%` |
| **F1-score** | `63.9%` |  | **F1-score** | `72.8%` |

# Discussion

## Predictive Performance

We focused on **recall** as our metric of interest, with the idea that we wanted the model not to miss predicting positive feedback events; we wanted to avoid false negatives. For the H1 synthetic data set, we found a recall of **70.2%**. For the H2 synthetic data set, we found a recall of **91.6%**. One explanation for the higher recall here is that the H2 data set itself has a higher prevalence of positive feedback events.

## Interpreting the Signals

In the synthetic model, we found statistically significant relationships between positive AI assistant response feedback and the retrieval of doc pages with specific characteristics. This was true in both the preliminary two-proportion z-tests and later in the logistic regression models.

The tested samples suggest that specific doc page characteristics can predict positive user feedback for AI assistant responses in the synthetic model. These characteristics include high Page Score, shorter sentence length, origination from a curated enterprise documentation center, a small subset of heavily maintained personal knowledge pages, and long-standing pages without current ownership.

**Freshness**
In both data sets, doc pages with Page Scores greater than or equal to 50 were predictive of positive feedback. In the H1 data set, pages updated in a recent freshness window were also predictive. Interestingly, in the H1 data set, very high Page Scores were predictive of lower rates of positive feedback, which could indicate that higher Page Scores run into diminishing returns.

**Sentence Length and Reading Ease**
Both of these signals relate to writing quality. In both data sets, **shorter sentences were predictive of positive feedback**. Reading Ease here refers to a Flesch-style Reading Ease score. In the H1 data set, **Reading Ease greater than or equal to 40 was predictive of positive feedback, but higher Reading Ease scores were predictive of lower rates of positive feedback**. As with Page Score, this could indicate diminishing returns.

**Ownership: Long-Standing Pages and Personal Knowledge Pages**
Surprisingly, **long-standing pages without current ownership** appear as a strong positive signal in the synthetic model. When we investigated, these appeared to be older pages whose original owners had left or changed roles. Our theory about these pages is that the signal likely reflects survivorship and selection effects, rather than ownership status itself: these pages may provide enduring value — so much so that they have outlasted their original owners.

Conventional wisdom is that **personal knowledge pages** are not generally useful to a broader audience. However, in the synthetic model, it is a relatively small subset of heavily maintained personal knowledge pages that frequently shows up in the assistant’s retrieval sets. These could be pages that have received an unusually high level of attention from their owners. This should not be generalized to personal pages overall.

**Curated Documentation Spaces**
**When pages are part of specific doc roots, it seems to influence whether the page predicts positive feedback.** *However, we suspect that some less-obvious factors are in play.* For example, the types of questions that the assistant is trying to answer when it retrieves pages from one curated space could be more challenging than the questions that cause the assistant to retrieve from another highly curated set of pages. In the case of generated reference pages, the technology to create these pages may still be relatively new. We should watch to see if generated reference pages develop into a positive signal over time.

## Potential Confounding Factors

While our study reveals strong correlations between doc content quality and AI assistant PFR, several confounding factors could influence these observed relationships:

* **Impossible to Root Cause Feedback**: It is impossible to pinpoint the exact aspect of the assistant’s response that led to positive or negative user feedback. In many cases, users likely provided feedback based on features of the response entirely unrelated to the retrieved doc page.
* **Prompt Complexity and User Intent:** The complexity of the user’s prompt or their underlying intent when querying the assistant could act as a confounder. Simpler, more direct queries might be more easily satisfied by a wider range of content quality, while highly specific or complex queries might inherently require more accurate and higher-quality information to yield positive user feedback. We have not controlled for variations in prompt complexity.
* **Model Performance and Retrieval Nuances:** Although our study focuses on RAG-enabled responses, the underlying LLM’s inherent capabilities and the nuances of the assistant’s retrieval and re-ranking algorithms play a significant role. Even with high-quality content, a less capable model or a less effective retrieval strategy might still lead to a poor response. Conversely, a very strong model might occasionally compensate for minor content deficiencies. The “Implicit Bias Objection” extensively discussed below highlights how the assistant’s ranking system itself can be a major confounder, effectively selecting for higher-quality documents, which then appear to correlate with positive feedback.
* **Time Sensitivity and Content Volatility:** The relevance and accuracy of information, especially in a fast-evolving technological environment, change rapidly. While page freshness is an important signal, the inherent volatility of certain topics might mean that even a fresh page can quickly become outdated. The impact of this time sensitivity on user feedback, independent of static content quality metrics, is difficult to isolate.

## Implicit Bias from the AI Assistant’s Ranking and Retrieval System

A central methodological critique of our study concerns the **implicit bias** introduced by the assistant’s ranking and retrieval algorithms. The critique asserts that our analysis is fundamentally shaped by the selection effects of these algorithms. Specifically, the ranking and re-ranking processes act as filters, determining which documents are even eligible to be retrieved and thus included in our analysis. This filtering is not random; it is driven by a complex set of signals — such as content freshness, Page Score, and potentially other quality indicators — that the algorithm uses to optimize response quality.

**E = All Retrieved *Documents*; F = All Doc Pages; E ∩ F = Retrieved Doc Pages**

The critique contends that, because our sample consists only of documents that have already passed through these algorithmic filters, any relationships we observe between document features, such as Reading Ease, Page Score, or curated documentation center membership, and positive feedback rates may be artifacts of the selection process rather than true reflections of causal or generalizable effects. In other words, the ranking algorithm itself may be a confounding variable, creating, masking, or distorting associations between document characteristics and user outcomes. As a result, the observed statistical relationships in our study may not be representative of the broader universe of all possible documents, nor can they be assumed to hold if the retrieval process changes.

**Implications**

The implicit bias described here has significant implications for the interpretation and generalizability of our findings. First, it means that our results are **conditional** on the current retrieval regime: they describe associations within the subset of documents surfaced by the assistant’s algorithms, but may not extend to documents that are never retrieved, or to scenarios where the retrieval logic is altered.

Second, it raises caution against making **causal claims** — for example, that improving a document’s Reading Ease or Page Score will necessarily lead to higher positive feedback — since the observed relationships could be driven by the algorithm’s preferences rather than intrinsic document quality.

Moreover, we need to consider the potential for **collider bias** or **selection bias**: by conditioning our analysis on documents that have already been selected by the ranking system, we may inadvertently induce or amplify correlations between document features and outcomes that do not exist in the general population. This could lead to overestimating the impact of certain document attributes, or missing important effects that are masked by the selection process. In the context of product development or documentation strategy, this means that interventions based solely on our findings might not yield the expected improvements if the underlying retrieval dynamics change.

**Addressing Implicit Bias**

While the implicit bias critique is methodologically sound and deserves careful consideration, it does not invalidate the practical value of our findings. Our study is explicitly focused on the **current operational context** of the assistant: we seek to understand which document features are predictive of positive user feedback among *the set of documents that are actually retrieved and presented to users*. In this context, the selection effects of the ranking algorithm are not a flaw, but a reflection of the real-world system in which users interact with the assistant. *Even if the ranking process introduces some bias, the observed relationships are robust within the retrieved sample, and thus provide actionable insights for documentation teams and product owners seeking to improve user outcomes under the current system.*

From a practical standpoint, we need to consider the effects of this bias when interpreting our results. For example, the synthetic model suggests that a small subset of personal knowledge pages predicts positive feedback for the assistant’s answers. But after investigating, we found that it is only, or mostly, the personal knowledge pages that are being retrieved by the assistant that have this property. Therefore, we cannot make the claim that personal knowledge pages *in general* are helpful.

Another example: We found that higher Page Scores also predict positive feedback. We know that many retrieval systems bias for freshness — and freshness is a primary component of Page Score. But in this case, *the bias reinforces our finding*: to be in the retrieval set, a doc page needs to already have a higher-than-average Page Score, but even within this “elite” group of pages, Page Score is *still* a differentiator for positive feedback. To take an analogy, getting into Harvard University requires strong preparation, but doing well in a class *at Harvard* requires students to differentiate themselves *even more.*

Finally, our analysis incorporates a diverse set of document attributes, some of which may not be directly used by the ranking algorithm — such as curated documentation center membership — but which still exhibit consistently strong, and statistically significant, associations with positive feedback.

Ultimately, we consider our analysis to be a study not simply of doc pages, but of how the properties of those doc pages interact with the AI assistant system to produce positive outcomes for users.

**Summation**

In summary, the implicit bias objection underscores the importance of interpreting our results within the context of the assistant’s current retrieval and ranking algorithms. While it cautions against overgeneralization and unwarranted causal claims, it does not diminish the practical significance of our findings for the present system. The synthetic model demonstrates that, among documents retrieved by the assistant, higher-quality documentation — across multiple dimensions — is strongly associated with better user feedback. As long as the retrieval process continues to surface higher-quality docs, investing in documentation quality remains a sound strategy for improving RAG outcomes. *We encourage future work to build on these findings with experimental designs that can further disentangle algorithmic selection effects from intrinsic content quality.*

# Suggestions for further work

## Update the logistic regression model as the assistant evolves

The logistic regression model changed between the two synthetic half-year windows. The H2 model has a different set of signals and even where signals overlap between the two models, the coefficients and effect sizes have changed. These changes probably reflect evolution in the assistant stack itself: the underlying model, how it is fine-tuned, the retrieval system, etc. In other words, the logistic regression model is telling us not only about our docs, but also about the assistant itself. With that in mind, **it could be useful to build the model periodically to see what changes have occurred and relate these to both the docs and the assistant.** That said, we are somewhat constrained here by the availability of data to train the model. For example, when we split the data in order to do cross-validation, we lost statistical significance on some of our signals, which indicates that a shorter window of data is probably not enough to build a robust model.

## Continue to identify new, potentially relevant signals

**We have probably not identified the optimal set of signals to leverage.** For example, the apparent strength of long-standing pages without current ownership may be misleading; instead, we should be focused on long-standing pages that continue to see activity, irrespective of ownership. Also, neither model leverages interaction terms, that is, the effect that the terms have on each other. There is likely an opportunity to improve the model by exploring these terms.

## Deepen our interpretation of the current set of signals

Finally, **we should further investigate the signals already in the model**. For example, can we confirm that the discrepancy in effect size between two curated documentation spaces is related to the types of questions being asked? Why is it that sentence length is a positive signal whereas Reading Ease, of which sentence length is a component, is a negative signal? Relatedly, we should investigate more thoroughly the factors that resulted in the improvement in recall between the two models.

## Is the decision to give feedback random?

Is there an implicit bias in the overall sample of responses that receive feedback? Is the set of responses that receive feedback non-random? Are certain kinds of user queries and responses more or less likely to receive user feedback?

[back](../)
