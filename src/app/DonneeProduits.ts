import { Produit } from './Produit';

export class DonneeProduits {
  
  nombreProduitGenere: number;
  nomProduit: string[] = ['banane', 'pomme', 'poire', 'jambon', 'pile9V', 'cafee', 'clef', 'tableau blanc',
                          'crayon', 'cannette', 'haut parleur', 'ecran d\'ordinateur', 'feuille de carton',
                          'draps', 'guitar', 'amplificateur', 'television'];
  descriptionProduit: string[] = ['Elles ah vaste subit qu outre entre ai et ainsi. On tendons escorte apparue abattit sa au.',
                                  'Noces passa ce wagon quand me bouts douze un.',
                                  'Demeurons entourage me on la neanmoins on. Mur veut yeux sur ici sont vrai pere.',
                                  'Ete philippe avancent mettions air lui.',
                                  'Saute je halte epars le ma.',
                                  'Arriverent la etonnement prisonnier vieillards as si estaminets il patiemment.',
                                  'Marche ras lui pendus mal nul etonna.',
                                  'Voyez fit brave verte ils avant masse.',
                                  'Redoublait clairieres revolution en un.',
                                  'Pile gens tout voit jeu ils uns.',
                                  'Un doit avez la tant tete peur.',
                                  'Cathedrale oh me il lumineuses petitement gourmettes le.',
                                  'Mes oui egorger laissez fin roulent.',
                                  'Morceaux soixante du poitrine et propager laissons.',
                                  'Ete vive est que rues cela seul sans mur pose.',
                                  'Faux ca me cela vlan vies la.',
                                  'Compagnies rougeatres atteignait ici nez peu bas.',
                                  'On mort nuit qu fois trop mere.',
                                  'Sortaient or fusillade pu la suffisait arrachait indicible bourreaux.',
                                  'Pompons minutes etalent or le un de retarde.'];
  
  descriptionProduitDetail: string[] = ['Les jet autant courts espace. Amertume jeu bataille sciences par fillette dur. Suffisait as me ' +
    'positions connaitre. ' +
    'Son allaite aux accourt etirant battant chevaux grosses. Caracolent ' +
    'prisonnier si admiration approchait survivants au etonnement. Ruer te il pris soit. ' +
    'Philippe bouleaux colonnes nos vin ras attentif fin branches fenetres. Troupe pierre ' +
    'ont sol ici croyez est jurons parler metres. Pris ere cela aux six soit. Poussaient ils eau ',
    
    'remarquent car chantaient. Matieres se interdit habitent au en repartit ai relevent. Tu on mais ' +
    'noms joue cite tard bras ah et. Sans etat je oh noir cinq fois. Non salle foi beaux car roc force. Betes ' +
    'motif decor de en remit. La au prendre nations courent elancer tambour en. Grosses ca secouee portant precise me. ' +
    'Jour iii main suit pour rire peu ses nez. Les ouvrent prefere jet relatif. Tu canons la he vasque carres ii. ' +
    'Ras pouvaient souvenirs des distribua fer vif conquerir. Ah dormir ca lorsqu brumes du. Lumineuses instrument eau enveloppes ' +
    'inattendus manoeuvres par defilaient fin. Au le autant va peints raison epouse. Bout ifs avez ere main oui oui fait bois. ',
    
    'Ah devant qu va lazzis suivit bourse depuis ordure. Republique paraissent evidemment tristement il grouillent oh pressentit. ' +
    'Courir cet les yeuses nouent pleurs roc fut ouvert forges. Frequentes survivants instrument dit paraissait des executeurs ' +
    'souhaitait. Miserable flamboyer illumines repousser xv on mystiques ah effrayant. Remarquait estaminets ordonnance ras ils ' +
    'compassion par. Sur coups ils entre art connu votre essor. Et sans as feux ii fait il pans. Frisottent evidemment au atteignait ' +
    'le me ah. Cinq sous seul toi mes mal. Hauteur portent est marches attache moi car donjons plateau. Falloir aux menions net ' +
    'courent nul dut charges capotes petites. Au un labeur boules jardin avance. Admiration fraternite permission car mes electrique ' +
    'decharnees. Wagons puisqu police ici non usines. Tout un pres cent je elle cree et pour ah. Ii il va contemple poussiere tiendrons ' +
    'la. Ca depourvus soufflent du deroulent. Car inoui masse eut loups canif betes sorte ces. Son grille net ombres mollir',
    
    ' non gronde pareil but jardin. Subitement nid crispation nos fraternite arriverent. Vie corons jet gauche durcis des nouent ' +
    'doigts brumes nul. Voie et pois te chez. Suis tant va doit il bras ca. Verdure que ces attendu conclue chatoie qui. Avancaient ' +
    'fut ses enveloppes des non infanterie vieillards. Au quelques parterre ma tournent philippe on il attelage. ',
    
    'Son toi ans air jeta pour fois dela paix. Bleuissent maintenant survivants eux souffrance eau air est. Fin pas nul sanglees ' +
    'traverse exaltait prudence pressait. Dessus intime bourse sa he dirait tuiles au il jeunes. Sa sante sa nuits ' +
    'ah. Plaine la tenter jusque un on leguer en. Une courent les par nul beffroi conflit hideuse interdit et loquaces ',
    
    'imberbes commande kolbacks. Premiers adjudant bouleaux ifs crispent encontre cherirai peu.s. ' +
    'Feu minutes musique art trimons ils. Non cris mur poil epis lors peut soit. Depenser toussent au en voitures et. ' +
    'gourmettes va comprendre paraissait. Lassitude viendrait ca du du me sentiment fabriques meconnais convertir. ' +
    'mene ici uns tout cet bon. Prenaient me consumait. Poussiere indicible cuirasses agreerait cartouche ' +
    'des comprends que toi. Donc saut va idee et vive repit et homme large luire voeux xv. Reparler toi ' +
    'charrues oui non lumieres des pressait. Ne sa ah meconnais oh. Hors robe car cite joue tete aux eut ame pere. ',
    
    'Redoublait ma le ah ah. Pres cime fond une par bas. Pourrai habiles dut retarde relatif jet ans battant blanche.' +
    ' Verdure par pendant qui quitter six fit morales theatre. La oh sortit sortes manque. Decharnees mendiaient boulevards dur ' +
    'sur inattendus eclatantes. Connut canons bonnet les peu raison. Avec la main asie on cuir tout oh ruer en. Qu on oh orientaux au. ' +
    'Ce philomene sonnaient as marechaux.'];
  
  imageUrl = '../../assets/img/img';
  
  
  constructor() {
    this.nombreProduitGenere = 0;
  }
  
  genererProduit(): Produit {
    let nom: string = this.nomProduit[Math.floor(Math.random() * (this.nomProduit.length))];
    let description: string = this.descriptionProduit[Math.floor(Math.random() * (this.descriptionProduit.length))];
    let imageUrl: string = this.imageUrl + Math.floor(Math.random() * 9 + 1) + '.jpeg';
    this.nombreProduitGenere++;
    let produit = new Produit(this.nombreProduitGenere, nom, imageUrl, description, (Math.random() * 1000));
    
    produit.addDescriptionDetail(this.descriptionProduitDetail[Math.floor(Math.random() * (this.descriptionProduitDetail.length))]);
    
    return produit;
  }
  
  genererProduits(nombreProduit: number): Produit[] {
    let produits: Produit[] = [];
    
    for (let i = 0; i < nombreProduit; ++i) {
      produits.push(this.genererProduit());
    }
    
    return produits;
  }
}