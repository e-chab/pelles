"""j'avais d'abord pensé le faire en javascript :
function toutesLesPelles(nbPelles) //créer la liste des sources des images de pelles starck
	{srcPelles =[];
	for(var i=0,i!=nbPelles,i++){if (i<10){srcPelles[i]="images/pelles/image050 + i +.svg"}else{srcPelles[i]="images/pelles/image05 + i +.svg"}};
	}
"""

def faireArticlesPelles(nbPelles):
#la honte, j'ai du faire la liste à la main car je n'ai pas trouvé comment exploiter les 'title's de wikipédia et en plus finalement je peux les avoir grâce à l'application
    titrePelles =["La Fontaine Cuvier", "Le Collège de France", "Le berceau de l'Université", "La Place Maubert", "La Bibliothèque Sainte-Geneviève","Paul-Louis Courier","L'Ecole Normale Supérieure", "Eglise Saint-Nicolas-du-Chardonnet", "Le marché aux chevaux", "Le Chateau de la Tournelle","La Sorbonne", "Ancienne Ecole Polytechnique", "Emile Durkheim",  "Charles Péguy","Collège des Ecossais", "Collège des Grassins", "Les Bateaux-Omnibus",  "Collège des Irlandais", "Rue de la Huchette", "Cyrano de Bergerac",  "Le Jardin des Plantes", "Rue Galande", "Les thermes du Nord","Saint-Jacques-du-Haut-Pas", "Rue Mouffetard", "Fondation Curie", "Le Val de Grâce", "Lycée Henri IV", "Enceinte de Philippe Auguste", "La porte Saint-Jacques", "La tour de Calvin","La Mosquée", " La porte Saint-Bernard", "La faculté de Droit","Rue des Murs", "L'Eglise Saint-Séverin", "Saint-Benoît le Bétourné", "Eglise Saint-Julien-le-Pauvre","Collège Sainte-Barbe", "Institut du Monde Arabe",  "Ampère découvre l'électrodynamisque","Hotel Le Brun","Hotel de Nesmond","Hotel des Abbes de Cluny","Hotel de Scipion Sardini", "Dante rédige la Divine Comédie","La mairie du Ve arrondissement","Le Panthéon",  "L'abbaye  Saint-Victor", "L' E.S.P.C.I", "Les avaleurs de nefs","Eglise Saint-Etienne du Mont",  "Pont au Double", "Les Arènes de Lutèce", "Le laboratoire de physique de l'E.N.S", "La porte Saint-Victor", "Hotel du duc d'Orléans",  "Collège Coqueret et le naissance de la Pléiade",  "Hotel de Laffemas", "Eglise Saint-Médard",  "Les premiers paratonnerres" ]
#liste qui contient toutes les scr des images de pelles Stak
    srcPelles =[0]*nbPelles
    for i in range (1,nbPelles+1) :
        if i<10:
            srcPelles[i-1]="images/pelles/050"
            srcPelles[i-1] += str(i)
            srcPelles[i-1] += ".svg"
        else:
            srcPelles[i-1]="images/pelles/05"
            srcPelles[i-1] += str(i)
            srcPelles[i-1] += ".svg"
#création liste des id des images à partir de leur titre (liste copiée)
    titrePellesIntermediaire = list(titrePelles)
    idPelles=[]
    for titrePelle in titrePellesIntermediaire:
        idPelles.append(titrePelle.replace(" ", "_"))
#création de la liste des 'article's html des pelles stark du 5eme 
    articlesPelles = []
    for i in range(nbPelles):
        article='<article class="view"><img class="pelle" src="'
        article+= srcPelles[i]
        article+='" id=\"'
        article+= idPelles[i]
        article+='\" alt=\''
        article+= str(i+1)
        article+='\'/><div class="mask"><h2>'
        article+= titrePelles[i]
        article+='</h2><p onclick="afficher(\''
        article+= idPelles[i]
        article+='\')"> Voir plus </p></div></article>'
        articlesPelles.append(article)
    ArticlesPelles = ' '.join(articlesPelles)
    print(ArticlesPelles)





"""<article class="view">
<img  class="pelle" src="images/pelles/0528.svg" id="Lycée_Henri_IV" alt='28'/>
<div class="mask">
	<h2>Lycée Henri IV</h2>
	<p onclick="afficher('Lycée_Henri_IV')"> Voir plus </p>
</div>
</article>"""