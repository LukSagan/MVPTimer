$(document).ready(function(){
	function addMVP(name,map,resp_time,resp_del){			//dodawanie MPV do tablicy nact
		this.name = name;		//dane z INPUT
		this.map = map;
		this.resp_time = resp_time;
		this.resp_del = resp_del;
		
		this.kill_h = null;		//dane wprowadzane przy kliknieciu
		this.kill_min = null;
		this.ile_do_respa = null;
		
		this.to_resp_end = null;	//dane wyliczane w oknie ALIVE
		this.perc_whole_resp_del = null;	
	};
	
	function appe(nact,name,map,resp_time,resp_del){
		nact[nact.length] = new addMVP(name,map,resp_time,resp_del);
	};
	
	function round_down(liczba, dzielnik){
		var pom = liczba%dzielnik;
		liczba = liczba - pom;
		return liczba/dzielnik;	
	};
	
	//to tez testy
	var now_h = 23;
	var now_sec = 0;
	var asd = 0;
	var double_sec = 0;
	
	function give_time(){
		var tDate = new Date();
		var day = "";
		if (tDate.getDate()<10){
			day += "0";
		}
		day += tDate.getDate();
		var month = "";
		if (tDate.getMonth()<10){
			month += "0";
		}
		month += tDate.getMonth() + 1;		
		var year = tDate.getFullYear();
		
		var hour = "";
		if (tDate.getHours()<10){
			hour += "0";
		}
		hour += tDate.getHours();
		var min = "";
		if (tDate.getMinutes()<10){
			min += "0";
		}
		min += tDate.getMinutes();		
		var sec = "";
		if (tDate.getSeconds()<10){
			sec += "0";
		}
		sec += tDate.getSeconds();
		var wDate = [];
		
		//do testow 0~9
		/*
		if(double_sec == 0){
			
			now_sec = round_down(tDate.getSeconds()/2,1);
			
			double_sec = 1;
		}else{
			now_sec = round_down(tDate.getSeconds()/2+30,1);
			double_sec = 0;
		}
		*/
		
		// if( (asd == 0)&&(parseInt(tDate.getSeconds()) == 0)){
			/* alert("zwiekszanie 'godziny'"); */
			// asd = 1;
			/* alert("asd = 1"); */
			// now_h += 1;
			// if(now_h == 24){
				// now_h = 0;
			// }
		// }
		// if(  (asd == 1)&&( parseInt(tDate.getSeconds()) == 1)  ){
			/* alert("wykonuje sie if, bo asd=1 i sekundy=1"); */
			// asd = 0;
		// }
		
		// /*
		// if( (asd == 0)&&parseInt(tDate.getSeconds()) == 0){
			/* alert("zwiekszanie 'godziny'"); */
			// asd = 1;
			/* alert("asd = 1"); */
			// now_h += 1;
			// if(now_h == 24){
				// now_h = 0;
			// }
		// }
		// if(  (asd == 1)&&( parseInt(tDate.getSeconds()) == 1)  ){
			/* alert("wykonuje sie if, bo asd=1 i sekundy=1"); */
			// asd = 0;
		// }
		// */
		
		// /*	//starsze
		// if(parseInt(tDate.getSeconds()) == 0){
			/* alert("zwiekszanie 'godziny'"); */
			// asd = 1;
			/* alert("asd = 1"); */
		// }
		// if(  (asd == 1)&&( parseInt(tDate.getSeconds()) == 1)  ){
			/* alert("wykonuje sie if, bo asd=1 i sekundy=1"); */
			// now_h += 1;
			// if(now_h == 24){
				// now_h = 0;
			// }
			// asd = 0;
		// }
		// */
		
		
		// hour = "";
		// if (now_h<10){
			// hour += "0";
		// }
		// hour += now_h;
		
		// min = "";
		// if (tDate.getSeconds()<10){
			// min += "0";
		// }
		// min += tDate.getSeconds();
		
		
		
		//koniec do testow
		wDate[0] = day;
		wDate[1] = month;
		wDate[2] = year;
		wDate[3] = hour;
		wDate[4] = min;
		wDate[5] = sec;
		return wDate;
	};
		
	function show_time(){		//zegar
		var dat = give_time()[0] + "-" + give_time()[1] + "-" + give_time()[2] + ", <b>" + give_time()[3] + ":" + give_time()[4] + ":" + give_time()[5] + "</b>";
		$('div#timer').html(dat);  //wklei do html'a
		setTimeout(function(){show_time()},1000);
	};
	show_time();		//uruchomienie zegara
	
	var nact = [];
	
	var dead = [];				//zabite, oczekiwanie na respawn
	
	var ali = [];				//respawned
	
	
	dra_ali();		//to bedzie do usuniecia	
	
	appe(nact,'Arc Angeling','yuno_fild05',60,3);
	appe(nact,'Kiel D-01','kh_dun02',120,60);
	appe(nact,'Golden Thief Bug','prt_sewb4',60,10);
	//appe(nact,'Tao Gunka','beach_dun',300,10);
	
	/*
	appe(nact,'Arc Angeling','yuno_fild05',60000,3);
	appe(nact,'Kiel D-01','kh_dun02',120000,60);
	appe(nact,'Golden Thief Bug','prt_sewb4',60000,10);
	appe(nact,'Tao Gunka','beach_dun',30000,10);
	*/
	/*
	appe(nact,'Arc Angeling','yuno_fild05',60,3);
	appe(nact,'Kiel D-01','kh_dun02',120,60);
	appe(nact,'Golden Thief Bug','prt_sewb4',60,10);
	appe(nact,'Tao Gunka','beach_dun',30,10);
	*/
	/*
	appe(nact,'Arc Angeling','yuno_fild05',1,3);
	appe(nact,'Kiel D-01','kh_dun02',1,1);
	appe(nact,'Golden Thief Bug','prt_sewb4',1,10);
	appe(nact,'Tao Gunka','beach_dun',2,10);
	*/
	
	
	/*
	yuno_fild05,0,0,0,0     monster Arc Angeling    1388,1,3600000,180000,0
	kh_dun02,0,0,0,0        boss_monster    Kiel D-01       1734,1,7200000,3600000,0
	prt_sewb4,0,0,0,0       boss_monster    Golden Thief Bug        1086,1,3600000,600000,1
	*/
	
	
	dra_nact();		//to bedzie do usuniecia
	reload_f();		//to MOZE bedzie do usuniecia
	dead_to_ali();	//uruchomienie sprawdzania dead'ow i ewentulanego przenoszenia do alive
	
	function tester(tek1,tek2){
		if(tek1 > tek2){
			alert(tek1 + " > " + tek2);
		}else{
			alert(tek1 + " < " + tek2);	
		}	
	};
	
	$("input#eath_but").click(function(){	//dodawanie MVP do listy nieaktywnych
		if (window.document.getElementById("eath").value != ""){
			var pom = window.document.getElementById("eath").value;
			var licz = 0;
			var map = "";
			var pom_name = pom.indexOf("monster")
			var przec = [];
			for (i=0; i<pom.length; i++){
				if (pom[i] == ","){			//zapisze indeksy przecinkow (do nazwy MVP, czasow respawnow)			
					przec[przec.length] = i;
				}
				if (  (licz == 0) && (pom[i] != ",")  ){		//ten if i nastepny sluzy znalezieniu nazwy mapy
					map += pom[i];
				}
				if ((licz == 0)&&(pom[i] == ",")){					
					licz = 1;				
				}
			}		
			var name = "";
			var beg_MVPname = 2000;
			var pom_no_more = 1;
			for (i=pom_name+7+1; i<pom.length; i++){
				if(  (pom[i] != " ")&&(pom_no_more == 1)  ){
					beg_MVPname = i;
					pom_no_more = 0;
				}
				if(  (i>=beg_MVPname)&&(i<przec[4]-4) ){
					name += pom[i];				
				}			
			}
			var resp_time = parseInt(  pom.substring(przec[5]+1,przec[6])/60000  );
			var resp_del = parseInt(  pom.substring(przec[6]+1,przec[7])/60000  );

			appe(nact,name,map,resp_time,resp_del)		//odchaczyc, juz powinno dzialac
			dra_nact();
			$("input#eath").val("");  //czysci okienko INPUT
			reload_f_nact();
		}
	});
		

	
//************************  TWORZENIE 3 TABEL  **************************
	function dra_nact(){  //trzeba bedzie sortowac alfabetycznie POZNIEJ
		//sortowanie po nazwach
		for (i=0; i<nact.length-1; i++){
			for (j=i+1; j<nact.length; j++){
				if( nact[i].name > nact[j].name ){
					var pom = nact[i];
					nact[i] = nact[j];
					nact[j] = pom;
				}			
			}		
		}
		//rysowanie
		var dat = "";
		dat = "<table bgcolor='#c0c0c0' border='1' cellspacing='0' cellpadding='3'>";		//dla wszystkich nact od nowa rysuje tabele	
		for (i=0; i<nact.length; i++){
			dat += "<tr><td width='200' id='nact' class='nact" + i + "'><b>" + nact[i].name + "</b></td>";
			dat += "<td  width='150' id='nact' class='nact" + i + "'>" + nact[i].map + "</td><td width='170' id='nact' class='nact" + i + "'>Respawn time: <b>" + nact[i].resp_time + " ~ " + nact[i].resp_del + "</b></td>";
			
			dat += "<td><button id='nactb' class='nactb" + i + "'> Set KILL time </button></td>"
			
			//dat += "</table>   <!--tu na przycisk-->     </tr>";
			dat += "</tr>";
		}
		dat += "</table>";
		$('div#nact').html(dat);  //wklei do html'a
	};	
	
	
	function dra_dead(){
		//sortowanie po czasach do respawnu
		for (i=0; i<dead.length-1; i++){
			for (j=i+1; j<dead.length; j++){
				if( parseInt(dead[i].ile_do_respa) > parseInt(dead[j].ile_do_respa) ){
					var pom = dead[i];
					dead[i] = dead[j];
					dead[j] = pom;
				}			
			}		
		}
		//rysowanie	
		var dat = "";
		dat = "<table width='1150' bgcolor='#ff0000' border='1' cellspacing='0' cellpadding='3'>";	//dla wszystkich dead od nowa rysuje tabele		//cellpadding='0'   //bordercolor="#ffcc00"
		for (i=0; i<dead.length; i++){
			dat += "<tr id='dead' class='dead" + i + "'><td width='200'><b>"  + dead[i].name + "</b></td>";
			dat += "<td width='150'>" + dead[i].map + "</td><td width='170'>Respawn time: <b>" + dead[i].resp_time + " ~ " + dead[i].resp_del + "</b></td>";
			dat += "<td align='center'>Kill time: <b>" + dead[i].kill_h + ":" + dead[i].kill_min + "</b></td><td align='right' width='100'>Till respawn: </td><td align='right' width='80'><b>" + dead[i].ile_do_respa;
			
			var pom_rh = round_down(parseInt(dead[i].ile_do_respa),60);
			var pom_rmin = parseInt(dead[i].ile_do_respa)%60;
			if(pom_rh<10){
				pom_rh = "0" + pom_rh;
			}
			if(pom_rmin<10){
				pom_rmin = "0" + pom_rmin;
			}
			dat +=" [" +pom_rh + ":" + pom_rmin + "]</b></td></tr>";
		}		
		dat += "</table>";
		$('div#dead').html(dat);  //wklei do html'a
	};
	
	function dra_ali(){
		//wyliczenie czasow do respa, trzeba bylo przesunac wczesniej do celow sortowania
		for (i=0; i<ali.length; i++){
			//do konca respa
			var act_h = parseInt(give_time()[3]);
			var act_min = parseInt(give_time()[4]);	
			var pom_h = parseInt(ali[i].kill_h);
			var pom_min = parseInt(ali[i].kill_min);
			if(pom_h>act_h){		//sprawa polnocy
				act_h += 24;
			};
			ali[i].to_resp_end = parseInt(ali[i].resp_time) + parseInt(ali[i].resp_del) - (act_min-pom_min + (act_h-pom_h)*60);
			if(ali[i].to_resp_end < 0){
				ali[i].to_resp_end = 0;
			}
			// % calosci respa
			ali[i].perc_whole_resp_del = round_down((parseInt(ali[i].resp_del) - ali[i].to_resp_end)/parseInt(ali[i].resp_del)*100,1);
		}
		//sortowanie po czasach do konca respawnu, te co juz zyja nie sa w ogole sortowane
		for (i=0; i<ali.length-1; i++){
			for (j=i+1; j<ali.length; j++){
				if( ali[i].to_resp_end > ali[j].to_resp_end ){
					var pom = ali[i];
					ali[i] = ali[j];
					ali[j] = pom;
				}			
			}		
		}
		//rysowanie
		var dat = "";
		dat = "<table width='1257' bgcolor='#00ff00' border='1' cellspacing='0' cellpadding='3'>";		//dla wszystkich ali od nowa rysuje tabele
		for (i=0; i<ali.length; i++){
			if(ali[i].to_resp_end <= 0){
				dat += "<tr id='ali' class='ali" + i + "'><td width='200'><b>" + ali[i].name + "</b></td>";
			}else{
				dat += "<tr bgcolor='#ffff00' id='ali' class='ali" + i + "'><td width='200'><b>" + ali[i].name + "</b></td>";
			}
			
			
			dat += "<td width='150' id='ali' class='ali" + i + "'>" + ali[i].map + "</td>";
			dat +="<td width='170' id='ali' class='ali" + i + "'>Respawn time: <b>" + ali[i].resp_time + " ~ " + ali[i].resp_del + "</b></td>";
			dat +="<td align='center' id='ali' class='ali" + i + "'>Kill time: <b>" + ali[i].kill_h + ":" + ali[i].kill_min +"</b></td>";
			dat +="<td width='180' id='ali' class='ali" + i + "'>Respawn probability: <b>" + ali[i].perc_whole_resp_del +"%</b></td>";
			dat +="<td width='100' align='right' id='ali' class='ali" + i + "'>To resp end: </td>";
			dat +="<td width='30' align='right' id='ali' class='ali" + i + "'><b>" + ali[i].to_resp_end +"</b></td>";
			dat += "<td width='10'><button id='alib' class='alib" + i + "'> Set KILL time </button></td></tr>";
		}
		dat += "</table>";
		
		
		/*
		var dat = "";
		dat = "<table cellspacing='0'>";		//dla wszystkich ali od nowa rysuje tabele
		for (i=0; i<ali.length; i++){
			dat += "<tr><table width='70%' bgcolor='#00ff00' border='1' cellspacing='0' cellpadding='3'>";
			if(ali[i].to_resp_end <= 0){
				dat += "<tr id='ali' class='ali" + i + "'><td width='200'><b>" + ali[i].name + "</b></td>";
			}else{
				dat += "<tr bgcolor='#ffff00' id='ali' class='ali" + i + "'><td width='200'><b>" + ali[i].name + "</b></td>";
			}
			
			
			dat += "<td width='150'>" + ali[i].map + "</td>";
			dat +="<td width='170'>Respawn time: <b>" + ali[i].resp_time + " ~ " + ali[i].resp_del + "</b></td>";
			dat +="<td align='center'>Kill time: <b>" + ali[i].kill_h + ":" + ali[i].kill_min +"</b></td>";
			dat +="<td width='180'>Respawn probability: <b>" + ali[i].perc_whole_resp_del +"%</b></td>";
			dat +="<td width='100' align='right'>To resp end: </td>";
			dat +="<td width='30' align='right'><b>" + ali[i].to_resp_end +"</b></td>";
			dat += "</tr></table><button id='alib' class='alib" + i + "'> Set KILL time </button></tr>";
		}
		dat += "</table>";		
		*/
		
		
		//tu tez bedzie przycisk przenoszenia do DEAD na podstawie zakladanego czasu
		$('div#alive').html(dat);  //wklei do html'a
	};
	

	
	
	
//************************  PRZENOSZENIE ELEMENTOW POMIEDZY TABELAMI  **************************	
//************************  PRZENOSZENIE ELEMENTOW POMIEDZY TABELAMI  **************************
//************************  PRZENOSZENIE ELEMENTOW POMIEDZY TABELAMI  **************************
//************************  PRZENOSZENIE ELEMENTOW POMIEDZY TABELAMI  **************************
//************************  PRZENOSZENIE ELEMENTOW POMIEDZY TABELAMI  **************************

	function reload_f(){
		reload_f_nact_dead();
		reload_f_ali_dead();
	};
	function reload_f_nact_dead(){
		reload_f_nact();
		reload_f_dead();
		reload_f_nact_set();
	};
	
	function reload_f_nact(){
//************************  przenoszenie z NACT do DEAD  **************************
		$("td#nact").click(function(){
			var classNam = parseInt(this.className.substring(4));
			dead[dead.length] = nact[classNam];		// to bedzie trzeba zalatwiac funkcja, zeby sortowalo dead, albo jakos inaczej
			var pom = nact[classNam];		//KONIA Z RZEDEM TEMU KTO WYTLUMACZY DLACZEGO TO DZIALA, bo to niby te same obiekty?
			pom.kill_h = give_time()[3];			//ustawianie godziny zabicia
			pom.kill_min = give_time()[4];

			pom.ile_do_respa = pom.resp_time;		//KONIA Z RZEDEM, tez wpisuje do tablicy dead

			if(nact.length>1){
				for (i=classNam; i<nact.length; i++){		//usuwanie elementu z tablicy dead  //NIE TRZEBA SORTOWAC
					nact[i] = nact[i+1];
				}
				nact.pop();
			}else{
				nact = [];			
			}
			dra_nact();		//przerysowanie tablic
			dra_dead();
			reload_f_nact_dead();

			dead_to_ali();
			
			//dopisanie pozostalych funkcji
			//reload_f_ali_to_dead();
			//reload_f_ali_to_dead_set();
			
		});
	};
	
	
	function reload_f_nact_set(){
//************************  przenoszenie z NACT do DEAD USTAWIANE **************************
		$("button#nactb").click(function(){
			//alert("nacisnieto przycisk 'Set KILL time'");
			var kill_time = prompt("Enter estimated kill hour [hh:mm]");
			if(kill_time!=null && kill_time!=""){
				var classNam = parseInt(this.className.substring(5));
				dead[dead.length] = nact[classNam];		// to bedzie trzeba zalatwiac funkcja, zeby sortowalo dead, albo jakos inaczej
				
				
				if(kill_time.length<5){
					var pom_h = parseInt(kill_time[0]);
					var pom_min = parseInt(kill_time[2] + kill_time[3])
				}else{
					var pom_h = parseInt(kill_time[0]+kill_time[1]);
					var pom_min = parseInt(kill_time[3] + kill_time[4])
				}
				//alert("EST kill time: " + pom_h + ":" + pom_min);
				if(pom_h<10){
					pom_h = "0" + pom_h;
				}
				if(pom_min<10){
					pom_min = "0" + pom_min;
				}
				
				var pom = nact[classNam];		//KONIA Z RZEDEM TEMU KTO WYTLUMACZY DLACZEGO TO DZIALA, bo to niby te same obiekty?
				pom.kill_h = pom_h;			//ustawianie godziny zabicia
				pom.kill_min = pom_min;

				pom.ile_do_respa = pom.resp_time;		//KONIA Z RZEDEM, tez wpisuje do tablicy dead

				if(nact.length>1){
					for (i=classNam; i<nact.length; i++){		//usuwanie elementu z tablicy dead  //NIE TRZEBA SORTOWAC
						nact[i] = nact[i+1];
					}
					nact.pop();
				}else{
					nact = [];			
				}
				dra_nact();		//przerysowanie tablic
				dra_dead();
				reload_f_nact_dead();
				
				reload_f_ali_dead();	//ustawiajac czas zabicia mozna od razu wskoczyc do alive

				dead_to_ali();
				
				//dopisanie pozostalych funkcji
				//reload_f_ali_to_dead();
				//reload_f_ali_to_dead_set();
				
			}
		});
	};
	
	
	
		
	function reload_f_dead(){	
//************************  przenoszenie z DEAD do NACT  **************************
		$("tr#dead").click(function(){
			var classNam = parseInt(this.className.substring(4));
			var r = confirm('Set "' + dead[classNam].name + '" timer inactive?');
			if(r){
				nact[nact.length] = dead[classNam];		// to bedzie trzeba zalatwiac funkcja, zeby sortowalo dead, albo jakos inaczej

				if(dead.length>1){
					for (i=classNam; i<dead.length; i++){		//usuwanie elementu z tablicy dead  //NIE TRZEBA SORTOWAC
						dead[i] = dead[i+1];
					}
					dead.pop();
				}else{
					dead = [];			
				}

				dra_nact();		//przerysowanie tablic
				dra_dead();
				reload_f_nact_dead();
				
				//dopisanie pozostalych funkcji
				//reload_f_dead();	//tego normalnie nie bylo, moze to zle
				//reload_f_ali_to_dead();
				//reload_f_ali_to_dead_set();
				
			}
		});
	};

	function reload_f_ali_dead(){
		dead_to_ali(); //czy nie spowoduje zbyt duzej ilosci wywolan?
		reload_f_ali_to_dead();
		reload_f_ali_to_dead_set();
	};

	function reload_f_ali_to_dead(){	
//************************  przenoszenie z ALI do DEAD  **************************
		$("td#ali").click(function(){
			//alert("funkcja z ALIVE do DEAD");
			var classNam = parseInt(this.className.substring(3));
			dead[dead.length] = ali[classNam];		// to bedzie trzeba zalatwiac funkcja, zeby sortowalo dead, albo jakos inaczej
			
			var pom = ali[classNam];		//KONIA Z RZEDEM TEMU KTO WYTLUMACZY DLACZEGO TO DZIALA, bo to niby te same obiekty?
			pom.kill_h = give_time()[3];			//ustawianie godziny zabicia
			pom.kill_min = give_time()[4];
			pom.ile_do_respa = pom.resp_time;

			if(ali.length>1){
				for (i=classNam; i<ali.length; i++){
					ali[i] = ali[i+1];
				}
			}else{
				ali = [];			
			}
			ali.pop();
			
			dra_ali();		//przerysowanie tablic
			dra_dead();
			reload_f_ali_dead();
			reload_f_dead();
			
			
			//dopisanie pozostalych funkcji
			//reload_f_nact();
			//reload_f_nact_set();
			
		});
	};
	
	function reload_f_ali_to_dead_set(){	
//************************  przenoszenie z ALI do DEAD USTAWIANE **************************
		$("button#alib").click(function(){
			//alert("funkcja ustawiane z ALIVE do DEAD");
			
			var kill_time = prompt("Enter estimated kill hour [hh:mm]");
			if(kill_time!=null && kill_time!=""){
				var classNam = parseInt(this.className.substring(4));
				dead[dead.length] = ali[classNam];		// to bedzie trzeba zalatwiac funkcja, zeby sortowalo dead, albo jakos inaczej
							
				if(kill_time.length<5){
					var pom_h = parseInt(kill_time[0]);
					var pom_min = parseInt(kill_time[2] + kill_time[3])
				}else{
					var pom_h = parseInt(kill_time[0]+kill_time[1]);
					var pom_min = parseInt(kill_time[3] + kill_time[4])
				}
				//alert("EST kill time: " + pom_h + ":" + pom_min);
				if(pom_h<10){
					pom_h = "0" + pom_h;
				}
				if(pom_min<10){
					pom_min = "0" + pom_min;
				}
				
				var pom = ali[classNam];		//KONIA Z RZEDEM TEMU KTO WYTLUMACZY DLACZEGO TO DZIALA, bo to niby te same obiekty?
				pom.kill_h = pom_h;			//ustawianie godziny zabicia
				pom.kill_min = pom_min;
				pom.ile_do_respa = pom.resp_time;

				if(ali.length>1){
					for (i=classNam; i<ali.length; i++){
						ali[i] = ali[i+1];
					}
				}else{
					ali = [];			
				}
				ali.pop();
				
				dra_ali();		//przerysowanie tablic
				dra_dead();
				reload_f_ali_dead();
				reload_f_dead();
				
				
				//dopisanie pozostalych funkcji
				//reload_f_nact();
				//reload_f_nact_set();
				
				
			}
		});
	};

//************************  przenoszenie z DEAD do ALI(automatyczne)  **************************
	function dead_to_ali(){		//czy ma tez odpowiadac za odnawianie czasu do respa?				
		var act_h = parseInt(give_time()[3]);
		var act_min = parseInt(give_time()[4]);		// mozna dac '5' do testow

		var ind_tab_go_live = [];
		var pom_ind = [];
		for (i=0; i<dead.length; i++){
			var pom = dead[i];
			var pom_h = parseInt(pom.kill_h);
			var pom_min = parseInt(pom.kill_min);
			if(pom_h>act_h){		//sprawa polnocy
				act_h += 24;
			};
			pom.ile_do_respa = parseInt(pom.resp_time) - (act_min-pom_min + (act_h-pom_h)*60);
			if(pom.ile_do_respa<=0){		//warunek przenoszenia do alive
				ind_tab_go_live[ind_tab_go_live.length] = i;
			}	
		}

		var pom_dead = [];
		for (i=0; i<ind_tab_go_live.length; i++){		
			ali[ali.length] = dead[ind_tab_go_live[i]];		//aktualne przenoszenie z dead do alive
		}
		
		for (i=0; i<dead.length; i++){		//przenoszenie do pomocniczej tablicy elementów z dead, które nie id¹ do alive
			var pom_i = 0;					//bardziej kosztowny sposob, ale sie lepiej sprawdza
			for(j=0; j<ind_tab_go_live.length; j++){
				if(i == ind_tab_go_live[j]){
					pom_i = 1;				
				}			
			}
			if(pom_i == 0){
				pom_dead[pom_dead.length] = dead[i]
			}
		}
		if(pom_dead.length>0){
			dead = pom_dead;
		}
		if( (ind_tab_go_live.length > 0)&&(pom_dead.length == 0) ){
			dead = [];		
		}
		
		
		

		
		//set przeniesiony wczesniej
		//setTimeout(function(){dead_to_ali()},1000);	//co 5 sek wywolanie funkcji
		
		dra_dead();	//uaktualnienie 'czasu do respa' na stronie
		reload_f_dead();

		dra_ali();
		reload_f_ali_to_dead();
		
		reload_f_ali_to_dead_set();		//brakowalo
		
		
		
		
		//dopisanie pozostalych funkcji
		//dead_to_ali();		//tego wczesniej nie bylo, moze zle
		//reload_f_nact();
		//reload_f_nact_set();
		
		
		
		setTimeout(function(){dead_to_ali()},1000);	//co 5 sek wywolanie funkcji
		
		/*
		1000 -> 1s
		10000 -> 10s
		60000 -> 60s -> 1min
		*/
	};
	//jak sie ustawi czas zabicia na przyszlosc, a 24h - resp time da wartosc ujemna, to zle pokazuje
	
	//sprawa, gdy minuty sa <10, godziny tez?
	
	//nie ma przycisku usuwana z nact, odswiezanie dziala, rozwiazac, gdy sie zechce wrzucic to na jakis serwer, zeby
	//chodzilo 24/7
	//na przyszlosc, pamietac o reloadach, przy zmianach w dead trzeba odswiezac wiecej funkcji
});