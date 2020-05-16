import { Component, OnInit, OnDestroy, NgZone, TemplateRef } from '@angular/core';

import * as moment from 'moment';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-training-need',
  templateUrl: './training-need.component.html',
  styleUrls: ['./training-need.component.scss']
})
export class TrainingNeedComponent implements OnInit, OnDestroy {

  chart
  chart1
  chart2

  constructor(
    private zone: NgZone
  ) { }

  ngOnInit() {
    this.zone.runOutsideAngular(() => {
      this.getCharts()
    })
  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chart) {
        this.chart.dispose()
      }
      if (this.chart1) {
        this.chart1.dispose()
      }
      if (this.chart2) {
        this.chart2.dispose()
      }
    })
  }

  getCharts() {
    this.getChart()
    this.getChart1()
    this.getChart2()
  }

  getChart() {
    let chart = am4core.create("chartdiv", am4charts.XYChart);

    // Add data
    chart.data = [
      {
        "category": "Soft Skills",
        "negative1": -11,
        "negative2": -19,
        "positive1": 15,
        "positive2": 194
      },
      {
        "category": "Technology",
        "negative1": -12,
        "negative2": -14,
        "positive1": 119,
        "positive2": 175
      }, {
        "category": "Leadership",
        "negative1": -12,
        "negative2": -110,
        "positive1": 146,
        "positive2": 142
      },
      {
        "category": "Teambuilding",
        "negative1": -16,
        "negative2": -119,
        "positive1": 134,
        "positive2": 411
      },
      {
        "category": "Microsoft Office",
        "negative1": -113,
        "negative2": -123,
        "positive1": 149,
        "positive2": 125
      },
      {
        "category": "Health",
        "negative1": -15,
        "negative2": -128,
        "positive1": 149,
        "positive2": 118
      },
      {
        "category": "Environment",
        "negative1": -114,
        "negative2": -134,
        "positive1": 317,
        "positive2": 116
      },
      {
        "category": "Social Media",
        "negative1": -19,
        "negative2": -141,
        "positive1": 318,
        "positive2": 121
      }
    ]

    // Create axes
    let categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "category";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.inversed = true;
    categoryAxis.renderer.minGridDistance = 20;
    categoryAxis.renderer.axisFills.template.disabled = false;
    categoryAxis.renderer.axisFills.template.fillOpacity = 0.05;


    let valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
    valueAxis.min = -100;
    valueAxis.max = 100;
    valueAxis.renderer.minGridDistance = 50;
    valueAxis.renderer.ticks.template.length = 5;
    valueAxis.renderer.ticks.template.disabled = false;
    valueAxis.renderer.ticks.template.strokeOpacity = 0.4;
    valueAxis.renderer.labels.template.adapter.add("text", function (text) {
      return text == "Male" || text == "Female" ? text : text + "%";
    })

    // Legend
    chart.legend = new am4charts.Legend();
    chart.legend.position = "right";
    chart.legend.width = 120

    // Use only absolute numbers
    chart.numberFormatter.numberFormat = "#.#s";

    // Create series
    function createSeries(field, name, color) {
      let series = chart.series.push(new am4charts.ColumnSeries());
      series.dataFields.valueX = field;
      series.dataFields.categoryY = "category";
      series.stacked = true;
      series.name = name;
      series.stroke = color;
      series.fill = color;

      let label = series.bullets.push(new am4charts.LabelBullet);
      label.label.text = "{valueX}%";
      label.label.fill = am4core.color("#fff");
      label.label.strokeWidth = 0;
      label.label.truncate = false;
      label.label.hideOversized = true;
      label.locationX = 0.5;
      return series;
    }

    let interfaceColors = new am4core.InterfaceColorSet();
    let positiveColor = interfaceColors.getFor("positive");
    let negativeColor = interfaceColors.getFor("negative");

    createSeries("negative2", "Not needed", negativeColor.lighten(0.5));
    createSeries("negative1", "Moderate", negativeColor);
    createSeries("positive1", "Needed", positiveColor.lighten(0.5));
    createSeries("positive2", "Highly needed", positiveColor);

    this.chart = chart
  }

  getChart1() {
    let chart = am4core.create("chartdiv1", am4charts.XYChart);
    chart.paddingRight = 20;

    // Add data
    chart.data = [
      {
        "day": "Mon",
        "value": 101
      },
      {
        "day": "Tue",
        "value": 128
      },
      {
        "day": "Wed",
        "value": 173
      },
      {
        "day": "Thu",
        "value": 98
      },
      {
        "day": "Fri",
        "value": 124
      },
      {
        "day": "Sat",
        "value": 72
      },
      {
        "day": "Sun",
        "value": 76
      }
    ]

    // Create axes
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "day";
    categoryAxis.renderer.minGridDistance = 50;
    categoryAxis.renderer.grid.template.location = 0.5;
    categoryAxis.startLocation = 0.5;
    categoryAxis.endLocation = 0.5;

    // Create value axis
    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.baseValue = 0;

    // Create series
    let series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.valueY = "value";
    series.dataFields.categoryX = "day";
    series.strokeWidth = 2;
    series.tensionX = 0.77;

    // bullet is added because we add tooltip to a bullet for it to change color
    let bullet = series.bullets.push(new am4charts.Bullet());
    bullet.tooltipText = "{valueY}";

    bullet.adapter.add("fill", function (fill, target) {
      /*if (target.dataItem. < 0) {
        return am4core.color("#FF0000");
      }*/
      return fill;
    })
    let range = valueAxis.createSeriesRange(series);
    range.value = 0;
    range.endValue = -1000;
    range.contents.stroke = am4core.color("#FF0000");
    range.contents.fill = range.contents.stroke;

    // Add scrollbar
    let scrollbarX = new am4charts.XYChartScrollbar();
    scrollbarX.series.push(series);
    chart.scrollbarX = scrollbarX;

    chart.cursor = new am4charts.XYCursor();

    this.chart1 = chart
  }

  getChart2() {
    let chart = am4core.create("chartdiv2", am4charts.XYChart);
    chart.data = [{
      "month": "Jan",
      "value": 235,
      "lineColor": chart.colors.next()
    }, {
      "month": "Feb",
      "value": 262,
    }, {
      "month": "Mac",
      "value": 301,
    }, {
      "month": "Apr",
      "value": 205,
    }, {
      "month": "Mei",
      "value": 306,
      "lineColor": chart.colors.next()
    }, {
      "month": "Jun",
      "value": 341,
    }, {
      "month": "Jul",
      "value": 341,
    }, {
      "month": "Ogo",
      "value": 351,
      "lineColor": chart.colors.next()
    }, {
      "month": "Sep",
      "value": 331,
    }, {
      "month": "Okt",
      "value": 251,
    }, {
      "month": "Nov",
      "value": 241,
    }, {
      "month": "Dis",
      "value": 220,
    }];

    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.ticks.template.disabled = true;
    categoryAxis.renderer.line.opacity = 0;
    categoryAxis.renderer.grid.template.disabled = true;
    categoryAxis.renderer.minGridDistance = 40;
    categoryAxis.dataFields.category = "month";
    categoryAxis.startLocation = 0.4;
    categoryAxis.endLocation = 0.6;


    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;
    valueAxis.renderer.line.opacity = 0;
    valueAxis.renderer.ticks.template.disabled = true;
    valueAxis.min = 0;

    let lineSeries = chart.series.push(new am4charts.LineSeries());
    lineSeries.dataFields.categoryX = "month";
    lineSeries.dataFields.valueY = "value";
    lineSeries.tooltipText = "value: {valueY.value}";
    lineSeries.fillOpacity = 0.5;
    lineSeries.strokeWidth = 3;
    lineSeries.propertyFields.stroke = "lineColor";
    lineSeries.propertyFields.fill = "lineColor";

    let bullet = lineSeries.bullets.push(new am4charts.CircleBullet());
    bullet.circle.radius = 6;
    bullet.circle.fill = am4core.color("#fff");
    bullet.circle.strokeWidth = 3;

    chart.cursor = new am4charts.XYCursor();
    chart.cursor.behavior = "panX";
    chart.cursor.lineX.opacity = 0;
    chart.cursor.lineY.opacity = 0;

    chart.scrollbarX = new am4core.Scrollbar();
    chart.scrollbarX.parent = chart.bottomAxesContainer;

    this.chart2 = chart
  }

}
