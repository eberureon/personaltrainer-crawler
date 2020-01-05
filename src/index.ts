import express from 'express';
import puppeteer from 'puppeteer';

const app = express();

/* tslint:disable */
// const cities = ["Berlin","Hamburg","München","Köln","Frankfurt am Main","Stuttgart","Düsseldorf","Leipzig","Dortmund","Essen","Bremen","Dresden","Hannover","Nürnberg","Duisburg","Bochum","Wuppertal","Bielefeld","Bonn","Münster","Karlsruhe","Mannheim","Augsburg","Wiesbaden","Mönchengladbach","Gelsenkirchen","Braunschweig","Kiel","Aachen","Chemnitz1","Halle ","Magdeburg","Freiburg im Breisgau","Krefeld","Lübeck","Mainz","Erfurt","Oberhausen","Rostock","Kassel","Hagen","Saarbrücken","Hamm","Potsdam","Ludwigshafen am Rhein","Mülheim an der Ruhr","Oldenburg","Osnabrück","Leverkusen","Heidelberg","Solingen","Darmstadt","Herne","Neuss","Regensburg","Paderborn","Ingolstadt","Offenbach am Main","Würzburg","Fürth","Ulm","Heilbronn","Pforzheim","Wolfsburg","Göttingen","Bottrop","Reutlingen","Koblenz","Bremerhaven","Recklinghausen","Bergisch Gladbach","Erlangen","Jena","Remscheid","Trier","Salzgitter","Moers","Siegen","Hildesheim","Cottbus","Gütersloh","Kaiserslautern","Witten","Hanau","Schwerin","Gera","Esslingen am Neckar","Ludwigsburg","Iserlohn","Düren","Tübingen","Zwickau","Flensburg","Gießen","Ratingen","Lünen","Villingen-Schwenningen3","Konstanz","Marl","Worms","Velbert","Minden","Dessau-Roßlau2","Neumünster","Norderstedt","Delmenhorst","Bamberg","Viersen","Marburg","Wilhelmshaven","Rheine","Gladbeck","Lüneburg","Troisdorf","Dorsten","Bayreuth","Detmold","Arnsberg","Castrop-Rauxel","Lüdenscheid","Landshut","Brandenburg an der Havel","Bocholt","Aschaffenburg","Celle","Kempten ","Fulda","Aalen","Lippstadt","Dinslaken","Herford","Kerpen","Rüsselsheim am Main","Weimar","Plauen","Sindelfingen","Neuwied","Dormagen","Neubrandenburg","Grevenbroich","Rosenheim","Herten","Bergheim","Schwäbisch Gmünd","Friedrichshafen","Garbsen","Wesel","Hürth","Offenburg","Stralsund","Greifswald","Langenfeld ","Neu-Ulm","Unna","Euskirchen","Frankfurt ","Göppingen","Hameln","Stolberg ","Eschweiler","Görlitz","Meerbusch","Sankt Augustin","Hilden","Waiblingen","Baden-Baden","Hattingen","Lingen ","Bad Homburg vor der Höhe","Langenhagen","Bad Salzuflen","Pulheim","Schweinfurt","Nordhorn","Neustadt an der Weinstraße","Wetzlar","Menden ","Ahlen","Frechen","Passau","Wolfenbüttel","Ibbenbüren","Kleve","Bad Kreuznach","Goslar","Gummersbach","Ravensburg","Willich","Speyer","Emden","Böblingen","Peine","Elmshorn","Erftstadt","Rastatt","Heidenheim an der Brenz","Lörrach","Leonberg","Bergkamen","Bad Oeynhausen","Freising","Frankenthal ","Rheda-Wiedenbrück","Cuxhaven","Bornheim","Gronau ","Straubing","Singen ","Stade","Soest","Dachau","Hennef ","Alsdorf","Lahr/Schwarzwald","Landau in der Pfalz","Dülmen","Melle","Neunkirchen","Herzogenrath","Schwerte","Oberursel ","Lutherstadt Wittenberg","Hof","Filderstadt4","Gotha","Fellbach","Bünde","Albstadt5","Weinheim","Rodgau6","Bruchsal","Oranienburg","Brühl","Erkrath","Neustadt am Rübenberge","Lehrte","Kaufbeuren","Falkensee","Memmingen","Rottenburg am Neckar","Kaarst","Erkelenz","Pinneberg","Bietigheim-Bissingen7","Kamen","Wismar","Borken","Weiden in der Oberpfalz","Gifhorn","Nettetal","Eisenach","Dreieich10","Aurich","Amberg","Heinsberg","Ansbach","Homburg","Nordhausen","Wunstorf","Seevetal 9","Siegburg","Laatzen","Coburg","Königswinter","Nürtingen","Freiberg","Schwabach","Lemgo","Monheim am Rhein","Kirchheim unter Teck","Bensheim","Schwäbisch Hall","Weißenfels","Pirmasens","Germering","Eberswalde12","Halberstadt","Buxtehude","Leinfelden-Echterdingen13","Neumarkt in der Oberpfalz","Hückelhoven11","Hofheim am Taunus","Löhne","Schorndorf","Freital","Stendal","Völkli","Ettlinge","Ostfildern14","Maintal15","Buchholz in der Nordheide","Ahaus","Bautzen","Mettmann","Bernau bei Berlin","Würselen","Bitterfeld-Wolfen8","Pirna","Niederkassel","Haltern am See","Langen","Greven","Fürstenfeldbruck","Neu-Isenburg","Papenburg","Kamp-Lintfort","Backnang","Warendorf","Königs Wusterhausen","Ilmenau","Beckum","Erding","Coesfeld","Wesseling","Kehl","Emsdetten","Voerde ","Tuttlingen","Sankt Ingbert","Porta Westfalica16","Sinsheim","Meppen","Limburg an der Lahn","Lage","Cloppenburg","Winsen ","Suhl","Mörfelden-Walldorf18","Wermelskirchen","Datteln","Kempen","Saarlouis","Leer","Seelze","Crailsheim","Barsinghausen","Balingen","Zweibrücken","Viernheim","Steinfurt17","Hemer","Merseburg","Dietzenbach","Radebeul","Bad Vilbel","Geldern","Goch","Kornwestheim","Stuhr","Uelzen","Deggendorf","Wedel","Ahrensburg","Mühlhausen/Thüringen","Rheinfelden ","Korschenbroich","Biberach an der Riß","Wernigerode","Bernburg ","Hoyerswerda","Jülich","Lampertheim","Vechta","Naumburg ","Forchheim","Bad Nauheim","Altenburg","Delbrück","Fürstenwalde/Spree","Achim","Itzehoe","Georgsmarienhütte","Nienburg/Weser","Herrenberg","Oer-Erkenschwick","Radolfzell am Bodensee","Kreuztal","Ganderkesee","Rheinberg","Bramsche","Geestland19","Neuruppin","Einbeck","Werl","Emmerich am Rhein","Schönebeck","Burgdorf","Gevelsberg","Weyhe 20","Geesthacht","Haan","Lohmar","Osterholz-Scharmbeck","Weil am Rhein","Ennepetal","Riesa","Taunusstein","Andernach","Meschede","Schwedt/Oder","Friedberg","Bad Hersfeld","Gaggenau","Merzig","Neuburg an der Donau","Werne","Wedemark 21","Vaihingen an der Enz","Rietberg","Bretten","Waltrop","Oelde","Tönisvorst","Güstrow","Friedberg ","Landsberg am Lech","Northeim","Kelkheim ","Springe","Unterschleißheim","Bühl","Schwandorf","Höxter","Rösrath","Bad Zwischenahn 22","Schwelm","Rendsburg","Mühlheim am Main","Winnenden","Idar-Oberstein","Bad Neuenahr-Ahrweiler","Grimma","Wegberg","Geislingen an der Steige","Königsbrunn","Rödermark23","Henstedt-Ulzburg","Meißen","Leichlingen ","Kevelaer","Zeitz","Emmendingen","Blankenfelde-Mahlow 25","Sundern ","Baunatal","Olching","Saalfeld/Saale","Verden ","Reinbek","Mechernich","Hattersheim am Main","Wetter ","Griesheim","Aschersleben","Geilenkirchen","Garmisch-Partenkirchen","Rheinbach","Overath","Baesweiler","Weinstadt24","Neukirchen-Vluyn","Leimen","Wangen im Allgäu","Schloß Holte-Stukenbrock","Lohne ","Wiesloch","Hamminkeln","Strausberg","Lauf an der Pegnitz","Neckarsulm","Remseck am Neckar26","Heiligenhaus","Sangerhausen","Hennigsdorf","Ehingen","Butzbach","Nordenham","Werder ","Hohen Neuendorf","Ludwigsfelde","Mühlacker","Heppenheim ","Selm","Weiterstadt","Pfaffenhofen an der Ilm","Kulmbach","Köthen ","St. Wendel","Teltow","Bad Honnef","Helmstedt","Bingen am Rhein","Achern","Zirndorf","Roth","Lennestadt","Verl","Lindau ","Lübbecke","Rinteln","Brilon","Staßfurt","Zittau","Plettenberg","Groß-Gerau","Schleswig","Geretsried","Rottweil","Friedrichsdorf","Petershagen","Pfungstadt","Harsewinkel","Horb am Neckar","Wiehl","Salzkotten","Norden","Ingelheim am Rhein","Unterhaching","Obertshausen","Weingarten","Idstein","Ditzingen","Schmallenberg","Delitzsch","Warstein","Sprockhövel","Bad Oldesloe","Olpe","Espelkamp","Meckenheim","Markkleeberg","Eisenhüttenstadt","Lüdinghausen","Ellwangen ","Stutensee27","Isernhagen 28","Öhringen","Attendorn","Syke","Arnstadt","Ronnenberg","Rathenow","Senftenberg","Waldshut-Tiengen","Übach-Palenberg","Limbach-Oberfrohna","Varel","Quedlinburg","Sonneberg","Döbeln","Haren ","Hann. Münden","Riedstadt30","Bad Mergentheim","Salzwedel","Alfter","Calw","Korbach","Bedburg","Starnberg","Freudenstadt","Waldkraiburg","Moormerland 29","Vaterstetten 31","Mosbach","Sehnde","Lutherstadt Eisleben","Dillenburg","Jüchen","Husum","Netphen","Herzogenaurach","Wallenhorst","Warburg","Gelnhausen","Walsrode","Wandlitz","Leutkirch im Allgäu","Wertheim","Westerstede","Herdecke","Rastede","Bad Soden am Taunus","Lengerich","Vreden","Überlingen","Donaueschingen","Burg","Weilheim in Oberbayern","Gersthofen","Friesoythe","Bad Kissingen","Glauchau","Gardelegen","Edewecht","Senden","Laupheim","Nagold","Rudolstadt","Stadthagen","Spremberg","Karben","Radevormwald","Neusäß","Metzingen","Apolda","Büdingen","Bad Harzburg","Eckernförde","Eppingen","Kaltenkirchen","Waldkirch","Rotenburg ","Hockenheim","Osterode am Harz","Kitzingen","Xanten","Heide","Elsdorf","Zerbst/Anhalt","Halle ","Karlsfeld","Flörsheim am Main","Büren","Ilsede","Ottobrunn","Sonthofen","Puchheim","Sondershausen","Eschborn","Versmold","Stadtallendorf","Aichach","Schwetzingen","Bad Rappenau","Lindlar","Geseke","Soltau","Quickborn","Seligenstadt","Schramberg","Haar","Meiningen","Groß-Umstadt","Neu Wulmstorf","Waren ","Wülfrath","Westoverledingen","Wipperfürth","Traunreut","Rees","Waghäusel","Eislingen/Fils","Coswig","Werdau","Germersheim","Fröndenberg/Ruhr","Günzburg","Steinhagen","Blieskastel","Reichenbach im Vogtland","Herborn","Kleinmachnow","Gauting","Luckenwalde","Traunstein","Panketal34","Senden","Mössingen","Duderstadt","Enger","Bruchköbel","Wachtberg","Meinerzhagen","Nördlingen","Burgwedel32","Rheinstetten33","Nidderau","Schortens","Haßloch","Mühldorf am Inn","Stadtlohn","Wittmund","Bad Waldsee","Schwanewede","Uetze","Bad Salzungen","Neufahrn bei Freising","Schifferstadt","Zülpich","Hörstel","Neustrelitz","Lichtenfels","Greiz","Wilnsdorf","Donauwörth","Oberkirch","Torgau","Dillingen/Saar","Bad Schwartau"]
/* tslint:enable */

const cities = ['Berlin', 'Hamburg', 'München', 'Köln', 'Frankfurt am Main'];
const URL = 'https://www.personalfitness.de';

const scrape = async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(URL, { waitUntil: 'networkidle2' });

  await page.waitFor('input[id=skill_in]');
  // @ts-ignore
  await page.$eval('input[id=skill_in]', el => (el.value = 'Aachen'));
  await page.click(
    '.bgfarbeneu > div._darkoverlay > div > div > div > form > div > div > div > button',
  );
  await page.waitForSelector('._greybox');

  const result = await page.evaluate(() => {
    const data = [];
    const elements = document.querySelectorAll('.caption');

    for (const element of elements) {
      // @ts-ignore
      const name = element.childNodes[1].innerText;

      data.push({ name });
    }

    return data;
  });

  browser.close();
  return result;
};

scrape().then(value => {
  app.get('/', async (req, res) => {
    res.send(value);
  });
});

app.listen(8080, () => {
  /* tslint:disable */
  console.log(`Access your crawler now on http://localhost:8080`);
  /* tslint:enable */
});
