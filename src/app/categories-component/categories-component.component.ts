import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'categories-component',
  templateUrl: './categories-component.component.html',
  styleUrls: ['./categories-component.component.scss']
})
export class CategoriesComponentComponent implements OnInit {

  selectedCategory;

  constructor() { 

  }

  

  ngOnInit() {
	  this.selectedCategory = [];
  }

  logCategory(category){
	  console.log(category);
  }

  categories = [
	{
		"name": "community",
		"link": "/search/ccc",
		"sub": [
			{
				"name": "activities",
				"link": "/search/act"
			},
			{
				"name": "artists",
				"link": "/search/ats"
			},
			{
				"name": "childcare",
				"link": "/search/kid"
			},
			{
				"name": "classes",
				"link": "/search/cls"
			},
			{
				"name": "events",
				"link": "/search/eve"
			},
			{
				"name": "general",
				"link": "/search/com"
			},
			{
				"name": "groups",
				"link": "/search/grp"
			},
			{
				"name": "local news",
				"link": "/search/vnn"
			},
			{
				"name": "lost+found",
				"link": "/search/laf"
			},
			{
				"name": "musicians",
				"link": "/search/muc"
			},
			{
				"name": "pets",
				"link": "/search/pet"
			},
			{
				"name": "politics",
				"link": "/search/pol"
			},
			{
				"name": "rideshare",
				"link": "/search/rid"
			},
			{
				"name": "volunteers",
				"link": "/search/vol"
			}
		]
	},
	{
		"name": "",
		"sub": [
			{
				"name": "strictly platonic",
				"link": "/i/personals?category=stp"
			},
			{
				"name": "women seek women",
				"link": "/i/personals?category=w4w"
			},
			{
				"name": "women seeking men",
				"link": "/i/personals?category=w4m"
			},
			{
				"name": "men seeking women",
				"link": "/i/personals?category=m4w"
			},
			{
				"name": "men seeking men",
				"link": "/i/personals?category=m4m"
			},
			{
				"name": "misc romance",
				"link": "/i/personals?category=msr"
			},
			{
				"name": "casual encounters",
				"link": "/i/personals?category=cas"
			},
			{
				"name": "missed connections",
				"link": "/i/personals?category=mis"
			},
			{
				"name": "rants and raves",
				"link": "/i/personals?category=rnr"
			}
		]
	},
	{
		"name": "discussion forums",
		"link": "https://forums.craigslist.org/?areaID=36",
		"sub": [
			{
				"name": "apple",
				"link": "https://forums.craigslist.org/?areaID=36&forumID=3232"
			},
			{
				"name": "arts",
				"link": "https://forums.craigslist.org/?areaID=36&forumID=49"
			},
			{
				"name": "atheist",
				"link": "https://forums.craigslist.org/?areaID=36&forumID=78"
			},
			{
				"name": "autos",
				"link": "https://forums.craigslist.org/?areaID=36&forumID=5"
			},
			{
				"name": "beauty",
				"link": "https://forums.craigslist.org/?areaID=36&forumID=88"
			},
			{
				"name": "bikes",
				"link": "https://forums.craigslist.org/?areaID=36&forumID=95"
			},
			{
				"name": "celebs",
				"link": "https://forums.craigslist.org/?areaID=36&forumID=47"
			},
			{
				"name": "comp",
				"link": "https://forums.craigslist.org/?areaID=36&forumID=34"
			},
			{
				"name": "crafts",
				"link": "https://forums.craigslist.org/?areaID=36&forumID=83"
			},
			{
				"name": "diet",
				"link": "https://forums.craigslist.org/?areaID=36&forumID=122"
			},
			{
				"name": "divorce",
				"link": "https://forums.craigslist.org/?areaID=36&forumID=76"
			},
			{
				"name": "dying",
				"link": "https://forums.craigslist.org/?areaID=36&forumID=130"
			},
			{
				"name": "eco",
				"link": "https://forums.craigslist.org/?areaID=36&forumID=99"
			},
			{
				"name": "educ",
				"link": "https://forums.craigslist.org/?areaID=36&forumID=90"
			},
			{
				"name": "feedbk",
				"link": "https://forums.craigslist.org/?areaID=36&forumID=8"
			},
			{
				"name": "film",
				"link": "https://forums.craigslist.org/?areaID=36&forumID=41"
			},
			{
				"name": "fitness",
				"link": "https://forums.craigslist.org/?areaID=36&forumID=92"
			},
			{
				"name": "fixit",
				"link": "https://forums.craigslist.org/?areaID=36&forumID=64"
			},
			{
				"name": "food",
				"link": "https://forums.craigslist.org/?areaID=36&forumID=22"
			},
			{
				"name": "frugal",
				"link": "https://forums.craigslist.org/?areaID=36&forumID=2007"
			},
			{
				"name": "gaming",
				"link": "https://forums.craigslist.org/?areaID=36&forumID=85"
			},
			{
				"name": "garden",
				"link": "https://forums.craigslist.org/?areaID=36&forumID=54"
			},
			{
				"name": "haiku",
				"link": "https://forums.craigslist.org/?areaID=36&forumID=575"
			},
			{
				"name": "help",
				"link": "https://forums.craigslist.org/?areaID=36&forumID=9"
			},
			{
				"name": "history",
				"link": "https://forums.craigslist.org/?areaID=36&forumID=81"
			},
			{
				"name": "housing",
				"link": "https://forums.craigslist.org/?areaID=36&forumID=6"
			},
			{
				"name": "jobs",
				"link": "https://forums.craigslist.org/?areaID=36&forumID=7"
			},
			{
				"name": "jokes",
				"link": "https://forums.craigslist.org/?areaID=36&forumID=1257"
			},
			{
				"name": "kink",
				"link": "https://forums.craigslist.org/?areaID=36&forumID=200269"
			},
			{
				"name": "legal",
				"link": "https://forums.craigslist.org/?areaID=36&forumID=73"
			},
			{
				"name": "linux",
				"link": "https://forums.craigslist.org/?areaID=36&forumID=1991"
			},
			{
				"name": "m4m",
				"link": "https://forums.craigslist.org/?areaID=36&forumID=72"
			},
			{
				"name": "manners",
				"link": "https://forums.craigslist.org/?areaID=36&forumID=79"
			},
			{
				"name": "marriage",
				"link": "https://forums.craigslist.org/?areaID=36&forumID=1926"
			},
			{
				"name": "media",
				"link": "https://forums.craigslist.org/?areaID=36&forumID=133"
			},
			{
				"name": "money",
				"link": "https://forums.craigslist.org/?areaID=36&forumID=53"
			},
			{
				"name": "motocy",
				"link": "https://forums.craigslist.org/?areaID=36&forumID=1947"
			},
			{
				"name": "music",
				"link": "https://forums.craigslist.org/?areaID=36&forumID=24"
			},
			{
				"name": "nonprofit",
				"link": "https://forums.craigslist.org/?areaID=36&forumID=501"
			},
			{
				"name": "open",
				"link": "https://forums.craigslist.org/?areaID=36&forumID=4"
			},
			{
				"name": "outdoor",
				"link": "https://forums.craigslist.org/?areaID=36&forumID=16"
			},
			{
				"name": "over 50",
				"link": "https://forums.craigslist.org/?areaID=36&forumID=50"
			},
			{
				"name": "parent",
				"link": "https://forums.craigslist.org/?areaID=36&forumID=39"
			},
			{
				"name": "pets",
				"link": "https://forums.craigslist.org/?areaID=36&forumID=26"
			},
			{
				"name": "philos",
				"link": "https://forums.craigslist.org/?areaID=36&forumID=71"
			},
			{
				"name": "photo",
				"link": "https://forums.craigslist.org/?areaID=36&forumID=5500"
			},
			{
				"name": "p.o.c.",
				"link": "https://forums.craigslist.org/?areaID=36&forumID=84"
			},
			{
				"name": "politics",
				"link": "https://forums.craigslist.org/?areaID=36&forumID=20"
			},
			{
				"name": "psych",
				"link": "https://forums.craigslist.org/?areaID=36&forumID=29"
			},
			{
				"name": "queer",
				"link": "https://forums.craigslist.org/?areaID=36&forumID=46"
			},
			{
				"name": "recover",
				"link": "https://forums.craigslist.org/?areaID=36&forumID=12"
			},
			{
				"name": "religion",
				"link": "https://forums.craigslist.org/?areaID=36&forumID=59"
			},
			{
				"name": "romance",
				"link": "https://forums.craigslist.org/?areaID=36&forumID=28"
			},
			{
				"name": "science",
				"link": "https://forums.craigslist.org/?areaID=36&forumID=96"
			},
			{
				"name": "spirit",
				"link": "https://forums.craigslist.org/?areaID=36&forumID=93"
			},
			{
				"name": "sports",
				"link": "https://forums.craigslist.org/?areaID=36&forumID=32"
			},
			{
				"name": "tax",
				"link": "https://forums.craigslist.org/?areaID=36&forumID=1040"
			},
			{
				"name": "travel",
				"link": "https://forums.craigslist.org/?areaID=36&forumID=42"
			},
			{
				"name": "tv",
				"link": "https://forums.craigslist.org/?areaID=36&forumID=98"
			},
			{
				"name": "vegan",
				"link": "https://forums.craigslist.org/?areaID=36&forumID=2400"
			},
			{
				"name": "w4w",
				"link": "https://forums.craigslist.org/?areaID=36&forumID=69"
			},
			{
				"name": "wed",
				"link": "https://forums.craigslist.org/?areaID=36&forumID=15"
			},
			{
				"name": "wine",
				"link": "https://forums.craigslist.org/?areaID=36&forumID=120"
			},
			{
				"name": "women",
				"link": "https://forums.craigslist.org/?areaID=36&forumID=94"
			},
			{
				"name": "words",
				"link": "https://forums.craigslist.org/?areaID=36&forumID=7000"
			},
			{
				"name": "writing",
				"link": "https://forums.craigslist.org/?areaID=36&forumID=27"
			},
			{
				"name": "yoga",
				"link": "https://forums.craigslist.org/?areaID=36&forumID=8620"
			}
		]
	},
	{
		"name": "housing",
		"link": "/search/hhh",
		"sub": [
			{
				"name": "apts / housing",
				"link": "/search/apa"
			},
			{
				"name": "housing swap",
				"link": "/search/swp"
			},
			{
				"name": "housing wanted",
				"link": "/search/hsw"
			},
			{
				"name": "office / commercial",
				"link": "/search/off"
			},
			{
				"name": "parking / storage",
				"link": "/search/prk"
			},
			{
				"name": "real estate for sale",
				"link": "/search/rea"
			},
			{
				"name": "rooms / shared",
				"link": "/search/roo"
			},
			{
				"name": "rooms wanted",
				"link": "/search/sha"
			},
			{
				"name": "sublets / temporary",
				"link": "/search/sub"
			},
			{
				"name": "vacation rentals",
				"link": "/search/vac"
			}
		]
	},
	{
		"name": "for sale",
		"link": "/search/sss",
		"sub": [
			{
				"name": "antiques",
				"link": "/search/ata"
			},
			{
				"name": "appliances",
				"link": "/search/ppa"
			},
			{
				"name": "arts+crafts",
				"link": "/search/ara"
			},
			{
				"name": "atv/utv/sno",
				"link": "/search/sna"
			},
			{
				"name": "auto parts",
				"link": "/i/auto_parts"
			},
			{
				"name": "baby+kid",
				"link": "/search/baa"
			},
			{
				"name": "barter",
				"link": "/search/bar"
			},
			{
				"name": "beauty+hlth",
				"link": "/search/haa"
			},
			{
				"name": "bikes",
				"link": "/i/bikes"
			},
			{
				"name": "boats",
				"link": "/i/boats"
			},
			{
				"name": "books",
				"link": "/search/bka"
			},
			{
				"name": "business",
				"link": "/search/bfa"
			},
			{
				"name": "cars+trucks",
				"link": "/i/autos"
			},
			{
				"name": "cds/dvd/vhs",
				"link": "/search/ema"
			},
			{
				"name": "cell phones",
				"link": "/search/moa"
			},
			{
				"name": "clothes+acc",
				"link": "/search/cla"
			},
			{
				"name": "collectibles",
				"link": "/search/cba"
			},
			{
				"name": "computers",
				"link": "/i/computers"
			},
			{
				"name": "electronics",
				"link": "/search/ela"
			},
			{
				"name": "farm+garden",
				"link": "/search/gra"
			},
			{
				"name": "free",
				"link": "/search/zip"
			},
			{
				"name": "furniture",
				"link": "/search/fua"
			},
			{
				"name": "garage sale",
				"link": "/search/gms"
			},
			{
				"name": "general",
				"link": "/search/foa"
			},
			{
				"name": "heavy equip",
				"link": "/search/hva"
			},
			{
				"name": "household",
				"link": "/search/hsa"
			},
			{
				"name": "jewelry",
				"link": "/search/jwa"
			},
			{
				"name": "materials",
				"link": "/search/maa"
			},
			{
				"name": "motorcycles",
				"link": "/i/motorcycles"
			},
			{
				"name": "music instr",
				"link": "/search/msa"
			},
			{
				"name": "photo+video",
				"link": "/search/pha"
			},
			{
				"name": "rvs+camp",
				"link": "/search/rva"
			},
			{
				"name": "sporting",
				"link": "/search/sga"
			},
			{
				"name": "tickets",
				"link": "/search/tia"
			},
			{
				"name": "tools",
				"link": "/search/tla"
			},
			{
				"name": "toys+games",
				"link": "/search/taa"
			},
			{
				"name": "trailers",
				"link": "/search/tra"
			},
			{
				"name": "video gaming",
				"link": "/search/vga"
			},
			{
				"name": "wanted",
				"link": "/search/waa"
			}
		]
	},
	{
		"name": "services",
		"link": "/search/bbb",
		"sub": [
			{
				"name": "automotive",
				"link": "/search/aos"
			},
			{
				"name": "beauty",
				"link": "/search/bts"
			},
			{
				"name": "cell/mobile",
				"link": "/search/cms"
			},
			{
				"name": "computer",
				"link": "/search/cps"
			},
			{
				"name": "creative",
				"link": "/search/crs"
			},
			{
				"name": "cycle",
				"link": "/search/cys"
			},
			{
				"name": "event",
				"link": "/search/evs"
			},
			{
				"name": "farm+garden",
				"link": "/search/fgs"
			},
			{
				"name": "financial",
				"link": "/search/fns"
			},
			{
				"name": "household",
				"link": "/search/hss"
			},
			{
				"name": "labor/move",
				"link": "/search/lbs"
			},
			{
				"name": "legal",
				"link": "/search/lgs"
			},
			{
				"name": "lessons",
				"link": "/search/lss"
			},
			{
				"name": "marine",
				"link": "/search/mas"
			},
			{
				"name": "pet",
				"link": "/search/pas"
			},
			{
				"name": "real estate",
				"link": "/search/rts"
			},
			{
				"name": "skilled trade",
				"link": "/search/sks"
			},
			{
				"name": "sm biz ads",
				"link": "/search/biz"
			},
			{
				"name": "therapeutic",
				"link": "/search/thp"
			},
			{
				"name": "travel/vac",
				"link": "/search/trv"
			},
			{
				"name": "write/ed/tran",
				"link": "/search/wet"
			}
		]
	},
	{
		"name": "jobs",
		"link": "/search/jjj",
		"sub": [
			{
				"name": "accounting+finance",
				"link": "/search/acc"
			},
			{
				"name": "admin / office",
				"link": "/search/ofc"
			},
			{
				"name": "arch / engineering",
				"link": "/search/egr"
			},
			{
				"name": "art / media / design",
				"link": "/search/med"
			},
			{
				"name": "biotech / science",
				"link": "/search/sci"
			},
			{
				"name": "business / mgmt",
				"link": "/search/bus"
			},
			{
				"name": "customer service",
				"link": "/search/csr"
			},
			{
				"name": "education",
				"link": "/search/edu"
			},
			{
				"name": "food / bev / hosp",
				"link": "/search/fbh"
			},
			{
				"name": "general labor",
				"link": "/search/lab"
			},
			{
				"name": "government",
				"link": "/search/gov"
			},
			{
				"name": "human resources",
				"link": "/search/hum"
			},
			{
				"name": "internet engineers",
				"link": "/search/eng"
			},
			{
				"name": "legal  /  paralegal",
				"link": "/search/lgl"
			},
			{
				"name": "manufacturing",
				"link": "/search/mnu"
			},
			{
				"name": "marketing / pr / ad",
				"link": "/search/mar"
			},
			{
				"name": "medical / health",
				"link": "/search/hea"
			},
			{
				"name": "nonprofit sector",
				"link": "/search/npo"
			},
			{
				"name": "real estate",
				"link": "/search/rej"
			},
			{
				"name": "retail / wholesale",
				"link": "/search/ret"
			},
			{
				"name": "sales / biz dev",
				"link": "/search/sls"
			},
			{
				"name": "salon / spa / fitness",
				"link": "/search/spa"
			},
			{
				"name": "security",
				"link": "/search/sec"
			},
			{
				"name": "skilled trade / craft",
				"link": "/search/trd"
			},
			{
				"name": "software / qa / dba",
				"link": "/search/sof"
			},
			{
				"name": "systems / network",
				"link": "/search/sad"
			},
			{
				"name": "technical support",
				"link": "/search/tch"
			},
			{
				"name": "transport",
				"link": "/search/trp"
			},
			{
				"name": "tv / film / video",
				"link": "/search/tfr"
			},
			{
				"name": "web / info design",
				"link": "/search/web"
			},
			{
				"name": "writing / editing",
				"link": "/search/wri"
			},
			{
				"name": "[ETC]",
				"link": "/search/etc"
			},
			{
				"name": "[ part-time ]",
				"link": "/search/jjj?employment_type=2"
			}
		]
	},
	{
		"name": "gigs",
		"link": "/search/ggg",
		"sub": [
			{
				"name": "computer",
				"link": "/search/cpg"
			},
			{
				"name": "creative",
				"link": "/search/crg"
			},
			{
				"name": "crew",
				"link": "/search/cwg"
			},
			{
				"name": "domestic",
				"link": "/search/dmg"
			},
			{
				"name": "event",
				"link": "/search/evg"
			},
			{
				"name": "labor",
				"link": "/search/lbg"
			},
			{
				"name": "talent",
				"link": "/search/tlg"
			},
			{
				"name": "writing",
				"link": "/search/wrg"
			}
		]
	},
	{
		"name": "resumes",
		"link": "/search/rrr",
		"sub": []
	},
	{
		"name": "",
		"sub": []
	},
	{
		"name": "",
		"sub": []
	},
	{
		"name": "",
		"sub": []
	},
	{
		"name": "",
		"sub": []
	},
	{
		"name": "",
		"sub": []
	}
]
}
