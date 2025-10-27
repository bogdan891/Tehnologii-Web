Number.prototype.times = function(f) {
    const value = this.valueOf();
    for (let i = 0; i < value; i++) {
        f(i);
    }
};

(3).times(() => console.log("Urmeaza statia Piata Romana cu peronul pe partea DREAPTA"));