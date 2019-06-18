import { Chart } from 'chart.js';
import { Component, OnInit } from '@angular/core';
import { InsuredMeService } from './insured-me.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  response: any;
 public BarChart=[];
  Linechart: Chart;
  constructor(private dataservice: InsuredMeService) {
      console.log(dataservice);
  }

  ngOnInit(){
   
    this.dataservice.insuredData()
    .subscribe(

      (data)=>{
        console.log(data)
        let res:any=[];
      for(let obj of data){
        res.push(obj.report)
      }
        this.response =  res;
      },
      (error)=>{
        console.log(error)
      },

      ()=>{
        console.log('complete')
      }
    );
/////////////////////line graph////////////////
    this.LineChart = new Chart('lineChart', {
      type: 'line',
    data: {
     labels: ["1", "2", "3", "4", "5", "6","7","8","9","10"],
     datasets: [{
         label: 'Total messages',
         data: [4,3,0,4,4,4,41,41,41,41],
         fill:false,
         lineTension:0.2,
         borderColor:"blue",
         borderWidth: 1
     },
     {
      label: 'Send messages',
      data: [0,0,0,4,4,4,0,15,41,39],
      fill:false,
      lineTension:0.2,
      borderColor:"green",
      borderWidth: 1
  },
  {
    label: 'opened messages',
    data: [0,0,0,0,0,0,0,7,13,2],
    fill:false,
    lineTension:0.2,
    borderColor:"red",
    borderWidth: 1
},

{
  label: 'complaint messages',
  data: [0,0,0,0,0,0,0,0,0,0],
  fill:false,
  lineTension:0.2,
  borderColor:"orange",
  borderWidth: 1
},
{
  label: 'clicked messages',
  data: [0,0,0,0,0,0,0,0,0,0],
  fill:false,
  lineTension:0.2,
  borderColor:"brown",
  borderWidth: 1
},
{
  label: 'Bounced messages',
  data: [0,0,0,0,0,0,0,2,2,0],
  fill:false,
  lineTension:0.2,
  borderColor:"yellow",
  borderWidth: 1
},
{
  label: 'Bounced messages',
  data: [0,0,0,0,0,0,0,0,0,0],
  fill:false,
  lineTension:0.2,
  borderColor:"black",
  borderWidth: 1
}
    ]
    }, 
    options: {
     title:{
         text:"Line Chart",
         display:true
     },
     scales: {
         yAxes: [{
             ticks: {
                 beginAtZero:true
             }
         }]
     }
    }
    });


    
  }

}