---
layout: default
permalink: complex_query_by_type
title: Complex Query (Precision)
path: "assets/json/complex_query_by_type"
---

[Recall](complex_query_instance_by_type)
<label for="type">random FB15k-237 test sample:</label>
<select id="type" onchange="updateFigure()">
  <option value="1p">1p</option>
  <option value="2p">2p</option>
  <option value="3p">3p</option>
  <option value="2i">2i</option>
  <option value="3i">3i</option>
  <option value="pi">pi</option>
  <option value="ip">ip</option>
  <option value="2u-DNF">2u</option>
  <option value="up-DNF">up</option>
  <option value="2in">2in</option>
  <option value="3in">3in</option>
  <option value="inp">inp</option>
  <option value="pin">pin</option>
  <option value="pni">pni</option>
</select>
<select id="sample" onchange="updateFigure()">
  <option value="0">0</option>
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option>
</select>

We visualize the top-3 entities (mostly easy) and top-7 non-easy entities for each variable.
The entity is labeled as blue if it is an anchor variable or can be reached by traversal.
If the entity requires reasoning, it is labeled as green if it is correct, and red otherwise.
Click on the nodes to redirect to the corresponding Wikidata page.

<div id="container" style="height: 600px"></div>
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/echarts/dist/echarts.min.js"></script>
<script src="https://cdn.bootcss.com/jquery/3.2.1/jquery.min.js"></script>

<script type="text/javascript">
	var dom = document.getElementById("container");
	var myChart = echarts.init(dom);
	var option;
	
	updateFigure();
	myChart.on(myChart.on('click', 'series.sankey', e => window.open(e.data.url)));
	
    function updateFigure() {
		var type = document.getElementById("type").value;
		var sample = document.getElementById("sample").value;
		myChart.showLoading();
		$.get("{{ page.path }}/complex_query_" + type + "_" + sample + ".json", function (graph) {
			myChart.hideLoading();
			option = {
				title: {
					text: graph.title,
					textStyle: {
						fontSize: 12
					},
					top: "bottom",
					left: "right",
				},
				tooltip: {
					formtter: "{b}",
				},
				series: [{
						type: "sankey",
						nodes: graph.nodes,
						edges: graph.edges,
						emphasis: {
							focus: 'adjacency'
						},
						levels: [{
							depth: 0,
							itemStyle: {
								color: '#1f77b4'
							}
						},
						{
							depth: 1,
							itemStyle: {
								color: '#ff7f0e'
							}
						},
						{
							depth: 2,
							itemStyle: {
								color: '#2ca02c'
							}
						},
						{
							depth: 3,
							itemStyle: {
								color: '#d62728'
							}
						}],
						lineStyle: {
							curveness: 0.5
						}
				}]
			};
			myChart.setOption(option);
		});
	}
	
	function focus(param) {
		var option = myChart.getOption();
		var data = param.data;
		// Judge whether the relevant data of the node is correct 
		if (data != null && data != undefined) {
			if (data.url != null && data.url != undefined) {
				// According to the extended attributes of the node url Open a new page 
				window.open(data.url);
			}
		}
	}
</script>