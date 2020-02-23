---
layout: default
permalink: wikidata5m
title: Wikidata5m
image: /assets/images/wikidata5m.jpg
papers:
  - title: "KEPLER: A Unified Model for Knowledge Embedding and Pre-trained Language Representation"
    authors: [Xiaozhi Wang, Tianyu Gao, Zhaocheng Zhu, Zhiyuan Liu, Juanzi Li, Jian Tang]
    links:
      arXiv: https://arxiv.org/pdf/1911.06136.pdf
      BibTeX: /bibtex/kepler.txt
---

Info
----
Wikidata5m is a million-scale knowledge graph dataset with aligned corpus. This dataset integrates the [Wikidata] knowledge graph and [Wikipedia] pages. Each entity in Wikidata5m is described by a corresponding Wikipedia page, which enables the evaluation of link prediction over unseen entities.

The dataset is distributed as a knowledge graph, a corpus, and aliases. Besides, we also provide the inductive splits used in the [original paper].

| #Entity    | #Relation | #Triplet   |
|------------|-----------|------------|
| 4,818,679  | 828       | 21,354,359 |

[Wikidata]: https://www.wikidata.org
[Wikipedia]: https://www.wikipedia.org/
[original paper]: https://arxiv.org/pdf/1911.06136.pdf

Data
----
- [Knowledge graph], 169 MB. [Inductive setting], 160 MB.
- [Corpus], 962 MB.
- [Entity & relation aliases], 117 MB.

[Knowledge graph]: https://www.dropbox.com/s/86gukevtdbhpcbk/wikidata5m_triplet.txt.gz?dl=1
[Inductive setting]: https://www.dropbox.com/s/csed3cgal3m7rzo/wikidata5m_inductive.tar.gz?dl=1
[Corpus]: https://www.dropbox.com/s/7jp4ib8zo3i6m10/wikidata5m_text.txt.gz?dl=1
[Entity & relation aliases]: https://www.dropbox.com/s/s1q38yzqzvuodl3/wikidata5m_alias.tar.gz?dl=1

Format
------
Wikidata5m follows the identifier system used in Wikidata. Each entity and relation is identified by a unique ID. Entities are prefixed by `Q`, while relations are prefixed by `P`.

### Knowledge Graph
The knowledge graph is stored in the triplet list format. For example, the following line corresponds to *<Donald Trump, position held, President of the United States>*.
```
Q22686	P39	Q11696
```

### Corpus
Each line in the corpus is a document, indexed by entity ID. The following line shows the description for *Donald Trump*.
```
Q22686	Donald John Trump (born June 14, 1946) is the 45th and current president of the United States ...
```

### Alias
Each line lists the alias for an entity or relation. The following line shows the aliases of *Donald Trump*.
```
Q22686  donald john trump	45th president of the united states     @realdonaldtrump ...
```

Publications
------------
{% include publication papers=page.papers %}