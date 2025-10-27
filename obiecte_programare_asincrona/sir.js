class EvenSequence {
    constructor(start) {
        if (start % 2 != 0) throw new Error("Invalid input!");
        this.value = start;
    }
    next() {
        this.value += 2;
        return this.value;
    }
}

//Valoare para
const seq1 = new EvenSequence(6);
console.log(seq1);
console.log(seq1.next());
console.log(seq1.next());

//Valoare impara
const seq2 = new EvenSequence(3);
console.log(seq2);