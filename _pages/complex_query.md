---
layout: default
permalink: complex_query
title: Complex Query (Precision)
path: "assets/json/complex_query"
---

<label for="sample">random FB15k-237 test sample:</label>
<select id="sample" onchange="updateFigure()">
  <option value="0">0</option>
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option>
  <option value="5">5</option>
  <option value="6">6</option>
  <option value="7">7</option>
  <option value="8">8</option>
  <option value="9">9</option>
  <option value="10">10</option>
  <option value="11">11</option>
  <option value="12">12</option>
  <option value="13">13</option>
  <option value="14">14</option>
  <option value="15">15</option>
  <option value="16">16</option>
  <option value="17">17</option>
  <option value="18">18</option>
  <option value="19">19</option>
  <option value="20">20</option>
  <option value="21">21</option>
  <option value="22">22</option>
  <option value="23">23</option>
  <option value="24">24</option>
  <option value="25">25</option>
  <option value="26">26</option>
  <option value="27">27</option>
  <option value="28">28</option>
  <option value="29">29</option>
  <option value="30">30</option>
  <option value="31">31</option>
  <option value="32">32</option>
  <option value="33">33</option>
  <option value="34">34</option>
  <option value="35">35</option>
  <option value="36">36</option>
  <option value="37">37</option>
  <option value="38">38</option>
  <option value="39">39</option>
  <option value="40">40</option>
  <option value="41">41</option>
  <option value="42">42</option>
  <option value="43">43</option>
  <option value="44">44</option>
  <option value="45">45</option>
  <option value="46">46</option>
  <option value="47">47</option>
  <option value="48">48</option>
  <option value="49">49</option>
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
		var sample = document.getElementById("sample").value;
		myChart.showLoading();
		$.get("{{ page.path }}/complex_query_" + sample + ".json", function (graph) {
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