
    let index = 1;
    let pods = {
      1:{
      name: "Early Supporter",
      image: "https://uploads-ssl.webflow.com/633344f6fc0ce323cf6aa045/638f7b8ba8b0110ca8d5667c_Aiddrop_Early-Supporter.png",
      icon:"https://uploads-ssl.webflow.com/633404a85e0aa0228a89447f/6399f33258dc0e0458472ab3_Aiddrop-logomark_white.png",
      colour:"#292527",
    },
      2:{
      name: "welfare",
      image: "https://uploads-ssl.webflow.com/633404a85e0aa0228a89447f/63345aa317f50bdc0e25b3d1_Welfare_front.png",
      icon:"https://uploads-ssl.webflow.com/633404a85e0aa0228a89447f/63345a9c9910d8ee4326d15b_Icon_Welfare.svg",
      colour:"#913514",
    },
    3:{
      name:"Education",
      image:"https://uploads-ssl.webflow.com/633404a85e0aa0228a89447f/63345a68899f5f52342d8dfb_Education_front.png",
      icon:"https://uploads-ssl.webflow.com/633404a85e0aa0228a89447f/63345a6ed457af64efad1ceb_Icon_Education.svg",
      colour:"#7489c5",
    },
    4:{
      name:"Art & Culture",
      image:"https://uploads-ssl.webflow.com/633404a85e0aa0228a89447f/63345a47025f04c0a882446a_Art-and-Culture_front.png",
      icon:"https://uploads-ssl.webflow.com/633404a85e0aa0228a89447f/63345a437c28c42654772fa5_Icon_Art-and-Culture.svg",
      colour:"#d54294",
    },
    5:{
      name:"Children & Youth",
      image:"https://uploads-ssl.webflow.com/633404a85e0aa0228a89447f/63345a259648453c8728e048_Children-and-Youth_front.png",
      icon:"https://uploads-ssl.webflow.com/633404a85e0aa0228a89447f/63345a2a4c0c6128df867df4_Icon_Children-and-Youth.svg",
      colour:"#0c672f",
    },
    6:{
      name:"Mental & Health",
      image:"https://uploads-ssl.webflow.com/633404a85e0aa0228a89447f/63345a030ea375252d30937d_Mental-and-Health_front.png",
      icon:"https://uploads-ssl.webflow.com/633404a85e0aa0228a89447f/633459fe17f50bc3b825b139_Icon_Mental-and-Health.svg",
      colour:"#884795",
    },
    7:{
      name:"Religion",
      image:"https://uploads-ssl.webflow.com/633404a85e0aa0228a89447f/633459b84710a36dfc5f41fa_Religion_front.png",
      icon:"https://uploads-ssl.webflow.com/633404a85e0aa0228a89447f/633459cc3324ab2700e5364c_Icon_Religion.svg",
      colour:"#f1860e",
    },
    8:{
      name:"Tech & Science",
      image:"https://uploads-ssl.webflow.com/633404a85e0aa0228a89447f/633459739910d8e2fd26caea_Tech-and-Science_front.png",
      icon:"https://uploads-ssl.webflow.com/633404a85e0aa0228a89447f/6334596146dd018468269a23_Icon_Tech-and-Science.svg",
      colour:"#0093be",
    },
    9:{
      name:"Environment",
      image:"https://uploads-ssl.webflow.com/633404a85e0aa0228a89447f/63340cf6275ca3248d456171_Environment_front.png",
      icon:"https://uploads-ssl.webflow.com/633404a85e0aa0228a89447f/63340cd48cb9c766d1929013_Icon_Environment.svg",
      colour:"#71b73b",
    },
    10:{
      name:"Equal Access",
      image:"https://uploads-ssl.webflow.com/633404a85e0aa0228a89447f/63340afb696b09bb61cdf4ab_Equal-Access_front.png",
      icon:"https://uploads-ssl.webflow.com/633404a85e0aa0228a89447f/63340ae16701fbeabe28aef0_Icon_Equal-Access.svg",
      colour:"#0761a9",
    },
    11:{
      name:"Refugees & Migration",
      image:"https://uploads-ssl.webflow.com/633404a85e0aa0228a89447f/635a4597452f5c16062b75c2_Refugees-and-Migration_front.png",
      icon:"https://uploads-ssl.webflow.com/633404a85e0aa0228a89447f/635a45cb5afd912eafe0d21a_Icon_Refugess-and-Migration.svg",
      colour:"#007a7d",
    },
    12:{
      name:"No Racism",
      image:"https://uploads-ssl.webflow.com/633404a85e0aa0228a89447f/635a46c2452f5ca1ab2c2272_NO-Racism_front.png",
      icon:"https://uploads-ssl.webflow.com/633404a85e0aa0228a89447f/635a46c5a8fe7cf12fe2797f_Icon_NO-Racism.svg",
      colour:"#f9ae15",
    },
    13:{
      name:"Emergency & Disaster",
      image:"https://uploads-ssl.webflow.com/633344f6fc0ce323cf6aa045/63340617dfa93b5dfcbc7d72_Emergency-and-Desasters_front.png",
      icon:"https://uploads-ssl.webflow.com/633404a85e0aa0228a89447f/635a46fe385fd0220bf71272_Icon_Emergency-and-Desasters.svg",
      colour:"#691413",
    },
    14:{
      name:"LGBTQIA+",
      image:"https://uploads-ssl.webflow.com/633404a85e0aa0228a89447f/635a4845926b470e33aec879_LGBTQIA%2B_front.png",
      icon:"https://uploads-ssl.webflow.com/633404a85e0aa0228a89447f/635a4840452f5c408f2d506c_Icon_LGBTQIA.svg",
      colour:"#ce1f27",
    },
    15:{
      name:"Animals",
      image:"https://uploads-ssl.webflow.com/633404a85e0aa0228a89447f/635a4882b5904b1ac9badec9_Animals_front.png",
      icon:"https://uploads-ssl.webflow.com/633404a85e0aa0228a89447f/635a487b0ed18468ca86db8c_Icon_Animals.svg",
      colour:"#7d5024",
    },
    16:{
      name:"Economic Development",
      image:"https://uploads-ssl.webflow.com/633404a85e0aa0228a89447f/635a48bee410e653607c65ad_Economic-Development_front.png",
      icon:"https://uploads-ssl.webflow.com/633404a85e0aa0228a89447f/635a48c5d1fa199e40a44942_Icon_Economic-Development.svg",
      colour:"#375076",
    },
    17:{
      name:"Food & Water",
      image:"https://uploads-ssl.webflow.com/633404a85e0aa0228a89447f/635a491f0bf1f41e6a025ac8_Food-and-Water_front.png",
      icon:"https://uploads-ssl.webflow.com/633404a85e0aa0228a89447f/635a491da7de0a8343e450d7_Icon_Food-and-Water.svg",
      colour:"#36b0e1",
    },
    18:{
      name:"Crypto Adoption",
      image:"https://uploads-ssl.webflow.com/633404a85e0aa0228a89447f/635a4966d1fa1949a2a46828_Crypto-Adoption_front.png",
      icon:"https://uploads-ssl.webflow.com/633404a85e0aa0228a89447f/635a49627aad6894d75c3bb1_Icon_Crypto-Adoption.svg",
      colour:"#ce1f27",
    },
    19:{
      name:"Women & Girls",
      image:"https://uploads-ssl.webflow.com/633404a85e0aa0228a89447f/635a49a6dd15ce3c0a876e3a_Women-and-Girls_front.png",
      icon:"https://uploads-ssl.webflow.com/633404a85e0aa0228a89447f/635a49a26e7b0a0f1ccd3d0b_Icon_Women-and-Girls.svg",
      colour:"#271a40",
    },
    20:{
      name:"Family & Home",
      image:"https://uploads-ssl.webflow.com/633404a85e0aa0228a89447f/635a49f1e4d04877e7b45647_Family-and-Home_front.png",
      icon:"https://uploads-ssl.webflow.com/633404a85e0aa0228a89447f/635a49ea7aad6868575d1141_Icon_Family-and-Home.svg",
      colour:"#ec6171",
    },
    21:{
      name:"Rights & Justice",
      image:"https://uploads-ssl.webflow.com/633404a85e0aa0228a89447f/635a4a30de3d85421e500f6d_Rights-and-Justice_front.png",
      icon:"https://uploads-ssl.webflow.com/633404a85e0aa0228a89447f/635a4a2d6e7b0af913cdfbff_Icon_Rights-and-Justice.svg",
      colour:"#2a3174",
    },
    22:{
      name:"Sports",
      image:"https://uploads-ssl.webflow.com/633404a85e0aa0228a89447f/635a4a5bd1fa1917d8a4ed0b_Sports_front.png",
      icon:"https://uploads-ssl.webflow.com/633404a85e0aa0228a89447f/635a4a558ea64a47f1da8c68_Icon_Sports.svg",
      colour:"#e85c0d",
    },
    23:{
      name:"Local Tradition",
      image:"https://uploads-ssl.webflow.com/633404a85e0aa0228a89447f/635a4a8a55e8162ba7ebcf28_Local-Tradition_front.png",
      icon:"https://uploads-ssl.webflow.com/633404a85e0aa0228a89447f/635a4a8656b97cebde39dc1e_Icon_Local-Tradition.svg",
      colour:"#364d24",
    },
    24:{
      name:"Democracy",
      image:"https://uploads-ssl.webflow.com/633404a85e0aa0228a89447f/635a4ab8e95430814097c0d7_Democracy_front.png",
      icon:"https://uploads-ssl.webflow.com/633404a85e0aa0228a89447f/635a4ab1452f5c35292f321e_Icon_Democracy.svg",
      colour:"#1e4395",
    },
    30:{
      name: "Global Gaming For Good",
      image: "https://uploads-ssl.webflow.com/633404a85e0aa0228a89447f/64de1cc9bdc6608fe06bf18a_SOS-Kinderdo%CC%88rfer-Weltweit_front_01.png",
      icon: "https://uploads-ssl.webflow.com/633404a85e0aa0228a89447f/64e4e587d371852cfad2cce6_SOS-Gaming.svg",
      colour:"#76BA58"},
    31:{
      name:"CUP OF HOPE 2024",
      image:"https://uploads-ssl.webflow.com/633344f6fc0ce323cf6aa045/65a0e46ff133bce29caa91d8_Cup-Of-Hope_front%402x.png",
      icon:"https://uploads-ssl.webflow.com/633404a85e0aa0228a89447f/65955976842d15ce08edaa19_Logo%20YB%20Cup%20of%20Hope%202024%20(1).png",
      colour:"#00b6f1",
    },
    }
    index = (parseInt(document.getElementById("Mission").value) + 1) + '';
    document.getElementById("pod-image").src = pods[index].image;
    document.getElementById('icon-name').textContent = pods[index].name
    document.getElementById("pod-image").srcset = pods[index].image + " 500w, " + pods[index].image + " 1000w";
    document.getElementById('icon-container').style['background-color'] = pods[index].colour;
    document.getElementById('pod-icon').src = pods[index].icon;
     document.getElementById('success-pod').src = pods[index].image;
      document.getElementById("success-pod").srcset = pods[index].image + " 500w, " + pods[index].image + " 1000w";
   
    document.getElementById("Mission").onchange = function() {
    	index = (parseInt(document.getElementById("Mission").value) + 1) + '';
    	document.getElementById("pod-image").src = pods[index].image;
      document.getElementById('icon-name').textContent = pods[index].name
    	document.getElementById("pod-image").srcset = pods[index].image + " 500w, " + pods[index].image + " 1000w";
      document.getElementById('icon-container').style['background-color'] = pods[index].colour;
      document.getElementById('pod-icon').src = pods[index].icon;
      document.getElementById('success-pod').src = pods[index].image;
      document.getElementById("success-pod").srcset = pods[index].image + " 500w, " + pods[index].image + " 1000w";
		};
    let amount = 5;
		let amounts = ['0.05', '0.25', '1', '5', '10'];
    
		amounts.forEach(x => {
  		document.getElementById('amount' + x).onclick = function(){
      console.log('aaa');
    		amount = x;
        document.getElementById('price').innerHTML = amount + '<span class="eth-highlight">ETH</span>';
        if(index != 0 && amount){
        	document.getElementById('next').style['pointer-events'] = '';
          document.getElementById('next-btn').style['opacity'] = 1;
        }
  		}
		});
  window.onbeforeunload = function(){
  	document.getElementById("Mission").value = 0;
	};
