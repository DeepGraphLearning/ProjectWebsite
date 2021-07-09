---
layout: default
permalink: reasoning
title: Path Visualization of NBFNet
path: "assets/json/series"
---

<label for="sample">FB15k-237 sample:</label>
<select id="sample" onchange="updateFigure()">
  <option value="zurich-(city)_month">&lt;zurich (city), month, ?&gt;</option>
  <option value="williamsport-pa-msa_currency">&lt;williamsport pa msa, currency, ?&gt;</option>
  <option value="the-last-king-of-scotland-(film)_genre">&lt;the last king of scotland (film), genre, ?&gt;</option>
  <option value="the-french-colonial-empire_film-release-region-(-1)">&lt;?, film release region, the french colonial empire&gt;</option>
  <option value="restless-(2011-film)_film-release-region">&lt;restless (2011 film), film release region, ?&gt;</option>
  <option value="republic-djibouti_participating-countries-(-1)">&lt;?, participating countries, republic djibouti&gt;</option>
  <option value="pontefract-comments_contains-(-1)">&lt;?, contains, pontefract/comments&gt;</option>
  <option value="piranha-3d_nominated-for-(-1)">&lt;?, nominated for, piranha 3d&gt;</option>
  <option value="ocotber_month-(-1)">&lt;?, month^(-1), ocotber&gt;</option>
  <option value="norwood-park-asheville-nc_time-zones">&lt;norwood park asheville nc, time zones, ?&gt;</option>
  <option value="north-western-university_major-field-of-study">&lt;north western university, major field of study, ?&gt;</option>
  <option value="moritani_participating-countries-(-1)">&lt;?, participating countries, moritani&gt;</option>
  <option value="logos-and-uniforms-of-the-seattle-seahawks_colors">&lt;logos and uniforms of the seattle seahawks, colors, ?&gt;</option>
  <option value="lichenstein_jurisdiction-of-office-(-1)">&lt;?, jurisdiction of office, lichenstein&gt;</option>
  <option value="kiss-of-the-spider-woman-(film)_honored-for-(-1)">&lt;?, honored for, kiss of the spider woman (film)&gt;</option>
  <option value="folrenz_vacationer">&lt;folrenz, vacationer, ?&gt;</option>
  <option value="czechs-(bohemians)_medal">&lt;czechs (bohemians), medal, ?&gt;</option>
  <option value="currency-of-the-united-states_currency-(-1)">&lt;?, currency, currency of the united states&gt;</option>
  <option value="bronze-medals_medal-(-1)">&lt;?, medal, bronze medals&gt;</option>
	<option value="backson_film-release-region">&lt;backson film, release region, ?&gt;</option>
	<option value="2008-beijing-olympics_participating-countries">&lt;2008 beijing olympics, participating countries, ?&gt;</option>
	<option value="58th-academy-awards-nominees-and-winners_honored-for">&lt;58th academy awards nominees and winners, honored for, ?&gt;</option>
</select>

<div id="container" style="height: 500px"></div>

<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/echarts/dist/echarts.min.js"></script>
<script src="https://cdn.bootcss.com/jquery/3.2.1/jquery.min.js"></script>
<script type="text/javascript">
	var dom = document.getElementById("container");
	var myChart = echarts.init(dom);
	var option;
  
  updateFigure();
  
  function updateFigure() {
    myChart.showLoading();
    var sample = document.getElementById("sample").value;
    
    $.get("{{ page.path }}/" + sample + ".json", function (graph) {
      myChart.hideLoading();
      document.title = graph.title;
      option = {
        title: {
          text: graph.title,
          top: "bottom",
          left: "right",
        },
        tooltip: {
          formtter: "{b}",
        },
        series: [{
            type: "graph",
            layout: "force",
            nodes: graph.nodes,
            edges: graph.edges,
            autoCurveness: true,
            zoom: 2,
            roam: true,
            label: {
              show: true,
              position: "bottom",
            },
            labelLayout: {
              hideOverlap: true,
            },
            force: {
              repulsion: 100,
            }
        }]
      };

      if ("categories" in graph) {
        option.legend = {
          data: graph.categories.map(function (c) {
            return c.name;
          })
        };
        option.series.categories = graph.categories;
      }
      myChart.setOption(option);
    });
  }
</script>