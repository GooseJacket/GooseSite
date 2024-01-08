//init setup
let started = false;
let list; let achievement; let year; let man; let ansYear; let ansMan;

//data (until line 66)
const Men = [
  ["Pliny the Elder", "23-79 CE", "sought to analyze historical and contemporary art in his text ‘Natural History."],
  ["Giorgio Vasari", "1511-74", "gathered biographies of great Italian artists in ‘The Lives of the Artists’"],
  ["Johann Joachim Winckelman", "1717-68", "German scholar that shifted away from Vasari and studied historical development of styles"],
  ["Sargon of Akkad", "2334 BCE", "Ruler that conquered Sumer but allowed them to keep their culture"],
  ["Hammurabi", "1792", "king of Babylonia, centralized power with his stone stele Code (now in Louvre Museum and dedicated to the sun-god Shamash."],
  ["King of Ur", "--", "Neo-Sumerian ruler after the Sumer reasserted control on the Guti"],
  ["Queen Nerfertiti", "3000-332 BCE", "Egyptian royalty who is immortalized in a portrait head"],
  ["King Tutankhamun", "3000-332 BCE", "Egyptian royalty whose famous tomb was intact until 1922, including a gold/glass/gemstone burial mask within the sarcophagus."],
  ["Giorro di Bondone", "1267-1337", "Personified the Renaissance-Gothic shift in his art. Simple perspective through overlap, characters in the round, powerful gesture and emotion."],
  ["Lorenzo Ghiberti", "1381-1455", "Won 1401 Florence door contest (with Greek figures of the sacrifice of Isaac). Made another set of doors that took 25 years, and Michelangelo called them the ‘Gates of Paradise’."],
  ["Filippo Brunelleschi", "1377-1446", "2nd in the 1401 Florence door contest. Focused on the arch and won the dome of the Florence Cathedral. It was a huge, double-shelled dome. Invented linear perspective."],
  ["Masaccio", "1401-1428", "painted in linear/aerial perspective."],
  ["Donatello", "1389-1466", "Led modern sculpture with his bronze David in 1420-60. It was the first freestanding cast nude. Liked naturalism, expressive characters, and dramatic action."],
  ["Botticelli", "1444-1510", "Birth of Venus with a long neck, first painting of a full-length nude female."],
  ["Leonardo da Vinci", "1452-1519", "Renaissance man. Inventor, scientist, architect, engineer, painter, sculptor, musician. Designed canal locks, submarines, and helicopters. Painted The Last Supper (1495-8) and the Mona Lisa (1503-5), which used sfumato."],
  ["Michelangelo di Buarotti", "1475-1564", "Renaissance man. Sculpted David in marble in 1504, placed on the high facade of the Florence Cathedral. 1505, Pope Julius II asked him to design a tomb, he made Moses, the Dying Slave, and the Bound Slave, but it was canceled. Later he painted the Sistine Chapel from 1508-12, and it was about 700 square yards."],
  ["Raphael Sanzio", "1483-1520", "Part of the High Renaissance. He was brought to Rome, where Pope Julius II commissioned him a lot. He had assistants as he worked. He made the School of Athens and Sistine Madonna."],
  ["Giorgione", "1477-1510", "In Venice. Painted landscapes, which were not taken from the Bible. Painted the Tempest in 1508."],
  ["Titian Vecelli", "1488-1576", "In Venice. Painted portraits. Greatest Renaissance colorist. Introduced tradition of curtain/column backdrops."],
  ["Tintoretto", "1518-94", "In Venice. First Mannerist, which uses distortion, acid color, and twisted proportions. Used small reference models, spiritual subjects, sharp perspectives, and chiaroscuro."],
  ["Dominikos Theotokopoulos / El Greco", "1576", "Influenced by Titian and Tint. In 1576, he left Italy and moved to Toledo Spain. He was a Mannerist, elongating his subjects. He personified the Reformation with his religious fervor and transitional style between the Renaissance and Baroque period."],
  ["Matthias Grünewald", "1475-1528", "We only have 10 works remaining. Painted religious scenes and Christ’s crucifixion. The Isenheim Altarpiece had nine panels mounted onto two folding wings."],
  ["Albrecht Dürer", "1471-1528", "Reformation Germany. Influenced by late Gothic art. Connected northern naturalistic detail with the theoretical ideals by Italians. Brought Italian ideals to Germany. Wrote about art and made woodcuts/copper engravings, like ‘The Four Horsemen of the Apocalypse’"],
  ["Hans Holbein the Younger", "1497-1543", "born in Germany but was court painter to English King Henry VIII."],
  ["Caravaggio", "1571-1610", "Italian Baroque painter, made a style of extreme lights/darks. Naturalistic, painted Virgin Mary/apostles as normal, poor people which made patrons reject the artworks"],
  ["Artemisia Gentileschi", "1593-1652", "Studied in father’s studio, painted self and Old Testament women."],
  ["Gianlorenzo Bernini", "1598-1680", "Father was a sculptor. Pope recognized at 17. Painter, sculptor, architect, draftsman. Made marble look like fabric and clouds. Sculpted the Ecstasy of St. Teresa in 1647-52, which was placed under a golden glass window on the Cornaro Chapel altar."],
  ["Peter Paul Rubens", "1577-1640", "In Flanders. Works had great energy and color."],
  ["Rembrandt van Rijn", "1606-1669", "Dutch. Painter, printmaker, draftsman. Painted Night Watch (1642), which had unequal representation (actual name: Sortie of Captain Banning Cocq’s Company of the Civic Guard). Also made self-portraits."],
  ["Louis XIV", "--", "Baroque French royalty. United France, made a lavish palace at Versailles in 1669, spanning 2 thousand acres and having a stable, orangerie, zoo, and fountains. Named the Sun King. Established the Salon (artist support system) and Academie Royal de Peinture et de Sculpture (Academy, means of standardizing style)."],
  ["Diego Veláquez", "1599-1660", "Painted for Spanish King Phillip IV. Contemporary of Bernini. Built figures from patches of color, which influenced Impressionism."],
  ["Jean-Antoine Watteau", "1684-1721", "Rococo style, made fête galante. Painted leisure time."],
  ["Francois Boucher", "1703-1770", "Court painter to Madame Pompadour and Louis XV. Painted classical myths and nubile nudes."],
  ["Jean-Honoré Fragonard", "1732-1866", "Court painter of Madame Pompadour and studied with Boucher."],
  ["Jacques Louis David", "1748-1825", "Republican virtues. Painted Oath of the Horatii. Master of Ceremonies at grand revolutionary mass rallies. Dedicated painter to Napoleon Bonaparte, and made propaganda."],
  ["Jean Dominique Ingress", "1780-1867", "Studied with David. Sharp outlines, unemotional figures, careful geometric composition, natural order (all Neoclassical)."],
  ["Eugène Delecroix", "1798-1863", "Romantic, rival to Ingress. Exotic/dramatic themes (foreign settings, animal violence, historical subjects)"],
  ["Théodore Gericault and Willima Blake", "late 1700s", "important Romantic artists"],
  ["Gustave Courbet", "1819-77", "flamboyant/outgoing, outraged audiences with The Stonebreakers at the Salon. Realist."],
  ["Honoré Daumier and Jean Francois Millet", "early 1800s", "important Realist artists"],
  ["Édouard Manet", "1832-83", "First Impressionist, but hated the name. Bright, contrasting colors. Painted Le Dejéuner sur L’Herbe / Luncheon on the Grass in 1863, which was in the Salon des Regusés. Rejected by ‘official’ Salon. Showed contemporary clothed men with nude women."],
  ["Claude Monet", "1840-1926", "Impression, Sunrise. Pushed artists to work outdoors and put colors directly on canvas. Shadows had complementary color."],
  ["Camille Pissarro and Alfred Sisley", "Mid-to-late 1800s", "important Impressionist artists."],
  ["Paul Cézanne", "1839-1906", "Hated Impressionism. Focused on form, established foreground, midground, and background. Reduced objects into cubes, spheres, etc. Influenced Cubism in early twenties."],
  ["Georges Seurat", "1859-91", "Emphasized scientific color. Painted in small dots. Post-Impressionist."],
  ["Vincent van Gogh", "1853-90", "Dutch. Painted in souther France with contrasting colors. Colors should not imitate real life but portray human emotions. Painted Night Cafe."],
  ["Paul Gauguin", "1848-1903", "Stockbroker, left wife and family in his forties to pursue art. Worked with van Gogh but wanted an unschooled style. Went to Tahiti."],
  ["Edgar Degas", "1834-1917", "Combined snapshot-style of photography with a Japanese-like perspective from slightly above a subject."],
  ["Henri Matisse", "1869-1954", "Post-Impressionist. Led artists to use intense colors that critics hated. Inspired by van Gogh and used arbitrary color, group called ‘fauves’/’wild beasts’."],
  ["Pablo Picasso and Georges Braque", "1900s", "important Cubist artists. Overlapped perspectives and used abstract figures. The first painted Les Demoiselles d’ Avignon and made ready-mades."],
  ["Ernst Ludwig Kirchner und Emil Nolde", "Early 1900s", "part of die Brücke. Combined the Fauvists’ brilliant arbitrary colors with Edvard Munch’s works’ intense feelings. Expressionists."],
  ["Vasily Kandinsky", "Early 1900s", "Russian. Led der Blaue Reiter. Completely abstract pictures. Expressionist."],
  ["Kazimir Malevich and Piet Mondrian", "Early 1900s", "Abstractionists, the second of which made De Stijl canvases."],
  ["Marcel Duchamp", "1887-1968", "Painted Nude Descending a Staircase (1912). Dada artist. Added a mustache to the Mona Lisa (LHOOO, 1919) and presented a urinal (Fountain, 1917). Invented ready-mades."],
  ["Brancusi", "1876-1957", "Painted The Kiss, with block-like figures."],
  ["Sigmund Freud", "--", "Influenced artists with theories about the inner workings of the mind, leading to Surrealism."],
  ["Salvador Dalí, René Magritte, and Joahn Miró", "Early 1900s", "important Surrealist artists."],
  ["Josef Albers", "1888-1976", "Painter, graphic artist, and designer. Taught in the US after the Nazis shut down Bauhaus in 1933. Famous color field artist."],
  ["Harold Rosenberg and Clement Greenberg", "1950s", "Art critics in New York. The second promoted abstractism."],
  ["Willem de Kooning, Lee Krasner, Mark Rothko, and Franz Kline", "Mid-1900s", "important Abstract Expressionist artists. Aimed to present feeling through dramatic colors and sweeping brushstrokes."],
  ["Jackson Pollock", "1912-56", "AbEx artist. Abandoned a paintbrush and dripped paint onto the canvas (an Action Painting). "],
  ["Jasper Johns", "1930", "Made works with common things (flags, numbers, etc.)"],
  ["Robert Rauschenberg", "1925-2008", "Cast-off objects became ‘combines’. Hung bedclothes on a wall and painted them (Bed, 1955), goat + tire + shoe heel + tennis ball + police barrier (Monogram, 1959)"],
  ["Andy Warhol", "1928-87", "Icon of Pop Art. Soup cans & Brillo boxes silkscreens."],
  ["Roy Lichtenstein", "1923-97", "Comic book style pop artist."],
  ["Robert Indiana", "1928-2018", "Used commercial sign stencils for pop art"],
  ["Franz Stella", "1936", "Most famous minimalist acrylic, non-objective, hard-edge painter."],
  ["David Smith and Dan Flavin", "1960s", "important abstract Minimalist sculptors (former: stainless steel, latter: neon tubing)."],
  ["Chuck Close and Duane Hanson", "Late 1900s", "important Photorealist artists (former: portraitist, latter: sculptor). Inspired by Gustave Courbet."],
  ["Christo and Jeanne-Claude", "1970s", "Made Earthworks/Land art/Enviromental art. Wrapped monuments in fabric, built 24mi cloth fence in CA, surrounded 11 Florida islands with pink plastic, set up orange fabric gates in Central Park."],
  ["Michael Heizer and Robert Smithson", "1970s", "important Earthworks artists."],
  ["Guerrilla Girls", "1985", "Anonymous, all-girl New York Performance Art group that wear gorilla masks and use guerrilla-warfare tactics. Art isn’t just for white men."],
  ["Philip Johnson", "1906-2005", "At one time was the leading modern architect of the International Style. In 1970, suggested that one of the functions of art is decoration, and added a finial to the top of the AT&T Building/550 Madison Avenue."],
];

//easy python version of math.random
function random(max) {return Math.floor(max * Math.random());}

function randomChoice(which){
  let items = getItems(which);
  let rand = random(items.length);
  return items[rand];
}

//generates a prompt by randomly pulling a sentence starter, adjective, article, and noun
function generatePrompt(){
  if(started){
    achievement = ""; year = ""; man = ""; list = Men;

    //decide man
    let randomBook = list[random(list.length)];
    achievement = randomBook[2]; year = randomBook[1]; man = randomBook[0];
  }
}

//responds to user input
function runRound(){
  let resultText = "";
  if (ansYear == year){
    resultText = "Good job with the year, " + year + "! ";
    ansYear == "";
  }else{
    resultText = "The year was " + year + ". ";
    ansYear == "";
  }
  if(ansMan == man){
    resultText += "Good job on the man! It was " + man;
    ansMan = "";
  }else{
    resultText += "It was actually " + man;
    ansMan = "";
  }
  window.alert(resultText);
}
window.onload = function() {
  generatePrompt();
}

$(document).ready(function(){
  $("#sub").click(function(){
    if(started){
      window.alert("Successfully started :D");
      ansYear = document.getElementById('inp').value
      ansMan = $('input[type="radio"][name="artist"]:checked').val();
      runRound();
      
    } else started = true;
    generatePrompt();
    $("#title").text(achievement);
    $("#inp").val("");
    $("#sub").val("Submit");
    let fakeMen = [Men[Math.random() * Men.length] for i in range(0,3)];
    for i in range(1,3){
      let check = [i for i in fakemen];
      check.pop(fakeMen[i]);
      while fakeMen[i] in check{fakeMen[i] = Math.random() * Men.length;}
    }
    fakeMen.push(man);
    fakeMen.sort();
    for(let i = 0; i < 4; i++){
      document.getElementById("a"+i.toString()).checked = false;
      document.getElementById("a"+i.toString()).value = fakeMen[i];
    }
  });
});
