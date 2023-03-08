const mod12 = function(n) {
    return n % 12;
}

const noteName = function(number) {
    const notes = "C C# D D# E F F# F G# A A# B".split(" ")
    return notes[mod12(number)];
}
