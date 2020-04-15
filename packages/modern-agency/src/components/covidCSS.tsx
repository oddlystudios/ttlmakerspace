/*General Css*/
/*Blue: #003861*/

import { createGlobalStyle } from "styled-components"

const CovidCSS = createGlobalStyle`
body{
	font-family: 'Fira Sans', sans-serif;
	text-rendering: optimizeLegibility;
}
h1, h2, h3{
	color:#003861;
	line-height: 2rem;
}
p{
	color:#2c2c2c;
}

li{
	font-size:0.875rem;
	margin-bottom:0.4rem;
}
h1{
	font-size:60px;
}


.flushRight{
	padding-right:0px !important;
}

.btn{
	background:#F2E704;
	text-decoration: none;
	padding: 0.7rem 2rem;
	border-radius: 0.3rem;
	font-size:0.875rem;
	font-weight:700;
	color:#000000;
}

/*Hero Section*/
.cvdHero h1, .cvdHero h2, .cvdHero p{
	color:#ffffff;
}
.cvdHero h1{
	line-height: 3rem;
	font-weight:600;
	
}
.cvdHero h2{
	font-weight:300;
}
/*Story Section*/


.cvdStory{
	margin-top:5rem;
	margin-bottom:5rem;
}
.cvdStory p{
	font-size:0.875rem;
}

.cvdWhat{
	margin-top:5rem;
	margin-bottom:5rem;
}

.prodCard{
	margin-bottom: 2rem;
}
.cvdProd .centerText{
	text-align:center;
	padding:2rem;
}
.cvdProd h2{
	font-size:2.4rem;
}
.cvdProd h3{
	font-size:1.6rem;
	font-weight:300;
}
.cvdProd .prodCard{
	background:#ffffff;
	padding:0.8rem;
	-webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.25);
	-moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.25);
	box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.25);
}
.cvdProd .prodCard .prodImg{
	text-align:center;
	padding:1.4rem;
	background: #ececec;
	min-height: 10.5rem;
}
.cvdProd .prodCard .cvdCount{
	font-size:2rem;
	color:#656565;
}

.statusBox{
	border-radius: 0.3rem;
	display:inline-block;
	padding:0.2rem 0.4rem;
	margin:0.8rem 0;
	font-size:	0.6875rem;
	color:#6E6E6E;
}

.cvdTeam{
	margin-top:5rem;
}
.cvdTeam h2{
	font-weight:300;
}

.cvdJoin{
	margin-top:5rem;
	margin-bottom:5rem;
}

.dot {
  height: 8px;
  width: 8px;
  margin-right:8px;
  border-radius: 50%;
  display: inline-block;
}

.green{background:#C5EBA9;}
.greenDot{background:#79C153;}

.orange{background:#FFF4F1;}
.orangeDot{background:#FF7F4B;}

.blue{background:#F1F0FB;}
.blueDot{background:#5347DE;}

.updateMe{
	background: red;
}
`
export default CovidCSS
