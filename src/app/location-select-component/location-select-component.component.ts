import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'location-select',
  templateUrl: './location-select-component.component.html',
  styleUrls: ['./location-select-component.component.scss']
})
export class LocationSelectComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  message = 'testing';
  
  locations = { "states": [
			{
				"name": "Alabama",
				"cities": [
					{
						"name": "auburn",
						"link": "https://auburn.craigslist.org/"
					},
					{
						"name": "birmingham",
						"link": "https://bham.craigslist.org/"
					},
					{
						"name": "dothan",
						"link": "https://dothan.craigslist.org/"
					},
					{
						"name": "florence / muscle shoals",
						"link": "https://shoals.craigslist.org/"
					},
					{
						"name": "gadsden-anniston",
						"link": "https://gadsden.craigslist.org/"
					},
					{
						"name": "huntsville / decatur",
						"link": "https://huntsville.craigslist.org/"
					},
					{
						"name": "mobile",
						"link": "https://mobile.craigslist.org/"
					},
					{
						"name": "montgomery",
						"link": "https://montgomery.craigslist.org/"
					},
					{
						"name": "tuscaloosa",
						"link": "https://tuscaloosa.craigslist.org/"
					}
				]
			},
			{
				"name": "Alaska",
				"cities": [
					{
						"name": "anchorage / mat-su",
						"link": "https://anchorage.craigslist.org/"
					},
					{
						"name": "fairbanks",
						"link": "https://fairbanks.craigslist.org/"
					},
					{
						"name": "kenai peninsula",
						"link": "https://kenai.craigslist.org/"
					},
					{
						"name": "southeast alaska",
						"link": "https://juneau.craigslist.org/"
					}
				]
			},
			{
				"name": "Arizona",
				"cities": [
					{
						"name": "flagstaff / sedona",
						"link": "https://flagstaff.craigslist.org/"
					},
					{
						"name": "mohave county",
						"link": "https://mohave.craigslist.org/"
					},
					{
						"name": "phoenix",
						"link": "https://phoenix.craigslist.org/"
					},
					{
						"name": "prescott",
						"link": "https://prescott.craigslist.org/"
					},
					{
						"name": "show low",
						"link": "https://showlow.craigslist.org/"
					},
					{
						"name": "sierra vista",
						"link": "https://sierravista.craigslist.org/"
					},
					{
						"name": "tucson",
						"link": "https://tucson.craigslist.org/"
					},
					{
						"name": "yuma",
						"link": "https://yuma.craigslist.org/"
					}
				]
			},
			{
				"name": "Arkansas",
				"cities": [
					{
						"name": "fayetteville ",
						"link": "https://fayar.craigslist.org/"
					},
					{
						"name": "fort smith",
						"link": "https://fortsmith.craigslist.org/"
					},
					{
						"name": "jonesboro",
						"link": "https://jonesboro.craigslist.org/"
					},
					{
						"name": "little rock",
						"link": "https://littlerock.craigslist.org/"
					},
					{
						"name": "texarkana",
						"link": "https://texarkana.craigslist.org/"
					}
				]
			},
			{
				"name": "California",
				"cities": [
					{
						"name": "bakersfield",
						"link": "https://bakersfield.craigslist.org/"
					},
					{
						"name": "chico",
						"link": "https://chico.craigslist.org/"
					},
					{
						"name": "fresno / madera",
						"link": "https://fresno.craigslist.org/"
					},
					{
						"name": "gold country",
						"link": "https://goldcountry.craigslist.org/"
					},
					{
						"name": "hanford-corcoran",
						"link": "https://hanford.craigslist.org/"
					},
					{
						"name": "humboldt county",
						"link": "https://humboldt.craigslist.org/"
					},
					{
						"name": "imperial county",
						"link": "https://imperial.craigslist.org/"
					},
					{
						"name": "inland empire",
						"link": "https://inlandempire.craigslist.org/"
					},
					{
						"name": "los angeles",
						"link": "https://losangeles.craigslist.org/"
					},
					{
						"name": "mendocino county",
						"link": "https://mendocino.craigslist.org/"
					},
					{
						"name": "merced",
						"link": "https://merced.craigslist.org/"
					},
					{
						"name": "modesto",
						"link": "https://modesto.craigslist.org/"
					},
					{
						"name": "monterey bay",
						"link": "https://monterey.craigslist.org/"
					},
					{
						"name": "orange county",
						"link": "https://orangecounty.craigslist.org/"
					},
					{
						"name": "palm springs",
						"link": "https://palmsprings.craigslist.org/"
					},
					{
						"name": "redding",
						"link": "https://redding.craigslist.org/"
					},
					{
						"name": "sacramento",
						"link": "https://sacramento.craigslist.org/"
					},
					{
						"name": "san diego",
						"link": "https://sandiego.craigslist.org/"
					},
					{
						"name": "san francisco bay area",
						"link": "https://sfbay.craigslist.org/"
					},
					{
						"name": "san luis obispo",
						"link": "https://slo.craigslist.org/"
					},
					{
						"name": "santa barbara",
						"link": "https://santabarbara.craigslist.org/"
					},
					{
						"name": "santa maria",
						"link": "https://santamaria.craigslist.org/"
					},
					{
						"name": "siskiyou county",
						"link": "https://siskiyou.craigslist.org/"
					},
					{
						"name": "stockton",
						"link": "https://stockton.craigslist.org/"
					},
					{
						"name": "susanville",
						"link": "https://susanville.craigslist.org/"
					},
					{
						"name": "ventura county",
						"link": "https://ventura.craigslist.org/"
					},
					{
						"name": "visalia-tulare",
						"link": "https://visalia.craigslist.org/"
					},
					{
						"name": "yuba-sutter",
						"link": "https://yubasutter.craigslist.org/"
					}
				]
			},
			{
				"name": "Colorado",
				"cities": [
					{
						"name": "boulder",
						"link": "https://boulder.craigslist.org/"
					},
					{
						"name": "colorado springs",
						"link": "https://cosprings.craigslist.org/"
					},
					{
						"name": "denver",
						"link": "https://denver.craigslist.org/"
					},
					{
						"name": "eastern CO",
						"link": "https://eastco.craigslist.org/"
					},
					{
						"name": "fort collins / north CO",
						"link": "https://fortcollins.craigslist.org/"
					},
					{
						"name": "high rockies",
						"link": "https://rockies.craigslist.org/"
					},
					{
						"name": "pueblo",
						"link": "https://pueblo.craigslist.org/"
					},
					{
						"name": "western slope",
						"link": "https://westslope.craigslist.org/"
					}
				]
			},
			{
				"name": "Connecticut",
				"cities": [
					{
						"name": "eastern CT",
						"link": "https://newlondon.craigslist.org/"
					},
					{
						"name": "hartford",
						"link": "https://hartford.craigslist.org/"
					},
					{
						"name": "new haven",
						"link": "https://newhaven.craigslist.org/"
					},
					{
						"name": "northwest CT",
						"link": "https://nwct.craigslist.org/"
					}
				]
			},
			{
				"name": "Delaware",
				"cities": [
					{
						"name": "delaware",
						"link": "https://delaware.craigslist.org/"
					}
				]
			},
			{
				"name": "District of Columbia",
				"cities": [
					{
						"name": "washington",
						"link": "https://washingtondc.craigslist.org/"
					}
				]
			},
			{
				"name": "Florida",
				"cities": [
					{
						"name": "broward county",
						"link": "http://miami.craigslist.org/brw/"
					},
					{
						"name": "daytona beach",
						"link": "https://daytona.craigslist.org/"
					},
					{
						"name": "florida keys",
						"link": "https://keys.craigslist.org/"
					},
					{
						"name": "fort lauderdale",
						"link": "https://fortlauderdale.craigslist.org/"
					},
					{
						"name": "ft myers / SW florida",
						"link": "https://fortmyers.craigslist.org/"
					},
					{
						"name": "gainesville",
						"link": "https://gainesville.craigslist.org/"
					},
					{
						"name": "heartland florida",
						"link": "https://cfl.craigslist.org/"
					},
					{
						"name": "jacksonville",
						"link": "https://jacksonville.craigslist.org/"
					},
					{
						"name": "lakeland",
						"link": "https://lakeland.craigslist.org/"
					},
					{
						"name": "miami / dade",
						"link": "http://miami.craigslist.org/mdc/"
					},
					{
						"name": "north central FL",
						"link": "https://lakecity.craigslist.org/"
					},
					{
						"name": "ocala",
						"link": "https://ocala.craigslist.org/"
					},
					{
						"name": "okaloosa / walton",
						"link": "https://okaloosa.craigslist.org/"
					},
					{
						"name": "orlando",
						"link": "https://orlando.craigslist.org/"
					},
					{
						"name": "panama city",
						"link": "https://panamacity.craigslist.org/"
					},
					{
						"name": "pensacola",
						"link": "https://pensacola.craigslist.org/"
					},
					{
						"name": "sarasota-bradenton",
						"link": "https://sarasota.craigslist.org/"
					},
					{
						"name": "south florida",
						"link": "https://miami.craigslist.org/"
					},
					{
						"name": "space coast",
						"link": "https://spacecoast.craigslist.org/"
					},
					{
						"name": "st augustine",
						"link": "https://staugustine.craigslist.org/"
					},
					{
						"name": "tallahassee",
						"link": "https://tallahassee.craigslist.org/"
					},
					{
						"name": "tampa bay area",
						"link": "https://tampa.craigslist.org/"
					},
					{
						"name": "treasure coast",
						"link": "https://treasure.craigslist.org/"
					},
					{
						"name": "palm beach county",
						"link": "http://miami.craigslist.org/pbc/"
					}
				]
			},
			{
				"name": "Georgia",
				"cities": [
					{
						"name": "albany ",
						"link": "https://albanyga.craigslist.org/"
					},
					{
						"name": "athens",
						"link": "https://athensga.craigslist.org/"
					},
					{
						"name": "atlanta",
						"link": "https://atlanta.craigslist.org/"
					},
					{
						"name": "augusta",
						"link": "https://augusta.craigslist.org/"
					},
					{
						"name": "brunswick",
						"link": "https://brunswick.craigslist.org/"
					},
					{
						"name": "columbus ",
						"link": "https://columbusga.craigslist.org/"
					},
					{
						"name": "macon / warner robins",
						"link": "https://macon.craigslist.org/"
					},
					{
						"name": "northwest GA",
						"link": "https://nwga.craigslist.org/"
					},
					{
						"name": "savannah / hinesville",
						"link": "https://savannah.craigslist.org/"
					},
					{
						"name": "statesboro",
						"link": "https://statesboro.craigslist.org/"
					},
					{
						"name": "valdosta",
						"link": "https://valdosta.craigslist.org/"
					}
				]
			},
			{
				"name": "Hawaii",
				"cities": [
					{
						"name": "hawaii",
						"link": "https://honolulu.craigslist.org/"
					}
				]
			},
			{
				"name": "Idaho",
				"cities": [
					{
						"name": "boise",
						"link": "https://boise.craigslist.org/"
					},
					{
						"name": "east idaho",
						"link": "https://eastidaho.craigslist.org/"
					},
					{
						"name": "lewiston / clarkston",
						"link": "https://lewiston.craigslist.org/"
					},
					{
						"name": "twin falls",
						"link": "https://twinfalls.craigslist.org/"
					}
				]
			},
			{
				"name": "Illinois",
				"cities": [
					{
						"name": "bloomington-normal",
						"link": "https://bn.craigslist.org/"
					},
					{
						"name": "champaign urbana",
						"link": "https://chambana.craigslist.org/"
					},
					{
						"name": "chicago",
						"link": "https://chicago.craigslist.org/"
					},
					{
						"name": "decatur",
						"link": "https://decatur.craigslist.org/"
					},
					{
						"name": "la salle co",
						"link": "https://lasalle.craigslist.org/"
					},
					{
						"name": "mattoon-charleston",
						"link": "https://mattoon.craigslist.org/"
					},
					{
						"name": "peoria",
						"link": "https://peoria.craigslist.org/"
					},
					{
						"name": "rockford",
						"link": "https://rockford.craigslist.org/"
					},
					{
						"name": "southern illinois",
						"link": "https://carbondale.craigslist.org/"
					},
					{
						"name": "springfield ",
						"link": "https://springfieldil.craigslist.org/"
					},
					{
						"name": "western IL",
						"link": "https://quincy.craigslist.org/"
					}
				]
			},
			{
				"name": "Indiana",
				"cities": [
					{
						"name": "bloomington",
						"link": "https://bloomington.craigslist.org/"
					},
					{
						"name": "evansville",
						"link": "https://evansville.craigslist.org/"
					},
					{
						"name": "fort wayne",
						"link": "https://fortwayne.craigslist.org/"
					},
					{
						"name": "indianapolis",
						"link": "https://indianapolis.craigslist.org/"
					},
					{
						"name": "kokomo",
						"link": "https://kokomo.craigslist.org/"
					},
					{
						"name": "lafayette / west lafayette",
						"link": "https://tippecanoe.craigslist.org/"
					},
					{
						"name": "muncie / anderson",
						"link": "https://muncie.craigslist.org/"
					},
					{
						"name": "richmond ",
						"link": "https://richmondin.craigslist.org/"
					},
					{
						"name": "south bend / michiana",
						"link": "https://southbend.craigslist.org/"
					},
					{
						"name": "terre haute",
						"link": "https://terrehaute.craigslist.org/"
					}
				]
			},
			{
				"name": "Iowa",
				"cities": [
					{
						"name": "ames",
						"link": "https://ames.craigslist.org/"
					},
					{
						"name": "cedar rapids",
						"link": "https://cedarrapids.craigslist.org/"
					},
					{
						"name": "des moines",
						"link": "https://desmoines.craigslist.org/"
					},
					{
						"name": "dubuque",
						"link": "https://dubuque.craigslist.org/"
					},
					{
						"name": "fort dodge",
						"link": "https://fortdodge.craigslist.org/"
					},
					{
						"name": "iowa city",
						"link": "https://iowacity.craigslist.org/"
					},
					{
						"name": "mason city",
						"link": "https://masoncity.craigslist.org/"
					},
					{
						"name": "quad cities",
						"link": "https://quadcities.craigslist.org/"
					},
					{
						"name": "sioux city",
						"link": "https://siouxcity.craigslist.org/"
					},
					{
						"name": "southeast IA",
						"link": "https://ottumwa.craigslist.org/"
					},
					{
						"name": "waterloo / cedar falls",
						"link": "https://waterloo.craigslist.org/"
					}
				]
			},
			{
				"name": "Kansas",
				"cities": [
					{
						"name": "lawrence",
						"link": "https://lawrence.craigslist.org/"
					},
					{
						"name": "manhattan",
						"link": "https://ksu.craigslist.org/"
					},
					{
						"name": "northwest KS",
						"link": "https://nwks.craigslist.org/"
					},
					{
						"name": "salina",
						"link": "https://salina.craigslist.org/"
					},
					{
						"name": "southeast KS",
						"link": "https://seks.craigslist.org/"
					},
					{
						"name": "southwest KS",
						"link": "https://swks.craigslist.org/"
					},
					{
						"name": "topeka",
						"link": "https://topeka.craigslist.org/"
					},
					{
						"name": "wichita",
						"link": "https://wichita.craigslist.org/"
					}
				]
			},
			{
				"name": "Kentucky",
				"cities": [
					{
						"name": "bowling green",
						"link": "https://bgky.craigslist.org/"
					},
					{
						"name": "eastern kentucky",
						"link": "https://eastky.craigslist.org/"
					},
					{
						"name": "lexington",
						"link": "https://lexington.craigslist.org/"
					},
					{
						"name": "louisville",
						"link": "https://louisville.craigslist.org/"
					},
					{
						"name": "owensboro",
						"link": "https://owensboro.craigslist.org/"
					},
					{
						"name": "western KY",
						"link": "https://westky.craigslist.org/"
					}
				]
			},
			{
				"name": "Louisiana",
				"cities": [
					{
						"name": "baton rouge",
						"link": "https://batonrouge.craigslist.org/"
					},
					{
						"name": "central louisiana",
						"link": "https://cenla.craigslist.org/"
					},
					{
						"name": "houma",
						"link": "https://houma.craigslist.org/"
					},
					{
						"name": "lafayette",
						"link": "https://lafayette.craigslist.org/"
					},
					{
						"name": "lake charles",
						"link": "https://lakecharles.craigslist.org/"
					},
					{
						"name": "monroe",
						"link": "https://monroe.craigslist.org/"
					},
					{
						"name": "new orleans",
						"link": "https://neworleans.craigslist.org/"
					},
					{
						"name": "shreveport",
						"link": "https://shreveport.craigslist.org/"
					}
				]
			},
			{
				"name": "Maine",
				"cities": [
					{
						"name": "maine",
						"link": "https://maine.craigslist.org/"
					}
				]
			},
			{
				"name": "Maryland",
				"cities": [
					{
						"name": "annapolis",
						"link": "https://annapolis.craigslist.org/"
					},
					{
						"name": "baltimore",
						"link": "https://baltimore.craigslist.org/"
					},
					{
						"name": "eastern shore",
						"link": "https://easternshore.craigslist.org/"
					},
					{
						"name": "frederick",
						"link": "https://frederick.craigslist.org/"
					},
					{
						"name": "southern maryland",
						"link": "https://smd.craigslist.org/"
					},
					{
						"name": "western maryland",
						"link": "https://westmd.craigslist.org/"
					}
				]
			},
			{
				"name": "Massachusetts",
				"cities": [
					{
						"name": "boston",
						"link": "https://boston.craigslist.org/"
					},
					{
						"name": "cape cod / islands",
						"link": "https://capecod.craigslist.org/"
					},
					{
						"name": "south coast",
						"link": "https://southcoast.craigslist.org/"
					},
					{
						"name": "western massachusetts",
						"link": "https://westernmass.craigslist.org/"
					},
					{
						"name": "worcester / central MA",
						"link": "https://worcester.craigslist.org/"
					}
				]
			},
			{
				"name": "Michigan",
				"cities": [
					{
						"name": "ann arbor",
						"link": "https://annarbor.craigslist.org/"
					},
					{
						"name": "battle creek",
						"link": "https://battlecreek.craigslist.org/"
					},
					{
						"name": "central michigan",
						"link": "https://centralmich.craigslist.org/"
					},
					{
						"name": "detroit metro",
						"link": "https://detroit.craigslist.org/"
					},
					{
						"name": "flint",
						"link": "https://flint.craigslist.org/"
					},
					{
						"name": "grand rapids",
						"link": "https://grandrapids.craigslist.org/"
					},
					{
						"name": "holland",
						"link": "https://holland.craigslist.org/"
					},
					{
						"name": "jackson ",
						"link": "https://jxn.craigslist.org/"
					},
					{
						"name": "kalamazoo",
						"link": "https://kalamazoo.craigslist.org/"
					},
					{
						"name": "lansing",
						"link": "https://lansing.craigslist.org/"
					},
					{
						"name": "monroe ",
						"link": "https://monroemi.craigslist.org/"
					},
					{
						"name": "muskegon",
						"link": "https://muskegon.craigslist.org/"
					},
					{
						"name": "northern michigan",
						"link": "https://nmi.craigslist.org/"
					},
					{
						"name": "port huron",
						"link": "https://porthuron.craigslist.org/"
					},
					{
						"name": "saginaw-midland-baycity",
						"link": "https://saginaw.craigslist.org/"
					},
					{
						"name": "southwest michigan",
						"link": "https://swmi.craigslist.org/"
					},
					{
						"name": "the thumb",
						"link": "https://thumb.craigslist.org/"
					},
					{
						"name": "upper peninsula",
						"link": "https://up.craigslist.org/"
					}
				]
			},
			{
				"name": "Minnesota",
				"cities": [
					{
						"name": "bemidji",
						"link": "https://bemidji.craigslist.org/"
					},
					{
						"name": "brainerd",
						"link": "https://brainerd.craigslist.org/"
					},
					{
						"name": "duluth / superior",
						"link": "https://duluth.craigslist.org/"
					},
					{
						"name": "mankato",
						"link": "https://mankato.craigslist.org/"
					},
					{
						"name": "minneapolis / st paul",
						"link": "https://minneapolis.craigslist.org/"
					},
					{
						"name": "rochester ",
						"link": "https://rmn.craigslist.org/"
					},
					{
						"name": "southwest MN",
						"link": "https://marshall.craigslist.org/"
					},
					{
						"name": "st cloud",
						"link": "https://stcloud.craigslist.org/"
					}
				]
			},
			{
				"name": "Mississippi",
				"cities": [
					{
						"name": "gulfport / biloxi",
						"link": "https://gulfport.craigslist.org/"
					},
					{
						"name": "hattiesburg",
						"link": "https://hattiesburg.craigslist.org/"
					},
					{
						"name": "jackson",
						"link": "https://jackson.craigslist.org/"
					},
					{
						"name": "meridian",
						"link": "https://meridian.craigslist.org/"
					},
					{
						"name": "north mississippi",
						"link": "https://northmiss.craigslist.org/"
					},
					{
						"name": "southwest MS",
						"link": "https://natchez.craigslist.org/"
					}
				]
			},
			{
				"name": "Missouri",
				"cities": [
					{
						"name": "columbia / jeff city",
						"link": "https://columbiamo.craigslist.org/"
					},
					{
						"name": "joplin",
						"link": "https://joplin.craigslist.org/"
					},
					{
						"name": "kansas city",
						"link": "https://kansascity.craigslist.org/"
					},
					{
						"name": "kirksville",
						"link": "https://kirksville.craigslist.org/"
					},
					{
						"name": "lake of the ozarks",
						"link": "https://loz.craigslist.org/"
					},
					{
						"name": "southeast missouri",
						"link": "https://semo.craigslist.org/"
					},
					{
						"name": "springfield",
						"link": "https://springfield.craigslist.org/"
					},
					{
						"name": "st joseph",
						"link": "https://stjoseph.craigslist.org/"
					},
					{
						"name": "st louis",
						"link": "https://stlouis.craigslist.org/"
					}
				]
			},
			{
				"name": "Montana",
				"cities": [
					{
						"name": "billings",
						"link": "https://billings.craigslist.org/"
					},
					{
						"name": "bozeman",
						"link": "https://bozeman.craigslist.org/"
					},
					{
						"name": "butte",
						"link": "https://butte.craigslist.org/"
					},
					{
						"name": "great falls",
						"link": "https://greatfalls.craigslist.org/"
					},
					{
						"name": "helena",
						"link": "https://helena.craigslist.org/"
					},
					{
						"name": "kalispell",
						"link": "https://kalispell.craigslist.org/"
					},
					{
						"name": "missoula",
						"link": "https://missoula.craigslist.org/"
					},
					{
						"name": "eastern montana",
						"link": "https://montana.craigslist.org/"
					}
				]
			},
			{
				"name": "Nebraska",
				"cities": [
					{
						"name": "grand island",
						"link": "https://grandisland.craigslist.org/"
					},
					{
						"name": "lincoln",
						"link": "https://lincoln.craigslist.org/"
					},
					{
						"name": "north platte",
						"link": "https://northplatte.craigslist.org/"
					},
					{
						"name": "omaha / council bluffs",
						"link": "https://omaha.craigslist.org/"
					},
					{
						"name": "scottsbluff / panhandle",
						"link": "https://scottsbluff.craigslist.org/"
					}
				]
			},
			{
				"name": "Nevada",
				"cities": [
					{
						"name": "elko",
						"link": "https://elko.craigslist.org/"
					},
					{
						"name": "las vegas",
						"link": "https://lasvegas.craigslist.org/"
					},
					{
						"name": "reno / tahoe",
						"link": "https://reno.craigslist.org/"
					}
				]
			},
			{
				"name": "New Hampshire",
				"cities": [
					{
						"name": "new hampshire",
						"link": "https://nh.craigslist.org/"
					}
				]
			},
			{
				"name": "New Jersey",
				"cities": [
					{
						"name": "central NJ",
						"link": "https://cnj.craigslist.org/"
					},
					{
						"name": "jersey shore",
						"link": "https://jerseyshore.craigslist.org/"
					},
					{
						"name": "north jersey",
						"link": "https://newjersey.craigslist.org/"
					},
					{
						"name": "south jersey",
						"link": "https://southjersey.craigslist.org/"
					}
				]
			},
			{
				"name": "New Mexico",
				"cities": [
					{
						"name": "albuquerque",
						"link": "https://albuquerque.craigslist.org/"
					},
					{
						"name": "clovis / portales",
						"link": "https://clovis.craigslist.org/"
					},
					{
						"name": "farmington",
						"link": "https://farmington.craigslist.org/"
					},
					{
						"name": "las cruces",
						"link": "https://lascruces.craigslist.org/"
					},
					{
						"name": "roswell / carlsbad",
						"link": "https://roswell.craigslist.org/"
					},
					{
						"name": "santa fe / taos",
						"link": "https://santafe.craigslist.org/"
					}
				]
			},
			{
				"name": "New York",
				"cities": [
					{
						"name": "albany",
						"link": "https://albany.craigslist.org/"
					},
					{
						"name": "binghamton",
						"link": "https://binghamton.craigslist.org/"
					},
					{
						"name": "buffalo",
						"link": "https://buffalo.craigslist.org/"
					},
					{
						"name": "catskills",
						"link": "https://catskills.craigslist.org/"
					},
					{
						"name": "chautauqua",
						"link": "https://chautauqua.craigslist.org/"
					},
					{
						"name": "elmira-corning",
						"link": "https://elmira.craigslist.org/"
					},
					{
						"name": "finger lakes",
						"link": "https://fingerlakes.craigslist.org/"
					},
					{
						"name": "glens falls",
						"link": "https://glensfalls.craigslist.org/"
					},
					{
						"name": "hudson valley",
						"link": "https://hudsonvalley.craigslist.org/"
					},
					{
						"name": "ithaca",
						"link": "https://ithaca.craigslist.org/"
					},
					{
						"name": "long island",
						"link": "https://longisland.craigslist.org/"
					},
					{
						"name": "new york city",
						"link": "https://newyork.craigslist.org/"
					},
					{
						"name": "oneonta",
						"link": "https://oneonta.craigslist.org/"
					},
					{
						"name": "plattsburgh-adirondacks",
						"link": "https://plattsburgh.craigslist.org/"
					},
					{
						"name": "potsdam-canton-massena",
						"link": "https://potsdam.craigslist.org/"
					},
					{
						"name": "rochester",
						"link": "https://rochester.craigslist.org/"
					},
					{
						"name": "syracuse",
						"link": "https://syracuse.craigslist.org/"
					},
					{
						"name": "twin tiers NY/PA",
						"link": "https://twintiers.craigslist.org/"
					},
					{
						"name": "utica-rome-oneida",
						"link": "https://utica.craigslist.org/"
					},
					{
						"name": "watertown",
						"link": "https://watertown.craigslist.org/"
					}
				]
			},
			{
				"name": "North Carolina",
				"cities": [
					{
						"name": "asheville",
						"link": "https://asheville.craigslist.org/"
					},
					{
						"name": "boone",
						"link": "https://boone.craigslist.org/"
					},
					{
						"name": "charlotte",
						"link": "https://charlotte.craigslist.org/"
					},
					{
						"name": "eastern NC",
						"link": "https://eastnc.craigslist.org/"
					},
					{
						"name": "fayetteville",
						"link": "https://fayetteville.craigslist.org/"
					},
					{
						"name": "greensboro",
						"link": "https://greensboro.craigslist.org/"
					},
					{
						"name": "hickory / lenoir",
						"link": "https://hickory.craigslist.org/"
					},
					{
						"name": "jacksonville ",
						"link": "https://onslow.craigslist.org/"
					},
					{
						"name": "outer banks",
						"link": "https://outerbanks.craigslist.org/"
					},
					{
						"name": "raleigh / durham / CH",
						"link": "https://raleigh.craigslist.org/"
					},
					{
						"name": "wilmington",
						"link": "https://wilmington.craigslist.org/"
					},
					{
						"name": "winston-salem",
						"link": "https://winstonsalem.craigslist.org/"
					}
				]
			},
			{
				"name": "North Dakota",
				"cities": [
					{
						"name": "bismarck",
						"link": "https://bismarck.craigslist.org/"
					},
					{
						"name": "fargo / moorhead",
						"link": "https://fargo.craigslist.org/"
					},
					{
						"name": "grand forks",
						"link": "https://grandforks.craigslist.org/"
					},
					{
						"name": "north dakota",
						"link": "https://nd.craigslist.org/"
					}
				]
			},
			{
				"name": "Ohio",
				"cities": [
					{
						"name": "akron / canton",
						"link": "https://akroncanton.craigslist.org/"
					},
					{
						"name": "ashtabula",
						"link": "https://ashtabula.craigslist.org/"
					},
					{
						"name": "athens ",
						"link": "https://athensohio.craigslist.org/"
					},
					{
						"name": "chillicothe",
						"link": "https://chillicothe.craigslist.org/"
					},
					{
						"name": "cincinnati",
						"link": "https://cincinnati.craigslist.org/"
					},
					{
						"name": "cleveland",
						"link": "https://cleveland.craigslist.org/"
					},
					{
						"name": "columbus",
						"link": "https://columbus.craigslist.org/"
					},
					{
						"name": "dayton / springfield",
						"link": "https://dayton.craigslist.org/"
					},
					{
						"name": "lima / findlay",
						"link": "https://limaohio.craigslist.org/"
					},
					{
						"name": "mansfield",
						"link": "https://mansfield.craigslist.org/"
					},
					{
						"name": "sandusky",
						"link": "https://sandusky.craigslist.org/"
					},
					{
						"name": "toledo",
						"link": "https://toledo.craigslist.org/"
					},
					{
						"name": "tuscarawas co",
						"link": "https://tuscarawas.craigslist.org/"
					},
					{
						"name": "youngstown",
						"link": "https://youngstown.craigslist.org/"
					},
					{
						"name": "zanesville / cambridge",
						"link": "https://zanesville.craigslist.org/"
					}
				]
			},
			{
				"name": "Oklahoma",
				"cities": [
					{
						"name": "lawton",
						"link": "https://lawton.craigslist.org/"
					},
					{
						"name": "northwest OK",
						"link": "https://enid.craigslist.org/"
					},
					{
						"name": "oklahoma city",
						"link": "https://oklahomacity.craigslist.org/"
					},
					{
						"name": "stillwater",
						"link": "https://stillwater.craigslist.org/"
					},
					{
						"name": "tulsa",
						"link": "https://tulsa.craigslist.org/"
					}
				]
			},
			{
				"name": "Oregon",
				"cities": [
					{
						"name": "bend",
						"link": "https://bend.craigslist.org/"
					},
					{
						"name": "corvallis/albany",
						"link": "https://corvallis.craigslist.org/"
					},
					{
						"name": "east oregon",
						"link": "https://eastoregon.craigslist.org/"
					},
					{
						"name": "eugene",
						"link": "https://eugene.craigslist.org/"
					},
					{
						"name": "klamath falls",
						"link": "https://klamath.craigslist.org/"
					},
					{
						"name": "medford-ashland",
						"link": "https://medford.craigslist.org/"
					},
					{
						"name": "oregon coast",
						"link": "https://oregoncoast.craigslist.org/"
					},
					{
						"name": "portland",
						"link": "https://portland.craigslist.org/"
					},
					{
						"name": "roseburg",
						"link": "https://roseburg.craigslist.org/"
					},
					{
						"name": "salem",
						"link": "https://salem.craigslist.org/"
					}
				]
			},
			{
				"name": "Pennsylvania",
				"cities": [
					{
						"name": "altoona-johnstown",
						"link": "https://altoona.craigslist.org/"
					},
					{
						"name": "cumberland valley",
						"link": "https://chambersburg.craigslist.org/"
					},
					{
						"name": "erie",
						"link": "https://erie.craigslist.org/"
					},
					{
						"name": "harrisburg",
						"link": "https://harrisburg.craigslist.org/"
					},
					{
						"name": "lancaster",
						"link": "https://lancaster.craigslist.org/"
					},
					{
						"name": "lehigh valley",
						"link": "https://allentown.craigslist.org/"
					},
					{
						"name": "meadville",
						"link": "https://meadville.craigslist.org/"
					},
					{
						"name": "philadelphia",
						"link": "https://philadelphia.craigslist.org/"
					},
					{
						"name": "pittsburgh",
						"link": "https://pittsburgh.craigslist.org/"
					},
					{
						"name": "poconos",
						"link": "https://poconos.craigslist.org/"
					},
					{
						"name": "reading",
						"link": "https://reading.craigslist.org/"
					},
					{
						"name": "scranton / wilkes-barre",
						"link": "https://scranton.craigslist.org/"
					},
					{
						"name": "state college",
						"link": "https://pennstate.craigslist.org/"
					},
					{
						"name": "williamsport",
						"link": "https://williamsport.craigslist.org/"
					},
					{
						"name": "york",
						"link": "https://york.craigslist.org/"
					}
				]
			},
			{
				"name": "Rhode Island",
				"cities": [
					{
						"name": "rhode island",
						"link": "https://providence.craigslist.org/"
					}
				]
			},
			{
				"name": "South Carolina",
				"cities": [
					{
						"name": "charleston",
						"link": "https://charleston.craigslist.org/"
					},
					{
						"name": "columbia",
						"link": "https://columbia.craigslist.org/"
					},
					{
						"name": "florence",
						"link": "https://florencesc.craigslist.org/"
					},
					{
						"name": "greenville / upstate",
						"link": "https://greenville.craigslist.org/"
					},
					{
						"name": "hilton head",
						"link": "https://hiltonhead.craigslist.org/"
					},
					{
						"name": "myrtle beach",
						"link": "https://myrtlebeach.craigslist.org/"
					}
				]
			},
			{
				"name": "South Dakota",
				"cities": [
					{
						"name": "northeast SD",
						"link": "https://nesd.craigslist.org/"
					},
					{
						"name": "pierre / central SD",
						"link": "https://csd.craigslist.org/"
					},
					{
						"name": "rapid city / west SD",
						"link": "https://rapidcity.craigslist.org/"
					},
					{
						"name": "sioux falls / SE SD",
						"link": "https://siouxfalls.craigslist.org/"
					},
					{
						"name": "south dakota",
						"link": "https://sd.craigslist.org/"
					}
				]
			},
			{
				"name": "Tennessee",
				"cities": [
					{
						"name": "chattanooga",
						"link": "https://chattanooga.craigslist.org/"
					},
					{
						"name": "clarksville",
						"link": "https://clarksville.craigslist.org/"
					},
					{
						"name": "cookeville",
						"link": "https://cookeville.craigslist.org/"
					},
					{
						"name": "jackson  ",
						"link": "https://jacksontn.craigslist.org/"
					},
					{
						"name": "knoxville",
						"link": "https://knoxville.craigslist.org/"
					},
					{
						"name": "memphis",
						"link": "https://memphis.craigslist.org/"
					},
					{
						"name": "nashville",
						"link": "https://nashville.craigslist.org/"
					},
					{
						"name": "tri-cities",
						"link": "https://tricities.craigslist.org/"
					}
				]
			},
			{
				"name": "Texas",
				"cities": [
					{
						"name": "abilene",
						"link": "https://abilene.craigslist.org/"
					},
					{
						"name": "amarillo",
						"link": "https://amarillo.craigslist.org/"
					},
					{
						"name": "austin",
						"link": "https://austin.craigslist.org/"
					},
					{
						"name": "beaumont / port arthur",
						"link": "https://beaumont.craigslist.org/"
					},
					{
						"name": "brownsville",
						"link": "https://brownsville.craigslist.org/"
					},
					{
						"name": "college station",
						"link": "https://collegestation.craigslist.org/"
					},
					{
						"name": "corpus christi",
						"link": "https://corpuschristi.craigslist.org/"
					},
					{
						"name": "dallas / fort worth",
						"link": "https://dallas.craigslist.org/"
					},
					{
						"name": "deep east texas",
						"link": "https://nacogdoches.craigslist.org/"
					},
					{
						"name": "del rio / eagle pass",
						"link": "https://delrio.craigslist.org/"
					},
					{
						"name": "el paso",
						"link": "https://elpaso.craigslist.org/"
					},
					{
						"name": "galveston",
						"link": "https://galveston.craigslist.org/"
					},
					{
						"name": "houston",
						"link": "https://houston.craigslist.org/"
					},
					{
						"name": "killeen / temple / ft hood",
						"link": "https://killeen.craigslist.org/"
					},
					{
						"name": "laredo",
						"link": "https://laredo.craigslist.org/"
					},
					{
						"name": "lubbock",
						"link": "https://lubbock.craigslist.org/"
					},
					{
						"name": "mcallen / edinburg",
						"link": "https://mcallen.craigslist.org/"
					},
					{
						"name": "odessa / midland",
						"link": "https://odessa.craigslist.org/"
					},
					{
						"name": "san angelo",
						"link": "https://sanangelo.craigslist.org/"
					},
					{
						"name": "san antonio",
						"link": "https://sanantonio.craigslist.org/"
					},
					{
						"name": "san marcos",
						"link": "https://sanmarcos.craigslist.org/"
					},
					{
						"name": "southwest TX",
						"link": "https://bigbend.craigslist.org/"
					},
					{
						"name": "texoma",
						"link": "https://texoma.craigslist.org/"
					},
					{
						"name": "tyler / east TX",
						"link": "https://easttexas.craigslist.org/"
					},
					{
						"name": "victoria ",
						"link": "https://victoriatx.craigslist.org/"
					},
					{
						"name": "waco",
						"link": "https://waco.craigslist.org/"
					},
					{
						"name": "wichita falls",
						"link": "https://wichitafalls.craigslist.org/"
					}
				]
			},
			{
				"name": "Utah",
				"cities": [
					{
						"name": "logan",
						"link": "https://logan.craigslist.org/"
					},
					{
						"name": "ogden-clearfield",
						"link": "https://ogden.craigslist.org/"
					},
					{
						"name": "provo / orem",
						"link": "https://provo.craigslist.org/"
					},
					{
						"name": "salt lake city",
						"link": "https://saltlakecity.craigslist.org/"
					},
					{
						"name": "st george",
						"link": "https://stgeorge.craigslist.org/"
					}
				]
			},
			{
				"name": "Vermont",
				"cities": [
					{
						"name": "vermont",
						"link": "https://vermont.craigslist.org/"
					}
				]
			},
			{
				"name": "Virginia",
				"cities": [
					{
						"name": "charlottesville",
						"link": "https://charlottesville.craigslist.org/"
					},
					{
						"name": "danville",
						"link": "https://danville.craigslist.org/"
					},
					{
						"name": "fredericksburg",
						"link": "https://fredericksburg.craigslist.org/"
					},
					{
						"name": "hampton roads",
						"link": "https://norfolk.craigslist.org/"
					},
					{
						"name": "harrisonburg",
						"link": "https://harrisonburg.craigslist.org/"
					},
					{
						"name": "lynchburg",
						"link": "https://lynchburg.craigslist.org/"
					},
					{
						"name": "new river valley",
						"link": "https://blacksburg.craigslist.org/"
					},
					{
						"name": "richmond",
						"link": "https://richmond.craigslist.org/"
					},
					{
						"name": "roanoke",
						"link": "https://roanoke.craigslist.org/"
					},
					{
						"name": "southwest VA",
						"link": "https://swva.craigslist.org/"
					},
					{
						"name": "winchester",
						"link": "https://winchester.craigslist.org/"
					}
				]
			},
			{
				"name": "Washington",
				"cities": [
					{
						"name": "bellingham",
						"link": "https://bellingham.craigslist.org/"
					},
					{
						"name": "kennewick-pasco-richland",
						"link": "https://kpr.craigslist.org/"
					},
					{
						"name": "moses lake",
						"link": "https://moseslake.craigslist.org/"
					},
					{
						"name": "olympic peninsula",
						"link": "https://olympic.craigslist.org/"
					},
					{
						"name": "pullman / moscow",
						"link": "https://pullman.craigslist.org/"
					},
					{
						"name": "seattle-tacoma",
						"link": "https://seattle.craigslist.org/"
					},
					{
						"name": "skagit / island / SJI",
						"link": "https://skagit.craigslist.org/"
					},
					{
						"name": "spokane / coeur d'alene",
						"link": "https://spokane.craigslist.org/"
					},
					{
						"name": "wenatchee",
						"link": "https://wenatchee.craigslist.org/"
					},
					{
						"name": "yakima",
						"link": "https://yakima.craigslist.org/"
					}
				]
			},
			{
				"name": "West Virginia",
				"cities": [
					{
						"name": "charleston ",
						"link": "https://charlestonwv.craigslist.org/"
					},
					{
						"name": "eastern panhandle",
						"link": "https://martinsburg.craigslist.org/"
					},
					{
						"name": "huntington-ashland",
						"link": "https://huntington.craigslist.org/"
					},
					{
						"name": "morgantown",
						"link": "https://morgantown.craigslist.org/"
					},
					{
						"name": "northern panhandle",
						"link": "https://wheeling.craigslist.org/"
					},
					{
						"name": "parkersburg-marietta",
						"link": "https://parkersburg.craigslist.org/"
					},
					{
						"name": "southern WV",
						"link": "https://swv.craigslist.org/"
					},
					{
						"name": "west virginia (old)",
						"link": "https://wv.craigslist.org/"
					}
				]
			},
			{
				"name": "Wisconsin",
				"cities": [
					{
						"name": "appleton-oshkosh-FDL",
						"link": "https://appleton.craigslist.org/"
					},
					{
						"name": "eau claire",
						"link": "https://eauclaire.craigslist.org/"
					},
					{
						"name": "green bay",
						"link": "https://greenbay.craigslist.org/"
					},
					{
						"name": "janesville",
						"link": "https://janesville.craigslist.org/"
					},
					{
						"name": "kenosha-racine",
						"link": "https://racine.craigslist.org/"
					},
					{
						"name": "la crosse",
						"link": "https://lacrosse.craigslist.org/"
					},
					{
						"name": "madison",
						"link": "https://madison.craigslist.org/"
					},
					{
						"name": "milwaukee",
						"link": "https://milwaukee.craigslist.org/"
					},
					{
						"name": "northern WI",
						"link": "https://northernwi.craigslist.org/"
					},
					{
						"name": "sheboygan",
						"link": "https://sheboygan.craigslist.org/"
					},
					{
						"name": "wausau",
						"link": "https://wausau.craigslist.org/"
					}
				]
			},
			{
				"name": "Wyoming",
				"cities": [
					{
						"name": "wyoming",
						"link": "https://wyoming.craigslist.org/"
					}
				]
			},
			{
				"name": "Territories",
				"cities": [
					{
						"name": "guam-micronesia",
						"link": "https://micronesia.craigslist.org/"
					},
					{
						"name": "puerto rico",
						"link": "https://puertorico.craigslist.org/"
					},
					{
						"name": "U.S. virgin islands",
						"link": "https://virgin.craigslist.org/"
					}
				]
			}
		]
	}


}
