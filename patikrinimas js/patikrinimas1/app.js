function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

///1.
const kauliukas1 = rand(1, 6);
const kauliukas2 = rand(1, 6);
console.log(kauliukas1, kauliukas2);

if (kauliukas1 + kauliukas2 > 8) {
    console.log('Kauliuku suma:' + (kauliukas1 + kauliukas2) + ', daugiau nei 8. Laimėjote');
} else {
    console.log('Kauliuku suma:' + (kauliukas1 + kauliukas2) + ', mažiau arba 8. Murklys');
}

// 2.

const Pilkis = rand(3, 6);
const Murklys = rand(3, 6);
console.log('Katino Pilkio svoris: ' + Pilkis);
console.log('Katino Murklio svoris: ' + Murklys);
if (Pilkis == Murklys) {
    console.log('katinukų svoriai vienodi');
} else if (Pilkis < Murklys) {
    console.log('Katinas Murklys sunkesnis');
} else {
    console.log('Katinas Pilkis sunkesnis');
}

//3.

const KatinuVlatis = rand(0, 30);
const KarviuValtis = rand(0, 30);

console.log('Kates: ' + KatinuVlatis + ' Kates: ' + KarviuValtis);
if (KatinuVlatis <= 15 && KarviuValtis <= 15) {
    console.log('Telpa');
} else {
    console.log('Netelpa');
}

//4.

const AntanoKauliukas = rand(1, 6);
console.log('Antanas išrydeno: ' + AntanoKauliukas);
if (AntanoKauliukas == 1 || AntanoKauliukas == 5) {
    console.log('Perkamas Televizorius');
} else if (AntanoKauliukas == 3 || AntanoKauliukas == 4) {
    console.log('Perkama Skalbimo mašina');
} else {
    console.log('Perkamas Šaldytuvas');
}

//5.

const k1 = rand(1, 7);
const k2 = rand(1, 7);
const k3 = rand(1, 7);

console.log('kintamieji: ' + k1 + ' ' + k2 + ' ' + k3);

if (k1 > k2 || k1 > k3) {
    if (k1 > k2 && k1 > k3) {
        if (k2 > k3) {
            didziausias = k1;
            maziausias = k3;
            vid = k2;
        } else {
            didziausias = k1;
            maziausias = k2;
            vid = k3;
        }
    } else if (k2 > k3) {
        didziausias = k2;
        maziausias = k3;
        vid = k1;
    } else {
        didziausias = k3;
        maziausias = k2;
        vid = k1;
    }
} else if (k2 > k3) {
    maziausias = k1;
    didziausias = k2;
    vid = k3;
} else {
    maziausias = k1;
    vid = k2;
    didziausias = k3;
}
console.log('Tvarka: ' + maziausias + ' ' + vid + ' ' + didziausias);
