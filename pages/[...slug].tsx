import Head from 'next/head';
import { GetStaticPaths, GetStaticProps } from 'next';

// ============================================================
// VILLES — 150 plus grandes villes de France
// ============================================================
const villes: Record<string, { nom: string; dept: string; anecdote: string; secteurs: string }> = {
  'paris': { nom: 'Paris', dept: '75', anecdote: 'Paris concentre plus de 500 000 entreprises — c\'est la métropole économique la plus dense d\'Europe occidentale.', secteurs: 'finance, tech, luxe, tourisme' },
  'lyon': { nom: 'Lyon', dept: '69', anecdote: 'Lyon est la capitale mondiale de la soie et abrite le plus grand pôle de biotechnologies de France avec plus de 3 500 entreprises biotech.', secteurs: 'chimie, biotech, numérique, agroalimentaire' },
  'marseille': { nom: 'Marseille', dept: '13', anecdote: 'Marseille est le premier port de France et de Méditerranée, avec plus de 80 000 entreprises actives sur son territoire.', secteurs: 'logistique, maritime, tourisme, commerce' },
  'toulouse': { nom: 'Toulouse', dept: '31', anecdote: 'Toulouse est la capitale européenne de l\'aéronautique — Airbus y emploie plus de 20 000 personnes directement.', secteurs: 'aéronautique, spatial, numérique, santé' },
  'nice': { nom: 'Nice', dept: '06', anecdote: 'Nice accueille la deuxième concentration de startups de France après Paris, notamment dans la French Tech Côte d\'Azur.', secteurs: 'tourisme, tech, santé, immobilier' },
  'nantes': { nom: 'Nantes', dept: '44', anecdote: 'Nantes est régulièrement élue ville la plus attractive de France pour les entreprises et les jeunes actifs.', secteurs: 'numérique, agroalimentaire, naval, santé' },
  'strasbourg': { nom: 'Strasbourg', dept: '67', anecdote: 'Strasbourg abrite le Parlement Européen et concentre de nombreuses institutions internationales, générant un tissu de PME de services unique.', secteurs: 'institutions, chimie, pharma, logistique' },
  'montpellier': { nom: 'Montpellier', dept: '34', anecdote: 'Montpellier est la ville qui croît le plus vite en France depuis 20 ans, avec une économie numérique en plein essor.', secteurs: 'numérique, santé, recherche, tourisme' },
  'bordeaux': { nom: 'Bordeaux', dept: '33', anecdote: 'Bordeaux est la capitale mondiale du vin et accueille plus de 60 000 entreprises, dont une filière agroalimentaire et viticole exceptionnelle.', secteurs: 'vin, agroalimentaire, aéronautique, numérique' },
  'lille': { nom: 'Lille', dept: '59', anecdote: 'Lille est au carrefour de Londres, Paris et Bruxelles — sa position géographique unique en fait un hub logistique et commercial majeur.', secteurs: 'logistique, commerce, numérique, textile' },
  'rennes': { nom: 'Rennes', dept: '35', anecdote: 'Rennes est la capitale française des télécommunications et abrite des géants comme Orange et SFR ainsi qu\'un écosystème numérique très dynamique.', secteurs: 'télécoms, numérique, agroalimentaire, santé' },
  'reims': { nom: 'Reims', dept: '51', anecdote: 'Reims est la capitale du Champagne — ses grandes maisons (Moët, Veuve Clicquot, Taittinger) font rayonner l\'économie champenoise dans le monde entier.', secteurs: 'champagne, agroalimentaire, commerce, logistique' },
  'le-havre': { nom: 'Le Havre', dept: '76', anecdote: 'Le Havre est le premier port de commerce français en volume de conteneurs, traitant plus de 2,5 millions de conteneurs par an.', secteurs: 'maritime, logistique, chimie, industrie' },
  'saint-etienne': { nom: 'Saint-Étienne', dept: '42', anecdote: 'Saint-Étienne, ancienne capitale du cycle et des armes, se réinvente aujourd\'hui comme capitale française du design et de l\'industrie créative.', secteurs: 'design, industrie, santé, numérique' },
  'toulon': { nom: 'Toulon', dept: '83', anecdote: 'Toulon abrite la plus grande base navale française et européenne, générant un écosystème de PME de défense et de haute technologie.', secteurs: 'défense, maritime, tourisme, construction' },
  'grenoble': { nom: 'Grenoble', dept: '38', anecdote: 'Grenoble est surnommée la "Silicon Valley française" — elle concentre le plus grand nombre de chercheurs par habitant en Europe.', secteurs: 'tech, semiconducteurs, énergie, recherche' },
  'dijon': { nom: 'Dijon', dept: '21', anecdote: 'Dijon est la capitale mondiale de la moutarde et de la gastronomie bourguignonne, avec un tissu agroalimentaire et viticole très dense.', secteurs: 'agroalimentaire, chimie, logistique, commerce' },
  'angers': { nom: 'Angers', dept: '49', anecdote: 'Angers est leader mondial dans le secteur de la végétation artificielle et abrite de nombreuses entreprises spécialisées dans l\'horticulture connectée.', secteurs: 'végétal, numérique, santé, logistique' },
  'nimes': { nom: 'Nîmes', dept: '30', anecdote: 'Nîmes, ville romaine millénaire, a donné son nom au tissu "de Nîmes" — le denim — exporté dans le monde entier depuis le XVIIe siècle.', secteurs: 'tourisme, commerce, agroalimentaire, logistique' },
  'villeurbanne': { nom: 'Villeurbanne', dept: '69', anecdote: 'Villeurbanne est la commune française la plus peuplée qui ne soit pas préfecture — elle concentre une importante activité numérique et universitaire dans la métropole lyonnaise.', secteurs: 'numérique, enseignement, santé, commerce' },
  'clermont-ferrand': { nom: 'Clermont-Ferrand', dept: '63', anecdote: 'Clermont-Ferrand est le siège mondial de Michelin, le géant du pneumatique qui y emploie plus de 15 000 personnes et génère tout un écosystème de sous-traitants.', secteurs: 'pneumatique, industrie, pharma, agroalimentaire' },
  'le-mans': { nom: 'Le Mans', dept: '72', anecdote: 'Le Mans est mondialement connu pour ses 24 heures automobiles, mais c\'est aussi un centre industriel majeur avec Renault comme employeur phare.', secteurs: 'automobile, assurance, logistique, agroalimentaire' },
  'aix-en-provence': { nom: 'Aix-en-Provence', dept: '13', anecdote: 'Aix-en-Provence abrite le siège de nombreuses multinationales attirées par sa qualité de vie et sa proximité avec Marseille et l\'aéroport international.', secteurs: 'services, tech, juridique, tourisme' },
  'brest': { nom: 'Brest', dept: '29', anecdote: 'Brest abrite le premier pôle mondial des sciences et technologies de la mer — l\'Ifremer et la Marine nationale y génèrent un tissu de PME high-tech unique.', secteurs: 'maritime, défense, numérique, santé' },
  'tours': { nom: 'Tours', dept: '37', anecdote: 'Tours est au cœur de la "Silicon Vallée" française — le Val de Loire concentre une filière pharmaceutique et numérique en plein essor.', secteurs: 'pharma, numérique, tourisme, agriculture' },
  'amiens': { nom: 'Amiens', dept: '80', anecdote: 'Amiens est la capitale de la Picardie et un centre industriel majeur, notamment dans le textile technique avec des entreprises comme Owens Corning.', secteurs: 'industrie, logistique, agroalimentaire, santé' },
  'limoges': { nom: 'Limoges', dept: '87', anecdote: 'Limoges est la capitale mondiale de la porcelaine — ses manufactures exportent dans 150 pays et constituent un savoir-faire artisanal unique reconnu à l\'UNESCO.', secteurs: 'céramique, pharma, agroalimentaire, numérique' },
  'annecy': { nom: 'Annecy', dept: '74', anecdote: 'Annecy abrite le lac le plus pur d\'Europe et attire des entreprises de haute technologie et de mécanique de précision dans un cadre de vie exceptionnel.', secteurs: 'mécanique, tourisme, numérique, santé' },
  'perpignan': { nom: 'Perpignan', dept: '66', anecdote: 'Perpignan est le premier marché de fruits et légumes d\'Europe — son MIN concentre des milliers de transactions chaque nuit avec des acheteurs venus de toute l\'Europe.', secteurs: 'agroalimentaire, tourisme, logistique, commerce' },
  'boulogne-billancourt': { nom: 'Boulogne-Billancourt', dept: '92', anecdote: 'Boulogne-Billancourt est le siège de nombreux médias français (TF1, M6) et d\'agences de communication, en faisant la capitale française des industries créatives.', secteurs: 'médias, numérique, finance, services' },
  'metz': { nom: 'Metz', dept: '57', anecdote: 'Metz abrite le Centre Pompidou-Metz, premier centre culturel décentralisé de France, qui a transformé l\'attractivité économique de toute la métropole.', secteurs: 'logistique, numérique, industrie, services' },
  'besancon': { nom: 'Besançon', dept: '25', anecdote: 'Besançon est la capitale mondiale de l\'horlogerie de précision — son savoir-faire en microtechniques et en mécanique de précision rayonne à l\'international.', secteurs: 'microtechniques, horlogerie, santé, numérique' },
  'orleans': { nom: 'Orléans', dept: '45', anecdote: 'Orléans est le premier centre pharmaceutique et cosmétique de France hors Paris, avec des géants comme Servier et Cosmetic Valley.', secteurs: 'pharma, cosmétique, logistique, agriculture' },
  'rouen': { nom: 'Rouen', dept: '76', anecdote: 'Rouen est le cinquième port fluvial de France et un centre industriel majeur de Normandie, avec une chimie et une pétrochimie très développées.', secteurs: 'chimie, logistique, industrie, numérique' },
  'mulhouse': { nom: 'Mulhouse', dept: '68', anecdote: 'Mulhouse abrite le Musée de l\'Automobile le plus grand d\'Europe avec 450 voitures — symbole d\'une ville longtemps à la pointe de l\'industrie automobile alsacienne.', secteurs: 'industrie, chimie, logistique, textile' },
  'caen': { nom: 'Caen', dept: '14', anecdote: 'Caen est un centre universitaire et de recherche majeur en Normandie, avec une spécialisation croissante dans le numérique et les sciences du vivant.', secteurs: 'numérique, agroalimentaire, industrie, santé' },
  'nancy': { nom: 'Nancy', dept: '54', anecdote: 'Nancy est réputée pour sa place Stanislas, chef-d\'œuvre baroque classé UNESCO, mais aussi pour son pôle de compétitivité en matériaux innovants.', secteurs: 'matériaux, numérique, santé, logistique' },
  'argenteuil': { nom: 'Argenteuil', dept: '95', anecdote: 'Argenteuil, immortalisée par les toiles de Claude Monet, est aujourd\'hui un centre industriel et logistique majeur du Val-d\'Oise en pleine transformation numérique.', secteurs: 'logistique, industrie, commerce, services' },
  'montreuil': { nom: 'Montreuil', dept: '93', anecdote: 'Montreuil abrite le plus grand nombre d\'artistes et de créatifs par habitant en Europe — et attire de plus en plus de startups et d\'agences numériques.', secteurs: 'numérique, créatif, médias, commerce' },
  'roubaix': { nom: 'Roubaix', dept: '59', anecdote: 'Roubaix est la capitale française du e-commerce — La Redoute y a inventé la vente à distance et de nombreux pure-players y ont installé leurs entrepôts.', secteurs: 'e-commerce, logistique, textile, numérique' },
  'tourcoing': { nom: 'Tourcoing', dept: '59', anecdote: 'Tourcoing est au cœur de la Métropole Européenne de Lille, à quelques kilomètres de la Belgique, et constitue un hub transfrontalier pour le commerce et la logistique.', secteurs: 'logistique, commerce, textile, services' },
  'dunkerque': { nom: 'Dunkerque', dept: '59', anecdote: 'Dunkerque est en train de devenir la capitale française des batteries électriques — plusieurs gigafactories y sont en construction pour alimenter l\'Europe.', secteurs: 'industrie, énergie, logistique, chimie' },
  'avignon': { nom: 'Avignon', dept: '84', anecdote: 'Avignon est mondialement connue pour son Festival de théâtre, mais aussi pour son agro-industrie prospère et sa position stratégique au carrefour de l\'A7 et de l\'A9.', secteurs: 'agroalimentaire, tourisme, logistique, commerce' },
  'nanterre': { nom: 'Nanterre', dept: '92', anecdote: 'Nanterre abrite La Défense, le premier quartier d\'affaires européen avec plus de 180 000 salariés et 1 500 entreprises dont de nombreuses multinationales.', secteurs: 'finance, services, numérique, immobilier' },
  'pau': { nom: 'Pau', dept: '64', anecdote: 'Pau est le berceau de l\'industrie pétrolière française — Total y a ses origines et la ville concentre un important tissu de PME parapétrolières.', secteurs: 'énergie, aéronautique, tourisme, agroalimentaire' },
  'poitiers': { nom: 'Poitiers', dept: '86', anecdote: 'Poitiers abrite le Futuroscope, premier parc d\'attractions technologique en France, qui a développé tout un écosystème de PME numériques et créatives autour de lui.', secteurs: 'numérique, enseignement, santé, agroalimentaire' },
  'versailles': { nom: 'Versailles', dept: '78', anecdote: 'Versailles attire chaque année 10 millions de visiteurs pour son château, mais abrite aussi un tissu de services aux entreprises très développé dans les Yvelines.', secteurs: 'tourisme, services, numérique, défense' },
  'colombes': { nom: 'Colombes', dept: '92', anecdote: 'Colombes abrite le siège d\'Eiffage et de nombreuses entreprises du BTP et des services, profitant de sa position stratégique aux portes de Paris.', secteurs: 'BTP, services, industrie, logistique' },
  'aubervilliers': { nom: 'Aubervilliers', dept: '93', anecdote: 'Aubervilliers est en pleine transformation avec les Jeux Olympiques 2024 qui y ont laissé d\'importantes infrastructures sportives et un tissu économique renouvelé.', secteurs: 'commerce, logistique, numérique, services' },
  'courbevoie': { nom: 'Courbevoie', dept: '92', anecdote: 'Courbevoie fait partie du quartier de La Défense et abrite des sièges de grandes entreprises comme Total Energies et Faurecia.', secteurs: 'finance, énergie, services, numérique' },
  'la-rochelle': { nom: 'La Rochelle', dept: '17', anecdote: 'La Rochelle est la ville la plus avancée de France en matière de mobilité verte — vélos électriques, voitures électriques partagées, tout y est testé en avant-première.', secteurs: 'maritime, tourisme, numérique, agroalimentaire' },
  'antibes': { nom: 'Antibes', dept: '06', anecdote: 'Antibes abrite Sophia Antipolis, la plus grande technopole d\'Europe avec plus de 2 300 entreprises et 40 000 salariés dans le numérique et la recherche.', secteurs: 'numérique, tech, tourisme, santé' },
  'cannes': { nom: 'Cannes', dept: '06', anecdote: 'Cannes accueille chaque année le MIPTV et le MIPCOM, les plus grands marchés mondiaux de programmes télévisés, générant des millions d\'euros de retombées économiques.', secteurs: 'tourisme, médias, luxe, événementiel' },
  'rueil-malmaison': { nom: 'Rueil-Malmaison', dept: '92', anecdote: 'Rueil-Malmaison abrite les sièges sociaux de Schneider Electric et ADP — deux géants mondiaux qui ont fait de cette commune un hub technologique majeur.', secteurs: 'énergie, numérique, services, industrie' },
  'calais': { nom: 'Calais', dept: '62', anecdote: 'Calais est le point de passage le plus fréquenté entre la France et le Royaume-Uni — son port traite 10 millions de passagers par an et des millions de tonnes de marchandises.', secteurs: 'logistique, maritime, commerce, industrie' },
  'merignac': { nom: 'Mérignac', dept: '33', anecdote: 'Mérignac abrite l\'aéroport de Bordeaux-Mérignac et concentre une importante filière aéronautique avec Dassault Aviation et de nombreux sous-traitants.', secteurs: 'aéronautique, logistique, services, commerce' },
  'saint-nazaire': { nom: 'Saint-Nazaire', dept: '44', anecdote: 'Saint-Nazaire est la capitale française de la construction navale — les chantiers STX y construisent les plus grands paquebots du monde comme le MSC World Europa.', secteurs: 'naval, aéronautique, énergie, industrie' },
  'colmar': { nom: 'Colmar', dept: '68', anecdote: 'Colmar est surnommée la "petite Venise d\'Alsace" et attire 5 millions de touristes par an — son économie touristique et sa filière viticole en font un modèle de prospérité locale.', secteurs: 'tourisme, vin, commerce, agroalimentaire' },
  'valenciennes': { nom: 'Valenciennes', dept: '59', anecdote: 'Valenciennes est la capitale française de l\'industrie ferroviaire — Alstom y conçoit des TGV, des tramways et des métros exportés dans le monde entier.', secteurs: 'ferroviaire, automobile, logistique, numérique' },
  'beziers': { nom: 'Béziers', dept: '34', anecdote: 'Béziers est au cœur du Languedoc viticole et développe une économie touristique dynamique autour du Canal du Midi, classé au patrimoine mondial de l\'UNESCO.', secteurs: 'vin, tourisme, agroalimentaire, commerce' },
  'bourges': { nom: 'Bourges', dept: '18', anecdote: 'Bourges abrite le plus important complexe de défense française hors Île-de-France — KNDS (ex-Nexter) y produit des chars Leclerc et des canons Caesar.', secteurs: 'défense, industrie, commerce, agriculture' },
  'quimper': { nom: 'Quimper', dept: '29', anecdote: 'Quimper est la capitale de la Cornouaille bretonne et abrite la célèbre faïencerie HB-Henriot, dont les productions sont reconnues comme patrimoine culturel immatériel.', secteurs: 'agroalimentaire, tourisme, commerce, numérique' },
  'troyes': { nom: 'Troyes', dept: '10', anecdote: 'Troyes est la capitale mondiale du tricot et des magasins d\'usine — ses outlets attirent des millions d\'acheteurs européens chaque année pour ses marques premium.', secteurs: 'textile, commerce, logistique, agroalimentaire' },
  'lorient': { nom: 'Lorient', dept: '56', anecdote: 'Lorient abrite la première criée de France en valeur de débarquement de poissons et un pôle de compétitivité maritime en plein développement.', secteurs: 'pêche, maritime, défense, numérique' },
  'issy-les-moulineaux': { nom: 'Issy-les-Moulineaux', dept: '92', anecdote: 'Issy-les-Moulineaux est la capitale française des médias numériques — Microsoft, Canal+, SFR y ont installé leurs sièges dans un écosystème tech unique.', secteurs: 'numérique, médias, services, finance' },
  'levallois-perret': { nom: 'Levallois-Perret', dept: '92', anecdote: 'Levallois-Perret est l\'une des communes les plus denses de France et abrite des sièges comme Havas, Euler Hermes et de nombreux groupes de communication.', secteurs: 'communication, finance, services, numérique' },
  'montrouge': { nom: 'Montrouge', dept: '92', anecdote: 'Montrouge abrite le siège du Crédit Agricole et de nombreuses entreprises financières — en faisant une place forte de la finance au sud de Paris.', secteurs: 'finance, services, numérique, santé' },
  'pessac': { nom: 'Pessac', dept: '33', anecdote: 'Pessac abrite l\'Université de Bordeaux et un important campus technologique qui génère un écosystème de startups et de PME innovantes dans la métropole bordelaise.', secteurs: 'numérique, enseignement, vin, services' },
  'cergy': { nom: 'Cergy', dept: '95', anecdote: 'Cergy-Pontoise est la plus grande ville nouvelle de France et abrite ESSEC, l\'une des meilleures écoles de commerce du monde, générant un tissu de services premium.', secteurs: 'services, finance, logistique, numérique' },
  'drancy': { nom: 'Drancy', dept: '93', anecdote: 'Drancy est une commune en pleine mutation économique, bénéficiant de la proximité du Bourget et du développement du Grand Paris pour attirer de nouvelles activités.', secteurs: 'logistique, commerce, services, industrie' },
  'valence': { nom: 'Valence', dept: '26', anecdote: 'Valence est au carrefour de l\'autoroute du Soleil et de la vallée du Rhône — sa position stratégique en fait une plateforme logistique majeure entre Lyon et Marseille.', secteurs: 'logistique, industrie, agroalimentaire, numérique' },
  'chambery': { nom: 'Chambéry', dept: '73', anecdote: 'Chambéry est la porte des Alpes françaises et abrite une filière montagne très développée autour des sports d\'hiver et de la mécatronique.', secteurs: 'tourisme, mécatronique, numérique, agroalimentaire' },
  'niort': { nom: 'Niort', dept: '79', anecdote: 'Niort est la capitale française de la mutuelle — Maif, Macif et Matmut y ont leur siège, faisant de cette ville un centre d\'excellence de l\'assurance et de la fintech.', secteurs: 'assurance, fintech, numérique, services' },
  'bayonne': { nom: 'Bayonne', dept: '64', anecdote: 'Bayonne a donné son nom à la baïonnette et au jambon de Bayonne — deux exportations mondiales qui symbolisent l\'inventivité et le savoir-faire basque.', secteurs: 'agroalimentaire, tourisme, chimie, commerce' },
  'vannes': { nom: 'Vannes', dept: '56', anecdote: 'Vannes est la capitale du Morbihan breton et connaît l\'une des plus fortes croissances économiques de Bretagne grâce à son attractivité touristique et résidentielle.', secteurs: 'tourisme, numérique, agroalimentaire, services' },
  'hyeres': { nom: 'Hyères', dept: '83', anecdote: 'Hyères est la plus ancienne station balnéaire de la Côte d\'Azur et abrite un important tissu de PME touristiques et viticoles dans le Var.', secteurs: 'tourisme, vin, agroalimentaire, services' },
  'montauban': { nom: 'Montauban', dept: '82', anecdote: 'Montauban est la ville natale du peintre Ingres et développe une économie agroalimentaire et logistique forte grâce à sa position entre Toulouse et Bordeaux.', secteurs: 'agroalimentaire, logistique, commerce, services' },
  'cherbourg': { nom: 'Cherbourg', dept: '50', anecdote: 'Cherbourg est la capitale mondiale du sous-marin nucléaire — Naval Group y construit les sous-marins de la Marine nationale française et exporte ses technologies.', secteurs: 'défense, naval, énergie, industrie' },
  'neuilly-sur-seine': { nom: 'Neuilly-sur-Seine', dept: '92', anecdote: 'Neuilly-sur-Seine est la commune la plus riche de France par revenu médian et abrite de nombreux cabinets d\'avocats, banques privées et sociétés de conseil premium.', secteurs: 'finance, conseil, services, luxe' },
  'clichy': { nom: 'Clichy', dept: '92', anecdote: 'Clichy abrite le siège de L\'Oréal, le premier groupe cosmétique mondial, qui génère tout un écosystème de fournisseurs et de sous-traitants dans la métropole parisienne.', secteurs: 'cosmétique, industrie, logistique, services' },
  'saint-denis': { nom: 'Saint-Denis', dept: '93', anecdote: 'Saint-Denis accueille le Stade de France et a bénéficié des Jeux Olympiques 2024 pour accélérer sa transformation économique et attirer de nouveaux investisseurs.', secteurs: 'événementiel, commerce, logistique, services' },
  'ajaccio': { nom: 'Ajaccio', dept: '2A', anecdote: 'Ajaccio, ville natale de Napoléon Bonaparte, est la capitale de la Corse et développe une économie touristique et agroalimentaire en lien avec son identité insulaire forte.', secteurs: 'tourisme, agroalimentaire, services, BTP' },
  'belfort': { nom: 'Belfort', dept: '90', anecdote: 'Belfort est le berceau de la locomotive française — Alstom (ex-GEC-Alsthom) y produit des TGV depuis 1974 et le Lion de Belfort symbolise la résistance industrielle de la ville.', secteurs: 'ferroviaire, énergie, industrie, numérique' },
  'brive-la-gaillarde': { nom: 'Brive-la-Gaillarde', dept: '19', anecdote: 'Brive est surnommée la "Gaillarde" pour le caractère de ses habitants — c\'est aussi un centre logistique et agroalimentaire majeur du Sud-Ouest français.', secteurs: 'agroalimentaire, logistique, services, commerce' },
  'saint-malo': { nom: 'Saint-Malo', dept: '35', anecdote: 'Saint-Malo est la cité corsaire qui a vu naître Surcouf et Chateaubriand — aujourd\'hui c\'est une destination touristique phare et un port de ferries très actif vers les îles britanniques.', secteurs: 'tourisme, maritime, commerce, services' },
  'angouleme': { nom: 'Angoulême', dept: '16', anecdote: 'Angoulême est la capitale mondiale de la bande dessinée — son Festival international attire chaque année 200 000 visiteurs et génère tout un écosystème créatif et numérique.', secteurs: 'numérique, créatif, papier, industrie' },
  'carcassonne': { nom: 'Carcassonne', dept: '11', anecdote: 'Carcassonne abrite la plus grande cité médiévale fortifiée d\'Europe, classée UNESCO — son attractivité touristique génère 3,5 millions de visiteurs par an.', secteurs: 'tourisme, vin, agroalimentaire, services' },
  'roanne': { nom: 'Roanne', dept: '42', anecdote: 'Roanne est connue pour sa gastronomie avec la Maison Troisgros, mais aussi pour son industrie textile technique et ses PME de mécanique de précision.', secteurs: 'textile, industrie, agroalimentaire, services' },
  'cholet': { nom: 'Cholet', dept: '49', anecdote: 'Cholet est la capitale du mouchoir — cette tradition textile a évolué vers une filière mode et habillement dynamique qui exporte dans toute l\'Europe.', secteurs: 'textile, logistique, industrie, commerce' },
  'thionville': { nom: 'Thionville', dept: '57', anecdote: 'Thionville est au cœur du triangle Metz-Luxembourg-Trèves et bénéficie d\'une économie transfrontalière exceptionnelle avec des milliers de travailleurs frontaliers luxembourgeois.', secteurs: 'logistique, services, industrie, commerce' },
  'laval': { nom: 'Laval', dept: '53', anecdote: 'Laval a créé Laval Virtual, le plus grand salon mondial de la réalité virtuelle et augmentée — en faisant de cette ville moyenne un repère mondial de l\'innovation immersive.', secteurs: 'numérique, VR, agroalimentaire, industrie' },
  'meaux': { nom: 'Meaux', dept: '77', anecdote: 'Meaux est la capitale de la Brie et du célèbre fromage éponyme — c\'est aussi une plateforme logistique majeure aux portes de Paris grâce à l\'A4 et à la Marne.', secteurs: 'logistique, agroalimentaire, commerce, services' },
  'albi': { nom: 'Albi', dept: '81', anecdote: 'Albi est classée au patrimoine mondial de l\'UNESCO pour sa cité épiscopale et abrite le musée Toulouse-Lautrec, attirant des centaines de milliers de visiteurs.', secteurs: 'tourisme, agroalimentaire, chimie, services' },
  'alfortville': { nom: 'Alfortville', dept: '94', anecdote: 'Alfortville abrite l\'École Nationale Vétérinaire d\'Alfort, la plus ancienne école vétérinaire du monde fondée en 1766, générant un pôle santé animale unique.', secteurs: 'santé, logistique, commerce, services' },
  'martigues': { nom: 'Martigues', dept: '13', anecdote: 'Martigues est surnommée la "Venise provençale" et abrite la plus grande raffinerie de France — celle de Lavéra traitant plus de 20 millions de tonnes de pétrole par an.', secteurs: 'pétrochimie, industrie, tourisme, services' },
  'auxerre': { nom: 'Auxerre', dept: '89', anecdote: 'Auxerre est la capitale de l\'Yonne et un centre agroalimentaire majeur avec la filière viticole de Chablis qui exporte dans plus de 80 pays.', secteurs: 'vin, agroalimentaire, commerce, logistique' },
  'evreux': { nom: 'Évreux', dept: '27', anecdote: 'Évreux est le centre économique de l\'Eure normande et développe une filière pharmaceutique et logistique dynamique grâce à sa proximité avec Paris et Rouen.', secteurs: 'pharma, logistique, industrie, services' },
  'chartres': { nom: 'Chartres', dept: '28', anecdote: 'Chartres abrite la cathédrale gothique la plus parfaite du monde selon de nombreux spécialistes, et développe une filière cosmétique et pharmaceutique en plein essor.', secteurs: 'cosmétique, pharma, logistique, agroalimentaire' },
  'narbonne': { nom: 'Narbonne', dept: '11', anecdote: 'Narbonne était la première colonie romaine en Gaule et reste aujourd\'hui un carrefour stratégique entre l\'Espagne et la France, avec une filière viticole et touristique forte.', secteurs: 'vin, tourisme, logistique, agroalimentaire' },
  'saint-ouen': { nom: 'Saint-Ouen', dept: '93', anecdote: 'Saint-Ouen abrite le célèbre Marché aux Puces de Saint-Ouen, le plus grand marché d\'antiquités et de brocante au monde avec plus de 3 000 marchands.', secteurs: 'commerce, services, numérique, logistique' },
  'chelles': { nom: 'Chelles', dept: '77', anecdote: 'Chelles est une commune en forte croissance en Seine-et-Marne, bénéficiant du Grand Paris Express pour développer son attractivité économique et résidentielle.', secteurs: 'logistique, services, commerce, industrie' },
  'bobigny': { nom: 'Bobigny', dept: '93', anecdote: 'Bobigny est la préfecture de Seine-Saint-Denis et abrite d\'importants équipements judiciaires et administratifs qui génèrent un tissu de services aux entreprises développé.', secteurs: 'services, logistique, commerce, santé' },
  'frejus': { nom: 'Fréjus', dept: '83', anecdote: 'Fréjus est l\'une des villes romaines les mieux conservées de France avec son amphithéâtre, ses thermes et son aqueduc — un atout touristique majeur dans le Var.', secteurs: 'tourisme, BTP, services, commerce' },
  'mantes-la-jolie': { nom: 'Mantes-la-Jolie', dept: '78', anecdote: 'Mantes-la-Jolie est en pleine transformation dans le cadre du Grand Paris et développe des projets immobiliers et économiques majeurs pour attirer de nouvelles entreprises.', secteurs: 'logistique, services, commerce, industrie' },
  'ivry-sur-seine': { nom: 'Ivry-sur-Seine', dept: '94', anecdote: 'Ivry-sur-Seine accueille le plus grand marché d\'intérêt national de la région parisienne pour les fleurs, et développe un important tissu logistique et numérique.', secteurs: 'logistique, numérique, services, commerce' },
  'vitry-sur-seine': { nom: 'Vitry-sur-Seine', dept: '94', anecdote: 'Vitry-sur-Seine est en pleine renaissance artistique avec MAC VAL, le seul musée d\'art contemporain d\'Île-de-France hors Paris, et un tissu culturel et numérique en essor.', secteurs: 'industrie, logistique, services, numérique' },
  'evry': { nom: 'Évry', dept: '91', anecdote: 'Évry-Courcouronnes est une ville nouvelle qui abrite Génopole, le premier campus français dédié aux sciences du vivant et à la génomique, avec plus de 80 entreprises biotech.', secteurs: 'biotech, numérique, services, logistique' },
  'antony': { nom: 'Antony', dept: '92', anecdote: 'Antony abrite le siège de nombreuses PME pharmaceutiques et de biotechnologies dans le cluster Medicen, en faisant un pôle santé de premier plan en Île-de-France.', secteurs: 'pharma, services, numérique, commerce' },
  'epinay-sur-seine': { nom: 'Épinay-sur-Seine', dept: '93', anecdote: 'Épinay-sur-Seine abrite les studios de cinéma les plus anciens de France — fondés en 1905, ils ont accueilli les tournages de films muets historiques.', secteurs: 'industrie, services, logistique, commerce' },
  'pantin': { nom: 'Pantin', dept: '93', anecdote: 'Pantin est devenu le nouveau quartier créatif et mode de Paris — Hermès, Chanel et de nombreuses maisons de couture y ont installé leurs ateliers et bureaux.', secteurs: 'mode, créatif, logistique, numérique' },
  'poissy': { nom: 'Poissy', dept: '78', anecdote: 'Poissy est la ville natale de l\'industrie automobile française — l\'usine Stellantis (ex-PSA Peugeot) y produit encore des véhicules depuis plus d\'un siècle.', secteurs: 'automobile, industrie, logistique, services' },
  'sartrouville': { nom: 'Sartrouville', dept: '78', anecdote: 'Sartrouville est une commune des Yvelines en plein développement économique, bénéficiant de sa proximité avec La Défense et du tissu industriel dense de la région parisienne.', secteurs: 'industrie, logistique, services, commerce' },
  'la-courneuve': { nom: 'La Courneuve', dept: '93', anecdote: 'La Courneuve abrite l\'un des plus grands parcs industriels d\'Île-de-France et accueille des entrepôts et des ateliers de nombreuses PME de la métropole parisienne.', secteurs: 'industrie, logistique, services, commerce' },
  'sarcelles': { nom: 'Sarcelles', dept: '95', anecdote: 'Sarcelles est une commune en pleine mutation économique dans le Val-d\'Oise, bénéficiant des infrastructures du Grand Paris pour développer son attractivité.', secteurs: 'services, commerce, logistique, industrie' },
  'fontenay-sous-bois': { nom: 'Fontenay-sous-Bois', dept: '94', anecdote: 'Fontenay-sous-Bois est l\'une des communes les plus boisées du Val-de-Marne et développe un tissu de services aux entreprises et de numérique en plein essor.', secteurs: 'services, numérique, santé, commerce' },
  'massy': { nom: 'Massy', dept: '91', anecdote: 'Massy abrite un important pôle TGV et un cluster technologique avec Alcatel-Lucent (Nokia) — en faisant un hub technologique et logistique majeur en Essonne.', secteurs: 'tech, logistique, services, pharma' },
  'arles': { nom: 'Arles', dept: '13', anecdote: 'Arles est la plus grande commune de France métropolitaine en superficie et abrite des arènes romaines classées UNESCO ainsi que les Rencontres de la Photographie, événement mondial.', secteurs: 'tourisme, agriculture, culture, services' },
  'clamart': { nom: 'Clamart', dept: '92', anecdote: 'Clamart abrite le CEA (Commissariat à l\'Énergie Atomique) et développe un tissu de PME high-tech autour de la recherche fondamentale et appliquée.', secteurs: 'recherche, tech, services, numérique' },
  'vincennes': { nom: 'Vincennes', dept: '94', anecdote: 'Vincennes est l\'une des communes les plus riches et les plus denses de France — son château royal et son bois en font une destination prisée des cadres et dirigeants parisiens.', secteurs: 'services, finance, santé, numérique' },
  'villejuif': { nom: 'Villejuif', dept: '94', anecdote: 'Villejuif abrite l\'Institut Gustave Roussy, le premier centre de lutte contre le cancer en Europe, générant tout un écosystème biotech et pharma en Val-de-Marne.', secteurs: 'santé, biotech, numérique, services' },
  'epinal': { nom: 'Épinal', dept: '88', anecdote: 'Épinal a donné son nom aux "images d\'Épinal" — ses imprimeries sont historiquement les premières à avoir produit des images populaires en couleur pour le grand public.', secteurs: 'industrie, forêt, services, commerce' },
  'saint-brieuc': { nom: 'Saint-Brieuc', dept: '22', anecdote: 'Saint-Brieuc est la préfecture des Côtes-d\'Armor et un centre économique breton dynamique avec une filière agroalimentaire et numérique en forte croissance.', secteurs: 'agroalimentaire, numérique, services, tourisme' },
  'montlucon': { nom: 'Montluçon', dept: '03', anecdote: 'Montluçon est un centre industriel historique de l\'Allier avec une tradition chimique et métallurgique qui se réinvente aujourd\'hui autour du numérique et des services.', secteurs: 'industrie, chimie, services, commerce' },
  'bondy': { nom: 'Bondy', dept: '93', anecdote: 'Bondy est connue pour son centre de formation du Paris Saint-Germain qui a révélé Kylian Mbappé — et développe un tissu économique en pleine mutation dans le Grand Paris.', secteurs: 'services, commerce, logistique, industrie' },
  'saint-quentin': { nom: 'Saint-Quentin', dept: '02', anecdote: 'Saint-Quentin est connue pour sa basilique gothique et son art-déco d\'exception, mais aussi pour ses PME industrielles spécialisées dans le textile technique et la plasturgie.', secteurs: 'industrie, textile, logistique, services' },
  'noisy-le-grand': { nom: 'Noisy-le-Grand', dept: '93', anecdote: 'Noisy-le-Grand abrite le campus de l\'ESIEE Paris et développe un pôle numérique et technologique important dans la ville nouvelle de Marne-la-Vallée.', secteurs: 'numérique, services, logistique, commerce' },
  'salon-de-provence': { nom: 'Salon-de-Provence', dept: '13', anecdote: 'Salon-de-Provence abrite la base aérienne 701 et l\'école de l\'Air et de l\'Espace — faisant de cette ville une référence mondiale pour la formation des pilotes.', secteurs: 'défense, aéronautique, services, agroalimentaire' },
  'gagny': { nom: 'Gagny', dept: '93', anecdote: 'Gagny est une commune résidentielle de Seine-Saint-Denis qui développe son tissu économique de proximité avec de nombreux commerces et services aux entreprises.', secteurs: 'services, commerce, logistique, industrie' },
  'boulogne-sur-mer': { nom: 'Boulogne-sur-Mer', dept: '62', anecdote: 'Boulogne-sur-Mer est le premier port de pêche français et le premier centre européen de transformation du poisson, avec Eurotunnel comme voisin stratégique.', secteurs: 'pêche, agroalimentaire, logistique, tourisme' },
  'maisons-alfort': { nom: 'Maisons-Alfort', dept: '94', anecdote: 'Maisons-Alfort abrite l\'École Nationale Vétérinaire d\'Alfort et développe un important pôle de santé animale et de biotechnologies dans le Val-de-Marne.', secteurs: 'santé, services, commerce, numérique' },
  'caluire-et-cuire': { nom: 'Caluire-et-Cuire', dept: '69', anecdote: 'Caluire-et-Cuire est connue pour l\'arrestation de Jean Moulin par la Gestapo en 1943 — aujourd\'hui c\'est une commune résidentielle huppée aux portes de Lyon avec un tissu de services développé.', secteurs: 'services, santé, numérique, commerce' },
  'asnieres-sur-seine': { nom: 'Asnières-sur-Seine', dept: '92', anecdote: 'Asnières-sur-Seine a été immortalisée par Georges Seurat dans "Une Baignade à Asnières" — aujourd\'hui c\'est une commune dynamique avec un tissu de PME en services et numérique.', secteurs: 'services, numérique, commerce, logistique' },
  'champigny-sur-marne': { nom: 'Champigny-sur-Marne', dept: '94', anecdote: 'Champigny-sur-Marne est une ville en plein développement grâce au Grand Paris Express et à l\'arrivée de nouvelles lignes de métro qui désenclavent son économie locale.', secteurs: 'services, commerce, logistique, industrie' },
  'saint-maur-des-fosses': { nom: 'Saint-Maur-des-Fossés', dept: '94', anecdote: 'Saint-Maur-des-Fossés est la commune la plus étendue du Val-de-Marne avec ses méandres de Marne — un cadre de vie exceptionnel qui attire professions libérales et PME de services.', secteurs: 'services, santé, numérique, commerce' },
  'creteil': { nom: 'Créteil', dept: '94', anecdote: 'Créteil est la préfecture du Val-de-Marne et abrite un CHU de référence ainsi qu\'une université dynamique générant un pôle santé et numérique en plein essor.', secteurs: 'santé, services, numérique, commerce' },
  'la-seyne-sur-mer': { nom: 'La Seyne-sur-Mer', dept: '83', anecdote: 'La Seyne-sur-Mer abrite les anciens chantiers navals qui construisaient des bâtiments militaires pour la Marine nationale — aujourd\'hui reconvertis en pôle créatif et culturel.', secteurs: 'maritime, tourisme, services, industrie' },
  'villeneuve-d-ascq': { nom: "Villeneuve-d'Ascq", dept: '59', anecdote: "Villeneuve-d'Ascq abrite Euratechnologies, l'un des premiers incubateurs de startups numériques en France, et l'Université de Lille qui en fait un hub académique et technologique majeur.", secteurs: 'numérique, enseignement, commerce, logistique' },
  'saint-priest': { nom: 'Saint-Priest', dept: '69', anecdote: 'Saint-Priest est l\'une des communes les plus industrielles de la métropole lyonnaise avec des PME spécialisées en chimie, logistique et industrie manufacturière.', secteurs: 'industrie, logistique, chimie, services' },
  'bron': { nom: 'Bron', dept: '69', anecdote: 'Bron abrite l\'aéroport Lyon-Bron et le CHU de Lyon-Est, en faisant un pôle de santé et d\'aéronautique d\'affaires important dans la métropole lyonnaise.', secteurs: 'santé, aéronautique, services, numérique' },
  'corbeil-essonnes': { nom: 'Corbeil-Essonnes', dept: '91', anecdote: 'Corbeil-Essonnes abrite les usines Evry-Corbeil de Sanofi et un tissu pharmaceutique dense en Essonne, aux côtés d\'une filière logistique en pleine croissance.', secteurs: 'pharma, logistique, services, industrie' },
  'gennevilliers': { nom: 'Gennevilliers', dept: '92', anecdote: 'Gennevilliers abrite le plus grand port fluvial de la région parisienne et développe un écosystème logistique et industriel en pleine transformation vers le numérique.', secteurs: 'logistique, industrie, services, numérique' },
  'rosny-sous-bois': { nom: 'Rosny-sous-Bois', dept: '93', anecdote: 'Rosny-sous-Bois abrite le siège de France Télévisions et développe un pôle médias et numérique important en Seine-Saint-Denis.', secteurs: 'médias, numérique, services, commerce' },
  'noisy-le-sec': { nom: 'Noisy-le-Sec', dept: '93', anecdote: 'Noisy-le-Sec est une commune industrielle historique de Seine-Saint-Denis qui se transforme en hub logistique et de services grâce au Grand Paris Express.', secteurs: 'logistique, industrie, services, commerce' },
  'les-ulis': { nom: 'Les Ulis', dept: '91', anecdote: 'Les Ulis abrite le plus grand parc technologique de l\'Essonne avec des entreprises comme Air Liquide et de nombreuses PME de haute technologie et de R&D.', secteurs: 'tech, R&D, services, numérique' },
  'athis-mons': { nom: 'Athis-Mons', dept: '91', anecdote: 'Athis-Mons est situé sous l\'axe d\'approche de l\'aéroport d\'Orly et développe un tissu de services et de logistique lié à l\'aérien et au transport.', secteurs: 'logistique, services, industrie, commerce' },
  'soissons': { nom: 'Soissons', dept: '02', anecdote: 'Soissons est l\'une des plus anciennes villes de France — Clovis y brisa un vase légendaire — et développe aujourd\'hui une filière agroalimentaire et industrielle solide.', secteurs: 'agroalimentaire, industrie, services, commerce' },
  'lormont': { nom: 'Lormont', dept: '33', anecdote: 'Lormont fait partie de la rive droite de Bordeaux Métropole et connaît une forte dynamique de développement économique grâce aux infrastructures du Grand Projet des Deux Rives.', secteurs: 'services, logistique, commerce, numérique' },
  'la-garde': { nom: 'La Garde', dept: '83', anecdote: 'La Garde est la deuxième commune du Var par population et abrite l\'Université de Toulon ainsi qu\'un tissu de PME de services et de numérique en plein développement.', secteurs: 'services, numérique, commerce, défense' },
  'bagneux': { nom: 'Bagneux', dept: '92', anecdote: 'Bagneux est en pleine transformation grâce au Grand Paris Express — la commune développe de nouveaux quartiers mixtes associant logements, bureaux et commerces innovants.', secteurs: 'services, numérique, commerce, logistique' },
};

// ============================================================
// DÉPARTEMENTS — 90 départements de France métropolitaine
// ============================================================
const departements: Record<string, { nom: string; chef_lieu: string; anecdote: string; entreprises: string; villes_top: string[] }> = {
  'ain': { nom: "Ain", chef_lieu: "Bourg-en-Bresse", anecdote: "L'Ain est réputé pour la volaille de Bresse AOP et abrite de nombreuses PME industrielles dans la Plastics Vallée, premier pôle mondial de la plasturgie.", entreprises: "22 000", villes_top: ['bourg-en-bresse', 'oyonnax', 'bellegarde-sur-valserine'] },
  'aisne': { nom: "Aisne", chef_lieu: "Laon", anecdote: "L'Aisne est le berceau de la betterave sucrière française et abrite d'importantes coopératives agroalimentaires ainsi qu'une filière chimique héritée de son passé industriel.", entreprises: "18 000", villes_top: ['saint-quentin', 'soissons', 'laon'] },
  'allier': { nom: "Allier", chef_lieu: "Moulins", anecdote: "L'Allier est connu pour ses thermes de Vichy et son industrie automobile avec Bosch à Vénissieux — un département qui allie tradition thermale et modernité industrielle.", entreprises: "14 000", villes_top: ['montlucon', 'moulins', 'vichy'] },
  'alpes-de-haute-provence': { nom: "Alpes-de-Haute-Provence", chef_lieu: "Digne-les-Bains", anecdote: "Les Alpes-de-Haute-Provence produisent 80% de la lavande française — une filière emblématique qui génère parfums, huiles essentielles et un tourisme agro-pastoral unique.", entreprises: "9 000", villes_top: ['digne-les-bains', 'manosque', 'sisteron'] },
  'hautes-alpes': { nom: "Hautes-Alpes", chef_lieu: "Gap", anecdote: "Les Hautes-Alpes abritent les plus hauts sommets de France et développent une économie de montagne articulée autour du ski, du tourisme vert et des énergies renouvelables.", entreprises: "8 500", villes_top: ['gap', 'briancon', 'embrun'] },
  'alpes-maritimes': { nom: "Alpes-Maritimes", chef_lieu: "Nice", anecdote: "Les Alpes-Maritimes accueillent Sophia Antipolis, la première technopole européenne créée en 1969, qui rassemble aujourd'hui 2 300 entreprises et 40 000 salariés dans le numérique.", entreprises: "85 000", villes_top: ['nice', 'antibes', 'cannes'] },
  'ardeche': { nom: "Ardèche", chef_lieu: "Privas", anecdote: "L'Ardèche est célèbre pour ses gorges spectaculaires et sa châtaigneraie — la 'Grotte Chauvet' y a été découverte en 1994 avec les peintures préhistoriques les plus anciennes du monde.", entreprises: "13 000", villes_top: ['privas', 'annonay', 'aubenas'] },
  'ardennes': { nom: "Ardennes", chef_lieu: "Charleville-Mézières", anecdote: "Les Ardennes sont le berceau de la métallurgie française — ses vallées industrielles ont forgé des générations d'artisans du métal dont l'expertise est reconnue mondialement.", entreprises: "12 000", villes_top: ['charleville-mezieres', 'sedan', 'givet'] },
  'ariege': { nom: "Ariège", chef_lieu: "Foix", anecdote: "L'Ariège abrite les grottes préhistoriques de Niaux avec leurs bisons dessinés il y a 13 000 ans — un patrimoine exceptionnel qui attire des chercheurs du monde entier.", entreprises: "8 000", villes_top: ['foix', 'pamiers', 'lavelanet'] },
  'aube': { nom: "Aube", chef_lieu: "Troyes", anecdote: "L'Aube est le coeur du Champagne viticole avec des maisons prestigieuses comme Ruinart, et abrite à Troyes la capitale mondiale des magasins d'usine qui attirent des millions d'acheteurs.", entreprises: "18 000", villes_top: ['troyes', 'romilly-sur-seine', 'bar-sur-aube'] },
  'aude': { nom: "Aude", chef_lieu: "Carcassonne", anecdote: "L'Aude abrite la cité médiévale de Carcassonne classée UNESCO et produit des vins du Languedoc reconnus internationalement — Corbières, Minervois, Fitou.", entreprises: "16 000", villes_top: ['carcassonne', 'narbonne', 'limoux'] },
  'aveyron': { nom: "Aveyron", chef_lieu: "Rodez", anecdote: "L'Aveyron est le pays du roquefort — la 'reine des fromages' affinée dans les caves naturelles de Combalou depuis plus de 2 000 ans et exportée dans 90 pays.", entreprises: "14 000", villes_top: ['rodez', 'millau', 'villefranche-de-rouergue'] },
  'bouches-du-rhone': { nom: "Bouches-du-Rhône", chef_lieu: "Marseille", anecdote: "Les Bouches-du-Rhône abritent le plus grand port de commerce de France à Marseille et Fos-sur-Mer — une zone industrialo-portuaire qui génère 40 000 emplois directs.", entreprises: "120 000", villes_top: ['marseille', 'aix-en-provence', 'arles'] },
  'calvados': { nom: "Calvados", chef_lieu: "Caen", anecdote: "Le Calvados a donné son nom à l'eau-de-vie de cidre normande — une filière agroalimentaire d'excellence qui coexiste avec une industrie automobile et numérique dynamique à Caen.", entreprises: "28 000", villes_top: ['caen', 'bayeux', 'lisieux'] },
  'cantal': { nom: "Cantal", chef_lieu: "Aurillac", anecdote: "Le Cantal est le pays du fromage AOP le plus ancien de France — la Fourme de Cantal ou Salers — et développe une filière bovine haut de gamme exportée dans toute l'Europe.", entreprises: "8 000", villes_top: ['aurillac', 'saint-flour', 'mauriac'] },
  'charente': { nom: "Charente", chef_lieu: "Angoulême", anecdote: "La Charente est la patrie du Cognac, l'eau-de-vie la plus exportée au monde avec 98% de la production vendue hors de France — un produit phare du luxe français.", entreprises: "16 000", villes_top: ['angouleme', 'cognac', 'soyaux'] },
  'charente-maritime': { nom: "Charente-Maritime", chef_lieu: "La Rochelle", anecdote: "La Charente-Maritime produit 80% des huîtres françaises — le bassin de Marennes-Oléron est la première zone ostréicole d'Europe avec une production de 20 000 tonnes par an.", entreprises: "28 000", villes_top: ['la-rochelle', 'saintes', 'rochefort'] },
  'cher': { nom: "Cher", chef_lieu: "Bourges", anecdote: "Le Cher abrite l'une des plus importantes industries d'armement françaises avec KNDS à Bourges — et les vignobles de Sancerre et Menetou-Salon reconnus dans le monde entier.", entreprises: "14 000", villes_top: ['bourges', 'vierzon', 'saint-amand-montrond'] },
  'correze': { nom: "Corrèze", chef_lieu: "Tulle", anecdote: "La Corrèze est le pays de la noix et de la gentiane — et abrite SNECMA à Tulle qui produit des pièces de moteurs d'avion Airbus dans un savoir-faire industriel d'exception.", entreprises: "11 000", villes_top: ['brive-la-gaillarde', 'tulle', 'ussel'] },
  'corse-du-sud': { nom: "Corse-du-Sud", chef_lieu: "Ajaccio", anecdote: "La Corse-du-Sud produit les vins corses AOP les plus réputés de l'île — Figari, Porto-Vecchio — et développe un tourisme haut de gamme axé sur la nature et l'authenticité.", entreprises: "18 000", villes_top: ['ajaccio', 'porto-vecchio', 'sartene'] },
  'haute-corse': { nom: "Haute-Corse", chef_lieu: "Bastia", anecdote: "La Haute-Corse est le berceau du patrimoine génois avec ses tours de défense côtières — et développe une filière agroalimentaire autour de la charcuterie AOP et du miel corse.", entreprises: "16 000", villes_top: ['bastia', 'corte', 'calvi'] },
  'cote-d-or': { nom: "Côte-d'Or", chef_lieu: "Dijon", anecdote: "La Côte-d'Or abrite la Route des Grands Crus, classée UNESCO — ses vignobles de Bourgogne (Romanée-Conti, Gevrey-Chambertin) produisent les vins les plus chers du monde.", entreprises: "28 000", villes_top: ['dijon', 'beaune', 'chenove'] },
  'cotes-d-armor': { nom: "Côtes-d'Armor", chef_lieu: "Saint-Brieuc", anecdote: "Les Côtes-d'Armor sont le premier département producteur de légumes frais en France — les choufleurs, brocolis et artichauts bretons sont exportés dans toute l'Europe.", entreprises: "18 000", villes_top: ['saint-brieuc', 'lannion', 'guingamp'] },
  'creuse': { nom: "Creuse", chef_lieu: "Guéret", anecdote: "La Creuse est connue pour ses maçons itinérants qui ont bâti une grande partie de Paris au XIXe siècle — une tradition d'excellence artisanale qui perdure dans le BTP local.", entreprises: "6 000", villes_top: ['gueret', 'aubusson', 'la-souterraine'] },
  'dordogne': { nom: "Dordogne", chef_lieu: "Périgueux", anecdote: "La Dordogne est la capitale mondiale du foie gras et de la truffe noire — et abrite Lascaux, dont les peintures préhistoriques sont parmi les plus belles du monde.", entreprises: "18 000", villes_top: ['perigueux', 'bergerac', 'sarlat-la-caneda'] },
  'doubs': { nom: "Doubs", chef_lieu: "Besançon", anecdote: "Le Doubs est la capitale de la montre suisse côté français — ses microtechniques et son industrie horlogère de précision sont reconnues mondialement dans la vallée de la Loue.", entreprises: "28 000", villes_top: ['besancon', 'montbeliard', 'pontarlier'] },
  'drome': { nom: "Drôme", chef_lieu: "Valence", anecdote: "La Drôme est le premier département bio de France avec 25% de sa surface agricole en agriculture biologique — un modèle d'agriculture durable qui attire investisseurs et entrepreneurs.", entreprises: "22 000", villes_top: ['valence', 'romans-sur-isere', 'montelimar'] },
  'eure': { nom: "Eure", chef_lieu: "Évreux", anecdote: "L'Eure abrite la vallée de la Seine industrielle avec des usines pharmaceutiques, cosmétiques et pétrochimiques majeures — dont les sites de Sanofi et Pfizer à Val-de-Reuil.", entreprises: "22 000", villes_top: ['evreux', 'vernon', 'louviers'] },
  'eure-et-loir': { nom: "Eure-et-Loir", chef_lieu: "Chartres", anecdote: "Eure-et-Loir est le grenier à blé de la France — ses plaines de Beauce produisent 10% du blé français — et abrite un important cluster cosmétique et pharmaceutique autour de Chartres.", entreprises: "20 000", villes_top: ['chartres', 'dreux', 'chateaudun'] },
  'finistere': { nom: "Finistère", chef_lieu: "Quimper", anecdote: "Le Finistère est le premier département maritime de France — ses ports de Brest, Lorient et Concarneau génèrent une filière mer exceptionnelle entre pêche, naval et recherche océanographique.", entreprises: "28 000", villes_top: ['brest', 'quimper', 'morlaix'] },
  'gard': { nom: "Gard", chef_lieu: "Nîmes", anecdote: "Le Gard abrite le Pont du Gard, chef-d'oeuvre romain de l'ingénierie hydraulique classé UNESCO — symbole d'une région qui allie patrimoine antique et dynamisme économique contemporain.", entreprises: "32 000", villes_top: ['nimes', 'ales', 'bagnols-sur-ceze'] },
  'haute-garonne': { nom: "Haute-Garonne", chef_lieu: "Toulouse", anecdote: "La Haute-Garonne concentre 35% des emplois aéronautiques européens autour d'Airbus — c'est le Silicon Valley de l'aéronautique mondiale avec plus de 1 000 sous-traitants.", entreprises: "68 000", villes_top: ['toulouse', 'colomiers', 'blagnac'] },
  'gers': { nom: "Gers", chef_lieu: "Auch", anecdote: "Le Gers est le pays d'Artagnan et du foie gras AOP — un département gastronomique par excellence où l'Armagnac, la plus ancienne eau-de-vie de France, est produite depuis 1310.", entreprises: "9 000", villes_top: ['auch', 'auch', 'condom'] },
  'gironde': { nom: "Gironde", chef_lieu: "Bordeaux", anecdote: "La Gironde est le plus grand département viticole du monde avec 120 000 hectares de vignes — ses châteaux classés Médoc, Saint-Émilion et Pomerol s'arrachent à des prix records.", entreprises: "75 000", villes_top: ['bordeaux', 'merignac', 'pessac'] },
  'herault': { nom: "Hérault", chef_lieu: "Montpellier", anecdote: "L'Hérault est le département français qui croît le plus vite — sa métropole montpelliéraine attire chaque année 10 000 nouveaux habitants et de nombreuses startups numériques.", entreprises: "55 000", villes_top: ['montpellier', 'beziers', 'sete'] },
  'ille-et-vilaine': { nom: "Ille-et-Vilaine", chef_lieu: "Rennes", anecdote: "L'Ille-et-Vilaine abrite Rennes, capitale des télécommunications françaises, et produit le Gruyère et l'Emmental français dans une filière laitière d'excellence reconnue mondialement.", entreprises: "48 000", villes_top: ['rennes', 'saint-malo', 'fougeres'] },
  'indre': { nom: "Indre", chef_lieu: "Châteauroux", anecdote: "L'Indre est le pays de George Sand et de la Brenne — surnommée le 'pays aux mille étangs' — et développe une filière agroalimentaire et pharmaceutique solide.", entreprises: "10 000", villes_top: ['chateauroux', 'issoudun', 'la-chatre'] },
  'indre-et-loire': { nom: "Indre-et-Loire", chef_lieu: "Tours", anecdote: "L'Indre-et-Loire est le coeur du Val de Loire classé UNESCO — ses châteaux de la Renaissance et ses vignobles de Vouvray et Chinon en font une destination touristique et gastronomique d'exception.", entreprises: "32 000", villes_top: ['tours', 'joue-les-tours', 'saint-avertin'] },
  'isere': { nom: "Isère", chef_lieu: "Grenoble", anecdote: "L'Isère abrite Grenoble, surnommée la Silicon Valley française — premier pôle européen de semiconducteurs avec STMicroelectronics et le CEA-Leti qui génèrent 40 000 emplois high-tech.", entreprises: "52 000", villes_top: ['grenoble', 'vienne', 'bourgoin-jallieu'] },
  'jura': { nom: "Jura", chef_lieu: "Lons-le-Saunier", anecdote: "Le Jura est le berceau de la Comté AOP, le fromage français le plus exporté dans le monde — ses fruitières coopératives perpétuent un savoir-faire fromager unique depuis le Moyen Âge.", entreprises: "14 000", villes_top: ['lons-le-saunier', 'dole', 'saint-claude'] },
  'landes': { nom: "Landes", chef_lieu: "Mont-de-Marsan", anecdote: "Les Landes abritent la plus grande forêt d'Europe avec 1 million d'hectares de pins maritimes — une filière bois et papier d'excellence qui exporte dans toute l'Europe.", entreprises: "18 000", villes_top: ['mont-de-marsan', 'dax', 'saint-paul-les-dax'] },
  'loir-et-cher': { nom: "Loir-et-Cher", chef_lieu: "Blois", anecdote: "Le Loir-et-Cher est au coeur du Val de Loire et abrite les châteaux de Chambord et Blois — son tourisme patrimonial génère des millions de visiteurs et un tissu de services développé.", entreprises: "16 000", villes_top: ['blois', 'vendome', 'romorantin-lanthenay'] },
  'loire': { nom: "Loire", chef_lieu: "Saint-Étienne", anecdote: "La Loire est le berceau du design industriel français — Saint-Étienne a été désignée ville créative UNESCO du design et développe un tissu de PME créatives et numériques unique.", entreprises: "38 000", villes_top: ['saint-etienne', 'roanne', 'firminy'] },
  'haute-loire': { nom: "Haute-Loire", chef_lieu: "Le Puy-en-Velay", anecdote: "La Haute-Loire est le pays de la dentelle du Puy, classée patrimoine culturel immatériel, et produit les lentilles vertes du Puy AOP, première AOP alimentaire française créée en 1996.", entreprises: "11 000", villes_top: ['le-puy-en-velay', 'brioude', 'yssingeaux'] },
  'loire-atlantique': { nom: "Loire-Atlantique", chef_lieu: "Nantes", anecdote: "La Loire-Atlantique abrite le premier chantier naval mondial STX à Saint-Nazaire — et les vignobles du Muscadet, premier vin blanc sec français, exporté dans le monde entier.", entreprises: "65 000", villes_top: ['nantes', 'saint-nazaire', 'saint-herblain'] },
  'loiret': { nom: "Loiret", chef_lieu: "Orléans", anecdote: "Le Loiret est la capitale française du cosmétique et du parfum — le cluster Cosmetic Valley y génère 150 000 emplois et 30 milliards d'euros de chiffre d'affaires mondial.", entreprises: "38 000", villes_top: ['orleans', 'saint-jean-de-la-ruelle', 'fleury-les-aubrais'] },
  'lot': { nom: "Lot", chef_lieu: "Cahors", anecdote: "Le Lot est célèbre pour son vin noir de Cahors et la truffe du Périgord Noir — deux produits gastronomiques d'excellence qui font rayonner ce département dans le monde entier.", entreprises: "10 000", villes_top: ['cahors', 'figeac', 'gourdon'] },
  'lot-et-garonne': { nom: "Lot-et-Garonne", chef_lieu: "Agen", anecdote: "Le Lot-et-Garonne est le premier producteur de pruneaux d'Agen AOP et de fraises Gariguette — une filière fruitière d'excellence qui exporte dans plus de 50 pays.", entreprises: "16 000", villes_top: ['agen', 'villeneuve-sur-lot', 'marmande'] },
  'lozere': { nom: "Lozère", chef_lieu: "Mende", anecdote: "La Lozère est le département le moins peuplé de France métropolitaine et le plus préservé — ses paysages de Margeride et du Gévaudan attirent un tourisme vert en forte croissance.", entreprises: "5 000", villes_top: ['mende', 'florac', 'la-canourgue'] },
  'maine-et-loire': { nom: "Maine-et-Loire", chef_lieu: "Angers", anecdote: "Le Maine-et-Loire est le premier département horticole de France — ses pépinières et cultures florales représentent 30% de la production nationale de végétaux d'ornement.", entreprises: "32 000", villes_top: ['angers', 'cholet', 'saumur'] },
  'manche': { nom: "Manche", chef_lieu: "Saint-Lô", anecdote: "La Manche abrite le Mont-Saint-Michel, première destination touristique française avec 3 millions de visiteurs — et la centrale nucléaire de Flamanville, symbole de la filière nucléaire française.", entreprises: "22 000", villes_top: ['cherbourg', 'saint-lo', 'avranches'] },
  'marne': { nom: "Marne", chef_lieu: "Châlons-en-Champagne", anecdote: "La Marne est le coeur du Champagne mondial — ses 34 000 hectares de vignes produisent 300 millions de bouteilles par an pour les maisons les plus prestigieuses comme Moët & Chandon.", entreprises: "28 000", villes_top: ['reims', 'chalons-en-champagne', 'epernay'] },
  'haute-marne': { nom: "Haute-Marne", chef_lieu: "Chaumont", anecdote: "La Haute-Marne est le pays du couteau de Nogent — ses couteliers perpétuent depuis le XVIIe siècle un savoir-faire artisanal reconnu dans le monde entier.", entreprises: "9 000", villes_top: ['chaumont', 'saint-dizier', 'langres'] },
  'mayenne': { nom: "Mayenne", chef_lieu: "Laval", anecdote: "La Mayenne a inventé la réalité virtuelle — Laval Virtual est le plus grand salon mondial de la VR et de la RA, faisant de ce département rural un leader mondial de l'innovation immersive.", entreprises: "14 000", villes_top: ['laval', 'mayenne', 'chateau-gontier'] },
  'meurthe-et-moselle': { nom: "Meurthe-et-Moselle", chef_lieu: "Nancy", anecdote: "Meurthe-et-Moselle abrite Nancy, ville Art Nouveau et Place Stanislas classée UNESCO — et développe un pôle de compétitivité en matériaux innovants et en numérique.", entreprises: "32 000", villes_top: ['nancy', 'vandoeuvre-les-nancy', 'saint-max'] },
  'meuse': { nom: "Meuse", chef_lieu: "Bar-le-Duc", anecdote: "La Meuse abrite Verdun, haut lieu de mémoire de la Première Guerre mondiale — et développe un pôle industriel autour de la métallurgie et de la plasturgie.", entreprises: "10 000", villes_top: ['bar-le-duc', 'verdun', 'commercy'] },
  'morbihan': { nom: "Morbihan", chef_lieu: "Vannes", anecdote: "Le Morbihan abrite le plus grand site mégalithique du monde à Carnac avec 3 000 menhirs — et développe une économie maritime et numérique dynamique autour du golfe du Morbihan.", entreprises: "26 000", villes_top: ['vannes', 'lorient', 'pontivy'] },
  'moselle': { nom: "Moselle", chef_lieu: "Metz", anecdote: "La Moselle est au coeur du triangle France-Luxembourg-Allemagne — ses milliers de travailleurs frontaliers génèrent une économie transfrontalière unique et une richesse exceptionnelle.", entreprises: "38 000", villes_top: ['metz', 'thionville', 'forbach'] },
  'nievre': { nom: "Nièvre", chef_lieu: "Nevers", anecdote: "La Nièvre est connue pour sa faïencerie de Nevers et le circuit de Nevers Magny-Cours, qui accueille le Grand Prix de France de Formule 1 — générant un tourisme sportif important.", entreprises: "10 000", villes_top: ['nevers', 'cosne-cours-sur-loire', 'decize'] },
  'nord': { nom: "Nord", chef_lieu: "Lille", anecdote: "Le Nord est le premier département industriel de France — sa métropole lilloise est le troisième pôle économique français et le carrefour logistique entre Paris, Londres et Bruxelles.", entreprises: "120 000", villes_top: ['lille', 'roubaix', 'tourcoing'] },
  'oise': { nom: "Oise", chef_lieu: "Beauvais", anecdote: "L'Oise abrite Chantilly, capitale mondiale de la crème et des dentelles — et développe un important tissu logistique et industriel aux portes de Paris.", entreprises: "35 000", villes_top: ['beauvais', 'creil', 'compiegne'] },
  'orne': { nom: "Orne", chef_lieu: "Alençon", anecdote: "L'Orne est le pays du cheval normand — le haras du Pin, surnommé le Versailles du cheval, perpétue depuis 1715 un élevage équin d'exception reconnu dans le monde entier.", entreprises: "14 000", villes_top: ['alencon', 'flers', 'argentan'] },
  'pas-de-calais': { nom: "Pas-de-Calais", chef_lieu: "Arras", anecdote: "Le Pas-de-Calais est traversé par l'Eurotunnel qui relie la France au Royaume-Uni — et abrite Calais, premier port de voyageurs de France avec 10 millions de passagers par an.", entreprises: "55 000", villes_top: ['calais', 'boulogne-sur-mer', 'arras'] },
  'puy-de-dome': { nom: "Puy-de-Dôme", chef_lieu: "Clermont-Ferrand", anecdote: "Le Puy-de-Dôme est le siège mondial de Michelin — le premier fabricant de pneumatiques du monde qui y emploie 15 000 personnes et génère tout un écosystème industriel.", entreprises: "38 000", villes_top: ['clermont-ferrand', 'riom', 'issoire'] },
  'pyrenees-atlantiques': { nom: "Pyrénées-Atlantiques", chef_lieu: "Pau", anecdote: "Les Pyrénées-Atlantiques sont le berceau du béret basque et du piment d'Espelette AOP — et développent une filière aéronautique et spatiale importante autour de Pau et Bordes.", entreprises: "35 000", villes_top: ['pau', 'bayonne', 'biarritz'] },
  'hautes-pyrenees': { nom: "Hautes-Pyrénées", chef_lieu: "Tarbes", anecdote: "Les Hautes-Pyrénées accueillent Lourdes, deuxième ville hôtelière de France après Paris avec 5 millions de pèlerins par an — générant une économie touristique et religieuse unique.", entreprises: "14 000", villes_top: ['tarbes', 'lourdes', 'argeles-gazost'] },
  'pyrenees-orientales': { nom: "Pyrénées-Orientales", chef_lieu: "Perpignan", anecdote: "Les Pyrénées-Orientales produisent 70% des fruits et légumes précoces français grâce à leur climat méditerranéen — leur marché de Perpignan est le premier d'Europe en volume.", entreprises: "22 000", villes_top: ['perpignan', 'canet-en-roussillon', 'saint-esteve'] },
  'bas-rhin': { nom: "Bas-Rhin", chef_lieu: "Strasbourg", anecdote: "Le Bas-Rhin abrite Strasbourg, capitale européenne par excellence avec le Parlement européen — et développe une industrie chimique et pharmaceutique de rang mondial.", entreprises: "65 000", villes_top: ['strasbourg', 'haguenau', 'schiltigheim'] },
  'haut-rhin': { nom: "Haut-Rhin", chef_lieu: "Colmar", anecdote: "Le Haut-Rhin est le pays des vins d'Alsace — Riesling, Gewurztraminer, Pinot Gris — et abrite Mulhouse avec son industrie textile et automobile héritée de deux siècles d'innovation.", entreprises: "45 000", villes_top: ['mulhouse', 'colmar', 'saint-louis'] },
  'rhone': { nom: "Rhône", chef_lieu: "Lyon", anecdote: "Le Rhône est le deuxième département économique de France — Lyon concentre le premier pôle de biotechnologies de France et le premier pôle numérique après Paris.", entreprises: "130 000", villes_top: ['lyon', 'villeurbanne', 'saint-priest'] },
  'haute-saone': { nom: "Haute-Saône", chef_lieu: "Vesoul", anecdote: "La Haute-Saône est le pays du comté et du gruyère — et abrite PSA Peugeot à Héricourt, l'un des sites industriels automobiles les plus importants de l'Est de la France.", entreprises: "12 000", villes_top: ['vesoul', 'gray', 'hericourt'] },
  'saone-et-loire': { nom: "Saône-et-Loire", chef_lieu: "Mâcon", anecdote: "La Saône-et-Loire est le berceau du vin de Bourgogne avec les appellations Mâcon, Pouilly-Fuissé et les Beaujolais — et abrite Chalon-sur-Saône, centre industriel de Bourgogne.", entreprises: "28 000", villes_top: ['chalon-sur-saone', 'macon', 'montceau-les-mines'] },
  'sarthe': { nom: "Sarthe", chef_lieu: "Le Mans", anecdote: "La Sarthe est mondialement connue pour les 24 Heures du Mans, la course automobile la plus célèbre au monde — et abrite un important tissu de sous-traitants automobiles.", entreprises: "22 000", villes_top: ['le-mans', 'la-fleche', 'sable-sur-sarthe'] },
  'savoie': { nom: "Savoie", chef_lieu: "Chambéry", anecdote: "La Savoie est le premier département alpin de France avec ses stations de ski de renommée mondiale — et développe une filière montagne high-tech unique en Europe.", entreprises: "28 000", villes_top: ['chambery', 'albertville', 'aix-les-bains'] },
  'haute-savoie': { nom: "Haute-Savoie", chef_lieu: "Annecy", anecdote: "La Haute-Savoie abrite Annecy et son lac, Chamonix et le Mont-Blanc — et concentre la filière mécatronique et décolletage la plus dense d'Europe dans la vallée de l'Arve.", entreprises: "45 000", villes_top: ['annecy', 'thonon-les-bains', 'annemasse'] },
  'paris': { nom: "Paris", chef_lieu: "Paris", anecdote: "Paris est la ville la plus visitée du monde avec 45 millions de touristes par an — et abrite la plus grande concentration de sièges sociaux de multinationales en Europe.", entreprises: "500 000", villes_top: ['paris', 'boulogne-billancourt', 'neuilly-sur-seine'] },
  'seine-maritime': { nom: "Seine-Maritime", chef_lieu: "Rouen", anecdote: "La Seine-Maritime abrite la vallée de la Seine industrielle avec la pétrochimie de Port-Jérôme-Gravenchon et le premier port de France pour les exportations d'automobiles.", entreprises: "52 000", villes_top: ['le-havre', 'rouen', 'dieppe'] },
  'seine-et-marne': { nom: "Seine-et-Marne", chef_lieu: "Melun", anecdote: "La Seine-et-Marne abrite Disneyland Paris, le premier parc d'attractions d'Europe avec 15 millions de visiteurs — et un tissu logistique exceptionnellement dense aux portes de Paris.", entreprises: "55 000", villes_top: ['meaux', 'chelles', 'melun'] },
  'yvelines': { nom: "Yvelines", chef_lieu: "Versailles", anecdote: "Les Yvelines abritent le Château de Versailles et un tissu industriel de premier plan avec Renault à Guyancourt et PSA à Poissy — générant 350 000 emplois industriels.", entreprises: "65 000", villes_top: ['versailles', 'poissy', 'sartrouville'] },
  'deux-sevres': { nom: "Deux-Sèvres", chef_lieu: "Niort", anecdote: "Les Deux-Sèvres sont la capitale française de la mutuelle avec Maif, Macif et SMACL — et développent une filière numérique autour de l'assurance et de la fintech.", entreprises: "18 000", villes_top: ['niort', 'bressuire', 'parthenay'] },
  'somme': { nom: "Somme", chef_lieu: "Amiens", anecdote: "La Somme est le pays de Jules Verne natif d'Amiens — et abrite une industrie textile technique et agroalimentaire dynamique avec des entreprises comme Saint-Frères.", entreprises: "22 000", villes_top: ['amiens', 'abbeville', 'albert'] },
  'tarn': { nom: "Tarn", chef_lieu: "Albi", anecdote: "Le Tarn est le pays de Toulouse-Lautrec natif d'Albi — sa cité épiscopale classée UNESCO attire des centaines de milliers de visiteurs et génère une économie touristique florissante.", entreprises: "18 000", villes_top: ['albi', 'castres', 'gaillac'] },
  'tarn-et-garonne': { nom: "Tarn-et-Garonne", chef_lieu: "Montauban", anecdote: "Le Tarn-et-Garonne est le premier producteur de fruits à noyau de France — pêches, prunes, cerises — et développe une filière agroalimentaire et logistique dynamique.", entreprises: "13 000", villes_top: ['montauban', 'castelsarrasin', 'moissac'] },
  'var': { nom: "Var", chef_lieu: "Toulon", anecdote: "Le Var abrite la plus grande base navale française à Toulon — et développe un tissu de PME de défense, de nautisme et de tourisme sur l'une des côtes les plus prisées d'Europe.", entreprises: "55 000", villes_top: ['toulon', 'frejus', 'hyeres'] },
  'vaucluse': { nom: "Vaucluse", chef_lieu: "Avignon", anecdote: "Le Vaucluse est le grenier à fruits et légumes de la France — ses plaines du Comtat Venaissin et ses vignobles des Côtes du Rhône (Châteauneuf-du-Pape) sont connus dans le monde entier.", entreprises: "28 000", villes_top: ['avignon', 'carpentras', 'apt'] },
  'vendee': { nom: "Vendée", chef_lieu: "La Roche-sur-Yon", anecdote: "La Vendée est le champion français des PME industrielles — avec le taux d'emploi industriel le plus élevé de France, portée par des groupes comme Fleury Michon et Bénéteau.", entreprises: "28 000", villes_top: ['la-roche-sur-yon', 'les-sables-d-olonne', 'challans'] },
  'vienne': { nom: "Vienne", chef_lieu: "Poitiers", anecdote: "La Vienne abrite Poitiers et son Futuroscope — parc technologique et d'attractions qui a généré un écosystème numérique unique en France et formé des générations d'entrepreneurs tech.", entreprises: "22 000", villes_top: ['poitiers', 'chatellerault', 'loudun'] },
  'haute-vienne': { nom: "Haute-Vienne", chef_lieu: "Limoges", anecdote: "La Haute-Vienne est la capitale mondiale de la porcelaine — Limoges exporte ses créations dans 150 pays et représente un savoir-faire artisanal unique classé patrimoine immatériel.", entreprises: "18 000", villes_top: ['limoges', 'saint-junien', 'aixe-sur-vienne'] },
  'vosges': { nom: "Vosges", chef_lieu: "Épinal", anecdote: "Les Vosges sont le pays du tissu vosgien et du cristal de Baccarat — une filière textile et verrière d'excellence qui coexiste avec une industrie du bois et du papier dynamique.", entreprises: "16 000", villes_top: ['epinal', 'saint-die-des-vosges', 'remiremont'] },
  'yonne': { nom: "Yonne", chef_lieu: "Auxerre", anecdote: "L'Yonne est le pays de Chablis et du Chablis Premier Cru — ses vignobles produisent les vins blancs secs les plus minéraux de Bourgogne, exportés dans plus de 80 pays.", entreprises: "16 000", villes_top: ['auxerre', 'sens', 'joigny'] },
  'territoire-de-belfort': { nom: "Territoire de Belfort", chef_lieu: "Belfort", anecdote: "Le Territoire de Belfort est le plus petit département continental de France — mais abrite Alstom qui y produit des TGV depuis 1974 et General Electric dans l'énergie.", entreprises: "9 000", villes_top: ['belfort', 'delle', 'giromagny'] },
  'essonne': { nom: "Essonne", chef_lieu: "Évry-Courcouronnes", anecdote: "L'Essonne est le premier département de recherche et développement de France — avec le plateau de Saclay qui concentre 15% de la recherche française et des universités d'excellence mondiales.", entreprises: "55 000", villes_top: ['evry', 'massy', 'corbeil-essonnes'] },
  'hauts-de-seine': { nom: "Hauts-de-Seine", chef_lieu: "Nanterre", anecdote: "Les Hauts-de-Seine abritent La Défense, premier quartier d'affaires européen — et concentrent 30% des emplois du CAC 40 dans un territoire qui génère 100 milliards d'euros de PIB.", entreprises: "130 000", villes_top: ['nanterre', 'boulogne-billancourt', 'levallois-perret'] },
  'seine-saint-denis': { nom: "Seine-Saint-Denis", chef_lieu: "Bobigny", anecdote: "La Seine-Saint-Denis a accueilli les Jeux Olympiques 2024 — un investissement majeur qui transforme ce département en hub économique et culturel de premier plan en Île-de-France.", entreprises: "65 000", villes_top: ['saint-denis', 'montreuil', 'aubervilliers'] },
  'val-de-marne': { nom: "Val-de-Marne", chef_lieu: "Créteil", anecdote: "Le Val-de-Marne abrite l'Institut Gustave Roussy, premier centre de lutte contre le cancer en Europe — et Orly, deuxième aéroport français avec 35 millions de passagers.", entreprises: "55 000", villes_top: ['creteil', 'ivry-sur-seine', 'alfortville'] },
  'val-d-oise': { nom: "Val-d'Oise", chef_lieu: "Cergy-Pontoise", anecdote: "Le Val-d'Oise abrite Roissy-CDG, premier aéroport de France avec 65 millions de passagers — et le campus d'ESSEC Business School, l'une des meilleures business schools mondiales.", entreprises: "55 000", villes_top: ['cergy', 'argenteuil', 'sarcelles'] },
};

// ============================================================
// FAQ — 20 questions mixées par page
// ============================================================
const faqPool = [
  { id: 1, cat: 'telephonie', q: "Qu'est-ce qu'un Centrex ?", a: "Un Centrex est un standard téléphonique hébergé dans le cloud. Contrairement à un PABX physique installé dans vos locaux, le Centrex ne nécessite aucun équipement on-premise — votre standard est géré par 1fonie sur nos serveurs. Vous bénéficiez de toutes les fonctionnalités d'un standard professionnel (SVI, files d'attente, renvois d'appels, musique d'attente) sans investissement matériel ni maintenance." },
  { id: 2, cat: 'telephonie', q: "Quelle différence entre messagerie vocale et répondeur ?", a: "Le répondeur enregistre les messages localement sur le téléphone. La messagerie vocale est hébergée sur notre serveur cloud — vous consultez vos messages depuis n'importe quel appareil, recevez une notification par email avec le message en pièce jointe audio, et accédez à vos messages depuis votre mobile même si votre téléphone de bureau est éteint." },
  { id: 3, cat: 'telephonie', q: "Peut-on bloquer les appels internationaux sur certains postes ?", a: "Oui, totalement. Nous configurons des restrictions par poste ou par groupe de postes. Vous autorisez l'international uniquement sur les postes direction ou commerce export, et bloquez sur les autres. Modification à tout moment sans intervention sur site." },
  { id: 4, cat: 'telephonie', q: "Peut-on avoir un numéro géographique dans une autre ville ?", a: "Oui. Avec le Centrex VoIP, vous pouvez avoir un 01 Paris, un 04 Lyon ou tout autre indicatif géographique, peu importe l'emplacement physique de votre entreprise. Idéal pour les entreprises multi-sites ou souhaitant une présence locale nationale." },
  { id: 5, cat: 'telephonie', q: "Combien de lignes simultanées puis-je avoir ?", a: "Autant que nécessaire. Contrairement à une ligne RNIS limitée, le VoIP est illimité en appels simultanés — vous payez uniquement le nombre de lignes actives dont vous avez besoin." },
  { id: 6, cat: 'telephonie', q: "Que se passe-t-il si ma connexion internet tombe ?", a: "Notre offre FTTH Pro inclut un backup 4G automatique (50Go/mois). En cas de coupure fibre, votre connexion bascule automatiquement en moins de 60 secondes. Vos appels téléphoniques continuent sans interruption." },
  { id: 7, cat: 'cybersecurite', q: "À quelle fréquence mes données sont-elles sauvegardées ?", a: "Toutes les 2 heures en continu. En cas de ransomware ou de panne matérielle, vous pouvez restaurer votre système à l'état d'il y a 2 heures maximum. Les sauvegardes sont chiffrées et stockées sur des serveurs en Allemagne, conformes au RGPD européen." },
  { id: 8, cat: 'cybersecurite', q: "Où sont hébergées mes données ?", a: "Sur des serveurs situés en Allemagne, soumis au droit européen et conformes au RGPD. Vos données ne quittent jamais le territoire de l'Union Européenne." },
  { id: 9, cat: 'cybersecurite', q: "Quels sont vos horaires de support ?", a: "Notre équipe répond aux tickets du lundi au vendredi de 9h à 17h. En dehors de ces horaires, notre supervision continue via Datto RMM surveille automatiquement votre infrastructure et génère des alertes immédiates en cas d'incident critique. Des astreintes sur mesure sont disponibles selon vos besoins." },
  { id: 10, cat: 'cybersecurite', q: "Quelle différence entre un EDR et un antivirus classique ?", a: "Un antivirus classique détecte les virus connus via une base de signatures. Un EDR (Endpoint Detection & Response) analyse le comportement des programmes en temps réel — il détecte les menaces inconnues, les ransomwares zero-day, et peut isoler automatiquement un poste compromis avant que la menace se propage." },
  { id: 11, cat: 'cybersecurite', q: "Qu'est-ce que UseSecure ?", a: "UseSecure est une plateforme de sensibilisation à la cybersécurité pour vos collaborateurs. Ils reçoivent régulièrement des quizz, des simulations de phishing et des micro-formations. L'erreur humaine étant la première cause de cyberincident en France, cette formation continue est incluse dans nos deux packs." },
  { id: 12, cat: 'cybersecurite', q: "Qu'est-ce que le DMARC et pourquoi est-ce important ?", a: "DMARC est un protocole qui empêche quiconque d'envoyer des emails en usurpant votre nom de domaine. Sans DMARC, n'importe qui peut envoyer un email depuis votre-entreprise.fr en se faisant passer pour vous. Inclus dans le Pack Business à 87€/poste/mois." },
  { id: 13, cat: 'cybersecurite', q: "Qu'est-ce qu'un SOC 24/7/365 ?", a: "Un SOC (Security Operations Center) est un centre de surveillance cybersécurité opérationnel 24h/24, 7j/7, 365 jours par an. Nous utilisons le SOC de Kaseya — des analystes et des outils automatisés surveillent en permanence votre système d'information. En cas de menace détectée, le SOC intervient immédiatement pour isoler la menace. Inclus dans le Pack Business à 87€/poste/mois." },
  { id: 14, cat: 'reseau', q: "Quelle différence entre câble Cat5, Cat6 et Cat6A ?", a: "Le Cat5e supporte jusqu'à 1 Gbit/s sur 100m — suffisant pour un usage bureautique basique. Le Cat6 monte à 10 Gbit/s sur 55m avec une meilleure immunité aux interférences. Le Cat6A atteint 10 Gbit/s sur 100m complets — c'est le standard que nous installons dans toutes nos baies de brassage. Pour une infrastructure professionnelle durable à 10 ans, le Cat6A est incontournable." },
  { id: 15, cat: 'reseau', q: "Quel est le rôle d'un firewall ?", a: "Le firewall est le gardien de votre réseau. Il analyse chaque paquet de données entrant et sortant, bloque les connexions non autorisées, isole vos réseaux internes (VLAN salariés / invités / téléphonie / caméras), gère votre VPN et applique des règles de qualité de service (QoS) pour prioriser vos appels téléphoniques. Sans firewall géré, votre réseau est exposé à Internet sans aucune protection périmétrique." },
  { id: 16, cat: 'reseau', q: "Comment fonctionne votre supervision réseau ?", a: "Nous supervisons en temps réel l'ensemble de votre infrastructure via Datto RMM : postes de travail, bornes WiFi, switches, routeurs et firewall. En cas de coupure, dysfonctionnement ou seuil d'alerte dépassé, notre équipe est notifiée immédiatement. Les mises à jour de firmware et corrections de sécurité sont appliquées à distance, sans intervention sur site." },
  { id: 17, cat: 'leasing', q: "Qu'est-ce que le leasing informatique ?", a: "Le leasing ou location financière vous permet d'utiliser du matériel IT professionnel sans l'acheter. Vous payez un loyer mensuel fixe sur 36 mois. À la fin du contrat, vous renouvelez votre parc avec du matériel récent. Les loyers sont des charges d'exploitation 100% déductibles fiscalement — contrairement à un achat qui s'amortit sur 3 à 5 ans." },
  { id: 18, cat: 'leasing', q: "Qui sont vos partenaires leasing ?", a: "Grenke et Investitel, deux organismes spécialisés en financement IT et télécom reconnus en France. La vérification de finançabilité est gratuite et sans engagement — réponse sous 24 à 48h." },
  { id: 19, cat: 'leasing', q: "Faut-il un apport initial pour le leasing ?", a: "Non. Le leasing ne nécessite aucun apport. Vous payez uniquement le loyer mensuel dès la livraison et mise en service du matériel. Votre trésorerie reste disponible pour votre activité." },
  { id: 20, cat: 'leasing', q: "Le leasing est-il accessible aux jeunes entreprises ?", a: "Oui, sous conditions d'acceptation par nos partenaires financiers Grenke ou Investitel. Nous constituons et soumettons votre dossier gratuitement et vous informons de la décision sous 24 à 48h." },
];

// ============================================================
// VARIANTES D'INTRO — 4 versions pour varier le contenu
// ============================================================
const intros = [
  (service: string, nom: string) => `1fonie accompagne depuis 15 ans les TPE et PME de ${nom} dans leur transformation numérique. Notre expertise en ${service} nous permet de proposer des solutions adaptées à chaque structure, de l'artisan à la PME de 50 salariés.`,
  (service: string, nom: string) => `Vous cherchez un expert en ${service} à ${nom} ? 1fonie intervient sur site et à distance pour équiper, sécuriser et maintenir votre système d'information. Devis gratuit sous 24h.`,
  (service: string, nom: string) => `Les entreprises de ${nom} font confiance à 1fonie pour leur ${service}. Certifié Yealink, partenaire Kaseya et spécialiste MSP, nous gérons l'ensemble de votre IT pour que vous vous concentriez sur votre cœur de métier.`,
  (service: string, nom: string) => `1fonie propose aux entreprises de ${nom} une offre complète en ${service} : matériel, logiciels, maintenance et support. Tout en leasing possible avec nos partenaires Grenke et Investitel — zéro apport, charges 100% déductibles.`,
];

// ============================================================
// SERVICES
// ============================================================
const services = ['telephonie-entreprise', 'cybersecurite', 'maintenance-informatique', 'prestataire-informatique'];
const deptServices = ['telephonie-entreprise', 'cybersecurite', 'maintenance-informatique', 'prestataire-informatique'];

const serviceConfig: Record<string, { label: string; icon: string; desc: string; faqCats: string[] }> = {
  'telephonie-entreprise': { label: "Téléphonie d'entreprise", icon: '📞', desc: 'Standards Yealink, Centrex cloud, SVI. Installation et formation sur site.', faqCats: ['telephonie', 'reseau', 'leasing'] },
  'cybersecurite': { label: 'Cybersécurité', icon: '🛡️', desc: 'EDR, SOC 24/7, supervision, UseSecure. Protection complète de votre SI.', faqCats: ['cybersecurite', 'reseau', 'leasing'] },
  'maintenance-informatique': { label: 'Maintenance informatique', icon: '🔧', desc: 'Télémaintenance, ticketing, mises à jour. Votre parc géré en continu.', faqCats: ['cybersecurite', 'reseau', 'leasing'] },
  'prestataire-informatique': { label: 'Prestataire informatique', icon: '💻', desc: 'Téléphonie, cybersécurité, réseau, maintenance. Un seul expert pour tout.', faqCats: ['telephonie', 'cybersecurite', 'reseau', 'leasing'] },
};

// ============================================================
// SÉLECTION FAQ — déterministe basée sur le nom de la ville
// ============================================================
function selectFaq(slugFull: string, cats: string[]): typeof faqPool {
  const hash = slugFull.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0);
  const available = faqPool.filter(f => cats.includes(f.cat));
  const selected: typeof faqPool = [];
  const indices = new Set<number>();
  let i = 0;
  while (selected.length < 4 && i < 20) {
    const idx = (hash + i * 7) % available.length;
    if (!indices.has(idx)) {
      indices.add(idx);
      selected.push(available[idx]);
    }
    i++;
  }
  return selected;
}

// ============================================================
// PROPS
// ============================================================
interface Props {
  type: 'ville' | 'dept';
  service: string;
  slug: string;
  nom: string;
  anecdote: string;
  intro: string;
  faq: { q: string; a: string }[];
  voisins: { slug: string; nom: string }[];
  entreprises?: string;
}

// ============================================================
// COMPOSANT
// ============================================================
export default function CityPage({ type, service, slug, nom, anecdote, intro, faq, voisins, entreprises }: Props) {
  const config = serviceConfig[service];
  if (!config) return <div>Page non trouvée</div>;

  const typeLabel = type === 'dept' ? 'département' : 'ville';
  const prefix = type === 'dept' ? 'dans le département' : 'à';

  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }}>
      <Head>
        <title>{config.label} {prefix} {nom} — TPE/PME | 1fonie</title>
        <meta name="description" content={`Expert ${config.label.toLowerCase()} ${prefix} ${nom} pour TPE/PME. ${config.desc} Devis gratuit — 03 20 49 29 00`} />
        <meta name="robots" content="index, follow" />
      </Head>

      {/* HERO */}
      <section style={{ background: 'linear-gradient(160deg, #1e0b3e 0%, #2d1458 100%)', padding: '80px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(124,58,237,0.2)', border: '1px solid rgba(124,58,237,0.4)', borderRadius: '50px', padding: '6px 16px', marginBottom: '24px' }}>
            <span style={{ color: '#c084fc', fontSize: '13px', fontWeight: '600' }}>📍 {nom} — {config.label}</span>
          </div>
          <h1 style={{ fontSize: 'clamp(28px, 4vw, 52px)', fontWeight: '800', color: '#fff', lineHeight: '1.15', marginBottom: '20px' }}>
            {config.icon} {config.label}<br />
            <span style={{ background: 'linear-gradient(135deg, #a855f7, #7c3aed)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{prefix} {nom}</span>
          </h1>
          <p style={{ color: '#c084fc', fontSize: '17px', lineHeight: '1.7', marginBottom: '32px' }}>{intro}</p>
          {entreprises && (
            <p style={{ color: '#a855f7', fontSize: '14px', marginBottom: '24px' }}>
              📊 <strong>{entreprises} entreprises</strong> dans {type === 'dept' ? 'ce département' : 'cette zone'} — source INSEE
            </p>
          )}
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/#contact" style={{ background: 'linear-gradient(135deg, #7c3aed, #a855f7)', color: '#fff', padding: '14px 28px', borderRadius: '10px', textDecoration: 'none', fontSize: '15px', fontWeight: '700', boxShadow: '0 8px 30px rgba(124,58,237,0.5)' }}>
              🚀 Devis gratuit {prefix} {nom}
            </a>
            <a href="tel:0320492900" style={{ background: 'transparent', color: '#c084fc', padding: '14px 28px', borderRadius: '10px', textDecoration: 'none', fontSize: '15px', fontWeight: '600', border: '2px solid rgba(124,58,237,0.5)' }}>
              📞 03 20 49 29 00
            </a>
          </div>
        </div>
      </section>

      {/* ANECDOTE */}
      <section style={{ padding: '48px 24px', background: '#fff', borderBottom: '1px solid rgba(124,58,237,0.1)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ background: 'linear-gradient(135deg, rgba(124,58,237,0.08), rgba(168,85,247,0.05))', borderRadius: '16px', padding: '32px', border: '1px solid rgba(124,58,237,0.15)' }}>
            <div style={{ fontSize: '28px', marginBottom: '12px' }}>💡</div>
            <p style={{ color: '#374151', fontSize: '16px', lineHeight: '1.7', fontStyle: 'italic' }}><strong>{nom} :</strong> {anecdote}</p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ padding: '80px 24px', background: '#faf5ff' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(24px, 3vw, 38px)', fontWeight: '800', color: '#1e0b3e', marginBottom: '12px', textAlign: 'center' }}>
            Nos services {prefix} {nom}
          </h2>
          <p style={{ color: '#6b21a8', fontSize: '16px', textAlign: 'center', marginBottom: '40px' }}>Intervention sur site ou à distance — réponse sous 24h</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
            {[
              { icon: '📞', title: `Téléphonie IP ${prefix} ${nom}`, desc: 'Standards Yealink, Centrex cloud, SVI. Installation et formation sur site.', href: `/telephonie-entreprise-${slug}` },
              { icon: '🛡️', title: `Cybersécurité ${prefix} ${nom}`, desc: 'EDR, SOC 24/7, supervision, UseSecure. Protection complète de votre SI.', href: `/cybersecurite-${slug}` },
              { icon: '🔧', title: `Maintenance IT ${prefix} ${nom}`, desc: 'Télémaintenance, ticketing, mises à jour. Votre parc géré en continu.', href: `/maintenance-informatique-${slug}` },
              { icon: '🌐', title: `Réseau & Fibre ${prefix} ${nom}`, desc: 'FTTH Pro 65€/mois, WiFi 6/7, firewall géré, VPN multi-sites.', href: '/reseau-wifi-professionnel' },
            ].map((s, i) => (
              <a key={i} href={s.href} style={{ textDecoration: 'none' }}>
                <div style={{ background: '#fff', borderRadius: '16px', padding: '28px', border: '1px solid rgba(124,58,237,0.12)', boxShadow: '0 4px 15px rgba(124,58,237,0.06)', height: '100%' }}>
                  <div style={{ fontSize: '28px', marginBottom: '12px' }}>{s.icon}</div>
                  <h3 style={{ fontSize: '15px', fontWeight: '700', color: '#1e0b3e', marginBottom: '8px' }}>{s.title}</h3>
                  <p style={{ color: '#6b7280', fontSize: '13px', lineHeight: '1.6', marginBottom: '12px' }}>{s.desc}</p>
                  <span style={{ color: '#7c3aed', fontWeight: '600', fontSize: '13px' }}>En savoir plus →</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '80px 24px', background: '#fff' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(22px, 3vw, 36px)', fontWeight: '800', color: '#1e0b3e', marginBottom: '40px', textAlign: 'center' }}>
            Questions fréquentes
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {faq.map((f, i) => (
              <div key={i} style={{ background: '#faf5ff', borderRadius: '12px', padding: '24px', border: '1px solid rgba(124,58,237,0.12)' }}>
                <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#1e0b3e', marginBottom: '12px' }}>❓ {f.q}</h3>
                <p style={{ color: '#374151', fontSize: '14px', lineHeight: '1.7' }}>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section style={{ padding: '60px 24px', background: '#faf5ff' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(20px, 2.5vw, 32px)', fontWeight: '800', color: '#1e0b3e', marginBottom: '32px' }}>
            Pourquoi choisir 1fonie {prefix} {nom} ?
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '16px' }}>
            {[
              { icon: '🏆', val: '200+', label: 'entreprises accompagnées' },
              { icon: '⏱️', val: '15 ans', label: "d'expérience" },
              { icon: '📡', val: '24/7', label: 'supervision réseau' },
              { icon: '⚡', val: '< 24h', label: 'délai de réponse' },
            ].map((s, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: '12px', padding: '20px', border: '1px solid rgba(124,58,237,0.12)' }}>
                <div style={{ fontSize: '22px', marginBottom: '6px' }}>{s.icon}</div>
                <div style={{ fontSize: '22px', fontWeight: '800', color: '#7c3aed', marginBottom: '4px' }}>{s.val}</div>
                <div style={{ color: '#6b7280', fontSize: '12px' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAILLAGE */}
      <section style={{ padding: '60px 24px', background: '#fff' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#1e0b3e', marginBottom: '20px' }}>
            1fonie intervient aussi dans ces {type === 'dept' ? 'départements' : 'villes'}
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center' }}>
            {voisins.map(v => (
              <a key={v.slug} href={`/${service}-${v.slug}`} style={{ background: '#faf5ff', border: '1px solid rgba(124,58,237,0.2)', borderRadius: '50px', padding: '7px 14px', fontSize: '13px', color: '#7c3aed', textDecoration: 'none', fontWeight: '500' }}>
                {v.nom}
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// ============================================================
// STATIC PATHS — villes + départements
// ============================================================
export const getStaticPaths: GetStaticPaths = async () => {
  const paths: { params: { slug: string[] } }[] = [];

  // Pages villes
  services.forEach(service => {
    Object.keys(villes).forEach(ville => {
      paths.push({ params: { slug: [`${service}-${ville}`] } });
    });
  });

  // Pages départements
  deptServices.forEach(service => {
    Object.keys(departements).forEach(dept => {
      paths.push({ params: { slug: [`${service}-departement-${dept}`] } });
    });
  });

  return { paths, fallback: false };
};

// ============================================================
// STATIC PROPS
// ============================================================
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slugFull = (params?.slug as string[])?.[0] || '';

  // Détection département
  const isDept = slugFull.includes('-departement-');
  if (isDept) {
    const parts = slugFull.split('-departement-');
    const service = parts[0];
    const deptSlug = parts[1];
    const dept = departements[deptSlug];
    if (!dept || !serviceConfig[service]) return { notFound: true };

    const config = serviceConfig[service];
    const introFn = intros[slugFull.split('').reduce((a, c) => a + c.charCodeAt(0), 0) % intros.length];
    const faqItems = selectFaq(slugFull, config.faqCats);

    const voisins = Object.entries(departements)
      .filter(([s]) => s !== deptSlug)
      .slice(0, 12)
      .map(([s, d]) => ({ slug: `departement-${s}`, nom: d.nom }));

    return {
      props: {
        type: 'dept',
        service,
        slug: `departement-${deptSlug}`,
        nom: dept.nom,
        anecdote: dept.anecdote,
        intro: introFn(config.label.toLowerCase(), dept.nom),
        faq: faqItems.map(f => ({ q: f.q, a: f.a })),
        voisins,
        entreprises: dept.entreprises,
      }
    };
  }

  // Détection ville
  let service = '';
  let villeSlug = '';
  for (const s of services) {
    if (slugFull.startsWith(`${s}-`)) {
      service = s;
      villeSlug = slugFull.replace(`${s}-`, '');
      break;
    }
  }

  const ville = villes[villeSlug];
  if (!service || !ville || !serviceConfig[service]) return { notFound: true };

  const config = serviceConfig[service];
  const introFn = intros[slugFull.split('').reduce((a, c) => a + c.charCodeAt(0), 0) % intros.length];
  const faqItems = selectFaq(slugFull, config.faqCats);

  const voisins = Object.entries(villes)
    .filter(([s]) => s !== villeSlug)
    .slice(0, 15)
    .map(([s, v]) => ({ slug: s, nom: v.nom }));

  return {
    props: {
      type: 'ville',
      service,
      slug: villeSlug,
      nom: ville.nom,
      anecdote: ville.anecdote,
      intro: introFn(config.label.toLowerCase(), ville.nom),
      faq: faqItems.map(f => ({ q: f.q, a: f.a })),
      voisins,
      entreprises: null,
    }
  };
};
