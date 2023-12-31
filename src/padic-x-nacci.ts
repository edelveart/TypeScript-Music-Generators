import { pAdicValuation, pAdicNorm, pAdicExpansionMusic, pAdicExpansionMusicArithmetic } from "./padic-music-expansions";

export function* fibonacci(): Generator<number> {
    let [a, b] = [0, 1];
    while (true) {
        yield a;
        [a, b] = [b, a + b];
    }
}

export function* tribonacci(): Generator<number> {
    let [a, b, c] = [0, 0, 1];
    while (true) {
        yield b;
        [a, b, c] = [c, a, a + b + c];
    }
}

export function* tetranacci(): Generator<number> {
    let [a, b, c, d] = [0, 0, 0, 1];
    while (true) {
        yield c;
        [a, b, c, d] = [d, a, b, a + b + c + d];
    }
}

export function* pentanacci(): Generator<number> {
    let [a, b, c, d, e] = [0, 0, 0, 0, 1];
    while (true) {
        yield d;
        [a, b, c, d, e] = [e, a, b, c, a + b + c + d + e];
    }
}

export function* hexanacci(): Generator<number> {
    let [a, b, c, d, e, f] = [0, 0, 0, 0, 0, 1];
    while (true) {
        yield e;
        [a, b, c, d, e, f] = [f, a, b, c, d, a + b + c + d + e + f];
    }
}

export function* heptanacci(): Generator<number> {
    let [a, b, c, d, e, f, g] = [0, 0, 0, 0, 0, 0, 1];
    while (true) {
        yield f;
        [a, b, c, d, e, f, g] = [g, a, b, c, d, e, a + b + c + d + e + f + g];
    }
}

export function* octanacci(): Generator<number> {
    let [a, b, c, d, e, f, g, h] = [0, 0, 0, 0, 0, 0, 0, 1];
    while (true) {
        yield g;
        [a, b, c, d, e, f, g, h] = [h, a, b, c, d, e, f, a + b + c + d + e + f + g + h];
    }
}

export function* enneanacci(): Generator<number> {
    let [a, b, c, d, e, f, g, h, i] = [0, 0, 0, 0, 0, 0, 0, 0, 1];
    while (true) {
        yield h;
        [a, b, c, d, e, f, g, h, i] = [i, a, b, c, d, e, f, g, a + b + c + d + e + f + g + h + i];
    }
}

export function* modularFibonacci(modulo: number): Generator<number> {
    let [a, b] = [0, 1];
    while (true) {
        yield a;
        [a, b] = [b, (a + b) % modulo];
    }
}

export function* modularTribonacci(modulo: number): Generator<number> {
    let [a, b, c] = [0, 0, 1];
    while (true) {
        yield b;
        [a, b, c] = [c, a, (a + b + c) % modulo];
    }
}

export function* modularTetranacci(modulo: number): Generator<number> {
    let [a, b, c, d] = [0, 0, 0, 1];
    while (true) {
        yield c;
        [a, b, c, d] = [d, a, b, (a + b + c + d) % modulo];
    }
}

export function* modularPentanacci(modulo: number): Generator<number> {
    let [a, b, c, d, e] = [0, 0, 0, 0, 1];
    while (true) {
        yield d;
        [a, b, c, d, e] = [e, a, b, c, (a + b + c + d + e) % modulo];
    }
}

export function* modularHexanacci(modulo: number): Generator<number> {
    let [a, b, c, d, e, f] = [0, 0, 0, 0, 0, 1];
    while (true) {
        yield e;
        [a, b, c, d, e, f] = [f, a, b, c, d, (a + b + c + d + e + f) % modulo];
    }
}

export function* modularHeptanacci(modulo: number): Generator<number> {
    let [a, b, c, d, e, f, g] = [0, 0, 0, 0, 0, 0, 1];
    while (true) {
        yield f;
        [a, b, c, d, e, f, g] = [g, a, b, c, d, e, (a + b + c + d + e + f + g) % modulo];
    }
}

export function* modularOctanacci(modulo: number): Generator<number> {
    let [a, b, c, d, e, f, g, h] = [0, 0, 0, 0, 0, 0, 0, 1];
    while (true) {
        yield g;
        [a, b, c, d, e, f, g, h] = [h, a, b, c, d, e, f, (a + b + c + d + e + f + g + h) % modulo];
    }
}

export function* modularEnneanacci(modulo: number): Generator<number> {
    let [a, b, c, d, e, f, g, h, i] = [0, 0, 0, 0, 0, 0, 0, 0, 1];
    while (true) {
        yield h;
        [a, b, c, d, e, f, g, h, i] = [i, a, b, c, d, e, f, g, (a + b + c + d + e + f + g + h + i) % modulo];
    }
}

export function* padicFibonacci(baseNumber: number): Generator<number> {
    let [a, b] = [0, 1];
    while (true) {
        yield pAdicValuation(a, baseNumber);
        [a, b] = [b, a + b];
    }
}

export function* padicTribonacci(baseNumber: number): Generator<number> {
    let [a, b, c] = [0, 0, 1];
    while (true) {
        yield pAdicValuation(b, baseNumber);
        [a, b, c] = [c, a, a + b + c];
    }
}

export function* padicTetranacci(baseNumber: number): Generator<number> {
    let [a, b, c, d] = [0, 0, 0, 1];
    while (true) {
        yield pAdicValuation(c, baseNumber);
        [a, b, c, d] = [d, a, b, a + b + c + d];
    }
}

export function* padicPentanacci(baseNumber: number): Generator<number> {
    let [a, b, c, d, e] = [0, 0, 0, 0, 1];
    while (true) {
        yield pAdicValuation(d, baseNumber);
        [a, b, c, d, e] = [e, a, b, c, a + b + c + d + e];
    }
}

export function* padicHexanacci(baseNumber: number): Generator<number> {
    let [a, b, c, d, e, f] = [0, 0, 0, 0, 0, 1];
    while (true) {
        yield pAdicValuation(e, baseNumber);
        [a, b, c, d, e, f] = [f, a, b, c, d, a + b + c + d + e + f];
    }
}

export function* padicHeptanacci(baseNumber: number): Generator<number> {
    let [a, b, c, d, e, f, g] = [0, 0, 0, 0, 0, 0, 1];
    while (true) {
        yield pAdicValuation(f, baseNumber);
        [a, b, c, d, e, f, g] = [g, a, b, c, d, e, a + b + c + d + e + f + g];
    }
}

export function* padicOctanacci(baseNumber: number): Generator<number> {
    let [a, b, c, d, e, f, g, h] = [0, 0, 0, 0, 0, 0, 0, 1];
    while (true) {
        yield pAdicValuation(g, baseNumber);
        [a, b, c, d, e, f, g, h] = [h, a, b, c, d, e, f, a + b + c + d + e + f + g + h];
    }
}

export function* padicEnneanacci(baseNumber: number): Generator<number> {
    const initial: number[] = Array(9).fill(0);
    initial[9 - 1] = 1;
    let [a, b, c, d, e, f, g, h, i] = initial;
    while (true) {
        yield pAdicValuation(h, baseNumber);
        [a, b, c, d, e, f, g, h, i] = [i, a, b, c, d, e, f, g, a + b + c + d + e + f + g + h + i];
    }
}

export function* normPadicFibonacci(baseNumber: number): Generator<number> {
    let [a, b] = [0, 1];
    while (true) {
        yield pAdicNorm(a, baseNumber);
        [a, b] = [b, a + b];
    }
}

export function* normPadicTribonacci(baseNumber: number): Generator<number> {
    let [a, b, c] = [0, 0, 1];
    while (true) {
        yield pAdicNorm(b, baseNumber);
        [a, b, c] = [c, a, a + b + c];
    }
}

export function* normPadicTetranacci(baseNumber: number): Generator<number> {
    let [a, b, c, d] = [0, 0, 0, 1];
    while (true) {
        yield pAdicNorm(c, baseNumber);
        [a, b, c, d] = [d, a, b, a + b + c + d];
    }
}

export function* normPadicPentanacci(baseNumber: number): Generator<number> {
    let [a, b, c, d, e] = [0, 0, 0, 0, 1];
    while (true) {
        yield pAdicNorm(d, baseNumber);
        [a, b, c, d, e] = [e, a, b, c, a + b + c + d + e];
    }
}

export function* normPadicHexanacci(baseNumber: number): Generator<number> {
    let [a, b, c, d, e, f] = [0, 0, 0, 0, 0, 1];
    while (true) {
        yield pAdicNorm(e, baseNumber);
        [a, b, c, d, e, f] = [f, a, b, c, d, a + b + c + d + e + f];
    }
}

export function* normPadicHeptanacci(baseNumber: number): Generator<number> {
    let [a, b, c, d, e, f, g] = [0, 0, 0, 0, 0, 0, 1];
    while (true) {
        yield pAdicNorm(f, baseNumber);
        [a, b, c, d, e, f, g] = [g, a, b, c, d, e, a + b + c + d + e + f + g];
    }
}

export function* normPadicOctanacci(baseNumber: number): Generator<number> {
    let [a, b, c, d, e, f, g, h] = [0, 0, 0, 0, 0, 0, 0, 1];
    while (true) {
        yield pAdicNorm(g, baseNumber);
        [a, b, c, d, e, f, g, h] = [h, a, b, c, d, e, f, a + b + c + d + e + f + g + h];
    }
}

export function* normPadicEnneanacci(baseNumber: number): Generator<number> {
    const initial: number[] = Array(9).fill(0);
    initial[9 - 1] = 1;
    let [a, b, c, d, e, f, g, h, i] = initial;
    while (true) {
        yield pAdicNorm(h, baseNumber);
        [a, b, c, d, e, f, g, h, i] = [i, a, b, c, d, e, f, g, a + b + c + d + e + f + g + h + i];
    }
}

export function* pAdicExpansionFibonacci(baseNumber: number, precision: number = 11): Generator<number[]> {
    let [a, b] = [0, 1];
    while (true) {
        yield pAdicExpansionMusic(a, baseNumber, precision);
        [a, b] = [b, a + b];
    }
}

export function* pAdicExpansionTribonacci(baseNumber: number, precision: number = 11): Generator<number[]> {
    let [a, b, c] = [0, 0, 1];
    while (true) {
        yield pAdicExpansionMusic(b, baseNumber, precision);
        [a, b, c] = [c, a, a + b + c];
    }
}

export function* pAdicExpansionTetranacci(baseNumber: number, precision: number = 11): Generator<number[]> {
    let [a, b, c, d] = [0, 0, 0, 1];
    while (true) {
        yield pAdicExpansionMusic(c, baseNumber, precision);
        [a, b, c, d] = [d, a, b, a + b + c + d];
    }
}

export function* pAdicExpansionPentanacci(baseNumber: number, precision: number = 11): Generator<number[]> {
    let [a, b, c, d, e] = [0, 0, 0, 0, 1];
    while (true) {
        yield pAdicExpansionMusic(d, baseNumber, precision);
        [a, b, c, d, e] = [e, a, b, c, a + b + c + d + e];
    }
}

export function* pAdicExpansionHexanacci(baseNumber: number, precision: number = 11): Generator<number[]> {
    let [a, b, c, d, e, f] = [0, 0, 0, 0, 0, 1];
    while (true) {
        yield pAdicExpansionMusic(e, baseNumber, precision);
        [a, b, c, d, e, f] = [f, a, b, c, d, a + b + c + d + e + f];
    }
}

export function* pAdicExpansionHeptanacci(baseNumber: number, precision: number = 11): Generator<number[]> {
    let [a, b, c, d, e, f, g] = [0, 0, 0, 0, 0, 0, 1];
    while (true) {
        yield pAdicExpansionMusic(f, baseNumber, precision);
        [a, b, c, d, e, f, g] = [g, a, b, c, d, e, a + b + c + d + e + f + g];
    }
}

export function* pAdicExpansionOctanacci(baseNumber: number, precision: number = 11): Generator<number[]> {
    let [a, b, c, d, e, f, g, h] = [0, 0, 0, 0, 0, 0, 0, 1];
    while (true) {
        yield pAdicExpansionMusic(g, baseNumber, precision);
        [a, b, c, d, e, f, g, h] = [h, a, b, c, d, e, f, a + b + c + d + e + f + g + h];
    }
}

export function* pAdicExpansionEnneanacci(baseNumber: number, precision: number = 11): Generator<number[]> {
    const initial: number[] = Array(9).fill(0);
    initial[9 - 1] = 1;
    let [a, b, c, d, e, f, g, h, i] = initial;
    while (true) {
        yield pAdicExpansionMusic(h, baseNumber, precision);
        [a, b, c, d, e, f, g, h, i] = [i, a, b, c, d, e, f, g, a + b + c + d + e + f + g + h + i];
    }
}



export function* pAdicExpansionFibonacciArithmetic(baseNumber: number, precision: number = 11): Generator<number[]> {
    let [a, b] = [0, 1];
    while (true) {
        yield pAdicExpansionMusicArithmetic(a, baseNumber, precision);
        [a, b] = [b, a + b];
    }
}

export function* pAdicExpansionTribonacciArithmetic(baseNumber: number, precision: number = 11): Generator<number[]> {
    let [a, b, c] = [0, 0, 1];
    while (true) {
        yield pAdicExpansionMusicArithmetic(b, baseNumber, precision);
        [a, b, c] = [c, a, a + b + c];
    }
}

export function* pAdicExpansionTetranacciArithmetic(baseNumber: number, precision: number = 11): Generator<number[]> {
    let [a, b, c, d] = [0, 0, 0, 1];
    while (true) {
        yield pAdicExpansionMusicArithmetic(c, baseNumber, precision);
        [a, b, c, d] = [d, a, b, a + b + c + d];
    }
}

export function* pAdicExpansionPentanacciArithmetic(baseNumber: number, precision: number = 11): Generator<number[]> {
    let [a, b, c, d, e] = [0, 0, 0, 0, 1];
    while (true) {
        yield pAdicExpansionMusicArithmetic(d, baseNumber, precision);
        [a, b, c, d, e] = [e, a, b, c, a + b + c + d + e];
    }
}

export function* pAdicExpansionHexanacciArithmetic(baseNumber: number, precision: number = 11): Generator<number[]> {
    let [a, b, c, d, e, f] = [0, 0, 0, 0, 0, 1];
    while (true) {
        yield pAdicExpansionMusic(e, baseNumber, precision);
        [a, b, c, d, e, f] = [f, a, b, c, d, a + b + c + d + e + f];
    }
}

export function* pAdicExpansionHeptanacciArithmetic(baseNumber: number, precision: number = 11): Generator<number[]> {
    let [a, b, c, d, e, f, g] = [0, 0, 0, 0, 0, 0, 1];
    while (true) {
        yield pAdicExpansionMusicArithmetic(f, baseNumber, precision);
        [a, b, c, d, e, f, g] = [g, a, b, c, d, e, a + b + c + d + e + f + g];
    }
}

export function* pAdicExpansionOctanacciArithmetic(baseNumber: number, precision: number = 11): Generator<number[]> {
    let [a, b, c, d, e, f, g, h] = [0, 0, 0, 0, 0, 0, 0, 1];
    while (true) {
        yield pAdicExpansionMusicArithmetic(g, baseNumber, precision);
        [a, b, c, d, e, f, g, h] = [h, a, b, c, d, e, f, a + b + c + d + e + f + g + h];
    }
}

export function* pAdicExpansionEnneanacciArithmetic(baseNumber: number, precision: number = 11): Generator<number[]> {
    const initial: number[] = Array(9).fill(0);
    initial[9 - 1] = 1;
    let [a, b, c, d, e, f, g, h, i] = initial;
    while (true) {
        yield pAdicExpansionMusicArithmetic(h, baseNumber, precision);
        [a, b, c, d, e, f, g, h, i] = [i, a, b, c, d, e, f, g, a + b + c + d + e + f + g + h + i];
    }
}
