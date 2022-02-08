let noun1 = ["The pig", "The duck","An emo kid", "Suzy down the street", "Michael Jordan", "Ronald Mcdonald", "Daffy Duck","A baby","The Mailman"]
let verb = ["ran over","Fell in love with","Married","Killed","fought","cooked dinner for","cleaned up after","read a bedtime story to","fought","kissed"]
let noun2 = ["Dolly Parton","Miley Cyrus", "Justin Beiber","A priest","A police officer","Some random dude","themself","Patrick Mahomes","Michael Jackson's son Blanket","Minnie Mouse","Shaq","Aunt Jemima","Tom Brady","My wife","your wife","your mom"]
let why = ["they were angry", "they were jealous", "they didnt like the look they received when they walked in the door","they secretly wanted to marry them","they knew they would never be as good as them","they didnt get their morning coffee","they were on acid and saw their face as a demon","they were posessed by an ancient ghost from the civil war","they felt like it"]

let a = Math.floor(Math.random() * noun1.length)
let b = Math.floor(Math.random() * verb.length)
let c = Math.floor(Math.random() * noun2.length)
let d = Math.floor(Math.random() * why.length)

document.write(`${noun1[a]} ${verb[b]} ${noun2[c]} because ${why[d]} `)
//console.log();
