import { Produit } from '../produit/Produit';

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
  
  imageUrl = '/src/assets/img';
  
  
  constructor() {
    this.nombreProduitGenere = 0;
  }
  
  genererProduit(): Produit {
    let nom: string = this.nomProduit[Math.floor(Math.random() * (this.nomProduit.length))];
    let description: string = this.descriptionProduit[Math.floor(Math.random() * (this.descriptionProduit.length))];
    let imageUrl: string = this.imageUrl + Math.floor(Math.random() * 9 + 1) + '.jpeg';
    this.nombreProduitGenere++;
    return new Produit(this.nombreProduitGenere, nom, imageUrl, description, (Math.random() * 1000));
  }
  
  genererProduits(nombreProduit: number): Produit[] {
    let produits: Produit[];
    
    for (let i = 0; i < nombreProduit; ++i) {
      produits.push(this.genererProduit());
    }
    
    return produits;
  }
}