import { Component, OnInit, OnDestroy, NgZone } from '@angular/core';
import { MocksService } from 'src/app/shared/services/mocks/mocks.service';
import * as moment from 'moment';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
am4core.useTheme(am4themes_animated);

export enum SelectionType {
  single = 'single',
  multi = 'multi',
  multiClick = 'multiClick',
  cell = 'cell',
  checkbox = 'checkbox'
}

@Component({
  selector: 'app-training-details',
  templateUrl: './training-details.component.html',
  styleUrls: ['./training-details.component.scss']
})
export class TrainingDetailsComponent implements OnInit, OnDestroy {

  // Checker
  editEnabled = false

  // Charts
  chart
  chart1
  chart2
  chart3

  // Table
  tableEntries: number = 5;
  tableSelected: any[] = [];
  tableTemp = [];
  tableActiveRow: any;
  tableRows: any[] = []
  SelectionType = SelectionType;

  constructor(
    private mockService: MocksService,
    private zone: NgZone
  ) {
    this.getData()
  }

  ngOnInit() {
    this.getCharts()
  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chart) {
        this.chart.dispose()
      }
      else if (this.chart1) {
        this.chart1.dispose()
      }
      else if (this.chart2) {
        this.chart2.dispose()
      }
      else if (this.chart3) {
        this.chart3.dispose()
      }
    })
  }

  getData() {
    this.mockService.getAll('admin-training/participant.data.json').subscribe(
      (res) => {
        // Success
        this.tableRows = [...res]
        this.tableTemp = this.tableRows.map((prop, key) => {
          return {
            ...prop,
            id: key
          };
        });
      },
      () => {
        // Unsuccess
      },
      () => {
        // After
      }
    )
  }

  getCharts() {
    this.zone.runOutsideAngular(() => {
      this.getChart()
      this.getChart1()
      this.getChart2()
      this.getChart3()
    })
  }

  getChart() {
    let chart = am4core.create("chartdiv", am4charts.PieChart);

    // Add and configure Series
    let pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "value";
    pieSeries.dataFields.category = "objective";

    // Let's cut a hole in our Pie chart the size of 30% the radius
    chart.innerRadius = am4core.percent(30);

    // Put a thick white border around each Slice
    pieSeries.slices.template.stroke = am4core.color("#fff");
    pieSeries.slices.template.strokeWidth = 2;
    pieSeries.slices.template.strokeOpacity = 1;
    pieSeries.slices.template
      // change the cursor on hover to make it apparent the object can be interacted with
      .cursorOverStyle = [
        {
          "property": "cursor",
          "value": "pointer"
        }
      ];

    pieSeries.alignLabels = true;
    pieSeries.labels.template.bent = true;
    pieSeries.labels.template.radius = 3;
    pieSeries.labels.template.padding(0, 0, 0, 0);

    pieSeries.ticks.template.disabled = true;

    // Create a base filter effect (as if it's not there) for the hover to return to
    let shadow = pieSeries.slices.template.filters.push(new am4core.DropShadowFilter);
    shadow.opacity = 0;

    // Create hover state
    let hoverState = pieSeries.slices.template.states.getKey("hover"); // normally we have to create the hover state, in this case it already exists

    // Slightly shift the shadow and make it more prominent on hover
    let hoverShadow = hoverState.filters.push(new am4core.DropShadowFilter);
    hoverShadow.opacity = 0.7;
    hoverShadow.blur = 5;

    // Add a legend
    //chart.legend = new am4charts.Legend();

    chart.data = [{
      "objective": "Excellent",
      "value": 20
    }, {
      "objective": "Good",
      "value": 2
    }, {
      "objective": "Satisfy",
      "value": 3
    }, {
      "objective": "Moderate",
      "value": 1
    }, {
      "objective": "Low",
      "value": 2
    }];

    this.chart = chart
  }

  getChart1() {
    let chart = am4core.create("chartdiv1", am4charts.XYChart);

    // Add data
    chart.data = [
      {
        "tajuk": "Task",
        "membantu": 83,
        "berkaitan": 17,
        "tidak berkaitan": 0,
      }, 
      {
        "tajuk": "Positive",
        "membantu": 80,
        "berkaitan": 20,
        "tidak_berkaitan": 0,
      }
    ];

    // Create axes
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "tajuk";
    categoryAxis.title.text = "Question";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 20;
    categoryAxis.renderer.cellStartLocation = 0.1;
    categoryAxis.renderer.cellEndLocation = 0.9;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.min = 0;
    valueAxis.title.text = "Percentage (%)";

    // Create series
    function createSeries(field, name, stacked) {
      let series = chart.series.push(new am4charts.ColumnSeries());
      series.dataFields.valueY = field;
      series.dataFields.categoryX = "tajuk";
      series.name = name;
      series.columns.template.tooltipText = "{name}: [bold]{valueY}[/]";
      series.stacked = stacked;
      series.columns.template.width = am4core.percent(95);
    }

    createSeries("membantu", "Helpful", false);
    createSeries("berkaitan", "Relevant", true);
    createSeries("tidak_membantu", "Not helpful", false);

    // Add legend
    chart.legend = new am4charts.Legend();
    this.chart1 = chart
  }

  getChart2(){
    let chart = am4core.create("chartdiv2", am4charts.XYChart);

    // Add data
    chart.data = [
      {
        "tajuk": "Accommodation",
        "cemerlang": 66,
        "bagus": 34,
        "memuaskan": 0,
        "sederhana": 0,
        "lemah": 0
      }, 
      {
        "tajuk": "Hall",
        "cemerlang": 72,
        "bagus": 28,
        "memuaskan": 0,
        "sederhana": 0,
        "lemah": 0
      },
      {
        "tajuk": "Food & Beverage",
        "cemerlang": 72,
        "bagus": 28,
        "memuaskan": 0,
        "sederhana": 0,
        "lemah": 0
      }
    ];

    // Create axes
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "tajuk";
    categoryAxis.title.text = "Question";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 20;
    categoryAxis.renderer.cellStartLocation = 0.1;
    categoryAxis.renderer.cellEndLocation = 0.9;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.min = 0;
    valueAxis.title.text = "Percentage (%)";

    // Create series
    function createSeries(field, name, stacked) {
      let series = chart.series.push(new am4charts.ColumnSeries());
      series.dataFields.valueY = field;
      series.dataFields.categoryX = "tajuk";
      series.name = name;
      series.columns.template.tooltipText = "{name}: [bold]{valueY}[/]";
      series.stacked = stacked;
      series.columns.template.width = am4core.percent(95);
    }

    createSeries("cemerlang", "Excellent", false);
    createSeries("bagus", "Good", true);
    createSeries("memuaskan", "Satisyfy", false);
    createSeries("sederhana", "Moderate", false);
    createSeries("lemah", "Low", false);

    // Add legend
    chart.legend = new am4charts.Legend();
    this.chart2 = chart
  }

  getChart3(){
    let chart = am4core.create("chartdiv3", am4charts.XYChart);

    // Add data
    chart.data = [
      {
        "tajuk": "Material",
        "cemerlang": 49,
        "bagus": 50,
        "memuaskan": 1,
        "sederhana": 0,
        "lemah": 0
      }, 
      {
        "tajuk": "Presentation",
        "cemerlang": 58,
        "bagus": 41,
        "memuaskan": 1,
        "sederhana": 0,
        "lemah": 0
      },
      {
        "tajuk": "Connection",
        "cemerlang": 57,
        "bagus": 43,
        "memuaskan": 0,
        "sederhana": 0,
        "lemah": 0
      }
    ];

    // Create axes
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "tajuk";
    categoryAxis.title.text = "Question";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 20;
    categoryAxis.renderer.cellStartLocation = 0.1;
    categoryAxis.renderer.cellEndLocation = 0.9;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.min = 0;
    valueAxis.title.text = "Percentage (%)";

    // Create series
    function createSeries(field, name, stacked) {
      let series = chart.series.push(new am4charts.ColumnSeries());
      series.dataFields.valueY = field;
      series.dataFields.categoryX = "tajuk";
      series.name = name;
      series.columns.template.tooltipText = "{name}: [bold]{valueY}[/]";
      series.stacked = stacked;
      series.columns.template.width = am4core.percent(95);
    }

    createSeries("cemerlang", "Excellent", false);
    createSeries("bagus", "Good", true);
    createSeries("memuaskan", "Satisfy", false);
    createSeries("sederhana", "Moderate", false);
    createSeries("lemah", "Low", false);

    // Add legend
    chart.legend = new am4charts.Legend();

    this.chart3 = chart
  }
  
  entriesChange($event) {
    this.tableEntries = $event.target.value;
  }

  filterTable($event) {
    let val = $event.target.value;
    this.tableTemp = this.tableRows.filter(function (d) {
      for (var key in d) {
        if (d[key].toLowerCase().indexOf(val) !== -1) {
          return true;
        }
      }
      return false;
    });
  }

  onSelect({ selected }) {
    this.tableSelected.splice(0, this.tableSelected.length);
    this.tableSelected.push(...selected);
  }

  onActivate(event) {
    this.tableActiveRow = event.row;
  }
  
}
