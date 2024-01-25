function createDockableUI(thisObj) {
    var dialog =
        thisObj instanceof Panel
            ? thisObj
            : new Window("window", undefined, undefined, { resizeable: true });
    dialog.onResizing = dialog.onResize = function () {
        this.layout.resize();
    };
    return dialog;
}

function showWindow(myWindow) {
    if (myWindow instanceof Window) {
        myWindow.center();
        myWindow.show();
    }
    if (myWindow instanceof Panel) {
        myWindow.layout.layout(true);
        myWindow.layout.resize();
    }
}

//ZACZYNAMY
var win = createDockableUI(this);
win.text = "TVP World";
win.orientation = "column";
win.alignChildren = ["fill", "top"];
//win.preferredSize.height = 200;
//win.preferredSize.width = 200;
win.spacing = 5;
win.margins = 15;

//
// TPANEL1
// =======
var tpanel1 = win.add("tabbedpanel", undefined, undefined, { name: "tpanel1" });
//tpanel1.preferredSize.width = 200;
// tpanel1.preferredSize.height = 200;
tpanel1.orientation = "row";
tpanel1.alignChildren = ["fill", "top"];
tpanel1.spacing = 5;
tpanel1.margins = 5;

// TAB1
// ====
var tab1 = tpanel1.add("tab", undefined, undefined, { name: "tab1" });
tab1.text = "Rendery";
tab1.orientation = "column";
tab1.alignChildren = ["fill", "top"];
tab1.spacing = 5;
tab1.margins = 5;
//

var montazB = tab1.add("button", undefined, undefined, { name: "montazB" });
montazB.text = "Montaż";
montazB.preferredSize.width = 150;
montazB.alignment = ["center", "top"];

var studioB = tab1.add("button", undefined, undefined, { name: "button2" });
studioB.text = "Studio";
studioB.preferredSize.width = 150;
studioB.alignment = ["center", "top"];

var obaB = tab1.add("button", undefined, undefined, { name: "obaB" });
obaB.text = "Oba";
obaB.preferredSize.width = 150;
obaB.alignment = ["center", "top"];

var meB = tab1.add("button", undefined, undefined, { name: "prevB" });
meB.text = "Wyślij do ME";
meB.preferredSize.width = 150;
meB.alignment = ["center", "top"];

var prevB = tab1.add("button", undefined, undefined, { name: "prevB" });
prevB.text = "Tylko prevka";
prevB.preferredSize.width = 150;
prevB.alignment = ["center", "top"];


//
//var tab3 = tpanel1.add("tab", undefined, undefined, { name: "tab3" });
//var tab4 = tpanel1.add("tab", undefined, undefined, { name: "tab4" });
//
// TAB2
// ====
var tab2 = tpanel1.add("tab", undefined, undefined, { name: "tab2" });
tab2.text = "Pogoda";
tab2.orientation = "column";
tab2.alignChildren = ["center", "top"];
tab2.spacing = 5;
tab2.margins = 5;

var group1 = tab2.add("group", undefined, { name: "pogoda" });
group1.orientation = "row";

var wczyPaktB = group1.add("button", undefined, undefined, { name: "wczyPaktB" });
wczyPaktB.text = "Pogoda aktualna";
wczyPaktB.preferredSize.width = 90;
wczyPaktB.alignment = ["center", "top"];

var wczyPjutB = group1.add("button", undefined, undefined, { name: "wczyPjutB" });
wczyPjutB.text = "Pogoda na jutro";
wczyPjutB.preferredSize.width = 90;
wczyPjutB.alignment = ["center", "top"];

var zapiszZDataB = tab2.add("button", undefined, undefined, { name: "zapiszZDataB" });
zapiszZDataB.text = "Zapisz z datą";
zapiszZDataB.preferredSize.width = 150;
zapiszZDataB.alignment = ["center", "top"];
zapiszZDataB.enabled = false;

var montazBp = tab2.add("button", undefined, undefined, { name: "montazBp" });
montazBp.text = "Renderuj";
montazBp.preferredSize.width = 150;
montazBp.alignment = ["center", "top"];


//
//
// TAB3
// ====
var tab3 = tpanel1.add("tab", undefined, undefined, { name: "tab3" });
tab3.text = "Projekty";
//tab3.orientation = "row";
tab3.alignChildren = ["center", "top"];
tab3.spacing = 5;
tab3.margins = 5;

//BA
var group1 = tab3.add("group", undefined, { name: "BA" });
group1.orientation = "row";
//group1.alignChildren = ["left","center"]; 
//group1.spacing = 10; 
//group1.margins = 0; 

var BAtweetB = group1.add("button", undefined, undefined, { name: "BAtweetB" });
BAtweetB.text = "BA tweet";
BAtweetB.preferredSize.width = 60;
// BAtweetB.alignment = ["left", "top"];

var BAcytatB = group1.add("button", undefined, undefined, { name: "BAcytatB" });
BAcytatB.text = "BA cytat";
BAcytatB.preferredSize.width = 60;
// BAcytatB.alignment = ["center", "top"];

var BAtweetB2 = group1.add("button", undefined, undefined, { name: "BAtweetB2" });
BAtweetB2.text = "BA ";
BAtweetB2.preferredSize.width = 60;
BAtweetB2.enabled = false;
// BAtweetB.alignment = ["left", "top"];

//EE
var group1 = tab3.add("group", undefined, { name: "EE" });
group1.orientation = "row";
//group1.alignChildren = ["left","center"]; 
//group1.spacing = 10; 
//group1.margins = 0; 

var EEtweetB = group1.add("button", undefined, undefined, { name: "EEtweetB" });
EEtweetB.text = "EE tweet";
EEtweetB.preferredSize.width = 60;
// EEtweetB.alignment = ["left", "top"];

var EEcytatB = group1.add("button", undefined, undefined, { name: "EEcytatB" });
EEcytatB.text = "EE cytat";
EEcytatB.preferredSize.width = 60;
// EEcytatB.alignment = ["center", "top"];

var EEtweetB2 = group1.add("button", undefined, undefined, { name: "EEtweetB2" });
EEtweetB2.text = "EE ";
EEtweetB2.preferredSize.width = 60;
EEtweetB2.enabled = false;
// EEtweetB.alignment = ["left", "top"];

//WN
var group1 = tab3.add("group", undefined, { name: "WN" });
group1.orientation = "row";
group1.alignChildren = ["left", "center"];
//group1.spacing = 10; 
//group1.margins = 0; 

var WNtweetB = group1.add("button", undefined, undefined, { name: "WNtweetB" });
WNtweetB.text = "WN tweet";
WNtweetB.preferredSize.width = 60;
// WNtweetB.alignment = ["left", "top"];

var WNcytatB = group1.add("button", undefined, undefined, { name: "WNcytatB" });
WNcytatB.text = "WN cytat";
WNcytatB.preferredSize.width = 60;
// WNcytatB.alignment = ["center", "top"];

var WNtwWNtB = group1.add("button", undefined, undefined, { name: "WNtwWNtB" });
WNtwWNtB.text = "WN ";
WNtwWNtB.preferredSize.width = 60;
WNtwWNtB.enabled = false;
// WNtwWNtB.alignment = ["left", "top"];

//WT
var group1 = tab3.add("group", undefined, { name: "WT" });
group1.orientation = "row";
group1.alignChildren = ["left", "center"];
//group1.spacing = 10; 
//group1.margins = 0; 

var WTteetB = group1.add("button", undefined, undefined, { name: "WTtweetB" });
WTteetB.text = "WT tweet";
WTteetB.preferredSize.width = 60;
// WTteetB.alignment = ["left", "top"];

var WTcytatB = group1.add("button", undefined, undefined, { name: "WTcytatB" });
WTcytatB.text = "WT cytat";
WTcytatB.preferredSize.width = 60;
// WTcytatB.alignment = ["center", "top"];

var WTtwWTtB = group1.add("button", undefined, undefined, { name: "WTtwWTtB" });
WTtwWTtB.text = "WT ";
WTtwWTtB.preferredSize.width = 60;
WTtwWTtB.enabled = false;
// WTtwWTtB.alignment = ["left", "top"];

//WSPOLNE

var wyB = win.add("button", undefined, undefined, { name: "prevB" });
wyB.text = "Wyczyść render";
wyB.preferredSize.width = 100;

var zapiszB = win.add("button", undefined, undefined, { name: "zapiszB" });
zapiszB.text = "Zapisz";
zapiszB.preferredSize.width = 100;
// zapiszB.enabled = false;

var zamkB = win.add("button", undefined, undefined, { name: "zamkB" });
zamkB.text = "Zamknij";
zamkB.preferredSize.width = 100;

var purgeB = win.add("button", undefined, undefined, { name: "purgeB" });
purgeB.text = "Purge";
purgeB.preferredSize.width = 100;


montazB.onClick = function () {

    app.activeViewer.setActive();

    var comp = app.project.activeItem;
    var render_queue = app.project.renderQueue;
    var project_name = app.project.file.name.split(".")[0];

    comp.saveFrameToPng(comp.time, new File(app.project.file.path + "/" + project_name + ".png"));

    var movie_item1 = render_queue.items.add(comp);
    movie_item1.timeSpanStart = 0;
    movie_item1.timeSpanDuration = comp.duration;
    movie_item1.outputModule(1).applyTemplate("422");
    movie_item1.outputModule(1).file = new File(app.project.file.path + "/" + project_name);

    // Render the items in the render queue
    render_queue.render();
}
studioB.onClick = function () {

    app.activeViewer.setActive();

    var comp = app.project.activeItem;
    var render_queue = app.project.renderQueue;
    var project_name = app.project.file.name.split(".")[0];

    comp.saveFrameToPng(comp.time, new File(app.project.file.path + "/" + project_name + ".png"));

    var movie_item1 = render_queue.items.add(comp);
    movie_item1.timeSpanStart = 0;
    movie_item1.timeSpanDuration = comp.duration;
    movie_item1.outputModule(1).applyTemplate("DNxHD");
    movie_item1.outputModule(1).file = new File(app.project.file.path + "/" + project_name);

    // Render the items in the render queue
    render_queue.render();
}
obaB.onClick = function () {

    app.activeViewer.setActive();

    var comp = app.project.activeItem;
    var render_queue = app.project.renderQueue;
    var project_name = app.project.file.name.split(".")[0];

    comp.saveFrameToPng(comp.time, new File(app.project.file.path + "/" + project_name + ".png"));

    var movie_item1 = render_queue.items.add(comp);
    movie_item1.timeSpanStart = 0;
    movie_item1.timeSpanDuration = comp.duration;
    movie_item1.outputModule(1).applyTemplate("422");
    movie_item1.outputModule(1).file = new File(app.project.file.path + "/" + project_name + "_montaz");

    var movie_item2 = render_queue.items.add(comp);
    movie_item2.timeSpanStart = 0;
    movie_item2.timeSpanDuration = comp.duration;
    movie_item2.outputModule(1).applyTemplate("DNxHD");
    movie_item2.outputModule(1).file = new File(app.project.file.path + "/" + project_name + "_studio");

    // Render the items in the render queue
    render_queue.render();

}

meB.onClick = function () {

    app.activeViewer.setActive();

    var comp = app.project.activeItem;
    var render_queue = app.project.renderQueue;
    var project_name = app.project.file.name.split(".")[0];

    comp.saveFrameToPng(comp.time, new File(app.project.file.path + "/" + project_name + ".png"));

    var movie_item1 = render_queue.items.add(comp);
    movie_item1.timeSpanStart = 0;
    movie_item1.timeSpanDuration = comp.duration;
    movie_item1.outputModule(1).applyTemplate("422");
    movie_item1.outputModule(1).file = new File(app.project.file.path + "/" + project_name);

    // Render the items in the render queue
    if (app.project.renderQueue.canQueueInAME == true) {
        // Send queued items to AME, but do not start rendering.
        app.project.renderQueue.queueInAME(false);
    }
    else {
        alert("Nic nie ma w Render Queue.");
    }

    alert("Ustaw parametry w Me")

}


prevB.onClick = function () {

    app.activeViewer.setActive();

    var comp = app.project.activeItem;
    var render_queue = app.project.renderQueue;
    var project_name = app.project.file.name.split(".")[0];

    comp.saveFrameToPng(comp.time, new File(app.project.file.path + "/" + project_name + ".png"));

    alert("Zapisałem " + project_name + ".png")

}



//POGODA

wczyPaktB.onClick = function () {

    app.project.close(CloseOptions.DO_NOT_SAVE_CHANGES);
    var my_file = new File("d:/Praca/Projekty/Pogoda/pogoda_aktualna.aep");
    if (my_file.exists) {
        var new_project = app.open(my_file);
        if (new_project) {
            var url = "https://serwer1707801.home.pl/konrad/pogoda_aktualna.json";
            var oryginal_path = app.project.file.path + "/";

            var regex = /^\/(\w+)(.+)$/;
            var subst = "$1:";
            var subst2 = "$2";
            var dysk = oryginal_path.replace(regex, subst);
            var reszta = oryginal_path.replace(regex, subst2).replace(/\//g, "\\");;

            var project_path = dysk + reszta + "pogoda_aktualna.json";

            // alert(project_path);

            function downladFile() {
                var command = "curl -x http://proxy.tvp.pl:8080 -o " + project_path + " " + url;
                //alert(command);
                system.callSystem(command);

            }

            var saveFile = downladFile();

            //var importedFile = app.project.importFile(new ImportOptions(File(project_path)));
            app.project.item("pogoda_aktualna.json").replace(new ImportOptions(File(project_path)));


        }



    }


}

wczyPjutB.onClick = function () {
    app.project.close(CloseOptions.DO_NOT_SAVE_CHANGES);
    //
    var my_file = new File("d:/Praca/Projekty/Pogoda/pogoda_jutro.aep");
    if (my_file.exists) {
        var new_project = app.open(my_file);
        if (new_project) {
            var url = "https://serwer1707801.home.pl/konrad/pogoda_jutro.json";
            var oryginal_path = app.project.file.path + "/";

            var regex = /^\/(\w+)(.+)$/;
            var subst = "$1:";
            var subst2 = "$2";
            var dysk = oryginal_path.replace(regex, subst);
            var reszta = oryginal_path.replace(regex, subst2).replace(/\//g, "\\");;

            var project_path = dysk + reszta + "pogoda_jutro.json";

            // alert(project_path);

            function downladFile() {
                var command = "curl -x http://proxy.tvp.pl:8080 -o " + project_path + " " + url;
                //alert(command);
                system.callSystem(command);

            }

            var saveFile = downladFile();

            //var importedFile = app.project.importFile(new ImportOptions(File(project_path)));
            app.project.item("pogoda_jutro.json").replace(new ImportOptions(File(project_path)));
        }
    }

}

zapiszZDataB.onClick = function () {

    var date = new Date();
    var dzien = date.getDate();
    if (dzien < 10) {
        dzien = "0" + dzien;
    }
    var miesiac = date.getMonth() + 1;
    if (miesiac < 10) {
        miesiac = "0" + miesiac;
    }

    var project_name = app.project.file.name;
    if (project_name == "pogoda_aktualna.aep") {
        var nazwa_pliku_z_data = "POGODA_" + dzien + miesiac + "_aktualizacja.aep";
    } else if (project_name == "pogoda_jutro.aep") {
        var nazwa_pliku_z_data = "POGODA_" + dzien + miesiac + "_jutro.aep";
    } else {
        var nazwa_pliku_z_data = dzien + miesiac + ".aep";
    }

    new File(nazwa_pliku_z_data).saveDlg(["Wskaż lokalne miejsce zapisu pliku:"],"*.aep");

}

montazBp.onClick = function () {

    app.activeViewer.setActive();

    var comp = app.project.activeItem;
    var render_queue = app.project.renderQueue;
    var project_name = app.project.file.name.split(".")[0];

    comp.saveFrameToPng(comp.time, new File(app.project.file.path + "/" + project_name + ".png"));

    var movie_item1 = render_queue.items.add(comp);
    movie_item1.timeSpanStart = 0;
    movie_item1.timeSpanDuration = comp.duration;
    movie_item1.outputModule(1).applyTemplate("422");
    movie_item1.outputModule(1).file = new File(app.project.file.path + "/" + project_name);

    // Render the items in the render queue
    render_queue.render();
}

//KONIEC POGODY

//PROJEKTY

BAtweetB.onClick = function () {
    app.project.close(CloseOptions.DO_NOT_SAVE_CHANGES);
    var my_file = new File("d:/Praca/Projekty/BA/BA_tweet/BA_tweet.aep");
    if (my_file.exists) {
        var new_project = app.open(my_file);
        if (new_project) {
            // alert(new_project.file.name);
        }
    }

}
EEtweetB.onClick = function () {
    app.project.close(CloseOptions.DO_NOT_SAVE_CHANGES);
    var my_file = new File("d:/Praca/Projekty/EE/EE_tweet/EE_tweet.aep");
    if (my_file.exists) {
        var new_project = app.open(my_file);
        if (new_project) {
            // alert(new_project.file.name);
        }
    }
}
WNtweetB.onClick = function () {
    app.project.close(CloseOptions.DO_NOT_SAVE_CHANGES);
    var my_file = new File("d:/Praca/Projekty/WN/WN_tweet/WN_tweet.aep");
    if (my_file.exists) {
        var new_project = app.open(my_file);
        if (new_project) {
            //  alert(new_project.file.name);
        }
    }
}
WTteetB.onClick = function () {
    app.project.close(CloseOptions.DO_NOT_SAVE_CHANGES);
    var my_file = new File("d:/Praca/Projekty/WT/WT_tweet/WT_tweet.aep");
    if (my_file.exists) {
        var new_project = app.open(my_file);
        if (new_project) {
            //  alert(new_project.file.name);
        }
    }
}
//
BAcytatB.onClick = function () {
    app.project.close(CloseOptions.DO_NOT_SAVE_CHANGES);
    var my_file = new File("d:/Praca/Projekty/BA/BA_cytat/BA_cytat.aep");
    if (my_file.exists) {
        var new_project = app.open(my_file);
        if (new_project) {
            // alert(new_project.file.name);
        }
    }

}
EEcytatB.onClick = function () {
    app.project.close(CloseOptions.DO_NOT_SAVE_CHANGES);
    var my_file = new File("d:/Praca/Projekty/EE/EE_cytat/EE_cytat.aep");
    if (my_file.exists) {
        var new_project = app.open(my_file);
        if (new_project) {
            // alert(new_project.file.name);
        }
    }
}
WNcytatB.onClick = function () {
    app.project.close(CloseOptions.DO_NOT_SAVE_CHANGES);
    var my_file = new File("d:/Praca/Projekty/WN/WN_cytat/WN_cytat.aep");
    if (my_file.exists) {
        var new_project = app.open(my_file);
        if (new_project) {
            //  alert(new_project.file.name);
        }
    }
}
WTcytatB.onClick = function () {
    app.project.close(CloseOptions.DO_NOT_SAVE_CHANGES);
    var my_file = new File("d:/Praca/Projekty/WT/WT_cytat/WT_cytat.aep");
    if (my_file.exists) {
        var new_project = app.open(my_file);
        if (new_project) {
            //  alert(new_project.file.name);
        }
    }
}
//
//WSPOLNE
//
wyB.onClick = function () {

    var comp = app.project.activeItem;
    var render_queue = app.project.renderQueue;
    var project_name = app.project.file.name.split(".")[0];

    while (render_queue.numItems > 0) {
        render_queue.item(1).remove();
    }
}

zapiszB.onClick = function () {

    var project_name = app.project.file.name;
    /* if(project_name=="pogoda_aktualna.aep"){
        var nazwa_pliku_z_data = "POGODA_"+dzien+miesiac+"_aktualizacja.aep";
    }else if(project_name=="pogoda_jutro.aep"){
        var nazwa_pliku_z_data = "POGODA_"+dzien+miesiac+"_jutro.aep";
    }else{
        var nazwa_pliku_z_data = dzien+miesiac+".aep";
    }  */

   // new File(project_name).saveDlg(["Wskaż lokalne miejsce zapisu pliku:"],"*.aep");

   //app.project.save(project_name)

   //var TmpFile = new File(project_name);
   //yourFile = TmpFile.saveDlg(["Wskaż lokalne miejsce zapisu pliku:"],"*.aep");

   app.project.saveWithDialog();

}

zamkB.onClick = function () {
    //app.project.save();
    app.project.close(CloseOptions.SAVE_CHANGES);
}



purgeB.onClick = function () {
    app.purge(PurgeTarget.ALL_CACHES);
}

showWindow(win);
